import express from 'express';
import mass_unitServices from './../services/massUnit.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  createMassUnitSchema,
  getAndDeleteMassUnitSchema,
} from './../schemas/massUnit.schema.js';
import passport from 'passport';

const router = express.Router();
const service = new mass_unitServices();

// GET
// Obtener lista de unidades de masa
router.get(
  '/',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const units = await service.find();
      res.json({
        ...units,
      });
    } catch (err) {
      next(err);
    }
  }
);

// Obtener unidad de masa por id
router.get(
  '/:id',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getAndDeleteMassUnitSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const unit = await service.findOne(id);
      res.json({
        unit,
      });
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear nueva unidad de masa
router.post(
  '/',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createMassUnitSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newUnitMass = await service.create(body);
      res.json(newUnitMass);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE
// Eliminar unidad de masa
router.delete(
  '/:id',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getAndDeleteMassUnitSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const rta = await service.delete(id);
      res.json(rta);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
