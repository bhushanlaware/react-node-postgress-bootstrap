const express = require('express');

const router = express.Router();

const routes = [
  require('./vehicles'),
];

router.use('/', routes);

module.exports = router;
