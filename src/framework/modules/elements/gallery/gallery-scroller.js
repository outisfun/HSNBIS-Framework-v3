
var _ = require('lodash');
var ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require('gsap');

class __Gallery__Scroller__Step {
  constructor(group) {
    this.group = group;

    this.buildStep();
  }

  buildStep(ind) {
    var step = document.createElement('div');
    step.classList.add('isf-layout_interactive-scroller__step', 'js--gallery--interactive-scroller__step', 'step--' + ind);
    this.DOM = { el: step };

    TweenLite.set(this.DOM.el, {
      height: window.innerHeight,
      border: '5px solid orange'
    });
  }

  buildStepScene() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.DOM.el,
      triggerHook: '0',
      duration: window.innerHeight
    })
      .on('enter', () => {
        console.log('enterrr');
      })
      .setClassToggle(this.group.DOM.el, "is--active");
  }
}

class __Gallery__Scroller__Group {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.items = Array.from(this.DOM.el.querySelectorAll(".js--gallery__item"));

    // randomize effect
    this.effects = [
      'up-and-down',
      'fade-in',
      'come-up'
    ];

    this.effect = this.effects[_.random(0, (this.effects.length - 1))];
    this.DOM.el.classList.add("effect--" + this.effect);

    _.forEach(this.DOM.items, (item, index) => {
      item.querySelector("picture").classList.add("picture--" + index);
    });

    this.setInitialValues();
  }

  setInitialValues () {
    TweenLite.set(this.DOM.el, {
      position: 'absolute',
      top: 75,
      left: '0'
    });

    if (this.effect === 'up-and-down') {

    }
  }
}

class __Gallery__Scroller {

  constructor() { }

  _init() {
    this.controller = new ScrollMagic.Controller();
    this.groups = [];
    this.steps = [];
    this.buildMarkup();
    this.createGroups();
    this.buildSteps();
    this.buildScrollScene();
  }

  buildMarkup () {
    var _isVertical = false;

    // ok, so we need to iterate over items //
    // and wrap them in divs
    _.forEach(this.DOM.items, (item, index) => {
      var image = item.querySelector('img');
      var _item;

      if (image.offsetWidth > image.offsetHeight) {
        // standalone landscape image
        _isVertical = false;
        _item = this.makeParentContainer(item);
      } else {
        // if it's a portrait image we need to use both it and next item.
        if (!_isVertical) {
          _isVertical = true;
          _item = this.makeParentContainer(item);
        } else {
          _isVertical = false;
          _item = this.addToExistingParentContainer(item);
        }
      }
    });

  }

  createGroups () {
     // add groups
    _.forEach( Array.from(this.DOM.el.querySelectorAll(".gallery--interactive-scroller__group")), (group, index) => {
      this.groups.push (new __Gallery__Scroller__Group(group));
      if (index === 0) {
        group.classList.add("is--active");
      }
    });
  }

  makeParentContainer (item) {
    var parent = item.parentNode;

    var group = document.createElement('div');
    group.classList.add("gallery--interactive-scroller__group");
    var inner = document.createElement('div');
    inner.classList.add("gallery--interactive-scroller__group__inner");
    group.appendChild(inner);

    parent.replaceChild(group, item);
    inner.appendChild(item);

    return item;
  }

  addToExistingParentContainer (item) {
    // the parent container is the previous node
    var group = item.previousElementSibling;
    var newItem = item.cloneNode(true);
    group.querySelector(".gallery--interactive-scroller__group__inner").appendChild(newItem);
    item.remove();

    return newItem;
  }

  buildSteps () {
    this.DOM.stepsContainer = document.createElement('div');
    this.DOM.stepsContainer.classList.add('js--gallery--interactive-scroller__steps');
    this.DOM.el.appendChild(this.DOM.stepsContainer);

    _.forEach(this.groups, (group, ind) => {
      var step = new __Gallery__Scroller__Step(group);
      this.steps.push(step);
      this.DOM.stepsContainer.appendChild(step.DOM.el);
      step.buildStepScene();
      step.scene.addTo(this.controller);
    });

    this.DOM.el.appendChild(this.DOM.stepsContainer);
  }

  buildScrollScene () {
    this.ss = new ScrollMagic.Scene({
      triggerElement: this.DOM.el,
      triggerHook: 0,
      duration: this.DOM.el.offsetHeight - window.innerHeight
    })
      .on('enter', () => { console.log('enter main scene'); })
      .on('leave', () => { console.log('leave main scene'); })
      .setPin(this.DOM.itemswrap, { pushFollowers: false })
      .addTo(this.controller);
  }



}

module.exports = __Gallery__Scroller;
