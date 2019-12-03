

const _ = require('lodash');

const ISFModule = require('common/js/isf-module.js');
const galleryHorizontal = require('elements/gallery/gallery-horizontal.js');
const galleryFreestyle = require('elements/gallery/gallery-freestyle.js');
const galleryScroller = require('elements/gallery/gallery-scroller.js');

class ISFModule__Gallery extends ISFModule {

  init() {
    this.opts = { layout: this.DOM.el.dataset.layout ? this.DOM.el.dataset.layout : 'horizontal' };
    switch (this.opts.layout) {
      case 'horizontal':
        this.extendGallery(galleryHorizontal);
        break;
      case 'freestyle':
        this.extendGallery(galleryFreestyle);
        break;
      case 'scroller':
        this.extendGallery(galleryScroller);
        break;
      default:
        break;
    }

    this._init();
  }

  extendGallery(newModule) {
    _.forEach(Object.getOwnPropertyNames(newModule.prototype), (propName, ind) => {
      this[propName] = newModule.prototype[propName];
    });
  }
}


module.exports = ISFModule__Gallery;











