const mentor = require('/.mentor/.mentorcontroller');
const student = require('/.student/.studentcontroller');
const connection = require('./database/connection');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  

app.use(express.json());  

const PORT = process.env.PORT || 4100;
const URL = process.env.MONGODB_URL;

const mongoose = require('mongoose');

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
const connection = mongoose.connection;
connection.on('open',() => console.log("MongoDB Connected"));


app.use('/.mentor',httpServer);
app.use('/.student',httpServer);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))