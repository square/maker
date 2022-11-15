(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[190],{4569:(t,e,n)=>{"use strict";n.d(e,{T:()=>i});var o=n(7386),r=n(5832);const s={components:{MTransitionResponsive:o.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition-responsive",t._g(t._b({attrs:{transitions:t.transitions}},"m-transition-responsive",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},2355:(t,e,n)=>{"use strict";n.d(e,{j:()=>i});var o=n(4569),r=n(5832);const s={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},7386:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});const o={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:t=>{if(0===t.length)return!1;return 0===t[0].minWidth&&t.every((t=>(t.minWidth||0===t.minWidth)&&t.enter&&t.leave))}}},methods:{handleEnter(t,e){this.getResponsiveTransition().enter({element:t,onComplete:e})},handleLeave(t,e){this.getResponsiveTransition().leave({element:t,onComplete:e})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const t=window.innerWidth;let e;return this.transitions.forEach((n=>{t>=n.minWidth&&(e=n)})),e}}};const r=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",t._g(t._b({attrs:{css:!1},on:{enter:t.handleEnter,leave:t.handleLeave}},"transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},2416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(4219);const r={warn(t,e,n){t||(0,o.K)(e,n)},error(t,e,n){t||(0,o._)(e,n)}}},6475:(t,e,n)=>{"use strict";n.d(e,{i8:()=>s,dL:()=>i,R4:()=>p,mj:()=>l});var o=n(9152),r=n(3690);(0,o.l7)([r.Z]);const s=.32,i=4.5,p=3;function l(t,e,n=p){let r=e;if(!e||(0,o.Vi)(e).contrast(t)<n){r=(0,o.Vi)(t).luminance()<s?"#ffffff":"#000000"}return r}},5412:(t,e,n)=>{"use strict";n.d(e,{Z:()=>_});var o=n(9931),r=n.n(o),s=n(9152),i=n(3690),p=n(1792),l=n(9792),c=n(6475),a=n(5681);const u=n.n(a)()();(0,s.l7)([i.Z,p.Z,l.Z]);const d={light:{"neutral-0":0,"neutral-10":.05,"neutral-20":.155,"neutral-80":.527,"neutral-90":.9,"neutral-100":1},dark:{"neutral-0":0,"neutral-10":.225,"neutral-20":.37,"neutral-80":.55,"neutral-90":.95,"neutral-100":1}},f={error:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},v={error:{fill:"#cd2026",text:"#ff7566"},warning:{fill:"#ffbf00",text:"#ffbf00"},success:{fill:"#008000",text:"#64cc52"}};function m(t,e){return(0,s.Vi)(t).delta(e)>=.25}function h(t,e){return(0,s.Vi)(t).contrast(e)>=c.R4}function _(t=u.background,e=u.primary){const n=(o=t,(0,s.Vi)(o).luminance()<c.i8);var o;const i=(0,c.mj)(t),p=n?d.dark:d.light,l={};Object.entries(p).forEach((([e,n])=>{l[e]=(0,s.Vi)(t).mix(i,n).toHex()}));const a=n?r()(v):r()(f);return a.contextualPrimary=function(t=u.background,e=u.primary,n){const o=(0,c.mj)(t),r=(0,s.Vi)(e).toHsl(),i={};if(m(e,t)){i.fill=e;const n=.2;i.text=h(e,t)?(0,s.Vi)(e).mix(o,n).toHex():o,i.onFill=(0,c.mj)(i.fill)}else i.fill=o,i.text=o,i.onFill=e;if("#ffffff"===(0,s.Vi)(t).toHex()){const t=25,e=95;i.subtle=(0,s.Vi)({h:r.h,s:t,l:e}).toHex()}else i.subtle=n["neutral-10"];return i}(t,e,l),["error","warning","success"].forEach((e=>{m(a[e].fill,t)||(a[e].onFill=a[e].fill,a[e].fill=i),h(a[e].text,t)||(a[e].text=i),"#ffffff"!==(0,s.Vi)(t).toHex()&&(a[e].subtle=l["neutral-10"]),a[e].onFill||(a[e].onFill=(0,c.mj)(a[e].fill))})),{primary:e,background:t,heading:(0,c.mj)(t),body:(0,c.mj)(t),...l,...a,elevation:n?l["neutral-20"]:"#ffffff",overlay:n?"rgba(255, 255, 255, 0.32)":"rgba(0, 0, 0, 0.32)"}}},5832:(t,e,n)=>{"use strict";n.d(e,{iu:()=>s,OE:()=>i,AT:()=>l,dx:()=>y,s4:()=>g,vq:()=>k,vn:()=>C,w0:()=>P,I0:()=>x,$y:()=>S,rG:()=>A,iM:()=>E,cT:()=>R,uL:()=>$,C9:()=>Z});var o=n(9546),r=n(7069);const s=0,i=840,p="spring",l=200,c={type:p,stiffness:600,damping:60,mass:1},a={type:p,stiffness:400,damping:30,mass:1.5},u={from:0,to:100},d={from:100,to:0};function f(t,e,n,o){return r=>function(t,e,n,o,r){return{[o]:"".concat(t/100*(n-e)+e).concat(r)}}(r,t,e,n,o)}const v=f(0,100,"opacity","%"),m=f(0,100,"y","%"),h=f(0,100,"x","%"),_=f(40,0,"y","px"),b=t=>({...v(t),..._(t)});function y({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=v,i=u;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function g({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=v,i=u;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}),l)}function k({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=v,i=d;n.set(s(i.from)),n.render(),(0,r.j)({...d,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function C({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=m,i=d;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function P({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=m,i=u;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function x({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=h,i=d;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function S({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=h,i=u;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function A({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=b,i=u;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function E({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=b,i=u;n.set(s(i.from)),n.render(),setTimeout((()=>{(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}),l)}function R({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=b,i=d;n.set(s(i.from)),n.render(),(0,r.j)({...i,...c,onUpdate(t){n.set(s(t))},onComplete:e})}function $({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=m,i=d;n.set(s(i.from)),n.render(),(0,r.j)({...i,...a,onUpdate(t){n.set(s(t))},onComplete:e})}function Z({element:t,onComplete:e}){const n=(0,o.ZP)(t),s=m,i=u;n.set(s(i.from)),n.render(),(0,r.j)({...i,...a,onUpdate(t){n.set(s(t))},onComplete:e})}},6908:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.PopoverContent_X9Gka {\n\tpadding: var(--padding);\n\tcolor: var(--maker-color-body, #000000);\n\tbackground-color: var(--maker-color-background, #ffffff);\n\tborder: 1px solid var(--maker-color-neutral-10, #f1f1f1);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\tbox-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.2);\n}\n",""]),o.locals={PopoverContent:"PopoverContent_X9Gka"},t.exports=o},239:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.PopoverInstance__G_vp {\n\tz-index: 1;\n}\n.PopoverInstance__G_vp[data-popper-reference-hidden] {\n\tvisibility: hidden;\n\tpointer-events: none;\n}\n",""]),o.locals={PopoverInstance:"PopoverInstance__G_vp"},t.exports=o},9096:(t,e,n)=>{var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.PopoverLayer_MBxkh {\n\toverflow: hidden;\n}\n",""]),o.locals={PopoverLayer:"PopoverLayer_MBxkh"},t.exports=o},3398:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>U});var o=n(624),r=n(5832),s=n(3555),i=n.n(s),p=n(1931);const l=Symbol("PopoverConfig"),c=Symbol("PopoverLayer");let a=0;const u=()=>(a+=1,a),d={provide(){const t=u(),e="popover-portal-".concat(t),n=p.Z.observable({currentInstance:void 0,actionEl:void 0,ignoreEls:[],clickSrc:void 0,layerId:t,target:e,targetSelector:"#".concat(e),setPopover(t){this.currentInstance&&this.closePopover(),t&&t.actionEl&&(this.actionEl=t.actionEl,this.ignoreEls=t.ignoreEls,this.currentInstance=t.id)},closePopover(){this.currentInstance=void 0}});return this.popoverApi||(this.popoverApi=n),{[c]:n}}},f={components:{PseudoWindow:i()},inject:{popoverApi:c},data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq}),popoverMixin:d,beforeDestroy(){this.popoverApi.closePopover()},methods:{handleBlur(){document.activeElement!==document.body&&this.popoverApi.closePopover()},trackClickSrc({target:t}){this.popoverApi.clickSrc=t},handleClick(){var t,e;const n=this.$refs.portal;if(!n||!this.popoverApi.clickSrc||!this.popoverApi.currentInstance)return;const o=n.contains(this.popoverApi.clickSrc),r=null===(t=this.popoverApi.actionEl)||void 0===t?void 0:t.contains(this.popoverApi.clickSrc),s=null===(e=this.popoverApi.ignoreEls)||void 0===e?void 0:e.some((t=>{var e;return null===(e=t.contains)||void 0===e?void 0:e.call(t,this.popoverApi.clickSrc)}));o||r||s||this.popoverApi.closePopover(),this.popoverApi.clickSrc=void 0}}};var v=n(2900),m=n.n(v),h=n(1900);const _=(0,h.Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pseudo-window",{on:{"&blur":function(e){return t.handleBlur.apply(null,arguments)}}},[n("pseudo-window",{on:{mousedown:t.trackClickSrc,touchstart:t.trackClickSrc,"!click":function(e){return t.handleClick.apply(null,arguments)},touchend:t.handleClick}},[n("div",{ref:"portal",class:t.$s.PopoverLayer,attrs:{id:t.popoverApi.target}})])],1)],1)}),[],!1,(function(t){this.$s=m().locals||m()}),null,null).exports;var b=n(4219),y=n(2355),g=n(8651),k=n(3077);const C={props:{actionEl:{type:void 0,required:!0},popperConfig:{type:Object,default:void 0}},mounted(){this.popper=(0,k.fi)(this.actionEl,this.$el,this.popperConfig),this.resizeObserver=this.followPopoverAction(),this.$emit("popover-instance:new-popper",this.popper)},beforeDestroy(){this.resizeObserver.disconnect()},updated(){this.popper.update()},methods:{followPopoverAction(){const t=new ResizeObserver((()=>{this.popper.update(),this.$emit("resize")}));return t.observe(this.actionEl),t.observe(document.body),t}}};var P=n(3440),x=n.n(P);const S=(0,h.Z)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.PopoverInstance},[t._t("default")],2)}),[],!1,(function(t){this.$s=x().locals||x()}),null,null).exports,A=[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:0,altBoundary:!0}},{name:"minWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn({state:{styles:t,rects:e}}){t.popper.minWidth="".concat(e.reference.offsetWidth,"px")},effect({state:{elements:t}}){t.popper.style.minWidth="".concat(t.reference.offsetWidth,"px")}}],E={components:{Portal:g.h_,PopoverInstance:S,MTransitionFadeIn:y.j},inject:{popoverApi:{from:c,default:()=>(0,b._)("No popover layer detected","Popover")},popoverConfig:{from:l,default:{config:void 0}}},props:{placement:{type:String,default:"bottom-start",validator:t=>["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].includes(t)},modifiers:{type:Array,default:()=>A}},data(){const t=this;return{id:u(),currentPopper:void 0,popperToDestroy:void 0,actionAPI:{open(...e){t.isOpen||t.popoverApi.setPopover({actionEl:t.actionEl,ignoreEls:e,id:t.id})},close(){this.popperToDestroy=this.currentPopper,this.currentPopper=void 0,t.popoverApi.closePopover()},toggle(...e){t.isOpen?t.actionAPI.close():t.actionAPI.open(...e)}}}},computed:{actionEl(){if(1===this.$el.children.length)return this.$el.children[0]},popperConfig(){return{placement:this.placement,modifiers:this.modifiers}},isOpen(){return this.popoverApi.currentInstance===this.id}},watch:{isOpen(t){t?this.$emit("open"):this.$emit("close")}},methods:{open(...t){this.actionAPI.open(...t)},close(){this.actionAPI.close()},toggle(...t){this.actionAPI.toggle(...t)},setPopper(t){this.currentPopper=t},destroyPopper(){var t;null===(t=this.popperToDestroy)||void 0===t||t.destroy(),this.popperToDestroy=void 0}}};const R=(0,h.Z)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"contents"}},[t._t("action",null,null,t.actionAPI),t._v(" "),n("portal",{attrs:{selector:t.popoverApi.targetSelector}},[n("div",[n("m-transition-fade-in",{on:{"after-leave":t.destroyPopper}},[t.isOpen?n("popover-instance",{attrs:{"action-el":t.actionEl,"popper-config":t.popperConfig},on:{"popover-instance:new-popper":t.setPopper}},[t._t("content")],2):t._e()],1)],1)])],2)}),[],!1,null,null,null).exports;var $=n(9152),Z=n(2606),M=n(6475),j=n(5412);const w={components:{MTheme:Z.qo},props:{color:{type:String,default:void 0,validator:t=>(0,$.Vi)(t).isValid()},bgColor:{type:String,default:void 0,validator:t=>(0,$.Vi)(t).isValid()},padding:{type:String,default:"24px",validator:t=>!n.g.CSS||n.g.CSS.supports("padding",t)}},computed:{styles(){return{"--padding":this.padding}},theme(){let t={};return this.bgColor&&(t=(0,j.Z)(this.bgColor)),this.color&&(t.body=(0,M.mj)(t.background,this.color,M.dL)),{colors:t}}}};var I=n(4992),N=n.n(I);const T=(0,h.Z)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-theme",{class:t.$s.PopoverContent,style:t.styles,attrs:{theme:t.theme}},[t._t("default")],2)}),[],!1,(function(t){this.$s=N().locals||N()}),null,null).exports;function F(t,e){return()=>(console.log("in sync beforeClose set by ".concat(t,", returning ").concat(e)),e)}function O(t,e){return()=>new Promise((n=>{setTimeout((()=>{console.log("in async beforeClose set by ".concat(t,", returning ").concat(e)),n(e)}),1e3)}))}const V={components:{MModal:o.x6,MModalContent:o.nI,MPopoverLayer:_,MPopover:R,MPopoverContent:T},mixins:[_.popoverMixin],inject:{modalApi:o.UJ},props:{depth:{type:Number,default:1},beforeClose:{type:Function,default:void 0}},data:()=>({NestedModal:void 0}),async mounted(){this.NestedModal=(await Promise.resolve().then(n.bind(n,3398))).default},methods:{openNested(t={}){const e=this.$createElement;let n,o;if(void 0!==t.propSync){let e;e=t.propSync?F:O,n=e("prop",t.propReturn)}if(void 0!==t.optSync){let e;e=t.optSync?F:O,o=e("options",t.optReturn)}const{NestedModal:r}=this;this.modalApi.open((()=>e(r,{attrs:{depth:this.depth+1,beforeClose:n}})),{beforeCloseHook:o})}}};const U=(0,h.Z)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",{attrs:{"before-close":t.beforeClose}},[n("m-modal-content",[t._v("\n\t\tdepth: "+t._s(t.depth)+"\n\t\t"),n("br"),t._v("\n\t\tno beforeClose hooks\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:t.openNested}},[t._v("\n\t\t\tno beforeClose hooks\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tsync beforeClose hooks: true\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!0})}}},[t._v("\n\t\t\tsync prop: true\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({optSync:!0,optReturn:!0})}}},[t._v("\n\t\t\tsync option: true\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!0,optSync:!0,optReturn:!0})}}},[t._v("\n\t\t\tsync prop & option: true\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tsync beforeClose hooks: false\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!1})}}},[t._v("\n\t\t\tsync prop: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({optSync:!0,optReturn:!1})}}},[t._v("\n\t\t\tsync option: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!1,optSync:!0,optReturn:!1})}}},[t._v("\n\t\t\tsync prop & option: false\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tsync beforeClose hooks: mixed\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!0,optSync:!0,optReturn:!1})}}},[t._v("\n\t\t\tsync prop: true, sync option: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!0,propReturn:!1,optSync:!0,optReturn:!0})}}},[t._v("\n\t\t\tsync prop: false, sync option: true\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tasync beforeClose hooks: true\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!0})}}},[t._v("\n\t\t\tasync prop: true\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({optSync:!1,optReturn:!0})}}},[t._v("\n\t\t\tasync option: true\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!0,optSync:!1,optReturn:!0})}}},[t._v("\n\t\t\tasync prop & option: true\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tasync beforeClose hooks: false\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!1})}}},[t._v("\n\t\t\tasync prop: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({optSync:!1,optReturn:!1})}}},[t._v("\n\t\t\tasync option: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!1,optSync:!1,optReturn:!1})}}},[t._v("\n\t\t\tasync prop & option: false\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tasync beforeClose hooks: mixed\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!0,optSync:!1,optReturn:!1})}}},[t._v("\n\t\t\tasync prop: true, async option: false\n\t\t")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!1,optSync:!1,optReturn:!0})}}},[t._v("\n\t\t\tasync prop: false, async option: true\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tmixed a/sync beforeClose hooks: mixed\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.openNested({propSync:!1,propReturn:!0,optSync:!0,optReturn:!1})}}},[t._v("\n\t\t\tasync prop: true, sync option: false\n\t\t")]),t._v(" "),n("br"),t._v("\n\t\tclosing via popover\n\t\t"),n("br"),t._v(" "),n("m-popover",{scopedSlots:t._u([{key:"action",fn:function(e){return[n("button",{on:{click:function(t){return e.toggle()}}},[t._v("\n\t\t\t\t\topen popover\n\t\t\t\t")])]}},{key:"content",fn:function(){return[n("m-popover-content",[n("button",{on:{click:function(e){return t.modalApi.close()}}},[t._v("\n\t\t\t\t\t\tclose this modal\n\t\t\t\t\t")]),t._v(" "),n("button",{on:{click:function(e){return t.modalApi.closeAll()}}},[t._v("\n\t\t\t\t\t\tclose all modals\n\t\t\t\t\t")])])]},proxy:!0}])}),t._v(" "),n("br"),t._v("\n\t\tclosing\n\t\t"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.modalApi.close()}}},[t._v("\n\t\t\tclose this modal\n\t\t")]),t._v(" "),n("button",{on:{click:function(e){return t.modalApi.closeAll()}}},[t._v("\n\t\t\tclose all modals\n\t\t")]),t._v(" "),n("m-popover-layer")],1)],1)}),[],!1,null,null,null).exports},4032:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var o=n(624),r=n(3398);const s={components:{MModal:o.x6,MModalLayer:o.Pj},mixins:[o.Pj.apiMixin],methods:{openModal(){const t=this.$createElement;this.modalApi.open((()=>t(r.default)))},openAndCloseModal(){const t=this.$createElement,e=this.modalApi.open((()=>t(r.default)));setTimeout(e,5e3)}}};const i=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.openModal}},[t._v("\n\t\topen modal\n\t")]),t._v(" "),n("button",{on:{click:t.openAndCloseModal}},[t._v("\n\t\topen & close modal in 5 secs\n\t")]),t._v(" "),n("m-modal",{attrs:{"before-close":function(){return!0}}},[t._v("\n\t\tthis is a layerless modal with a beforeClose hook,\n\t\tit should emit an error to the console\n\t")]),t._v(" "),n("m-modal-layer")],1)}),[],!1,null,null,null).exports},4992:(t,e,n)=>{var o=n(6908);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("50e8b4fa",o,!0,{})},3440:(t,e,n)=>{var o=n(239);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("28cbe907",o,!0,{})},2900:(t,e,n)=>{var o=n(9096);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("78825d03",o,!0,{})}}]);