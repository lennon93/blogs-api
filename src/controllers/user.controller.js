const { userService } = require('../services');
const { createToken } = require('../Auth/tokenFunctions');

const addUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await userService.addUser(newUser);

    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
  
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    const usersWithoutPassword = users.map((user) => {
      const withoutPassword = {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        image: user.image,
      };
      return withoutPassword;  
    });
    console.log(usersWithoutPassword);
    return res.status(200).json(usersWithoutPassword);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  addUser,
  getAll,
};