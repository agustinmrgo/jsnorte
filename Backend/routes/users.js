var express = require('express');
var LoginController = require('./../controllers/login');
// Llamo a toda la configuracion de Passport.
var passportService = require('./../config/passport');
// Llamo a Passport 
var passport = require('passport');
// Creo una instancia de Rutas.
var authRoutes = express.Router();

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

// Auth Routes
authRoutes.use('/auth', authRoutes);

authRoutes.post('/login', requireLogin, LoginController.login);

// authRoutes.post('/login', function(req, res, next) {
//   res.send(req.body.username);
// });

module.exports = authRoutes;
