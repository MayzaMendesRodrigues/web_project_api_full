import { Router } from 'express';
import {
  createCard, deleteCard, dislikeCard, getCards, likeCard,
} from '../controllers/cardsController.js';

const router = Router();

router.post('/', createCard);

router.get('/', getCards);

router.delete('/:id', deleteCard);

router.put('/:cardId/likes', likeCard);

router.delete('/:cardId/likes', dislikeCard);

export default router;
