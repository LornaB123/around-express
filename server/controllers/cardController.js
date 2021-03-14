/* eslint-disable */
const path = require('path');
const getFileContent = require('../helpers/getFileContent');

const pathToCards = path.join(__dirname, '..', 'data', 'cards.json');

function getCards(req, res) {
  return getFileContent(pathToCards, res)
    .then((cards) => {
      res.status(200).send(cards);
    });
}

module.exports = {
  getCards,
};
