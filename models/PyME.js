/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:PyME');

module.exports = (sequelize, DataTypes) => {

    const PyME = sequelize.define('PyME', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_pyme'
        },
        numeroCliente: {
            type: DataTypes.TEXT,
            field: 'numero_cliente'
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rfc: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        sector: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        actividad: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        antiguedad: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        calle: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        colonia: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        exterior: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        departamento: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        municipio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        estado: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cp: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        pais: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'pyme',
        underscored: true,
        paranoid: true
    });

    PyME.associate = models => {
        PyME.hasOne(models.Deposito, {
            as: 'deposito',
            foreignKey: 'id_pyme'
        });

        PyME.hasOne(models.Saldo, {
            as: 'saldo',
            foreignKey: 'id_pyme'
        });
    };

    PyME.prototype.algo = function() {
        console.log(this);
        return this.saldo['201611'] + this.saldo['201612'];
    };

    return PyME;
};

