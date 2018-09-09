/* jshint node: true */
'use strict';

const express = require('express');
const router = express.Router();
const _ = require('lodash');
const debug = require('debug')('estimacion:routes:buro');
const controllers = require('../../controllers');

var routes = {
    "/:id": {
        GET: {
            middleware: [
                controllers.api.PyMEController.buro
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