const Category = require("../Config/database.schema").Category;
const asyncHandler = require("express-async-handler");

const addCategory = asyncHandler(async (req, res) => {
  const newCat = new Category({});
  newCat.name = req.body.createCategory;
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
});

const getCategory = asyncHandler(async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = { addCategory, getCategory, deleteCategory };
