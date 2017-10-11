webpackJsonp([12],{

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  lastViewed: [],
  favorites: [{
    'name': 'name1',
    'edit': false
  }, {
    'name': 'name2',
    'edit': false
  }]
};



/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Favorites_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_abeb0e84_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Favorites_vue__ = __webpack_require__(64);
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


/***/ }),

/***/ 63:
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
//
//
//
//
//


var vcFavoriteCount = function vcFavoriteCount() {
  return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 59));
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      favorites: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites
    };
  },

  watch: {
    // : function () {
    // }
  },
  components: {
    vcFavoriteCount: vcFavoriteCount
  },
  mounted: function mounted() {},
  methods: {
    edit: function edit(tempnote, index) {},
    update: function update(newNote, index) {
      // temp update only
      // todo: index changes when filtered, so use findIndex later
      __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].favorites[index].name = newNote;
    },
    cancel: function cancel() {}
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('vcFavoriteCount'), _vm._v(" "), _c('ul', _vm._l((_vm.favorites), function(i, index) {
    return _c('li', [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == false),
        expression: "i.edit == false"
      }]
    }, [_c('label', [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i.edit == false),
        expression: "i.edit == false"
      }],
      on: {
        "click": function($event) {
          i.edit = true;
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
        value: (i.name),
        expression: "i.name"
      }],
      domProps: {
        "value": (i.name)
      },
      on: {
        "blur": function($event) {
          i.edit = false
        },
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          i.edit = false;
          _vm.update(i.name, index)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          i.name = $event.target.value
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
          _vm.cancel(index)
        }
      }
    }, [_vm._v("cancel")])])
  }))], 1)
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

/***/ })

});