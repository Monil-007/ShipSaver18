const express = require('express')
const router = express.Router();

const { rkfunc, rkGetfunc } = require('../Controllers/functions.js');


router.post('/api/rk', rkfunc);
router.post('/api/rkGet/', rkGetfunc);

module.exports = router