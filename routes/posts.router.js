import expres from 'express';
import validatorHandler from './../middlewares/validator.handler.js';
import { createPostSchema, updatePostDescription, getAndDeletePost} from './../schemas/post.schema.js'
import PostService from '../services/post.service.js';

const router = expres.Router();
const service = new PostService();

// GET

// Obtener lista de posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await service.find();
    res.json(posts)

  } catch (err) {
    next(err);
  }
});

// Obtener un post por id
router.get('/:id',
validatorHandler(getAndDeletePost, 'params'),
 async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await service.findOne(id);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

export default router;
