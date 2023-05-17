const { Router } = require('express');
const { postController } = require('../controllers');
const { tokenValidation } = require('../middleware/tokenValidation');
const { 
  postValidation, categoryIdValidation, postIdValidation, 
} = require('../middleware/postValidation');
const { updateValidation, idTokenValidation } = require('../middleware/updateBlogValidation');

const router = Router();

router.get('/search', tokenValidation, postController.getPostByQuery);
router.post('/', tokenValidation, postValidation, categoryIdValidation, postController.addPost);
router.get('/', tokenValidation, postController.getAllPost);
router.get('/:id', tokenValidation, postController.getPostById);
router.delete(
  '/:id',
   tokenValidation,
    postIdValidation,
     idTokenValidation,
      postController.deletePostById,
  );
router.put(
  '/:id',
  tokenValidation,
  updateValidation,
  idTokenValidation, 
  postController.updatePostById,
);

module.exports = router;