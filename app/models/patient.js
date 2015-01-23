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
  pesel: {type: Number, default: ''},
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

PatientSchema
  .virtual('birthdate')
  .get(function () {
    var peselString = this.pesel.toString();
    return new Date(
      peselString.substring(0, 2), 
      peselString.substring(2, 4) - 1, 
      peselString.substring(4, 6));
});


/**
 * Pre Hooks
 */

// PatientSchema.pre('save', function (next) {
//   if (!this.birthdate) {
//     console.log(this);
//     var peselString = this.pesel.toString();
//     this.birthdate = new Date(
//       peselString.substring(0, 2),
//       peselString.substring(2, 4) - 1,
//       peselString.substring(4, 6)
//     );
//   }
//   next();
// });

/**
 * Validations
 */
// // validate empty first and last names (second name can be empty)
// PatientSchema.path('name.first').validate(function (first) {
//     return first && first.length > 0;
// }, 'First name cannot be empty.');

// PatientSchema.path('name.last').validate(function (last) {
//     return last && last.length > 0;
// }, 'Last name cannot be empty.');

// // validate PESEL length different than 11
// PatientSchema.path('pesel').validate(function (num) {
//     return num && num.toString().length === 11;
// }, 'PESEL number has to be defined and be 11 digits long.');

// // validate empty address
// PatientSchema.path('address').validate(function (addr) {
//     return addr.length > 0;
// }, 'Address cannot be empty.');

// // validate empty createdBy Field
// PatientSchema.path('_createdBy').validate(function (_createdById) {
//     return _createdById &&  _createdById.length > 0;
// }, 'createdBy cannot be empty.');

// mongoose.model('Patient', PatientSchema);

/**
 * Register
 */

mongoose.model('Patient', PatientSchema);