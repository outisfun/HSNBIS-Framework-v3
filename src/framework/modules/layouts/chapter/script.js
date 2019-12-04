

const ScrollMagic = require('scrollmagic');
const ISFModule = require('common/js/isf-module.js');

class ISFModule__Chapter extends ISFModule {

  init() {
    this.controller = new ScrollMagic.Controller();
    this.initPin();
  }

  initPin() {
    new ScrollMagic.Scene({
      triggerElement: this.DOM.header,
      triggerHook: 0,
      duration: this.DOM.el.offsetHeight - window.innerHeight
    })
      .setClassToggle(this.DOM.el, "is--fixed")
      .on('end', () => { this.DOM.el.classList.toggle("is--bottom"); })
      .addTo(this.controller);
  }
}

module.exports = ISFModule__Chapter;

