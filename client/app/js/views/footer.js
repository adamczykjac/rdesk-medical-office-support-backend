define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var template = require("template");
  var bootstrap = require("bootstrap");
  var footerTemplate = require("template!footer");

  var FooterView = Backbone.View.extend({
    el: '#footer',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(footerTemplate());
    }
  });

  module.exports = FooterView;
});