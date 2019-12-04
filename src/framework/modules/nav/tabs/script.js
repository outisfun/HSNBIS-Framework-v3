const _ = require('lodash');
const ScrollMagic = require('scrollmagic');

require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
const gsap = require('gsap');
require('gsap/umd/ScrollToPlugin.js');

const ISFModule = require('common/js/isf-module.js');

class ISFModule__Tabs extends ISFModule {

  init() {
    console.log('init tabs!!! ', this);
  }
}


module.exports = ISFModule__Tabs;
