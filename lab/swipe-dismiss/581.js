(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[581],{5581:function(t,e,n){"use strict";n.d(e,{x6:function(){return u},Pj:function(){return x},UJ:function(){return s}});var s=Symbol("modalApiKey"),i=n(9792),a=n.n(i);var o={name:"TouchCapture",props:{minDragDistance:{type:Number,default:10},minDragDuration:{type:Number,default:100},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:400}},data(){return{touchStarted:!1,touchEnded:!1,clientXStart:void 0,clientYStart:void 0,clientXCurrent:void 0,clientYCurrent:void 0,timeStart:void 0,timeCurrent:void 0,touchEvent:a()(this.handleTouchEvent,10)}},computed:{timeElapsed(){const{timeStart:t,timeCurrent:e}=this;return t&&e?e-t:0},changeY(){const{clientYStart:t,clientYCurrent:e}=this;return t&&e?t-e:0},changeX(){const{clientXStart:t,clientXCurrent:e}=this;return t&&e?t-e:0},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t>0?"up":"down":e>0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isDragGesture(){const{timeElapsed:t,changeY:e,changeX:n,minDragDuration:s,minDragDistance:i}=this;return t>s&&(Math.abs(e)>i||Math.abs(n)>i)},isSwipeGesture(){const{timeElapsed:t,changeY:e,changeX:n,maxSwipeDuration:s,minSwipeDistance:i}=this;return t<s&&(Math.abs(e)>i||Math.abs(n)>i)}},watch:{touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())},timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)}},methods:{handleTouchEvent(t){switch(t.type){case"touchstart":this.touchStarted=!0,this.clientYStart=t.changedTouches[0].clientY,this.clientXStart=t.changedTouches[0].clientX,this.timeStart=t.timeStamp;break;case"touchmove":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp;break;case"touchend":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp,this.touchEnded=!0}},resetGesture(){this.touchStarted=!1,this.touchEnded=!1,this.clientYStart=void 0,this.clientYCurrent=void 0,this.clientXStart=void 0,this.clientXCurrent=void 0,this.timeStart=void 0,this.timeCurrent=void 0}}},r=n(1900),c={name:"Modal",components:{MTouchCapture:(0,r.Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.touchEvent,touchmove:t.touchEvent,touchend:t.touchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:s},props:{beforeClose:{type:Function,required:!1,default:void 0},touchAreaHeight:{type:Number,default:200}},data:()=>({touchStyles:{}}),computed:{modalStyles(){return{"--touch-area-height":`${this.touchAreaHeight}px`,...this.touchStyles}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{onSwipeDown(){this.modalApi.close()},onDragDown(t){const e=`translateY(${-t.changeY}px)`;this.touchStyles={transform:e,"backface-visibility":"hidden"}},onDragEnd(t){t.changeY<-100?this.modalApi.close():this.touchStyles={}}}},l=n(5027),d=n.n(l);var u=(0,r.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Modal,style:t.modalStyles},[t.$slots.dismiss?[n("m-touch-capture",{class:t.$s.DismissMobile,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown}},[t._t("dismiss")],2),t._v(" "),n("div",{class:t.$s.DismissDesktop},[t._t("dismiss")],2)]:t._e(),t._v(" "),t._t("default"),t._v(" "),t.$slots.dismiss?t._e():n("m-touch-capture",{class:t.$s.Dismiss,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown}})],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports,h=n(7818),m=n.n(h);(0,r.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var p=n(1931),f=n(7062),v=n(3555),g=n.n(v),_=n(9082),y=n(1838),b=n(5832);const w={inject:{currentLayer:{default:void 0,from:s}},provide(){const t=this,e={state:p.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const s=e(t.$createElement);return this.state.vnode=s,this.state.options=n,()=>{this.state.vnode===s&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[s]:e}}};var S={name:"ModalLayer",components:{V:f.Z,PseudoWindow:g(),MTransitionFadeIn:_.j,MTransitionResponsive:y.w},mixins:[w],inheritAttrs:!1,apiMixin:w,data(){let t=b.rG,e=b.cT;return this.currentLayer.state.isStacked&&(t=b.iM,e=b.cT),{transitions:[{minWidth:b.iu,enter:b.vn,leave:b.w0},{minWidth:b.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=b.OE,n=!e,s=!!t.modalApi.state.vnode,i=!s,a=this.$refs.baseModalLayer;a&&(e&&s?(0,b.vq)({element:a}):e&&i?(0,b.s4)({element:a}):n&&s?setTimeout((()=>{a.style.opacity="0%"}),b.AT):n&&i&&a.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},M=n(5189),D=n.n(M);var x=(0,r.Z)(S,(function(){var t,e=this,n=e.$createElement,s=e._self._c||n;return s("div",{class:e.$s.Layer},[s("m-transition-fade-in",[e.currentLayer.state.vnode?s("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),s("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?s("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[s("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),s("div",{ref:"modal",class:e.$s.Container},[s("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?s("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=D().locals||D()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var s=n(9211),i=n(5832),a={components:{MTransition:s.T},inheritAttrs:!1,data:()=>({fadeInFn:i.dx,fadeOutFn:i.vq})},o=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n\ttransform: translate3d(0, 0, 0);\n\ttransition: transform cubic-bezier(0.1, 0.7, 0.1, 1) 200ms;\n}\n@media screen and (max-width: 839px) {\n.Dismiss__Nhj2 {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100px;\n}\n.DismissDesktop_ug89b {\n\t\tdisplay: none;\n}\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n.DismissMobile_CayXV {\n\t\tdisplay: none;\n}\n}\n",""]),s.locals={Modal:"Modal_lWZo9",Dismiss:"Dismiss__Nhj2",DismissDesktop:"DismissDesktop_ug89b",DismissMobile:"DismissMobile_CayXV"},t.exports=s},619:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),s.locals={ModalContent:"ModalContent_EYuNB"},t.exports=s},6851:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),s.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=s},5027:function(t,e,n){var s=n(8856);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("092310f5",s,!0,{})},7818:function(t,e,n){var s=n(619);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("179c170a",s,!0,{})},5189:function(t,e,n){var s=n(6851);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("7fc46ffb",s,!0,{})}}]);