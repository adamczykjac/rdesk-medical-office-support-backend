/*
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Patient schema
 */

var PatientSchema = new Schema({
  name: {
    first: {type: String, default: ''},
    second: {type: String, default: ''},
    last: {type: String, default: ''},
  },
  pesel: {type: Number, default: null},
  birthdate: {type: Date, default: Date.now},
  email: {type: String, default: ''},
  occupation: {type: String, default: ''}
});

/**
 * Methods
 */

PatientSchema.method({

});

/**
 * Statics
 */

PatientSchema.static({

});

/**
 * Virtuals
 */

PatientSchema
  .virtual('name.full')
  .get(function () {
    return this.name.first + ' '
        + (this.name.second ? (this.name.second + ' ') : '')
        + this.name.last;
});

/**
 * Validations
 */
// validate empty first and last names (second name can be empty)
PatientSchema.path('name.first').validate(function (first) {
    return first && first.length > 0;
}, 'First name cannot be empty.');

PatientSchema.path('name.last').validate(function (last) {
    return last && last.length > 0;
}, 'Last name cannot be empty.');

// validate PESEL length different than 11
PatientSchema.path('pesel').validate(function (num) {
    return num && num.toString().length === 11;
}, 'PESEL number has to be defined and be 11 digits long.');

// // validate empty address
// PatientSchema.path('address').validate(function (addr) {
//     return addr.length > 0;
// }, 'Address cannot be empty.');

// mongoose.model('Patient', PatientSchema);

/**
 * Register model
 */

mongoose.model('Patient', PatientSchema);
