var categorias = require('./../models/categorias');

exports.getCategorias = function(req, res, next){
    var id = req.params.id;
    if (!id) {
        id = null;
    }else{
    }
    categorias.getCategoriasConPath(id,function(consulta){
        res.json(consulta);
    });
}


