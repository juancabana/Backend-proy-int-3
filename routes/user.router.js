import expres from 'express';
import UserServices from './../services/user.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import {
  createUserSchema,
  getAndDeleteUserSchema,
  updateUserSchema,
} from './../schemas/user.schema.js';

const router = expres.Router();
const service = new UserServices();

// GET
// Obtener todos los usuarios
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json({ ...users });
  } catch (err) {
    next(err);
  }
});

// Obtener un usuario por id
router.get(
  '/:id',
  validatorHandler(getAndDeleteUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await service.findOne(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear nuevo usuario
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newUser = await service.create(body);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE
router.delete(
  '/:id',
  validatorHandler(getAndDeleteUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const rta = await service.delete(id);
      res.json({
        rta,
      });
    } catch (err) {
      next(err);
    }
  }
);
export default router;
