import expres from 'express';
import validatorHandler from './../middlewares/validator.handler.js';
import {
  createPostSchema,
  updatePostDescription,
  getAndDeletePost,
} from './../schemas/post.schema.js';
import PostService from '../services/post.service.js';
import passport from 'passport';
import { chechRoles } from '../middlewares/auth.handler.js';

const router = expres.Router();
const service = new PostService();

// GET

// Obtener lista de posts
router.get(
  '/',
  // Protección de ruta contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin', 'user']),
  async (req, res, next) => {
    try {
      const posts = await service.find();
      res.json(posts);
    } catch (err) {
      next(err);
    }
  }
);

// Obtener un post por id
router.get(
  '/:id',
  // Protección de ruta contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin', 'user']),
  validatorHandler(getAndDeletePost, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const post = await service.findOne(id);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
