const { User } = require('../models');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
  return user;
};

module.exports = {
  login,
};