/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:Buro');

module.exports = (sequelize, DataTypes) => {

    const Buro = sequelize.define('Buro', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_buro'
        },
        fechaConsulta: {
            type: DataTypes.TEXT,
            field: 'fecha_consulta'
        },
        contrato: {
            type: DataTypes.TEXT
        },
        tipoOtorgante: {
            type: DataTypes.TEXT,
            field: 'tipo_otorgante'
        },
        saldoInicial: {
            type: DataTypes.FLOAT,
            field: 'saldo_inicial'
        },
        moneda: {
            type: DataTypes.TEXT
        },
        fechaApertura: {
            type: DataTypes.TEXT,
            field: 'fecha_apertura'
        },
        plazo: {
            type: DataTypes.INTEGER
        },
        tipoCambio: {
            type: DataTypes.TEXT,
            field: 'tipo_cambio'
        },
        tipoCredito: {
            type: DataTypes.TEXT,
            field: 'tipo_credito'
        },
        vigente: {
            type: DataTypes.FLOAT
        },
        d29: {
            type: DataTypes.INTEGER
        },
        d59: {
            type: DataTypes.INTEGER
        },
        d89: {
            type: DataTypes.INTEGER
        },
        d119: {
            type: DataTypes.INTEGER
        },
        d179: {
            type: DataTypes.INTEGER
        },
        d180: {
            type: DataTypes.INTEGER
        },
        actualizacion: {
            type: DataTypes.INTEGER
        },
        fechaCierre: {
            type: DataTypes.TEXT,
            field: 'fecha_cierre'
        },
        historia: {
            type: DataTypes.TEXT
        },
        fechaCorte: {
            type: DataTypes.TEXT,
            field: 'fecha_corte'
        },
        numeroCliente: {
            type: DataTypes.TEXT,
            field: 'numero_cliente'
        }
    }, {
        tableName: 'buro',
        underscored: true,
        timestamps: false
    });

    return Buro;
};