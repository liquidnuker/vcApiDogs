webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcBreedDirectory_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcBreedDirectory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcBreedDirectory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bbc64af_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcBreedDirectory_vue__ = __webpack_require__(103);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcBreedDirectory_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bbc64af_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcBreedDirectory_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcBreedDirectory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcBreedDirectory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bbc64af", Component.options)
  } else {
    hotAPI.reload("data-v-3bbc64af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(81);

var _pager2 = _interopRequireDefault(_pager);

var _router = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  data: function data() {
    return {
      breedDirItems: "",
      breedDirChars: "",
      breedDirList: [],

      breedDogNames: [],

      // paginator
      pager: "",
      currentPage: "",
      pagerButtons: null,
      pagerBreedList: [],
      perPage: 8
    };
  },

  watch: {
    // : function () {
    // }
  },
  props: ["prBreedDirItems"],
  components: {},
  mounted: function mounted() {
    this.breedDirItems = this.prBreedDirItems;
    this.breedDirChars = this.createDirChars("a", "z");
    this.extractBreeds(this.breedDirChars, this.breedDirItems, this.breedDirList);
  },
  methods: {
    createDirChars: function createDirChars(charA, charZ) {
      var a = [];
      var i = charA.charCodeAt(0);
      var j = charZ.charCodeAt(0);
      for (; i <= j; i++) {
        a.push(String.fromCharCode(i));
      }
      return a;
    },
    extractChars: function extractChars(arr, char) {
      // returns array of items that starts with char
      var extracted = arr.filter(function (el) {
        return el[0].toLowerCase() === char;
      });
      return extracted;
    },
    extractBreeds: function extractBreeds(chars, items, dirList) {
      var _this = this;

      // extract breeds from dir chars
      chars.forEach(function (i) {
        var z = _this.extractChars(items, i);

        // don't push empty sets
        if (z.length > 0) {
          dirList.push({
            name: z,
            startsWith: i,
            length: z.length
          });
        }
      });
      this.breedDirList = dirList;
      this.paginateBreedList(this.breedDirList);
    },
    paginateBreedList: function paginateBreedList(data) {
      this.pager = null;

      this.pager = new _pager2.default({
        perPage: this.perPage,
        data: data
      });

      this.showPage(1);
      this.pagerButtons = true;

      this.setBreedNameButtons();
    },
    setBreedNameButtons: function setBreedNameButtons() {
      var _this2 = this;

      var temp2 = [];
      for (var i = 0, l = this.pager.getTotalPages() + 1; i < l; i++) {
        temp2.push(this.pager.page(i));
      }

      temp2.forEach(function (i, index) {
        var startName = i[0].name;
        var lastIndex = i.length - 1;
        var lastName = i[lastIndex].name;
        // console.log(startName[0].charAt(0) + " " + lastName[0].charAt(0));

        if (index > 0) {
          // to remove duplicate entries
          _this2.breedDogNames.push({
            start: startName[0].charAt(0).toUpperCase(),
            end: lastName[0].charAt(0).toUpperCase()
          });
        }
      });
      temp2 = null;
    },
    flip: function flip(direction) {
      if (direction === "next") {
        this.showPage(this.pager.next());
      } else {
        this.showPage(this.pager.prev());
      }
    },
    showPage: function showPage(num) {
      this.currentPage = num;
      this.pagerBreedList = this.pager.page(this.currentPage);
    },
    jumpToGallery: function jumpToGallery(breedName) {
      _router.router.push({
        path: "/gallery/" + breedName
      });
    }
  }
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    staticClass: "pg_holder"
  }, [_c('button', {
    staticClass: "btn btn1-01 btn_prev",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.flip()
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }
  })]), _vm._v("\r\n    Prev")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01 btn_prev",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.flip('next')
      }
    }
  }, [_vm._v("Next\r\n    "), _c('svg', {
    staticClass: "carousel1-04_chevron",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }
  })])])]), _vm._v(" "), _vm._l((_vm.breedDogNames), function(i, index) {
    return _c('span', {
      staticClass: "pg_holder"
    }, [_c('button', {
      staticClass: "btn btn1-01 btn_prev",
      on: {
        "click": function($event) {
          _vm.showPage(index + 1)
        }
      }
    }, [_vm._v("Dogs " + _vm._s(i.start) + " - " + _vm._s(i.end))])])
  }), _vm._v(" "), _c('p', {
    staticClass: "breed_dir_title font_heading1"
  }, [_vm._v("Breed directory")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.pagerBreedList), function(i) {
    return _c('div', {
      staticClass: "col-sm-3 bd_grid"
    }, [_c('div', {
      staticClass: "bd_grid_items lrbg2"
    }, [_vm._l((i.name), function(z, index) {
      return [(index === 0) ? _c('a', {
        staticClass: "font_heading1",
        on: {
          "click": function($event) {
            _vm.jumpToGallery(z)
          }
        }
      }, [_vm._v(_vm._s(z))]) : (index > 0 && index < i.name.length - 1) ? _c('a', {
        attrs: {
          "title": z
        },
        on: {
          "click": function($event) {
            _vm.jumpToGallery(z)
          }
        }
      }, [_vm._v("\r\n        " + _vm._s(z) + ",")]) : _c('a', {
        attrs: {
          "title": z
        },
        on: {
          "click": function($event) {
            _vm.jumpToGallery(z)
          }
        }
      }, [_vm._v(_vm._s(z))])]
    }), _vm._v(" "), _c('img', {
      staticClass: "dog_shadow",
      attrs: {
        "src": './src/img/ui/dogs/dirlist_' + i.startsWith + '.png'
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "dog_preview",
      attrs: {
        "src": './src/img/ui/dogs/dirlist_' + i.startsWith + '.png'
      }
    })], 2)])
  }))], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bbc64af", esExports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pager;
// pagination helper
// ======================================================/

function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function getTotalPages() {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function getCurrentOffset() {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function page(num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      var start = this.getCurrentOffset();
      // let end = start + this.perPage;
      var end = start + Number(this.perPage);

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function hasNext() {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function hasPrev() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function prev() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function next() {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function isValidPage(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};

/***/ })

});