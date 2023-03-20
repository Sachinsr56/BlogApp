const {
  addCategory,
  getCategory,
  deleteCategory,
} = require("../Controllers/CategoryControllers");

const router = require("express").Router();

router.route("/").post(addCategory).get(getCategory);
router.route("/:id").delete(deleteCategory);
module.exports = router;
