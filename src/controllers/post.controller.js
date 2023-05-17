const { postService } = require('../services');

const ERROR_MESSAGE = 'Erro interno';

const addPost = async (req, res) => {
  try {
    const { data } = req.user;
    const { title, content, categoryIds } = req.body;
    const post = await postService.addPost({ title, content, userId: data.id, categoryIds });

    if (!post) throw Error;
    
    return res.status(201).json(post.dataValues);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await postService.getAllPost();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await postService.getPostById(id);

    if (!postById) {
      return res.status(404).json({
        message: 'Post does not exist',
      });
    }
    return res.status(200).json(postById);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const postById = await postService.updatePostById(title, content, id);
    console.log('TESTE  ', postById);
    return res.status(200).json(postById);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await postService.deletePostById(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

const getPostByQuery = async (req, res) => {
  try {
    const { q } = req.query;
    const postByQuery = await postService.getPostByQuery(q);
    return res.status(200).json(postByQuery);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
};