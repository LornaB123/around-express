const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;

const app = express();

const userRouter = require('./server/routes/users');
const cardRouter = require('./server/routes/cards');

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(helmet());
app.use('/', userRouter);
app.use('/', cardRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '604da81c4df13c35e4bdb2a7', // paste the _id of the test user created in the previous step
  };
  next();
});

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
