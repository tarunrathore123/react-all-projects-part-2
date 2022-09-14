import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';
import uploadRoutes from './routes/upload.js';
import fileUpload from 'express-fileupload';
import { readdirSync } from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//routes
// readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));
app.use('/', userRoutes);
app.use('/', uploadRoutes);
// app.use('/uploadImages', (req, res) => {
//   console.log('Awd');
//   res.json({ message: 'hi' });
// });

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('database connected successfully'))
  .catch((err) => console.log('error connecting to mongodb', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
