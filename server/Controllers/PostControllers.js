const asyncHandler = require("express-async-handler");
const schema = require("../Config/database.schema");
const mongoose=require('mongoose')
const User = schema.User;
const Post = schema.Post;

const createPost = asyncHandler(async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (new mongoose.Types.ObjectId(post.userId) == req.body.userId) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You aren't authorized to this post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (new mongoose.Types.ObjectId(post.userId) == req.body.userId) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted......");
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You aren't authorized to this post!");
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

const getPost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

const getAllPost = asyncHandler(async (req, res) => {
  const userId = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (userId) {
      posts = await Post.find({ userId });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = { updatePost, createPost, getAllPost, getPost, deletePost };
