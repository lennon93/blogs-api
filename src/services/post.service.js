const { BlogPost, PostCategory, User, Category } = require('../models');

const addPost = async ({ title, content, userId, categoryIds }) => {
  try {
    const post = await BlogPost.create({
      title, content, userId, updated: new Date(), published: new Date(),
    });
    const promises = categoryIds.map((id) => 
      PostCategory.create({ postId: post.id, categoryId: id }));
  
    await Promise.all(promises);
    return post;
  } catch (error) {
    console.error(error);
  }
};

const getAllPost = async () => {
    const posts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ] });
    return posts;
};

module.exports = {
  addPost,
  getAllPost,
};