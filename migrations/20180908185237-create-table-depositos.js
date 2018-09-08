/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('depositos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_deposito'
      },
      idPyme: {
        type: Sequelize.INTEGER,
        field: 'id_pyme',
        references: {
          model: 'pyme',
          key: 'id_pyme'
        }
      },
      data: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        field: 'updated_at'
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('depositos');
  }
};
