const { Category } = require('../models');

const addCategory = async (name) => {
  const user = await Category.create(name);
  return user;
};

module.exports = {
  addCategory,
};