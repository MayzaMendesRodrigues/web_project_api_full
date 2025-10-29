import mongoose from 'mongoose';
import Cards from '../models/cards.js';
import BadRequest from '../errors/BadRequest.js';
import InternalServerError from '../errors/InternalServerError.js';
import NotFoundError from '../errors/NotFoundErr.js';
import Forbidden from '../errors/Forbidden.js';

const getCards = async (req, res) => {
  try {
    const cards = await Cards.find({});
    return res.json(cards);
  } catch (error) {
    console.error(' Erro ao buscar cards: ', error);
    throw new InternalServerError('Ocorreu um erro interno ao buscar os cartões.');
  }
};

const createCard = async (req, res) => {
  const { name, link } = req.body;
  if (!name || !link) {
    throw new BadRequest('Dados inválidos: "name" e "link" são campos obrigatórios.');
  }
  const card = await Cards.create({ name, link, owner: req.user._id });
  try {
    return res.status(201).json(card);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      throw new BadRequest('Dados inválidos: falha na validação do cartão.');
    }
    console.error('Erro ao criar card:', error);
    throw new InternalServerError('Erro interno do servidor ao criar o cartão.');
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Cards.findByIdAndDelete(req.params.id);

    if (!card) {
      throw new NotFoundError('Cartão não encontrado.');
    }

    if (card.owner.toString() !== req.user._id) {
      throw new Forbidden('Voce nao tem permissao para deletar este card');
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar card:', error);
    if (error instanceof mongoose.Error.CastError) {
      throw new BadRequest('ID de cartão inválido.');
    }
    throw new InternalServerError('Erro interno do servidor ao deletar o cartão.');
  }
};

const likeCard = async (req, res) => {
  try {
    const card = await Cards.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );

    if (!card) {
      return res.status().json({ message: 'Cartão não encontrado.' });
    }
    return res.json(card);
  } catch (error) {
    throw new InternalServerError('Erro interno do servidor ao curtir o cartão.');
  }
};

const dislikeCard = async (req, res) => {
  try {
    const card = await Cards.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    );

    if (!card) {
      throw new NotFoundError('Cartão não encontrado.');
    }

    return res.status(200).json(card);
  } catch (error) {
    console.error('Erro ao descurtir o cartão:', error);

    if (error instanceof mongoose.Error.CastError) {
      throw new BadRequest('ID de cartão inválido.');
    }

    throw new InternalServerError('Erro interno do servidor ao descurtir o cartão.');
  }
};

export {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
// "_id": "68e7c712a3bdeaac69a80f9b",
