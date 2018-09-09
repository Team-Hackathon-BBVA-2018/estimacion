/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buro', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_buro'
      },
      fechaConsulta: {
        type: Sequelize.TEXT,
        field: 'fecha_consulta'
      },
      contrato: {
        type: Sequelize.TEXT
      },
      tipoOtorgante: {
        type: Sequelize.TEXT,
        field: 'tipo_otorgante'
      },
      saldoInicial: {
        type: Sequelize.FLOAT,
        field: 'saldo_inicial'
      },
      moneda: {
        type: Sequelize.TEXT
      },
      fechaApertura: {
        type: Sequelize.TEXT,
        field: 'fecha_apertura'
      },
      plazo: {
        type: Sequelize.INTEGER
      },
      tipoCambio: {
        type: Sequelize.TEXT,
        field: 'tipo_cambio'
      },
      tipoCredito: {
        type: Sequelize.TEXT,
        field: 'tipo_credito'
      },
      vigente: {
        type: Sequelize.FLOAT
      },
      d29: {
        type: Sequelize.INTEGER
      },
      d59: {
        type: Sequelize.INTEGER
      },
      d89: {
        type: Sequelize.INTEGER
      },
      d119: {
        type: Sequelize.INTEGER
      },
      d179: {
        type: Sequelize.INTEGER
      },
      d180: {
        type: Sequelize.INTEGER
      },
      actualizacion: {
        type: Sequelize.INTEGER
      },
      fechaCierre: {
        type: Sequelize.TEXT,
        field: 'fecha_cierre'
      },
      historia: {
        type: Sequelize.TEXT
      },
      fechaCorte: {
        type: Sequelize.TEXT,
        field: 'fecha_corte'
      },
      numeroCliente: {
        type: Sequelize.TEXT,
        field: 'numero_cliente'
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
    return queryInterface.dropTable('buro');
  }
};