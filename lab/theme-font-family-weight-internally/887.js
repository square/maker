(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[887],{2252:(t,e,n)=>{"use strict";n.d(e,{g:()=>p,c:()=>v});var l=n(9915),o=n(7356),r=n(6475),i=n(771),a=n.n(i);const s=Symbol("ChoiceKey"),c={provide(){return{[s]:this.$data}},inject:{theme:{default:(0,l.uH)(),from:l.YH}},model:{prop:"selected",event:"choice:update"},props:{selected:{type:void 0,default:void 0},disabled:{type:Boolean,default:!1},mode:{type:String,default:"single-select",validator:t=>["single-select","multi-select"].includes(t)},selectedColor:{type:String,default:void 0,validator:t=>a().valid(t)}},data(){return{currentValue:this.selected,isMultiSelect:"multi-select"===this.mode}},computed:{...(0,l.C9)("choice",["selectedColor"]),contrastColor(){const t=this.resolvedSelectedColor,e=a()(t);return(0,r.Z)(e,"#fff")},disabledContrastColor(){return a()(this.contrastColor).alpha(.4)},style(){return this.resolvedSelectedColor?{"--selected-background-color":this.resolvedSelectedColor,"--selected-text-color":this.contrastColor,"--selected-disabled-text-color":this.disabledContrastColor}:{}}},watch:{selected(){this.validateProps(),this.currentValue=this.selected},currentValue(t){this.$emit("choice:update",t)}},created(){this.validateProps()},methods:{validateProps(){this.isMultiSelect&&o.Z.error(Array.isArray(this.selected),"The v-model value for a multi-select must be of type Array.")}}};var d=n(7426),u=n.n(d),h=n(1900);const p=(0,h.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Choice,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports;const f={inject:{controlState:s},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.isMultiSelect?this.controlState.currentValue.includes(this.value):this.controlState.currentValue===this.value}},methods:{selectSelf(){let t=this.value;if(this.controlState.isMultiSelect){const e=this.controlState.currentValue.slice();if(e.includes(t)){const n=1;e.splice(e.indexOf(t),n)}else e.push(t);t=e}this.controlState.currentValue=t}}};var b=n(6233),_=n.n(b);const v=(0,h.Z)(f,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("button",{class:[e.$s.ChoiceOption,(t={},t[e.$s.selected]=e.isSelected,t)],on:{click:e.selectSelf}},[e._t("default")],2)}),[],!1,(function(t){this.$s=_().locals||_()}),null,null).exports},5798:(t,e,n)=>{"use strict";n.d(e,{U:()=>d});var l=n(771),o=n.n(l),r=n(7356),i=n(9915);const a={inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)},bgColor:{type:String,default:void 0,validator:t=>o().valid(t)||"transparent"===t},color:{type:String,default:void 0,validator:t=>o().valid(t)}},computed:{...(0,i.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel}},mounted(){r.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter."),r.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter."),r.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.")}};var s=n(8187),c=n.n(s);const d=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g(t._b({class:[t.$s.Container,t.$s["size_"+t.size]],style:t.style},"section",t.$attrs,!1),t.$listeners),[n("header",{class:t.$s.Header},[t.hasLabel?n("div",{class:t.$s.Label},[t._t("label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.label)+"\n\t\t\t")]})),t._v(" "),t.hasSublabel?n("div",{class:t.$s.Sublabel},[t._t("sublabel",(function(){return[t._v("\n\t\t\t\t\t"+t._s(t.sublabel)+"\n\t\t\t\t")]}))],2):t._e()],2):t._e(),t._v(" "),t.hasRequirementLabel?n("div",{class:t.$s.RequirementLabel},[t._t("requirement-label",(function(){return[t._v("\n\t\t\t\t"+t._s(t.requirementLabel)+"\n\t\t\t")]}))],2):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},4232:(t,e,n)=>{"use strict";n.d(e,{j:()=>u});var l=n(771),o=n.n(l),r=n(9901),i=n(9915),a=n(7356);const s={components:{MLoading:r.g},inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["medium","large"].includes(t)},color:{type:String,default:void 0,validator:t=>o().valid(t)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{...(0,i.C9)("textbutton",["size","color"]),style(){return function(t){const e=t.color?o()(t.color):void 0;return{color:e?e.hex():void 0}}({color:this.resolvedColor})},isDisabled(){return this.disabled||this.loading}},created(){a.Z.warn(this.$slots.default,"TextButton should be used with a label")}};var c=n(5713),d=n.n(c);const u=(0,n(1900).Z)(s,(function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("button",e._g(e._b({class:[e.$s.TextButton,e.$s["size_"+e.resolvedSize],(t={},t[e.$s.loading]=e.loading,t)],style:e.style,attrs:{type:e.type,disabled:e.isDisabled}},"button",e.$attrs,!1),e.$listeners),[e.loading?l("m-loading",{class:e.$s.Loading}):e._e(),e._v(" "),l("span",{class:e.$s.MainText},[e._t("default")],2)],1)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},7051:(t,e,n)=>{var l=n(7705)((function(t){return t[1]}));l.push([t.id,"\n.Choice__xYdB {\n\t--font-size: 14px;\n\t--line-height: 24px;\n\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tfont-weight: var(--font-weight-label, 500);\n\tfont-size: var(--font-size);\n\tfont-family: var(--font-family-label, inherit);\n\tline-height: var(--line-height);\n}\n",""]),l.locals={Choice:"Choice__xYdB"},t.exports=l},2452:(t,e,n)=>{var l=n(7705)((function(t){return t[1]}));l.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tDefined in Choice component:\n\t--selected-background-color\n\t--selected-text-color\n\t--selected-disabled-text-color\n*/\n.ChoiceOption_JrUHk {\n\t--border-radius: 8px;\n\t--button-padding: 12px 24px;\n\n\tflex-shrink: 0;\n\tpadding: var(--button-padding);\n\tcolor: var(--neutral-90, #222);\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\ttext-align: left;\n\tbackground-color: var(--neutral-10, #f2f2f2);\n\tborder: none;\n\tborder-radius: var(--border-radius);\n\toutline: none;\n\tbox-shadow: var(--focus-border, 0 0);\n\tcursor: pointer\n}\n.ChoiceOption_JrUHk:not(:last-child) {\n\t\tmargin-right: 8px;\n}\n.ChoiceOption_JrUHk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--neutral-10, #fff),\n\t\t\t0 0 0 3px var(--neutral-20, rgba(0, 0, 0, 0.3));\n}\n.ChoiceOption_JrUHk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.selected_MLoDE {\n\tcolor: var(--selected-text-color, var(--neutral-10, #f1f1f1));\n\tbackground-color: var(--selected-background-color, var(--neutral-90, #222))\n}\n.selected_MLoDE:disabled {\n\t\tcolor: var(--selected-disabled-text-color, var(--neutral-20, #666));\n}\n",""]),l.locals={ChoiceOption:"ChoiceOption_JrUHk",selected:"selected_MLoDE"},t.exports=l},2971:(t,e,n)=>{var l=n(7705)((function(t){return t[1]}));l.push([t.id,"\n.Container_qgBQ0 {\n\tpadding: 16px 24px;\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-family: var(--font-family-paragraph, inherit);\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--neutral-90, inherit));\n\tfont-weight: var(--font-weight-title, 500);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-title, inherit);\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--neutral-80, inherit));\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-paragraph, inherit);\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-size: 14px;\n\tfont-family: var(--font-family-paragraph, inherit);\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),l.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},t.exports=l},4298:(t,e,n)=>{var l=n(7705)((function(t){return t[1]}));l.push([t.id,"\n.TextButton__xxoX {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--neutral-90);\n\tfont-weight: var(--font-weight-label, 500);\n\tfont-family: var(--font-family-label, inherit);\n\tvertical-align: middle;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 4px;\n\toutline-color: currentColor;\n\tcursor: pointer;\n\ttransition: box-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.TextButton__xxoX.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.TextButton__xxoX.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.TextButton__xxoX.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.TextButton__xxoX:active,\n\t.TextButton__xxoX:focus {\n\t\tbox-shadow: 0 0 0 1px currentColor;\n}\n.TextButton__xxoX:disabled {\n\t\tcursor: initial\n}\n.TextButton__xxoX:disabled > * {\n\t\t\topacity: 0.5;\n}\n.TextButton__xxoX.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--neutral-90);\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1.5;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),l.locals={TextButton:"TextButton__xxoX",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",loading:"loading_bNQgE",Loading:"Loading_pd2rj",MainText:"MainText_qfj5z"},t.exports=l},7426:(t,e,n)=>{var l=n(7051);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals);(0,n(4023).Z)("a6d1c446",l,!0,{})},6233:(t,e,n)=>{var l=n(2452);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals);(0,n(4023).Z)("54d35d07",l,!0,{})},8187:(t,e,n)=>{var l=n(2971);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals);(0,n(4023).Z)("a829cb1e",l,!0,{})},5713:(t,e,n)=>{var l=n(4298);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.id,l,""]]),l.locals&&(t.exports=l.locals);(0,n(4023).Z)("49bbe38a",l,!0,{})}}]);