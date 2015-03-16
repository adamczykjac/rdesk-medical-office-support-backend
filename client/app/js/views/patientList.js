define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var backbone = require("backbone");
  var template = require("template");
  var Patient = require("models/patient").PatientModel;
  var Patients = require("models/patient").PatientCollection;
  var patientListTpl = require("template!patientList");

  var PatientListView = backbone.View.extend({
    el: '#main',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(PatientListTpl());
      var Patients = new Patients();
      Patients.fetch({
        success: function (_Patients) {
          console.log(_Patients);
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  });

  module.exports = PatientListView;
});