/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;
const Buro = require('../../models').Buro;

module.exports = {
    index: (req, res) => {
        let id = req.params.id ? req.params.id : 1;
        debug(`Id to search: ${id}`);

        PyME.findById(id, {
                include: [{
                    model: Saldo,
                    as: 'saldo',
                    attributes: {
                        exclude: [
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
                }, {
                    model: Buro,
                    as: 'buro'
                }]
            })
            .then(pyme => {
                let infoPyME = pyme.info();
                let infoBuro = pyme.infoBuro();
                let saldosResume = pyme.crecimientoSaldos();
                let depositosResume = pyme.crecimientoDepositos();
                let fullResume = {
                    datosEmpresariales: infoPyME,
                    resumenDeSaldos: saldosResume,
                    resumenDeDepositos: depositosResume,
                    buro: infoBuro
                };
                res.status(200).json(fullResume);
            });
    }
};