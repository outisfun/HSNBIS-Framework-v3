var _ = require('lodash');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');
require('gsap/umd/ScrollToPlugin.js');

var ISFDATA = require('builder/isf-data.js');

function ISFNavTabs (el, controller) {
  this.controller = controller;
  this.DOM = { el: el };
  this.DOM.tabs = Array.from(this.DOM.el.querySelectorAll("." + ISFDATA.NAV.TABS.CLASSES.TAB));

  console.log(this, this.DOM.el, ISFDATA.NAV.TABS.CLASSES.TAB);
  this.scrollScenes = [];
}

ISFNavTabs.prototype.init = function () {
  // ok so, two main things about tabs
  // trigger active state when the element is reached
  // and scroll to element when clicking it
  _.forEach(this.DOM.tabs, (tab, index) => {
    var tabTarget = document.querySelector("#" + tab.dataset.trgt);
    this.initTabScrollTrigger(tab, tabTarget);
    this.initTabClickEvent(tab, tabTarget);
  });

  this.toggleScrollEventListeners(true);

  // init main scroll scene
  this.mainSS = new ScrollMagic.Scene({
    triggerElement: this.DOM.el,
    triggerHook: 0,
    offset: -77
  })
    .setPin(this.DOM.el)
    .addTo(this.controller);
};

ISFNavTabs.prototype.initTabScrollTrigger = function (tab, tabTarget) {
  var _s = new ScrollMagic.Scene({
    triggerElement: tabTarget,
    triggerHook: 0.5,
    duration: tabTarget.offsetHeight
  })
    .on('enter', () => {
      this.toggleActiveTab(tab);
    });

  this.scrollScenes.push(_s);
};

ISFNavTabs.prototype.toggleScrollEventListeners = function (trueOrFalse) {
  _.forEach(this.scrollScenes, (scene) => {
    scene[trueOrFalse ? 'addTo' : 'remove'](this.controller);
  });
};

ISFNavTabs.prototype.initTabClickEvent = function (tab, tabTarget) {

  var scrollToTarget = function () {
    TweenLite.to(window, 0.75, {
      scrollTo: tabTarget,
      onComplete: () => {
        this.toggleScrollEventListeners(true);
      }
    });
  }.bind(this);

  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // prevent 'active' state when scrolling over
    this.toggleScrollEventListeners(false);
    scrollToTarget();
    this.toggleActiveTab(tab);
  });
};

ISFNavTabs.prototype.toggleActiveTab = function (activeTab) {
  _.forEach(this.DOM.tabs, (tab, index) => {
    tab.classList[(_.indexOf(this.DOM.tabs, activeTab) === index) ? 'add' : 'remove']('is--active');
  });
};

module.exports = ISFNavTabs;
