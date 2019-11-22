var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["modules"] = this["modules"] || {};

this["modules"]["chapter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <div class=\"isf-layout_chapter__background-img\" style=\"background-image: url('assets/"
    + container.escapeExpression(((helper = (helper = helpers.chapterBackground || (depth0 != null ? depth0.chapterBackground : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"chapterBackground","hash":{},"data":data}) : helper)))
    + "-xl.jpg')\">\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-layout_chapter js--chapter style--"
    + alias4(((helper = (helper = helpers.chapterStyle || (depth0 != null ? depth0.chapterStyle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapterStyle","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <!-- Chapter: Style Ralph -->\n    <div class = \"isf-layout_chapter__header js--chapter__header\">\n        <div class = \"isf-layout_chapter__img\">\n            <div class = \"isf-layout_chapter__mask\">\n                <div class = \"isf-layout_chapter__background-img__wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chapterBackground : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n        <div class = \"isf-layout_chapter__title isf-f-white\">\n            <div class = \"isf-container\">\n                <h1>"
    + ((stack1 = ((helper = (helper = helpers.chapterTitle || (depth0 != null ? depth0.chapterTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapterTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n            </div>\n        </div>\n    </div>\n\n    <div class = \"isf-layout_chapter__content js--chapter__content js--content\">\n        <div class = \"isf-container-fluid isf-"
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

  return "    			<div class = \"isf-layout_floater__scene__item js--floater__scene__item h--right\" data-parallax = \"light\" data-horizontal_pos = \""
    + alias4(((helper = (helper = helpers.horizontal_pos || (depth0 != null ? depth0.horizontal_pos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"horizontal_pos","hash":{},"data":data}) : helper)))
    + "\">\n    				<img class = \"isf-layout_floater__scene__image\" src = \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n    			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class = \"isf-layout_floater js--floater\">\n\n    \n\n    <div class = \"isf-layout_floater__scenes js--floater__scenes\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.floaterScenes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class = \"isf-layout_floater__text js--floater__text\">\n    	<div class = \"isf-container\">\n    		<!-- content -->\n    	</div>\n    </div>\n</div>";
},"useData":true});

this["modules"]["horizontal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n<!-- horizontal layout to navigate content -->\n<!-- how to structure content? -->\n<div class = \"isf-layout_horizontal js--horizontal\">\n\n    <div class = \"isf-layout_horizontal__background js--horizontal__background style--something\">\n        <div class = \"isf-layout_split-sticky__sticky__item stack-item stack-item--1\" style = \"background-image: url('"
    + container.escapeExpression(((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backgroundImage","hash":{},"data":data}) : helper)))
    + "'); \">\n        </div>\n    </div>\n\n    <div class = \"isf-layout_horizontal__content\">\n        <div class = \"isf-layout_split-sticky__content--inner\">\n           <!-- content -->\n        </div>\n    </div> <!-- Content end -->\n</div>";
},"useData":true});

this["modules"]["interactivescroller"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\n<div class = \"isf-layout_interactive-scroller js--interactive-scroller\">\n    <!-- Steps: maybe generate in script? -->\n    <div class = \"isf-layout_interactive-scroller__viewer js--interactive-scroller__viewer\">\n        <div class = \"isf-layout_interactive-scroller__background js--interactive-scroller__background\" style = \"background-image: url('"
    + ((stack1 = ((helper = (helper = helpers.headerImage || (depth0 != null ? depth0.headerImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "');\">\n        	<h3>"
    + ((stack1 = ((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n        </div>\n        <!-- Viewer: Content -->\n        <div class = \"isf-layout_interactive-scroller__content isf-f-white\">\n            <!-- content -->\n        </div>\n    </div>\n</div>";
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

this["modules"]["splitsticky"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        		<img class = \"isf-layout_split-sticky__sticky__image\" src = \""
    + ((stack1 = ((helper = (helper = helpers.stickyImage || (depth0 != null ? depth0.stickyImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stickyImage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        		"
    + ((stack1 = ((helper = (helper = helpers.stickyCustom || (depth0 != null ? depth0.stickyCustom : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stickyCustom","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class = \"isf-layout_split-sticky js--split-sticky split-sticky--"
    + alias4(((helper = (helper = helpers.stickyPosition || (depth0 != null ? depth0.stickyPosition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stickyPosition","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class = \"isf-layout_split-sticky__sticky js--split-sticky__sticky style--something\">\n        <div class = \"isf-layout_split-sticky__sticky__image--wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.stickyImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.stickyCustom : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n    <div class = \"isf-layout_split-sticky__content js--split-sticky__content js--content\">\n        <div class = \"isf-layout_split-sticky__content--inner js--split-sticky__content--inner\">\n           <!-- content -->\n        </div>\n    </div> <!-- Content end -->\n</div>";
},"useData":true});

this["modules"]["code"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-container\">\n	<div class = \"isf-el isf-el_code\" id = \""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	    <pre>"
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "</pre>\n	</div>\n</div>";
},"useData":true});

this["modules"]["cta"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el isf-el_cta\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <a class=\"shop-frontpage-new-button cta\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target = \"_blank\">\n        "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n    </a>\n</div>\n";
},"useData":true});

this["modules"]["gallery"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bgsrc : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class = \"isf-el_image js--image isf-el_gallery__item js--gallery__item isf-el_image--"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-x_animate_on_page_enter = \""
    + alias4(((helper = (helper = helpers.galleryEffectOnPageEnter || (depth0 != null ? depth0.galleryEffectOnPageEnter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"galleryEffectOnPageEnter","hash":{},"data":data}) : helper)))
    + "\">\n                <div class = \"isf-el_image__wrap\">\n                    <figure class = \"isf-el_image__figure\">\n                        <img class = \"isf-el_image__picture\" src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </figure>\n                </div>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            <p class = \"isf-el_image__caption\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class = \"isf-el_gallery__item js--gallery__item\">\n                <div class = \"isf-el_image--bg js--image-bg\" style = \"background-image: url("
    + container.escapeExpression(((helper = (helper = helpers.bgsrc || (depth0 != null ? depth0.bgsrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bgsrc","hash":{},"data":data}) : helper)))
    + ");\">\n                </div>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el_gallery js--gallery\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\" data-layout = \""
    + alias4(((helper = (helper = helpers.galleryLayout || (depth0 != null ? depth0.galleryLayout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"galleryLayout","hash":{},"data":data}) : helper)))
    + "\" data-preview = \""
    + alias4(((helper = (helper = helpers.galleryPreview || (depth0 != null ? depth0.galleryPreview : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"galleryPreview","hash":{},"data":data}) : helper)))
    + "\">\n    <div class = \"isf-el_gallery__inner js--gallery__inner\">\n        \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.galleryImages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"useData":true});

this["modules"]["gallerytwo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    	<div class = \"isf-el_gallery-two__viewer__item js--gallery-two__viewer__item h--"
    + alias4(((helper = (helper = helpers.posH || (depth0 != null ? depth0.posH : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posH","hash":{},"data":data}) : helper)))
    + "\" data-item = \""
    + alias4(((helper = (helper = helpers.dataItem || (depth0 != null ? depth0.dataItem : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dataItem","hash":{},"data":data}) : helper)))
    + "\">\n    		<div class = \"viewer-group__inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.heading : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    		</div>\n    	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    			<img src = \""
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
    + "    </div>\n\n</div>";
},"useData":true});

this["modules"]["gllry"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class = \"isf-el_image js--image isf-el_gllry__item js--gllry__item\">\n                <div class = \"isf-el_image--inner js--item--inner\">\n                    <picture class = \"isf-el_picture js--picture\">\n                        <source srcset=\"assets/"
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "-lg.jpg\"\n                            media=\"(min-width: 768px)\">\n                        <img src=\"assets/"
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "-xs.jpg\" />\n                    </picture>\n                    <p class = \"isf-el_caption\">\n                       The speckles give the bubble a sense of depth and density, almost giving it the appearance of a translucent rock or gemstone.\n                    </p>\n                </div>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div class = \"isf-el_gllry js--gllry\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\" data-layout = \""
    + alias4(((helper = (helper = helpers.galleryLayout || (depth0 != null ? depth0.galleryLayout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"galleryLayout","hash":{},"data":data}) : helper)))
    + "\">\n    <div class = \"isf-el_gllry--inner js--gllry--inner\">\n        <div class = \"isf-el_gllry__items js--gllry__items\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.galleryImages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});

this["modules"]["image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<picture class = \"isf-el_image js--image\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n    <source srcset=\""
    + alias4(((helper = (helper = helpers.src_large || (depth0 != null ? depth0.src_large : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src_large","hash":{},"data":data}) : helper)))
    + "\"\n            media=\"(min-width: 768px)\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.src_small || (depth0 != null ? depth0.src_small : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src_small","hash":{},"data":data}) : helper)))
    + "\" />\n</picture>\n";
},"useData":true});

this["modules"]["imagegroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <picture class = \"isf-el_picture js--picture\">\n                <source srcset=\"assets/"
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "-lg.jpg\"\n                    media=\"(min-width: 768px)\">\n                <img src=\"assets/"
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "-xs.jpg\" />\n            </picture>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-"
    + alias4(((helper = (helper = helpers.container || (depth0 != null ? depth0.container : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"container","hash":{},"data":data}) : helper)))
    + " isf-el_image_group isf-el_image_group--"
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + "\" id = \""
    + alias4(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\">\n	<div class = \"isf-el_image_group__inner\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div>";
},"useData":true});

this["modules"]["quote"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"isf-el isf-el_quote js--quote\" id = \"modId\">\n    <div class = \"isf-el_quote__content\">\n        <h3 class = \"isf-el_quote__content__quote\">“"
    + alias4(((helper = (helper = helpers.quote || (depth0 != null ? depth0.quote : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quote","hash":{},"data":data}) : helper)))
    + "”</h3>\n        <small class = \"isf-el_quote__content__source\">\n            - "
    + alias4(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "\n        </small>\n    </div>\n</div>";
},"useData":true});

this["modules"]["text"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-x_animate_on_page_enter = \""
    + container.escapeExpression(((helper = (helper = helpers.x_animate_on_page_enter || (depth0 != null ? depth0.x_animate_on_page_enter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"x_animate_on_page_enter","hash":{},"data":data}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h3 class = \"isf-el_text__headline\" >\n            "
    + ((stack1 = ((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </h3>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h4 class = \"isf-el_text__highlight\">\n            "
    + ((stack1 = ((helper = (helper = helpers.highlight || (depth0 != null ? depth0.highlight : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"highlight","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </h4>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p>\n            "
    + ((stack1 = ((helper = (helper = helpers.paragraph || (depth0 != null ? depth0.paragraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"paragraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class = \"isf-el isf-el_text js--text\" id = \""
    + container.escapeExpression(((helper = (helper = helpers.modId || (depth0 != null ? depth0.modId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modId","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " >\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headline : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.paragraph : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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

if (typeof exports === 'object' && exports) {module.exports = this["modules"];}