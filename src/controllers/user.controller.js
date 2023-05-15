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

module.exports = {
  addUser,
};