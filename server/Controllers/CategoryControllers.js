const Category = require("../Config/database.schema").Category;
const asyncHandler = require("express-async-handler");

const addCategory = asyncHandler(async (req, res) => {
  const newCat = new Category({
    categories:req.body.createCategory});
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
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

module.exports = { addCategory, getCategory };
