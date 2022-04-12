(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[327],{9901:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});const o={props:{size:{type:String,default:"normal",validator:e=>["normal","large"].includes(e)}}};var r=n(7531),i=n.n(r);const s=(0,n(1900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Loading},[n("svg",{class:[e.$s.Spinner,e.$s["size_"+e.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[e.$s.Circle,e.$s["size_"+e.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(e){this.$s=i().locals||i()}),null,null).exports},807:(e,t,n)=>{"use strict";n.d(t,{qo:()=>w,YH:()=>a,uH:()=>_,C9:()=>g});var o=n(5066),r=n.n(o),i=n(4299),s=n.n(i);const a=Symbol("ThemeKey");var l=n(643),c=n.n(l),d=n(2810),f=n.n(d),u=n(5692),p=n.n(u),m=n(7356);function h(e){return p()(e)&&e.startsWith("@")?this.getPath(e):e}function v(e){if(!p()(e))throw new Error("cannot resolve pointer ".concat(e," it is not a string"));if(!e.startsWith("@"))throw new Error("cannot resolve pointer ".concat(e," it is missed the @ prefix"));const t=e.slice(1),n=c()(this,t);if(f()(n))throw new Error("invalid pointer ".concat(e," does not point to a field that exists within the theme"));return n}function g(e,t){const n={};for(const r of t)n["resolved".concat((o=r,o[0].toUpperCase()+o.slice(1)))]=function(){if(!f()(this[r]))return this[r];const t=this.theme[e][r];if(t){const n=t,o=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return i&&m.Z.error(i(o),'Invalid value "'.concat(o,'" for prop "').concat(r,'" for component "').concat(e,'" in theme.')),o}};var o;return n}function _(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17,body:"inherit",heading:"inherit",headline:"inherit",label:"inherit"},fontWeights:{body:400,heading:600,headline:300,label:500},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:h,getPath:v}}function C(e,t,n,o){s()(e,t,n),s()(e,r()(e.profiles,{id:o})),e.colors={...e.colors},e.resolve=h,e.getPath=v}const b={inject:{parentTheme:{default:_(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return C(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e,fonts:t,fontWeights:n}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"],"--fonts-baseSize":t.baseSize,"--fonts-body":t.body,"--fonts-heading":t.heading,"--fonts-headline":t.headline,"--fonts-label":t.label,"--fontWeights-body":n.body,"--fontWeights-heading":n.heading,"--fontWeights-headline":n.headline,"--fontWeights-label":n.label}}},beforeUpdate(){C(this.$data,this.parentTheme,this.theme,this.profile)}};var y=n(5004),x=n.n(y);const w=(0,n(1900).Z)(b,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=x().locals||x()}),null,null).exports},9211:(e,t,n)=>{"use strict";n.d(t,{T:()=>s});var o=n(1838),r=n(5832);const i={components:{MTransitionResponsive:o.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:r.iu,enter:this.enter,leave:this.leave}]}}};const s=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition-responsive",e._g(e._b({attrs:{transitions:e.transitions}},"m-transition-responsive",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},1838:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});const o={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:e=>{if(0===e.length)return!1;return 0===e[0].minWidth&&e.every((e=>(e.minWidth||0===e.minWidth)&&e.enter&&e.leave))}}},methods:{handleEnter(e,t){this.getResponsiveTransition().enter({element:e,onComplete:t})},handleLeave(e,t){this.getResponsiveTransition().leave({element:e,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const e=window.innerWidth;let t;return this.transitions.forEach((n=>{e>=n.minWidth&&(t=n)})),t}}};const r=(0,n(1900).Z)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",e._g(e._b({attrs:{css:!1},on:{enter:e.handleEnter,leave:e.handleLeave}},"transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},7356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const o="object"==typeof process&&"object"==typeof process.env&&!0,r=e=>["%c @square/maker".concat(e),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i={warn(e,t,n){e||((e,t)=>{o&&console.warn(...r(t),e)})(t,n)},error(e,t,n){e||((e,t)=>{throw console.error(...r(t),e),new Error("".concat((e=>"[@square/maker]".concat(e))(t)," ").concat(e))})(t,n)}}},6475:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(771),r=n.n(o);const i=function(e,t){if(!t||r().contrast(e,t)<3){const t=.32,n=e.luminance()>t;return r()(n?"#000":"#fff")}return t}},5832:(e,t,n)=>{"use strict";n.d(t,{iu:()=>i,OE:()=>s,AT:()=>l,hJ:()=>u,vP:()=>p,Y7:()=>m,dx:()=>b,s4:()=>y,vq:()=>x,vn:()=>w,w0:()=>k,rG:()=>z,iM:()=>W,tq:()=>q,cT:()=>P,uL:()=>Z,C9:()=>$});var o=n(9546),r=n(7069);const i=0,s=840,a="spring",l=200,c={type:a,stiffness:600,damping:60,mass:1},d={type:a,stiffness:400,damping:40,mass:1},f={type:a,stiffness:400,damping:30,mass:1.5},u={from:0,to:100},p={from:100,to:0};function m(e,t,n,o){return r=>function(e,t,n,o,r){return{[o]:"".concat(e/100*(n-t)+t).concat(r)}}(r,e,t,n,o)}const h=m(0,100,"opacity","%"),v=m(0,100,"y","%"),g=(m(0,100,"x","%"),m(40,0,"y","px")),_=e=>({...h(e),...g(e)}),C=(e,t)=>{const n=m(t,0,"y","px");return{...h(e),...n(e)}};function b({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function y({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}),l)}function x({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=h,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...p,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function w({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function k({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function z({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function W({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=u;n.set(i(s.from)),n.render(),setTimeout((()=>{(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}),l)}function q({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=C,s=u,a=20+5*e.dataset.loadIndex;n.set(i(s.from)),n.render(),(0,r.j)({...s,...d,onUpdate(e){n.set(i(e,a))},onComplete:t})}function P({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=_,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...c,onUpdate(e){n.set(i(e))},onComplete:t})}function Z({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=p;n.set(i(s.from)),n.render(),(0,r.j)({...s,...f,onUpdate(e){n.set(i(e))},onComplete:t})}function $({element:e,onComplete:t}){const n=(0,o.ZP)(e),i=v,s=u;n.set(i(s.from)),n.render(),(0,r.j)({...s,...f,onUpdate(e){n.set(i(e))},onComplete:t})}},9832:(e,t,n)=>{var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),o.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},e.exports=o},5820:(e,t,n)=>{var o=n(7705)((function(e){return e[1]}));o.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tfont-weight: var(--fontWeights-body, normal);\n\tfont-size: calc(var(--fonts-baseSize, 16) * 1px);\n\tfont-family: var(--fonts-body, sans-serif);\n\tbackground-color: var(--color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},e.exports=o},7531:(e,t,n)=>{var o=n(9832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("7ac45ae2",o,!0,{})},5004:(e,t,n)=>{var o=n(5820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4023).Z)("12fe2849",o,!0,{})}}]);
