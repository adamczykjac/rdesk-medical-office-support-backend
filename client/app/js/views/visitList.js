define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var backbone = require("backbone");
  var template = require("template");
  var Visit = require("models/visit").VisitModel;
  var Visits = require("models/visit").VisitCollection;
  var visitListTpl = require("template!visitList");

  var VisitListView = backbone.View.extend({
    el: '#main',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(visitListTpl());
      var visits = new Visits();
      visits.fetch({
        success: function (_visits) {
          console.log(_visits.models);
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  });

  module.exports = VisitListView;
});