import expres from 'express';
import userRouter from './user.router.js';
import postRouter from './posts.router.js';
import cropRouter from './crop.router.js';
import massUnitRouter from './massUnit.router.js';
import profileRouter from './profile.router.js';
import authRouter from './auth.router.js';

const router = expres.Router();

router.use('/user/', userRouter);
router.use('/posts/', postRouter);
router.use('/crop/', cropRouter);
router.use('/mass-unit/', massUnitRouter);
router.use('/auth/', authRouter);
router.use('/user-profile/', profileRouter);

export default router;
