webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "itemBox102_heading1 font_heading1"
  }, [_vm._v("Random Dog")]), _vm._v(" "), _c('vcSpinner', {
    attrs: {
      "pr-loading": _vm.prIsRandomDogReady,
      "pr-spinner": false,
      "pr-status": _vm.prStatus
    }
  }), _vm._v(" "), (_vm.prIsRandomDogReady) ? _c('div', {
    staticClass: "itemBox102"
  }, [_c('div', {
    staticClass: "itemBox102_img-holder"
  }, [_c('a', {
    attrs: {
      "href": _vm.prRandomImage[0]
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.prRandomImage[0],
      "alt": 'random' + ' ' + _vm.prRandomBreed[0] + ' ' + 'image',
      "title": 'random' + ' ' + _vm.prRandomBreed[0] + ' ' + 'image'
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("Name: " + _vm._s(_vm.prRandomDogName))]), _vm._v(" "), _c('p', [_vm._v("Breed: "), _c('a', {
    attrs: {
      "href": '#/gallery/' + _vm.prRandomBreed[0]
    }
  }, [_vm._v(_vm._s(_vm.prRandomBreed[0]))])])]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f2264da", esExports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcRandomDog_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcRandomDog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcRandomDog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f2264da_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcRandomDog_vue__ = __webpack_require__(100);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcRandomDog_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f2264da_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcRandomDog_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcRandomDog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcRandomDog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f2264da", Component.options)
  } else {
    hotAPI.reload("data-v-1f2264da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 97:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var vcSpinner = function vcSpinner() {
  return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 91));
};
exports.default = {
  data: function data() {
    return {};
  },

  props: ["prStatus", "prRandomBreed", "prRandomImage", "prRandomDogName", "prIsRandomDogReady"],
  components: {
    vcSpinner: vcSpinner
  },
  mounted: function mounted() {},
  methods: {}
};

/***/ })

});