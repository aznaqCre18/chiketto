'use strict';
module.exports = (sequelize, DataTypes) => {
  const kereta = sequelize.define('kereta', {
    name_train: DataTypes.STRING,
    id_type: DataTypes.INTEGER,
    date_start: DataTypes.DATEONLY,
    start_station: DataTypes.STRING,
    start_time: DataTypes.TIME,
    destination_station: DataTypes.STRING,
    arival_time: DataTypes.TIME,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  kereta.associate = function(models) {
    // associations can be defined here
    kereta.belongsTo(models.type_kereta, {
      foreignKey: 'id_type'
    })
  };
  return kereta;
};