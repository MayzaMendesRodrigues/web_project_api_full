import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';
import NotFoundError from '../errors/NotFoundErr.js';
import BadRequest from '../errors/BadRequest.js';
import InternalServerError from '../errors/InternalServerError.js';
import Unauthorized from '../errors/Unauthorized.js';
import Conflict from '../errors/Conflict.js';

dotenv.config();

const createUser = async (req, res) => {
  try {
    const {
      name, about, avatar, email, password,
    } = req.body;

    if (!email || !password) {
      throw new BadRequest('Email e senha são obrigatórios');
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, about, avatar, email, password: hash,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.status(201).send({ data: userWithoutPassword });
  } catch (error) {
    if (error.code === 11000) {
      throw new Conflict('Email já está em uso');
    }
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status().json({ message: error.message });
    }
    throw new InternalServerError('Erro interno do servidor');
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({ data: user });
  } catch (error) {
    throw new InternalServerError(' Usuario nao encontrado ');
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);

    if (!users) {
      throw new NotFoundError(`Nenhum usuário com ${id} correspondente encontrado`);
    }
    return res.json(users);
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    if (!name || !about) {
      throw new BadRequest('Os campos "name" e "about" são obrigatórios.');
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);

    if (error instanceof mongoose.Error.ValidationError) {
      throw new BadRequest('Dados inválidos para atualização.');
    }

    if (error instanceof mongoose.Error.CastError) {
      throw new BadRequest('ID de usuário inválido.');
    }

    throw new InternalServerError('Erro interno do servidor ao atualizar perfil.');
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;

    if (!avatar) {
      throw new BadRequest('O campo "avatar" é obrigatório.');
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao atualizar avatar:', error);

    if (error instanceof mongoose.Error.ValidationError) {
      throw new BadRequest('URL de avatar inválida.');
    }

    if (error instanceof mongoose.Error.CastError) {
      throw new BadRequest('ID de usuário inválido.');
    }

    throw new InternalServerError('Erro interno do servidor ao atualizar avatar.');
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest('Email e senha são obrigatórios');
  }
  return User.findOne({ email }).select('+password').then((user) => {
    if (!user) {
      throw new Unauthorized('Email ou senha incorretos');
    }
    return bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          throw new Unauthorized('Email ou senha incorretos');
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.send({ token });
      }).catch((error) => {
        console.error(error);
        throw new InternalServerError('Erro interno do servidor');
      });
  });
};

export default {
  createUser, getUser, getUserById, updateUser, updateAvatar, login,
};
