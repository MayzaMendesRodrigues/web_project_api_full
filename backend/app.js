import mongoose from 'mongoose';
import express from 'express';
import validator from 'validator';
import { celebrate, Joi, Segments } from 'celebrate';
import userRouter from './routes/users.js';
import cardRouter from './routes/cards.js';
import auth from './middlewares/auth.js';
import { login, createUser } from './controllers/userController.js';
import InternalServerError from './errors/InternalServerError.js';
import { errorLogger, requestLogger } from './middlewares/logger.js';

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
app.use(requestLogger);

app.post(
  '/signin',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);
app.post(
  '/signup',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(validateURL),
    }),
  }),
  createUser,
);

app.use(errorLogger);

app.use(auth);

connectMongoDb();
const port = 3000;

app.use('/users', userRouter);
app.use('/cards', cardRouter);

// Middleware de Tratamento de Erro do Celebrate

app.use((err, req, res, next) => {
  let { statusCode = 500, message } = err;
  if (!(err instanceof InternalServerError) && statusCode === 500) {
    statusCode = 500;
    message = 'Ocorreu um erro no servidor';
  }
  res.status(statusCode).json({ message });
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
