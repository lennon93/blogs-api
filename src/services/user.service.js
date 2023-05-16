const { User } = require('../models');

const addUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const user = await User.create({
    displayName, email, password, image, 
  });
  return user;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

const deleteUser = async (id) => {
  const deleted = await User.destroy({ where: { id } });
  return deleted;
};

module.exports = {
  addUser,
  getAll,
  getUserById,
  deleteUser,
};