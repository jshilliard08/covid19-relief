const { Patient } = require('../models');

const patientData = [
    {
      name: "Sarah",
      email: "sarah@hotmail.com",
      cell_phone: "9737265543"
      
    },
    {
      name: "Lenny",
      email: "lenny@gmail.com",
      cell_phone: "8622667643"
    },
    {
      name: "Andrew",
      email: "andrew@aol.com",
      cell_phone: "2019456342"
    }
  ]
  
  const seedPatients = () => Patient.bulkCreate(patientData);

  module.exports = seedPatients;