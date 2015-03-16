define(function(require, exports, module) {
  "use strict";

  // External dependencies
  var Backbone = require("backbone");

  // require ajaxPrefilter to fetch the model from db
  //require("ajaxPrefilter");

  // Visit Model
  var VisitModel = Backbone.Model.extend({
    urlRoot: 'api/visits'
  });
 
  // Visit Collection
  var VisitCollection = Backbone.Collection.extend({
    url: 'api/visits'
  });

  /* For the sake of consistency we'll export the Model
     and the Collection as properties of one module */
  module.exports = {
    VisitModel: VisitModel,
    VisitCollection: VisitCollection
  };
});
