(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1522],{71522:(t,o,n)=>{"use strict";n.d(o,{G:()=>g});var e=n(95573),r=n.n(e),i=n(27060),a=n(9152),d=n(46475),l=n(67674),s=n(49414),v=n(86812);function u(t,o){const n=(0,a.Vi)(t.color),e=t.colorHover?(0,a.Vi)(t.colorHover):n,r=t.textColor||(0,d.mj)(t.color,t.textColor),i=!t.textColorHover&&t.colorHover?(0,d.mj)(t.colorHover,t.textColor):t.textColorHover;let l;l="fill"===o?e.isDark()?"lighten":"darken":"alpha";const s=t.colorHover&&"fill"===o?t.colorHover:e[l](.08).toHex(),v=e[l](.16).toHex(),u=e.alpha(.3).toHex();return{"--color-main":t.color,"--color-main-hover":t.colorHover,"--color-contrast":r,"--color-contrast-hover":i,"--color-hover":s,"--color-active":v,"--color-focus":u,"--border-radius":t.borderRadius,"--border-radius-hover":t.borderRadiusHover||t.borderRadius,"--border-width":t.borderWidth,"--border-width-hover":t.borderWidthHover||t.borderWidth,"--border-color":t.borderColor,"--border-color-hover":t.borderColorHover||t.borderColor,"--box-shadow":t.boxShadow,"--box-shadow-hover":t.boxShadowHover||t.boxShadow}}const c=new Set(["fontFamily","fontWeight","fontSize","fontStyle","textTransform","textDecoration","letterSpacing"]);function _(t,o){return!n.g.CSS||n.g.CSS.supports(t,o)}function h(t,o,n){const e={};for(const[i,a]of Object.entries(o)){const o=r()(i);c.has(i)&&_(o,a)&&(e["--".concat(o).concat(n)]=t.resolve(a))}return e}const p={components:{MLoading:s.g},inject:{theme:{default:(0,v.uH)(),from:v.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},variant:{type:String,default:void 0,validator:t=>["fill","outline","ghost"].includes(t)},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},textColor:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},fullWidth:{type:Boolean,default:void 0},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},tag:{type:String,default:"button",validator:t=>["button","a"].includes(t)},type:{type:String,default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},textPattern:{type:String,default:void 0},textPatternHover:{type:String,default:void 0},colorHover:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},textColorHover:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},borderRadius:{type:String,default:void 0,validator:(0,i.Z)("border-radius")},borderRadiusHover:{type:String,default:void 0,validator:(0,i.Z)("border-radius")},borderWidth:{type:String,default:void 0,validator:(0,i.Z)("border-width")},borderWidthHover:{type:String,default:void 0,validator:(0,i.Z)("border-width")},borderColor:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},borderColorHover:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},boxShadow:{type:String,default:void 0,validator:(0,i.Z)("box-shadow")},boxShadowHover:{type:String,default:void 0,validator:(0,i.Z)("box-shadow")}},computed:{...(0,v.C9)("button",["color","colorHover","size","textColor","textColorHover","textPattern","textPatternHover","variant","shape","borderRadius","borderRadiusHover","align","fullWidth","pattern","borderWidth","borderWidthHover","borderColor","borderColorHover","boxShadow","boxShadowHover"]),style(){var t,o,n;const e={color:this.resolvedColor,colorHover:this.resolvedColorHover,textColor:this.resolvedTextColor,textColorHover:this.resolvedTextColorHover,borderRadius:this.resolvedBorderRadius,borderRadiusHover:this.resolvedBorderRadiusHover,borderWidth:this.resolvedBorderWidth,borderWidthHover:this.resolvedBorderWidthHover,borderColor:this.resolvedBorderColor,borderColorHover:this.resolvedBorderColorHover,boxShadow:this.resolvedBoxShadow,boxShadowHover:this.resolvedBoxShadowHover},{resolvedTextPattern:r,resolvedTextPatternHover:i,theme:a}=this,d=(null==a||null===(t=a.text)||void 0===t||null===(o=t.patterns)||void 0===o?void 0:o[r])||{},l=(null===(n=a.text.patterns)||void 0===n?void 0:n[i])||{},s=h(a,d,""),v=h(a,l,"-hover");return{...u(e,this.resolvedVariant),...s,...v}},isDisabled(){return this.disabled||this.loading},fontSize(){var t;return null===(t=this.theme.text.patterns[this.resolvedTextPattern])||void 0===t?void 0:t.fontSize},adjustedSize(){const t=Number.parseInt(this.fontSize,l.U);if(t){const o=14;return t>24?"large":t>o?"medium":"small"}return this.resolvedSize}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var f=n(3441),b=n.n(f);const g=(0,n(51900).Z)(p,(function(){var t,o,n=this,e=n.$createElement,r=n._self._c||e;return r(n.tag,n._g(n._b({tag:"component",class:[n.$s.Button,n.$s["variant_"+n.resolvedVariant],n.$s["size_"+n.adjustedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild()&&!n.resolvedFullWidth,t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"component",n.$attrs,!1),n.$listeners),[n.loading?r("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),r("span",{class:[n.$s.MainText,(o={},o[n.$s.TruncateText]=!n.isSingleChild(),o)]},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?r("span",{class:[n.$s.InformationText,n.$s.TruncateText]},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},67674:(t,o,n)=>{"use strict";n.d(o,{U:()=>e});const e=10},20758:(t,o,n)=>{var e=n(77705)((function(t){return t[1]}));e.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\t--border-radius: var(--maker-shape-button-border-radius, 4px);\n\t--color-main: var(--maker-color-primary, #006aff);\n\t--font-family: var(--maker-font-label-font-family, inherit);\n\t--font-weight: var(--maker-font-label-font-weight, 500);\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, #fff);\n\tfont-weight: var(--font-weight);\n\tfont-size: var(--font-size);\n\tfont-family: var(--font-family);\n\tfont-style: var(--font-style);\n\tletter-spacing: var(--letter-spacing);\n\ttext-transform: var(--text-transform);\n\t-webkit-text-decoration: var(--text-decoration);\n\t        text-decoration: var(--text-decoration);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: var(--border-radius);\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--border, 0 0),\n\t\tvar(--box-shadow, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tfilter 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in,\n\t\tborder-radius 0.2s ease-in,\n\t\tfont-size 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0,\n\t.Button_vQBWk.shape_squared_IPrN0:hover:not(:disabled) {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1,\n\t.Button_vQBWk.shape_rounded_UM3O1:hover:not(:disabled) {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0,\n\t.Button_vQBWk.shape_pill_aYEm0:hover:not(:disabled) {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\t--font-size: 12px;\n\n\t\theight: 32px;\n\t\tpadding: var(--small-padding)\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\t--font-size: 14px;\n\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding)\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\t--font-size: 16px;\n\n\t\theight: 64px;\n\t\tpadding: var(--large-padding)\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n\t\tjustify-content: center\n}\n.Button_vQBWk.align_stack_XfpCI > * {\n\t\t\tline-height: 1.1;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #d3d3d3),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover, var(--color-contrast));\n\t\tfont-weight: var(--font-weight-hover, var(--font-weight));\n\t\tfont-size: var(--font-size-hover, var(--font-size));\n\t\tfont-family: var(--font-family-hover, var(--font-family));\n\t\tfont-style: var(--font-style-hover, var(--font-style));\n\t\ttext-transform: var(--text-transform-hover, var(--text-transform));\n\t\t-webkit-text-decoration: var(--text-decoration-hover, var(--text-decoration));\n\t\t        text-decoration: var(--text-decoration-hover, var(--text-decoration));\n\t\tbackground-color: var(--color-hover);\n\t\tborder-radius: var(--border-radius-hover, var(--border-radius));\n\t\tbox-shadow:\n\t\t\tvar(--border-hover, 0 0),\n\t\t\tvar(--box-shadow-hover, 0 0),\n\t\t\tvar(--focus-border, 0 0);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tbackground-color: var(--color-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n\t\topacity: 1;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n}\n\n/* Variants */\n.Button_vQBWk.variant_fill_wcHKQ,\n.Button_vQBWk.variant_outline_X_B6s {\n\t--small-padding: 0 16px;\n\t--medium-padding: 0 24px;\n\t--large-padding: 0 32px;\n}\n.Button_vQBWk.variant_fill_wcHKQ .Loading_LttwZ {\n\tcolor: var(--color-contrast);\n}\n.Button_vQBWk.variant_fill_wcHKQ {\n\t--border: inset 0 0 0 var(--border-width, 1px) var(--border-color);\n\t--border-hover: inset 0 0 0 var(--border-width-hover, 1px) var(--border-color-hover);\n}\n.Button_vQBWk.variant_outline_X_B6s {\n\t--border: inset 0 0 0 var(--border-width, 1px) var(--color-main);\n\t--border-hover:\n\t\tinset 0 0 0 var(--border-width-hover, 1px)\n\t\tvar(--color-main-hover, var(--color-main));\n}\n.Button_vQBWk.variant_ghost_es_jw {\n\t--small-padding: 0 8px;\n\t--medium-padding: 0 12px;\n\t--large-padding: 0 20px;\n\t--box-shadow: 0 !important;\n\t--box-shadow-hover: 0 !important;\n}\n.Button_vQBWk.variant_outline_X_B6s,\n.Button_vQBWk.variant_ghost_es_jw {\n\tcolor: var(--color-main);\n\tbackground-color: transparent\n}\n.Button_vQBWk.variant_outline_X_B6s .Loading_LttwZ, .Button_vQBWk.variant_ghost_es_jw .Loading_LttwZ {\n\t\tcolor: var(--color-main);\n}\n.Button_vQBWk.variant_outline_X_B6s:hover:not(:disabled), .Button_vQBWk.variant_ghost_es_jw:hover:not(:disabled) {\n\t\tcolor: var(--color-main-hover, var(--color-main));\n}\n.MainText_DK0_A {\n\tgrid-gap: 8px;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tpadding-left: var(--letter-spacing);\n}\n.iconButton_u2Q6y .MainText_DK0_A {\n\tdisplay: flex;\n}\n.InformationText_djO_J {\n\tflex: 0 0 fit-content;\n\tpadding-left: var(--letter-spacing);\n\topacity: 0.6;\n}\n.TruncateText_O_pqx {\n\t/* -webkit-box is supported by all modern browsers */\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\n\t/* cancels out padding-bottom below */\n\tmargin-bottom: -0.5em !important;\n\n\t/* https://stackoverflow.com/a/64039674/2766908 */\n\tpadding-bottom: 0.5em !important;\n\toverflow: hidden;\n\tline-height: 1.1 !important;\n\ttext-overflow: ellipsis\n\n\t/* stylelint-disable-next-line no-descending-specificity */\n}\n.TruncateText_O_pqx > * {\n\t\tvertical-align: bottom;\n}\n.align_stack_XfpCI .TruncateText_O_pqx {\n\t-webkit-line-clamp: 1;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),e.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",variant_fill:"variant_fill_wcHKQ",variant_outline:"variant_outline_X_B6s",variant_ghost:"variant_ghost_es_jw",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J",TruncateText:"TruncateText_O_pqx"},t.exports=e},3441:(t,o,n)=>{var e=n(20758);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,n(54023).Z)("180e274e",e,!0,{})}}]);