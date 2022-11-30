(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[862],{2265:(n,t,e)=>{"use strict";e.d(t,{O:()=>f});var i=e(7060),a=e(2416),r=e(2606);const s={medium:"16px",large:"24px"},o={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)},color:{type:String,default:void 0,validator:(0,i.Z)("color")}},computed:{...(0,r.C9)("icon",["pattern","name","color"]),iconComponent(){const n=this.theme.icons[this.resolvedName];return a.Z.error(n,"'".concat(this.resolvedName,"' icon not defined in theme"),"Icon"),n},inlineStyles(){return{"--color":this.resolvedColor,"--icon-size":s[this.size]}}}};var l=e(3468),c=e.n(l);const f=(0,e(1900).Z)(o,(function(){var n=this,t=n.$createElement;return(n._self._c||t)(n.iconComponent,n._g(n._b({tag:"component",class:n.$s.Icon,style:n.inlineStyles},"component",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=c().locals||c()}),null,null).exports},9521:(n,t,e)=>{"use strict";e.d(t,{g:()=>s});const i={props:{size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)}}};var a=e(7531),r=e.n(a);const s=(0,e(1900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:n.$s.Loading},[e("svg",{class:[n.$s.Spinner,n.$s["size_"+n.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{class:[n.$s.Circle,n.$s["size_"+n.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports},990:(n,t,e)=>{"use strict";e.d(t,{H:()=>l});var i=e(2606),a=e(7060);const r={inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:n=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(n)},size:{type:Number,default:void 0,validator:n=>n>=-2&&n<=7},fontFamily:{type:String,default:void 0,validator:(0,a.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,a.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,a.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,a.Z)("line-height")},color:{type:String,default:void 0,validator:(0,a.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,a.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,a.Z)("text-transform")},textDecoration:{type:String,default:void 0,validator:(0,a.Z)("text-decoration")},textAlign:{type:String,default:void 0,validator:(0,a.Z)("text-align")}},computed:{...(0,i.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:n}=this.theme,t={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":n.baseSize,"--mobile-font-size-scale":n.sizeScale};return"inherit"!==this.resolvedFontFamily&&(t.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(t.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(t.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(t.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(t.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(t.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(t.textAlign=this.resolvedTextAlign),t}},render(n){const{$s:t,tag:e,sizeClass:i,inlineStyles:a}=this,r=this.$slots.default;return n(e,{class:[t.Text,t["size_".concat(i)]],attrs:this.$attrs,style:a,on:this.$listeners},r)}};var s=e(7493),o=e.n(s);const l=(0,e(1900).Z)(r,undefined,undefined,!1,(function(n){this.$s=o().locals||o()}),null,null).exports},2014:(n,t,e)=>{"use strict";e.d(t,{j:()=>f});var i=e(9152),a=e(9521),r=e(2606),s=e(2416);const o={components:{MLoading:a.g},inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:n=>["medium","large"].includes(n)},color:{type:String,default:void 0,validator:n=>(0,i.Vi)(n).isValid()},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},truncateText:{type:Boolean,default:!1}},computed:{...(0,r.C9)("textbutton",["pattern","size","color"]),style(){return{"--color":this.resolvedColor}},isDisabled(){return this.disabled||this.loading}},created(){s.Z.warn(this.$slots.default,"TextButton should be used with a label","TextButton")}};var l=e(5713),c=e.n(l);const f=(0,e(1900).Z)(o,(function(){var n,t,e=this,i=e.$createElement,a=e._self._c||i;return a("button",e._g(e._b({class:[e.$s.TextButton,e.$s["size_"+e.resolvedSize],(n={},n[e.$s.loading]=e.loading,n)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?a("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),a("span",{class:[e.$s.MainText,(t={},t[e.$s.TruncateText]=e.truncateText,t)]},[e._t("default")],2)],1)}),[],!1,(function(n){this.$s=c().locals||c()}),null,null).exports},2416:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var i=e(4219);const a={warn(n,t,e){n||(0,i.K)(t,e)},error(n,t,e){n||(0,i._)(t,e)}}},5745:(n,t,e)=>{var i=e(7705)((function(n){return n[1]}));i.push([n.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\t--color: inherit;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tcolor: var(--color);\n\tfill: currentColor;\n}\n",""]),i.locals={Icon:"Icon_vCfSe"},n.exports=i},9832:(n,t,e)=>{var i=e(7705)((function(n){return n[1]}));i.push([n.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_medium_Nb8A1 {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_medium_Nb8A1 {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),i.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_medium:"size_medium_Nb8A1",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},n.exports=i},2716:(n,t,e)=>{var i=e(7705)((function(n){return n[1]}));i.push([n.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),i.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},n.exports=i},4298:(n,t,e)=>{var i=e(7705)((function(n){return n[1]}));i.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable no-descending-specificity */\n.TextButton__xxoX {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tpadding: 0;\n\tcolor: var(--color, var(--maker-color-neutral-90, #1b1b1b));\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\ttext-align: inherit;\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\toutline-color: currentColor;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-in, opacity 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.TextButton__xxoX.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.TextButton__xxoX.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.TextButton__xxoX.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.TextButton__xxoX:hover:not(:disabled) {\n\t\topacity: 0.8;\n}\n.TextButton__xxoX.focus-visible_DBFHn {\n\t\tbox-shadow: 0 0 0 1px currentColor;\n}\n.TextButton__xxoX:disabled {\n\t\tcursor: initial\n}\n.TextButton__xxoX:disabled > * {\n\t\t\topacity: 0.5;\n}\n.TextButton__xxoX > .Loading_pd2rj {\n\t\topacity: 1;\n}\n.TextButton__xxoX.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color, var(--maker-color-neutral-90, #1b1b1b));\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1.5;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.TruncateText_QESOt {\n\t/* -webkit-box is supported by all modern browsers */\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 1;\n\t-webkit-box-orient: vertical;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\toverflow: hidden;\n\tline-height: 1.1 !important;\n\twhite-space: initial;\n\ttext-align: inherit;\n\ttext-overflow: ellipsis;\n\toverflow-wrap: anywhere;\n}\n\n",""]),i.locals={TextButton:"TextButton__xxoX",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA","focus-visible":"focus-visible_DBFHn",Loading:"Loading_pd2rj",loading:"loading_bNQgE",MainText:"MainText_qfj5z",TruncateText:"TruncateText_QESOt"},n.exports=i},3468:(n,t,e)=>{var i=e(5745);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);(0,e(4023).Z)("2a811eb5",i,!0,{})},7531:(n,t,e)=>{var i=e(9832);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);(0,e(4023).Z)("7ac45ae2",i,!0,{})},7493:(n,t,e)=>{var i=e(2716);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);(0,e(4023).Z)("8cb0142e",i,!0,{})},5713:(n,t,e)=>{var i=e(4298);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);(0,e(4023).Z)("49bbe38a",i,!0,{})}}]);