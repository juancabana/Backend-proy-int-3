import expres from 'express';

const router = expres.Router();

// GET

// Obtener lista de posts
router.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'Estamos obteniendo la lista de posts',
    });
  } catch (err) {
    next(err);
  }
});

// Obtener un post por id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    res.json({
      message: `Estamos obteniendo el post ${id}`,
    });
  } catch (err) {
    next(err);
  }
});

// PATCH
// Editar comentario de post
router.patch('/', (req, res, next) => {
  const body = req.body;
  const { id } = req.body;
  try {
    res.json({
      message: `Quieres editar este comentario del post ${id}`,
      body,
    });
  } catch (err) {
    next(err);
  }
});

// POST
// Crear nuevo comentario
router.post('/:id', (req, res, next) => {
  const { id } = req.body;
  const body = req.body;
  try {
    res.json({
      message: `Creaste un nuevo comentario al post con id:${id}`,
      body,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
