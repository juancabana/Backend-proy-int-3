import expres from 'express';
import pool from '../libs/mysql.pool.js';

const router = expres.Router();

// GET
router.get('/', (req, res) => {
  res.send({
    message: 'Estos son los datos de este usuario',
  });
});

// POST
router.post('/', async (req, res) => {
  const body = req.body;
  const {first_name_user, last_name_user, email_user, password_user, image_user, phone_number} = req.body
  const query = `
  INSERT INTO User (first_name_user, last_name_user, email_user, password_user, image_user, phone_number)
  VALUES ( ${first_name_user}, ${last_name_user ? last_name_user : null}, ${email_user},
    ${password_user},
    ${image_user ? image_user : null},
    ${phone_number})`;

  const rta = await pool.query(query);
  res.json({
    message: 'El usuario se ha creado',
    rta,
    data: body,
  });
});

export default router;
