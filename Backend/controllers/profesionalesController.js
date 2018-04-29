var profesional = require('./../models/profesionales');
var dateformat = require('dateformat');
var vendedores = require('./../models/vendedores');

exports.dameProfesional = function(req, res, next){
    var dni = req.body.dni;
    profesional.dameProfesional(dni,function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}

exports.bajaProfesional = function(req, res, next){
    var idProfesional = req.body.idProfesional;
    profesional.bajaProfesional(idProfesional,function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}

exports.listarProfesionales = function(req, res, next){
    profesional.listarProfesionales(function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}
    
exports.nuevoProfesional = function(req, res, next){
    
    var fechaImpresion = '"'+req.body.fechaImpresion+'"';
    var dni = req.body.dni;
    var apellido = '"'+req.body.apellido+'"';
    var nombre = '"'+req.body.nombre+'"';
    var especialidad = '"'+req.body.especialidad+'"';
    var domicilio = '"'+req.body.domicilio+'"';
    var localidad = '"'+req.body.localidad+'"';
    var provincia = '"'+req.body.provincia+'"';
    var telefono = '"'+req.body.telefono+'"';
    var profesion = '"'+req.body.prefesion+'"';
    var mail = '"'+req.body.mail+'"';
    var vendedor = '"'+req.body.vendedor+'"';
    var autorizado = '"'+req.body.autorizado+'"';
    var dniAutorizado = req.body.dniAutorizado;

    profesional.nuevoProfesional(fechaImpresion,dni,apellido,nombre,especialidad,domicilio,localidad,provincia,
                                telefono,profesion,mail,vendedor,autorizado,dniAutorizado,function(consulta){
        res.json(consulta);  
    });
}

exports.modificarProfesional = function(req, res, next){
    
    var idProfesional = req.body.idProfesional;
    var apellido = '"'+req.body.apellido+'"';
    var nombre = '"'+req.body.nombre+'"';
    var especialidad = '"'+req.body.especialidad+'"';
    var domicilio = '"'+req.body.domicilio+'"';
    var localidad = '"'+req.body.localidad+'"';
    var provincia = '"'+req.body.provincia+'"';
    var telefono = '"'+req.body.telefono+'"';
    var profesion = '"'+req.body.profesion+'"';
    var mail = '"'+req.body.mail+'"';
    var vendedor = '"'+req.body.vendedor+'"';
    var autorizado = '"'+req.body.autorizado+'"';
    var dniAutorizado = req.body.dniAutorizado;

    profesional.modificarProfesional(idProfesional,apellido,nombre,especialidad,domicilio,localidad,provincia,
                                telefono,profesion,mail,vendedor,autorizado,dniAutorizado,function(consulta){
        res.json(consulta);  
    });
}

exports.excel = function(req, res, next){
    var nodeExcel=require('excel-export');
    var conf={}; //lleva la configuarcion de las columnas y filas
    arr=[]; // array donde se generan las filas
    var fechaInicio = '"'+req.params.fechaInicio+'"';
    var fechaFin = '"'+req.params.fechaFin+'"';
    conf.cols=[{
        caption:'DNI',
        type:'number',
        width:101
    },
    {
        caption:'APELLIDO',
        type:'string',
        width:90
    },
    {
        caption:'NOMBRE',
        type:'string',
        width:90
    },
    {
        caption:'Especialidad',
        type:'string',
        width:90
    },
    {
        caption:'DOMICILIO',
        type:'string',
        width:200
    },
    {
        caption:'Localidad',
        type:'string',
        width:100
    },
    {
        caption:'Provincia',
        type:'string',
        width:45
    },
    {
        caption:'TELEFONO',
        type:'string',
        width:85
    },
    {
        caption:'Fecha Impresion',
        type:'string',
        width:85
    },
    {
        caption:'Profesion',
        type:'string',
        width:85
    },
    {
        caption:'MAIL',
        type:'string',
        width:105
    },
    {
        caption:'Vendedor',
        type:'string',
        width:70
    },
    {
        caption:'Autorizado',
        type:'string',
        width:60
    },
    {
        caption:'DNI Aut',
        type:'number',
        width:40
    }
    ];
        
    profesional.getProfesionalesPorFecha(fechaInicio,fechaFin,function(consulta){
            let profesional = consulta;
            if(profesional[0].codigo !== 0){
                for(i=0;i <profesional.length;i++){
                    dni = profesional[i].dni;
                    apellido = profesional[i].apellido;
                    nombre = profesional[i].nombre;
                    especialidad = profesional[i].especialidad;
                    domicilio = profesional[i].domicilio;
                    localidad = profesional[i].nombreCiudad;
                    provincia = profesional[i].nombreProvincia;
                    telefono = profesional[i].telefono;
                    fechaImpresion = profesional[i].fechaImpresion;
                    profesion = profesional[i].profesion;
                    mail = profesional[i].mail
                    vendedor = profesional[i].nombreVendedor;
                    autorizado = profesional[i].autorizado;
                    dniAutorizado = profesional[i].dniAutorizado;

                    fechaImpresion = new Date(fechaImpresion.getUTCFullYear(),
                                    fechaImpresion.getUTCMonth(),
                                    fechaImpresion.getUTCDate(),
                                    fechaImpresion.getUTCHours(),
                                    fechaImpresion.getUTCMinutes(),
                                    fechaImpresion.getUTCSeconds());

                    fechaImpresion = dateformat(fechaImpresion,'dd/mm/yyyy');

                    a=[dni,apellido,nombre,especialidad,domicilio,localidad,provincia,telefono,fechaImpresion,profesion,mail,vendedor,autorizado,dniAutorizado,];
                    arr.push(a);
                }

                conf.rows=arr; // armo el excel con todos los datos.

                var result=nodeExcel.execute(conf);
                res.setHeader('Content-Type','application/vnd.openxmlformates');
                res.setHeader("Content-Disposition","attachment;filename="+"Profesionales.xlsx");
                res.end(result,'binary');
            }else{
                res.json([{"codigo": 0,"mensaje":"No se crearon profesionales en ese rango"}])
            }
        }
    );      
}

exports.dameProvincias = function(req, res, next){
    profesional.dameProvincias(function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}


exports.dameCiudades = function(req, res, next){
    var idProvincia = req.body.idProvincia;
    profesional.dameCiudades(idProvincia,function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}

exports.dameVendedores = function(req, res, next){
    vendedores.listarVendedores(function(consulta){
        if(typeof consulta[0].codigo !== 'undefined' && consulta[0].codigo === 0){
            res.json(consulta);
        }else{
            consulta[0].codigo = 1; 
            res.json(consulta);
        }
    });
}