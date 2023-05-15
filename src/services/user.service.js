const { User } = require('../models');

const addUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const user = await User.create({
    displayName, email, password, image, 
  });
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  addUser,
  getAll,
};