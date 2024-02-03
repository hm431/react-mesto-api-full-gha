const jwt = require('jsonwebtoken');
const { SUPERSTRONGSECRET } = require('../utils/constants')
const UnauthorizedError = require('../errors/UnauthorizedError');


const extractBearerToken = (header) => {

  return header.replace('Bearer ', '');
};

module.exports = (req, res, next) => {
  console.log(class Forbidden extends Error { });
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима ddd авторизаци.'))
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, SUPERSTRONGSECRET);
  } catch (err) {
     next(new UnauthorizedError('Необходима авторизация.'))
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  return next(); // пропускаем запрос дальше
};
