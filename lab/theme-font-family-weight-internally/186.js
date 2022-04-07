(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[186],{7253:(t,e,n)=>{"use strict";n.d(e,{G:()=>v});var o=n(771),i=n.n(o),l=n(9901),r=n(9915),a=n(6475);function s(t){return t.alpha(.3)}function c(t){return i().mix(t,"#000",.05)}function d(t){return i().mix(t,"#000",.1)}const u={primary:function(t){const e=i()(t.color),n=c(e),o=d(e),l=t.textColor?i()(t.textColor):void 0,r=(0,a.Z)(e,l),u=c(r),h=d(r),p=s(e);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":e.hex(),"--color-main-hover":n.hex(),"--color-main-active":o.hex(),"--color-contrast":r.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":h.hex(),"--color-focus":p.hex()}},secondary:function(t){const e=i()(t.color),n=c(e),o=d(e),l=s(e);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":e.hex(),"--color-contrast-hover":n.hex(),"--color-contrast-active":o.hex(),"--color-focus":l.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const e=i()(t.color),n=c(e),o=d(e),l=s(e);return{"--small-padding":"0 8px","--medium-padding":"0 12px","--large-padding":"0 20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":e.hex(),"--color-contrast-hover":n.hex(),"--color-contrast-active":o.hex(),"--color-focus":l.hex()}}},h={components:{MLoading:l.g},inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>i().valid(t)},textColor:{type:String,default:void 0,validator:t=>i().valid(t)},variant:{type:String,default:void 0},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,r.C9)("button",["color","size","textColor","variant","shape","align","fullWidth"]),style(){return u[this.resolvedVariant]({color:this.resolvedColor,textColor:this.resolvedTextColor})},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var p=n(3441),_=n.n(p);const v=(0,n(1900).Z)(h,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",e._g(e._b({class:[e.$s.Button,e.$s["size_"+e.resolvedSize],e.$s["shape_"+e.resolvedShape],e.$s["align_"+e.resolvedAlign],(t={},t[e.$s.fullWidth]=e.resolvedFullWidth,t[e.$s.iconButton]=e.isSingleChild()&&!e.resolvedFullWidth,t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?o("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),o("span",{class:e.$s.MainText},[e._t("default")],2),e._v(" "),e.$scopedSlots.information?o("span",{class:e.$s.InformationText},[e._t("information")],2):e._e()],1)}),[],!1,(function(t){this.$s=_().locals||_()}),null,null).exports},2252:(t,e,n)=>{"use strict";n.d(e,{g:()=>p,c:()=>g});var o=n(9915),i=n(7356),l=n(6475),r=n(771),a=n.n(r);const s=Symbol("ChoiceKey"),c={provide(){return{[s]:this.$data}},inject:{theme:{default:(0,o.uH)(),from:o.YH}},model:{prop:"selected",event:"choice:update"},props:{selected:{type:void 0,default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"single-select",validator:t=>["single-select","multi-select"].includes(t)},selectedColor:{type:String,default:void 0,validator:t=>a().valid(t)}},data(){return{currentValue:this.selected,isMultiSelect:"multi-select"===this.mode}},computed:{...(0,o.C9)("choice",["selectedColor"]),contrastColor(){const t=this.resolvedSelectedColor,e=a()(t);return(0,l.Z)(e,"#fff")},disabledContrastColor(){return a()(this.contrastColor).alpha(.4)},style(){return this.resolvedSelectedColor?{"--selected-background-color":this.resolvedSelectedColor,"--selected-text-color":this.contrastColor,"--selected-disabled-text-color":this.disabledContrastColor}:{}}},watch:{selected(){this.validateProps(),this.currentValue=this.selected},currentValue(t){this.$emit("choice:update",t)}},created(){this.validateProps()},methods:{validateProps(){this.isMultiSelect&&i.Z.error(Array.isArray(this.selected),"The v-model value for a multi-select must be of type Array.")}}};var d=n(7426),u=n.n(d),h=n(1900);const p=(0,h.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Choice,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports;const _={inject:{controlState:s},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.isMultiSelect?this.controlState.currentValue.includes(this.value):this.controlState.currentValue===this.value}},methods:{selectSelf(){let t=this.value;if(this.controlState.isMultiSelect){const e=this.controlState.currentValue.slice();if(e.includes(t)){const n=1;e.splice(e.indexOf(t),n)}else e.push(t);t=e}this.controlState.currentValue=t}}};var v=n(6233),f=n.n(v);const g=(0,h.Z)(_,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("button",{class:[e.$s.ChoiceOption,(t={},t[e.$s.selected]=e.isSelected,t)],on:{click:e.selectSelf}},[e._t("default")],2)}),[],!1,(function(t){this.$s=f().locals||f()}),null,null).exports},5798:(t,e,n)=>{"use strict";n.d(e,{U:()=>d});var o=n(771),i=n.n(o),l=n(7356),r=n(9915);const a={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},bgColor:{type:String,default:void 0,validator:t=>i().valid(t)||"transparent"===t},color:{type:String,default:void 0,validator:t=>i().valid(t)}},computed:{...(0,r.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){l.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),l.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),l.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}};var s=n(8187),c=n.n(s);const d=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g(t._b({class:[t.$s.Container,t.$s["size_"+t.size]],style:t.style},"section",t.$attrs,!1),t.$listeners),[n("header",{class:t.$s.Header},[t.hasLabel?n("div",{class:t.$s.Label},[t._t("label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]})),t._v(" "),t.hasSublabel?n("div",{class:t.$s.Sublabel},[t._t("sublabel",(function(){return[t._v("\n\t\t\t\t\t"+t._s(t.sublabel)+"\n\t\t\t\t")]}))],2):t._e()],2):t._e(),t._v(" "),t.hasRequirementLabel?n("div",{class:t.$s.RequirementLabel},[t._t("requirement-label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.requirementLabel)+"\n\t\t\t")]}))],2):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},758:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Button_vQBWk {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: var(--font-weight-label, 500);\n\tfont-family: var(--font-family-label, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: 32px;\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),o.locals={Button:"Button_vQBWk",shape_pill:"shape_pill_aYEm0",shape_squared:"shape_squared_IPrN0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=o},7051:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Choice__xYdB {\n\t--font-size: 14px;\n\t--line-height: 24px;\n\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tfont-weight: var(--font-weight-label, 500);\n\tfont-size: var(--font-size);\n\tfont-family: var(--font-family-label, inherit);\n\tline-height: var(--line-height);\n}\n",""]),o.locals={Choice:"Choice__xYdB"},t.exports=o},2452:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tDefined in Choice component:\n\t--selected-background-color\n\t--selected-text-color\n\t--selected-disabled-text-color\n*/\n.ChoiceOption_JrUHk {\n\t--border-radius: 8px;\n\t--button-padding: 12px 24px;\n\n\tflex-shrink: 0;\n\tpadding: var(--button-padding);\n\tcolor: var(--neutral-90, #222);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\ttext-align: left;\n\tbackground-color: var(--neutral-10, #f2f2f2);\n\tborder: none;\n\tborder-radius: var(--border-radius);\n\toutline: none;\n\tbox-shadow: var(--focus-border, 0 0);\n\tcursor: pointer\n}\n.ChoiceOption_JrUHk:not(:last-child) {\n\t\tmargin-right: 8px;\n}\n.ChoiceOption_JrUHk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--neutral-10, #fff),\n\t\t\t0 0 0 3px var(--neutral-20, rgba(0, 0, 0, 0.3));\n}\n.ChoiceOption_JrUHk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.selected_MLoDE {\n\tcolor: var(--selected-text-color, var(--neutral-10, #f1f1f1));\n\tbackground-color: var(--selected-background-color, var(--neutral-90, #222))\n}\n.selected_MLoDE:disabled {\n\t\tcolor: var(--selected-disabled-text-color, var(--neutral-20, #666));\n}\n",""]),o.locals={ChoiceOption:"ChoiceOption_JrUHk",selected:"selected_MLoDE"},t.exports=o},2971:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Container_qgBQ0 {\n\tpadding: 16px 24px;\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-family: var(--font-family-paragraph, inherit);\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--neutral-90, inherit));\n\tfont-weight: var(--font-weight-title, 500);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-title, inherit);\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-paragraph, inherit);\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-paragraph, inherit);\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),o.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},t.exports=o},9186:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var o=n(5798),i=n(2252),l=n(7253);const r=[1,2,3,4,5],a={components:{MContainer:o.U,MChoice:i.g,MChoiceOption:i.c,MButton:l.G},data:()=>({selectedChoice:void 0,choices:r}),methods:{setToVal(t){this.selectedChoice=t}}};const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-container",[n("pre",[t._v("Selected Choice: "+t._s(t.selectedChoice))]),t._v(" "),n("m-choice",{model:{value:t.selectedChoice,callback:function(e){t.selectedChoice=e},expression:"selectedChoice"}},t._l(t.choices,(function(e){return n("m-choice-option",{key:e,attrs:{value:e}},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")])})),1),t._v(" "),n("br"),t._v(" "),n("m-button",{on:{click:function(e){return t.setToVal(4)}}},[t._v("\n\t\tSet to 4\n\t")])],1)}),[],!1,null,null,null).exports},3441:(t,e,n)=>{var o=n(758);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("180e274e",o,!0,{})},7426:(t,e,n)=>{var o=n(7051);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("a6d1c446",o,!0,{})},6233:(t,e,n)=>{var o=n(2452);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("54d35d07",o,!0,{})},8187:(t,e,n)=>{var o=n(2971);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("a829cb1e",o,!0,{})}}]);