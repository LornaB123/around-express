/* eslint-disable */
const card = require('../models/card');

function getCards(req, res) {
  return card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(400).send({message: err}));
}

function createCard(req, res) {
  const {name, link} = req.body;
  card.create({name, link, owner: req.user._id})
  .then((card) => res.status(200).send(card))
  .catch((err) => {
    if(err.name === 'ValidationError') {
      return res.status(400).send({message: err});
    } else {
      return res.status(500).send({message: err});
    }
  });
}

function deleteCard(req, res) {
  card.findByIdAndRemove(req.params.cardId)
  .then((card) => {
    if (!card) {
      return res.status(404).send({message: 'Sorry, the card is not found'});
    }
    return res.status(200).send({data: card})
  })
  .catch((err) => {
    if(err.name === 'CastError') {
      return res.status(400).send({message: err});
    } else {
      return res.status(500).send({message: err});
    }
  });
}

function likeCard(req, res){
  card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // add _id to the array if it's not there yet
    { new: true },
    )
    .then((card) => res.send(card))
    .catch((err) => {
      if(err.name === 'CastError') {
        return res.status(400).send({ message: err });
      } else {
        return res.status(500).send({ message: err });
      }
    });
}


function dislikeCard(req, res){
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id from the array
    { new: true },
  )
  .then((card) => res.send(card))
    .catch((err) => {
      if(err.name === 'CastError') {
        return res.status(400).send({ message: err });
      } else {
        return res.status(500).send({ message: err });
      }
    });
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard
};
