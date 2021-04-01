const express = require('express');

const router = express.Router();

const {
  getUsers, getOneUser, createUser, updateUser, updateAvatar,
} = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.patch('/users/:id/avatar', updateAvatar);

module.exports = router;
