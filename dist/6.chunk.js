webpackJsonp([6,5],{12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={lastViewed:[{name:"name1",imgSrc:"",breed:"breed1"},{name:"name2",imgSrc:"",breed:"breed2"},{name:"name3",imgSrc:"",breed:"breed3"}],favorites:[{name:"name1",imgSrc:"imgsrc1.jpg",breed:"african",notes:"note1",edit:!1},{name:"name2",imgSrc:"imgsrc2.jpg",breed:"african",notes:"note2",edit:!1},{name:"name3",imgSrc:"imgsrc3.jpg",breed:"bulldog",notes:"note3",edit:!1},{name:"name4",imgSrc:"imgsrc4.jpg",breed:"bulldog",notes:"note4",edit:!1}]};t.store=a},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(47),r=n(48),i=n(0),s=i(a.a,r.a,null,null,null);t.default=s.exports},47:function(e,t,n){"use strict";var a=n(12);n.n(a);t.a={data:function(){return{lastViewed:a.store.lastViewed}},watch:{},props:["prName1"],components:{},mounted:function(){},methods:{}}},48:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navSide103",attrs:{role:"navigation"}},[n("h2",{staticClass:"navSide103_heading"},[e._v("Recently Viewed")]),e._v(" "),n("ul",e._l(e.lastViewed,function(t){return n("li",[n("div",{staticClass:"navSide103_img-holder"},[n("img",{attrs:{src:t.imgSrc,alt:t.breed+" image",title:t.breed+" image"}})]),e._v(" "),n("a",{attrs:{href:"",tabindex:"0","aria-setsize":"3","aria-posinset":"1"}},[e._v("\r\n          "+e._s(t.name)+"\r\n        ")]),e._v(" "),n("p",[e._v(e._s(t.breed))])])}))])])},r=[],i={render:a,staticRenderFns:r};t.a=i}});