const express = require("express");
const {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
  getPost,
} = require("../Controllers/PostControllers");
const router = express.Router();

router.route("/").post(createPost).get(getAllPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);

module.exports = router;
