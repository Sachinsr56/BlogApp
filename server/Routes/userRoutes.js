const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../Controllers/userControllers");
const router = express.Router();

router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;
