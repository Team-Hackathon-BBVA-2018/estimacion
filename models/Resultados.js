/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:Resultados');

module.exports = (sequelize, DataTypes) => {

    const Resultados = sequelize.define('Resultados', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_resultados'
        },
        idPyme: {
            type: DataTypes.INTEGER,
            field: 'id_pyme',
            references: {
                model: 'pyme',
                key: 'id_pyme'
            }
        },
        saldoTasaCrecimiento: {
            type: DataTypes.FLOAT,
            field: 'saldo_tasa_crecimiento'
        },
        saldoIncrementoTotal: {
            type: DataTypes.FLOAT,
            field: 'saldo_incremento_total'
        },
        depositoTasaCrecimiento: {
            type: DataTypes.FLOAT,
            field: 'deposito_tasa_crecimiento'
        },
        depositoIncrementoTotal: {
            type: DataTypes.FLOAT,
            field: 'deposito_incremento_total'
        },
        deudaTotal: {
            type: DataTypes.FLOAT,
            field: 'deuda_total'
        },
        porcentajePagado: {
            type: DataTypes.FLOAT,
            field: 'porcentaje_pagado'
        },
        creditosSolicitados: {
            type: DataTypes.INTEGER,
            field: 'creditos_solicitados'
        },
        creditosExternos: {
            type: DataTypes.FLOAT,
            field: 'creditos_externos'
        },
        inversionExterna: {
            type: DataTypes.FLOAT,
            field: 'inversion_externa'
        },
        creditoMasSolicitado: {
            type: DataTypes.TEXT,
            field: 'credito_mas_solicitado'
        },
        numeroCliente: {
            type: DataTypes.TEXT,
            field: 'numero_cliente'
        }
    }, {
        tableName: 'resultados',
        underscored: true,
        paranoid: true
    });

    return Resultados;

};