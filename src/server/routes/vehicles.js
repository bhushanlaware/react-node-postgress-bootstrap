const express = require('express');
const vehicleService = require('../services/vehicles')
const router = express.Router();
/* GET users listing. */
router.get('/getAll', async (req, res, next) => {
  const result = await vehicleService.getAllVehicles();
  res.send(result);
});

module.exports = router;
