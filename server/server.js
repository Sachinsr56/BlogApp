const express = require('express');
const colors=require('colors')
require('dotenv').config();
const connectDB=require('./Config/db')




const app=express();
connectDB();

const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`.yellow.bold)
})