// ISF Story

const _ = require('lodash');

const ISFModuleBuilder = require('common/js/isf-module-builder.js');
const ISFTEMPLATES = require('builder/templates.js');
const ISFDATA = require('common/js/isf-data.js');

function isEmpty (obj) {
  return (Object.keys(obj).length === 0 && obj.constructor === Object);
}

class ISFStory {

  constructor(el, data) {
    this.DOM = { el: el };
    this.storyData = data;
    this.moduleBuilder = new ISFModuleBuilder();
    this.modules = {};

    //console.log('story data', this.storyData);
    this.buildModules();

    setTimeout(() => {
      this.initModules();
    }, 500);
  }

  initModules() {
    _.forEach(this.modules, (mod, modId) => {
      if (mod.init !== undefined) { mod.init(); }
    });
  }

  buildModules() {

    // check for navigation elements,
    // they are optional
    if (this.storyData.nav && (!isEmpty(this.storyData.nav))) {
      _.forOwn(this.storyData.nav, (navObj, navId) => {
        var nav = this.buildModule(navId, navObj);
        this.DOM.el.appendChild(nav.DOM.el);
      });
    }

    _.forOwn(this.storyData.layouts, (layoutObj, layoutId) => {

      var layout = this.buildModule(layoutId, layoutObj);
      var layoutContainer = layout.DOM.el.querySelector(".js--container");

      _.forOwn(layoutObj.layoutContent, (elementObj, elementId) => {
        var element = this.buildModule(elementId, elementObj);
        layoutContainer.appendChild(element.DOM.el);
      });

      this.DOM.el.appendChild(layout.DOM.el);
    });
  }

  buildModule(moduleId, moduleObj) {
    var mod = this.moduleBuilder.buildModule(moduleObj.type, moduleObj.data);
    this.modules[moduleId] = mod;
    return mod;
  }
}

module.exports = ISFStory;

