var usuarios = require('./../models/usuarios');
var dateformat = require('dateformat');

exports.usuarioDame = function(req, res, next){
    usuarios.usuarioDame(req.body,function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            res.json(consulta);
        }
    });
}
