var mysql = require('mysql');
var env    = process.env.NODE_ENV || 'database',
    databaseConfig = require('./../config/' + env + '.js');

var connection = mysql.createConnection({
  host     : databaseConfig.host,
  user     : databaseConfig.user,
  password : databaseConfig.password,
  database : databaseConfig.database,
});

exports.login = function(usuario, contrasenia, fn){
    connection.query('call usuario_login('+usuario+','+contrasenia+')', function(err, rows){  
                if (err) fn (err);  
                fn(rows[0]); 
            });
}

exports.buscarPorUsername = function(usuario, fn){
    connection.query('call usuario_buscarPorUsername('+usuario+')', function(err, rows){  
                if (err) fn (err);  
                fn(rows[0]); 
            });
}


