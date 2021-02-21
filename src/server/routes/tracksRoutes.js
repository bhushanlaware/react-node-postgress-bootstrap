const express = require('express');
const tracksControllers = require('../controllers/tracksControllers')
const tracksValidator = require('../middlewares/validators/tracksValidator')
const router = express.Router();
/* GET tracks listing. */
router.get(
  '/place_interactions',
  // tracksValidator.tracksSearchValidator,
  tracksControllers.getVehiclesForTime,
);

module.exports = router;
