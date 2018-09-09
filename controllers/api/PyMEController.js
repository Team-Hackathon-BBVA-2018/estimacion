/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;
const Buro = require('../../models').Buro;

module.exports = {
    buro: (req, res, next) =>  {
        PyME.findById(req.params.id, {
                include: [{
                    model: Buro,
                    as: 'buro'
                }]
            })
            .then(pyme => {
                let infoPyME = pyme.info();
                let infoBuro = pyme.infoBuro();
                return res.json({
                    datosEmpresariales: infoPyME,
                    buro: infoBuro
                });
            });
    }
};
