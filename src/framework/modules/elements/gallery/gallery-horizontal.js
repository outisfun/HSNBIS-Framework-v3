
var _ = require('lodash');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');

class __Gallery__Horizontal {

  constructor() { }

  _init() {
    this.controller = new ScrollMagic.Controller();

    this.setInitialValues();
    this.resizeImages();
    this.setupScrollScene();
  }

  setInitialValues () {
    TweenLite.set(this.DOM.itemswrap, {
      x: window.innerWidth < 768 ? 0 : window.innerWidth*0.35
    });
    TweenLite.set(this.DOM.el, {
      height: this.DOM.el.offsetWidth*4,
      border: '1px solid red'
    });
  }

  resizeImages () {
    // recalibrate image sizes so that height fits layout
    var imgHeight = ((window.innerHeight < 768 ? 0.85 : 0.9)*window.innerHeight) - 90;
    _.forEach(this.DOM.items, (item, index) => {
      var image = item.querySelector('img');
      item.style.height = imgHeight + 'px';
      item.style.width = (image.naturalWidth*(imgHeight/image.naturalHeight)) + 'px';
      item.style.minWidth = (image.naturalWidth*(imgHeight/image.naturalHeight)) + 'px';
    });
  }

  setupScrollScene () {

    var ss = new ScrollMagic.Scene({
      triggerElement: this.DOM.el,
      duration: this.DOM.el.offsetHeight - window.innerHeight,
      triggerHook: 0
    })
      .on('progress', (e) => {
        var _m = - (e.progress*(this.DOM.itemswrap.offsetWidth - window.innerWidth));
        TweenLite.to(this.DOM.itemswrap, 1, {x: _m, ease: Sine.easeOut });
        // _.forEach(self.items, function(item, index) {
        //   if (item.isInViewport() && !item.isRevealed) {
        //     item.reveal();
        //   }
        // });
      })
      .on('enter', () => {
        //this.scrollIndicator.toggle(true);
        if (window.innerWidth > 768) {
          setTimeout(() => {
            //this.scrollIndicator.toggle(false);
          }, 300);
        }
      })
      .on('leave', () => {
        //this.scrollIndicator.toggle(false);
      })
      .setPin(this.DOM.inner, { pushFollowers: true })
      .addTo(this.controller);
  }
}

module.exports = __Gallery__Horizontal;
