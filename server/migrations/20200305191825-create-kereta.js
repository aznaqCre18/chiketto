'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kereta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_train: {
        type: Sequelize.STRING
      },
      id_type: {
        type: Sequelize.INTEGER,
        references: {
          model: 'type_kereta',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      date_start: {
        type: Sequelize.DATEONLY,
        get: function() {
          return moment.utc(this.getDataValue('CreateDate')).format('YYYY-MM-DD')
      }
      },
      start_station: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.TIME
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arival_time: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kereta');
  }
};