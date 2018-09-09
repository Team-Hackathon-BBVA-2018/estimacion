/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resultados', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_resultados'
      },
      idPyme: {
        type: Sequelize.INTEGER,
        field: 'id_pyme',
        references: {
          model: 'pyme',
          key: 'id_pyme'
        }
      },
      saldoTasaCrecimiento: {
        type: Sequelize.FLOAT,
        field: 'saldo_tasa_crecimiento'
      },
      saldoIncrementoTotal: {
        type: Sequelize.FLOAT,
        field: 'saldo_incremento_total'
      },
      depositoTasaCrecimiento: {
        type: Sequelize.FLOAT,
        field: 'deposito_tasa_crecimiento'
      },
      depositoIncrementoTotal: {
        type: Sequelize.FLOAT,
        field: 'deposito_incremento_total'
      },
      deudaTotal: {
        type: Sequelize.FLOAT,
        field: 'deuda_total'
      },
      porcentajePagado: {
        type: Sequelize.FLOAT,
        field: 'porcentaje_pagado'
      },
      creditosSolicitados: {
        type: Sequelize.INTEGER,
        field: 'creditos_solicitados'
      },
      creditosExternos: {
        type: Sequelize.FLOAT,
        field: 'creditos_externos'
      },
      inversionExterna: {
        type: Sequelize.FLOAT,
        field: 'inversion_externa'
      },
      creditoMasSolicitado: {
        type: Sequelize.TEXT,
        field: 'credito_mas_solicitado'
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
    return queryInterface.dropTable('resultados');
  }
};