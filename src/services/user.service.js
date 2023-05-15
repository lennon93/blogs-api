const { User } = require('../models');

const addUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const user = await User.create({
    displayName, email, password, image, 
  });
  return user;
};

module.exports = {
  addUser,
};