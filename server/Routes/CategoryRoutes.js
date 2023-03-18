const {
  addCategory,
  getCategory,
} = require("../Controllers/CategoryControllers");

const router = require("express").Router();

router.route("/").post(addCategory).get(getCategory);
module.exports = router;
