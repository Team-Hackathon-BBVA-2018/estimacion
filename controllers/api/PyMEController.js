/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:controllers:api:PyMEController');
const PyME = require('../../models').PyME;
const Saldo = require('../../models').Saldo;
const Deposito = require('../../models').Deposito;
const Buro = require('../../models').Buro;
const Resultados = require('../../models').Resultados;
const _ = require('lodash');

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

                let otorgantes = infoBuro.creditos.otorgantes;
                let otorgantesKeys = Object.keys(otorgantes);

                let tiposCredito = infoBuro.creditos.tipos;
                let tiposCreditoKeys = Object.keys(tiposCredito);

                /*
                let algo = _.maxBy(tiposCreditoKeys, key => {
                    return tiposCredito[key];
                });

                console.log(Math.max(raw));*/

                let externos = [];

                _.each(otorgantesKeys, llave => {
                    if (llave !== 'BBV') {
                        externos.push(otorgantes[llave]);
                    }
                });

                let creditosExternos = _.sumBy(externos, externo => {
                    return externo.total;
                });

                let inversionExterna = _.sumBy(externos, externo => {
                    return externo.oportunidad;
                });

                let entry = {
                    idPyme: pyme.id,
                    saldoTasaCrecimiento: saldosResume.tasaDeIncremento,
                    saldoIncrementoTotal: saldosResume.incrementoTotal,
                    depositoTasaCrecimiento: depositosResume.tasaDeIncremento,
                    depositoIncrementoTotal: depositosResume.incrementoTotal,
                    deudaTotal: infoBuro.deuda,
                    porcentajePagado: infoBuro.porcentajePagado,
                    creditosSolicitados: infoBuro.creditos.creditosSolicitados,
                    creditosExternos: creditosExternos,
                    inversionExterna: inversionExterna,
                    //creditoMasSolicitado:
                };

                Resultados.create(entry)
                    .then(resultado => {
                        fullResume.idResultado = resultado.id;
                        res.status(200).json(fullResume);
                    });

            });
    }
};