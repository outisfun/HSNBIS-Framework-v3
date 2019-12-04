// A MODULE BUILDER CLASS
// ISFStory uses it to
// pass data to, so it can select which
// modules to build

// If a module does not contain a JS file, it can be just
// a regular ISFModule;

const _ = require('lodash');
const ISFTEMPLATES = require('builder/templates.js');
const ISFDATA = require('common/js/isf-data.js');

const ISFModule = require('common/js/isf-module.js');

class ISFModuleBuilder {

  constructor() {
  }

  buildModule(moduleType, moduleData) {

    var mod;

    if (ISFDATA[_.upperCase(moduleType)] !== undefined) {

      // check if it has own constructor
      if (ISFDATA[_.upperCase(moduleType)].hasOwnProperty('MODULE')) {
        //console.log("module type and data", moduleType, moduleData);
        mod = new ISFDATA[_.upperCase(moduleType)].MODULE(moduleType, moduleData);

        // now use ISFDATA to assign special elements
        if (ISFDATA[_.upperCase(moduleType)].CLASSES !== undefined) {
          _.forEach(ISFDATA[_.upperCase(moduleType)].CLASSES, (className, classEl) => {
            // sometimes the class in isf-data refers to a collection of nodes,
            // like the items in a gallery zum beispiel
            if (Array.from(mod.DOM.el.querySelectorAll("." + className)).length > 1) {
              mod.DOM[_.lowerCase(classEl)] = Array.from(mod.DOM.el.querySelectorAll("." + className));
            } else {
              mod.DOM[_.lowerCase(classEl)] = mod.DOM.el.querySelector("." + className);
            }
          });
        }
        //mod = new ISFModule(moduleType, moduleData);
      } else {
        mod = new ISFModule(moduleType, moduleData);
      }
    } else {
      console.log ("No module of type " + moduleType + " in ISFDATA");
    }
    return mod;
  }
}

module.exports = ISFModuleBuilder;

