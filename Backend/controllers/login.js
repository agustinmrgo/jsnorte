var User = require('./../models/user');
var jwt = require('jsonwebtoken');  
var authConfig = require('./../config/auth');
 
exports.login = function(req, res, next){
    var username = '"'+req.body.username+'"';
    User.buscarPorUsername(username, function(user) {
        var userInfo = setUserInfo(user[0]);
        res.status(200).json({
            token: 'JWT ' + generateToken(userInfo),
            codigo: userInfo._id,
            user: userInfo
        });
    });
}

function generateToken(user){
    return jwt.sign(user, authConfig.secret, {
        expiresIn: 10080
    });
}
 
function setUserInfo(request){
    return {
        _id: request.idUsuario,
        username: request.usuario,
        rol: request.rol,
        idUsuarioMD5: request.idUsuarioMD5
    };
}
 