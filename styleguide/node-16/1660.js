(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1660],{89507:(e,a,t)=>{"use strict";t.d(a,{v:()=>o});var n=t(46010),r=t(27060);const s={inject:{theme:{default:(0,n.uH)(),from:n.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},size:{type:String,default:void 0,validator:e=>["xsmall","small","medium","large"].includes(e)},shape:{type:String,default:void 0,validator:e=>["squared","rounded","pill"].includes(e)},color:{type:String,default:void 0,validator:(0,r.Z)("color")},progress:{type:Number,default:0,validator:e=>e>=0&&e<=100}},computed:{...(0,n.C9)("progressbar",["pattern","color","size","shape"]),barStyles(){return{"--bar-color":this.resolvedColor,"--fill-percent":"".concat(this.progress,"%")}}}};var i=t(3619),l=t.n(i);const o=(0,t(51900).Z)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",e._g(e._b({class:[e.$s.ProgressBarContainer,e.$s["size_"+e.resolvedSize],e.$s["shape_"+e.resolvedShape]],attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.progress}},"div",e.$attrs,!1),e.$listeners),[t("div",{class:[e.$s.ProgressBar,e.$s["shape_"+e.resolvedShape]],style:e.barStyles})])}),[],!1,(function(e){this.$s=l().locals||l()}),null,null).exports},70990:(e,a,t)=>{"use strict";t.d(a,{H:()=>o});var n=t(46010),r=t(27060);const s={inject:{theme:{default:(0,n.uH)(),from:n.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(e)},size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},fontFamily:{type:String,default:void 0,validator:(0,r.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,r.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,r.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,r.Z)("line-height")},color:{type:String,default:void 0,validator:(0,r.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,r.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,r.Z)("text-transform")},textAlign:{type:String,default:void 0,validator:(0,r.Z)("text-align")}},computed:{...(0,n.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:e}=this.theme,a={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":e.baseSize,"--mobile-font-size-scale":e.sizeScale};return"inherit"!==this.resolvedFontFamily&&(a.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(a.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(a.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(a.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(a.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(a.textAlign=this.resolvedTextAlign),a}},render(e){const{$s:a,tag:t,sizeClass:n,inlineStyles:r}=this,s=this.$slots.default;return e(t,{class:[a.Text,a["size_".concat(n)]],attrs:this.$attrs,style:r,on:this.$listeners},s)}};var i=t(7493),l=t.n(i);const o=(0,t(51900).Z)(s,undefined,undefined,!1,(function(e){this.$s=l().locals||l()}),null,null).exports},27060:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=function(e){return function(a){return!t.g.CSS||t.g.CSS.supports(e,a)}}},59802:(e,a,t)=>{var n=t(77705)((function(e){return e[1]}));n.push([e.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-default-border-radius, 16px)\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n\t.ProgressBarContainer__cJD1.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tcolor: var(--bar-color);\n\tbackground-color: currentColor;\n\tborder-radius: var(--maker-default-border-radius, 16px);\n\ttransition: width 100ms linear\n}\n.ProgressBar_aeQRL.shape_squared_gzT9x {\n\t\tborder-radius: 0;\n}\n.ProgressBar_aeQRL.shape_rounded_NBloK,\n\t.ProgressBar_aeQRL.shape_pill_wddxw {\n\t\tborder-radius: 16px;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n",""]),n.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B"},e.exports=n},62716:(e,a,t)=>{var n=t(77705)((function(e){return e[1]}));n.push([e.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),n.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},e.exports=n},3619:(e,a,t)=>{var n=t(59802);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(54023).Z)("2b496f20",n,!0,{})},7493:(e,a,t)=>{var n=t(62716);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(54023).Z)("8cb0142e",n,!0,{})}}]);