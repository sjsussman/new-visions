const mongoose = require('mongoose');

const studentSchema = {
    name: String,
    grade: Number,
    scores: Array
}

let Student = mongoose.model("Student", studentSchema)

module.exports = Student;