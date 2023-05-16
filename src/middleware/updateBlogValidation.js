const { verifyToken } = require('../Auth/tokenFunctions');

const updateValidation = (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const idTokenValidation = (req, res, next) => {
  const { authorization: token } = req.headers;
  const { id } = req.params;
  const hasToken = verifyToken(token);
  const idToken = hasToken.data.id;

  if (Number(id) !== Number(idToken)) {
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