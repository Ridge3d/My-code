import { Router } from 'express';
import authRouter from './auth'
import blogRouter from './blog';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw'

let router = Router();

router.use('/blog', blogRouter);
router.use('/auth', authRouter);

router.use(tokenMiddleware);
router.use(isLoggedIn);



export default router;