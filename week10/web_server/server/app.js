var express = require('express');
var path = require('path');
var app = express();

// router
var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');


// for cor issue
var cors = require('cors');
app.use(cors());


// connect to mongodb
var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);


// pass the auth_checker middleware
const authCheckMiddleware = require('./auth/auth_checker');
app.use('/news', authCheckMiddleware);


// add passport
var passport = require('passport');
app.use(passport.initialize());
var localSignupStrategy = require('./auth/signup_passport');
var localLoginStrategy = require('./auth/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// add body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// auth api
var auth = require('./routes/auth');
app.use('/auth', auth);

// pass to react app
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
app.use('/', indexRouter);
app.use('/news', newsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});


module.exports = app;
