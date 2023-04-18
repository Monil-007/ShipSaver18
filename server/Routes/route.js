const express = require('express')
const router = express.Router();

const { rkfunc } = require('../Controllers/functions.js');

router.post('/api/rk', rkfunc);

module.exports = router