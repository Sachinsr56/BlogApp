const express = require('express');
const multer=require('multer')
const colors=require('colors')
require('dotenv').config();
const connectDB=require('./Config/db')
const AuthRoutes=require('./Routes/AuthRoutes')
const userRoutes=require('./Routes/userRoutes')
const PostRoutes=require('./Routes/PostRoutes')
const CategoryRoutes=require('./Routes/CategoryRoutes')


const app=express();
connectDB();
app.use(express.json())

app.use('/auth',AuthRoutes)
app.use('/user',userRoutes)
app.use('/post',PostRoutes);
app.use('/cat',CategoryRoutes)

const upload = multer({ storage: connectDB.storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`.yellow.bold)
})