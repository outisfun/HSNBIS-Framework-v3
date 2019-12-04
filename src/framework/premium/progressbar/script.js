const _ = require('lodash');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');

// VARS FOR HSNB HEADER AND OTHER SITE SPECIFIC THINGS

let storyContainer = document.querySelector("#isf-interactive-story");

// maybe include in isf-data??

let _defaultOpts = {
  progressBarStyles: {
    position: 'fixed',
    top: 90,
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: 'transparent',
    zIndex: 20
  },
  progressBarIndicatorStyles: {
    position: 'absolute',
    width: '0%',
    height: '100%',
    backgroundColor: 'black'
  }
};

class XPRProgressBar {

  constructor(opts) {
    console.log("OPTS", opts);
    this.DOM = {
      container: opts.container || storyContainer //is this ok though
    };

    this.opts = _.merge(_defaultOpts, opts);
    this.init();
  }

  init () {
    this.buildMarkup();
    this.setStyles();
    this.initEvents();
  }

  buildMarkup () {
    this.DOM.progressBar = document.createElement("div");
    this.DOM.progressBar.classList.add("xpr-progress-bar");
    this.DOM.progressBarIndicator = document.createElement("div");
    this.DOM.progressBarIndicator.classList.add("xpr-progress-bar__indicator");
    this.DOM.progressBar.appendChild(this.DOM.progressBarIndicator);
    this.DOM.container.appendChild(this.DOM.progressBar); //xsfdsf
  }

  setStyles () {
    TweenLite.set(this.DOM.progressBar, this.opts.progressBarStyles);
    TweenLite.set(this.DOM.progressBarIndicator, this.opts.progressBarIndicatorStyles);
  }

  initEvents () {
    var self = this;
    if (!this.opts.container) {
      window.addEventListener('scroll', (e) => {
        var pos = window.scrollY;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollBottom = (document.documentElement.scrollHeight ||
            document.body.scrollHeight) - document.documentElement.clientHeight;
        var scrollPercent = (scrollBottom !== 0) ? ((scrollTop / scrollBottom * 100) + "%") : "100%";
        this.updateIndicator(scrollPercent);
      });
    } else {

      // if container element is something else for a page,
      // for example layout, then we have to create a scrollscene
      this.toggleVisibility(false);
      let controller = new ScrollMagic.Controller();

      let _tl = new TimelineLite()
        .to(this.DOM.progressBarIndicator, 1, {
          width: '100%'
        });
      let _ss = new ScrollMagic.Scene({
        triggerElement: this.opts.container,
        triggerHook: '0',
        duration: this.opts.container.offsetHeight - window.innerHeight
      })
        .setTween(_tl)
        .on('enter', () => { this.toggleVisibility(true); })
        .on('leave', () => { this.toggleVisibility(false); })
        .addTo(controller);
    }
  }

  updateIndicator (scrollPercent) {
    TweenLite.to(this.DOM.progressBarIndicator, 0.2, {
      width: scrollPercent
    });
  }

  toggleVisibility (trueOrFalse) {
    TweenLite.to(this.DOM.progressBar, 0.2, {
      opacity: trueOrFalse ? 1 : 0
    });
  }

  sayHi() {
    console.log("hello progress");
  }
}

module.exports = XPRProgressBar;
