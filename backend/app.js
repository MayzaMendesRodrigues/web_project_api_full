import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/users.js';
import cardRouter from './routes/cards.js';
import logger from './utils/logger.js';
import { createUser, login } from './controllers/userController.js';

async function connectMongoDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/aroundb');
  } catch (error) {
    console.error('TESTANDO', error);
  }
}
const app = express();

connectMongoDb();
const port = 3000;

app.use(logger);
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '68e7b4a44a287e0acd775b9d', // cole o _id do usuário teste criado no passo anterior
  };

  next();
});

app.post('/signin', login);
app.post('/signup', createUser);

app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
