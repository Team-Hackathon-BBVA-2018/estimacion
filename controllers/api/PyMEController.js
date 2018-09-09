/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;
const Buro = require('../../models').Buro;

module.exports = {
    index: (req, res, next) =>  {
        PyME.findById(1, {
                include: [{
                    model: Buro,
                    as: 'buro'
                }]
            })
            .then(pyme => {
                console.log(pyme);
            });
    }
};
