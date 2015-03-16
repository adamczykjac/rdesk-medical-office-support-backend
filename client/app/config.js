require.config({
  paths: {
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "lodash": "../bower_components/lodash/dist/lodash",
    "template": "../bower_components/lodash-template-loader/loader",
    "jquery": "../bower_components/jquery/dist/jquery",
    "backbone": "../bower_components/backbone/backbone",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
    "dp_radio": "../app/vendor/drunken-parrot-flat-ui/js/radio",
    "views": "./js/views",
    "models": "./js/models",
    "ajaxPrefilter": "./js/ajaxPrefilter",
    "objectSerializer": "./js/objectSerializer",
  },

  deps: ["main"],

  lodashLoader: {
    ext: ".html",
    root: "templates/",
    templateSettings: {}
  },

  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    /* Drunken-Parrot UI Kit Radio button edited */
    "dp_radio": {
      deps: ["jquery"]
    },
    "ajaxPrefilter": {
      deps: ["jquery"]
    },
    "objectSerializer": {
      deps: ["jquery"]
    },
  }
});