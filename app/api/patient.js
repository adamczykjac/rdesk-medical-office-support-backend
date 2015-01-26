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
  patient.save(function (err, _patient) {
  	if(err) {
  		res.send(err);
  		return err;
  	}
  	res.send(_patient);
  });
};

exports.getAll = function (req, res) {
  Patient.find({}, function (err, _patients) {
    if(err) {
      return res.send(err);
    }
    res.send(_patients);
  });
}
