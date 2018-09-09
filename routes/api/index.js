/* jshint node: true */
'use strict';

const debug = require('debug')('estimacion:routes');
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var express = require('express');
var router = express.Router();
const _ = require('lodash');

function loadRoutes(location) {
    debug("Analizando %s ...", location);
    var controllers = {};
    fs
        .readdirSync(location)
        .filter(function (file) {
            return file !== basename;
        })
        .forEach(function (file) {
            if (file.slice(-3) !== '.js' && file.indexOf('.') >= 0) return;
            var nombre;
            var pathRouter;
            var fileRouter;
            if (file.slice(-3) === '.js') {
                nombre = file.substring(0, file.indexOf("."));
                pathRouter = path.join(location, nombre);
                debug("Cargando archivo js: ", nombre)
                fileRouter = require(pathRouter);
                router.use("/" + nombre, fileRouter);
            } else {
                nombre = file;
                pathRouter = path.join(location, nombre);
                debug("Cargando carpeta: ", nombre);
                fileRouter = require(pathRouter);
                router.use("/" + nombre, fileRouter);

            }
        });
}

loadRoutes(__dirname);

module.exports = router;