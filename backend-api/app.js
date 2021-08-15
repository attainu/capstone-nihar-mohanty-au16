require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');
const categoryRouter = require('./routes/categories');
const multer = require('multer');
const path = require('path');

const app = express();
connectDB();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
