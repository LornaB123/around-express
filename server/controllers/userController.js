const User = require('../models/user');

function getUsers(req, res) {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(400)
          .send({ message: 'Validation failed, user cannot be created' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'User not found' });
      } else {
        res.status(500).send({ message: 'Internal Server Error.' });
      }
    });
}

function getOneUser(req, res) {
  return User
    .findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'User ID not found' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Response' });
      }
      return res.status(500).send({ message: 'Error' });
    });
}

function createUser(req, res) {
  const { name, about, avatar } = req.body;
  return User
    .create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err });
      }
      return res.status(500).send({ message: err });
    });
}

function updateUser(req, res) {
  const { name, about } = req.body;
  return User
    .findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data, cannot update user' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal Server Error.' });
      }
    });
}

function updateAvatar(req, res) {
  const { avatar } = req.body;
  return User
    .findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Invalid data, cannot update user' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'User not found.' });
      } else {
        res.status(500).send({ message: 'Internal Server Error.' });
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
