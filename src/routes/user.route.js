const { Router } = require('express');
const { userController } = require('../controllers');
const { displayNameValidation } = require('../middleware/displayNameValidation');
const { emailValidation } = require('../middleware/emailValidation');
const { passwordValidation } = require('../middleware/passwordValidation');
const { tokenValidation } = require('../middleware/tokenValidation');

const router = Router();

router.post( 
  '/',
  displayNameValidation,
  passwordValidation,
  emailValidation,
  userController.addUser,
);
router.get('/', tokenValidation, userController.getAll);

module.exports = router;