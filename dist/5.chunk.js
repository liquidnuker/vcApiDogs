webpackJsonp([5],{45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(47),n=a(48),s=a(0),r=s(i.a,n.a,null,null,null);t.default=r.exports},47:function(e,t,a){"use strict";var i=a(13),n=(a.n(i),a(19)),s=(a.n(n),a(1));a.n(s);t.a={data:function(){return{STORAGE_KEY:"vcApiDogs-lastViewed",lastViewed:i.store.lastViewed,lastViewedStorage:""}},watch:{lastViewed:function(){console.log("lastViewed watcher"),this.fetchData()}},props:[],components:{},mounted:function(){this.fetchData()},updated:function(){},methods:{fetchData:function(){this.lastViewedStorage=n.storage.fetch(this.STORAGE_KEY)},jumpToGallery:function(e){s.router.push({path:"/gallery/"+e})}}}},48:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navSide103",attrs:{role:"navigation"}},[a("h2",{staticClass:"navSide103_heading font_heading1"},[e._v("Recently Viewed")]),e._v(" "),a("ul",e._l(e.lastViewedStorage,function(t){return a("li",[a("div",{staticClass:"navSide103_img-holder"},[a("img",{attrs:{src:t.imgSrc,alt:t.breed+" image",title:t.breed+" image"}})]),e._v(" "),a("p",[e._v(e._s(t.name))]),e._v(" "),a("a",{attrs:{tabindex:"0","aria-setsize":"3","aria-posinset":"1"},on:{click:function(t){e.jumpToGallery(e.z)}}},[e._v(e._s(t.breed))])])}))])])},n=[],s={render:i,staticRenderFns:n};t.a=s}});