webpackJsonp([1],[,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(56),o=r(69),a=r(0),i=a(n.a,o.a,null,null,null);t.default=i.exports},,function(e,t,r){"use strict";function n(e){return"[object Array]"===_.call(e)}function o(e){return"[object ArrayBuffer]"===_.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===_.call(e)}function p(e){return"[object File]"===_.call(e)}function d(e){return"[object Blob]"===_.call(e)}function h(e){return"[object Function]"===_.call(e)}function g(e){return f(e)&&h(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function b(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=b(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function x(e,t,r){return w(t,function(t,n){e[n]=r&&"function"==typeof t?P(t,r):t}),e}var P=r(13),C=r(22),_=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:C,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:g,isURLSearchParams:m,isStandardBrowserEnv:y,forEach:w,merge:b,extend:x,trim:v}},function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(10),a=r(25),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(14):void 0!==t&&(e=r(14)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,r(24))},,function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(10),o=r(26),a=r(28),i=r(29),s=r(30),u=r(15),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(31);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",g=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+c(m+":"+v)}if(d.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||g)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,a),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=r(32),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,r){"use strict";var n=r(27);e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","chihuahua","chow","clumber","collie","coonhound","corgi","dachshund","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","weimaraner","whippet","wolfhound"];t.allbreeds=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.axios_get=void 0;var n=r(20),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){return(0,o.default)({method:"get",url:e}).catch(function(e){e.response?console.log(e.response.status):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})};t.axios_get=a},function(e,t,r){e.exports=r(21)},function(e,t,r){"use strict";function n(e){var t=new i(e),r=a(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(10),a=r(13),i=r(23),s=r(11),u=n(s);u.Axios=i,u.create=function(e){return n(o.merge(s,e))},u.Cancel=r(17),u.CancelToken=r(38),u.isCancel=r(16),u.all=function(e){return Promise.all(e)},u.spread=r(39),e.exports=u,e.exports.default=u},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(11),a=r(10),i=r(33),s=r(34),u=r(36),c=r(37);n.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},a.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(a.merge(r||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(a.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function i(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&s())}function s(){if(!g){var e=o(i);g=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,g=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new u(e,t)),1!==h.length||g||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(15);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(10);e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e){var t,r,o,a={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+r:r)}),a):a}},function(e,t,r){"use strict";var n=r(10);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&t>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,r){"use strict";var n=r(10);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(10);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(10),a=r(35),i=r(16),s=r(11);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(10);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(17);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=e.length,r=void 0,n=void 0;0!==t;)n=Math.floor(Math.random()*t),t-=1,r=e[t],e[t]=e[n],e[n]=r;return e};t.shuffle=n},,,,,,,,function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error("Required Argument Missing");if(!(e instanceof Array))throw new Error("Invalid Argument Type");this.data=e,this.perPage=t||8,this.currentPage=0,this.totalPages=Math.ceil(this.data.length/this.perPage)}n.prototype.offset=function(){return(this.currentPage-1)*this.perPage},n.prototype.page=function(e){e<1&&(e=1),e>this.totalPages&&(e=this.totalPages),this.currentPage=e;var t=this.offset(),r=t+this.perPage;return this.data.slice(t,r)},n.prototype.next=function(){return this.page(this.currentPage+1)},n.prototype.prev=function(){return this.page(this.currentPage-1)},n.prototype.hasNext=function(){return this.currentPage<this.totalPages},e.exports=n},,,,,,,,function(e,t,r){"use strict";var n=r(19),o=(r.n(n),r(18)),a=(r.n(o),r(57)),i=(r.n(a),r(40)),s=(r.n(i),r(1)),u=(r.n(s),r(48)),c=r.n(u),f=function(){return r.e(11).then(r.bind(null,58))},l=function(){return r.e(8).then(r.bind(null,61))},p=function(){return r.e(3).then(r.bind(null,43))},d=function(){return r.e(4).then(r.bind(null,41))},h=function(){return r.e(5).then(r.bind(null,42))},g=function(){return r.e(6).then(r.bind(null,50))},m=function(){return r.e(7).then(r.bind(null,51))};t.a={data:function(){return{currentBreed:"",cachedImages:"",currentImages:"",randomDogBreed:"",randomDogImage:"",pager:"",currentPage:"",totalPages:"",pagerButtons:!0,status:{galleryDisplay:"",randomDog:""}}},components:{vcBreedSelector:f,vcGalleryDisplay:l,vcRandomDog:p,vcFavoriteCount:h,vcLastViewed:d,vcBtnPagePrev:g,vcBtnPageNext:m},watch:{$route:function(){this.checkCategory()}},mounted:function(){this.checkCategory()},methods:{checkCategory:function(){var e=this.$route.params.breedname.toLowerCase();Object(a.itemExists)(e,o.allbreeds)?(this.currentBreed=e,this.displayBreedImages(this.currentBreed)):s.router.push({path:"/gallery/bulldog"})},displayBreedImages:function(e){this.status.galleryDisplay="fetching "+this.currentBreed+" data";var t="https://dog.ceo/api/breed/"+e+"/images",r=this;Object(n.axios_get)(t).then(function(e){var t=Object.values(e);r.cachedImages=t[0].message,r.status.galleryDisplay="fetching images...",r.activatePager()}).then(function(){r.status.galleryDisplay="",r.showRandomDogImage(),r.status.randomDog="loading random dog..."})},activatePager:function(){this.pager=null,this.pager=new c.a(this.cachedImages),this.currentImages=this.pager.page(0),this.currentPage=this.pager.currentPage,this.totalPages=this.pager.totalPages,this.pagerButtons=!0},showPage:function(e){this.currentImages=this.pager.page(e)},nextPage:function(){this.pager.hasNext()?this.currentImages=this.pager.page(this.pager.currentPage+1):this.currentImages=this.pager.page(0),this.currentPage=this.pager.currentPage},prevPage:function(){1===this.pager.currentPage?this.currentImages=this.pager.page(this.pager.totalPages):this.currentImages=this.pager.page(this.pager.currentPage-1),this.currentPage=this.pager.currentPage},showRandomDogImage:function(){this.randomDogBreed=Object(i.shuffle)(o.allbreeds);var e="https://dog.ceo/api/breed/"+this.randomDogBreed[0]+"/images",t=this;Object(n.axios_get)(e).then(function(e){var r=Object.values(e);t.status.randomDog="",t.randomDogImage=Object(i.shuffle)(r[0].message)}).then(function(){})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return t.indexOf(e)>-1};t.itemExists=n},,,,,,,,,,,,function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",{staticClass:"row container-fluid--h"},[r("div",{staticClass:"row container main-header"},[r("div",{staticClass:"col-sm-4"},[e._v("logo")]),e._v(" "),r("div",{staticClass:"col-sm-8"},[r("vcFavoriteCount")],1)])]),e._v(" "),r("main",{staticClass:"row container-fluid--m"},[r("div",{staticClass:"row container main-items"},[r("div",{staticClass:"col-sm-12"},[e._v("\r\n      breadcrumb\r\n    ")]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",[r("vcBreedSelector",{attrs:{"pr-selected":e.currentBreed}})],1),e._v(" "),r("div",[r("vcRandomDog",{attrs:{"pr-status":e.status.randomDog,"pr-random-breed":e.randomDogBreed,"pr-random-image":e.randomDogImage}})],1),e._v(" "),r("div",[r("vcLastViewed")],1)]),e._v(" "),r("div",{staticClass:"col-sm-8"},[r("div",[e._v("\r\n        stage\r\n      ")]),e._v(" "),r("div",[e.pagerButtons?r("span",[r("vcBtnPagePrev",{on:{prevPage:function(t){e.prevPage()}}}),e._v("\r\n          page\r\n          "),r("div",{staticClass:"custom-select pg_totalpages"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPage,expression:"currentPage"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentPage=t.target.multiple?r:r[0]},function(t){e.showPage(t.target.value)}]}},e._l(e.totalPages,function(t){return r("option",{domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" of "+e._s(e.totalPages)+"\r\n          "),r("vcBtnPageNext",{on:{nextPage:function(t){e.nextPage()}}})],1):e._e()]),e._v(" "),r("div",[r("vcGalleryDisplay",{attrs:{"pr-status":e.status.galleryDisplay,"pr-current-breed":e.currentBreed,"pr-current-images":e.currentImages}})],1)])])]),e._v(" "),e._m(0)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"row container-fluid--f"},[r("div",{staticClass:"row container main-footer"},[r("div",{staticClass:"col-sm-12"},[e._v("\r\n        footer\r\n      ")])])])}],a={render:n,staticRenderFns:o};t.a=a}]);