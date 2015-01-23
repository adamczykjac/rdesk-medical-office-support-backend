/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Visit = mongoose.model("Visit");
 
/* Create new visit */
exports.create = function (req, res) {
	var visitData = req.body;
	console.log(visitData);
  var visit = new Visit(visitData);

  visit.save(function (_visit, err) {
  	if(err) {
  		res.send(err);
  		return err;
  	}
  	res.send(_visit);
  });
};
