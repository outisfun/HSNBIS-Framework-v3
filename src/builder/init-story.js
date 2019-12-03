var args = process.argv.slice(2);
var storyFolder = args[0];

var fs = require('fs');
var mkdirp = require('mkdirp');
//const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// base templates to insert custom content
var htmlFile = fs.readFileSync('./src/builder/boilerplate/index.html');
var jsFile = fs.readFileSync('./src/builder/boilerplate/script.js');
var scssFile = fs.readFileSync('./src/builder/boilerplate/style.scss');

var buildFile = function(fileName, fileFolder, fileContents){
  fs.writeFile('./stories/' + storyFolder + '/' + fileFolder + '/' + fileName, fileContents, function() {
    console.log(storyFolder + ': ' + fileName + ' was built!');
  });
};

var buildStory = function () {
  // build main folder
  mkdirp('./stories/' + storyFolder, function (err) {

    // build subfolders
    mkdirp('./stories/' + storyFolder +'/build', function (err) {
      if (err) console.error(err);

      buildFile('scripts.js', 'build', String(jsFile));
      buildFile('styles.scss', 'build', String(scssFile));
      buildFile('index.html', 'dist', String(htmlFile));
    });

    mkdirp('./stories/' + storyFolder +'/dist', function (err) {
      if (err) console.error(err);
    });

    return;
  });
};


if (fs.existsSync('./stories/' + storyFolder)) {
  console.log('This story already exists. Before creating it again, you need to delete the old stuff.');
} else {
  buildStory();
}





