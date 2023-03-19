const express = require('express');
const multer=require('multer')
const path=require('path')
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
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use('/auth',AuthRoutes)
app.use('/user',userRoutes)
app.use('/post',PostRoutes);
app.use('/cat',CategoryRoutes)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
  console.log("File Uploaded")
});

const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`.yellow.bold)
})