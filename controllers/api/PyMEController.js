/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;

module.exports = {
    index: (req, res, next) =>  {
        PyME.findById(1, {
                include: [{
                    model: Saldo,
                    as: 'saldo'
                }, {
                    model: Deposito,
                    as: 'deposito'
                }]
            })
            .then(pyme => {
                let x = pyme.algo();
                console.log(x);
            });
    }
};
