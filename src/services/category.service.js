const { Category } = require('../models');

const addCategory = async (name) => {
  const user = await Category.create(name);
  return user;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category;
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
};