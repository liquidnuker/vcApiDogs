!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o=window.webpackJsonp;window.webpackJsonp=function(e,n,s){for(var r,a,c=0,u=[];c<e.length;c++)a=e[c],i[a]&&u.push(i[a][0]),i[a]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);for(o&&o(e,n,s);u.length;)u.shift()()};var n={},i={10:0};e.e=function(t){function o(){a.onerror=a.onload=null,clearTimeout(c);var e=i[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),i[t]=void 0)}var n=i[t];if(0===n)return new Promise(function(t){t()});if(n)return n[2];var s=new Promise(function(e,o){n=i[t]=[e,o]});n[2]=s;var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+t+".chunk.js";var c=setTimeout(o,12e4);return a.onerror=a.onload=o,r.appendChild(a),s},e.m=t,e.c=n,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/",e.oe=function(t){throw console.error(t),t},e(e.s=2)}([function(t,e){t.exports=function(t,e,o,n,i){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n);var u;if(i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=u):o&&(u=o),u){var p=c.functional,l=p?c.render:c.beforeCreate;p?c.render=function(t,e){return u.call(e),l(t,e)}:c.beforeCreate=l?[].concat(l,u):[u]}return{esModule:s,exports:r,options:c}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var i=o(4),s=n(i),r=o(7),a=n(r),c={color:"#bffaf3",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1};Vue.use(a.default,c),Vue.use(VueRouter);var u=function(){return o.e(2).then(o.bind(null,8))},p=function(){return o.e(1).then(o.bind(null,9))},l=function(){return o.e(0).then(o.bind(null,10))},h=[{path:"/",component:u},{path:"/gallery/:breedname",component:p},{path:"/favorites",component:l}],f=new VueRouter({routes:h});new Vue({el:"#app",router:f,render:function(t){return t(s.default)}}),e.router=f},function(t,e,o){"use strict";o(3),o(1)},function(t,e){},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=o(6),s=o(0),r=s(n.a,i.a,null,null,null);e.default=r.exports},function(t,e,o){"use strict";e.a={data:function(){return{}}}},function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("router-view",{staticClass:"router-view"})],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e,o){!function(t,e){e()}(0,function(){"use strict";function e(t,e){for(var o,n,i=1;i<arguments.length;++i){n=arguments[i];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),o=" .__cov-progress { position: fixed; opacity: 1; z-index: 999999; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o)),t.appendChild(e)}}();var o="undefined"!=typeof window,n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"__cov-progress",style:t.style})},staticRenderFns:[],name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function(){var t=this.progress.options.location,e={"background-color":this.progress.options.canSuccess?this.progress.options.color:this.progress.options.failedColor,opacity:this.progress.options.show?1:0};return"top"==t||"bottom"==t?("top"===t?e.top="0px":e.bottom="0px",this.progress.options.inverse?e.right="0px":e.left="0px",e.width=this.progress.percent+"%",e.height=this.progress.options.thickness,e.transition="width "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity):"left"!=t&&"right"!=t||("left"===t?e.left="0px":e.right="0px",this.progress.options.inverse?e.top="0px":e.bottom="0px",e.height=this.progress.percent+"%",e.width=this.progress.options.thickness,e.transition="height "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity),e},progress:function(){return o?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},location:"top",autoRevert:!0,inverse:!1}}}}};t.exports.install=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(t.version.split(".")[0],"undefined"!=typeof window),s={$vm:null,state:{tFailColor:"",tColor:"",timer:null,cut:0},init:function(t){this.$vm=t},start:function(t){var e=this;this.$vm&&(t||(t=3e3),this.$vm.RADON_LOADING_BAR.percent=0,this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.state.cut=1e4/Math.floor(t),clearInterval(this.state.timer),this.state.timer=setInterval(function(){e.increase(e.state.cut*Math.random()),e.$vm.RADON_LOADING_BAR.percent>95&&e.finish()},100))},set:function(t){this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.$vm.RADON_LOADING_BAR.percent=Math.floor(t)},get:function(){return Math.floor(this.$vm.RADON_LOADING_BAR.percent)},increase:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent+Math.floor(t)},decrease:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent-Math.floor(t)},hide:function(){var e=this;clearInterval(this.state.timer),this.state.timer=null,setTimeout(function(){e.$vm.RADON_LOADING_BAR.options.show=!1,t.nextTick(function(){setTimeout(function(){e.$vm.RADON_LOADING_BAR.percent=0},100),e.$vm.RADON_LOADING_BAR.options.autoRevert&&setTimeout(function(){e.revert()},300)})},this.$vm.RADON_LOADING_BAR.options.transition.termination)},pause:function(){clearInterval(this.state.timer)},finish:function(){this.$vm&&(this.$vm.RADON_LOADING_BAR.percent=100,this.hide())},fail:function(){this.$vm.RADON_LOADING_BAR.options.canSuccess=!1,this.$vm.RADON_LOADING_BAR.percent=100,this.hide()},setFailColor:function(t){this.$vm.RADON_LOADING_BAR.options.failedColor=t},setColor:function(t){this.$vm.RADON_LOADING_BAR.options.color=t},setLocation:function(t){this.$vm.RADON_LOADING_BAR.options.location=t},setTransition:function(t){this.$vm.RADON_LOADING_BAR.options.transition=t},tempFailColor:function(t){this.state.tFailColor=this.$vm.RADON_LOADING_BAR.options.failedColor,this.$vm.RADON_LOADING_BAR.options.failedColor=t},tempColor:function(t){this.state.tColor=this.$vm.RADON_LOADING_BAR.options.color,this.$vm.RADON_LOADING_BAR.options.color=t},tempLocation:function(t){this.state.tLocation=this.$vm.RADON_LOADING_BAR.options.location,this.$vm.RADON_LOADING_BAR.options.location=t},tempTransition:function(t){this.state.tTransition=this.$vm.RADON_LOADING_BAR.options.transition,this.$vm.RADON_LOADING_BAR.options.transition=t},revertColor:function(){this.$vm.RADON_LOADING_BAR.options.color=this.state.tColor,this.state.tColor=""},revertFailColor:function(){this.$vm.RADON_LOADING_BAR.options.failedColor=this.state.tFailColor,this.state.tFailColor=""},revertLocation:function(){this.$vm.RADON_LOADING_BAR.options.location=this.state.tLocation,this.state.tLocation=""},revertTransition:function(){this.$vm.RADON_LOADING_BAR.options.transition=this.state.tTransition,this.state.tTransition={}},revert:function(){this.$vm.RADON_LOADING_BAR.options.autoRevert&&(this.state.tColor&&this.revertColor(),this.state.tFailColor&&this.revertFailColor(),this.state.tLocation&&this.revertLocation(),!this.state.tTransition||void 0===this.state.tTransition.speed&&void 0===this.state.tTransition.opacity||this.revertTransition())},parseMeta:function(t){for(var e in t.func){var o=t.func[e];switch(o.call){case"color":switch(o.modifier){case"set":this.setColor(o.argument);break;case"temp":this.tempColor(o.argument)}break;case"fail":switch(o.modifier){case"set":this.setFailColor(o.argument);break;case"temp":this.tempFailColor(o.argument)}break;case"location":switch(o.modifier){case"set":this.setLocation(o.argument);break;case"temp":this.tempLocation(o.argument)}break;case"transition":switch(o.modifier){case"set":this.setTransition(o.argument);break;case"temp":this.tempTransition(o.argument)}}}}},r=e({canSuccess:!0,show:!1,color:"#73ccec",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1},o),a=new t({data:{RADON_LOADING_BAR:{percent:0,options:r}}});i&&(window.VueProgressBarEventBus=a,s.init(a)),t.component("vue-progress-bar",n),t.prototype.$Progress=s}})}]);