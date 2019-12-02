

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

// maps prismic values to isf ones
// because prismic returns stuff from fields in many
// different ways; text is an array, image is an object,
// some other values are strings, etc, so the goal here is to
// have one function to sort it all out.
const PrismicToISFValue = function (prismicValue) {
  if (typeof prismicValue === 'string') {
    return prismicValue;
  } else if (typeof prismicValue === 'object') {
    // it's a text or an image
    if (prismicValue.hasOwnProperty('url')) {
      return prismicValue.url;
    } else if ((prismicValue[0] !== undefined) && prismicValue[0].hasOwnProperty('text')) {
      return prismicValue[0].text;
    }
  } else {
    return 'weird value';
  }
};

// map Prismic keys to ISF data

const PrismicToISFKeys = function (prismicKey) {

  var data = {
    simple_start: {
      type: 'layout',
      key: 'simple',
      data: {
        color: 'colorScheme'
      }
    },
    chapter_start: {
      type: 'layout',
      key: 'chapter',
      data: {
        title: 'chapterTitle',
        background: 'chapterBackground'
      }
    },
    splitsticky_start: {
      type: 'layout',
      key: 'splitsticky',
      data: {
        image: 'stickyImage'
      }
    },
    navigation_tab: {
      type: 'nav',
      key: 'tabs' // ?
    },
    text_block: {
      type: 'element',
      key: 'text',
      data: {
        heading3: 'heading',
        heading4: 'highlight',
        text: 'paragraph'
      }
    },
    quote: {
      type: 'element',
      key: 'quote',
      data: {
        quote: 'quote',
        source: 'source'
      }
    },
    _image_s_: { // that's a little weird, maybe fix it
      type: 'element',
      key: 'images',
      data: {
        effect: 'effect'
      }
    },
    gallery: {
      type: 'element',
      key: 'gallery',
      data: {
        style: 'style'
      }
    }
  };

  return data[prismicKey] || false;

};

function PrismicToISF(prismicResponse) {

  this.prismicData = {};
  this.isfData = {
    story: {},
    layouts: {}
  };

  this.layoutCounter = 0;
  this.elementCounter = 0;
  this.currentLayout = null;
  this.hasNav = false;
}

PrismicToISF.prototype.convert = function(response) {

  this.prismicData = response.results[0].data.body;
  this.isfData.story.image = response.results[0].data.story__image.url;
  this.isfData.story.title = response.results[0].data.story__title[0].text;

  console.log(this.prismicData);

  _.forEach (this.prismicData, (data, index) => {

    // isf is { type: 'element', key: 'text', data: 'highlight ...'}
    var isf = PrismicToISFKeys( data.slice_type );

    if (isf.type === 'layout') {
      // start a layout
      // layout specific data, like style or background image
      this.initLayout(isf, data.primary);
    } else if (isf.type === 'nav') {

      if (!this.hasNav) {
        this.hasNav = true; // init only once
        this.isfData.nav = { tabs: [] }; // might include other stuff in future, like back to top? idk
        this.tabCounter = 0;
      }

      // this.prismicData[index + 1] is the target element for the nav, it's a layout el
      this.initTabEl(isf, data.primary, this.prismicData[index + 1]);
    } else if (isf.type === 'element') {
      this.initElement(isf, data);
    } else {
      console.log('No such key. Check PrismicToISFKeys in prismic-to-isf.js', data.slice_type);
    }
  });

  return this.isfData;
};

PrismicToISF.prototype.initElement = function (isf, data) {
  var element = {
    type: isf.key,
    data: this.setupElementData(isf, data)
  };

  var elementId = 'element_' + isf.key + '_' + this.elementCounter;
  element.data.elementId = elementId;
  this.elementCounter += 1;

  this.currentLayout.layoutContent[elementId] = element;
};

PrismicToISF.prototype.setupElementData = function (isf, data) {

  var elementData = {};
  // elements' data can be contained in both the primary and the items object
  // as primary contains one-time properties (like 'style' for gallery)
  // and items is a repeater field (e.g. 'images' for gallery)
  _.forOwn (data.primary, (value, propKey) => {
    // // prismic key looks like layer__simple__color, so we're looking for the last substring
    var _substrings = _.split(propKey, '_');
    var _propKey = _substrings[_substrings.length - 1];
    var isfPropKey = isf.data[_propKey];
    console.log('primary data', value, propKey);
    // value can be null?
    var isfValue = value ? PrismicToISFValue(value) : 'default'; // refactor
    elementData[isfPropKey] = isfValue;
  });

  var isItemsEmpty = (Object.keys(data.items[0]).length === 0 && data.items[0].constructor === Object);

  if (!isItemsEmpty) {
    elementData.items = [];
    _.forEach (data.items, (itemGroup, index) => {
      // item group is an object of subitems
      _.forOwn (itemGroup, (item, key) => {
        var _item = {};

        var _substrings = _.split(key, '_');
        var _propKey = _substrings[_substrings.length - 1];
        var isfPropKey = isf.data[_propKey];

        var _data = PrismicToISFValue(item);
        // items are stored in an array though so we don't really need
        // the key in this case
        // REFACTOOOOOR BECAUSE THIS ONLY CONSIDERS THAT ITEMS ARE IMAGES
        _item.url = _data;
        elementData.items.push(_item);
      });
    });
  }

  return elementData;
};

PrismicToISF.prototype.initTabEl = function (isf, data, target) {

  // structure we want is:
  // nav: { tab_1: { tabLabel: 'something', tabTarget: 'moduleId' }, tab_2: etc...}
  var targetId = PrismicToISFKeys( target.slice_type ).type + '_' + PrismicToISFKeys( target.slice_type ).key + '_' + this.layoutCounter;
  var tabId = 'tab_' + this.tabCounter;
  this.tabCounter += 1;
  var tabLabel = PrismicToISFValue(data.nav__tab__name);

  this.isfData.nav.tabs[this.tabCounter] = { tabLabel: tabLabel, tabTarget: targetId };
};

PrismicToISF.prototype.setupTabData = function (navData) {
  return navData.primary.isf_nav_tab_start[0].text;
};

/* ///// LAYOUT ///// */

PrismicToISF.prototype.initLayout = function (isf, data) {

  // initing a layout means suborganizing the rest of the subsequent elements
  // inside a container with certain properties
  var layoutId = 'layout_' + isf.key + '_' + this.layoutCounter;
  this.layoutCounter += 1;

  this.isfData.layouts[layoutId] = {};
  this.isfData.layouts[layoutId].type = isf.key;
  this.isfData.layouts[layoutId].layoutContent = {};
  this.isfData.layouts[layoutId].data = this.setupLayoutData(isf, data);

  // assign unique id
  this.isfData.layouts[layoutId].data.layoutId = layoutId;

  // and set as current, so you attach elements to it
  this.currentLayout = this.isfData.layouts[layoutId];
};

PrismicToISF.prototype.setupLayoutData = function (isf, data) {

  var layoutData = {};
  layoutData.chapterStyle = 'ellie'; // REFACTOR
  _.forOwn(data, (value, key) => {
    // prismic key looks like layer__simple__color, so we're looking for the last substring
    var _substrings = _.split(key, '_');
    var propKey = _substrings[_substrings.length - 1];
    var isfPropKey = isf.data[propKey];

    // map prismic to isf value
    var isfValue = PrismicToISFValue(value);
    layoutData[isfPropKey] = isfValue;
  });

  return layoutData;
};

module.exports = PrismicToISF;







