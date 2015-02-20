/*!
 * Module dependencies.
 */
var phantom = require('phantom');
var dots = require('dot');

/* Where to read HTML templates from */ 
var templateDirPath = '/../../report_templates';
/* Where to export PDF docs */
var reportOutputPath = '../../public/reports';
/* Load all compiled JST templates */
var render = require('.' + templateDirPath + '/render');


exports.render = function() {
  //put it to the grunt tasks!
  // dots.process({
  //   global: "_page.render",
  //   destination: (__dirname + templateDirPath + '/render'),
  //   path: (__dirname + templateDirPath)  
  // });

  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.set('paperSize', {
        format: 'A4',
        orientation: 'landscape',
        margin: '1cm'
      });
      var result = render.zasw_final2({ fullName : "Jacek Adamczyk"});
      page.set('content', result, function() {
        page.render('lol2.pdf', function() {
          ph.exit();
        });
      }); 
    });
  });
};