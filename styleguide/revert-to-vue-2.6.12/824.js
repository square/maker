(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[824],{3216:function(t,e,n){"use strict";n.d(e,{b:function(){return o}});var i={inheritAttrs:!1,props:{size:{type:Number,default:0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},stringSize(){return this.size>=0?this.size.toString():"minus-".concat(Math.abs(this.size))}},render(t){const{$s:e,stringSize:n,tag:i}=this;return t(i,{class:[e.Heading,e["size_".concat(n)]],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}},s=n(1491),a=n.n(s);var o=(0,n(1900).Z)(i,undefined,undefined,!1,(function(t){this.$s=a().locals||a()}),null,null).exports},3185:function(t,e,n){"use strict";n.d(e,{x6:function(){return l},nI:function(){return f},Pj:function(){return b},UJ:function(){return i}});var i=Symbol("modalApiKey"),s={name:"Modal",inject:{modalApi:i},props:{beforeClose:{type:Function,required:!1,default:void 0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},a=n(5027),o=n.n(a),r=n(1900);var l=(0,r.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.Modal},[t._t("default")],2)}),[],!1,(function(t){this.$s=o().locals||o()}),null,null).exports,h=n(7818),c=n.n(h);var f=(0,r.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,d=n(1931),p=n(7062),u=n(3555),_=n.n(u),v=n(9082),z=n(1838),g=n(5832);const m={inject:{currentLayer:{default:void 0,from:i}},provide(){const t=this,e={state:d.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const i=e(t.$createElement);return this.state.vnode=i,this.state.options=n,()=>{this.state.vnode===i&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[i]:e}}};var y={name:"ModalLayer",components:{V:p.Z,PseudoWindow:_(),MTransitionFadeIn:v.j,MTransitionResponsive:z.w},mixins:[m],inheritAttrs:!1,apiMixin:m,data(){let t=g.rG,e=g.cT;return this.currentLayer.state.isStacked&&(t=g.iM,e=g.cT),{transitions:[{minWidth:g.iu,enter:g.vn,leave:g.w0},{minWidth:g.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=g.OE,n=!e,i=!!t.modalApi.state.vnode,s=!i,a=this.$refs.baseModalLayer;a&&(e&&i?(0,g.vq)({element:a}):e&&s?(0,g.s4)({element:a}):n&&i?setTimeout((()=>{a.style.opacity="0%"}),g.AT):n&&s&&a.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},M=n(5189),x=n.n(M);var b=(0,r.Z)(y,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.$s.Layer},[i("m-transition-fade-in",[e.currentLayer.state.vnode?i("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),i("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?i("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside(t)}}},[i("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),i("div",{ref:"modal",class:e.$s.Container},[i("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?i("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports},990:function(t,e,n){"use strict";n.d(e,{H:function(){return o}});var i={inheritAttrs:!1,props:{element:{type:String,default:"p",validator:t=>["p","span"].includes(t)},size:{type:Number,default:0,validator:t=>t>=-1&&t<=1}},computed:{stringSize(){return this.size>=0?this.size.toString():"minus-".concat(Math.abs(this.size))}},render(t){const{$s:e,stringSize:n,element:i}=this,s=this.$slots.default;return t(i,{class:[e.Paragraph,e["size_".concat(n)]],attrs:this.$attrs,on:this.$listeners},s)}},s=n(7493),a=n.n(s);var o=(0,n(1900).Z)(i,undefined,undefined,!1,(function(t){this.$s=a().locals||a()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var i=n(9211),s=n(5832),a={components:{MTransition:i.T},inheritAttrs:!1,data:()=>({fadeInFn:s.dx,fadeOutFn:s.vq})},o=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},2630:function(t,e,n){var i=n(6738),s=n(7705)(i);s.push([t.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),s.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=s},8856:function(t,e,n){var i=n(6738),s=n(7705)(i);s.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),s.locals={Modal:"Modal_lWZo9"},t.exports=s},619:function(t,e,n){var i=n(6738),s=n(7705)(i);s.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),s.locals={ModalContent:"ModalContent_EYuNB"},t.exports=s},6851:function(t,e,n){var i=n(6738),s=n(7705)(i);s.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),s.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=s},2716:function(t,e,n){var i=n(6738),s=n(7705)(i);s.push([t.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Paragraph_zo1hq {\n\tfont-family: inherit;\n}\n.Paragraph_zo1hq.size_minus-1_EEwzY {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-ste-minus-1-line-height);\n}\n.Paragraph_zo1hq.size_0_W7uVy {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Paragraph_zo1hq.size_1_sEevC {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n",""]),s.locals={Paragraph:"Paragraph_zo1hq","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC"},t.exports=s},1491:function(t,e,n){var i=n(2630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("ceb27898",i,!0,{})},5027:function(t,e,n){var i=n(8856);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("092310f5",i,!0,{})},7818:function(t,e,n){var i=n(619);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("179c170a",i,!0,{})},5189:function(t,e,n){var i=n(6851);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("7fc46ffb",i,!0,{})},7493:function(t,e,n){var i=n(2716);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("8cb0142e",i,!0,{})}}]);