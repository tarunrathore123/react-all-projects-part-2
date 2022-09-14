import express from 'express';
import { createPost } from '../controllers/post';
import { authUser } from '../middlwares/auth';

const router = express.Router();

router.post('/createPost', authUser, createPost);

export default router;
