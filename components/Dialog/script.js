!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Theme"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("colord"),require("vue"));else if("function"==typeof define&&define.amd)define(["../../components/Theme","../../components/TransitionFadeIn","../../utils/TransitionResponsive","../../utils/transitions","colord","vue"],t);else{var o="object"==typeof exports?t(require("../../components/Theme"),require("../../components/TransitionFadeIn"),require("../../utils/TransitionResponsive"),require("../../utils/transitions"),require("colord"),require("vue")):t(e["../../components/Theme"],e["../../components/TransitionFadeIn"],e["../../utils/TransitionResponsive"],e["../../utils/transitions"],e.colord,e.vue);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,(function(e,t,o,n,s,i){return(()=>{var r={89:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,o=e.data,n=e.parent,s=function e(t){return Array.isArray(t)?(o=t=>e(t),t.reduce(((e,t)=>e.concat(o(t))),[])):null!==(n=t)&&"object"==typeof n?function(e){let t=[];for(const o in e)e[o]&&t.push(o);return t}(t):"string"==typeof t&&t?[t]:[];var o,n}([o.staticClass,o.class]);if(s){var i,r,a,l=(r=(i=t).body,a=i.document,r?window.document.body:!!a&&window.document.documentElement);if(l){var c=function(e,t){if(!t.length)return;const{classList:o}=e;return t.filter((e=>{if(!o.contains(e))return o.add(e),!0}))}(l,s),d=function(){!function(e,t){if(!t||!t.length)return;let o;for(;o=t.shift();)e.classList.remove(o);e.classList.length||e.removeAttribute("class")}(l,c)};n.$once("hook:beforeUpdate",d),n.$once("hook:destroyed",d)}}},t=Object.prototype.hasOwnProperty,o=function(e,t,o){var n="&"===t[0],s="~"===(t=n?t.slice(1):t)[0],i="!"===(t=s?t.slice(1):t)[0];return{o:e,t:t=i?t.slice(1):t,i:o,u:{once:s,capture:i,passive:n}}},n=function(e){var n,s,i,r=e.props,a=e.listeners,l=e.parent,c=function(e,n){var s,i,r=[];for(var a in n)if(s=n,i=a,t.call(s,i)){var l=n[a],c=o(e,a,l);c.o.addEventListener(c.t,c.i,c.u),r.push(c)}return r}((s=(n=r).body,i=n.document,s?window.document.body:i?window.document:window),a),d=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(c)};l.$once("hook:beforeUpdate",d),l.$once("hook:destroyed",d)},s=function(t){n(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?s(t):t.parent.$once("hook:mounted",(function(){s(t)})),t.slots().default}}}()},219:t=>{"use strict";t.exports=e},403:e=>{"use strict";e.exports=t},515:e=>{"use strict";e.exports=o},387:e=>{"use strict";e.exports=n},235:e=>{"use strict";e.exports=s},103:e=>{"use strict";e.exports=i}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return r[e].call(o.exports,o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";l.r(c),l.d(c,{MDialog:()=>r,MDialogContent:()=>d,MDialogLayer:()=>$,dialogApi:()=>e});const e=Symbol("dialogApiKey");var t=l(235),o=l(219);const n={name:"Dialog",inject:{theme:{default:(0,o.defaultTheme)(),from:o.MThemeKey}},props:{bgColor:{type:String,default:void 0,validator:e=>(0,t.colord)(e).isValid()},color:{type:String,default:void 0,validator:e=>(0,t.colord)(e).isValid()}},computed:{...(0,o.resolveThemeableProps)("dialog",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}}}},s={Dialog:"📚0-0-0-semantic-releaseejzGH"};function i(e,t,o,n,s,i,r,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}const r=i(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Dialog,style:e.style},[e._t("default")],2)}),[],!1,(function(e){this.$s=s.locals||s}),null,null).exports;const a={DialogContent:"📚0-0-0-semantic-releaseaHCsK"};const d=i({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.DialogContent},[e._t("default")],2)}),[],!1,(function(e){this.$s=a.locals||a}),null,null).exports;var u=l(103),p=l.n(u),f=function(e){return e&&e.data&&(e.data.slot=void 0),e};const v={functional:!0,render:function(e,t){var o=t.props;return Array.isArray(o.nodes)?o.nodes.map(f):f(o.nodes)}};var m=l(89),h=l.n(m),y=l(403),g=l(515),b=l(387);const _={provide(){const t=this,o={state:p().observable({vnode:void 0,options:{}}),open(e,o={}){const n=e(t.$createElement);return this.state.vnode=n,this.state.options={closeOnClickOutside:!1,beforeCloseHook:async()=>!0,...o},()=>{this.state.vnode===n&&this.close()}},async close(){var e;this.state.vnode&&"function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook()||(null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{this.state.vnode=void 0})))}};return this.dialogApi||(this.dialogApi=o),{[e]:o}}},T={name:"DialogLayer",components:{V:v,PseudoWindow:h(),MTransitionFadeIn:y.MTransitionFadeIn,MTransitionResponsive:g.MTransitionResponsive},inject:{dialogApi:e},inheritAttrs:!1,apiMixin:_,data:()=>({transitions:[{minWidth:b.mobileMinWidth,enter:b.springUpFn,leave:b.springDownFn},{minWidth:b.tabletMinWidth,enter:b.floatUpFn,leave:b.floatDownFn}]}),methods:{closeOnClickOutside(e){const{closeOnClickOutside:t}=this.dialogApi.state.options,{dialog:o}=this.$refs;o&&t&&!o.contains(e.target)&&this.dialogApi.close()}}},C={Layer:"📚0-0-0-semantic-release_4EhS",DialogLayer:"📚0-0-0-semantic-release_5MSu",DialogContentWrapper:"📚0-0-0-semantic-releaseaXIC6",Translucent:"📚0-0-0-semantic-releaseFHIJw",disableScroll:"📚0-0-0-semantic-releasen_iBq"};const $=i(T,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.dialogApi.state.vnode?o("div",{class:e.$s.Translucent}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.dialogApi.state.vnode?o("div",{class:e.$s.DialogLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("div",{ref:"dialog",class:e.$s.DialogContentWrapper},[o("v",{attrs:{nodes:e.dialogApi.state.vnode}})],1)],1):e._e()])],1)}),[],!1,(function(e){this.$s=C.locals||C}),null,null).exports})(),c})()}));
//# sourceMappingURL=script.js.map
