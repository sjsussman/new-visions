const express = require('express')
const router = express.Router();
const Student = require("../models/studentModel");

router.get('/studentlist', (req, res) => {
    Student.find({}).then((students) => {
        res.status(200).send(students)
    })
    .catch((error) => {
        res.status(500).send(error)
    })
})

module.exports = router;