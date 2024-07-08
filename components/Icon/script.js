!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Theme"),require("../../utils/RenderFn"),require("../../utils/assert"),require("../../utils/constants"),require("../../utils/css-validator"));else if("function"==typeof define&&define.amd)define(["../../components/Theme","../../utils/RenderFn","../../utils/assert","../../utils/constants","../../utils/css-validator"],t);else{var r="object"==typeof exports?t(require("../../components/Theme"),require("../../utils/RenderFn"),require("../../utils/assert"),require("../../utils/constants"),require("../../utils/css-validator")):t(e["../../components/Theme"],e["../../utils/RenderFn"],e["../../utils/assert"],e["../../utils/constants"],e["../../utils/css-validator"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(e,t,r,n,o){return(()=>{"use strict";var s={219:t=>{t.exports=e},296:e=>{e.exports=t},455:e=>{e.exports=r},30:e=>{e.exports=n},948:e=>{e.exports=o}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return s[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{l.r(a),l.d(a,{MIcon:()=>p});var e=l(948),t=l.n(e),r=l(455),n=l.n(r),o=l(219),s=l(296),i=l.n(s),d=l(30);const c=t()("width"),u={components:{RenderFn:i()},inject:{theme:{default:(0,o.defaultTheme)(),from:o.MThemeKey}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:"small",validator:e=>d.ICON_SIZES[e]||c(e)},color:{type:String,default:void 0,validator:t()("color")},fill:{type:String,default:void 0,validator:t()("fill")}},computed:{...(0,o.resolveThemeableProps)("icon",["pattern","name","color","fill"]),iconRenderFn(){let e=this.theme.icons[this.resolvedName];return n().warn(e,"'".concat(this.resolvedName,"' icon not defined in theme"),"Icon"),e=e||this.theme.icons.info,e},inlineStyles(){return{"--color":this.resolvedColor,"--icon-size":d.ICON_SIZES[this.size]||this.size,"--fill":this.resolvedFill}}}},f={Icon:"📚0-0-0-semantic-releasevCfSe"};const p=function(e,t,r,n,o,s,i,l){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=a):o&&(a=l?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(d.functional){d._injectStyles=a;var c=d.render;d.render=function(e,t){return a.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:d}}(u,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("render-fn",e._g(e._b({class:e.$s.Icon,style:e.inlineStyles,attrs:{"render-fn":e.iconRenderFn}},"render-fn",e.$attrs,!1),e.$listeners))}),[],!1,(function(e){this.$s=f.locals||f}),null,null).exports})(),a})()}));
//# sourceMappingURL=script.js.map