!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,u){for(var i,a,c=0,s=[];c<t.length;c++)a=t[c],o[a]&&s.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(n&&n(t,r,u);s.length;)s.shift()()};var r={},o={11:0};t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(c);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var u=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=u;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+""+e+".chunk.js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,i.appendChild(a),u},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t.oe=function(e){throw console.error(e),e},t(t.s=2)}([function(e,t){e.exports=function(e,t,n,r,o){var u,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(u=e,i=e.default);var c="function"==typeof i?i.options:i;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r);var s;if(o?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=s):n&&(s=n),s){var f=c.functional,l=f?c.render:c.beforeCreate;f?c.render=function(e,t){return s.call(t),l(e,t)}:c.beforeCreate=l?[].concat(l,s):[s]}return{esModule:u,exports:i,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r);Vue.use(VueRouter);var u=function(){return n.e(2).then(n.bind(null,7))},i=function(){return n.e(0).then(n.bind(null,8))},a=function(){return n.e(1).then(n.bind(null,9))},c=[{path:"/",component:u},{path:"/gallery/:breedname",component:i},{path:"/favorites",component:a}],s=new VueRouter({routes:c});new Vue({el:"#app",router:s,render:function(e){return e(o.default)}}),t.router=s},function(e,t,n){"use strict";n(3),n(1)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(6),u=n(0),i=u(r.a,o.a,null,null,null);t.default=i.exports},function(e,t,n){"use strict";t.a={data:function(){return{}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view",{staticClass:"router-view"})],1)},o=[],u={render:r,staticRenderFns:o};t.a=u}]);