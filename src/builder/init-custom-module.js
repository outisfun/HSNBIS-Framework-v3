var args = process.argv.slice(2);
var moduleName = args[1];

var fs = require('fs');
var mkdirp = require('mkdirp');

// build main folder
mkdirp('./src/modules/custom/' + moduleName, function (err) {
  // add json file
  fs.writeFile('./src/modules/custom/' + moduleName +'/template.hbs', '', function() {
    console.log('Custom module ' + moduleName + ' added in src/modules/custom. If necessary, add custom scripts/styles and require or import them in your story folder.');
  });
});

