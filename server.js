var expresss = require('express');
var app = expresss();

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

//For handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
	res.send("Welcome to Passport with Sequelize");
});


var models = require("./app/models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//Routes
var authRoute = require('./app/routes/auth.js')(app);

app.listen(5000, function(err) {
	if (!err) {
		console.log("Site is live");
	} else {
		console.log(err);
	}
});

