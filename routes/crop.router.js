import expres from 'express';
import CropService from './../services/crop.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  CreateCropSchema,
  UpdateCropSchema,
  getAndDeleteSchema,
  queryListCropSchema,
} from './../schemas/crop.schema.js';
const router = expres.Router();
const service = new CropService();

// GET
// Obtener lista de cosechas
router.get(
  '/',
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
router.get(
  '/:id',
  validatorHandler(getAndDeleteSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const crop = await service.findOne(id);
      res.json({ ...crop });
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear nueva cosecha
router.post(
  '/',
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
