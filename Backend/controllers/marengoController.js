var marengo = require('./../models/marengo');

exports.nuevoMarengo = function (req, res, next) {
   console.log("pasamos por ruta, entrando en controller, parametros", req.body);
   marengo.nuevoMarengo(req, function (consulta) {
         console.log("consulta recibida en controlador desde el modelo",consulta)
        res.json(consulta);
    });
}

exports.listarMarengo = function (req, res, next) {
    tarjeta.listarTarjetas(function (consulta) {
       console.log("pasamos por ruta, entrando en controller, parametros", req.body);
        if (typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0) {
            res.json(consulta);
        } else {
            consulta[0].codigo = 1;
            res.json(consulta);
        }
    });
}

exports.listarPersonas = function (req, res, next){
    
}