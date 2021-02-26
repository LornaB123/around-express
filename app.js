const express = require('express');

const { PORT = 3000 } = process.env;

const path = require('path');
const app = express();

const userRouter = require('./server/routes/users');
const cardRouter = require('./server/routes/cards');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);
app.use('/', cardRouter);

app.get('*', (req, res) => {
  res.status(404).send({message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
});