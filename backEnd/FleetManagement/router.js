const express=require('express');
const router =express.Router();
const controler =require('./controler');

router.get('/students',controler.getStudents);
router.post('/createstudent',controler.addStudent);
router.post('/updatestudent',controler.updateStudent);
router.post('/deletestudent',controler.deleteStudent);

module.exports = router;
