/* eslint-disable */
const path = require('path');
const getFileContent = require('../helpers/getFileContent');
const user = require('../models/user');

const pathToUsers = path.join(__dirname, '..', 'data', 'users.json');

function getUsers(req, res) {
  return getFileContent(pathToUsers, res)
    .then((users) => {
      res.status(200).send(users);
    });
}

function getOneUser(req, res) {
  return getFileContent(pathToUsers, res)
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    });
}

function createUser(req, res) {
  const { name, about, avatar } = req.body;
  user.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: err });
      }
      res.status(500).send({ message: err });
    });
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
};
