import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config();

const createUser = async (req, res) => {
  try {
    const {
      name, about, avatar, email, password,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, about, avatar, email, password: hash,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.status(201).send({ data: userWithoutPassword });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Email já está em uso' });
    }
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);

    if (!users) {
      return res.status(404).json({ mensage: `User ${id} was not found` });
    }
    return res.json(users);
  } catch (error) {
    return res.status(503).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    if (!name || !about) {
      return res.status(400).json({ message: 'Os campos "name" e "about" são obrigatórios.' });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true, runValidators: true },
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: 'Dados inválidos para atualização.' });
    }

    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: 'ID de usuário inválido.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor ao atualizar perfil.' });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;

    if (!avatar) {
      return res.status(400).json({ message: 'O campo "avatar" é obrigatório.' });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true, runValidators: true },
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao atualizar avatar:', error);

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: 'URL de avatar inválida.' });
    }

    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: 'ID de usuário inválido.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor ao atualizar avatar.' });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }
  return User.findOne({ email }).select('+password').then((user) => {
    if (!user) {
      return res.status(401).json({ message: 'email ou senha incorreta' });
    }
    return bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({ message: 'Email ou senha incorretos' });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.send({ token });
      }).catch((error) => {
        res.status(500).json({ message: 'Erro interno do servidor', error });
      });
  });
};

export {
  createUser, getUser, getUserById, updateUser, updateAvatar, login,
};
