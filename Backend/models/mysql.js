var mysqlDump = require('mysqldump');
var schedule = require('node-schedule');

exports.dump = function(fn){
    mysqlDump({
        host: 'rickybruno.sytes.net',
        user: 'root',
        password: '',
        database: 'ClubHonorarios',
        tables:['Operaciones'], // only these tables
        // getDump: false,//BOOLEAN Return dump as a raw data on callback instead of create file Default: false;
        // where: {'players': 'id < 1000'}, // Only test players with id < 1000
        dest:'./mysqlDumps/chBack.sql' // destination file 
    },function(err){
        if (err) fn (err);  
        else{
            console.log("Dump correcto desde models");
            fn({codigo: 1, mensaje: "dump correcto"});
        }
    })
}

// var j = schedule.scheduleJob(' 12 * * * * * ', function(){
//                             //   * * * * * *
//                             //   ┬ ┬ ┬ ┬ ┬ ┬
//                             //   │ │ │ │ │ |
//                             //   │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
//                             //   │ │ │ │ └───── month (1 - 12)
//                             //   │ │ │ └────────── day of month (1 - 31)
//                             //   │ │ └─────────────── hour (0 - 23)
//                             //   │ └──────────────────── minute (0 - 59)
//                             //   └───────────────────────── second (0 - 59, OPTIONAL)
//     mysqlDump({
//         host: 'rickybruno.sytes.net',
//         user: 'root',
//         password: '',
//         database: 'ClubHonorarios',
//         tables:['Operaciones'], // only these tables
//         // getDump: false,//BOOLEAN Return dump as a raw data on callback instead of create file Default: false;
//         // where: {'players': 'id < 1000'}, // Only test players with id < 1000
//         dest:'./mysqlDumps/chBack.sql' // destination file 
//     },function(err){
//         if (err) console.log("error");
//         else console.log("Dump correcto desde models");
//     })


// });