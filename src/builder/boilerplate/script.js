

var _ = require('lodash');
var Prismic = require('prismic-javascript');
var Handlebars = require('handlebars');
var ScrollMagic = require('scrollmagic');

var TEMPLATES = require('builder/templates.js'); // reconsider namespace?
var PrismicToISF = require('builder/prismic-to-isf.js');

var ISFChapter = require('chapter/script.js');
var ISFNavTabs = require('tabs/script.js');



( function(window) {

  'use strict';

  var constructors = {};

  function ISFStory (el, prismicData) {
    this.DOM = { el: el };
    this.storyData = new PrismicToISF(prismicData).isfData;
    this.markup = this.buildMarkup();

    this.DOM.el.innerHTML = this.markup;

    setTimeout(() => {
      this.initConstructors();
    }, 1000);
  }

  ISFStory.prototype.initConstructors = function () {
    this.controller = new ScrollMagic.Controller();

    var tabs = this.DOM.el.querySelector(".js--nav_tabs");
    var navTabs = new ISFNavTabs(tabs, this.controller);
    _.forEach (Array.from(this.DOM.el.querySelectorAll(".js--chapter")), (el, index) => {
      var _chapter = new ISFChapter(el, this.controller);
      _chapter.init();
    });
  };

  ISFStory.prototype.buildMarkup = function () {

    var markup = '';

    // build nav
    if (this.storyData.nav !== undefined) {
      // after we have other types of nav, change this, so that
      // tabs is generative (it could be sth else)
      var navMarkup = TEMPLATES.tabs(this.storyData.nav);
      markup += navMarkup;
    }

    _.forOwn(this.storyData.layouts, (layout, layoutId) => {
      var layoutType = this._getType(layoutId);
      layout.layoutData.modId = layoutId;
      layout.layoutData.chapterStyle = "ellie";
      if ((TEMPLATES)[layoutType] !== undefined) {
        var layoutMarkup = TEMPLATES[layoutType](layout.layoutData);
      } else {
        console.log('no template found for layout ' + layoutType);
      }

      // now, get elements markup
      var layoutContentMarkup = '';
      _.forOwn(layout.layoutContent, (element, elementId) => {
        element.elementData.moduleId = elementId;
        if (TEMPLATES[element.elementType] !== undefined) {
          var elementMarkup = TEMPLATES[element.elementType](element.elementData);
          layoutContentMarkup += elementMarkup;
        } else {
          console.log('no template found for element ' + element.elementType);
        }

      });

      layoutMarkup = layoutMarkup.replace("<!-- content -->", layoutContentMarkup);
      markup += layoutMarkup;
    });

    return markup;
  };

  ISFStory.prototype._getType = function (id) {
    return _.includes(id, 'chapter') ? 'chapter' : 'simple'; // export to a function
  };

  // load data from prismic
  Prismic.getApi("https://hsnbsttest.prismic.io/api/v2",  {}).then(function(api) {  return api.query(
    Prismic.Predicates.at('document.id', 'XdVcShEAACIA-rOn'), {} );
  }).then(function(response) {
    var story = new ISFStory(document.querySelector("#isf-interactive-story"), response.results[0].data);
  });


})(window);
