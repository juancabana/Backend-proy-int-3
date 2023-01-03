import expres from 'express';
import CropService from './../services/crop.service.js';

const router = expres.Router();
const service = new CropService();

// GET
// Obtener lista de cosechas
router.get('/', async (req, res, next) => {
  const crops = await service.find();
  res.json({ ...crops });
});

// POST
// Crear nueva cosecha
router.post('/', async (req, res) => {
  const body = req.body;
  const newCrop = await service.create(body);
  res.json({
    newCrop,
  });
});

// DELETE
// Eliminar cosecha
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    rta,
  });
});
// UPDATE
// Actualizar cosecha
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const rta = await service.update(id, body);

  res.json({
    rta,
  });
});

export default router;
