const express = require('express');

const router = express.Router();

const routes = [
  require('./users'),
];

router.use('/', routes);

module.exports = router;
