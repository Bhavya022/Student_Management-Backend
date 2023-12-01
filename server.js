const express = require('express') 
const studentRoutes = require('./routes/studentRoutes');
const mongoose = require('mongoose') 
const cors = require('cors') 
const {connection}=require('./config/database')
const bodyParser = require('body-parser'); 
require ('dotenv').config() 
const app=express() 

app.use(cors())  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', studentRoutes); 

app.listen(process.env.PORT,async ()=>{
    await connection 
    console.log('server start mongodb connect')

})