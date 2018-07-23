/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		11: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _RouterView = __webpack_require__(4);

var _RouterView2 = _interopRequireDefault(_RouterView);

var _vueProgressbar = __webpack_require__(7);

var _vueProgressbar2 = _interopRequireDefault(_vueProgressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from "vue";
// import VueRouter from "vue-router";

var options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(_vueProgressbar2.default, options);
Vue.use(VueRouter);

// const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
var vcHome = function vcHome() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 8));
};
var vcGallery = function vcGallery() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 9));
};
var vcFavorites = function vcFavorites() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 10));
};

var routes = [{
  path: "/",
  component: vcHome
}, {
  path: "/gallery/:breedname",
  component: vcGallery
}, {
  path: "/favorites",
  component: vcFavorites
}];

var router = new VueRouter({
  routes: routes
});

new Vue({
  el: "#app",
  router: router,
  render: function render(h) {
    return h(_RouterView2.default);
  }
});

exports.router = router;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RouterView_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RouterView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RouterView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b7d3fb7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_RouterView_vue__ = __webpack_require__(6);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RouterView_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b7d3fb7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_RouterView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\RouterView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RouterView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b7d3fb7", Component.options)
  } else {
    hotAPI.reload("data-v-7b7d3fb7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view', {
    staticClass: "router-view"
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b7d3fb7", esExports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,o){ true?o():"function"==typeof define&&define.amd?define(o):o()}(0,function(){"use strict";function t(t,o){for(var i,e,s=1;s<arguments.length;++s){e=arguments[s];for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style"),i=" .__cov-progress { position: fixed; opacity: 1; z-index: 999999; } ";o.type="text/css",o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i)),t.appendChild(o)}}();var o="undefined"!=typeof window,i={render:function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"__cov-progress",style:t.style})},staticRenderFns:[],name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function(){var t=this.progress.options.location,o={"background-color":this.progress.options.canSuccess?this.progress.options.color:this.progress.options.failedColor,opacity:this.progress.options.show?1:0};return"top"==t||"bottom"==t?("top"===t?o.top="0px":o.bottom="0px",this.progress.options.inverse?o.right="0px":o.left="0px",o.width=this.progress.percent+"%",o.height=this.progress.options.thickness,o.transition="width "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity):"left"!=t&&"right"!=t||("left"===t?o.left="0px":o.right="0px",this.progress.options.inverse?o.top="0px":o.bottom="0px",o.height=this.progress.percent+"%",o.width=this.progress.options.thickness,o.transition="height "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity),o},progress:function(){return o?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},location:"top",autoRevert:!0,inverse:!1}}}}};module.exports.install=function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(o.version.split(".")[0],"undefined"!=typeof window),n={$vm:null,state:{tFailColor:"",tColor:"",timer:null,cut:0},init:function(t){this.$vm=t},start:function(t){var o=this;this.$vm&&(t||(t=3e3),this.$vm.RADON_LOADING_BAR.percent=0,this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.state.cut=1e4/Math.floor(t),clearInterval(this.state.timer),this.state.timer=setInterval(function(){o.increase(o.state.cut*Math.random()),o.$vm.RADON_LOADING_BAR.percent>95&&o.finish()},100))},set:function(t){this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.$vm.RADON_LOADING_BAR.percent=Math.floor(t)},get:function(){return Math.floor(this.$vm.RADON_LOADING_BAR.percent)},increase:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent+Math.floor(t)},decrease:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent-Math.floor(t)},hide:function(){var t=this;clearInterval(this.state.timer),this.state.timer=null,setTimeout(function(){t.$vm.RADON_LOADING_BAR.options.show=!1,o.nextTick(function(){setTimeout(function(){t.$vm.RADON_LOADING_BAR.percent=0},100),t.$vm.RADON_LOADING_BAR.options.autoRevert&&setTimeout(function(){t.revert()},300)})},this.$vm.RADON_LOADING_BAR.options.transition.termination)},pause:function(){clearInterval(this.state.timer)},finish:function(){this.$vm&&(this.$vm.RADON_LOADING_BAR.percent=100,this.hide())},fail:function(){this.$vm.RADON_LOADING_BAR.options.canSuccess=!1,this.$vm.RADON_LOADING_BAR.percent=100,this.hide()},setFailColor:function(t){this.$vm.RADON_LOADING_BAR.options.failedColor=t},setColor:function(t){this.$vm.RADON_LOADING_BAR.options.color=t},setLocation:function(t){this.$vm.RADON_LOADING_BAR.options.location=t},setTransition:function(t){this.$vm.RADON_LOADING_BAR.options.transition=t},tempFailColor:function(t){this.state.tFailColor=this.$vm.RADON_LOADING_BAR.options.failedColor,this.$vm.RADON_LOADING_BAR.options.failedColor=t},tempColor:function(t){this.state.tColor=this.$vm.RADON_LOADING_BAR.options.color,this.$vm.RADON_LOADING_BAR.options.color=t},tempLocation:function(t){this.state.tLocation=this.$vm.RADON_LOADING_BAR.options.location,this.$vm.RADON_LOADING_BAR.options.location=t},tempTransition:function(t){this.state.tTransition=this.$vm.RADON_LOADING_BAR.options.transition,this.$vm.RADON_LOADING_BAR.options.transition=t},revertColor:function(){this.$vm.RADON_LOADING_BAR.options.color=this.state.tColor,this.state.tColor=""},revertFailColor:function(){this.$vm.RADON_LOADING_BAR.options.failedColor=this.state.tFailColor,this.state.tFailColor=""},revertLocation:function(){this.$vm.RADON_LOADING_BAR.options.location=this.state.tLocation,this.state.tLocation=""},revertTransition:function(){this.$vm.RADON_LOADING_BAR.options.transition=this.state.tTransition,this.state.tTransition={}},revert:function(){this.$vm.RADON_LOADING_BAR.options.autoRevert&&(this.state.tColor&&this.revertColor(),this.state.tFailColor&&this.revertFailColor(),this.state.tLocation&&this.revertLocation(),!this.state.tTransition||void 0===this.state.tTransition.speed&&void 0===this.state.tTransition.opacity||this.revertTransition())},parseMeta:function(t){for(var o in t.func){var i=t.func[o];switch(i.call){case"color":switch(i.modifier){case"set":this.setColor(i.argument);break;case"temp":this.tempColor(i.argument)}break;case"fail":switch(i.modifier){case"set":this.setFailColor(i.argument);break;case"temp":this.tempFailColor(i.argument)}break;case"location":switch(i.modifier){case"set":this.setLocation(i.argument);break;case"temp":this.tempLocation(i.argument)}break;case"transition":switch(i.modifier){case"set":this.setTransition(i.argument);break;case"temp":this.tempTransition(i.argument)}}}}},r=t({canSuccess:!0,show:!1,color:"#73ccec",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1},e),a=new o({data:{RADON_LOADING_BAR:{percent:0,options:r}}});s&&(window.VueProgressBarEventBus=a,n.init(a)),o.component("vue-progress-bar",i),o.prototype.$Progress=n}});


/***/ })
/******/ ]);