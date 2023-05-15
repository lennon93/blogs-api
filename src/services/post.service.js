const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  addPost,
};