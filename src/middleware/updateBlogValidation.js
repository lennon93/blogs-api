const { verifyToken } = require('../Auth/tokenFunctions');
const { postService } = require('../services');

const updateValidation = (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const idTokenValidation = async (req, res, next) => {
  const { authorization: token } = req.headers;
  const { id } = req.params;
  const post = await postService.getPostById(id);
  const user = post.dataValues.userId;
  const hasToken = verifyToken(token);
  console.log('TESTE    ', hasToken);
  const idToken = hasToken.data.id;
  if (Number(user) !== Number(idToken)) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }
  next();
};

module.exports = { 
  updateValidation,
  idTokenValidation,
};