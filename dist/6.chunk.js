webpackJsonp([6,5],{18:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={lastViewed:[],favorites:[]};t.store=n},26:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.storage=void 0;var n=a(27),i=function(e){return e&&e.__esModule?e:{default:e}}(n),s={fetch:function(e){return JSON.parse(localStorage.getItem(e)||"[]")},save:function(e,t){localStorage.setItem(e,(0,i.default)(t))}};t.storage=s},27:function(e,t,a){e.exports={default:a(28),__esModule:!0}},28:function(e,t,a){var n=a(12),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(85),i=a.n(n),s=a(86),r=a(0),o=r(i.a,s.a,null,null,null);t.default=o.exports},85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(18),i=a(26),s=a(1);t.default={data:function(){return{STORAGE_KEY:"vcApiDogs-lastViewed",lastViewed:n.store.lastViewed,lastViewedStorage:""}},watch:{lastViewed:function(){console.log("lastViewed watcher"),this.fetchData()}},props:[],components:{},mounted:function(){this.fetchData()},updated:function(){},methods:{fetchData:function(){this.lastViewedStorage=i.storage.fetch(this.STORAGE_KEY)},jumpToGallery:function(e){s.router.push({path:"/gallery/"+e})}}}},86:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navSide103",attrs:{role:"navigation"}},[a("h2",{staticClass:"navSide103_heading font_heading1"},[e._v("Recently Viewed")]),e._v(" "),a("ul",e._l(e.lastViewedStorage,function(t){return a("li",[a("div",{staticClass:"navSide103_img-holder"},[a("img",{attrs:{src:t.imgSrc,alt:t.breed+" image",title:t.breed+" image"}})]),e._v(" "),a("p",[e._v(e._s(t.name))]),e._v(" "),a("a",{attrs:{tabindex:"0","aria-setsize":"3","aria-posinset":"1"},on:{click:function(t){e.jumpToGallery(e.z)}}},[e._v(e._s(t.breed))])])}))])])},i=[],s={render:n,staticRenderFns:i};t.a=s}});