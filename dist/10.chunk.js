webpackJsonp([10],{110:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(111),o=r.n(n),l=r(112),a=r(0),u=a(o.a,l.a,null,null,null);t.default=u.exports},111:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(29),o=r(1);t.default={data:function(){return{options:n.allbreeds.sort()}},props:["prSelected"],mounted:function(){},methods:{switchBreed:function(e){o.router.push({path:"/gallery/"+e})}}}},112:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",[e._m(0),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.prSelected,expression:"prSelected"}],staticClass:"breed-selector",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.prSelected=t.target.multiple?r:r[0]},function(t){e.switchBreed(t.target.value)}]}},e._l(e.options,function(t){return r("option",{domProps:{value:t}},[e._v(e._s(t))])}))])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("p",[e._v("Choose Breeds:")])])}],l={render:n,staticRenderFns:o};t.a=l}});