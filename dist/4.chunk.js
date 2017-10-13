webpackJsonp([4,7],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  lastViewed: [{
    name: 'name1',
    imgSrc: '',
    breed: 'breed1'
  }, {
    name: 'name2',
    imgSrc: '',
    breed: 'breed2'
  }, {
    name: 'name3',
    imgSrc: '',
    breed: 'breed3'
  }],
  favorites: [{
    name: 'name1',
    imgSrc: 'imgsrc1.jpg',
    breed: 'african',
    notes: "note1",
    edit: false
  }, {
    name: 'name2',
    imgSrc: 'imgsrc2.jpg',
    breed: 'african',
    notes: "note2",
    edit: false
  }, {
    name: 'name3',
    imgSrc: 'imgsrc3.jpg',
    breed: 'bulldog',
    notes: "note3",
    edit: false
  }, {
    name: 'name4',
    imgSrc: 'imgsrc4.jpg',
    breed: 'bulldog',
    notes: "note4",
    edit: false
  }]
};



/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2564fc10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcLastViewed_vue__ = __webpack_require__(45);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2564fc10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcLastViewed_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcLastViewed.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcLastViewed.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2564fc10", Component.options)
  } else {
    hotAPI.reload("data-v-2564fc10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(12);
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
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      lastViewed: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].lastViewed
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prName1"],
  components: {},
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "navSide103",
    attrs: {
      "role": "navigation"
    }
  }, [_c('h3', {
    staticClass: "navSide103_heading"
  }, [_vm._v("Nav Title")]), _vm._v(" "), _c('ul', _vm._l((_vm.lastViewed), function(i) {
    return _c('li', [_vm._m(0, true), _vm._v(" "), _c('a', {
      attrs: {
        "href": "",
        "tabindex": "0",
        "aria-setsize": "3",
        "aria-posinset": "1"
      }
    }, [_vm._v("\r\n          " + _vm._s(i.name) + "\r\n        ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(i.breed))])])
  }))])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navSide103_img-holder"
  }, [_c('img', {
    attrs: {
      "src": "img.jpg",
      "alt": "img alt",
      "title": "img title"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2564fc10", esExports)
  }
}

/***/ })

});