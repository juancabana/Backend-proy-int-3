import expres from 'express';

const router = expres.Router();


// GET
router.get('/', (req, res) => {
  res.send({
    message: 'Estos son los datos de este usuario',
  })
})

// POST
router.post('/', (req, res) => {
  res.json({
    message: 'El usuario se ha creado',
  })
})

export default router;
