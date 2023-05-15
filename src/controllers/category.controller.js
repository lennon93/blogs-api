const { categoryService } = require('../services');

const addCategory = async (req, res) => {
  try {
    const name = req.body;
    const user = await categoryService.addCategory(name);
  
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
};