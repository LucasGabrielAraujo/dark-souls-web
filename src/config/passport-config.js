let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(async function(username, password, cb) { // Corrige la declaración de LocalStrategy
    try{
    const user = await User.findOne({'username':username})

    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password' })
    }

    bcrypt.compare(password, user.hashed_password, function (err, res){
        if(err){return cb(err)}
        if(!res){
            return cb(null, false, { message: 'Incorrect username or password' })
        }
        return cb(null, user);
    })

    }catch(error){
        return cb(null, false, {message: error})
    }
}));

module.exports = passport;



/*
    User.findOne({ 'username': username }, function (err, user) { // Usa findOne en lugar de find
        if (err) { return cb(err); }
        if (!user) { // Verifica si el usuario no existe
            return cb(null, false, { message: 'Incorrect username or password' });
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) { return cb(err); }
            if (!result) {
                return cb(null, false, { message: 'Incorrect username or password' });
            }
            return cb(null, user);
        });
    });
*/