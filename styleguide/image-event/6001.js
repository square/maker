(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6001],{69901:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});const o={props:{size:{type:String,default:"normal",validator:e=>["normal","large"].includes(e)}}};var r=n(17531),i=n.n(r);const s=(0,n(51900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Loading},[n("svg",{class:[e.$s.Spinner,e.$s["size_"+e.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[e.$s.Circle,e.$s["size_"+e.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(e){this.$s=i().locals||i()}),null,null).exports},42820:(e,t,n)=>{"use strict";n.d(t,{vj:()=>A,bf:()=>z,M3:()=>m});var o=n(45832),r=n(13555),i=n.n(r),s=n(21931),l=n(16825);let a=0;const p=()=>(a+=1,a),c={provide(){const e=p(),t="popover-portal-".concat(e),n=s.Z.observable({currentInstance:void 0,actionEl:void 0,ignoreEls:[],clickSrc:void 0,layerId:e,target:t,targetSelector:"#".concat(t),setPopover(e){this.currentInstance&&this.closePopover(),e&&e.actionEl&&(this.actionEl=e.actionEl,this.ignoreEls=e.ignoreEls,this.currentInstance=e.id)},closePopover(){this.currentInstance=void 0}});return this.popoverApi||(this.popoverApi=n),{[l.y]:n}}},d={components:{PseudoWindow:i()},inject:{popoverApi:l.y},data:()=>({fadeInFn:o.dx,fadeOutFn:o.vq}),popoverMixin:c,beforeDestroy(){this.popoverApi.closePopover()},methods:{handleBlur(){document.activeElement!==document.body&&this.popoverApi.closePopover()},trackClickSrc({target:e}){this.popoverApi.clickSrc=e},handleClick(){var e,t;const n=this.$refs.portal;if(!n||!this.popoverApi.clickSrc||!this.popoverApi.currentInstance)return;const o=n.contains(this.popoverApi.clickSrc),r=null===(e=this.popoverApi.actionEl)||void 0===e?void 0:e.contains(this.popoverApi.clickSrc),i=null===(t=this.popoverApi.ignoreEls)||void 0===t?void 0:t.some((e=>{var t;return null===(t=e.contains)||void 0===t?void 0:t.call(e,this.popoverApi.clickSrc)}));o||r||i||this.popoverApi.closePopover(),this.popoverApi.clickSrc=void 0}}};var u=n(42900),f=n.n(u),v=n(51900);const m=(0,v.Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pseudo-window",{on:{"&blur":function(t){return e.handleBlur.apply(null,arguments)}}},[n("pseudo-window",{on:{mousedown:e.trackClickSrc,touchstart:e.trackClickSrc,"!click":function(t){return e.handleClick.apply(null,arguments)},touchend:e.handleClick}},[n("div",{ref:"portal",class:e.$s.PopoverLayer,attrs:{id:e.popoverApi.target}})])],1)],1)}),[],!1,(function(e){this.$s=f().locals||f()}),null,null).exports;var h=n(14219),g=n(51552),_=n(8651),y=n(13077);const C={props:{actionEl:{type:void 0,required:!0},popperConfig:{type:Object,default:void 0}},mounted(){this.popper=(0,y.fi)(this.actionEl,this.$el,this.popperConfig),this.resizeObserver=this.followPopoverAction(),this.$emit("popover-instance:new-popper",this.popper)},beforeDestroy(){this.resizeObserver.disconnect()},updated(){this.popper.update()},methods:{followPopoverAction(){const e=new ResizeObserver((()=>{this.popper.update(),this.$emit("resize")}));return e.observe(this.actionEl),e.observe(document.body),e}}};var b=n(33440),x=n.n(b);const P=(0,v.Z)(C,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.PopoverInstance},[e._t("default")],2)}),[],!1,(function(e){this.$s=x().locals||x()}),null,null).exports,k=[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:0,altBoundary:!0}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn({state:{styles:e,rects:t}}){e.popper.minWidth="".concat(t.reference.offsetWidth,"px")},effect({state:{elements:e}}){e.popper.style.minWidth="".concat(e.reference.offsetWidth,"px")}}],w={components:{Portal:_.h_,PopoverInstance:P,MTransitionFadeIn:g.j},inject:{popoverApi:{from:l.y,default:()=>(0,h._)("No popover layer detected","Popover")},popoverConfig:{from:l.f,default:{config:void 0}}},props:{placement:{type:String,default:"bottom-start",validator:e=>["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].includes(e)},modifiers:{type:Array,default:()=>k}},data(){const e=this;return{id:p(),currentPopper:void 0,popperToDestroy:void 0,actionAPI:{open(...t){e.isOpen||e.popoverApi.setPopover({actionEl:e.actionEl,ignoreEls:t,id:e.id})},close(){this.popperToDestroy=this.currentPopper,this.currentPopper=void 0,e.popoverApi.closePopover()},toggle(...t){e.isOpen?e.actionAPI.close():e.actionAPI.open(...t)}}}},computed:{actionEl(){if(1===this.$el.children.length)return this.$el.children[0]},popperConfig(){return{placement:this.placement,modifiers:this.modifiers}},isOpen(){return this.popoverApi.currentInstance===this.id}},watch:{isOpen(e){e?this.$emit("open"):this.$emit("close")}},methods:{open(...e){this.actionAPI.open(...e)},close(){this.actionAPI.close()},toggle(...e){this.actionAPI.toggle(...e)},setPopper(e){this.currentPopper=e},destroyPopper(){var e;null===(e=this.popperToDestroy)||void 0===e||e.destroy(),this.popperToDestroy=void 0}}};const A=(0,v.Z)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"contents"}},[e._t("action",null,null,e.actionAPI),e._v(" "),n("portal",{attrs:{selector:e.popoverApi.targetSelector}},[n("div",[n("m-transition-fade-in",{on:{"after-leave":e.destroyPopper}},[e.isOpen?n("popover-instance",{attrs:{"action-el":e.actionEl,"popper-config":e.popperConfig},on:{"popover-instance:new-popper":e.setPopper}},[e._t("content")],2):e._e()],1)],1)])],2)}),[],!1,null,null,null).exports;var $=n(16765),E=n(46010),I=n(46475),S=n(55412);const Z={components:{MTheme:E.qo},props:{color:{type:String,default:void 0,validator:e=>(0,$.Vi)(e).isValid()},bgColor:{type:String,default:void 0,validator:e=>(0,$.Vi)(e).isValid()},padding:{type:String,default:"24px",validator:e=>!n.g.CSS||n.g.CSS.supports("padding",e)}},computed:{styles(){return{"--padding":this.padding}},theme(){let e={};return this.bgColor&&(e=(0,S.Z)(this.bgColor)),this.color&&(e.body=(0,I.mj)(e.background,this.color,I.dL)),{colors:e}}}};var j=n(74992),q=n.n(j);const z=(0,v.Z)(Z,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-theme",{class:e.$s.PopoverContent,style:e.styles,attrs:{theme:e.theme}},[e._t("default")],2)}),[],!1,(function(e){this.$s=q().locals||q()}),null,null).exports},39211:(e,t,n)=>{"use strict";n.d(t,{T:()=>s});var o=n(31838),r=n(45832);const i={components:{MTransitionResponsive:o.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const s=(0,n(51900).Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition-responsive",e._g(e._b({attrs:{transitions:e.transitions}},"m-transition-responsive",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},31838:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});const o={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:e=>{if(0===e.length)return!1;return 0===e[0].minWidth&&e.every((e=>(e.minWidth||0===e.minWidth)&&e.enter&&e.leave))}}},methods:{handleEnter(e,t){this.getResponsiveTransition().enter({element:e,onComplete:t})},handleLeave(e,t){this.getResponsiveTransition().leave({element:e,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const e=window.innerWidth;let t;return this.transitions.forEach((n=>{e>=n.minWidth&&(t=n)})),t}}};const r=(0,n(51900).Z)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._g(e._b({attrs:{css:!1},on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},46475:(e,t,n)=>{"use strict";n.d(t,{i8:()=>i,dL:()=>s,R4:()=>l,mj:()=>a});var o=n(16765),r=n(40241);(0,o.l7)([r.Z]);const i=.32,s=4.5,l=3;function a(e,t,n=l){let r=t;if(!t||(0,o.Vi)(t).contrast(e)<n){r=(0,o.Vi)(e).luminance()<i?"#ffffff":"#000000"}return r}},55412:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(79931),r=n.n(o),i=n(16765),s=n(40241),l=n(57426),a=n(46475);(0,i.l7)([s.Z,l.Z]);const p={light:{"neutral-0":0,"neutral-10":.05,"neutral-20":.155,"neutral-80":.527,"neutral-90":.9,"neutral-100":1},dark:{"neutral-0":0,"neutral-10":.255,"neutral-20":.37,"neutral-80":.55,"neutral-90":.95,"neutral-100":1}},c={critical:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},d={critical:{fill:"#cd2026",text:"#ff7566"},warning:{fill:"#ffbf00",text:"#ffbf00"},success:{fill:"#008000",text:"#64cc52"}};function u(e="#fff",t="#000",n){const o=(r=e,(0,i.Vi)(r).luminance()<a.i8);var r;const s=(0,a.mj)(e),l={};if(p=t,c=e,(0,i.Vi)(p).contrast(c)>=a.R4){l.fill=t;const e=.2;l.text=(0,i.Vi)(t).mix(s,e).toHex(),l.onFill=(0,a.mj)(l.fill)}else l.fill=s,l.text=s,l.onFill=t;var p,c;if(o)l.subtle=n["neutral-10"];else{const e=25,n=95,o=(0,i.Vi)(t).toHsl();l.subtle=(0,i.Vi)({h:o.h,s:e,l:n}).toHex()}return l}function f(e="#fff",t="#000"){const n=(0,i.Vi)(e).luminance()<a.i8,o=n?p.dark:p.light,s=(0,a.mj)(e),l={};Object.entries(o).forEach((([t,n])=>{l[t]=(0,i.Vi)(e).mix(s,n).toHex()}));const f=n?r()(d):r()(c);return f.contextualPrimary=u(e,t,l),["critical","warning","success"].forEach((t=>{(0,i.Vi)(f[t].text).contrast(e)<a.dL&&(f[t].onFill=f[t].fill,f[t].text=(0,a.mj)(e),f[t].fill=(0,a.mj)(e)),f[t].subtle||(f[t].subtle=l["neutral-10"])})),{background:e,heading:(0,a.mj)(e),body:(0,a.mj)(e),...l,...f,elevation:n?l["neutral-20"]:"#ffffff",overlay:n?"rgba(255, 255, 255, 0.32)":"rgba(0, 0, 0, 0.32)"}}},45832:(e,t,n)=>{"use strict";n.d(t,{iu:()=>i,OE:()=>s,AT:()=>a,ST:()=>p,hJ:()=>u,Y7:()=>v,dx:()=>b,s4:()=>x,vq:()=>P,vn:()=>k,w0:()=>w,I0:()=>A,$y:()=>$,rG:()=>E,iM:()=>I,tq:()=>S,cT:()=>Z,uL:()=>j,C9:()=>q});var o=n(19546),r=n(47069);const i=0,s=840,l="spring",a=200,p={type:l,stiffness:600,damping:60,mass:1},c={type:l,stiffness:400,damping:40,mass:1},d={type:l,stiffness:400,damping:30,mass:1.5},u={from:0,to:100},f={from:100,to:0};function v(e,t,n,o){return r=>function(e,t,n,o,r){return{[o]:"".concat(e/100*(n-t)+t).concat(r)}}(r,e,t,n,o)}const m=v(0,100,"opacity","%"),h=v(0,100,"y","%"),g=v(0,100,"x","%"),_=v(40,0,"y","px"),y=e=>({...m(e),..._(e)}),C=(e,t)=>{const n=v(t,0,"y","px");return{...m(e),...n(e)}};function b({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function x({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}),a)}function P({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=m,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...f,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function k({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function w({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function A({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=g,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function $({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=g,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function E({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=y,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function I({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=y,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}),a)}function S({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=C,s=u,l=20+5*e.dataset.loadIndex;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e,l))},onComplete:t})}function Z({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=y,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...p,onUpdate(e){n.set(i(e))},onComplete:t})}function j({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=f;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e))},onComplete:t})}function q({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e))},onComplete:t})}},39832:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},e.exports=o},36908:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverContent_X9Gka {\n\tpadding: var(--padding);\n\tcolor: var(--maker-color-body, #000000);\n\tbackground-color: var(--maker-color-background, #ffffff);\n\tborder: 1px solid var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\tbox-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);\n}\n",""]),o.locals={PopoverContent:"PopoverContent_X9Gka"},e.exports=o},90239:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverInstance__G_vp {\n\tz-index: 1;\n}\n.PopoverInstance__G_vp[data-popper-reference-hidden] {\n\tvisibility: hidden;\n\tpointer-events: none;\n}\n",""]),o.locals={PopoverInstance:"PopoverInstance__G_vp"},e.exports=o},29096:(e,t,n)=>{var o=n(77705)((function(e){return e[1]}));o.push([e.id,"\n.PopoverLayer_MBxkh {\n\toverflow: hidden;\n}\n",""]),o.locals={PopoverLayer:"PopoverLayer_MBxkh"},e.exports=o},17531:(e,t,n)=>{var o=n(39832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("7ac45ae2",o,!0,{})},74992:(e,t,n)=>{var o=n(36908);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("50e8b4fa",o,!0,{})},33440:(e,t,n)=>{var o=n(90239);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("28cbe907",o,!0,{})},42900:(e,t,n)=>{var o=n(29096);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(54023).Z)("78825d03",o,!0,{})}}]);