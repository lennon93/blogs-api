const { User } = require('../models');

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const hasEmail = await User.findOne({ where: { email } });
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  if (hasEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};
  
module.exports = {
  emailValidation,
};