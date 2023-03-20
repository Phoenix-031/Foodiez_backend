const express = require('express');

const { payementIntent } = require('../controllers/Payement.controller');

const router = express.Router();

router.post('/', payementIntent);

module.exports = router;