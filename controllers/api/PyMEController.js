/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;

module.exports = {
    index: (req, res, next) =>  {
        let id = (req.id ? req.id : 1);
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
                let x = pyme.crecimientoSaldos();
                console.log(x);
                res.status(200).json(x);
            });
    }
};
