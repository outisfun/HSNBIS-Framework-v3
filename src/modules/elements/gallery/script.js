
var _ = require('lodash');
var YAML = require('yamljs');
var FD = YAML.load('https://interactive-development.hsnb.io/src/fd.yml'); // ehhhh rewrite

var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');
require('browsernizr/test/touchevents');
var Modernizr = require('browsernizr'); // make sure to do this _after_ importing the tests

var bodyScrollLock = require('body-scroll-lock');
var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;

var Hammer = require('hammerjs'); // a library to manage touch events
var imagesLoaded = require('imagesloaded');

var ww = window.innerWidth;
var wh = window.innerHeight;

var galleryHorizontal = require('gallery/gallery-horizontal.js');

var extend = function( a, b ) {
  for( var key in b ) {
    a[key] = b[key];
  }
  return a;
};

function ISF_Element_Gallery(el, controller) {
  console.log('you go there');
  this.controller = controller;
  this.DOM = {};

  this.DOM.el = el;
  this.DOM.inner = this.DOM.el.querySelector(".js--gallery--inner");
  this.DOM.itemsWrap = this.DOM.el.querySelector(".js--gallery__items");
  this.DOM.items = Array.from( this.DOM.el.querySelectorAll(".js--gallery__item") );

  this.opts = {};
  this.opts.layout = this.DOM.el.dataset.layout;
  this.useTouch = (Modernizr.touchevents) ? true : false;
}

ISF_Element_Gallery.prototype.init = function() {
  switch (this.opts.layout) {
  case 'horizontal':
    extend(this, galleryHorizontal);
    this._init();
  }

};


module.exports = ISF_Element_Gallery;











