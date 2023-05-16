const { postService } = require('../services');

const addPost = async (req, res) => {
  try {
    const { data } = req.user;
    const { title, content, categoryIds } = req.body;
    const post = await postService.addPost({ title, content, userId: data.id, categoryIds });

    if (!post) throw Error;
    
    return res.status(201).json(post.dataValues);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await postService.getAllPost();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  addPost,
  getAllPost,
};