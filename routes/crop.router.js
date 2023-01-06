import expres from 'express';
import CropService from './../services/crop.service.js';

const router = expres.Router();
const service = new CropService();

// GET
// Obtener lista de cosechas
router.get('/', async (req, res, next) => {
  try {
    const crops = await service.find();
    res.json({ ...crops });
  } catch (err) {
    next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const crop = await service.findOne(id);
    res.json({ ...crop });
  } catch (err) {
    next(err);
  }
});

// POST
// Crear nueva cosecha
router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const newCrop = await service.create(body);
    res.json({
      newCrop,
    });
  } catch (err) {
    next(err);
  }
});

// DELETE
// Eliminar cosecha
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const rta = await service.delete(id);
    res.json({
      rta,
    });
  } catch (err) {
    next(err);
  }
});
// UPDATE
// Actualizar cosecha
router.put('/:id', async (req, res, next) => {
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
});

export default router;
