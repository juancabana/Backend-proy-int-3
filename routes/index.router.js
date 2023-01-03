import expres from 'express';
import userRouter from './user.router.js';
import postRouter from './posts.router.js';
import cropRouter from './crop.router.js';
import massUnitRouter from './massUnit.router.js';

const router = expres.Router();

router.use('/user/', userRouter);
router.use('/posts/', postRouter);
router.use('/crop/', cropRouter);
router.use('/mass-unit/', massUnitRouter);

export default router;
