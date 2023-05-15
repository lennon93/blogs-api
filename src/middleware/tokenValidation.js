const { verifyToken } = require('../Auth/tokenFunctions');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const hasToken = verifyToken(authorization);
    req.user = hasToken;
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token', 
    });
  }
  next();
};
  
module.exports = {
  tokenValidation,
};