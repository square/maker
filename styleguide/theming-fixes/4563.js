(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4563],{78152:(e,t,r)=>{"use strict";r.d(t,{v:()=>l});var n=r(60771),a=r.n(n);const o={name:"ProgressBar",props:{size:{type:String,default:"medium",validator:e=>["xsmall","small","medium","large"].includes(e)},shape:{type:String,default:void 0,validator:e=>["squared","rounded","pill"].includes(e)},color:{type:String,default:"#000",validator:e=>a().valid(e)},progress:{type:Number,default:0,validator:e=>e>=0&&e<=100}},computed:{barStyles(){return{"--bar-color":this.color,"--fill-percent":"".concat(this.progress,"%")}}}};var i=r(3619),s=r.n(i);const l=(0,r(51900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[e.$s.ProgressBarContainer,e.$s["size_"+e.size],e.$s["shape_"+e.shape]]},[r("div",{class:[e.$s.ProgressBar,e.$s["shape_"+e.shape]],style:e.barStyles})])}),[],!1,(function(e){this.$s=s().locals||s()}),null,null).exports},70990:(e,t,r)=>{"use strict";r.d(t,{H:()=>l});var n=r(30648),a=r(27060);const o={inject:{theme:{default:(0,n.uH)(),from:n.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(e)},size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},fontFamily:{type:String,default:void 0,validator:(0,a.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,a.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,a.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,a.Z)("line-height")},color:{type:String,default:void 0,validator:(0,a.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,a.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,a.Z)("text-transform")},textAlign:{type:String,default:void 0,validator:(0,a.Z)("text-align")}},computed:{...(0,n.C9)("text",["pattern","element","size","fontFamily","fontWeight","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:e}=this.theme,t={fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":e.baseSize,"--mobile-font-size-scale":e.sizeScale};return"inherit"!==this.resolvedFontFamily&&(t.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(t.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(t.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(t.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(t.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(t.textAlign=this.resolvedTextAlign),t}},render(e){const{$s:t,tag:r,sizeClass:n,inlineStyles:a}=this,o=this.$slots.default;return e(r,{class:[t.Text,t["size_".concat(n)]],attrs:this.$attrs,style:a,on:this.$listeners},o)}};var i=r(7493),s=r.n(i);const l=(0,r(51900).Z)(o,undefined,undefined,!1,(function(e){this.$s=s().locals||s()}),null,null).exports},30648:(e,t,r)=>{"use strict";r.d(t,{qo:()=>k,YH:()=>s,uH:()=>_,C9:()=>p});var n=r(85066),a=r.n(n),o=r(54299),i=r.n(o);const s=Symbol("ThemeKey");var l=r(20643),c=r.n(l),f=r(92810),h=r.n(f),v=r(75692),d=r.n(v),m=r(32416);function u(e){return d()(e)&&e.startsWith("@")?this.resolve(this.getPath(e)):e}function g(e){if(!d()(e))throw new Error("cannot resolve pointer ".concat(e," it is not a string"));if(!e.startsWith("@"))throw new Error("cannot resolve pointer ".concat(e," it is missed the @ prefix"));const t=e.slice(1),r=c()(this,t);if(h()(r))throw new Error("invalid pointer ".concat(e," does not point to a field that exists within the theme"));return r}function p(e,t){const r={};for(const a of t)"pattern"===a?r.resolvedPattern=function(){if(!h()(this.pattern))return this.pattern;let t;const r=this.theme[e].pattern;if(h()(r)||(t=r),h()(t))return;const n=this.theme.resolve(t),a=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(a)m.Z.error(a(n),'Invalid value "'.concat(n,'" for prop "pattern" for component "').concat(e,'" in theme.'));else{var o;const t=null===(o=this.theme[e].patterns)||void 0===o?void 0:o[n];m.Z.error(t,'Invalid pattern "'.concat(n,'" for component "').concat(e,'" in theme.'))}return n}:r["resolved".concat((n=a,n[0].toUpperCase()+n.slice(1)))]=function(){if(!h()(this[a]))return this[a];let t;const r=this.theme[e][a];if(h()(r)||(t=r),!h()(this.resolvedPattern)){var n,o;const r=null===(n=this.theme[e].patterns)||void 0===n||null===(o=n[this.resolvedPattern])||void 0===o?void 0:o[a];h()(r)||(t=r)}if(h()(t))return;const i=this.theme.resolve(t),s=this.$vnode.componentOptions.Ctor.extendOptions.props[a].validator;return s&&m.Z.error(s(i),'Invalid value "'.concat(i,'" for prop "').concat(a,'" for component "').concat(e,'" in theme.')),i};var n;return r}function _(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:u,getPath:g}}function x(e,t,r,n){i()(e,t,r),i()(e,a()(e.profiles,{id:n})),e.colors={...e.colors},e.resolve=u,e.getPath=g}const y={inject:{parentTheme:{default:_(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return x(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e,fonts:t,shapes:r}=this;return{"--maker-color-neutral-0":e["neutral-0"],"--maker-color-neutral-10":e["neutral-10"],"--maker-color-neutral-20":e["neutral-20"],"--maker-color-neutral-80":e["neutral-80"],"--maker-color-neutral-90":e["neutral-90"],"--maker-color-neutral-100":e["neutral-100"],"--maker-color-primary":e.primary,"--maker-color-background":e.background,"--maker-color-heading":e.heading,"--maker-color-body":e.body,"--maker-color-elevation":e.elevation,"--maker-color-overlay":e.overlay,"--maker-font-heading-font-family":t.heading.fontFamily,"--maker-font-heading-font-weight":t.heading.fontWeight,"--maker-font-body-font-family":t.body.fontFamily,"--maker-font-body-font-weight":t.body.fontWeight,"--maker-font-label-font-family":t.label.fontFamily,"--maker-font-label-font-weight":t.label.fontWeight,"--maker-shape-default-border-radius":r.defaultBorderRadius,"--maker-shape-button-border-radius":r.buttonBorderRadius,"--maker-shape-image-border-radius":r.imageBorderRadius}}},beforeUpdate(){x(this.$data,this.parentTheme,this.theme,this.profile)}};var z=r(35004),b=r.n(z);const k=(0,r(51900).Z)(y,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=b().locals||b()}),null,null).exports},32416:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(14219);const a={warn(e,t,r){e||(0,n.K)(t,r)},error(e,t,r){e||(0,n._)(t,r)}}},27060:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e){return function(t){return!r.g.CSS||r.g.CSS.supports(e,t)}}},14219:(e,t,r)=>{"use strict";r.d(t,{_:()=>o,K:()=>i});const n="object"==typeof process&&"object"==typeof process.env&&!0,a=e=>["%c @square/maker".concat(e),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],o=(e,t)=>{throw console.error(...a(t),e),new Error("".concat((e=>"[@square/maker]".concat(e))(t)," ").concat(e))},i=(e,t)=>{n&&console.warn(...a(t),e)}},59802:(e,t,r)=>{var n=r(77705)((function(e){return e[1]}));n.push([e.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: #f5f4f4;\n\tborder-radius: var(--maker-default-border-radius, 16px)\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n\t.ProgressBarContainer__cJD1.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tbackground-color: var(--bar-color);\n\tborder-radius: var(--maker-default-border-radius, 16px);\n\ttransition: width 100ms linear\n}\n.ProgressBar_aeQRL.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBar_aeQRL.shape_rounded_NBloK,\n\t.ProgressBar_aeQRL.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n",""]),n.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B"},e.exports=n},62716:(e,t,r)=>{var n=r(77705)((function(e){return e[1]}));n.push([e.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),n.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},e.exports=n},35820:(e,t,r)=>{var n=r(77705)((function(e){return e[1]}));n.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),n.locals={Theme:"Theme_rI2oH"},e.exports=n},3619:(e,t,r)=>{var n=r(59802);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,r(54023).Z)("2b496f20",n,!0,{})},7493:(e,t,r)=>{var n=r(62716);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,r(54023).Z)("8cb0142e",n,!0,{})},35004:(e,t,r)=>{var n=r(35820);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,r(54023).Z)("12fe2849",n,!0,{})}}]);