var mysql = require('./../models/mysql');

exports.dump = function(req, res, next){
    mysql.dump(function(consulta){
        res.json(consulta);
    });
}
