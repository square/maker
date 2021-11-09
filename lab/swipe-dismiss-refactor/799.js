(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[799],{5799:function(t,e,n){"use strict";n.d(e,{x6:function(){return h},Pj:function(){return C},UJ:function(){return i}});var i=Symbol("modalApiKey"),s=n(9792),o=n.n(s);const r={touchStarted:!1,touchEnded:!1,touchPoints:0,timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0,isDragGesture:!1};var a={name:"TouchCapture",props:{minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:200}},data:()=>({...r}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 1===this.touchPoints&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)}},watch:{touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())},timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)}},methods:{handleTouchEvent(t){switch(t.type){case"touchstart":this.touchStarted=!0,this.clientYStart=t.changedTouches[0].clientY,this.clientXStart=t.changedTouches[0].clientX,this.timeStart=t.timeStamp,this.touchPoints=t.changedTouches.length;break;case"touchmove":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp,this.touchPoints=t.changedTouches.length,this.isDragGesture=1===this.touchPoints;break;case"touchend":this.clientYCurrent=t.changedTouches[0].clientY,this.clientXCurrent=t.changedTouches[0].clientX,this.timeCurrent=t.timeStamp,this.touchEnded=!0}},resetGesture(){Object.entries(r).forEach((([t,e])=>{this[t]=e}))}}},l=n(1900),c={name:"Modal",components:{MTouchCapture:(0,l.Z)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:i},props:{beforeClose:{type:Function,required:!1,default:void 0}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:o()(this.setScrollTop,800)}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.isScrolledToTop=this.$refs.modal.$el.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&this.modalApi.close()},onDragDown(t){if(this.isScrolledToTop){const e=`translateY(${t.changeY}px)`;this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){this.isScrolledToTop&&t.changeY>.3*window.innerHeight?this.modalApi.close():this.modalStyles={}}}},d=n(5027),u=n.n(d);var h=(0,l.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.modalStyles,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports,p=n(7818),m=n.n(p);(0,l.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var f=n(1931),v=n(7062),g=n(3555),y=n.n(g),_=n(9082),w=n(1838),S=n(5832);const T={inject:{currentLayer:{default:void 0,from:i}},provide(){const t=this,e={state:f.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const i=e(t.$createElement);return this.state.vnode=i,this.state.options=n,()=>{this.state.vnode===i&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=e),{[i]:e}}};var b={name:"ModalLayer",components:{V:v.Z,PseudoWindow:y(),MTransitionFadeIn:_.j,MTransitionResponsive:w.w},mixins:[T],inheritAttrs:!1,apiMixin:T,data(){let t=S.rG,e=S.cT;return this.currentLayer.state.isStacked&&(t=S.iM,e=S.cT),{transitions:[{minWidth:S.iu,enter:S.vn,leave:S.w0},{minWidth:S.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=S.OE,n=!e,i=!!t.modalApi.state.vnode,s=!i,o=this.$refs.baseModalLayer;o&&(e&&i?(0,S.vq)({element:o}):e&&s?(0,S.s4)({element:o}):n&&i?setTimeout((()=>{o.style.opacity="0%"}),S.AT):n&&s&&o.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},M=n(5189),x=n.n(M);var C=(0,l.Z)(b,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.$s.Layer},[i("m-transition-fade-in",[e.currentLayer.state.vnode?i("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),i("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?i("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[i("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),i("div",{ref:"modal",class:e.$s.Container},[i("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?i("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var i=n(9211),s=n(5832),o={components:{MTransition:i.T},inheritAttrs:!1,data:()=>({fadeInFn:s.dx,fadeOutFn:s.vq})},r=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),i.locals={Modal:"Modal_lWZo9"},t.exports=i},619:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),i.locals={ModalContent:"ModalContent_EYuNB"},t.exports=i},6851:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),i.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=i},5027:function(t,e,n){var i=n(8856);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("092310f5",i,!0,{})},7818:function(t,e,n){var i=n(619);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("179c170a",i,!0,{})},5189:function(t,e,n){var i=n(6851);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("7fc46ffb",i,!0,{})}}]);