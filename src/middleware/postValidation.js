const categoryService = require('../services/category.service');
const postService = require('../services/post.service');

const postValidation = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  
if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
    next();
  };

  const categoryIdValidation = async (req, res, next) => {
    const { categoryIds } = req.body;
    
  const promises = categoryIds.map((id) => {
     const idValid = categoryService.getCategoryById(id);
    return idValid;
    });
    const resultsPromises = await Promise.all(promises);
    const isValid = resultsPromises.some((promise) => !promise);
  if (isValid) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
    next();
  };

  const postIdValidation = async (req, res, next) => {
    const { id } = req.params;
    const isValid = await postService.getPostById(id);
  if (!isValid) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }
    next();
  };
  
  module.exports = {
    postValidation,
    categoryIdValidation,
    postIdValidation,
  };