const { Category } = require('../models');

const addCategory = async (name) => {
  const user = await Category.create(name);
  return user;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  addCategory,
  getAllCategories,
};