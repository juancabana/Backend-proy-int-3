import express from 'express';
import mass_unitServices from './../services/massUnit.service.js';

const router = express.Router();
const service = new mass_unitServices();

// GET
// Obtener lista de unidades de masa
router.get('/', async (req, res, next) => {
  try {
    const units = await service.find();
    res.json({
      units,
    });
  } catch (err) {
    next(err);
  }
});

// Obtener unidad de masa por id
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const unit = await service.findOne(id);
    res.json({
      unit,
    });
  } catch (err) {
    next(err);
  }
});

// POST
// Crear nueva unidad de masa
router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const newUnitMass = await service.create(body);
    res.json(newUnitMass);
  } catch (err) {
    next(err);
  }
});

// DELETE
// Eliminar unidad de masa
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const rta = await service.delete(id);
    res.json(rta);
  } catch (err) {
    next(err);
  }
});

export default router;
