webpackJsonp([3],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  lastViewed: []
};



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcGalleryDisplay_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee2dba34_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcGalleryDisplay_vue__ = __webpack_require__(56);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcGalleryDisplay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee2dba34_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcGalleryDisplay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcGalleryDisplay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcGalleryDisplay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee2dba34", Component.options)
  } else {
    hotAPI.reload("data-v-ee2dba34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(40);
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


var vcLastViewed = function vcLastViewed() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 53));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prStatus", "prCurrentImages"],
  components: {
    vcLastViewed: vcLastViewed
  },
  mounted: function mounted() {},
  methods: {
    insertLastViewed: function insertLastViewed(item) {
      if (__WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].lastViewed.length < 4) {
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].lastViewed.unshift(item);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].lastViewed.unshift(item);
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].lastViewed.pop();
      }
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\r\n  " + _vm._s(_vm.prStatus) + "\r\n  "), _vm._l((_vm.prCurrentImages), function(i) {
    return _c('ul', [_c('li', [_c('img', {
      attrs: {
        "src": i
      },
      on: {
        "click": function($event) {
          _vm.insertLastViewed(i)
        }
      }
    }), _c('br')])])
  }), _vm._v(" "), _c('vcLastViewed')], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ee2dba34", esExports)
  }
}

/***/ })

});