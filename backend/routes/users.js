import { Router } from 'express';
import {
  createUser, getUser, getUserById, updateAvatar, updateUser,
} from '../controllers/userController.js';

const router = Router();

router.post('/', createUser);

router.get('/', getUser);

router.get('/:id', getUserById);

router.patch('users/me', updateUser);

router.patch('users/me/avatar', updateAvatar);

export default router;
