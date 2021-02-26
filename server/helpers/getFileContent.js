const fs = require('fs').promises;

function getFileContent(path){
  return fs.readFile(path, {encoding: 'utf-8'})
  .then(JSON.parse)
  .catch((err) => res.status(500).send({message: err}));
}

module.exports = getFileContent;