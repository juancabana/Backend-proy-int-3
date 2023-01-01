import expres from 'express';

const router = expres.Router();

// GET

// Obtener lista de posts
router.get('/', (req, res) => {
  res.json({
    message: 'Estamos obteniendo la lista de posts',
  });
});

// Obtener un post por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Estamos obteniendo el post ${id}`,
  });
});

// PATCH
// Editar comentario de post
router.patch('/', (req, res) => {
  const body = req.body;
  const { idPost } = req.body;

  res.json({
    message: `Quieres editar este comentario del post ${idPost}`,
    body,
  });
});

// POST
// Crear nuevo comentario
router.post('/', (req, res) => {
  const body = req.body;
  const { idPost } = req.body;
  res.json({
    message: `Creaste un nuevo comentario al post con id:${idPost}`,
    body,
  });
});

export default router;
