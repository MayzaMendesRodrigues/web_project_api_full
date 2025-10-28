import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/users.js';
import cardRouter from './routes/cards.js';
// import auth from './middlewares/auth.js';
import { createUser, login } from './controllers/userController.js';

const app = express();

async function connectMongoDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/aroundb');
  } catch (error) {
    console.error('TESTANDO', error);
  }
}

app.use(express.json());

app.post('/signin', login);
app.post('/signup', createUser);
// app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);

connectMongoDb();
const port = 3000;

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
