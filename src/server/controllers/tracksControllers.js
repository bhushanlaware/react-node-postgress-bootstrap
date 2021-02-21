const trackServices = require('../services/tracksServices')
const getVehiclesForTime = async (req, res, next) => {
  try {
    const tracks = await trackServices.getVehiclesForTime(req.query.start_tis, req.query.end_tis)
    res.send(tracks);
  }
  catch (error) {
    console.error(error);
    res.send(500);
  }
}
module.exports = {
  getVehiclesForTime,
}