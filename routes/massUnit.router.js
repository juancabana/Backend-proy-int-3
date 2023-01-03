import express from 'express';
import mass_unitServices from './../services/massUnit.service.js'

const router = express.Router();
const service = new mass_unitServices();

// GET
// Obtener lista de unidades de masa
router.get('/', async (req, res) => {
  const units = await service.find();
  res.json({
    units
  })
})

// POST
// Crear nueva unidad de masa
router.post('/', async (req, res) => {
  const body = req.body;
  const newUnitMass = await service.create(body);
  res.json(newUnitMass)
})

// DELETE
// Eliminar unidad de masa
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})


export default router;
