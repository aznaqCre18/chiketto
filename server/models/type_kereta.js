'use strict';
module.exports = (sequelize, DataTypes) => {
  const type_kereta = sequelize.define('type_kereta', {
    name: DataTypes.STRING
  }, {});
  type_kereta.associate = function(models) {
    // associations can be defined here
  };
  return type_kereta;
};