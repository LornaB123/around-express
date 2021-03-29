const User = require('../models/user');

function getUsers(req, res) {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'User not found' });
      } else if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Validation failed, user cannot be created' });
      } else {
        res.status(500).send({ message: 'Internal Server Error.' });
      }
    });
}

function getOneUser(req, res) {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: 'User not found.' });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Validation failed:  user cannot be found.' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal server error.' });
      }
    });
}

function createUser(req, res) {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Validation failed:  user cannot be created.' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal server error.' });
      }
    });
}

function updateUser(req, res) {
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { $set: { name: req.body.name, about: req.body.about } },
    { new: true, runValidators: true },
  )
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Validation failed:  user cannot be updated.' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal server error' });
      }
    });
}

function updateAvatar(req, res) {
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { avatar: req.body.avatar },
    { new: true, runValidators: true },
  )
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(404).send({ message: 'Validation failed:  avatar cannot be updated.' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal server error' });
      }
    });
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  updateAvatar,
};
