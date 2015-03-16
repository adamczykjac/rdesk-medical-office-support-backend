!function ($) {

 /* AJAX REQUESTS PREFILTER PUBLIC CLASS DEFINITION
  * ============================== */

return $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://localhost:3000' + options.url;
    });

}(window.jQuery);