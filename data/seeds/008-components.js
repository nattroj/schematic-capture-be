exports.seed = function(knex) {
  return knex("components").insert([
    {"jobsheet_id": 1,
      "component_id": "1",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Electric Motor",
      "manufacturer": "Baldor",
      "part_number": "284TC",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This electric motor is the input power for the hydraulic system, turning pump 2 at 1680 rpm.",
      "reference_tag": "",
      "settings": "",
      "image": "1.jpg",
      "resources": "E099.mp4",
      "cutsheet": "Baldor ElectricMotor284TC.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "2",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Pump, Axial Piston",
      "manufacturer": "Vickers",
      "part_number": "PVM074ER09GS02AA-28",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This pressure compensated axial piston pump provides flow and pressure to all components, including actuators, in the J1 hydraulic system.",
      "reference_tag": "",
      "settings": "",
      "image": "2.jpg",
      "resources": "H034.mp4",
      "cutsheet": "Vickers PVM AxialPistonPump.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "3",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the inlet of pump 2 from the hydraulic reservoir.",
      "reference_tag": "",
      "settings": "",
      "image": "3.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "4",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Level Gauge",
      "manufacturer": "Lenz",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This reservoir level gauge gives a visual indication of the amount of hydraulic fluid in the reservoir.",
      "reference_tag": "",
      "settings": "",
      "image": "4.jpg",
      "resources": "H213.mp4",
      "cutsheet": "Lenz Level Gauge.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "5",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Return Line Filter",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This in tank return line filter is the primary source of contamination control, filtering all system contamination from entering the reservoir.",
      "reference_tag": "",
      "settings": "",
      "image": "5.jpg",
      "resources": "H145.mp4",
      "cutsheet": "HYDAC Return Filter.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "6",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Breather",
      "manufacturer": "Parker",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This desiccant breather protects the reservoir from airborn particulate and moisture.",
      "reference_tag": "",
      "settings": "",
      "image": "6.jpg",
      "resources": "H143.mp4",
      "cutsheet": "Parker Dessicant Breather.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "7",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Venting Relief Valve",
      "manufacturer": "Rexroth",
      "part_number": "DBW 10 A2-30/315UG24NZ5L",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This venting relief valve gives system protection from over-pressurization, as well as venting the pump flow to the reservoir for fluid conditioning when the system is offline.",
      "reference_tag": "",
      "settings": "",
      "image": "7.jpg",
      "resources": "H301.mp4",
      "cutsheet": "rr68a.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "8",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Heat Exchanger, Tube and Shell",
      "manufacturer": "Thermal Transfer",
      "part_number": "EK 500-0",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This tube and shell heat exchanger cools the fluid as it returns to the reservoir.",
      "reference_tag": "",
      "settings": "",
      "image": "8.jpg",
      "resources": "H153.mp4",
      "cutsheet": "ThermTransHeatExchEK-Series.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.1",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the pressure line of the lift table manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.1.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.2",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the tank line of the lift table manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.2.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.3",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the pressure line of the respective manifold, currently not in use.",
      "reference_tag": "",
      "settings": "",
      "image": "9.3.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.4",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the tank line of the respective manifold, currently not in use.",
      "reference_tag": "",
      "settings": "",
      "image": "9.4.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.5",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the pressure line of the pipe kickers manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.5.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.6",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the tank line of the pipe kickers manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.6.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.7",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the pressure line of the cleanout brush manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.7.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "9.8",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "Ball Valve",
      "manufacturer": "Hydac",
      "part_number": "Not Provided",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This ball valve isolates the tank line of the cleanout brush manifold.",
      "reference_tag": "",
      "settings": "",
      "image": "9.8.jpg",
      "resources": "H098.mp4",
      "cutsheet": "Hydac BallValve.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.1",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to extend or retract hydraulic cylinder 13.1.",
      "reference_tag": "",
      "settings": "",
      "image": "10.1.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.2",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to extend or retract hydraulic cylinder 13.2.",
      "reference_tag": "",
      "settings": "",
      "image": "10.2.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.3",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to its respective manifold actuators, currently not in use.",
      "reference_tag": "",
      "settings": "",
      "image": "10.3.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.4",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to its respective manifold actuators, currently not in use.",
      "reference_tag": "",
      "settings": "",
      "image": "10.4.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.5",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to extend or retract hydraulic cylinders 13.3 and 13.4.",
      "reference_tag": "",
      "settings": "",
      "image": "10.5.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.6",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to extend or retract hydraulic cylinders 13.5 and 13.6.",
      "reference_tag": "",
      "settings": "",
      "image": "10.6.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
  },
  {"jobsheet_id": 1,
      "component_id": "10.7",
      "rl_category": "",
      "rl_number": "",
      "descriptions": "3-Pos, 4-Way Directional Control Valve",
      "manufacturer": "Eaton",
      "part_number": "DG4S4-016C-U-H-60",
      "stock_code": "",
      "electrical_address": "",
      "component_application": "This 3-position, 4-way, float-centered directional control valve provides directional flow to extend or retract hydraulic cylinder 13.7.",
      "reference_tag": "",
      "settings": "",
      "image": "10.7.jpg",
      "resources": "H088.mp4",
      "cutsheet": "Eaton DCV DG4SA.pdf",
      "maintenance_video": "",
      "store_part_number": "Not Provided"
    },
  ]);
};