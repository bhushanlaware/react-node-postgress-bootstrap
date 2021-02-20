const Track = require("../db/models").Track;

const getVehiclesForTime = async (startTime, endTime) => {
    const products = await Track.findAll();
    // console.log(products)
    return products;
};

module.exports = {
    getVehiclesForTime
}