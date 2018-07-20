webpackJsonp([9],{101:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(102),a=r.n(s),i=r(104),n=r(0),o=n(a.a,i.a,null,null,null);e.default=o.exports},102:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(103),a=function(t){return t&&t.__esModule?t:{default:t}}(s),i=r(1);e.default={data:function(){return{breedDirItems:"",breedDirChars:"",breedDirList:[],breedDogNames:[],pager:"",currentPage:"",pagerButtons:null,pagerBreedList:[]}},watch:{},props:["prBreedDirItems"],components:{},mounted:function(){this.breedDirItems=this.prBreedDirItems,this.breedDirChars=this.createDirChars("a","z"),this.extractBreeds(this.breedDirChars,this.breedDirItems,this.breedDirList)},methods:{createDirChars:function(t,e){for(var r=[],s=t.charCodeAt(0),a=e.charCodeAt(0);s<=a;s++)r.push(String.fromCharCode(s));return r},extractChars:function(t,e){return t.filter(function(t){return t[0].toLowerCase()===e})},extractBreeds:function(t,e,r){var s=this;t.forEach(function(t){var a=s.extractChars(e,t);a.length>0&&r.push({name:a,startsWith:t,length:a.length})}),this.breedDirList=r,this.paginateBreedList(this.breedDirList)},paginateBreedList:function(t){this.pager=null,this.pager=new a.default(t),this.pagerBreedList=this.pager.page(1),this.currentPage=1,this.pagerButtons=!0,this.setBreedNameButtons()},setBreedNameButtons:function(){for(var t=this,e=[],r=0,s=this.pager.totalPages+1;r<s;r++)e.push(this.pager.page(r));e.forEach(function(e,r){var s=e[0].name,a=e.length-1,i=e[a].name;r>0&&t.breedDogNames.push({start:s[0].charAt(0).toUpperCase(),end:i[0].charAt(0).toUpperCase()})}),e=null},nextPage:function(){this.currentPage!==this.pager.totalPages?this.currentPage=this.currentPage+1:this.currentPage=1,this.showPage(this.currentPage)},prevPage:function(){1===this.currentPage?this.currentPage=this.pager.totalPages:this.currentPage=this.currentPage-1,this.showPage(this.currentPage)},showPage:function(t){this.currentPage=t,this.pagerBreedList=this.pager.page(this.currentPage)},jumpToGallery:function(t){i.router.push({path:"/gallery/"+t})}}}},103:function(t,e,r){"use strict";function s(t,e){if(!t)throw new Error("Required Argument Missing");if(!(t instanceof Array))throw new Error("Invalid Argument Type");this.data=t,this.perPage=e||8,this.currentPage=0,this.totalPages=Math.ceil(this.data.length/this.perPage)}s.prototype.offset=function(){return(this.currentPage-1)*this.perPage},s.prototype.page=function(t){t<1&&(t=1),t>this.totalPages&&(t=this.totalPages),this.currentPage=t;var e=this.offset(),r=e+this.perPage;return this.data.slice(e,r)},s.prototype.next=function(){return this.page(this.currentPage+1)},s.prototype.prev=function(){return this.page(this.currentPage-1)},s.prototype.hasNext=function(){return this.currentPage<this.totalPages},t.exports=s},104:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"pg_holder"},[r("button",{staticClass:"btn btn1-01 btn_prev",attrs:{tabindex:"0"},on:{click:function(e){t.prevPage()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),t._v("\r\n    Prev")]),t._v(" "),r("button",{staticClass:"btn btn1-01 btn_prev",attrs:{tabindex:"0"},on:{click:function(e){t.nextPage()}}},[t._v("Next\r\n    "),r("svg",{staticClass:"carousel1-04_chevron",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])]),t._v(" "),t._l(t.breedDogNames,function(e,s){return r("span",{staticClass:"pg_holder"},[r("button",{staticClass:"btn btn1-01 btn_prev",on:{click:function(e){t.showPage(s+1)}}},[t._v("Dogs "+t._s(e.start)+" - "+t._s(e.end))])])}),t._v(" "),r("p",{staticClass:"breed_dir_title font_heading1"},[t._v("Breed directory")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.pagerBreedList,function(e){return r("div",{staticClass:"col-sm-3 bd_grid"},[r("div",{staticClass:"bd_grid_items lrbg2"},[t._l(e.name,function(s,a){return[0===a?r("a",{staticClass:"font_heading1",on:{click:function(e){t.jumpToGallery(s)}}},[t._v(t._s(s))]):a>0&&a<e.name.length-1?r("a",{attrs:{title:s},on:{click:function(e){t.jumpToGallery(s)}}},[t._v("\r\n        "+t._s(s)+",")]):r("a",{attrs:{title:s},on:{click:function(e){t.jumpToGallery(s)}}},[t._v(t._s(s))])]}),t._v(" "),r("img",{staticClass:"dog_shadow",attrs:{src:"./src/img/ui/dogs/dirlist_"+e.startsWith+".png"}}),t._v(" "),r("img",{staticClass:"dog_preview",attrs:{src:"./src/img/ui/dogs/dirlist_"+e.startsWith+".png"}})],2)])}))],2)},a=[],i={render:s,staticRenderFns:a};e.a=i}});