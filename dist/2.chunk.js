webpackJsonp([2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  lastViewed: [],
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
  }]
};



/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Creates a new `Paginate` form a givin `Array`,
 * optionally with a specific `Number` of items per page.
 *
 * @param {Array} data
 * @param {Number} [perPage=10]
 * @constructor
 * @api public
 */

function Paginate(data, perPage) {

  if (!data) throw new Error('Required Argument Missing');
  if (!(data instanceof Array)) throw new Error('Invalid Argument Type');

  this.data = data;
  this.perPage = perPage || 8;
  this.currentPage = 0;
  this.totalPages = Math.ceil(this.data.length / this.perPage);
}

/**
 * Calculates the offset.
 *
 * @return {Number}
 * @api private
 */

Paginate.prototype.offset = function () {

  return (this.currentPage - 1) * this.perPage;
};

/**
 * Returns the specified `page`.
 *
 * @param {Number} pageNum
 * @return {Array}
 * @api public
 */

Paginate.prototype.page = function (pageNum) {

  if (pageNum < 1) pageNum = 1;
  if (pageNum > this.totalPages) pageNum = this.totalPages;

  this.currentPage = pageNum;

  var start = this.offset(),
      end = start + this.perPage;

  return this.data.slice(start, end);
};

/**
 * Returns the next `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.next = function () {

  return this.page(this.currentPage + 1);
};

/**
 * Returns the previous `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.prev = function () {

  return this.page(this.currentPage - 1);
};

/**
 * Checks if there is a next `page`.
 *
 * @return {Boolean}
 * @api public
 */

Paginate.prototype.hasNext = function () {

  return this.currentPage < this.totalPages;
};

/**
 * Expose `Paginate`
 */

if (true) module.exports = Paginate;

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nameExists; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(11);


// ret index; else undefined
var nameExists = function nameExists(value, storeCategory) {
  for (var key = 0; key < storeCategory.length; key++) {
    if (storeCategory[key].name == value) {
      return key;
    }
  }
};



/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_nameexists_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_Paginate_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_vendor_Paginate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_vendor_Paginate_js__);
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





var vcFavoriteCount = function vcFavoriteCount() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 20));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentFavorites: "",

      // paginator 
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: false,

      editNoteCache: null
    };
  },

  watch: {
    // : function () {
    // }
  },
  components: {
    vcFavoriteCount: vcFavoriteCount
  },
  mounted: function mounted() {
    this.activatePager();
  },
  methods: {
    activatePager: function activatePager() {
      this.pager = null;
      this.pager = new __WEBPACK_IMPORTED_MODULE_2__js_vendor_Paginate_js___default.a(__WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites);
      this.currentFavorites = this.pager.page(0);
      this.currentPage = this.pager.currentPage;
      this.totalPages = this.pager.totalPages;
      this.pagerButtons = true;
    },
    showPage: function showPage(num) {
      this.currentImages = this.pager.page(num);
    },
    nextPage: function nextPage() {
      if (!this.pager.hasNext()) {
        this.currentImages = this.pager.page(0);
      } else {
        this.currentImages = this.pager.page(this.pager.currentPage + 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    prevPage: function prevPage() {
      if (this.pager.currentPage === 1) {
        this.currentImages = this.pager.page(this.pager.totalPages);
      } else {
        this.currentImages = this.pager.page(this.pager.currentPage - 1);
      }
      this.currentPage = this.pager.currentPage;
    },
    edit: function edit(tempnote) {
      // todo
    },
    update: function update(newNote, name) {
      var itemIndex = __WEBPACK_IMPORTED_MODULE_1__js_nameexists_js__["a" /* nameExists */](name, __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites);
      __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites[itemIndex].notes = newNote;
    },
    cancel: function cancel() {
      // todo
    },
    removeItem: function removeItem(name) {
      var itemIndex = __WEBPACK_IMPORTED_MODULE_1__js_nameexists_js__["a" /* nameExists */](name, __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites);
      __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites.splice(itemIndex, 1);
      this.activatePager();
    }
  }
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vcFavoriteCount'), _vm._v(" "), _c('ul', _vm._l((_vm.currentFavorites), function(i, index) {
    return _c('li', [_vm._v("\r\n      " + _vm._s(i.breed) + " " + _vm._s(i.name) + "\r\n      \r\n      "), _c('button', {
      on: {
        "click": function($event) {
          _vm.removeItem(i.name)
        }
      }
    }, [_vm._v("remove")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == false),
        expression: "i.edit == false"
      }]
    }, [_c('label', [_vm._v(_vm._s(i.notes))]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == false),
        expression: "i.edit == false"
      }],
      on: {
        "click": function($event) {
          i.edit = true;
          _vm.edit()
        }
      }
    }, [_vm._v("edit")])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == true),
        expression: "i.edit == true"
      }, {
        name: "model",
        rawName: "v-model",
        value: (i.notes),
        expression: "i.notes"
      }],
      domProps: {
        "value": (i.notes)
      },
      on: {
        "blur": function($event) {
          i.edit = false
        },
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          i.edit = false;
          _vm.update(i.notes, i.name)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.notes = $event.target.value
        }
      }
    }), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == true),
        expression: "i.edit == true"
      }],
      on: {
        "click": function($event) {
          i.edit = false;
          _vm.cancel()
        }
      }
    }, [_vm._v("cancel")])])
  })), _vm._v(" "), (_vm.pagerButtons) ? _c('span', [_c('button', {
    on: {
      "click": function($event) {
        _vm.prevPage()
      }
    }
  }, [_vm._v("<previous")]), _vm._v("\r\n    page\r\n    "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentPage),
      expression: "currentPage"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.currentPage = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.totalPages), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      },
      on: {
        "click": function($event) {
          _vm.showPage(i)
        }
      }
    }, [_vm._v(_vm._s(i))])
  })), _vm._v(" of " + _vm._s(_vm.totalPages) + "\r\n    "), _c('button', {
    on: {
      "click": function($event) {
        _vm.nextPage()
      }
    }
  }, [_vm._v("next>")])]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-abeb0e84", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Favorites_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abeb0e84_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Favorites_vue__ = __webpack_require__(65);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Favorites_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abeb0e84_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Favorites_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Favorites.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Favorites.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-abeb0e84", Component.options)
  } else {
    hotAPI.reload("data-v-abeb0e84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});