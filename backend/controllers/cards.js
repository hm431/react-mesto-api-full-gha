const Card = require('../models/card');

// const Conflict = require('../errors/Conflict');
const BadRequest = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
// const StandartError = require('../errors/StandartError');
// const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports.getCard = (req, res, next) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => next(err));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { userId } = req.user;

  Card.create({ name, link, owner: userId })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Ошибка запроса'));
      } else {
        next(err);
      }
    });
};

module.exports.deliteCard = (req, res, next) => {
  const { userId } = req.user;

  Card.findById(req.params.cardId).orFail()
    .then((card) => {
      if (userId === card.owner.toString()) {
        return (card.deleteOne()
          .then(() => res.send({ card }))
        );
      }
      return (next(new Forbidden('Отказано в удалении карточки.')));
    })
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        next(new NotFound('Карточка с такими данными не найдена'));
      } else if (err.name === 'CastError') {
        next(new BadRequest('Ошибка в запросе'));
      } else {
        next(err);
      }
    });
};

module.exports.likeCard = (req, res, next) => {
  const { userId } = req.user;
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
    { new: true },
  ).orFail()
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        next(new NotFound('Карточка с такими данными не найдена'));
      } else if (err.name === 'CastError') {
        next(new BadRequest('Ошибка в запросе'));
      } else {
        next(err);
      }
    });
};

module.exports.dislikeCard = (req, res, next) => {
  const { userId } = req.user;
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: userId } }, // убрать _id из массива
    { new: true },
  ).orFail()

    .then((card) => res.send({ card }))

    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        next(new NotFound('Карточка с такими данными не найдена'));
      }
      if (err.name === 'CastError') {
        next(new BadRequest('Ошибка в запросе'));
      } else {
        next(err);
      }
    });
};
