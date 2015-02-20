
/**
 * Module dependencies.
 */

var express = require('express');
var session = require('express-session');
var compression = require('compression');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var csrf = require('csurf');
var swig = require('swig');

var mongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var winston = require('winston');
var helpers = require('view-helpers');
var config = require('config');
var pkg = require('../package.json');

var env = process.env.NODE_ENV || 'development';

/**
 * Expose
 */

module.exports = function (app, passport) {

  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512
  }));

  // Static files middleware
  app.use(express.static(config.root + '/public'));

  // Use winston on production
  var log;
  if (env !== 'development') {
    log = {
      stream: {
        write: function (message, encoding) {
          winston.info(message);
        }
      }
    };
  } else {
    log = 'dev';
  }

  // Don't log during tests
  // Logging middleware
  if (env !== 'test') app.use(morgan(log));

  // Swig templating engine settings
  if (env === 'development' || env === 'test') {
    swig.setDefaults({
      cache: false
    });
  }

  // set views path, template engine and default layout
  app.engine('html', swig.renderFile);
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');

  // expose package.json to views
  app.use(function (req, res, next) {
    res.locals.pkg = pkg;
    res.locals.env = env;
    next();
  });

  // bodyParser should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

  // cookieParser should be above session
  app.use(cookieParser());
  app.use(cookieSession({ secret: 'lol500100900' }));
  app.use(session({
    secret: pkg.name,
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
      url: config.db,
      collection : 'sessions'
    })
  }));

  // use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  // connect flash for flash messages - should be declared after sessions
  app.use(flash());

  // should be declared after session and flash
  app.use(helpers(pkg.name));

  // adds CSRF support
  if (process.env.NODE_ENV !== 'test') {
    app.use(csrf());

    // This could be moved to view-helpers :-)
    app.use(function(req, res, next){
      console.log('CSRF: ' + req.csrfToken());
      res.locals.csrf_token = req.csrfToken();
      next();
    });
  }

  // Added other domains you want the server to give access to
  // WARNING - Be careful with what origins you give access to
  app.use(function(req, res, next) {
    var allowedHost = [
      'http://localhost:8000',
      'chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm' //postman - locally
    ];

    if(allowedHost.indexOf(req.headers.origin) !== -1) {
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'X-CSRFToken, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

      // intercept OPTIONS method
      if ('OPTIONS' == req.method) {
        res.send(200);
      }
      else {
        next();
      }      
    } else {
      res.send({auth: false});
    }
  });
};
