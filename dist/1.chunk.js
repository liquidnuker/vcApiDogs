webpackJsonp([1],[,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67),o=r(70),i=r(0),s=i(n.a,o.a,null,null,null);t.default=s.exports},function(e,t,r){"use strict";function n(e){return"[object Array]"===P.call(e)}function o(e){return"[object ArrayBuffer]"===P.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===P.call(e)}function d(e){return"[object File]"===P.call(e)}function p(e){return"[object Blob]"===P.call(e)}function h(e){return"[object Function]"===P.call(e)}function v(e){return f(e)&&h(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function y(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=y(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)b(arguments[r],e);return t}function _(e,t,r){return b(t,function(t,n){e[n]=r&&"function"==typeof t?x(t,r):t}),e}var x=r(13),C=r(22),P=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:d,isBlob:p,isFunction:h,isStream:v,isURLSearchParams:m,isStandardBrowserEnv:w,forEach:b,merge:y,extend:_,trim:g}},function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(10),i=r(25),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(14):void 0!==t&&(e=r(14)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,r(24))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={lastViewed:[{name:"name1",imgSrc:"",breed:"breed1"},{name:"name2",imgSrc:"",breed:"breed2"},{name:"name3",imgSrc:"",breed:"breed3"}],favorites:[{name:"name1",imgSrc:"imgsrc1.jpg",breed:"african",notes:"note1",edit:!1},{name:"name2",imgSrc:"imgsrc2.jpg",breed:"african",notes:"note2",edit:!1},{name:"name3",imgSrc:"imgsrc3.jpg",breed:"bulldog",notes:"note3",edit:!1},{name:"name4",imgSrc:"imgsrc4.jpg",breed:"bulldog",notes:"note4",edit:!1}]};t.store=n},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(10),o=r(26),i=r(28),s=r(29),a=r(30),u=r(15),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(31);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",v=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var m=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+c(m+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||v)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:n,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:r,config:e,request:p};o(t,f,i),p=null}},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var w=r(32),b=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&n.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(e,t,r){"use strict";var n=r(27);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","chihuahua","chow","clumber","collie","coonhound","corgi","dachshund","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","weimaraner","whippet","wolfhound"];t.allbreeds=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.axios_get=void 0;var n=r(20),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e){return(0,o.default)({method:"get",url:e}).catch(function(e){e.response?console.log(e.response.status):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})};t.axios_get=i},function(e,t,r){e.exports=r(21)},function(e,t,r){"use strict";function n(e){var t=new s(e),r=i(s.prototype.request,t);return o.extend(r,s.prototype,t),o.extend(r,t),r}var o=r(10),i=r(13),s=r(23),a=r(11),u=n(a);u.Axios=s,u.create=function(e){return n(o.merge(a,e))},u.Cancel=r(17),u.CancelToken=r(38),u.isCancel=r(16),u.all=function(e){return Promise.all(e)},u.spread=r(39),e.exports=u,e.exports.default=u},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=r(11),i=r(10),s=r(33),a=r(34),u=r(36),c=r(37);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function s(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&a())}function a(){if(!v){var e=o(s);v=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,v=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var p,h=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new u(e,t)),1!==h.length||v||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(15);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(10);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+r:r)}),i):i}},function(e,t,r){"use strict";var n=r(10);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,r){"use strict";var n=r(10);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(10);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(10),i=r(35),s=r(16),a=r(11);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(17);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=e.length,r=void 0,n=void 0;0!==t;)n=Math.floor(Math.random()*t),t-=1,r=e[t],e[t]=e[n],e[n]=r;return e};t.shuffle=n},function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error("Required Argument Missing");if(!(e instanceof Array))throw new Error("Invalid Argument Type");this.data=e,this.perPage=t||8,this.currentPage=0,this.totalPages=Math.ceil(this.data.length/this.perPage)}n.prototype.offset=function(){return(this.currentPage-1)*this.perPage},n.prototype.page=function(e){e<1&&(e=1),e>this.totalPages&&(e=this.totalPages),this.currentPage=e;var t=this.offset(),r=t+this.perPage;return this.data.slice(t,r)},n.prototype.next=function(){return this.page(this.currentPage+1)},n.prototype.prev=function(){return this.page(this.currentPage-1)},n.prototype.hasNext=function(){return this.currentPage<this.totalPages},e.exports=n},,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nameExists=void 0;var n=(r(12),function(e,t){for(var r=0;r<t.length;r++)if(t[r].name==e)return r});t.nameExists=n},,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var n=r(19),o=(r.n(n),r(18)),i=(r.n(o),r(40)),s=(r.n(i),r(12)),a=(r.n(s),r(47)),u=(r.n(a),r(68)),c=(r.n(u),r(69)),f=(r.n(c),r(41)),l=r.n(f),d=r(1),p=(r.n(d),function(){return r.e(4).then(r.bind(null,46))}),h=function(){return r.e(3).then(r.bind(null,43))},v=function(){return r.e(5).then(r.bind(null,42))};t.a={data:function(){return{filteredFavorites:"",currentFavorites:"",options:o.allbreeds.sort(),favoriteCategories:"",pager:null,currentPage:"",totalPages:"",pagerButtons:!0,filterItem:null,randomDogBreed:"",randomDogImage:"",status:{randomDog:""},previousEditIndex:0,editNoteCache:null}},watch:{},components:{vcHeader:p,vcRandomDog:h,vcLastViewed:v},mounted:function(){this.filteredFavorites=s.store.favorites,this.activatePager(),this.setFavoriteCategories(s.store.favorites),this.showRandomDogImage(),this.status.randomDog="loading random dog..."},methods:{activatePager:function(){this.pager=null,this.pager=new l.a(this.filteredFavorites),this.currentFavorites=this.pager.page(0),this.currentPage=this.pager.currentPage,this.totalPages=this.pager.totalPages,this.pagerButtons=!0},setFavoriteCategories:function(e){this.favoriteCategories=[];var t=Object(u.arr_extractUnique)(e,"breed");for(var r in t)this.favoriteCategories.push(t[r]);t=null},showPage:function(e){this.currentFavorites=this.pager.page(e)},nextPage:function(){this.pager.hasNext()?this.currentFavorites=this.pager.next():this.currentFavorites=this.pager.page(0),this.currentPage=this.pager.currentPage},prevPage:function(){1===this.pager.currentPage?this.currentFavorites=this.pager.page(this.pager.totalPages):this.currentFavorites=this.pager.prev(),this.currentPage=this.pager.currentPage},edit:function(e){var t=Object(a.nameExists)(e,s.store.favorites);void 0!==s.store.favorites[this.previousEditIndex]&&(s.store.favorites[this.previousEditIndex].edit=!1),this.previousEditIndex=t,s.store.favorites[t].edit=!0,this.editNoteCache=s.store.favorites[t].notes},cancelEdit:function(e){var t=Object(a.nameExists)(e,s.store.favorites);s.store.favorites[t].edit=!1,s.store.favorites[t].notes=this.editNoteCache},update:function(e,t){var r=Object(a.nameExists)(t,s.store.favorites);s.store.favorites[r].notes=e,s.store.favorites[r].edit=!1},removeItem:function(e){for(var t=Object(a.nameExists)(e,s.store.favorites),r=0,n=s.store.favorites.length;r<n;r++)s.store.favorites[r].edit=!1;s.store.favorites.splice(t,1),this.filteredFavorites=s.store.favorites,this.filterItem?this.filter(this.filterItem):this.showAll(),this.setFavoriteCategories(s.store.favorites)},filter:function(e){this.filterItem=e;var t=Object(c.arr_filter)(s.store.favorites,"breed",e);this.filteredFavorites=t,this.activatePager()},showAll:function(){this.filterItem=null,this.filteredFavorites=s.store.favorites,this.activatePager()},showRandomDogImage:function(){this.randomDogBreed=Object(i.shuffle)(o.allbreeds);var e="https://dog.ceo/api/breed/"+this.randomDogBreed[0]+"/images",t=this;Object(n.axios_get)(e).then(function(e){var r=Object.values(e);t.status.randomDog="",t.randomDogImage=Object(i.shuffle)(r[0].message)}).then(function(){})},switchBreed:function(e){d.router.push({path:"/gallery/"+e})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var r={},n=[],o=0,i=e.length;o<i;o++)r[e[o][t]]||(r[e[o][t]]=!0,n.push(e[o][t]));return n};t.arr_extractUnique=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r){return e.filter(function(e){return e[t]===r})};t.arr_filter=n},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vcHeader"),e._v(" "),r("main",{staticClass:"row container-fluid--m"},[r("div",{staticClass:"row container main-items"},[r("div",{staticClass:"col-sm-12"},[e._v("\r\n      breadcrumb\r\n    ")]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",[r("select",{staticClass:"breed-selector"},[r("option",{attrs:{value:""}},[e._v("Choose Breed...")]),e._v(" "),e._l(e.options,function(t){return r("option",{domProps:{value:t},on:{click:function(r){e.switchBreed(t)}}},[e._v(e._s(t))])})],2)]),e._v(" "),r("div",[r("vcRandomDog",{attrs:{"pr-status":e.status.randomDog,"pr-random-breed":e.randomDogBreed,"pr-random-image":e.randomDogImage}})],1),e._v(" "),r("div",[r("vcLastViewed")],1)]),e._v(" "),r("div",{staticClass:"col-sm-8 rightside"},[r("div",{staticClass:"row col-sm-12 rightside_contents"},[r("div",[e._v("\r\n          stage\r\n        ")]),e._v(" "),r("div",[e.pagerButtons?r("span",{staticClass:"pg_holder"},[r("button",{staticClass:"btn btn1-01 btn_prev",attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})]),e._v("\r\n            Prev")]),e._v("\r\n            page\r\n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPage,expression:"currentPage"}],staticClass:"pg_totalpages",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentPage=t.target.multiple?r:r[0]},function(t){e.showPage(t.target.value)}]}},e._l(e.totalPages,function(t){return r("option",{domProps:{value:t},on:{click:function(r){e.showPage(t)}}},[e._v(e._s(t))])})),e._v("\r\n            of "+e._s(e.totalPages)+"\r\n            "),r("button",{staticClass:"btn btn1-01 btn_next",attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()}}},[e._v("Next\r\n            "),r("svg",{staticClass:"carousel1-04_chevron",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])]):e._e(),e._v(" "),r("span",{staticClass:"favorites_filter"},[r("button",{staticClass:"btn btn1-01",on:{click:function(t){e.showAll()}}},[e._v("Show all breeds")]),e._v(" "),r("select",{staticClass:"breed-selector"},[r("option",{attrs:{value:""}},[e._v("Filter Breed...")]),e._v(" "),e._l(e.favoriteCategories,function(t){return r("option",{domProps:{value:t},on:{click:function(r){e.filter(t)}}},[e._v(e._s(t))])})],2)]),e._v(" "),r("hr")]),e._v(" "),r("div",{staticClass:"favorites_list"},[r("ul",e._l(e.currentFavorites,function(t,n){return r("li",[r("div",{staticClass:"favorites_list_info"},[r("p",[e._v(e._s(t.name))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("Breed: "+e._s(t.breed))]),e._v(" "),r("button",{staticClass:"btn btn1-01 btn_remove",on:{click:function(r){e.removeItem(t.name)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!i.edit"}],staticClass:"favorites_notes"},[r("label",[e._v(e._s(t.notes))]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!i.edit"}],staticClass:"btn btn1-01 btn_edit",on:{click:function(r){e.edit(t.name)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}})])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"i.edit"}],staticClass:"favorites_edit"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"i.notes"},{name:"show",rawName:"v-show",value:t.edit,expression:"i.edit"}],staticClass:"col-sm-12",domProps:{value:t.notes},on:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key))return null;e.update(t.notes,t.name)},input:function(r){r.target.composing||e.$set(t,"notes",r.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"i.edit"}],staticClass:"btn btn1-01",on:{click:function(r){e.update(t.notes,t.name)}}},[e._v("\r\n                save\r\n                ")]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"i.edit"}],staticClass:"btn btn1-01",on:{click:function(r){e.cancelEdit(t.name)}}},[e._v("\r\n                cancel\r\n                ")])])])}))])])])])]),e._v(" "),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"row container-fluid--f"},[r("div",{staticClass:"row container main-footer"},[r("div",{staticClass:"col-sm-12"},[e._v("\r\n        footer\r\n      ")])])])}],i={render:n,staticRenderFns:o};t.a=i}]);