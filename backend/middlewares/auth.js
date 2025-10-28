import jwt from 'jsonwebtoken';

export default function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token de autorizacao e necessario' });
  }

  const token = authorization.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token invalido' });
  }

  let payload;

  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Token invalido ou expirado' });
  }

  req.user = payload;
  return next();
}
