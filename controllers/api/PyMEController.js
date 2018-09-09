/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;

module.exports = {
    index: (req, res, next) =>  {
        let id = (req.params.id ? req.params.id : 1);
        debug(`Id to search: ${id}`);
        PyME.findById(id, {
                include: [{
                    model: Saldo,
                    as: 'saldo',
                    attributes:{
                        exclude:[
                            'id',
                            'idPyme',
                            'created_at',
                            'updated_at',
                            'deleted_at'
                        ]
                    }
                }, {
                    model: Deposito,
                    as: 'deposito'
                }]
            })
            .then(pyme => {
                let saldosResume = pyme.crecimientoSaldos();
                let depositosResume = pyme.crecimientoDepositos();
                let fullResume = {
                    "nombre": pyme.nombre,
                    "resumenDeSaldos": saldosResume,
                    "resumenDeDepositos": depositosResume 
                }
                res.status(200).json(fullResume);
            });
    }
};
