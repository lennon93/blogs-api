const { verifyToken } = require('../Auth/tokenFunctions');

const tokenValidation = (req, res, next) => {
  const { token } = req.body;
  if (token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  const hasToken = verifyToken(token);
  if (hasToken) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  next();
};
  
module.exports = {
  tokenValidation,
};