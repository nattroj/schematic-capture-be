const router = require("express").Router();
const jwt = require("jsonwebtoken");

const { firebase } = require("../../../utils");
const { Users } = require("../../../data/models");
const { FBauth, validateInvitation } = require("../../middleware");

const {
    validateSignupData,
    validateLoginData
} = require("../../middleware/validation");

router.post("/register/:invite_token", validateInvitation, async (req, res) => {
    const newUser = req.body;
    const { email, password } = newUser;

    newUser.role_id = req.invite.role_id;
    newUser.organization_id = req.invite.organization_id;

    let uid;

    const { valid, errors } = validateSignupData(newUser);
    if (!valid) return res.status(400).json(errors);

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            newUser.id = data.user.uid;

            return data.user.getIdToken();
        })
        .then(token => {
            delete newUser.password;
            delete newUser.confirmPassword;
            delete newUser.invite_token;

            Users.add(newUser)
                .then(user => {
                    return res.status(201).json({ user, token });
                })
                .catch(error => {
                    // TODO add firebase cleanup on unsuccessful insert to the database.
                    res.status(500).json({ error: error.message });
                });
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    let uid;

    const { valid, errors } = validateLoginData(req.body);
    if (!valid) return res.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            uid = data.user.uid;
            return data.user.getIdToken();
        })
        .then(token => {
            return Users.findBy({ "users.id": uid })
                .first()
                .then(user => {
                    return res.status(200).json({ user, token });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => {
            if (error.code === "auth/wrong-password") {
                return res.status(403).json({
                    general:
                        "Incorrect Username/Password combination. Please try again."
                });
            } else if (error.code === "auth/user-not-found") {
                return res
                    .status(403)
                    .json({ general: "User not found in system" });
            } else if (error.code === "auth/invalid-email") {
                return res
                    .status(403)
                    .json({ general: "Invalid Email input." });
            } else {
                console.log(error);
                return res.status(500).json({ error: error.code });
            }
        });
});

router.post("/forgotPassword", (req, res) => {
    const { email } = req.body;
    const auth = firebase.auth();

    auth.sendPasswordResetEmail(email)
        .then(() => {
            return res.status(200).json({
                success:
                    "Please check your inbox for the password reset e-mail."
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({ error });
        });
});

router.post("/changeEmail", FBauth, (req, res) => {
    const { newEmail } = req.body;
    const user = firebase.auth().currentUser;

    user.updateEmail(newEmail)
        .then(() => {
            return res.status(200).json({
                success: `Your email address has been changed to ${newEmail}`
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "Unable to update email address." });
        });
});

router.post("/invite", FBauth, async (req, res) => {
    const { organization_id } = await Users.findBy({
        "users.id": req.uid
    }).first();
    const { role_id } = req.body;

    const contents = { organization_id, role_id };

    const token = signInvite(contents);

    res.status(200).json({ token });
});

function signInvite(contents) {
    const secret = process.env.INVITE_SECRET;
    const options = { expiresIn: "1hr" };

    return jwt.sign(contents, secret, options);
}

module.exports = router;
