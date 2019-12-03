
var _ = require('lodash');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');

class __Item__Freestyle {

}

class __Gallery__Freestyle {

  constructor() { }

  _init() {
    console.log('freestyle gallery!!!')
    this.controller = new ScrollMagic.Controller();

    this.createMarkup();
    // this.resizeImages();
    // this.setupScrollScene();
  }

  createMarkup () {

    var _isVertical = false;
    // ok, so we need to iterate over items //
    // and wrap them in divs
    _.forEach(this.DOM.items, (item, index) => {
      var image = item.querySelector('img');
      var _item;

      if (image.offsetWidth > image.offsetHeight) {
        // standalone landscape image
        _isVertical = false;
        _item = this.makeParentContainer(item, "gallery--freestyle__wrapper--horizontal");
      } else {
        // if it's a portrait image we need to use both it and next item.
        if (!_isVertical) {
          _isVertical = true;
          _item = this.makeParentContainer(item, "gallery--freestyle__wrapper--vertical");
        } else {
          _isVertical = false;
          _item = this.addToExistingParentContainer(item);
        }
      }

      this.animateItemOnPageEnter(_item);
    });
  }

  animateItemOnPageEnter (item) {
    TweenLite.set(item, {
      opacity: '0',
      y: 30
    });

    new ScrollMagic.Scene({
      triggerElement: item,
      triggerHook: 0.75
    })
      .on('enter', () => {
        TweenLite.to(item, 1, {
          opacity: '1',
          y: '0'
        });
      })
      .addTo(this.controller);
  }

  addToExistingParentContainer (item) {
    // the parent container is the previous node
    var wrapper = item.previousElementSibling;
    var newItem = item.cloneNode(true);
    wrapper.appendChild(newItem);
    item.remove();

    // and if we're adding a second item, we can play with some parallax effect
    // and we offset one of the images
    // but only on screens >= 768

    if (window.innerWidth >= 768) {
      var _imgs = Array.from(wrapper.querySelectorAll(".js--gallery__item"));
      var _random = _.random(0, 1);
      var _img = _imgs[_random].querySelector("img");
      TweenLite.set(_img, {
        y: window.innerHeight/5
      });

      // provide extra space below container to reduce croppings
      TweenLite.set(wrapper, {
        marginBottom: window.innerHeight/6,
        marginTop: window.innerHeight/6
      });

      // make a scroll scene and bind tween
      var _t = TweenLite.to(_img, 1, {
        y: -window.innerHeight/5
      });
      var _s = new ScrollMagic.Scene({
        triggerElement: newItem,
        triggerHook: 'onEnter',
        duration: window.innerHeight*2
      })
        .setTween(_t)
        .addTo(this.controller);
    }

    return newItem;
  }

  makeParentContainer (item, clss) {
    var parent = item.parentNode;
    var wrapper = document.createElement('div');
    wrapper.classList.add("gallery--freestyle__wrapper", clss);

    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, item);
    // set element as child of wrapper
    wrapper.appendChild(item);

    return item;
  }
}

module.exports = __Gallery__Freestyle;
