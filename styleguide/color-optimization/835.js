(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[835],{58688:(t,n,e)=>{"use strict";e.d(n,{G:()=>d});var a=e(16765),i=e(46475),r=e(69901),o=e(37502);const s={components:{MLoading:r.g},inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},textColor:{type:String,default:void 0,validator:t=>(0,a.Vi)(t).isValid()},variant:{type:String,default:void 0,validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,o.C9)("button",["color","size","textColor","variant","shape","align","fullWidth","pattern"]),style(){return function(t,n){const e=(0,a.Vi)(t.color),r=(0,i.mj)(t.color,t.textColor);let o;o="primary"===n?e.isDark()?"lighten":"darken":"alpha";const s=e.alpha(.3).toHex(),l=e[o](.08).toHex(),c=e[o](.16).toHex();return{"--color-main":t.color,"--color-contrast":r,"--color-hover":l,"--color-active":c,"--color-focus":s}}({color:this.resolvedColor,textColor:this.resolvedTextColor},this.resolvedVariant)},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var l=e(3441),c=e.n(l);const d=(0,e(51900).Z)(s,(function(){var t,n=this,e=n.$createElement,a=n._self._c||e;return a("button",n._g(n._b({class:[n.$s.Button,n.$s["variant_"+n.resolvedVariant],n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild()&&!n.resolvedFullWidth,t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?a("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),a("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?a("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},98838:(t,n,e)=>{"use strict";e.d(n,{x6:()=>f,nI:()=>_,Pj:()=>M,UJ:()=>a});const a=Symbol("modalApiKey");var i=e(69792),r=e.n(i),o=e(16765),s=e(37502);const l={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0},c={name:"TouchCapture",props:{preventDefault:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...l}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:n}=this;return Math.abs(t)>Math.abs(n)?t<0?"up":"down":n<0?"left":"right"},gesture(){const{changeY:t,changeX:n}=this;return{changeX:n,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit("on-drag-".concat(this.direction),this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit("on-swipe-".concat(this.direction),this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(this.preventDefault&&t.preventDefault(),t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(l).forEach((([t,n])=>{this[t]=n}))}}};var d=e(51900);const u={name:"Modal",components:{MTouchCapture:(0,d.Z)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:a,theme:{default:(0,s.uH)(),from:s.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()},color:{type:String,default:void 0,validator:t=>(0,o.Vi)(t).isValid()}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:r()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,s.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}},scrollTop(){return this.$refs.modal&&this.$refs.modal.$el?this.$refs.modal.$el.scrollTop:0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.isScrolledToTop=this.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const n="translateY(".concat(t.changeY,"px)");this.modalStyles={transform:n,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const n=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>n?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}};var v=e(75027),h=e.n(v);const f=(0,d.Z)(u,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(n){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports;var p=e(27818),m=e.n(p);const _=(0,d.Z)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var g=e(21931),x=e(27062),y=e(13555),b=e.n(y),z=e(79082),S=e(31838),w=e(45832),B=e(16825);const k={inject:{currentLayer:{default:void 0,from:a}},provide(){const t=this,n={state:g.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(n,e={}){const a=n(t.$createElement);return this.state.vnode=a,this.state.options=e,()=>{this.state.vnode===a&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var n;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(n=t.popoverApi)||void 0===n||n.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=n),{[a]:n}}},T={name:"ModalLayer",components:{V:x.Z,PseudoWindow:b(),MTransitionFadeIn:z.j,MTransitionResponsive:S.w},mixins:[k],inject:{popoverApi:{from:B.y,default:void 0}},inheritAttrs:!1,apiMixin:k,data(){let t=w.rG,n=w.cT;return this.currentLayer.state.isStacked&&(t=w.iM,n=w.cT),{transitions:[{minWidth:w.iu,enter:w.vn,leave:w.w0},{minWidth:w.OE,enter:t,leave:n}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const n=window.innerWidth>=w.OE,e=!n,a=!!t.modalApi.state.vnode,i=!a,r=this.$refs.baseModalLayer;r&&(n&&a?(0,w.vq)({element:r}):n&&i?(0,w.s4)({element:r}):e&&a?setTimeout((()=>{r.style.opacity="0%"}),w.AT):e&&i&&r.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:n}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&n&&!e.contains(t.target)&&this.modalApi.close()}}};var C=e(95189),W=e.n(C);const M=(0,d.Z)(T,(function(){var t,n=this,e=n.$createElement,a=n._self._c||e;return a("div",{class:n.$s.Layer},[a("m-transition-fade-in",[n.currentLayer.state.vnode?a("div",{class:[n.$s.Translucent,(t={},t[n.$s.Transparent]=n.currentLayer.state.isStacked,t)]}):n._e()]),n._v(" "),a("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.currentLayer.state.vnode?a("div",{ref:"baseModalLayer",class:n.$s.ModalLayer,on:{"!click":function(t){return n.closeOnClickOutside.apply(null,arguments)}}},[a("pseudo-window",{class:n.$s.disableScroll,attrs:{body:""}}),n._v(" "),a("div",{ref:"modal",class:n.$s.Container},[a("v",{attrs:{nodes:n.currentLayer.state.vnode}})],1)],1):n._e()]),n._v(" "),n.currentLayer.state.vnode?a("modal-layer"):n._e()],1)}),[],!1,(function(t){this.$s=W().locals||W()}),null,null).exports},16825:(t,n,e)=>{"use strict";e.d(n,{f:()=>a,y:()=>i});const a=Symbol("PopoverConfig"),i=Symbol("PopoverLayer")},70990:(t,n,e)=>{"use strict";e.d(n,{H:()=>l});var a=e(37502),i=e(27060);const r={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0,validator:(0,i.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,i.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,i.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,i.Z)("line-height")},color:{type:String,default:void 0,validator:(0,i.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,i.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,i.Z)("text-transform")},textAlign:{type:String,default:void 0,validator:(0,i.Z)("text-align")}},computed:{...(0,a.C9)("text",["pattern","element","size","fontFamily","fontWeight","color","fontStyle","textTransform","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme,n={fontSize:this.fontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale};return"inherit"!==this.resolvedFontFamily&&(n.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(n.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(n.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(n.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(n.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextAlign&&(n.textAlign=this.resolvedTextAlign),n}},render(t){const{$s:n,tag:e,sizeClass:a,inlineStyles:i}=this,r=this.$slots.default;return t(e,{class:[n.Text,n["size_".concat(a)]],attrs:this.$attrs,style:i,on:this.$listeners},r)}};var o=e(7493),s=e.n(o);const l=(0,e(51900).Z)(r,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports},79082:(t,n,e)=>{"use strict";e.d(n,{j:()=>o});var a=e(39211),i=e(45832);const r={components:{MTransition:a.T},inheritAttrs:!1,data:()=>({fadeInFn:i.dx,fadeOutFn:i.vq})};const o=(0,e(51900).Z)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},27060:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});const a=function(t){return function(n){return!e.g.CSS||e.g.CSS.supports(t,n)}}},20758:(t,n,e)=>{var a=e(77705)((function(t){return t[1]}));a.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, #fff);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main, var(--maker-color-primary, #000));\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tfilter 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tbackground-color: var(--color-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tbackground-color: var(--color-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: transparent;\n}\n\n/* Variants */\n.Button_vQBWk.variant_primary_CoE7d,\n.Button_vQBWk.variant_secondary_nK9rR {\n\t--small-padding: 0 16px;\n\t--medium-padding: 0 24px;\n\t--large-padding: 0 32px;\n}\n.Button_vQBWk.variant_primary_CoE7d .Loading_LttwZ {\n\tcolor: var(--color-contrast);\n}\n.Button_vQBWk.variant_secondary_nK9rR {\n\t--outline-border: inset 0 0 0 1px var(--color-main);\n}\n.Button_vQBWk.variant_tertiary_vRAUt {\n\t--small-padding: 0 8px;\n\t--medium-padding: 0 12px;\n\t--large-padding: 0 20px;\n}\n.Button_vQBWk.variant_secondary_nK9rR,\n.Button_vQBWk.variant_tertiary_vRAUt {\n\tcolor: var(--color-main);\n\tbackground-color: transparent\n}\n.Button_vQBWk.variant_secondary_nK9rR .Loading_LttwZ, .Button_vQBWk.variant_tertiary_vRAUt .Loading_LttwZ {\n\t\tcolor: var(--color-main);\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),a.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",variant_primary:"variant_primary_CoE7d",variant_secondary:"variant_secondary_nK9rR",variant_tertiary:"variant_tertiary_vRAUt",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=a},58856:(t,n,e)=>{var a=e(77705)((function(t){return t[1]}));a.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: auto;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),a.locals={Modal:"Modal_lWZo9"},t.exports=a},619:(t,n,e)=>{var a=e(77705)((function(t){return t[1]}));a.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),a.locals={ModalContent:"ModalContent_EYuNB"},t.exports=a},16851:(t,n,e)=>{var a=e(77705)((function(t){return t[1]}));a.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--maker-color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),a.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=a},62716:(t,n,e)=>{var a=e(77705)((function(t){return t[1]}));a.push([t.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=a},3441:(t,n,e)=>{var a=e(20758);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(54023).Z)("180e274e",a,!0,{})},75027:(t,n,e)=>{var a=e(58856);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(54023).Z)("092310f5",a,!0,{})},27818:(t,n,e)=>{var a=e(619);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(54023).Z)("179c170a",a,!0,{})},95189:(t,n,e)=>{var a=e(16851);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(54023).Z)("7fc46ffb",a,!0,{})},7493:(t,n,e)=>{var a=e(62716);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,e(54023).Z)("8cb0142e",a,!0,{})}}]);