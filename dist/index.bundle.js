!function(t){function e(e){for(var o,i,r=e[0],s=e[1],a=0,u=[];a<r.length;a++)i=r[a],n[i]&&u.push(n[i][0]),n[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(c&&c(e);u.length;)u.shift()()}var o={},n={5:0};function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,i){o=n[t]=[e,i]});e.push(o[2]=r);var s,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+t+"."+{0:"df749578c9ae3bae0485",1:"43da5b0cd9ae17d9815f",2:"12f64394bdcf7e4f296b",3:"768c3b0fa026f6bf9ffe",4:"5a9143ce299487bbf5ca",6:"76c6fdbc70c6ab4567ab",7:"33f810694b9826e2344a",8:"0400c8bf6d915cd31abc",9:"35e0e3be00eae28b6de9",10:"c634f3babf87b72606d9",11:"144e278870d14d154698",12:"53a183ae40eeb4350bf2",13:"6a526bc40171efda10b9"}[t]+".js"}(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,o[1](s)}n[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,a.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="dist/",i.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var c=s;i(i.s=5)}([function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=i.a},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,o){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view",{staticClass:"router-view"})],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},function(t,e,o){"use strict";function n(t,e,o,n,i,r,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}o.d(e,"a",function(){return n})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var n=r(o(8)),i=r(o(9));function r(t){return t&&t.__esModule?t:{default:t}}Vue.use(i.default,{color:"#bffaf3",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1}),Vue.use(VueRouter);var s=new VueRouter({routes:[{path:"/",component:function(){return Promise.all([o.e(2),o.e(6)]).then(o.bind(null,10))}},{path:"/gallery/:breedname",component:function(){return Promise.all([o.e(2),o.e(7)]).then(o.bind(null,11))}},{path:"/favorites",component:function(){return Promise.all([o.e(2),o.e(13),o.e(8)]).then(o.bind(null,12))}}]});new Vue({el:"#app",router:s,render:function(t){return t(n.default)}}),e.router=s},function(t,e,o){"use strict";o(6),o(4)},function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var n=o(2),i=o(0);for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);var s=o(3),a=Object(s.a)(i.default,n.a,n.b,!1,null,null,null);e.default=a.exports},function(t,e,o){!function(){"use strict";!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),o=" .__cov-progress { position: fixed; opacity: 1; z-index: 999999; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o)),t.appendChild(e)}}();var e="undefined"!=typeof window,o={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"__cov-progress",style:t.style})},staticRenderFns:[],name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function(){var t=this.progress.options.location,e={"background-color":this.progress.options.canSuccess?this.progress.options.color:this.progress.options.failedColor,opacity:this.progress.options.show?1:0};return"top"==t||"bottom"==t?("top"===t?e.top="0px":e.bottom="0px",this.progress.options.inverse?e.right="0px":e.left="0px",e.width=this.progress.percent+"%",e.height=this.progress.options.thickness,e.transition="width "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity):"left"!=t&&"right"!=t||("left"===t?e.left="0px":e.right="0px",this.progress.options.inverse?e.top="0px":e.bottom="0px",e.height=this.progress.percent+"%",e.width=this.progress.options.thickness,e.transition="height "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity),e},progress:function(){return e?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},location:"top",autoRevert:!0,inverse:!1}}}}};t.exports.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t.version.split(".")[0],"undefined"!=typeof window),i={$vm:null,state:{tFailColor:"",tColor:"",timer:null,cut:0},init:function(t){this.$vm=t},start:function(t){var e=this;this.$vm&&(t||(t=3e3),this.$vm.RADON_LOADING_BAR.percent=0,this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.state.cut=1e4/Math.floor(t),clearInterval(this.state.timer),this.state.timer=setInterval(function(){e.increase(e.state.cut*Math.random()),e.$vm.RADON_LOADING_BAR.percent>95&&e.finish()},100))},set:function(t){this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.$vm.RADON_LOADING_BAR.percent=Math.floor(t)},get:function(){return Math.floor(this.$vm.RADON_LOADING_BAR.percent)},increase:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent+Math.floor(t)},decrease:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent-Math.floor(t)},hide:function(){var e=this;clearInterval(this.state.timer),this.state.timer=null,setTimeout(function(){e.$vm.RADON_LOADING_BAR.options.show=!1,t.nextTick(function(){setTimeout(function(){e.$vm.RADON_LOADING_BAR.percent=0},100),e.$vm.RADON_LOADING_BAR.options.autoRevert&&setTimeout(function(){e.revert()},300)})},this.$vm.RADON_LOADING_BAR.options.transition.termination)},pause:function(){clearInterval(this.state.timer)},finish:function(){this.$vm&&(this.$vm.RADON_LOADING_BAR.percent=100,this.hide())},fail:function(){this.$vm.RADON_LOADING_BAR.options.canSuccess=!1,this.$vm.RADON_LOADING_BAR.percent=100,this.hide()},setFailColor:function(t){this.$vm.RADON_LOADING_BAR.options.failedColor=t},setColor:function(t){this.$vm.RADON_LOADING_BAR.options.color=t},setLocation:function(t){this.$vm.RADON_LOADING_BAR.options.location=t},setTransition:function(t){this.$vm.RADON_LOADING_BAR.options.transition=t},tempFailColor:function(t){this.state.tFailColor=this.$vm.RADON_LOADING_BAR.options.failedColor,this.$vm.RADON_LOADING_BAR.options.failedColor=t},tempColor:function(t){this.state.tColor=this.$vm.RADON_LOADING_BAR.options.color,this.$vm.RADON_LOADING_BAR.options.color=t},tempLocation:function(t){this.state.tLocation=this.$vm.RADON_LOADING_BAR.options.location,this.$vm.RADON_LOADING_BAR.options.location=t},tempTransition:function(t){this.state.tTransition=this.$vm.RADON_LOADING_BAR.options.transition,this.$vm.RADON_LOADING_BAR.options.transition=t},revertColor:function(){this.$vm.RADON_LOADING_BAR.options.color=this.state.tColor,this.state.tColor=""},revertFailColor:function(){this.$vm.RADON_LOADING_BAR.options.failedColor=this.state.tFailColor,this.state.tFailColor=""},revertLocation:function(){this.$vm.RADON_LOADING_BAR.options.location=this.state.tLocation,this.state.tLocation=""},revertTransition:function(){this.$vm.RADON_LOADING_BAR.options.transition=this.state.tTransition,this.state.tTransition={}},revert:function(){this.$vm.RADON_LOADING_BAR.options.autoRevert&&(this.state.tColor&&this.revertColor(),this.state.tFailColor&&this.revertFailColor(),this.state.tLocation&&this.revertLocation(),!this.state.tTransition||void 0===this.state.tTransition.speed&&void 0===this.state.tTransition.opacity||this.revertTransition())},parseMeta:function(t){for(var e in t.func){var o=t.func[e];switch(o.call){case"color":switch(o.modifier){case"set":this.setColor(o.argument);break;case"temp":this.tempColor(o.argument)}break;case"fail":switch(o.modifier){case"set":this.setFailColor(o.argument);break;case"temp":this.tempFailColor(o.argument)}break;case"location":switch(o.modifier){case"set":this.setLocation(o.argument);break;case"temp":this.tempLocation(o.argument)}break;case"transition":switch(o.modifier){case"set":this.setTransition(o.argument);break;case"temp":this.tempTransition(o.argument)}}}}},r=function(t,e){for(var o,n,i=1;i<arguments.length;++i)for(o in n=arguments[i])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}({canSuccess:!0,show:!1,color:"#73ccec",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1},e),s=new t({data:{RADON_LOADING_BAR:{percent:0,options:r}}});n&&(window.VueProgressBarEventBus=s,i.init(s)),t.component("vue-progress-bar",o),t.prototype.$Progress=i}}()}]);