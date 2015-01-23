/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Patient = mongoose.model("Patient");
 
/* Create new Patient */
exports.create = function (req, res) {
	var patientData = req.body;
  var patient = new Patient(patientData);
  console.log(patient.name.full);
  console.log(patient.birthdate);
  patient.save(function (_patient, err) {
  	if(err) {
  		res.send(err);
  		return err;
  	}
  	res.send(_patient);
  });
};

exports.getAll = function (req, res) {
  Patient.find({}, function (_patients, err) {
    if(err) {
      return res.send(err);
    }
    res.send(_patients);
  });
}
