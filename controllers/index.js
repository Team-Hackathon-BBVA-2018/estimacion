/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');
var debug = require('debug')('estimacion:controllers');
var basename = path.basename(module.filename);

debug("Cargando controllers...");

function loadControllers(location) {
    var controllers = {};
    fs
        .readdirSync(location)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== basename);
        })
        .forEach(function (file) {
            if (file.slice(-3) !== '.js' && file.indexOf('.') >= 0) return;
            var nombre;
            if (file.slice(-3) === '.js')
                nombre = file.substring(0, file.indexOf("."));
            else
                nombre = file;
            var m = require(path.join(location, nombre));
            debug("Archivo de controllador cargado: " + nombre);
            controllers[nombre] = m;
        });
    return controllers;
}

module.exports.api = loadControllers(__dirname + '/api');
