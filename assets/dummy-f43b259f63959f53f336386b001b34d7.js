"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,t,a,r){var l=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,l=n["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:t["default"]}),(0,a["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,t){var a=t["default"].APP.name,r=t["default"].APP.version;e["default"]=n["default"].extend({version:r,name:a})}),define("dummy/components/svg-pie-segment",["exports","ember-svg-pie/components/svg-pie-segment"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/svg-pie",["exports","ember-svg-pie/components/svg-pie"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/helpers/array",["exports","ember-svg-pie/helpers/array"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return n.array}})}),define("dummy/helpers/svg-pie-start-angle",["exports","ember-svg-pie/helpers/svg-pie-start-angle"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"svgPieStartAngle",{enumerable:!0,get:function(){return n.svgPieStartAngle}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:(0,n["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function a(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var a,r=t["default"].exportApplicationGlobal;a="string"==typeof r?r:n["default"].String.classify(t["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var a=n["default"].Router.extend({location:t["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0-beta.1",loc:{source:null,start:{line:1,column:0},end:{line:127,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var a=e.createTextNode("ember-svg-pie");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/lolmaus/ember-svg-pie/");var r=e.createTextNode("lolmaus/ember-svg-pie");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("pre"),a=e.createTextNode('\n{{svg-pie\n  data=(array\n    (hash value=90  color="red")\n    (hash value=60  color="yellow")\n    (hash value=180 color="green")\n  )\n  total=360\n}}\n');e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("hr");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("style"),a=e.createTextNode("\n  .foo  { fill: deeppink; }\n  .bar  { fill: lightpink; }\n  .baz  { fill: hotpink; }\n  .quux { fill: lightsalmon; }\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("pre"),a=e.createTextNode('\n{{svg-pie\n  data=(array\n    (hash value=30   class="foo")\n    (hash value=12.5 class="bar")\n    (hash value=12.5 class="baz")\n    (hash value=30   class="quux")\n  )\n  size=150\n  stroke="black"\n  strokeWidth=10\n}}\n\n<style>\n  .foo  { fill: deeppink; }\n  .bar  { fill: lightpink; }\n  .baz  { fill: hotpink; }\n  .quux { fill: lightsalmon; }\n</style>\n');e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("hr");e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","zomg");var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("style"),a=e.createTextNode("\n  .zomg {\n    position: relative;\n    display:  table;\n  }\n  .zomg:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 75%;\n    height: 75%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background-color: white;\n  }\n  .zomg svg {\n    display: block;\n  }\n");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("pre"),a=e.createTextNode('\n{{svg-pie\n  data=(hash value=10 color="deepskyblue")\n  total=18\n  class="zomg"\n}}\n\n<style>\n  .zomg {\n    position: relative;\n    display:  table;\n  }\n  .zomg:after {\n    content: \'\';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 75%;\n    height: 75%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background-color: white;\n  }\n  .zomg svg {\n    display: block;\n  }\n</style>\n');e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=new Array(3);return a[0]=e.createMorphAt(n,4,4,t),a[1]=e.createMorphAt(n,10,10,t),a[2]=e.createMorphAt(e.childAt(n,[18]),1,1),a},statements:[["inline","svg-pie",[],["data",["subexpr","array",[["subexpr","hash",[],["value",90,"color","red"],["loc",[null,[9,4],[9,32]]]],["subexpr","hash",[],["value",60,"color","yellow"],["loc",[null,[10,4],[10,35]]]],["subexpr","hash",[],["value",180,"color","green"],["loc",[null,[11,4],[11,34]]]]],[],["loc",[null,[8,7],[12,3]]]],"total",360],["loc",[null,[7,0],[14,2]]]],["inline","svg-pie",[],["data",["subexpr","array",[["subexpr","hash",[],["value",30,"class","foo"],["loc",[null,[31,4],[31,33]]]],["subexpr","hash",[],["value",12.5,"class","bar"],["loc",[null,[32,4],[32,33]]]],["subexpr","hash",[],["value",12.5,"class","baz"],["loc",[null,[33,4],[33,33]]]],["subexpr","hash",[],["value",30,"class","quux"],["loc",[null,[34,4],[34,34]]]]],[],["loc",[null,[30,7],[35,3]]]],"size",150,"stroke","black","strokeWidth",10],["loc",[null,[29,0],[39,2]]]],["inline","svg-pie",[],["data",["subexpr","hash",[],["value",10,"color","deepskyblue"],["loc",[null,[73,9],[73,44]]]],"total",18],["loc",[null,[72,2],[75,4]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",a=e["default"].$('meta[name="'+t+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-svg-pie",version:"v1.1.0"});