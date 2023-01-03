import expres from 'express';
import UserServices from './../services/user.service.js';
// import {sequelize} from '../libs/sequelize.js';
import sequelize from './../libs/sequelize.js';

// Connectin with BD by mysql.pool
// import pool from '../libs/mysql.pool.js';

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
  const {id} = req.params;
  const user = await service.findOne(id);
  res.json({
    data: user.dataValues,
    ...user });
});

// POST
router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.json({
    newUser
  })
});

// DELETE
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json({
    rta
  })
})
export default router;
