var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["modules"] = this["modules"] || {};

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
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <div class = \"isf-layout_chapter__header js--chapter__header\">\n        <div class = \"isf-layout_chapter__img\">\n            <div class = \"isf-layout_chapter__mask\">\n                <div class = \"isf-layout_chapter__background-img__wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chapterBackground : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n        <div class = \"isf-layout_chapter__title isf-f-white\">\n            <div class = \"isf-container\">\n                <h1 class = \"isf-layout__chapter__title-el\">"
    + ((stack1 = ((helper = (helper = helpers.chapterTitle || (depth0 != null ? depth0.chapterTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapterTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n            </div>\n        </div>\n    </div>\n\n    <div class = \"isf-layout_chapter__content js--chapter__content js--content\">\n        <div class = \"isf-"
    + alias4(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + "\">\n            <!-- content -->\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["floater"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    	<div class = \"isf-layout_floater__scene js--floater__scene\" data-scene = \""
    + container.escapeExpression(((helper = (helper = helpers.floaterSceneData || (depth0 != null ? depth0.floaterSceneData : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"floaterSceneData","hash":{},"data":data}) : helper)))
    + "\">\n    		<div class = \"isf-layout_floater__scene--inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.floaterSceneItems : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    		</div>\n    	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    			<div class = \"isf-layout_floater__scene__item js--floater__scene__item\" data-horizontal_pos = \""
    + alias4(((helper = (helper = helpers.horizontal_pos || (depth0 != null ? depth0.horizontal_pos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"horizontal_pos","hash":{},"data":data}) : helper)))
    + "\">\n    				<picture class = \"isf-el_picture\">\n              <source srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n                  media=\"(min-width: 768px)\">\n              <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n            </picture>\n    			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-layout_floater js--floater\">\n\n    <div class = \"isf-layout_floater__scenes js--floater__scenes\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.floaterScenes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class = \"isf-layout_floater__content js--floater__content\">\n    	<div class = \"isf-"
    + container.escapeExpression(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + "\">\n    		<!-- content -->\n    	</div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["interactivescroller"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\n<div class = \"isf-layout_interactive-scroller js--interactive-scroller\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <!-- Steps: maybe generate in script? -->\n    <div class = \"isf-layout_interactive-scroller__viewer js--interactive-scroller__viewer\">\n        <div class = \"isf-layout_interactive-scroller__background js--interactive-scroller__background\" style = \"background-image: url('"
    + ((stack1 = ((helper = (helper = helpers.headerImage || (depth0 != null ? depth0.headerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "');\">\n        	<h3>"
    + ((stack1 = ((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n        </div>\n        <!-- Viewer: Content -->\n        <div class = \"isf-layout_interactive-scroller__content isf-f-white\">\n            <!-- content -->\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["simple"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-layout_simple isf-padding-tb-md isf-color-scheme--"
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <div class = \"isf-"
    + alias4(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + "\">\n        <!-- content -->\n   	</div>\n</div>\n";
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
    + "\" />\n          </picture>\n        </div>\n    </div>\n\n    <div class = \"isf-layout_split-sticky__content js--split-sticky__content js--content\">\n        <div class = \"isf-layout_split-sticky__content--inner js--split-sticky__content--inner\">\n           <!-- content -->\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["cta"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el isf-el_cta isf-el_cta--"
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <a class=\"shop-frontpage-new-button cta\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target = \"_blank\">\n        "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n    </a>\n</div>\n";
},"useData":true});

this["modules"]["gallery"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class = \"isf-el_image js--image isf-el_gallery__item js--gallery__item\">\n                <div class = \"isf-el_image--inner js--item--inner\">\n                    <picture class = \"isf-el_picture js--picture\">\n                        <source srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n                            media=\"(min-width: 768px)\">\n                        <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n                    </picture>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <small class = \"isf-el_caption\">\n                       "
    + container.escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper)))
    + "\n                    </small>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class = \"isf-el_gallery js--gallery\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\" data-layout = \""
    + alias4(((helper = (helper = helpers.layout || (depth0 != null ? depth0.layout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data}) : helper)))
    + "\" data-color_scheme = \""
    + alias4(((helper = (helper = helpers.colorScheme || (depth0 != null ? depth0.colorScheme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorScheme","hash":{},"data":data}) : helper)))
    + "\" >\n    <div class = \"isf-el_gallery--inner js--gallery--inner\">\n        <div class = \"isf-el_gallery__items js--gallery__items\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["modules"]["images"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class = \"isf-el_image js--image\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.effect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.srcalt : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-effect = \""
    + container.escapeExpression(((helper = (helper = helpers.effect || (depth0 != null ? depth0.effect : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"effect","hash":{},"data":data}) : helper)))
    + "\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <picture class = \"isf-el_picture js--picture\">\n            <source srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"\n                media=\"(min-width: 768px)\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n          </picture>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <picture class = \"isf-el_picture js--picture\">\n            <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n          </picture>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <small class = \"isf-el_caption\">\n            "
    + container.escapeExpression(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper)))
    + "\n          </small>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-el_images js--images\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n	<div class = \"isf-el_images__inner\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div>\n";
},"useData":true});

this["modules"]["quote"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class = \"isf-el isf-el_quote js--quote\" id = \"modId\">\n    <div class = \"isf-el_quote__content\">\n        <h3 class = \"isf-el_quote__content__quote\">“"
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
    + container.escapeExpression(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
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
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n	<div class = \"isf-container\">\n		<div class=\"isf-el_video__wrapper isf-el_video__wrapper-iframe\">\n			<iframe src=\"https://content.jwplatform.com/players/"
    + alias4(((helper = (helper = helpers.videoId || (depth0 != null ? depth0.videoId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoId","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.playerId || (depth0 != null ? depth0.playerId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data}) : helper)))
    + ".html\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"auto\" allowfullscreen=\"\" style=\"position:absolute;\"></iframe>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});

this["modules"]["tabs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <li>\n        <button class = \"js--nav_tab isf-nav_tab\" data-trgt = \""
    + alias4(((helper = (helper = helpers.tabTarget || (depth0 != null ? depth0.tabTarget : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabTarget","hash":{},"data":data}) : helper)))
    + "\">\n          "
    + alias4(((helper = (helper = helpers.tabLabel || (depth0 != null ? depth0.tabLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabLabel","hash":{},"data":data}) : helper)))
    + "\n        </button>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class = \"isf-nav_tabs js--nav_tabs\">\n  <div class = \"isf-nav_tabs__inner\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tabs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</nav>\n";
},"useData":true});

this["modules"]["custom__header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-custom-header\" style = \"background-image: url('"
    + alias4(((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backgroundImage","hash":{},"data":data}) : helper)))
    + "');\">\n  <h1 class = \"isf-custom-header__title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n";
},"useData":true});

this["modules"]["custom__label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class = \"isf-custom-label\">\n  <p><span>"
    + alias4(((helper = (helper = helpers.moduleType || (depth0 != null ? depth0.moduleType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"moduleType","hash":{},"data":data}) : helper)))
    + " : "
    + alias4(((helper = (helper = helpers.moduleName || (depth0 != null ? depth0.moduleName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"moduleName","hash":{},"data":data}) : helper)))
    + "</span><a href = \""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target = \"_blank\">see README</a></p>\n</div>\n";
},"useData":true});

this["modules"]["custom__preview_header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header class = \"isf-preview__header\">\n	<div class = \"isf-preview__header__brand\">\n		<h4>hsnbisf 2.0: "
    + container.escapeExpression(((helper = (helper = helpers.currentPage || (depth0 != null ? depth0.currentPage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentPage","hash":{},"data":data}) : helper)))
    + "</h4>\n	</div>\n\n	<div class = \"isf-preview__header__nav\">\n		<ul class = \"nav-pages\">\n			<li class = \"nav-pages__li\">\n				<a href = \"index.html\" class = \"nav-pages__link\"><span>home</span></a>\n			</li>\n      <li class = \"nav-pages__li\">\n        <a href = \"#\" class = \"nav-pages__link nav-trigger\"><span>modules</span><ion-icon name=\"add\"></ion-icon></a>\n        <div class = \"nav--expanded\">\n          <div class = \"nav--expanded--inner\">\n            <div class = \"nav--expanded--sub\">\n              <span class = \"nav-label\">elements</span>\n              <ul>\n                <li>\n                  <a href = \"text.html\">text</a>\n                </li>\n                <li>\n                  <a href = \"images.html\">images</a>\n                </li>\n                <li>\n                  <a href = \"video.html\">video</a>\n                </li>\n                <li>\n                  <a href = \"galleries.html\">gallery</a>\n                </li>\n                <li>\n                  <a href = \"other.html\">other</a>\n                </li>\n              </ul>\n            </div>\n            <div class = \"nav--expanded--sub\">\n              <span class = \"nav-label\">layouts</span>\n              <ul>\n                <li>\n                  <a href = \"simple.html\">simple</a>\n                </li>\n                <li>\n                  <a href = \"chapter.html\">chapter</a>\n                </li>\n                <li>\n                  <a href = \"splitsticky.html\">splitsticky</a>\n                </li>\n                <li>\n                  <a href = \"floater.html\">floater</a>\n                </li>\n                <li>\n                  <a href = \"scroller.html\">scroller</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class = \"nav-pages__li\">\n        <a href = \"#\" class = \"nav-pages__link\"><span>stories</span></a>\n      </li>\n    </ul>\n  </div>\n  <div class = \"isf-preview__header__nav\">\n\n		<ul class = \"nav-external\">\n			<a href = \"https://github.com/titel-media/hs-interactive-story-framework/\" target = \"_blank\">\n				<ion-icon name=\"logo-github\"></ion-icon>\n			</a>\n		</ul>\n	</div>\n</header>\n";
},"useData":true});

this["modules"]["floatinggal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class = \"isf-el_gallery-two__viewer__item js--gallery-two__viewer__item h--"
    + alias4(((helper = (helper = helpers.posH || (depth0 != null ? depth0.posH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posH","hash":{},"data":data}) : helper)))
    + "\" data-item = \""
    + alias4(((helper = (helper = helpers.dataItem || (depth0 != null ? depth0.dataItem : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataItem","hash":{},"data":data}) : helper)))
    + "\">\n        <div class = \"viewer-group__inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.heading : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <img src = \""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <h2>"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class = \"isf-el_gallery-two__step js--gallery-two__step step--0\" data-viewer = \""
    + alias4(((helper = (helper = helpers.dataViewer || (depth0 != null ? depth0.dataViewer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataViewer","hash":{},"data":data}) : helper)))
    + "\">\n            <div class = \"step__inner h--"
    + alias4(((helper = (helper = helpers.alignH || (depth0 != null ? depth0.alignH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alignH","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.stepImages : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class = \"isf-el_gallery-two__item js--gallery-two__item step__inner__img\" data-effect = \""
    + alias4(((helper = (helper = helpers.effect || (depth0 != null ? depth0.effect : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"effect","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class = \"isf-el_image__wrap\">\n                        <img src = \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            <p class = \"isf-el_image__caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el_gallery-two js--gallery-two\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\" data-current_step = \"0\">\n\n    <div class = \"isf-el_gallery-two__viewer js--gallery-two__viewer\">\n\n        <div class = \"isf-el_gallery-two__viewer__header js--gallery-two__viewer__header\">\n            <div class = \"isf-viewer__header__mask js--viewer__header__mask\">\n                <div class = \"isf-viewer__header__background js--viewer__header__background\" style = \"background-image: url('"
    + alias4(((helper = (helper = helpers.viewerImage || (depth0 != null ? depth0.viewerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"viewerImage","hash":{},"data":data}) : helper)))
    + "')\">\n                </div>\n            </div>\n            <h1 class = \"isf-viewer__header__heading\">"
    + alias4(((helper = (helper = helpers.viewerHeading || (depth0 != null ? depth0.viewerHeading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"viewerHeading","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.viewerScenes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class = \"isf-el_gallery-two__steps js--gallery-two__steps\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.steps : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});

this["modules"]["givenchy_gallery"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class = \"isf-el_gallery__group\" data-effect = \""
    + container.escapeExpression(((helper = (helper = helpers.effect || (depth0 != null ? depth0.effect : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"effect","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class = \"isf-el_image js--image isf-el_gallery__item js--gallery__item "
    + alias4(((helper = (helper = helpers.customClass || (depth0 != null ? depth0.customClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customClass","hash":{},"data":data}) : helper)))
    + "\">\n          <div class = \"isf-el_image--inner js--item--inner\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n          </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class = \"isf-el_gallery isf-el_gallery--givenchy js--gallery\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n  <div class = \"isf-el_gallery--inner js--gallery--inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.imageGroups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["modules"]["lookbook_scene"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <picture class = \"\">\n                <source srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" media=\"(min-width: 768px)\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </picture>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class = \"caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-layout_interactive-scroller__content__group js--interactive-scroller__content__group effect--"
    + ((stack1 = ((helper = (helper = helpers.groupEffect || (depth0 != null ? depth0.groupEffect : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"groupEffect","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class = \"js--interactive-scroller__content__group__inner isf-layout_interactive-scroller__content__group__inner \">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groupImages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["modules"]["placeholder_section"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class = \"isf-section--placeholder\">\n  <div class = \"isf-container\">\n    <h3>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</h3>\n  </div>\n</div>\n";
},"useData":true});

this["modules"]["scroller_scene"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <picture class = \"\">\n                <source srcset=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" media=\"(min-width: 768px)\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </picture>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class = \"caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-layout_interactive-scroller__content__group js--interactive-scroller__content__group effect--"
    + ((stack1 = ((helper = (helper = helpers.groupEffect || (depth0 != null ? depth0.groupEffect : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"groupEffect","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class = \"js--interactive-scroller__content__group__inner isf-layout_interactive-scroller__content__group__inner \">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groupImages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["modules"]["swoosh"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class = \"xpr-swoosh\">\n  <div class = \"xpr-swoosh--inner\">\n    <div class = \"xpr-swoosh__images images--0\">\n      <div class = \"xpr-swoosh__image image--foreground\">\n        <img src = \"https://interactive-development.hsnb.io/2019-10-givenchy/assets/1.jpg\" />\n      </div>\n      <div class = \"xpr-swoosh__image image--background\">\n        <img src = \"https://interactive-development.hsnb.io/2019-10-givenchy/assets/texture-1.jpg\" />\n      </div>\n    </div>\n    <div class = \"xpr-swoosh__images images--1\">\n      <div class = \"xpr-swoosh__image image--foreground\">\n        <img src = \"https://interactive-development.hsnb.io/2019-10-givenchy/assets/7.jpg\" />\n      </div>\n      <div class = \"xpr-swoosh__image image--background\">\n        <img src = \"https://interactive-development.hsnb.io/2019-10-givenchy/assets/texture-2.jpg\" />\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class = \"xpr-gradient\">\n</div>\n";
},"useData":true});

this["modules"]["tapes"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class = \"xpr-section xpr-section--flex\" id = \"givenchy--tapes\">\n  <div class = \"givenchy--tapes\">\n  </div>\n\n  <div class = \"givenchy--tapes__image-wrap\">\n    <div class = \"givenchy--tapes__image\" id = \"hero\">\n        <img src=\"https://interactive-development.hsnb.io/2019-10-givenchy/assets/3.jpg\" />\n    </div>\n  </div>\n</section>\n";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["modules"];}