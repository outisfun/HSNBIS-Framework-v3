
const ScrollMagic = require('scrollmagic');
const ISFModule = require('common/js/isf-module.js');

class ISFModule__SplitSticky extends ISFModule{

  init() {
    this.controller = new ScrollMagic.Controller();
    if (window.innerWidth > 768) {
      this.initSticky();
    }
  }

  initSticky() {

    new ScrollMagic.Scene({
      triggerElement: this.DOM.el,
      triggerHook: 0,
      duration: (this.DOM.el.offsetHeight > window.innerHeight) ? (this.DOM.el.offsetHeight - window.innerHeight) : window.innerHeight/2
    })
      .setPin(this.DOM.sticky)
      .addTo(this.controller);
  }
}

module.exports = ISFModule__SplitSticky;

