import expres from 'express';
import UserServices from './../services/user.service.js';

const router = expres.Router();
const service = new UserServices();

// GET
// Obtener todos los usuarios
router.get('/', async (req, res, next) => {
  const users = await service.find();
  res.json({ ...users });
});

// Obtener un usuario por id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json({
    data: user.dataValues,
    ...user,
  });
});

// POST
// Crear nuevo usuario
router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.json({
    newUser,
  });
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    rta,
  });
});
export default router;
