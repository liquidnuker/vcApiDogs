webpackJsonp([7,6],{18:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={lastViewed:[],favorites:[]};t.store=i},26:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.storage=void 0;var i=a(27),n=function(e){return e&&e.__esModule?e:{default:e}}(i),r={fetch:function(e){return JSON.parse(localStorage.getItem(e)||"[]")},save:function(e,t){localStorage.setItem(e,(0,n.default)(t))}};t.storage=r},27:function(e,t,a){e.exports={default:a(28),__esModule:!0}},28:function(e,t,a){var i=a(12),n=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(85),n=a.n(i),r=a(86),s=a(0),o=s(n.a,r.a,null,null,null);t.default=o.exports},85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(18),n=a(26),r=a(1);t.default={data:function(){return{STORAGE_KEY:"vcApiDogs-lastViewed",lastViewed:i.store.lastViewed,lastViewedStorage:""}},watch:{lastViewed:function(){this.fetchData()}},props:[],components:{},mounted:function(){this.fetchData()},updated:function(){},methods:{fetchData:function(){this.lastViewedStorage=n.storage.fetch(this.STORAGE_KEY)},jumpToGallery:function(e){r.router.push({path:"/gallery/"+e})}}}},86:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navSide103",attrs:{role:"navigation"}},[a("h2",{staticClass:"navSide103_heading font_heading1"},[e._v("Recently Viewed")]),e._v(" "),a("ul",e._l(e.lastViewedStorage,function(t){return a("li",[a("div",{staticClass:"navSide103_img-holder"},[a("a",{attrs:{href:t.imgSrc}},[a("img",{attrs:{src:t.imgSrc,alt:t.breed+" image",title:t.breed+" image"}})])]),e._v(" "),a("p",[e._v(e._s(t.name))]),e._v(" "),a("a",{attrs:{tabindex:"0","aria-setsize":"3","aria-posinset":"1"},on:{click:function(a){e.jumpToGallery(t.breed)}}},[e._v(e._s(t.breed))])])}))])])},n=[],r={render:i,staticRenderFns:n};t.a=r}});