var mysql = require('mysql');
var env = process.env.NODE_ENV || 'database',
    databaseConfig = require('./../config/' + env + '.js');

var connection = mysql.createConnection({
    host: databaseConfig.host,
    user: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.database,
    timezone: 'utc'
});

exports.nuevoMarengo = function (req, fn) {
   console.log("entrando en modelo, por llamar al SP de mysql",req.body)

    var name = '"' + req.body.name + '"';
    var username = '"' + req.body.username + '"';
    var mail = '"' + req.body.mail + '"';

    connection.query('call marengo_nuevo(' + name + ',' + username + ',' + mail + ')', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}



exports.listarMarengo = function (fn) {
    connection.query('call tarjeta_listar()', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}