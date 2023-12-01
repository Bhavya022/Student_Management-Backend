// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
router.get('/students', studentController.getAllStudents);
router.get('/students/:studentId', studentController.getStudentById);
router.post('/students', studentController.addStudent);
router.put('/students/:studentId', studentController.updateStudent);
router.delete('/students/:studentId', studentController.deleteStudent);

module.exports = router;
