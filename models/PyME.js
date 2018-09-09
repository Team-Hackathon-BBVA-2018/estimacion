/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:PyME');
const settings = require('../sources/additional.json');
const _ = require('lodash');

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

        PyME.hasMany(models.Buro, {
            as: 'buro',
            foreignKey: 'numero_cliente',
            sourceKey: 'numero_cliente'
        });
    };

    PyME.prototype.info = function () {
        return {
            nombre: this.nombre,
            rfc: this.rfc,
            sector: this.sector,
            actividad: this.actividad,
            antiguedad: this.antiguedad
        };
    };

    PyME.prototype.infoBuro = function () {
        let deuda = [];
        let montoInicial = [];
        let monedas = [];
        let otorgantes = {};
        otorgantes.total = [];
        otorgantes.detalles = {};//settings.otorgantes;

        _.each(this.buro, buro => {
            deuda.push(buro.vigente);
            montoInicial.push(buro.saldoInicial);
            monedas.push(settings.moneda[buro.moneda]);
            otorgantes.total.push(buro.tipoOtorgante);
            if (otorgantes.detalles[buro.tipoOtorgante] === undefined) {
                otorgantes.detalles[buro.tipoOtorgante] = {
                    total: 0,
                    oportunidad: 0
                };
            }
            otorgantes.detalles[buro.tipoOtorgante].total += 1;
            otorgantes.detalles[buro.tipoOtorgante].oportunidad += buro.saldoInicial;
        });

        let moneda = _.countBy(monedas, moneda => {
            return moneda;
        });

        otorgantes.total = _.countBy(otorgantes.total, otorgante => {
            return otorgante;
        });

        let sumDeuda = _.sum(deuda);
        let sumInicial = _.sum(montoInicial);
        let pagado = sumInicial - sumDeuda;
        let porcentajePagado = Math.round((pagado * 100 / sumInicial) * 100) / 100;

        return {
            montoInicial: sumInicial,
            deuda: sumDeuda,
            pagado: pagado,
            porcentajePagado: porcentajePagado,
            creditos: {
                creditosSolicitados: this.buro.length,
                monedas: moneda,
                otorgantes
            }
        };
    };

    return PyME;
};