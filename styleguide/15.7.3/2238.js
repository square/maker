(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2238],{62238:(t,e,n)=>{"use strict";n.d(e,{G:()=>u});var r=n(27060),o=n(16765),a=n(46475),i=n(67674),s=n(69901),l=n(46010),d=n(70990);function v(t,e){const n=(0,o.Vi)(t.color),r=t.colorHover?(0,o.Vi)(t.colorHover):n,i=t.textColor||(0,a.mj)(t.color,t.textColor),s=!t.textColorHover&&t.colorHover?(0,a.mj)(t.colorHover,t.textColor):t.textColorHover;let l;l="fill"===e?r.isDark()?"lighten":"darken":"alpha";const d=r[l](.08).toHex(),v=r[l](.16).toHex(),c=r.alpha(.3).toHex();return{"--color-main":t.color,"--color-main-hover":t.colorHover,"--color-contrast":i,"--color-contrast-hover":s,"--color-hover":d,"--color-active":v,"--color-focus":c,"--border-radius":t.borderRadius,"--border-radius-hover":t.borderRadiusHover||t.borderRadius,"--border-width":t.borderWidth,"--border-width-hover":t.borderWidthHover||t.borderWidth,"--border-color":t.borderColor,"--border-color-hover":t.borderColorHover||t.borderColor,"--box-shadow":t.boxShadow,"--box-shadow-hover":t.boxShadowHover||t.boxShadow}}const c={components:{MLoading:s.g,MText:d.H},inject:{theme:{default:(0,l.uH)(),from:l.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},tag:{type:String,default:"button",validator:t=>["button","a"].includes(t)},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},textPattern:{type:String,default:void 0},color:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},colorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},textColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},textColorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},variant:{type:String,default:void 0,validator:t=>["fill","outline","ghost"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},borderRadius:{type:String,default:void 0,validator:(0,r.Z)("border-radius")},borderRadiusHover:{type:String,default:void 0,validator:(0,r.Z)("border-radius")},borderWidth:{type:String,default:void 0,validator:(0,r.Z)("border-width")},borderWidthHover:{type:String,default:void 0,validator:(0,r.Z)("border-width")},borderColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},borderColorHover:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},boxShadow:{type:String,default:void 0,validator:(0,r.Z)("box-shadow")},boxShadowHover:{type:String,default:void 0,validator:(0,r.Z)("box-shadow")},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,l.C9)("button",["color","colorHover","size","textColor","textColorHover","textPattern","variant","shape","borderRadius","borderRadiusHover","align","fullWidth","pattern","borderWidth","borderWidthHover","borderColor","borderColorHover","boxShadow","boxShadowHover"]),style(){return{...v({color:this.resolvedColor,colorHover:this.resolvedColorHover,textColor:this.resolvedTextColor,textColorHover:this.resolvedTextColorHover,borderRadius:this.resolvedBorderRadius,borderRadiusHover:this.resolvedBorderRadiusHover,borderWidth:this.resolvedBorderWidth,borderWidthHover:this.resolvedBorderWidthHover,borderColor:this.resolvedBorderColor,borderColorHover:this.resolvedBorderColorHover,boxShadow:this.resolvedBoxShadow,boxShadowHover:this.resolvedBoxShadowHover},this.resolvedVariant)}},isDisabled(){return this.disabled||this.loading},fontSize(){var t;return(null===(t=this.theme.text.patterns[this.resolvedTextPattern])||void 0===t?void 0:t.fontSize)||"inherit"},adjustedSize(){const t=Number.parseInt(this.fontSize,i.U);if(t){const e=14;return t>24?"large":t>e?"medium":"small"}return this.resolvedSize}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var h=n(3441),f=n.n(h);const u=(0,n(51900).Z)(c,(function(){var t,e,n=this,r=n.$createElement,o=n._self._c||r;return o(n.tag,n._g(n._b({tag:"component",class:[n.$s.Button,n.$s["variant_"+n.resolvedVariant],n.$s["size_"+n.adjustedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild()&&!n.resolvedFullWidth,t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"component",n.$attrs,!1),n.$listeners),[n.loading?o("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),o("m-text",{class:[n.$s.MainText,(e={},e[n.$s.TruncateText]=!n.isSingleChild(),e)],attrs:{pattern:n.resolvedTextPattern,element:"span",color:"inherit"}},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?o("m-text",{class:[n.$s.InformationText,n.$s.TruncateText],attrs:{pattern:n.resolvedTextPattern,element:"span",color:"inherit"}},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=f().locals||f()}),null,null).exports},70990:(t,e,n)=>{"use strict";n.d(e,{H:()=>l});var r=n(46010),o=n(27060);const a={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0,validator:(0,o.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,o.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,o.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,o.Z)("line-height")},color:{type:String,default:void 0,validator:(0,o.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,o.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,o.Z)("text-transform")},textDecoration:{type:String,default:void 0,validator:(0,o.Z)("text-decoration")},textAlign:{type:String,default:void 0,validator:(0,o.Z)("text-align")}},computed:{...(0,r.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme,e={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale};return"inherit"!==this.resolvedFontFamily&&(e.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(e.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(e.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(e.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(e.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(e.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(e.textAlign=this.resolvedTextAlign),e}},render(t){const{$s:e,tag:n,sizeClass:r,inlineStyles:o}=this,a=this.$slots.default;return t(n,{class:[e.Text,e["size_".concat(r)]],attrs:this.$attrs,style:o,on:this.$listeners},a)}};var i=n(7493),s=n.n(i);const l=(0,n(51900).Z)(a,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports},67674:(t,e,n)=>{"use strict";n.d(e,{U:()=>r});const r=10},27060:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=function(t){return function(e){return!n.g.CSS||n.g.CSS.supports(t,e)}}},20758:(t,e,n)=>{var r=n(77705)((function(t){return t[1]}));r.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, #fff);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main, var(--maker-color-primary, #006aff));\n\tborder: none;\n\tborder-radius: var(--border-radius, var(--maker-shape-button-border-radius, 4px));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--border, 0 0),\n\t\tvar(--box-shadow, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tfilter 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in,\n\t\tborder-radius 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n\t\tjustify-content: center\n}\n.Button_vQBWk.align_stack_XfpCI > * {\n\t\t\tline-height: 1.1;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #d3d3d3),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover, var(--color-contrast));\n\t\tbackground-color: var(--color-hover);\n\t\tborder-radius: var(--border-radius-hover, var(--maker-shape-button-border-radius, 4px));\n\t\tbox-shadow:\n\t\t\tvar(--border-hover, 0 0),\n\t\t\tvar(--box-shadow-hover, 0 0),\n\t\t\tvar(--focus-border, 0 0);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tbackground-color: var(--color-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n\t\topacity: 1;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n}\n\n/* Variants */\n.Button_vQBWk.variant_fill_wcHKQ,\n.Button_vQBWk.variant_outline_X_B6s {\n\t--small-padding: 0 16px;\n\t--medium-padding: 0 24px;\n\t--large-padding: 0 32px;\n}\n.Button_vQBWk.variant_fill_wcHKQ .Loading_LttwZ {\n\tcolor: var(--color-contrast);\n}\n.Button_vQBWk.variant_fill_wcHKQ {\n\t--border: inset 0 0 0 var(--border-width, 1px) var(--border-color);\n\t--border-hover: inset 0 0 0 var(--border-width-hover, 1px) var(--border-color-hover);\n}\n.Button_vQBWk.variant_outline_X_B6s {\n\t--border: inset 0 0 0 var(--border-width, 1px) var(--color-main);\n\t--border-hover:\n\t\tinset 0 0 0 var(--border-width-hover, 1px)\n\t\tvar(--color-main-hover, var(--color-main));\n}\n.Button_vQBWk.variant_ghost_es_jw {\n\t--small-padding: 0 8px;\n\t--medium-padding: 0 12px;\n\t--large-padding: 0 20px;\n\t--box-shadow: 0 !important;\n\t--box-shadow-hover: 0 !important;\n}\n.Button_vQBWk.variant_outline_X_B6s,\n.Button_vQBWk.variant_ghost_es_jw {\n\tcolor: var(--color-main);\n\tbackground-color: transparent\n}\n.Button_vQBWk.variant_outline_X_B6s .Loading_LttwZ, .Button_vQBWk.variant_ghost_es_jw .Loading_LttwZ {\n\t\tcolor: var(--color-main);\n}\n.Button_vQBWk.variant_outline_X_B6s:hover:not(:disabled), .Button_vQBWk.variant_ghost_es_jw:hover:not(:disabled) {\n\t\tcolor: var(--color-main-hover, var(--color-main));\n}\n.MainText_DK0_A {\n\tgrid-gap: 8px;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n}\n.iconButton_u2Q6y .MainText_DK0_A {\n\tdisplay: flex;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\topacity: 0.6;\n}\n.TruncateText_O_pqx {\n\t/* -webkit-box is supported by all modern browsers */\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\n\t/* cancels out padding-bottom below */\n\tmargin-bottom: -0.5em !important;\n\n\t/* https://stackoverflow.com/a/64039674/2766908 */\n\tpadding-bottom: 0.5em !important;\n\toverflow: hidden;\n\tline-height: 1.1 !important;\n\ttext-overflow: ellipsis\n\n\t/* stylelint-disable-next-line no-descending-specificity */\n}\n.TruncateText_O_pqx > * {\n\t\tvertical-align: bottom;\n}\n.align_stack_XfpCI .TruncateText_O_pqx {\n\t-webkit-line-clamp: 1;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),r.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",variant_fill:"variant_fill_wcHKQ",variant_outline:"variant_outline_X_B6s",variant_ghost:"variant_ghost_es_jw",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J",TruncateText:"TruncateText_O_pqx"},t.exports=r},62716:(t,e,n)=>{var r=n(77705)((function(t){return t[1]}));r.push([t.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),r.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=r},3441:(t,e,n)=>{var r=n(20758);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(54023).Z)("180e274e",r,!0,{})},7493:(t,e,n)=>{var r=n(62716);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(54023).Z)("8cb0142e",r,!0,{})}}]);