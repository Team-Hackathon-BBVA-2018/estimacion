/* jshint node: true */
'use strict';

const express = require('express');
const router = express.Router();
const _ = require('lodash');
const debug = require('debug')('estimacion:routes:pyme');
const controllers = require('../../controllers');

var routes = {
    "/": {
        GET: {
            middleware: [
                controllers.api.PyMEController.index
            ]
        }
    },
    "/:id": {
        GET: {
            middleware: [
                controllers.api.PyMEController.index
            ]
        }
    }
};

_.forOwn(routes, function (methods, endpoint) {
    _.forOwn(methods, function (details, method) {
        method = method.toLowerCase();
        if (typeof router[method] == "function") {
            debug("Cargando endpoint %s#%s", endpoint, method);
            router[method](endpoint, details.middleware);
        }
    });
});

module.exports = router;