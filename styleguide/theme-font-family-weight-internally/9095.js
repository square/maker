(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9095],{55869:t=>{t.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=104)}({0:function(t,e,r){"use strict";function o(t,e,r,o,n,i,a,l){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):n&&(s=l?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:c}}r.d(e,"a",(function(){return o}))},104:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"}})])};o._withStripped=!0;var n=r(0),i=Object(n.a)({},o,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/feather.svg",e.default=i.exports}})},82137:(t,e,r)=>{"use strict";r.d(e,{qo:()=>k,YH:()=>l,uH:()=>_,C9:()=>g});var o=r(85066),n=r.n(o),i=r(54299),a=r.n(i);const l=Symbol("ThemeKey");var s=r(20643),c=r.n(s),f=r(92810),u=r.n(f),d=r(75692),p=r.n(d),h=r(32416);function v(t){return p()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function m(t){if(!p()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const e=t.slice(1),r=c()(this,e);if(u()(r))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return r}function g(t,e){const r={};for(const n of e)"variant"===n?r.resolvedVariant=function(){if(!u()(this.variant))return this.variant;let e;const r=this.theme[t].variant;if(u()(r)||(e=r),u()(e))return;const o=this.theme.resolve(e),n=this.$vnode.componentOptions.Ctor.extendOptions.props.variant.validator;if(n)h.Z.error(n(o),'Invalid value "'.concat(o,'" for prop "variant" for component "').concat(t,'" in theme.'));else{var i;const e=null===(i=this.theme[t].variants)||void 0===i?void 0:i[o];h.Z.error(e,'Invalid variant "'.concat(o,'" for component "').concat(t,'" in theme.'))}return o}:r["resolved".concat((o=n,o[0].toUpperCase()+o.slice(1)))]=function(){if(!u()(this[n]))return this[n];let e;const r=this.theme[t][n];if(u()(r)||(e=r),!u()(this.resolvedVariant)){var o,i;const r=null===(o=this.theme[t].variants)||void 0===o||null===(i=o[this.resolvedVariant])||void 0===i?void 0:i[n];u()(r)||(e=r)}if(u()(e))return;const a=this.theme.resolve(e),l=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return l&&h.Z.error(l(a),'Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(t,'" in theme.')),a};var o;return r}function _(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17,paragraph:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",variants:{primary:{},secondary:{},tertiary:{}}},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{size:0,fontFamily:"@fonts.paragraph.fontFamily",color:"@colors.text",element:"p",fontWeight:"@fonts.paragraph.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",variants:{headline:{size:7,fontWeight:"700",element:"h1",color:"@colors.heading"},title:{size:3,fontWeight:"500",element:"h2",color:"@colors.heading"},paragraph:{},label:{size:0,fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight",element:"h6",textTransform:"uppercase"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:v,getPath:m}}function b(t,e,r,o){a()(t,e,r),a()(t,n()(t.profiles,{id:o})),t.colors={...t.colors},t.resolve=v,t.getPath=m}const y={inject:{parentTheme:{default:_(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return b(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:e}=this;return{"--neutral-0":t["neutral-0"],"--neutral-10":t["neutral-10"],"--neutral-20":t["neutral-20"],"--neutral-80":t["neutral-80"],"--neutral-90":t["neutral-90"],"--neutral-100":t["neutral-100"],"--color-background":t.background,"--color-heading":t.heading,"--color-text":t.text,"--color-elevation":t["color-elevation"],"--color-overlay":t["color-overlay"],"--font-family-paragraph":e.paragraph.fontFamily,"--font-weight-paragraph":e.paragraph.fontWeight,"--font-family-label":e.label.fontFamily,"--font-weight-label":e.label.fontWeight}}},beforeUpdate(){b(this.$data,this.parentTheme,this.theme,this.profile)}};var x=r(35004),C=r.n(x);const k=(0,r(51900).Z)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=C().locals||C()}),null,null).exports},57346:(t,e,r)=>{"use strict";r.d(e,{S:()=>i});var o=r(43941),n=r.n(o);const i=(0,r(51900).Z)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$s.Container},[t._t("control"),t._v(" "),t.$slots.error?r("span",{class:t.$s.Error},[t._t("error")],2):t._e()],2)}),[],!1,(function(t){this.$s=n().locals||n()}),null,null).exports},32416:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var o=r(14219);const n={warn(t,e,r){t||(0,o.K)(e,r)},error(t,e,r){t||(0,o._)(e,r)}}},14219:(t,e,r)=>{"use strict";r.d(e,{_:()=>i,K:()=>a});const o="object"==typeof process&&"object"==typeof process.env&&!0,n=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,e)=>{throw console.error(...n(e),t),new Error("".concat((t=>"[@square/maker]".concat(t))(e)," ").concat(t))},a=(t,e)=>{o&&console.warn(...n(e),t)}},35820:(t,e,r)=>{var o=r(77705)((function(t){return t[1]}));o.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},t.exports=o},30263:(t,e,r)=>{var o=r(77705)((function(t){return t[1]}));o.push([t.id,"\n.Container_rLuTK {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.Error__kSnm {\n\t/* provided by theme eventually */\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: inline-block;\n\tmargin-top: 8px;\n\tcolor: var(--color-error);\n}\n",""]),o.locals={Container:"Container_rLuTK",Error:"Error__kSnm"},t.exports=o},35004:(t,e,r)=>{var o=r(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,r(54023).Z)("12fe2849",o,!0,{})},43941:(t,e,r)=>{var o=r(30263);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,r(54023).Z)("6db595db",o,!0,{})}}]);