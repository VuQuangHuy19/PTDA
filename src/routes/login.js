const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

router.get('/', LoginController.index);

module.exports = router;
