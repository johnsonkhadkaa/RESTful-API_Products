const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false)



const connectDB = (uri) => {
    // console.log('connect')
    return mongoose.connect(uri , {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    } ,(req , res)=>{
      console.log('DB connection successful!')
    })
}

module.exports = connectDB


