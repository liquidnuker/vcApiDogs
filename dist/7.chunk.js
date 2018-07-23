webpackJsonp([7,6],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  lastViewed: [
    // temp default for testing
    // {
    //   name: 'name1',
    //   imgSrc: '',
    //   breed: 'breed1'
    // },
    // {
    //   name: 'name2',
    //   imgSrc: '',
    //   breed: 'breed2'
    // },
    // {
    //   name: 'name3',
    //   imgSrc: '',
    //   breed: 'breed3'
    // }
  ],
  favorites: [
    // temp default for testing
    // {
    //   name: 'name1',
    //   imgSrc: 'imgsrc1.jpg',
    //   breed: 'african',
    //   notes: "note1",
    //   edit: false
    // },
    // {
    //   name: 'name2',
    //   imgSrc: 'imgsrc2.jpg',
    //   breed:'african',
    //   notes: "note2",
    //   edit: false
    // },
    // {
    //   name: 'name3',
    //   imgSrc: 'imgsrc3.jpg',
    //   breed: 'bulldog',
    //   notes: "note3",
    //   edit: false
    // },
    // {
    //   name: 'name4',
    //   imgSrc: 'imgsrc4.jpg',
    //   breed:'bulldog',
    //   notes: "note4",
    //   edit: false
    // },
  ]
};

exports.store = store;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = undefined;

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = {
  fetch: function fetch(key) {
    var data = JSON.parse(localStorage.getItem(key) || '[]');
    return data;
  },
  save: function save(key, data) {
    localStorage.setItem(key, (0, _stringify2.default)(data));
  }
};

exports.storage = storage;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(12)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2564fc10_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcLastViewed_vue__ = __webpack_require__(86);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcLastViewed_vue___default.a,
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(18);

var _localStorage = __webpack_require__(27);

var _router = __webpack_require__(1);

exports.default = {
  data: function data() {
    return {
      STORAGE_KEY: "vcApiDogs-lastViewed",
      lastViewed: _store.store.lastViewed,
      lastViewedStorage: ""
    };
  },

  watch: {
    lastViewed: function lastViewed() {
      this.fetchData();
    }
  },
  props: [
    // "prName1"
  ],
  components: {},
  mounted: function mounted() {
    this.fetchData();
  },
  updated: function updated() {},
  methods: {
    fetchData: function fetchData() {
      this.lastViewedStorage = _localStorage.storage.fetch(this.STORAGE_KEY);
    },
    jumpToGallery: function jumpToGallery(breedName) {
      _router.router.push({
        path: "/gallery/" + breedName
      });
    }
  }
}; //
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

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "navSide103",
    attrs: {
      "role": "navigation"
    }
  }, [_c('h2', {
    staticClass: "navSide103_heading font_heading1"
  }, [_vm._v("Recently Viewed")]), _vm._v(" "), _c('ul', _vm._l((_vm.lastViewedStorage), function(i) {
    return _c('li', [_c('div', {
      staticClass: "navSide103_img-holder"
    }, [_c('img', {
      attrs: {
        "src": i.imgSrc,
        "alt": i.breed + ' image',
        "title": i.breed + ' image'
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('a', {
      attrs: {
        "tabindex": "0",
        "aria-setsize": "3",
        "aria-posinset": "1"
      },
      on: {
        "click": function($event) {
          _vm.jumpToGallery(i.breed)
        }
      }
    }, [_vm._v(_vm._s(i.breed))])])
  }))])])
}
var staticRenderFns = []
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