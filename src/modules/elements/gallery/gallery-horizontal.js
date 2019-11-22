
var _ = require('lodash');

var Hammer = require('hammerjs');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');

// tests for touch events
require('browsernizr/test/touchevents');
var Modernizr = require('browsernizr'); // make sure to do this _after_ importing the tests

var XPRScrollIndicator = require('gallery/scroll-indicator.js');
var ProgressBar = require('gallery/progress-bar.js');


var getTranslateX = function(el) {
  var style = window.getComputedStyle(el);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
};

var mapRange = function(num, in_min, in_max, out_min, out_max)  {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var clamp = function(val, min, max) {
  return Math.min(Math.max(min, val), max);
};

var hsnbHeaderHeight = (window.innerWidth < 768) ? 60 : 90;

function Gallery__Horizontal__Item(el) {
  this.DOM = {el: el};
  this.DOM.inner = this.DOM.el.querySelector(".js--item--inner");
  this.isRevealed = this.isInViewport() ? true : false;

  if (!this.isInViewport()) {
    this.setInitialAnimationValues();
  }
}

Gallery__Horizontal__Item.prototype.setInitialAnimationValues = function() {
  TweenLite.set(this.DOM.inner, {
    opacity: 0
  });
};

Gallery__Horizontal__Item.prototype.isInViewport = function() {
  var bounding = this.DOM.el.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

Gallery__Horizontal__Item.prototype.reveal = function() {
  var self = this;
  TweenLite.to(this.DOM.inner, 1, {
    opacity: 1,
    delay: 0,
    ease: Sine.easeOut,
    onComplete: function() {
      self.isRevealed = true;
    }
  });
};

function ISF_Element_Gallery__Horizontal(el) {
}

ISF_Element_Gallery__Horizontal.prototype._init = function(options) {
  var self = this;
  this.items = [];
  this.setInitialAnimationValues();
  this.resizeImages();
  this.setupScrollScene();

  _.forEach(this.DOM.items, function(item, index) {
    self.items.push( new Gallery__Horizontal__Item(item) );
  });

  this.progressBar = new ProgressBar({
    updateOn: this.scrollScene,
    progressBarStyles: {
        bottom: '0px',
        height: '2px',
        top: 'auto'
      },
      progressBarIndicatorStyles: {
        backgroundColor: 'purple'
      }
  });

  this.scrollScene.on('leave', function() {
    self.progressBar.toggleVisibility(false);
  });

  this.scrollScene.on('enter', function() {
    self.progressBar.toggleVisibility(true);
  });

  // if( Modernizr.touchevents ) {
  //   //this.setupTouch();
  // } else {

  // }
};

ISF_Element_Gallery__Horizontal.prototype.setInitialAnimationValues = function() {
  TweenLite.set(this.DOM.itemsWrap, {
    x: window.innerWidth < 768 ? 0 : window.innerWidth*0.35
  });
};

ISF_Element_Gallery__Horizontal.prototype.setupTouch = function() {
  this.horizontalPosition = 0;
  this.horizontalBounds = { max: 0, min: - (this.DOM.itemsWrap.offsetWidth - window.innerWidth) };

  // setup vars necessary for touch interactions
  this.touchManager = new Hammer.Manager( this.DOM.itemsWrap );

  this.touchUtilities = {}; //object to store touch utilities
  this.touchUtilities.swipe = new Hammer.Swipe(); //swipe ev listener
  this.touchUtilities.pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); // pan ev listener
  this.touchUtilities.swipe.recognizeWith(this.touchUtilities.pan); // to make them work together

  this.touchUtilities.isSwiping = false;
  this.touchUtilities.isPanning = false;
  this.touchUtilities.panCount = 0; //tracking pans to avoid mixing them with swipes

  this.manageTouchEvents();
};

ISF_Element_Gallery__Horizontal.prototype.manageTouchEvents = function() {
  // pan & swipe are detected simultaneously,
  // as pan begins on event start, and swipe - once event finishes.
  // in order to differentiate between them
  // we wait for 15 pans to give swiping a chance to start
  // if not, we pan

  // those are not active unless swipe & pan are added to the touch manager
  var self = this;

  // navigation
  this.touchManager.on('swiperight swipeleft', function(e) {
    if( self.touchUtilities.panCount <= 15) {
      // swipe only if panning is not in progress for a while now
      self.touchUtilities.isSwiping = true;
      var direction = (e.type === 'swiperight') ? 'left' : 'right';
      self.navigateTouch( e.deltaX );
    }
  });

  this.touchManager.on('panstart', function(e) {
    self.touchUtilities.isPanning = true;
  });

  this.touchManager.on('panend', function(e) {
    self.touchUtilities.isPanning = false;
    self.touchUtilities.panCount = 0;
  });

  this.touchManager.on('panleft panright', function(e) {
    self.touchUtilities.panCount += 1;
    if( !self.touchUtilities.isSwiping ) {
      self.navigateTouch( e.velocityX * 200 );
    }
  });

  this.enableTouchAndPanNavigation();
};

ISF_Element_Gallery__Horizontal.prototype.enableTouchAndPanNavigation = function() {
    this.touchManager.add( this.touchUtilities.swipe );
    this.touchManager.add( this.touchUtilities.pan );
};

ISF_Element_Gallery__Horizontal.prototype.resizeImages = function() {
  // recalibrate image sizes so that height fits layout
  var imgHeight = (window.innerHeight < 768 ? 0.85 : 0.9)*window.innerHeight - hsnbHeaderHeight;
  _.forEach(this.DOM.items, function(item, index) {
    var image = item.querySelector('img');
    item.style.height = imgHeight + 'px';
    item.style.width = (image.naturalWidth*(imgHeight/image.naturalHeight)) + 'px';
    item.style.minWidth = (image.naturalWidth*(imgHeight/image.naturalHeight)) + 'px';
  });
};

ISF_Element_Gallery__Horizontal.prototype.setupScrollScene = function() {

  // var _m = - (this.DOM.itemsWrap.offsetWidth - window.innerWidth);
  // var _move = new TimelineLite()
  //   .to(this.DOM.itemsWrap, 1, { x: _m, ease: Power2.easeOut });
  this.scrollIndicator = new XPRScrollIndicator(this.DOM.inner, {
    type: (window.innerWidth < 768)? 'vertical' : 'horizontal',
    text: 'Scroll to Explore'
  });
  if (window.innerWidth >= 768) { this.scrollIndicator.toggle(true); }
  var self = this;
  this.scrollScene = new ScrollMagic.Scene({
    triggerElement: this.DOM.el,
    duration: this.DOM.el.offsetWidth*6,
    triggerHook: 0
  })
    .on('progress', function(e) {
      var _m = - (e.progress*(self.DOM.itemsWrap.offsetWidth - window.innerWidth));
      TweenLite.to(self.DOM.itemsWrap, 1, {x: _m, ease: Sine.easeOut });
      _.forEach(self.items, function(item, index) {
        if (item.isInViewport() && !item.isRevealed) {
          item.reveal();
        }
      });
    })
    .on('enter', function() {
      self.scrollIndicator.toggle(true);
      if (window.innerWidth > 768) {
        setTimeout(function() {
          self.scrollIndicator.toggle(false);
        }, 300);
      }
    })
    .on('leave', function() {
      self.scrollIndicator.toggle(false);
    })
    .setPin(this.DOM.inner, { pushFollowers: true })
    .addTo(this.controller);
};

ISF_Element_Gallery__Horizontal.prototype.adjustDistanceToFitBounds = function( distance ) {
  // adjust nav distance to avoid going too far
  var rangeBounds = [-window.innerWidth, window.innerWidth]; // you'd want panning to be tamer
  var mappedDistance = mapRange( distance, -window.innerWidth, window.innerWidth, rangeBounds[0], rangeBounds[1] );
  var clampedDistance = clamp( mappedDistance, (this.horizontalBounds.min - this.horizontalPosition), (this.horizontalBounds.max - this.horizontalPosition) ); // clamp to fit bounds
  return clampedDistance;
};

ISF_Element_Gallery__Horizontal.prototype.navigateTouch = function(distance) {
  // update progress bar
  // var progressAmount = (this.horizontalPosition + distance) * 100 / this.horizontalBounds.min;
  // this.updateProgressBar( progressAmount );

  // adjust distance and navigate
  this.horizontalPosition = getTranslateX( this.DOM.itemsWrap );

  var adjustedDistance = this.adjustDistanceToFitBounds( distance );
  var self = this;
  _.forEach(self.items, function(item, index) {
    if (item.isInViewport() && !item.isRevealed) {
      item.reveal();
    }
  });
  TweenMax.to( this.DOM.itemsWrap, 1, {
    x: "+=" + adjustedDistance,
    ease: Power3.easeOut,
    onComplete: function(){
      self.touchUtilities.isSwiping = false;
    }
  });
};

var gh;
gh = new ISF_Element_Gallery__Horizontal();
module.exports = gh;
