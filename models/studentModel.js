

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({ 
    studentID: {
        type: String,
        default: function () {
            // Generate a simple student ID using the ObjectId
            return this._id.toHexString().slice(18, 24).toUpperCase();
        },
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
