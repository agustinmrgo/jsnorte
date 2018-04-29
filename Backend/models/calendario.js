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

exports.listarFechasHabiles = function(fn){
    connection.query('call listar_fechas_habiles()', function(err, rows){
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.listarFechasHabilesPorAnio = function(anio,fn){
    connection.query('call listar_fechas_habiles_anio('+anio+')', function(err, rows){
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.modificarCalendario = function(arrayFechas,fn){
    connection.query('call modificar_dias_habiles('+arrayFechas+')', function(err, rows){  
         console.log("rows 0 en models ", rows[0]);
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}






exports.dameProfesional = function(dni,fn){
    // console.log('desde el modelo',dni)
    connection.query('call profesionalTemp_dame('+dni+')', function(err, rows){   
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.bajaProfesional = function(idProfesional,fn){
    connection.query('call profesionalTemp_baja('+idProfesional+')', function(err, rows){   
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}




exports.listarProfesionales = function(fn){
    // console.log("entrado al modelo listarProf");
    connection.query('call profesionalTemp_listar()', function(err, rows){
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.nuevoProfesional = function(fechaImpresion,dni,apellido,nombre,especialidad,domicilio,localidad,provincia,
                                    telefono,profesion,mail,vendedor,autorizado,dniAutorizado,fn){
    connection.query('call profesionalTemp_nuevo('+fechaImpresion+','+dni+','+apellido+','+nombre+','+especialidad+','+
                        domicilio+','+localidad+','+provincia+','+telefono+','+profesion+','+mail+','+vendedor+','+
                        autorizado+','+dniAutorizado+')', function(err, rows){
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.modificarProfesional = function(idProfesional,apellido,nombre,especialidad,domicilio,localidad,provincia,
                                    telefono,profesion,mail,vendedor,autorizado,dniAutorizado,fn){
    connection.query('call profesionalTemp_modificar('+idProfesional+','+apellido+','+nombre+','+especialidad+','+
                        domicilio+','+localidad+','+provincia+','+telefono+','+profesion+','+mail+','+vendedor+','+
                        autorizado+','+dniAutorizado+')', function(err, rows){
        if (err) {
            consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
            fn (consulta);  
        }else fn(rows[0]); 
    });
}

exports.getProfesionalesPorFecha = function(fechaInicio,fechaFin,fn){
    connection.query('call profesionalTemp_listar_rango('+fechaInicio+','+fechaFin+')', function(err, rows){  
        if (err) fn (err);  
        else fn(rows[0]); 
    });
}

exports.dameProvincias = function(fn){
    connection.query('call dame_provincias()', function(err, rows){  
        if (err) fn (err);  
        else fn(rows[0]); 
    });
}

exports.dameCiudades = function(idProvincia,fn){
    connection.query('call dame_ciudades('+idProvincia+')', function(err, rows){  
        if (err) fn (err);  
        else fn(rows[0]); 
    });
}


