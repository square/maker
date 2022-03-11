(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[72],{33216:function(t,e,n){"use strict";n.d(e,{b:function(){return a}});var i={inheritAttrs:!1,props:{size:{type:Number,default:0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},stringSize(){return this.size>=0?this.size.toString():`minus-${Math.abs(this.size)}`}},render(t){const{$s:e,stringSize:n,tag:i}=this;return t(i,{class:[e.Heading,e[`size_${n}`]],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}},s=n(71491),o=n.n(s);var a=(0,n(51900).Z)(i,undefined,undefined,!1,(function(t){this.$s=o().locals||o()}),null,null).exports},64551:function(t,e,n){"use strict";n.d(e,{x6:function(){return l},nI:function(){return d},Pj:function(){return w},UJ:function(){return i}});var i=Symbol("modalApiKey"),s={name:"Modal",inject:{modalApi:i},props:{beforeClose:{type:Function,required:!1,default:void 0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},o=n(75027),a=n.n(o),r=n(51900);var l=(0,r.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Modal},[t._t("default")],2)}),[],!1,(function(t){this.$s=a().locals||a()}),null,null).exports,h=n(27818),c=n.n(h);var d=(0,r.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,f=n(21931),p=n(27062),u=n(13555),v=n.n(u),_=n(79082),z=n(77458),g=n(31838),m=n(45832);const M={inject:{currentLayer:{default:void 0,from:i}},provide(){const t=this,e={state:f.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const i=e(t.$createElement);return this.state.vnode=i,this.state.options=n,()=>{this.state.vnode===i&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.popoverApi.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[i]:e}}};var y={name:"ModalLayer",components:{V:p.Z,PseudoWindow:v(),MTransitionFadeIn:_.j,MTransitionResponsive:g.w,MPopoverLayer:z.M3},mixins:[M,z.M3.popoverMixin],inheritAttrs:!1,apiMixin:M,data(){let t=m.rG,e=m.cT;return this.currentLayer.state.isStacked&&(t=m.iM,e=m.cT),{transitions:[{minWidth:m.iu,enter:m.vn,leave:m.w0},{minWidth:m.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=m.OE,n=!e,i=!!t.modalApi.state.vnode,s=!i,o=this.$refs.baseModalLayer;o&&(e&&i?(0,m.vq)({element:o}):e&&s?(0,m.s4)({element:o}):n&&i?setTimeout((()=>{o.style.opacity="0%"}),m.AT):n&&s&&o.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},x=n(95189),b=n.n(x);var w=(0,r.Z)(y,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.$s.Layer},[i("m-transition-fade-in",[e.currentLayer.state.vnode?i("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),i("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?i("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[i("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),i("div",{ref:"modal",class:e.$s.Container},[i("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1),e._v(" "),i("m-popover-layer")],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?i("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=b().locals||b()}),null,null).exports},72630:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=i},58856:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),i.locals={Modal:"Modal_lWZo9"},t.exports=i},619:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),i.locals={ModalContent:"ModalContent_EYuNB"},t.exports=i},16851:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),i.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=i},71491:function(t,e,n){var i=n(72630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("ceb27898",i,!0,{})},75027:function(t,e,n){var i=n(58856);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("092310f5",i,!0,{})},27818:function(t,e,n){var i=n(619);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("179c170a",i,!0,{})},95189:function(t,e,n){var i=n(16851);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("7fc46ffb",i,!0,{})}}]);