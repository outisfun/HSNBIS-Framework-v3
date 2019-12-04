var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["modules"] = this["modules"] || {};

this["modules"]["cta"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el isf-el_cta isf-el_cta--"
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementId","hash":{},"data":data}) : helper)))
    + "\">\n    <a class=\"shop-frontpage-new-button cta\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target = \"_blank\">\n        "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n    </a>\n</div>\n";
},"useData":true});

this["modules"]["gallery"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class = \"isf-el_image js--image isf-el_gallery__item js--gallery__item\">\n            <picture class = \"isf-el_picture js--picture\">\n              <source srcset=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"\n                  media=\"(min-width: 768px)\">\n              <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n            </picture>\n          </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class = \"isf-el_gallery js--gallery\" id = \""
    + alias4(((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementId","hash":{},"data":data}) : helper)))
    + "\" data-layout = \""
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + "\" data-color_scheme = \""
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" >\n    <div class = \"isf-el_gallery--inner js--gallery--inner\">\n        <div class = \"isf-el_gallery__items js--gallery__items\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["images"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class = \"isf-el_image js--image\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.effect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-effect = \""
    + container.escapeExpression(((helper = (helper = helpers.effect || (depth0 != null ? depth0.effect : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"effect","hash":{},"data":data}) : helper)))
    + "\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <small class = \"isf-el_caption\">\n            "
    + container.escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper)))
    + "\n          </small>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-el_images js--images\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"elementId","hash":{},"data":data}) : helper)))
    + "\">\n	<div class = \"isf-el_images__inner\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div>\n";
},"useData":true});

this["modules"]["quote"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class = \"isf-el isf-el_quote js--quote\" id = \"elementId\">\n    <div class = \"isf-el_quote__content\">\n        <h3 class = \"isf-el_quote__content__quote\">“"
    + ((stack1 = ((helper = (helper = helpers.quote || (depth0 != null ? depth0.quote : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quote","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "”</h3>\n        <small class = \"isf-el_quote__content__source\">\n            - "
    + container.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "\n        </small>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["text"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h3 class = \"isf-el_text__headline\" >\n            "
    + ((stack1 = ((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h4 class = \"isf-el_text__highlight\">\n            "
    + ((stack1 = ((helper = (helper = helpers.highlight || (depth0 != null ? depth0.highlight : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"highlight","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </h4>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p>\n            "
    + ((stack1 = ((helper = (helper = helpers.paragraph || (depth0 != null ? depth0.paragraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"paragraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-el isf-el_text js--text\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"elementId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.paragraph : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["modules"]["video"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<p class = \"caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"isf-el isf-el_video\" id = \""
    + alias4(((helper = (helper = helpers.elementId || (depth0 != null ? depth0.elementId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementId","hash":{},"data":data}) : helper)))
    + "\">\n	<div class = \"isf-container\">\n		<div class=\"isf-el_video__wrapper isf-el_video__wrapper-iframe\">\n			<iframe src=\"https://content.jwplatform.com/players/"
    + alias4(((helper = (helper = helpers.videoId || (depth0 != null ? depth0.videoId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoId","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.playerId || (depth0 != null ? depth0.playerId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data}) : helper)))
    + ".html\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"auto\" allowfullscreen=\"\" style=\"position:absolute;\"></iframe>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});

this["modules"]["chapter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <div class=\"isf-layout_chapter__background-img\" style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = helpers.chapterBackground || (depth0 != null ? depth0.chapterBackground : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"chapterBackground","hash":{},"data":data}) : helper)))
    + "')\">\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-layout_chapter js--chapter style--"
    + alias4(((helper = (helper = helpers.chapterStyle || (depth0 != null ? depth0.chapterStyle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapterStyle","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.layoutId || (depth0 != null ? depth0.layoutId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layoutId","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class = \"isf-layout_chapter__header js--chapter__header\">\n        <div class = \"isf-layout_chapter__img\">\n            <div class = \"isf-layout_chapter__mask\">\n                <div class = \"isf-layout_chapter__background-img__wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chapterBackground : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <div class = \"isf-layout_chapter__title isf-f-white\">\n            <div class = \"isf-container\">\n                <h1 class = \"isf-layout__chapter__title-el\">"
    + ((stack1 = ((helper = (helper = helpers.chapterTitle || (depth0 != null ? depth0.chapterTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapterTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n            </div>\n        </div>\n    </div>\n\n    <div class = \"isf-layout_chapter__content js--chapter__content js--content\">\n        <div class = \"isf-container isf-"
    + alias4(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + " js--container\">\n            <!-- content -->\n        </div>\n    </div>\n\n</div>\n";
},"useData":true});

this["modules"]["interactivescroller"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\n<div class = \"isf-layout_interactive-scroller js--interactive-scroller\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.layoutId || (depth0 != null ? depth0.layoutId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layoutId","hash":{},"data":data}) : helper)))
    + "\">\n    <!-- Steps: maybe generate in script? -->\n    <div class = \"isf-layout_interactive-scroller__viewer js--interactive-scroller__viewer\">\n        <div class = \"isf-layout_interactive-scroller__background js--interactive-scroller__background\" style = \"background-image: url('"
    + ((stack1 = ((helper = (helper = helpers.headerImage || (depth0 != null ? depth0.headerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "');\">\n        	<h3>"
    + ((stack1 = ((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n        </div>\n        <!-- Viewer: Content -->\n        <div class = \"isf-layout_interactive-scroller__content isf-f-white\">\n            <!-- content -->\n        </div>\n    </div>\n</div>\n\n<!--\n  <div class=\"isf-layout_interactive-scroller__content__group js--interactive-scroller__content__group effect--up-and-down is--active\">\n  <div class=\"js--interactive-scroller__content__group__inner isf-layout_interactive-scroller__content__group__inner \">\n            <picture class=\"\">\n                <source srcset=\"https://interactive-development.hsnb.io/2019-06-ellesse-lookbook/assets/lb_1_1.jpg\" media=\"(min-width: 768px)\">\n                <img src=\"https://interactive-development.hsnb.io/2019-06-ellesse-lookbook/assets/lb_1_1.jpg\">\n\n            </picture>\n            <picture class=\"\">\n                <source srcset=\"https://interactive-development.hsnb.io/2019-06-ellesse-lookbook/assets/lb_1_4.jpg\" media=\"(min-width: 768px)\">\n                <img src=\"https://interactive-development.hsnb.io/2019-06-ellesse-lookbook/assets/lb_1_4.jpg\">\n\n            </picture>\n  </div>\n</div>\n-->\n";
},"useData":true});

this["modules"]["simple"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-layout isf-layout_simple isf-padding-tb-md isf-color-scheme--"
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.layoutId || (depth0 != null ? depth0.layoutId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layoutId","hash":{},"data":data}) : helper)))
    + "\">\n    <div class = \"isf-container isf-"
    + alias4(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + " js--container\">\n        <!-- content -->\n   	</div>\n</div>\n";
},"useData":true});

this["modules"]["splitsticky"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class = \"isf-layout_split-sticky js--split-sticky split-sticky--"
    + alias4(((helper = (helper = helpers.stickyPosition || (depth0 != null ? depth0.stickyPosition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stickyPosition","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class = \"isf-layout_split-sticky__sticky js--split-sticky__sticky style--something\">\n        <div class = \"isf-layout_split-sticky__sticky__image--wrapper\">\n        	<picture class = \"isf-el_picture js--picture\">\n            <source srcset=\""
    + alias4(((helper = (helper = helpers.stickyImage || (depth0 != null ? depth0.stickyImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stickyImage","hash":{},"data":data}) : helper)))
    + "\"\n                media=\"(min-width: 768px)\">\n            <img class = \"isf-layout_split-sticky__sticky__image\" src = \""
    + alias4(((helper = (helper = helpers.stickyImage || (depth0 != null ? depth0.stickyImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stickyImage","hash":{},"data":data}) : helper)))
    + "\" />\n          </picture>\n        </div>\n    </div>\n\n    <div class = \"isf-layout_split-sticky__content js--split-sticky__content js--content\">\n        <div class = \"isf-layout_split-sticky__content--inner js--split-sticky__content--inner js--container\">\n           <!-- content -->\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["tabs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <li>\n        <button class = \"js--tab--xs isf-nav_tab--xs\" data-trgt = \""
    + alias4(((helper = (helper = helpers.tabTarget || (depth0 != null ? depth0.tabTarget : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabTarget","hash":{},"data":data}) : helper)))
    + "\">\n          <span>"
    + alias4(((helper = (helper = helpers.tabLabel || (depth0 != null ? depth0.tabLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabLabel","hash":{},"data":data}) : helper)))
    + "</span>\n        </button>\n      </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <li>\n        <button class = \"js--tab isf-nav_tab\" data-trgt = \""
    + alias4(((helper = (helper = helpers.tabTarget || (depth0 != null ? depth0.tabTarget : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabTarget","hash":{},"data":data}) : helper)))
    + "\">\n          <span>"
    + alias4(((helper = (helper = helpers.tabLabel || (depth0 != null ? depth0.tabLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabLabel","hash":{},"data":data}) : helper)))
    + "</span>\n        </button>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class = \"isf-nav_tabs js--tabs\">\n  <div class = \"isf-nav_tabs__inner--xs el--xs\">\n    <button class = \"isf-nav_tabs__current js--current\">\n      <span class = \"js--current--text isf-current-el\">Select section:</span>\n      <span class = \"isf-icon icon--dropdown\">\n      </span>\n    </button>\n    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n  <div class = \"isf-nav_tabs__inner el--lg\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</nav>\n\n";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["modules"];}