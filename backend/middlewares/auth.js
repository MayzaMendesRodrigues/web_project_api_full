import jwt from 'jsonwebtoken';
import Unauthorized from '../errors/Unauthorized.js';

export default function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Unauthorized('Token de autorizacao e necessario');
  }

  const token = authorization.replace('Bearer ', '');

  if (!token) {
    throw new Unauthorized('Token invalido');
  }

  let payload;

  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Unauthorized('Token invalido ou expirado');
  }

  req.user = payload;
  return next();
}
