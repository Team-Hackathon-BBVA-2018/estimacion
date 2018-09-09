/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:Deposito');

module.exports = (sequelize, DataTypes) => {

    const Deposito = sequelize.define('Deposito', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_deposito'
        },
        idPyme: {
            type: DataTypes.INTEGER,
            field: 'id_pyme',
            references: {
                model: 'pyme',
                key: 'id_pyme'
            }
        },
        201608: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201609: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201610: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201611: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201612: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201701: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201702: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201703: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201704: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201705: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201706: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201707: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201708: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201709: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201710: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201711: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201712: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201801: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201802: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201803: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201804: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201805: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201806: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        201807: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.fn('now'),
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.fn('now'),
            allowNull: false,
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    });

    return Deposito;
};