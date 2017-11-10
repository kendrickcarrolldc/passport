var expresss = require('express');
var app = expresss();

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use()

app.get("/", function(req, res) {
	res.send("Welcome to Passport with Sequelize");
});

app.listen(5000, function(err) {
	if (!err) {
		console.log("Site is live");
	} else {
		console.log(err);
	}
});

