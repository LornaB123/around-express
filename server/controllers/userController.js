const path = require('path');
const getFileContent = require('../helpers/getFileContent');

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

module.exports = {
  getUsers,
  getOneUser,
};
