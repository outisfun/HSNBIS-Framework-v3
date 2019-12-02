
const ISFDATA = {
  TEXT: {

  },
  QUOTE: {

  },
  VIDEO: {

  },
  IMAGES: {

  },
  GALLERY: {
    CLASSES: {
      ITEMSWRAP: 'js--gallery__items',
      INNER: 'js--gallery--inner',
      ITEMS: 'js--gallery__item'
    },
    MODULE: require('elements/gallery/script.js')
  },
  TABS: {
    CLASSES: {
      TAB: 'js--tab'
    },
    MODULE: require('nav/tabs/script.js')
  },
  CHAPTER: {
    CLASSES: {
      CONTENT: 'js--chapter__content',
      HEADER: 'js--chapter__header'
    },
    MODULE: require('layouts/chapter/script.js')
  },
  SPLITSTICKY: {
    CLASSES: {
      STICKY: 'js--split-sticky__sticky'
    },
    MODULE: require('layouts/splitsticky/script.js')
  },
  SIMPLE: {
    CLASSES: {
      // no js classes really, and no constructor
    }
  }
};

module.exports = ISFDATA;
