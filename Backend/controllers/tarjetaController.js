var tarjeta = require('./../models/tarjetas');
var dateformat = require('dateformat');

exports.nuevaTarjeta = function (req, res, next) {
    tarjeta.nuevaTarjeta(req, function (consulta) {
        res.json(consulta);
    });
}

exports.modificarTarjeta = function (req, res, next) {
    tarjeta.modificarTarjeta(req, function (consulta) {
        res.json(consulta);
    });
}

exports.listarTarjetas = function (req, res, next) {
    tarjeta.listarTarjetas(function (consulta) {
        if (typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0) {
            res.json(consulta);
        } else {
            consulta[0].codigo = 1;
            res.json(consulta);
        }
    });
}

exports.eliminarTarjeta = function (req, res, next) {
    tarjeta.eliminarTarjeta(req, function (consulta) {
        res.json(consulta);
    });
}

exports.dameCuotasyComisiones = function (req, res, next) {
    tarjeta.dameCuotasyComisiones(req, function (consulta) {
        res.json(consulta);
    });
}
