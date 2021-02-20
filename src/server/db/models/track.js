const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Track.init({
    lat: DataTypes.NUMBER,
    lon: DataTypes.STRING,
    time: DataTypes.TIME,
    vehicleId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};