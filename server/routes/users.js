const express = require('express');

const router = express.Router();

const { getUsers, getOneUser, createUser } = require('../controllers/userController');

router.get('/users', getUsers);

router.get('/users/:id', getOneUser);

router.post('/', createUser);

module.exports = router;
