/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:models:PyME');
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
    };

    PyME.prototype.crecimientoSaldos = function() {
        let saldoPeriods = [];
        let increasesByPeriod = [];
        let periods = {};  
        for(let key in this.saldo.rawAttributes){
            if(/^([0-9]{5,})$/.test(key)){
                saldoPeriods.push(key);
            }
        }
        debug(saldoPeriods);
        let totalIncrease = Math.round((this.saldo[_.last(saldoPeriods)]/this.saldo[_.first(saldoPeriods)] - 1) * 100)/100;
        saldoPeriods.filter((period, index)=>{
            if(index < saldoPeriods.length - 1){
                debug(`Iterating: ${this.saldo[saldoPeriods[index]]}`);
                let increase = Math.round((this.saldo[saldoPeriods[index + 1]]/this.saldo[saldoPeriods[index]] -1 ) * 100)/100;
                increasesByPeriod.push(increase);
                if(index === 0 ){
                    periods[period] = {
                        "saldo": this.saldo[saldoPeriods[index]],
                        "incremento": `0.0%`,
                    }
                }
                else{
                    periods[period] = {
                        "saldo": this.saldo[saldoPeriods[index + 1]],
                        "incremento": `${increase}%`,
                        "periodoAnterior": saldoPeriods[index]
                    }
                }
            }
        });
        let averageIncrease = increasesByPeriod.reduce((lastIncrement, currentIncrement)=>{
            return lastIncrement + currentIncrement;
        });
        debug(averageIncrease);
        debug(`Total increase in 25 months: ${totalIncrease}`);
        debug(`Total increase in 25 months: ${totalIncrease}`);
        averageIncrease = Math.round((averageIncrease / saldoPeriods.length) * 100)/100;
        debug(`Average increment by period: ${averageIncrease}`);
        let response = {
            "tasaDeIncremento": averageIncrease,
            "incrementoTotal": totalIncrease,
            "periodos": periods
        }
        return response;
    };
    PyME.prototype.crecimientoDepositos = function() {
        let depositoPeriods = [];
        let increasesByPeriod = [];
        let periods = {};  
        for(let key in this.deposito.rawAttributes){
            if(/^([0-9]{5,})$/.test(key)){
                depositoPeriods.push(key);
            }
        }
        debug(depositoPeriods);
        let totalIncrease = Math.round((this.deposito[_.last(depositoPeriods)]/this.deposito[_.first(depositoPeriods)] - 1) * 100)/100;
        depositoPeriods.filter((period, index)=>{
            if(index < depositoPeriods.length - 1){
                debug(`Iterating: ${this.deposito[depositoPeriods[index]]}`);
                let increase = Math.round((this.deposito[depositoPeriods[index + 1]]/this.deposito[depositoPeriods[index]] -1 ) * 100)/100;
                increasesByPeriod.push(increase);
                if(index === 0 ){
                    periods[period] = {
                        "deposito": this.deposito[depositoPeriods[index]],
                        "incremento": `0.0%`,
                    }
                }
                else{
                    periods[period] = {
                        "deposito": this.deposito[depositoPeriods[index + 1]],
                        "incremento": `${increase}%`,
                        "periodoAnterior": depositoPeriods[index]
                    }
                }
            }
        });
        let averageIncrease = increasesByPeriod.reduce((lastIncrement, currentIncrement)=>{
            return lastIncrement + currentIncrement;
        });
        debug(averageIncrease);
        debug(`Total increase in 25 months: ${totalIncrease}`);
        debug(`Total increase in 25 months: ${totalIncrease}`);
        averageIncrease = Math.round((averageIncrease / depositoPeriods.length) * 100)/100;
        debug(`Average increment by period: ${averageIncrease}`);
        let response = {
            "tasaDeIncremento": averageIncrease,
            "incrementoTotal": totalIncrease,
            "periodos": periods
        }
        return response;
    };

    return PyME;
};

