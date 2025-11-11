import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import {
  getUser, getUserById, updateAvatar, updateUser,
} from '../controllers/userController.js';

const router = Router();

// router.post('/', createUser);

router.get('/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), getUserById);

// Rotas relativas ao usuário autenticado precisam usar paths a partir do router
router.get('/me', getUser);

router.patch('/me', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateUser);

router.patch('/me/avatar', celebrate({
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string().uri(),
  }),
}), updateAvatar);

export default router;
