webpackJsonp([8],{41:function(t,e,r){"use strict";function s(t,e){if(!t)throw new Error("Required Argument Missing");if(!(t instanceof Array))throw new Error("Invalid Argument Type");this.data=t,this.perPage=e||8,this.currentPage=0,this.totalPages=Math.ceil(this.data.length/this.perPage)}s.prototype.offset=function(){return(this.currentPage-1)*this.perPage},s.prototype.page=function(t){t<1&&(t=1),t>this.totalPages&&(t=this.totalPages),this.currentPage=t;var e=this.offset(),r=e+this.perPage;return this.data.slice(e,r)},s.prototype.next=function(){return this.page(this.currentPage+1)},s.prototype.prev=function(){return this.page(this.currentPage-1)},s.prototype.hasNext=function(){return this.currentPage<this.totalPages},t.exports=s},53:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(54),a=r(55),i=r(0),n=i(s.a,a.a,null,null,null);e.default=n.exports},54:function(t,e,r){"use strict";var s=r(41),a=r.n(s);e.a={data:function(){return{breedDirItems:"",breedDirChars:"",breedDirList:[],pager:"",currentPage:"",totalPages:"",pagerButtons:null,pagerBreedList:""}},watch:{},props:["prBreedDirItems"],components:{},mounted:function(){this.breedDirItems=this.prBreedDirItems,this.breedDirChars=this.createDirChars("a","z"),this.extractBreeds(this.breedDirChars,this.breedDirItems,this.breedDirList)},methods:{createDirChars:function(t,e){for(var r=[],s=t.charCodeAt(0),a=e.charCodeAt(0);s<=a;s++)r.push(String.fromCharCode(s));return r},extractBreeds:function(t,e,r){var s=this;t.map(function(t){var a=s.extractChars(e,t);a.length>0&&r.push({name:a,startsWith:t,length:a.length})}),this.paginateBreedList(this.breedDirList)},paginateBreedList:function(t){this.pager=null,this.pager=new a.a(t),this.pagerBreedList=this.pager.page(0),this.currentPage=this.pager.currentPage,this.totalPages=this.pager.totalPages,this.pagerButtons=!0,console.log(this.pager.totalPages)},nextPage:function(){this.pager.hasNext()?this.pagerBreedList=this.pager.next():this.pagerBreedList=this.pager.page(0),this.currentPage=this.pager.currentPage},prevPage:function(){1===this.pager.currentPage?this.pagerBreedList=this.pager.page(this.pager.totalPages):this.pagerBreedList=this.pager.prev(),this.currentPage=this.pager.currentPage},extractChars:function(t,e){return t.filter(function(t){return t[0].toLowerCase()===e})}}}},55:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"pg_holder"},[r("button",{staticClass:"btn btn1-01 btn_prev",attrs:{tabindex:"0"},on:{click:function(e){t.prevPage()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v("\r\n    Prev")]),t._v(" "),r("button",{staticClass:"btn btn1-01 btn_prev",attrs:{tabindex:"0"},on:{click:function(e){t.nextPage()}}},[t._v("Next\r\n    "),r("svg",{staticClass:"carousel1-04_chevron",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])]),t._v(" "),r("div",{staticClass:"row"},[t._v("\r\n    breed directory"),r("br"),t._v(" "),t._l(t.pagerBreedList,function(e){return r("div",{staticClass:"col-sm-3 bd_grid"},[r("div",{staticClass:"bd_grid_items"},[t._l(e.name,function(s,a){return[0===a?r("p",[t._v(t._s(s))]):a>0&&a<e.name.length-1?r("p",[t._v("\r\n        "+t._s(s)+", ")]):r("p",[t._v(t._s(s))])]})],2)])})],2)])},a=[],i={render:s,staticRenderFns:a};e.a=i}});