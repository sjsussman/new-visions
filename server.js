const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");

server.use(cors());
server.use(express.json());

mongoose
.connect(
    'mongodb+srv://applicant:newvisions2019@residency-task-0wfs4.mongodb.net/assessment_db',
    { useNewUrlParser: true }
    )
.then(() => console.log('MongoDB Connected'))
.catch( err => console.log(err))
//require route

server.use('/', require("./routes/studentRouter"))

server.listen(8000, function () {
    console.log("express server is running on port 8000")
})

module.exports = server;
