const Vehicle = require("../db/models").Vehicle;

const getAllVehicles = async () => {
    const products = await Vehicle.findAll();
    // console.log(products)
    return products;
};

module.exports= {
    getAllVehicles
}