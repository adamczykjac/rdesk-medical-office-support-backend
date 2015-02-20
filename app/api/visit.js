/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Visit = mongoose.model("Visit");
var ReportCtrl = require('../controllers/report');
 
/* Create new visit */
exports.create = function (req, res) {
	var visitData = req.body;
  var visit = new Visit(visitData);

  visit.save(function (_visit, err) {
  	if(err) {
  		res.send(err);
  		return err;
  	}
  	res.send(_visit);
  });
};

/* Get all the visits */
exports.getAll = function (req, res) {
  Visit.find({}, function (err, _visits) {
    if(err) {
      return res.send(err);
    }
  }).populate({
    path: 'patient',
    select: 'name pesel'
  }).exec(function(err, _visits_pop) {
    res.send(_visits_pop);
  });
}

/* Generates pdf reports */
exports.getReports = function (req, res) {
  ReportCtrl.render();
}