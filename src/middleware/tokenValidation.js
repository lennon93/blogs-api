const { verifyToken } = require('../Auth/tokenFunctions');

const tokenValidation = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const hasToken = verifyToken(token);

    req.user = hasToken;

    next();
} catch (err) {
  return res.status(401).json({
    message: 'Expired or invalid token',
  });
}
  next();
};
  
module.exports = {
  tokenValidation,
};