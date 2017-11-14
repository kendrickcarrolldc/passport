var bCrypt = require('bcrypt-nodejs'); // needed to secure passwords

//initialize passport and user model
module.exports = function(passport, user) {

	var User = user;
	var LocalStrategy = require('passport-local').Strategy;
}