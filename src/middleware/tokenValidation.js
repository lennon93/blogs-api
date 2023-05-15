const { verifyToken } = require('../Auth/tokenFunctions');

const tokenValidation = (req, res, next) => {
    const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const hasToken = verifyToken(token);
    req.user = hasToken;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token', 
    });
  }
};
  
module.exports = {
  tokenValidation,
};