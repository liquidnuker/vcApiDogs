webpackJsonp([8],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.store = store;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameExists = undefined;

var _store = __webpack_require__(12);

// ret index; else undefined
var nameExists = function nameExists(value, storeCategory) {
  for (var key = 0; key < storeCategory.length; key++) {
    if (storeCategory[key].name == value) {
      return key;
    }
  }
};

exports.nameExists = nameExists;

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcGalleryDisplay_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee2dba34_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcGalleryDisplay_vue__ = __webpack_require__(64);
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_store_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_extractfilename_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_extractfilename_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_extractfilename_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_nameexists_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_nameexists_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_nameexists_js__);
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
    return {};
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prStatus", "prCurrentImages", "prCurrentBreed"],
  components: {},
  mounted: function mounted() {},
  methods: {
    insertLastViewed: function insertLastViewed(imgSrc, breed) {
      var name = Object(__WEBPACK_IMPORTED_MODULE_1__js_extractfilename_js__["extractFileName"])(imgSrc, false);

      // check before pushing
      if (Object(__WEBPACK_IMPORTED_MODULE_2__js_nameexists_js__["nameExists"])(name, __WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].lastViewed) !== undefined) {
        return;
      } else {
        // lastViewed limit
        if (__WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].lastViewed.length === 4) {
          __WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].lastViewed.pop();
        }
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].lastViewed.unshift({
          name: name,
          imgSrc: imgSrc,
          breed: breed
        });
      }
    },
    addToFavorites: function addToFavorites(imgSrc, breed) {
      var name = Object(__WEBPACK_IMPORTED_MODULE_1__js_extractfilename_js__["extractFileName"])(imgSrc, false);

      // check before pushing
      if (Object(__WEBPACK_IMPORTED_MODULE_2__js_nameexists_js__["nameExists"])(name, __WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].favorites) !== undefined) {
        console.log("already in favorites");
        return;
      } else {
        __WEBPACK_IMPORTED_MODULE_0__js_store_js__["store"].favorites.push({
          name: name,
          imgSrc: imgSrc,
          breed: breed,
          notes: "",
          edit: false
        });
      }
    }
  }
});

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var extractFileName = function extractFileName(url, ext) {
  var index = url.lastIndexOf("/") + 1;

  var filenameWithExtension = url.substr(index);
  var filename = filenameWithExtension.split(".")[0];
  filename = filename.replace(/(#|\?).*?$/, "");

  if (ext) {
    return filenameWithExtension;
  }
  return filename;
};

exports.extractFileName = extractFileName;

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\r\n\r\n\r\n  " + _vm._s(_vm.prStatus) + "\r\n  "), _vm._l((_vm.prCurrentImages), function(i) {
    return _c('ul', [_c('li', [_c('p', {
      on: {
        "click": function($event) {
          _vm.insertLastViewed(i, _vm.prCurrentBreed);
          _vm.addToFavorites(i, _vm.prCurrentBreed)
        }
      }
    }, [_vm._v(_vm._s(i) + "\r\n      ")]), _vm._v(" "), _c('br')])])
  })], 2)
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