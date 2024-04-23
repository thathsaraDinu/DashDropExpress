const express = require('express');
const Employee = require('../models/EmpoyeeModel');

const router = express.Router();

//add employee
router.post('/', async (req, res) => {
  const { firstname, lastname, email, role } = req.body;

  try {
    let employee = new Employee({
      firstname,
      lastname,
      email,
      role,
    });

    await employee.save();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
  res.status(200).json({ msg: 'success' });
});

//get all employees
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
});

//get employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// add employee salary
router.post('/salary/:id', async (req, res) => {
  const { salary } = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { salary, confirmationDate: new Date() }, // Update confirmationDate field
      { new: true }
    );

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


//delete employee salary
router.delete('/salary/:id', async (req, res) => {
  try {
    let employee = await Employee.findById(req.params.id);
    employee.salary = null;
    employee.save();
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
