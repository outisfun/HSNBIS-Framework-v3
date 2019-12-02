/* BASIC MODULE CLASS */
/* OVER WHICH ALL OTHERS ARE EXTENSIONS */
// shared functionalities:
// buildMarkup
// ehmmm?? is that all

// though for a module it doesn't make a huge difference
// whether it's layout or an element

const ISFTEMPLATES = require('builder/templates.js');
const ISFDATA = require('common/js/isf-data.js');

const _ = require('lodash');

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

class ISFModule {

  constructor(type, data) {

    this.moduleType = type;
    var markup = this.buildMarkup(data) || null;
    this.DOM = { el: createElementFromHTML(markup) };
  }

  buildMarkup(data) {
    if (ISFTEMPLATES[this.moduleType] !== undefined ) {
      return ISFTEMPLATES[this.moduleType](data);
    } else {
      console.log("No template found for type " + this.type);
    }
  }
}

module.exports = ISFModule;

