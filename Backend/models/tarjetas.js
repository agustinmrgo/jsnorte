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

exports.nuevaTarjeta = function (req, fn) {

    var nombre = '"' + req.body.nombre + '"';
    var nombreCorto = '"' + req.body.nombreCorto + '"';
    var cadena = '"' + req.body.arrayCuotasComisiones + '"';
    connection.query('call tarjeta_nueva(' + nombre + ',' + nombreCorto + ',' + cadena + ')', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}

exports.modificarTarjeta = function (req, fn) {

    var idTarjeta = req.body.idTarjeta;
    var nombre = '"' + req.body.nombre + '"';
    var nombreCorto = '"' + req.body.nombreCorto + '"';
    var cadena = '"' + req.body.arrayCuotasComisiones + '"';
    connection.query('call tarjeta_modificar(' + idTarjeta + ',' + nombre + ',' + nombreCorto + ',' + cadena + ')', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}

exports.listarTarjetas = function (fn) {
    connection.query('call tarjeta_listar()', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}

exports.eliminarTarjeta = function (req, fn) {
    var idTarjeta = req.body.idTarjeta;
    connection.query('call tarjeta_baja(' + idTarjeta + ')', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}

exports.dameCuotasyComisiones = function (req, fn) {
    var idTarjeta = req.body.idTarjeta;
    connection.query('call tarjeta_dameCuotasyComisiones(' + idTarjeta + ')', function (err, rows) {
        if (err) {
            consulta = [{ 'codigo': 0, 'mensaje': "Error numero: " + err.errno + " descripcion: " + err.message }]
            fn(consulta);
        } else fn(rows[0]);
    });
}
