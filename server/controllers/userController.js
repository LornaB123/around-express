const User = require('../models/user');

function getUsers(req, res) {
  return User
    .find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send({ message: err }));
}

function getOneUser(req, res) {
  return User
    .findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User ID not found' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: err });
      }
      return res.status(500).send({ message: err });
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
    .findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .send({ message: 'Invalid data, cannot update user' });
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
}

function updateAvatar(req, res) {
  const { avatar } = req.body;
  return User
    .findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .send({ message: 'Invalid data, cannot update avatar' });
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  updateAvatar,
};
