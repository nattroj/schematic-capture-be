const router = require('express').Router();

// middleware
const { getUserInfo, getUserOrganizations } = require('../../middleware/users');

const { Clients, Projects } = require('../../../data/models');
const { reqToDb, dbToRes } = require('../../../utils');

router.get('/', async (req, res) => {
  const { email } = req.decodedIdToken;


  try {

    let clients = await Clients.findByOrganization({ user_email: email });
    clients = clients.map(client => dbToRes(client));
    res.status(200).json(clients);

  } catch (error) {

    res.status(500).json({ error: error.message, step: '/' })

  }
});

router.get('/:id/projects', (req, res) => {
  const clientId = Number(req.params.id);

  Projects
    .findBy(reqToDb({ clientId }))
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ error: error.message, step: '/' }));
});

router.post('/:id/projects', getUserOrganizations, async (req, res) => {
  const clientId = Number(req.params.id)

  try {
    const clients = await Clients.findByMultiple('organization_id', req.userOrganizations);
    console.log(clients);

    if (!clients.map(client => client.id).includes(clientId)) {
      return res.status(400).json({ message: 'client not associated with this user' })
    }

    const projectData = req.body;
    projectData.clientId = clientId;
    
    const project = await Projects.add(reqToDb(projectData));

    res.status(201).json(project);

  } catch (error) {
      return res.status(500).json({ error: error.message, step: '/:id/projects' })
  }
});

router.post('/create', getUserInfo, (req, res) => {
  const clientData = req.body;
  const [organization] = req.userInfo.organizations;
  clientData.organizationId = organization.id;

  Clients
    .add(reqToDb(clientData))
    .then(client => res.status(201).json(client))
    .catch(error => res.status(500).json({ error: error.message, step: '/create' }));
});



module.exports = router;