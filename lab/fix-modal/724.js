(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[724],{9893:function(t){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},281:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};o._withStripped=!0;var r=n(0),i=Object(r.a)({},o,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=i.exports}})},9289:function(t,e,n){"use strict";n.d(e,{Qp:function(){return g},tG:function(){return m}});var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],a=!1,l=-1,c=void 0,u=void 0,d=void 0,f=function(t){return s.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},p=function(t){var e=t||window.event;return!!f(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},h=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)},v=function(){if(void 0!==u){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(e,t),u=void 0}},g=function(t,e){if(t){if(!s.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};s=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(s),[n]),i?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,n=t.scrollX,o=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var t=o-window.innerHeight;t&&e>=o&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===d){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(e&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(e),i&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(l=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-l;!f(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?p(t):t.stopPropagation())}(e,t)},a||(document.addEventListener("touchmove",p,o?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(t){t?(s=s.filter((function(e){return e.targetElement!==t})),i&&(t.ontouchstart=null,t.ontouchmove=null,a&&0===s.length&&(document.removeEventListener("touchmove",p,o?{passive:!1}:void 0),a=!1)),i?v():h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},8486:function(t,e){"use strict";var n=Symbol();function o(t,e){t[n]||(t[n]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var r=function(t,e){var o=t.splice(0);e.append.apply(e,o),o.forEach((function(t){t[n]=void 0}))};function i(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[a]){var r=this[a].get(e);r&&(e=r[0])}e.before(t),o(t,this)}function s(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var o=this[a];if(o){var i=o.get(t);if(i)return r(i,t),o.delete(t),void(t[n]=void 0)}t.remove()}var a=Symbol(),l={insertBefore:i,removeChild:s},c=Symbol(),u={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[c],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[c]),n.forEach((function(t){return t.remove()}))},removeChild:s,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[c];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),o(t,this),this.frag.push(t)}},d={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,r=document.createComment("");t[c]=r,0===e.length&&e.push(r);var i=document.createDocumentFragment();i.append.apply(i,e),t.replaceWith(i),t.frag=e,function(t,e,n){t[a]||(t[a]=new Map,Object.assign(t,l)),t[a].set(e,n)}(n,t,e),o(t,n),e.forEach((function(e){return o(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var o=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,o))},get:function(){return""}}),Object.assign(t,u)},unbind:function(t){r(t.frag,t),t[c].remove()}};e.Z=d},7935:function(t,e,n){"use strict";n.d(e,{F:function(){return d}});var o=n(9082),r=n(1688);function i(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,o){t.set(n,o),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const s=new Set;let a;var l={components:{MTransitionFadeIn:o.j,MSkeletonBlock:r.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:s.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new i),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{s.add(this.src+this.srcset),this.loaded=!0}))}}},c=n(7548),u=n.n(c);var d=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},1688:function(t,e,n){"use strict";n.d(e,{s:function(){return a},p:function(){return d}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r=n(2986),i=n.n(r),s=n(1900);var a=(0,s.Z)(o,undefined,undefined,!1,(function(t){this.$s=i().locals||i()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=n(2794),u=n.n(c);var d=(0,s.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},5227:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),o.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=o},8647:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},2850:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.cover-photo[data-v-a8093446] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-a8093446] {\n\twidth: 100%;\n}\n.icon[data-v-a8093446] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},3660:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var o=n(7852),r=n(193),i=n(1943),s=n(7935),a=n(9893),l=n.n(a),c={components:{MModal:o.x6,MActionBar:r.MS,MButton:i.G,MImage:s.F,X:l()}},u=(n(299),(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/508/900/900.jpg?hmac=u3iS7O2eQ5wVlV8-II98k9ARRFn1Yzb92XjCdSAxMOQ"}})],1),t._v(" "),n("div",[t._v("\n\t\tSecond modal\n\t\t"),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\t\tLong text "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("m-action-bar",[n("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index-first-modal"}}},[n("m-button",{attrs:{size:"large",shape:"pill"}},[n("x",{staticClass:"icon"})],1)],1),t._v(" "),n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""}},[t._v("\n\t\t\tAction B\n\t\t")])],1)],1)}),[],!1,null,"a8093446",null).exports)},7548:function(t,e,n){var o=n(5227);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("14393fff",o,!0,{})},2986:function(t,e,n){var o=n(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("e53630ca",o,!0,{})},2794:function(t,e,n){var o=n(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("54e85523",o,!0,{})},299:function(t,e,n){var o=n(2850);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("727141e0",o,!0,{})}}]);