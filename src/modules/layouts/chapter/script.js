
// Plugins
var ScrollMagic = require('scrollmagic');
var _ = require('lodash');

var ISFDATA = require('builder/isf-data.js');

var ww = window.innerWidth;
var wh = window.innerHeight;

function ISFLayoutChapter(el, controller) {

  this.controller = controller;
  this.DOM = { el : el };
  this.DOM.header = this.DOM.el.querySelector('.' + ISFDATA.LAYOUTS.CHAPTER.CLASSES.HEADER);
  this.DOM.contents = this.DOM.el.querySelector('.' + ISFDATA.LAYOUTS.CHAPTER.CLASSES.CONTENT);
  this.chapterContentGroupScenes = [];
}

ISFLayoutChapter.prototype.init = function () {var ScrollMagic = require('scrollmagic');
  this.fixHeader();
};

ISFLayoutChapter.prototype.fixHeader = function () {

  var self = this;

  this.chapterHeaderScene = new ScrollMagic.Scene({
    triggerElement: this.DOM.header,
    triggerHook: 0,
    duration: this.DOM.el.offsetHeight - wh,
  })
    .setClassToggle(this.DOM.el, "is--fixed")
    .on('end', function() {
      self.DOM.el.classList.toggle("is--bottom");
    })
    .addTo(this.controller);
};

module.exports = ISFLayoutChapter;
