

const Student = require('../models/studentModel');
const mongoose = require('mongoose');
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentById = async (req, res) => {
    const studentId = req.params.studentId;

    try {
        console.log('Request received for student ID:', studentId);

        if (!mongoose.Types.ObjectId.isValid(studentId)) {
            console.log('Invalid student ID format');
            return res.status(400).json({ error: 'Invalid student ID format' });
        }

        const student = await Student.findById(studentId);

        if (!student) {
            console.log('Student not found');
            return res.status(404).json({ error: 'Student not found' });
        }

        console.log('Student found:', student);
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const addStudent = async (req, res) => {
    const { firstName, lastName, phone, dob, gender, address } = req.body;
  
    try {
        const newStudent = new Student({
            firstName,
            lastName,
            phone,
            dob,
            gender,
            address,
        });

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateStudent = async (req, res) => {
    const studentId = req.params.studentId; 
    const updatedData = req.body;
    console.log(studentId,updatedData)
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            updatedData,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteStudent = async (req, res) => {
    const studentId = req.params.studentId;
  console.log(studentId) 
    try {
        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json('delete succesfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
};
