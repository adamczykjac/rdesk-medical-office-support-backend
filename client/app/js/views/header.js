define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var template = require("template");
  var bootstrap = require("bootstrap");
  var headerTemplate = require("template!header");

  var HeaderView = Backbone.View.extend({
    el: '#header',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(headerTemplate());
      this.$el.find('dropdown-toggle').dropdown();
    }
  });

  module.exports = HeaderView;
});