
const Prismic = require('prismic-javascript');
const ISFStory = require('common/js/isf-story.js');

// CHANGE THOSE!
const ISFDataConverter = require('utilities/prismic-to-isf.js');
const prismicDocumentId = 'Xdz5cxEAAGNuHHK7';

( function(window) {

  'use strict';

  // load utility converter
  var dataConverter = new ISFDataConverter();

  // load data from prismic
  Prismic.getApi("https://hsnbsttest.prismic.io/api/v2",  {}).then(function(api) {  return api.query(
    Prismic.Predicates.at('document.id', prismicDocumentId), {} );
  }).then(function(response) {
    var storyData = dataConverter.convert(response);
    var story = new ISFStory(document.querySelector("#isf-interactive-story"), storyData);
  });

})(window);
