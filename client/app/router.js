define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var HeaderView = require("views/header");
  var FooterView = require("views/footer");
  var VisitListView = require("views/visitList");
  var CreateVisitView = require("views/createVisit");

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "visits/new": "createVisit"
    },

    setup: function() {
      if(!this.headerView) {
        this.headerView = new HeaderView();
      }
      if(!this.footerView) {
        this.footerView = new FooterView();
      }
    },

    index: function() {
      this.setup();
      var visitListView = new VisitListView();
    },

    createVisit: function() {
      this.setup();
      var createVisitView = new CreateVisitView();
    }
  });

  module.exports = Router;
});
