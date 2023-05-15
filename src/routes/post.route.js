const { Router } = require('express');
const { postController } = require('../controllers');
const { tokenValidation } = require('../middleware/tokenValidation');
const { postValidation, categoryIdValidation } = require('../middleware/postValidation');

const router = Router();

router.post('/', tokenValidation, postValidation, categoryIdValidation, postController.addPost);

module.exports = router;