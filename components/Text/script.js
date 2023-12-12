!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("../../components/Theme"),require("../../utils/css-validator"));else if("function"==typeof define&&define.amd)define(["../../components/Theme","../../utils/css-validator"],t);else{var i="object"==typeof exports?t(require("../../components/Theme"),require("../../utils/css-validator")):t(e["../../components/Theme"],e["../../utils/css-validator"]);for(var o in i)("object"==typeof exports?exports:e)[o]=i[o]}}(this,(function(e,t){return(()=>{"use strict";var i={219:t=>{t.exports=e},948:e=>{e.exports=t}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{MText:()=>l});var e=r(219),t=r(948),i=r.n(t);const o={inject:{theme:{default:(0,e.defaultTheme)(),from:e.MThemeKey}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(e)},size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},fontFamily:{type:String,default:void 0,validator:i()("font-family")},fontWeight:{type:String,default:void 0,validator:i()("font-weight")},fontSize:{type:String,default:void 0,validator:i()("font-size")},lineHeight:{type:String,default:void 0,validator:i()("line-height")},letterSpacing:{type:String,default:void 0,validator:i()("letter-spacing")},color:{type:String,default:void 0,validator:i()("color")},fontStyle:{type:String,default:void 0,validator:i()("font-style")},textTransform:{type:String,default:void 0,validator:i()("text-transform")},textDecoration:{type:String,default:void 0,validator:i()("text-decoration")},textAlign:{type:String,default:void 0,validator:i()("text-align")}},data:()=>({isCentered:!1}),computed:{...(0,e.resolveThemeableProps)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign","lineHeight","letterSpacing"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:e}=this.theme,t={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,letterSpacing:this.letterSpacing,"--mobile-base-font-size":e.baseSize,"--mobile-font-size-scale":e.sizeScale};return"inherit"!==this.resolvedFontFamily&&(t.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(t.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(t.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(t.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(t.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(t.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(t.textAlign=this.resolvedTextAlign),"inherit"!==this.resolvedLineHeight&&(t.lineHeight=this.resolvedLineHeight),"inherit"!==this.resolvedLetterSpacing&&(t.letterSpacing=this.resolvedLetterSpacing),this.isCentered&&(t.paddingLeft=t.letterSpacing),t}},mounted(){this.detectAlignCenter()},methods:{detectAlignCenter(){const e=window.getComputedStyle(this.$el);console.log("computed style: ",e);const t=e.getPropertyValue("text-align");console.log("text align: ",t),this.isCentered="center"===t}},render(e){const{$s:t,tag:i,sizeClass:o,inlineStyles:r}=this,n=this.$slots.default;return e(i,{class:[t.Text,t["size_".concat(o)]],attrs:this.$attrs,style:r,on:this.$listeners},n)}},s={Text:"📚0-0-0-semantic-releaseuGevg","size_minus-2":"📚0-0-0-semantic-releaseMXP4r","size_minus-1":"📚0-0-0-semantic-releaseEEwzY",size_0:"📚0-0-0-semantic-releaseW7uVy",size_1:"📚0-0-0-semantic-releasesEevC",size_2:"📚0-0-0-semantic-releaseNNp1l",size_3:"📚0-0-0-semantic-releaseTxSrO",size_4:"📚0-0-0-semantic-release_0Hav",size_5:"📚0-0-0-semantic-releaseA7Ebd",size_6:"📚0-0-0-semantic-release_lg_u",size_7:"📚0-0-0-semantic-release_prL8"};const l=function(e,t,i,o,r,n,s,l){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),o&&(d.functional=!0),n&&(d._scopeId="data-v-"+n),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=a):r&&(a=l?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(d.functional){d._injectStyles=a;var h=d.render;d.render=function(e,t){return a.call(t),h(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:d}}(o,undefined,undefined,!1,(function(e){this.$s=s.locals||s}),null,null).exports})(),n})()}));
//# sourceMappingURL=script.js.map