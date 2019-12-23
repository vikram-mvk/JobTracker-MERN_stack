const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const app=express();
const mongoose = require('mongoose');
app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const conn = mongoose.connection;
conn.once('open',()=>console.log("connected..."));
app.use(express.json())
app.listen(5000,()=>{console.log("listening...")});
const jobrouter = require('./routes/jobs');
app.use('/jobs',jobrouter);

