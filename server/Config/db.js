const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const multer=require('multer')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(`Error:${error.message}`.red.bold);
  }
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
};

module.exports = connectDB;
