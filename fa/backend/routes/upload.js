import express from 'express';
import { uploadImages } from '../controllers/upload.js';
import { authUser } from '../middlwares/auth.js';
import imageUpload from '../middlwares/imageUpload.js';

const router = express.Router();

router.post('/uploadImages', imageUpload, uploadImages);

export default router;
