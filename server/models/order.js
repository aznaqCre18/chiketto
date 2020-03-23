'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    no_invoice: DataTypes.STRING,
    barcode: DataTypes.STRING,
    id_tiket: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.kereta, {
      foreignKey: 'id_tiket'
    })

    order.belongsTo(models.user, {
      foreignKey: 'id_user'
    })
  };
  return order;
};