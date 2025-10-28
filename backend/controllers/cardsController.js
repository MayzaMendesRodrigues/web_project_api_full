import mongoose from 'mongoose';
import Cards from '../models/cards.js';

const getCards = async (req, res) => {
  try {
    const cards = await Cards.find({});
    return res.json(cards);
  } catch (error) {
    console.error(' Erro ao buscar cards: ', error);
    return res.status(500).json({ message: 'Ocorreu um erro interno ao buscar os cartões.' });
  }
};

const createCard = async (req, res) => {
  const { name, link } = req.body;
  if (!name || !link) {
    return res.status(400).json({ message: 'Dados inválidos: "name" e "link" são campos obrigatórios.' });
  }
  const card = await Cards.create({ name, link, owner: req.user._id });
  try {
    return res.status(201).json(card);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: 'Dados inválidos: falha na validação do cartão.' });
    }
    console.error('Erro ao criar card:', error);
    return res.status(500).json({ message: 'Erro interno do servidor ao criar o cartão.' });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Cards.findByIdAndDelete(req.params.id);

    if (!card) {
      return res.status(404).json({ message: 'Cartão não encontrado.' });
    }

    if (card.owner.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Voce nao tem permissao para deletar este card' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar card:', error);
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: 'ID de cartão inválido.' });
    }
    return res.status(500).json({ message: 'Erro interno do servidor ao deletar o cartão.' });
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
      return res.status(404).json({ message: 'Cartão não encontrado.' });
    }
    return res.json(card);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno do servidor ao curtir o cartão.' });
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
      return res.status(404).json({ message: 'Cartão não encontrado.' });
    }

    return res.status(200).json(card);
  } catch (error) {
    console.error('Erro ao descurtir o cartão:', error);

    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: 'ID de cartão inválido.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor ao descurtir o cartão.' });
  }
};

export {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
// "_id": "68e7c712a3bdeaac69a80f9b",
