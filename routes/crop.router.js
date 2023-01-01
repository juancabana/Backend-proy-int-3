import expres from 'express';

const router = expres.Router();



// POST
// Crear nueva cosecha

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    title: body.title,
    ton: body.ton,
  })
})


// DELETE
// Eliminar cosecha
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: `Se eliminó la cosecha con el id: ${id}`
  })
});



export default router;
