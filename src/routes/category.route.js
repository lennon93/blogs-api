const { Router } = require('express');
const { categoryController } = require('../controllers');
const { tokenValidation } = require('../middleware/tokenValidation');
const { categoryNameValidation } = require('../middleware/categoryNameValidation');

const router = Router();

router.post('/', tokenValidation, categoryNameValidation, categoryController.addCategory);

module.exports = router;