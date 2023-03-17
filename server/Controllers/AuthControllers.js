const asyncHandler = require("express-async-handler");
let schema = require("../Config/database.schema");

let User = schema.User;

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, profilePic } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All the Feilds");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    username,
    email,
    password,
    profilePic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create new User");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      pic: user.pic,
    });
  }else{
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser,authUser };
