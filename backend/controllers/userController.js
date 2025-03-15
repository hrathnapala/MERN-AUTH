import express from 'express';
import { authUser } from '../routes/userRoute';

const router = express.Router();

router.post('/auth', authUser);

export default router;