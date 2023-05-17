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

const getPostById = async (id) => {
  const postById = await BlogPost.findOne({ where: { id },
     include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ] });
  return postById;
};

const updatePostById = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const postById = getPostById(id);
  return postById;
};

const deletePostById = async (id) => {
  const deletePost = await BlogPost.destroy({ where: { id } });
  return deletePost;
};

const getPostByQuery = async (q) => {
  const data = await getAllPost();
  const dataValues = data.map((value) => value.dataValues);
  const searchQuery = dataValues
    .filter((post) => post.title.toUpperCase().includes(q.toUpperCase())
     || post.content.toUpperCase().includes(q.toUpperCase()));
  return searchQuery;
};

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
};