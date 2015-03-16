define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var backbone = require("backbone");
  var template = require("template");
  var bootstrap = require("bootstrap");
  var radio = require("dp_radio");
  var createVisitTpl = require("template!createVisit");
  var ObjSerializer = require("objectSerializer");


  var CreateVisitView = backbone.View.extend({
    el: '#main',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(createVisitTpl());
    },

    events: {
      'submit #visit-details-form': 'saveVisit'
    },

    saveVisit: function(e) {
      console.log($(e.currentTarget).serializeObject());
      return false;
    }
  });

  module.exports = CreateVisitView;
});