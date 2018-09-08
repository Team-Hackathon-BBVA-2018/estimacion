/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pyme', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_pyme'
      },
      nombre: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      rfc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      calle: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      colonia: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      exterior: {
        type: Sequelize.TEXT, 
        allowNull: true
      },
      departamento: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      municipio: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      estado: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cp: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pais: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('pyme');
  }
};
