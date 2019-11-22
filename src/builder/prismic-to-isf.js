

// Stuff pertaining to the layout type
// What layout needs to do is, after receiving the data from Prismic
// 1. Figure out its own type based on the Framework Data, which in this case can possibly be rewritten as a JS object, idk.
// 2. Get its layoutData object - for example, title and background image for chapter
// 3. Get its layoutContent object

// ...In which then, in turn, each element does the same:
// 5. Figures out its own type - a text, an image, whatever, based on FD
// 6. Gets its elementData object

// All this is returned to the builder who uses the correctly setup data
// to build the modules


const _ = require('lodash');

// prismic mapped to ISF data structures
const PrismicToISFMap = {
  layouts: {

    chapter: {
      layoutData: {
        // if a string is contained inside the key of the property, then handle values
        // according to its type - text, image, etc
        background: {
          key: 'chapterBackground',
          type: 'image'
        },
        title: {
          key: 'chapterTitle',
          type: 'text'
        }
      }
    }
  }
};

const MapPrismicToISFKeys = {
  layout_chapter_start: 'chapter',
  isf_text: 'text',
  isf_images: 'images',
  isf_quote: 'quote'
};

function PrismicToISF(prismicData) {
  this.prismicData = prismicData.body;
  this.isfData = {
    layouts: {}
  };

  this.layoutCounter = 0;
  this.elementCounter = 0;
  this.currentLayout = null;
  this.hasNav = false;

  this.init();
}

PrismicToISF.prototype.init = function () {
  var self = this;

  _.forEach (this.prismicData, (data, index) => {

    var key = data.slice_type;
    // check for special elements like chapter or nav
    // can also include other stuff in the future, like progress bars
    // or custom cursors. basically everything that's not basic elements
    if ( this._isSpecialElement(key) ) {
      var specialEl = this._isSpecialElement(key);

      // IF IT'S A LAYOUT
      if ((specialEl.type === 'layout')) {
        if (specialEl.name === 'end') {
          this.endLayout();
        } else {
          this.initLayout(specialEl.name, data);
        }
      } else if ((specialEl.type === 'nav')) {
        if (!this.hasNav) {
          this.hasNav = true; // init only once
          this.isfData.nav = { tabs: [] }; // might include other stuff in future, like back to top? idk
          this.tabCounter = 0;
        }
        this.initNavEl(specialEl.name, data, this.prismicData[index + 1]);
      }
    } else {
      // regular elements
      if (this.currentLayout === null) {
        this.initLayout('simple', {});
      }
      var isfKey = this.getISFKey(key);
      var elementData = this.setupElementData(isfKey, data);

      var elementId = 'element_' + key + '_' + this.elementCounter;
      this.elementCounter += 1;
      this.currentLayout.layoutContent[elementId] = elementData;
    }
  });
};

PrismicToISF.prototype.initNavEl = function (navType, navData, navTarget) {
  // structure we want is:
  // nav: { tab_1: { tabLabel: 'something', tabTarget: 'moduleId' }, tab_2: etc...}
  var nextElKey = navTarget.slice_type; // is it a layout? if it's just an element, we consider a simple layout
  var targetId = '';
  if (this._isSpecialElement(nextElKey)) {
    targetId = this._isSpecialElement(nextElKey).type + '_' + this._isSpecialElement(nextElKey).name + '_' + this.layoutCounter;
  } else {
    // otherwise it's a simple layout that we'll build anyway
    targetId = 'layout_simple_' + this.layoutCounter;
  }
  var tabKey = 'tab_' + this.tabCounter;
  var tabLabel = this.setupTabData(navData);
  this.isfData.nav.tabs[this.tabCounter] = { tabLabel: tabLabel, tabTarget: targetId };

  this.tabCounter += 1;
};

PrismicToISF.prototype.setupTabData = function (navData) {
  return navData.primary.isf_nav_tab_start[0].text;
};

PrismicToISF.prototype.endLayout = function (key, data) {
  this.currentLayout = null;
};

PrismicToISF.prototype.initLayout = function (key, layout) {
  // initing a layout means suborganizing the rest of the subsequent elements
  // inside a container with certain properties
  var layoutId = 'layout_' + key + '_' + this.layoutCounter;

  // init as an object in the isfData
  this.isfData.layouts[layoutId] = {};
  this.isfData.layouts[layoutId].layoutData = {};
  this.isfData.layouts[layoutId].layoutContent = {};
  this.isfData.layouts[layoutId].layoutData = this.setupLayoutData(layout);

  // and set as current, so you attach elements to it
  this.currentLayout = this.isfData.layouts[layoutId];
};

PrismicToISF.prototype.setupElementData = function (elType, elData) {
  // zum beispiel, 'text', {...}
  var element = {
    elementType: elType,
    elementData: {}
  };

  // elements data from prismic
  // is structured differently; for example
  // image is an object and text is an array
  // fortunately there aren't so many elements i guess :/
  if (elType === 'images') {
    element.elementData.images = [];
    _.forEach (elData.items, (item, index) => {
      element.elementData.images.push (this.getImageData(item) );
    });
  } else if (elType === 'text') {
    _.forEach(elData.primary.isf_element_text, function(textEl, index) {
      // check if it's heading, highlight or paragraph
      var _key = (_.includes(textEl.type, 'heading')) ? ((textEl.type === 'heading3') ? 'heading' : 'highlight') : 'paragraph';
      element.elementData[_key] = textEl.text;
    });
  } else if (elType === 'quote') {
    // REFACTOR
    _.forEach(elData.primary, function(quotes, index) {
      // check if it's heading, highlight or paragraph
      _.forOwn(quotes, function(textEl, key) {
        var _key = ((textEl.type === 'heading4') ? 'quote' : 'source');
        element.elementData[_key] = textEl.text;
      });

    });
  }

  return element;
};

PrismicToISF.prototype.getImageData = function (data) {
  return {
    src: data.isf_element_image.url,
    alt: data.isf_element_image.alt
  };
};

PrismicToISF.prototype.setupLayoutData = function (layout) {

  // first we figure out the layout type
  var _layoutType = this._isLayout( layout.slice_type );
  var _layoutContent = layout.items;

  // setup unique layout id
  var _layoutId = 'layout_' + this.layoutCounter;
  this.layoutCounter += 1;

  // GET LAYOUT DATA
  // the layout.primary object
  // contains data specific to the layout itself
  // we map it through PrismicToISFMap
  var layoutData = {};
  _.forOwn(layout.primary, (value, prismicID) => {
    // key looks like isf_hennessy_chapter-1_background, so we're looking for the last substring
    var _substrings = _.split(prismicID, '_');
    var _key = _substrings[_substrings.length - 1]; // key is, z.b. background or image
    var _prop = PrismicToISFMap.layouts[_layoutType].layoutData[_key]; // prop is, z.b. { key: 'chapterBackground', type: 'image' }
    var _data = this.setupLayoutPropertyData(_prop.type, value);

    layoutData[_prop.key] = _data;
  });

  return layoutData;
};

PrismicToISF.prototype.setupLayoutPropertyData = function (propType, propData) {
  // the thing is, even layoutData properties are actually elements but
  // we need them to return only one thing
  // so with texts, it's the very first text, with image, it's just the src
  return (propType === 'image') ? propData.url : propData[0].text;
};

PrismicToISF.prototype._isLayout = function (key) {
  var _layout = null;
  if (_.includes(key, 'chapter')) {
    _layout = 'chapter';
  } else if (_.includes(key, 'split-sticky')) {
    _layout = 'split-sticky';
  } else if (_.includes(key, 'layout_end')) {
    _layout = 'end-layout';
  }
  return _layout;
};

// returns type for slices that are not single elements
// but are something special, like layout start or tab
PrismicToISF.prototype._isSpecialElement = function (key) {
  var _type = null;
  var _name = null;

  // it's a layout / nav element
  // then the second string would be the name of the layout
  if (_.includes(key, 'layout')) {
    _type = 'layout';
    _name = _.split(key, '_')[1];
  } else if  (_.includes(key, 'nav')) {
    _type = 'nav';
    _name = _.split(key, '_')[1];
  }

  // _type and _name are set only if it's not element (special element let's say)
  return (_type === null) ? false : { type: _type, name: _name };
};

PrismicToISF.prototype.getISFKey = function(prismicKey) {
  return MapPrismicToISFKeys[prismicKey];
};

module.exports = PrismicToISF;








