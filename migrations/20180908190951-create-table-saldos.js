/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('saldos', {
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
        201608: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201609: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201610: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201611: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201612: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201701: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201702: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201703: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201704: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201705: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201706: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201707: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201708: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201709: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201710: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201711: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201712: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201801: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201802: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201803: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201804: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201805: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201806: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        201807: {
          type: Sequelize.FLOAT,
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
    return queryInterface.dropTable('saldos');
  }
};
