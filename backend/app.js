import mongoose from 'mongoose';
import express from 'express';
import validator from 'validator';
import userRouter from './routes/users.js';
import cardRouter from './routes/cards.js';
import auth from './middlewares/auth.js';
import validator from 'validator';
import { celebrate, Joi, Segments, Errors } from 'celebrate';
import {login} from './controllers/userController.js'


const app = express();

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.error('string.uri');
};

async function connectMongoDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/aroundb');
  } catch (error) {
    console.error('Erro ao conectar MongoDB:', error);
  }
}

app.use(express.json());

app.post('/signin', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })
}),
login
);
app.post('/signup', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email:Joi.string().required().email(),
    password:Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(validateURL)
  })
}),
createUser
);

app.use(auth);

connectMongoDb();
const port = 3000;

app.use('/users', userRouter);
app.use('/cards', cardRouter);

// Middleware de Tratamento de Erro do Celebrate

app.use(Errors())

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
