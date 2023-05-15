const { loginService } = require('../services');
const { createToken } = require('../Auth/tokenFunctions');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.login(email, password);
   
    if (!user) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
  
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
  
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  login,
};