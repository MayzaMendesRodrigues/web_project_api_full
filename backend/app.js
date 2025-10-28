import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/users.js';
import cardRouter from './routes/cards.js';
import auth from './middlewares/auth.js';
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

app.use(auth);

connectMongoDb();
const port = 3000;

// app.use((req, res, next) => {
//   req.user = {
//     _id: '68e7b4a44a287e0acd775b9d', // cole o _id do usuário teste criado no passo anterior
//   };

//   next();
// });

app.use('/users', userRouter);
app.use('/cards', cardRouter);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
