!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../utils/transitions"),require("vue"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"));else if("function"==typeof define&&define.amd)define(["../../utils/transitions","vue","../../components/TransitionFadeIn","../../utils/TransitionResponsive"],t);else{var n="object"==typeof exports?t(require("../../utils/transitions"),require("vue"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive")):t(e["../../utils/transitions"],e.vue,e["../../components/TransitionFadeIn"],e["../../utils/TransitionResponsive"]);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(t,n){t.exports=e},function(e,t,n){e.exports={Modal:"📚0-0-0-semantic-release2f64r"}},function(e,t,n){e.exports={ModalContent:"📚0-0-0-semantic-releasege47Q"}},function(e,t,n){e.exports={Layer:"📚0-0-0-semantic-releaseNerse",ModalLayer:"📚0-0-0-semantic-releasenN5QH",Translucent:"📚0-0-0-semantic-release3bAE5",Transparent:"📚0-0-0-semantic-release3SaiR",disableScroll:"📚0-0-0-semantic-release1m1i6",Container:"📚0-0-0-semantic-release29iS2"}},function(e,t,n){"use strict";var o=n(1),r=n.n(o);n.d(t,"default",(function(){return r.a}))},function(e,t,n){"use strict";var o=n(2),r=n.n(o);n.d(t,"default",(function(){return r.a}))},function(e,t,n){"use strict";var o=n(3),r=n.n(o);n.d(t,"default",(function(){return r.a}))},function(e,n){e.exports=t},function(e,t,n){e.exports=function(){"use strict";var e=function(e){var t=e.props,n=e.data,o=e.parent,r=function e(t){return Array.isArray(t)?(n=t=>e(t),t.reduce(((e,t)=>e.concat(n(t))),[])):null!==(o=t)&&"object"==typeof o?function(e){let t=[];for(const n in e)e[n]&&t.push(n);return t}(t):"string"==typeof t&&t?[t]:[];var n,o}([n.staticClass,n.class]);if(r){var i,s,a,c=(s=(i=t).body,a=i.document,s?window.document.body:!!a&&window.document.documentElement);if(c){var l=function(e,t){if(!t.length)return;const{classList:n}=e;return t.filter((e=>{if(!n.contains(e))return n.add(e),!0}))}(c,r),u=function(){!function(e,t){if(!t||!t.length)return;let n;for(;n=t.shift();)e.classList.remove(n);e.classList.length||e.removeAttribute("class")}(c,l)};o.$once("hook:beforeUpdate",u),o.$once("hook:destroyed",u)}}},t=Object.prototype.hasOwnProperty,n=function(e,t,n){var o="&"===t[0],r="~"===(t=o?t.slice(1):t)[0],i="!"===(t=r?t.slice(1):t)[0];return{o:e,t:t=i?t.slice(1):t,i:n,u:{once:r,capture:i,passive:o}}},o=function(e){var o,r,i,s=e.props,a=e.listeners,c=e.parent,l=function(e,o){var r,i,s=[];for(var a in o)if(r=o,i=a,t.call(r,i)){var c=o[a],l=n(e,a,c);l.o.addEventListener(l.t,l.i,l.u),s.push(l)}return s}((r=(o=s).body,i=o.document,r?window.document.body:i?window.document:window),a),u=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(l)};c.$once("hook:beforeUpdate",u),c.$once("hook:destroyed",u)},r=function(t){o(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?r(t):t.parent.$once("hook:mounted",(function(){r(t)})),t.slots().default}}}()},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t),n.d(t,"modalApi",(function(){return o})),n.d(t,"MModal",(function(){return a})),n.d(t,"MModalContent",(function(){return l})),n.d(t,"MModalLayer",(function(){return w}));var o=Symbol("modalApiKey"),r={name:"Modal",inject:{modalApi:o},props:{beforeClose:{type:Function,required:!1,default:void 0}},watch:{beforeClose:{immediate:!0,handler(e){this.modalApi.state.options.beforeCloseHook=e}}}},i=n(4);function s(e,t,n,o,r,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}var a=s(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Modal},[e._t("default")],2)}),[],!1,(function(e){this.$s=i.default.locals||i.default}),null,null).exports,c=n(5);var l=s({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.ModalContent},[e._t("default")],2)}),[],!1,(function(e){this.$s=c.default.locals||c.default}),null,null).exports,u=n(7),d=n.n(u),f=function(e){return e&&e.data&&(e.data.slot=void 0),e},p={functional:!0,render:function(e,t){var n=t.props;return Array.isArray(n.nodes)?n.nodes.map(f):f(n.nodes)}},v=n(8),m=n.n(v),y=n(9),h=n(10),b=n(0);const _={inject:{currentLayer:{default:void 0,from:o}},provide(){const e=this,t={state:d.a.observable({vnode:void 0,options:{},isStacked:!!e.currentLayer}),open(t,n={}){const o=t(e.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&e.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;e.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=t),{[o]:t}}};var M={name:"ModalLayer",components:{V:p,PseudoWindow:m.a,MTransitionFadeIn:y.MTransitionFadeIn,MTransitionResponsive:h.MTransitionResponsive},mixins:[_],inheritAttrs:!1,apiMixin:_,data(){let e=b.floatUpFn,t=b.floatDownFn;return this.currentLayer.state.isStacked&&(e=b.delayedFloatUpFn,t=b.floatDownFn),{transitions:[{minWidth:b.mobileMinWidth,enter:b.springUpFn,leave:b.springDownFn},{minWidth:b.tabletMinWidth,enter:e,leave:t}]}},mounted(){const e=this;this.unwatchStackedModal=this.$watch((()=>e.modalApi.state.vnode),(()=>{const t=window.innerWidth>=b.tabletMinWidth,n=!t,o=!!e.modalApi.state.vnode,r=!o,i=this.$refs.baseModalLayer;t&&o?Object(b.fadeOutFn)({element:i}):t&&r?Object(b.delayedFadeInFn)({element:i}):n&&o?setTimeout((()=>{i.style.opacity="0%"}),b.springDelay):n&&r&&i.style.removeProperty("opacity")}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(e){const{closeOnClickOutside:t}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&t&&!this.isClickInsideModal(n,e)&&this.modalApi.close()},isClickInsideModal(e,t){const n=e.getBoundingClientRect();console.log(n),console.log("Event x: ".concat(t.clientX," and Event y: ").concat(t.clientY));const o=t.clientX>n.left&&t.clientX<n.right,r=t.clientY>n.top&&t.clientY<n.bottom;return o&&r}}},$=n(6);var w=s(M,(function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("div",{class:t.$s.Layer},[o("m-transition-fade-in",[t.currentLayer.state.vnode?o("div",{class:[t.$s.Translucent,(e={},e[t.$s.Transparent]=t.currentLayer.state.isStacked,e)]}):t._e()]),t._v(" "),o("m-transition-responsive",{attrs:{transitions:t.transitions}},[t.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:t.$s.ModalLayer,on:{click:t.closeOnClickOutside}},[o("pseudo-window",{class:t.$s.disableScroll,attrs:{body:""}}),t._v(" "),o("div",{ref:"modal",class:t.$s.Container},[o("v",{attrs:{nodes:t.currentLayer.state.vnode}})],1)],1):t._e()]),t._v(" "),t.currentLayer.state.vnode?o("modal-layer"):t._e()],1)}),[],!1,(function(e){this.$s=$.default.locals||$.default}),null,null).exports}])}));
//# sourceMappingURL=script.js.map