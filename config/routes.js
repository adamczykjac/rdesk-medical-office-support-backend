
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');

  /* route controllers */
var visit = require('visit');
var patient = require('patient');

/**
 * Expose
 */

module.exports = function (app, passport) {

  /* Patients */
  app.post('/patients/new', patient.create);
  app.get('/patients', patient.getAll);
  /* Visits */
  app.post('/visits/new', visit.create);

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
