import expres from 'express';
import CropService from './../services/crop.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  CreateCropSchema,
  UpdateCropSchema,
  getAndDeleteSchema,
  queryListCropSchema,
} from './../schemas/crop.schema.js';
import passport from 'passport';
import { chechRoles } from '../middlewares/auth.handler.js';

const router = expres.Router();
const service = new CropService();

// GET
// Obtener lista de cosechas
router.get(
  '/',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin', 'user']),
  validatorHandler(queryListCropSchema, 'query'),
  async (req, res, next) => {
    try {
      const crops = await service.find(req.query);
      res.json({ ...crops });
    } catch (err) {
      next(err);
    }
  }
);

// Obtener cosecha por id
router.get(
  '/:id',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin', 'user']),
  validatorHandler(getAndDeleteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const crop = await service.findOne(id);
      res.json(crop);
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear nueva cosecha
router.post(
  '/',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin', 'user']),
  validatorHandler(CreateCropSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newCrop = await service.create(body);
      res.json({
        newCrop,
      });
    } catch (err) {
      next(err);
    }
  }
);

// DELETE
// Eliminar cosecha
router.delete(
  '/:id',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin']),
  validatorHandler(getAndDeleteSchema, 'params'),
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
// UPDATE
// Actualizar cosecha
router.put(
  '/:id',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  chechRoles(['admin']),
  validatorHandler(UpdateCropSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const rta = await service.update(id, body);
      res.json({
        rta,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
