const express = require('express');
const AuthorController = require('./../controllers').AuthorController;
const AuthController = require('./../controllers').AuthController;

const router = express.Router();

router.get('/authors', AuthorController.list.bind(AuthorController));
router.post('/authors', AuthorController.create.bind(AuthorController));

router.post('/auth/register', AuthController.register.bind(AuthController));
router.post('/auth/login', AuthController.login.bind(AuthController));
router.get('/auth/me', AuthController.getUser.bind(AuthController));

module.exports = router;
