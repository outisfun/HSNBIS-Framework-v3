const _ = require('lodash');
const ScrollMagic = require('scrollmagic');

require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
const gsap = require('gsap');
require('gsap/umd/ScrollToPlugin.js');

const ISFModule = require('common/js/isf-module.js');

class ISFModule__Tabs extends ISFModule {

}

function ISFNavTabs (el, controller) {
  this.controller = controller;
  this.DOM = { el: el };

  // lg els
  this.DOM.tabs = Array.from(this.DOM.el.querySelectorAll(".js--tab"));
  // xs els
  this.DOM.tabsXS = Array.from(this.DOM.el.querySelectorAll(".js--tab--xs"));

  this.DOM.innerXS = this.DOM.el.querySelector(".isf-nav_tabs__inner--xs");
  this.DOM.currentXS = this.DOM.el.querySelector(".js--current");
  this.DOM.currentIcon = this.DOM.currentxs.querySelector(".isf-icon");
  this.DOM.currentText = this.DOM.currentxs.querySelector(".js--current--text");

  this.scrollScenes = [];
}

ISFNavTabs.prototype.init = function () {
  this.mainSS = new ScrollMagic.Scene({
    triggerElement: this.DOM.el,
    triggerHook: 0,
    offset: -77
  })
    .setPin(this.DOM.el)
    .addTo(this.controller);

  if (window.innerWidth >= 768) {
    this.initLGEvents();
  } else {
    this.initXSEvents();
  }

  this.toggleScrollEventListeners(true);
};

ISFNavTabs.prototype.initTabScrollTrigger = function (tab) {
  var tabTarget = document.querySelector("#" + tab.dataset.trgt);
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

ISFNavTabs.prototype.initTabClickEvent = function (tab) {

  var tabTarget = document.querySelector("#" + tab.dataset.trgt);

  var scrollToTarget = function () {
    TweenLite.set(window, {
      scrollTo: tabTarget,
      onComplete: () => { this.toggleScrollEventListeners(true); }
    });
  }.bind(this);

  tab.addEventListener('click', (e) => {
    e.preventDefault();
    this.toggleScrollEventListeners(false);
    scrollToTarget();
    this.toggleActiveTab(tab);

    if (window.innerWidth < 768) {
      this.toggleXSExpand(); // close the menu if open
    }
  });
};

ISFNavTabs.prototype.toggleActiveTab = function (activeTab) {

  _.forEach(this.DOM.tabs, (tab, index) => {
    tab.classList[(_.indexOf(this.DOM.tabs, activeTab) === index) ? 'add' : 'remove']('is--active');
  });

  _.forEach(this.DOM.tabsXS, (tab, index) => {
    tab.classList[(_.indexOf(this.DOM.tabsXS, activeTab) === index) ? 'add' : 'remove']('is--current-tab');
  });

  if (window.innerWidth < 768) {
    // also replace XS text and close menu
    this.DOM.currentText.innerHTML = activeTab.innerHTML;
  }
};

ISFNavTabs.prototype.initLGEvents = function () {

  _.forEach(this.DOM.tabs, (tab, index) => {
    this.initTabScrollTrigger(tab);
    this.initTabClickEvent(tab);
  });
};

ISFNavTabs.prototype.initXSEvents = function () {
  this.isExpanded = false;

  // set initial vals
  TweenLite.set(this.DOM.innerXS, {
    maxHeight: '45px',
    overflow: 'hidden',
    backgroundColor: 'black'
  });

  TweenLite.set(this.DOM.tabsXS, {
    opacity: '0',
    pointerEvents: 'none'
  });

  // build nav toggle animation
  this.openNavTl = new TimelineMax({ paused: true })
    .to(this.DOM.innerXS, 0.3, {
      maxHeight: (this.DOM.tabsXS.length + 1) * 45, // ?
      ease: Power2.easeInOut
    })
    .to(this.DOM.currentText, 0.1, {
      opacity: '0'
    }, "-=0.15")
    .set(this.DOM.currentIcon, {
      backgroundPosition: '-20px 0px'
    }, "-=0.1")
    .staggerTo(this.DOM.tabsXS, 0.3, {
      opacity: '1',
      pointerEvents: 'all'
    }, 0.04);

  // toggle expandind nav
  this.DOM.currentXS.addEventListener('click', this.toggleXSExpand.bind(this));

  _.forEach(this.DOM.tabsXS, (tab, index) => {
    this.initTabClickEvent(tab);
    this.initTabScrollTrigger(tab);
  });
};

ISFNavTabs.prototype.toggleXSExpand = function () {
  // true to expand, false to collapse
  this.openNavTl[this.isExpanded ? 'reverse' : 'restart']();
  this.isExpanded = !this.isExpanded;
};

module.exports = ISFNavTabs;
