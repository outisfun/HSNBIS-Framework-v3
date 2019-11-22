

var _ = require('lodash');
var Prismic = require('prismic-javascript');
var Handlebars = require('handlebars');
var ScrollMagic = require('scrollmagic');

var TEMPLATES = require('builder/templates.js'); // reconsider namespace?
var PrismicToISF = require('builder/prismic-to-isf.js');

const ISFDATA = require('builder/isf-data.js');

var ISF = {};
ISF.ISF_Layout_Chapter = require('chapter/script.js');
ISF.ISF_Layout_SplitSticky = require('splitsticky/script.js');
ISF.ISF_Element_Gallery = require('gallery/script.js');
ISF.ISF_Nav_Tabs = require('tabs/script.js');

// CHANGE THIS!!!
var prismicDocumentId = 'XdVcShEAACIA-rOn';

( function(window) {

  'use strict';

  function ISFStory (el, prismicData) {
    this.controller = new ScrollMagic.Controller();
    this.DOM = { el: el };
    this.storyData = new PrismicToISF(prismicData).isfData;
    this.markup = this.buildMarkup();

    this.DOM.el.innerHTML = this.markup;

    // refactor by adding a loader or making sure
    // in another way that markup is built and calculated correctly
    // before constructors start working ;)
    setTimeout(() => {
      this.initConstructors();
    }, 500);
  }

  ISFStory.prototype.initConstructors = function () {

    _.forOwn(ISFDATA, (moduleGroup, moduleType) => {
      _.forOwn(moduleGroup, (elData, elName) => {
        if (elData.CONSTRUCTOR !== undefined) {
          // init elements
          if (elData.CLASSES.EL !== undefined) {
            _.forEach(Array.from(this.DOM.el.querySelectorAll("." + elData.CLASSES.EL)), (el, index) => {
              var _el = new ISF[elData.CONSTRUCTOR](el, this.controller);
              _el.init();
            });
          }
        }
      });
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

      // refactor this by making it an entry in prismic
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

  // refactor this by considering
  // other types of layouts
  ISFStory.prototype._getType = function (id) {
    return _.includes(id, 'chapter') ? 'chapter' : 'simple'; // export to a function
  };

  // load data from prismic
  // refactor by loading the id dynamically or something
  Prismic.getApi("https://hsnbsttest.prismic.io/api/v2",  {}).then(function(api) {  return api.query(
    Prismic.Predicates.at('document.id', prismicDocumentId), {} );
  }).then(function(response) {
    var story = new ISFStory(document.querySelector("#isf-interactive-story"), response.results[0].data);
  });


})(window);
