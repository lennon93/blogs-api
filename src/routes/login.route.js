const { Router } = require('express');
const { loginController } = require('../controllers');
const { loginValidation } = require('../middleware/loginValidation');

const router = Router();

router.post('/', loginValidation, loginController.login);

module.exports = router;