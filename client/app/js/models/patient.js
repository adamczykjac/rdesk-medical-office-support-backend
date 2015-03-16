define(function(require, exports, module) {
  "use strict";

  // External dependencies
  var Backbone = require("backbone");

  // require ajaxPrefilter to fetch the model from db
  //require("ajaxPrefilter")();

  // Patient Model
  var PatientModel = Backbone.Model.extend({
    urlRoot: '/patients'
  });
 
  // Patient Collection
  var PatientCollection = Backbone.Collection.extend({
    url: '/patients'
  });

  /* For the sake of consistency we'll export the Model
     and the Collection as properties of one module */
  module.exports = {
    PatientModel: PatientModel,
    PatientCollection: PatientCollection
  };
});
