const { Router } = require('express');
const { userController } = require('../controllers');
const { displayNameValidation } = require('../middleware/displayNameValidation');
const { emailValidation } = require('../middleware/emailValidation');
const { passwordValidation } = require('../middleware/passwordValidation');
const { tokenValidation } = require('../middleware/tokenValidation');

const router = Router();

router.delete('/me', tokenValidation, userController.deleteUser);
router.get('/:id', tokenValidation, userController.getUserById);
router.get('/', tokenValidation, userController.getAll);
router.post( 
  '/',
  displayNameValidation,
  passwordValidation,
  emailValidation,
  userController.addUser,
);

module.exports = router;