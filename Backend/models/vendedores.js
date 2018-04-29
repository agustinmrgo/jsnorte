var mysql = require('mysql');
var env    = process.env.NODE_ENV || 'database',
    databaseConfig = require('./../config/' + env + '.js');

var connection = mysql.createConnection({
  host     : databaseConfig.host,
  user     : databaseConfig.user,
  password : databaseConfig.password,
  database : databaseConfig.database,
  timezone : 'utc'
});


exports.listarVendedores = function(fn){
    connection.query('call vendedores_listar()', function(err, rows){  
        if (err) fn (err);  
        else fn(rows[0]); 
    });
}

