(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[87],{7062:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var a=function(t){return t&&t.data&&(t.data.slot=void 0),t};const i={functional:!0,render:function(t,e){var n=e.props;return Array.isArray(n.nodes)?n.nodes.map(a):a(n.nodes)}}},3883:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a,i={"!":1,"&":2},r=/\B([A-Z])/g,s=/-(\w)/g;function l(t){return t.replace(s,(function(t,e){return e?e.toUpperCase():""}))}function o(t,e,n){if(n){var a=n.value,i=n.modifier,r=t[e];null==r||1===i?t[e]=a:2===i&&(Array.isArray(r)?Array.isArray(a)?r.push.apply(r,a):r.push(a):"object"==typeof r&&"object"==typeof a?Object.assign(r,a):"function"==typeof r&&"function"==typeof a?t[e]=function(){Reflect.apply(r,this,arguments),Reflect.apply(a,this,arguments)}:t[e]+=a)}}function c(t,e,n){t[e]||(t[e]={});var a=t[e];for(var i in n)o(a,i,n[i])}function f(t,e){if(e in t)return e;var n=e.replace(r,"-$1").toLowerCase();return n in t&&n}function v(t){var e={};for(var n in t){var a=t[n],r=i[n.slice(-1)];r?n=n.slice(0,-1):r=0,e[n]={value:a,modifier:r}}return e}function m(t,e){var n=l("static-"+e),a=[t[n],t[e]].filter(Boolean).flat(1/0);if(0!==a.length)return delete t[n],a}function u(t,e){var n=t[e];if(n)return delete t[e],n}function h(t){return t&&{value:t,modifier:0}}const p={functional:!0,render:function(t,e){var n=e.children,i=e.data;if(!n||function(t){for(var e in t)return!1;return!0}(i))return n;var r,s=v(i.attrs),p=v(i.on),d=v(i.nativeOn),g=u(s,"class")||h(m(i,"class")),_=u(s,"style")||h(m(i,"style")),x=u(s,"key")||h(i.key);return _&&"string"==typeof _.value&&(_.value=(r=_.value,Object.fromEntries(r.split(";").map((function(t){var e=t.split(":"),n=e[0],a=e[1];return n&&a&&[l(n.trim()),a.trim()]})).filter(Boolean)))),n.map((function(t){if((t=function(t){a||(a=Object.getPrototypeOf(t).constructor);var e=new a;return Object.assign(e,t),e.componentOptions&&(e.componentOptions=Object.assign({},e.componentOptions),e.componentOptions.propsData=Object.assign({},e.componentOptions.propsData)),e}(t)).tag){t.data||(t.data={});var e=Object.assign({},s),n=t,i=n.data,r=n.componentOptions;r?(c(r,"propsData",function(t,e){var n=t.Ctor.options.props,a={};if(n)for(var i in n){var r=f(e,i);r&&(a[i]=e[r],delete e[r])}return a}(r,e)),c(r,"listeners",p),c(i,"nativeOn",d),i.on=i.nativeOn):c(i,"on",p),c(i,"attrs",e),i.class=m(i,"class"),i.style=m(i,"style"),o(i,"class",g),o(i,"style",_),o(t,"key",x)}return t}))}}},9901:(t,e,n)=>{"use strict";n.d(e,{g:()=>s});const a={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var i=n(7531),r=n.n(i);const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.Loading},[n("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=r().locals||r()}),null,null).exports},990:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});var a=n(2606),i=n(7060);const r={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","p","span","div","li"].includes(t)},size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},fontFamily:{type:String,default:void 0,validator:(0,i.Z)("font-family")},fontWeight:{type:String,default:void 0,validator:(0,i.Z)("font-weight")},fontSize:{type:String,default:void 0,validator:(0,i.Z)("font-size")},lineHeight:{type:String,default:void 0,validator:(0,i.Z)("line-height")},color:{type:String,default:void 0,validator:(0,i.Z)("color")},fontStyle:{type:String,default:void 0,validator:(0,i.Z)("font-style")},textTransform:{type:String,default:void 0,validator:(0,i.Z)("text-transform")},textDecoration:{type:String,default:void 0,validator:(0,i.Z)("text-decoration")},textAlign:{type:String,default:void 0,validator:(0,i.Z)("text-align")}},computed:{...(0,a.C9)("text",["pattern","element","size","fontFamily","fontWeight","fontSize","color","fontStyle","textTransform","textDecoration","textAlign"]),tag(){if(this.resolvedElement)return this.resolvedElement;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":"p"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():"minus".concat(this.resolvedSize)},inlineStyles(){const{fonts:t}=this.theme,e={fontSize:this.resolvedFontSize,lineHeight:this.lineHeight,"--mobile-base-font-size":t.baseSize,"--mobile-font-size-scale":t.sizeScale};return"inherit"!==this.resolvedFontFamily&&(e.fontFamily=this.resolvedFontFamily),"inherit"!==this.resolvedFontWeight&&(e.fontWeight=this.resolvedFontWeight),"inherit"!==this.resolvedColor&&(e.color=this.resolvedColor),"inherit"!==this.resolvedFontStyle&&(e.fontStyle=this.resolvedFontStyle),"inherit"!==this.resolvedTextTransform&&(e.textTransform=this.resolvedTextTransform),"inherit"!==this.resolvedTextDecoration&&(e.textDecoration=this.resolvedTextDecoration),"inherit"!==this.resolvedTextAlign&&(e.textAlign=this.resolvedTextAlign),e}},render(t){const{$s:e,tag:n,sizeClass:a,inlineStyles:i}=this,r=this.$slots.default;return t(n,{class:[e.Text,e["size_".concat(a)]],attrs:this.$attrs,style:i,on:this.$listeners},r)}};var s=n(7493),l=n.n(s);const o=(0,n(1900).Z)(r,undefined,undefined,!1,(function(t){this.$s=l().locals||l()}),null,null).exports},2416:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var a=n(4219);const i={warn(t,e,n){t||(0,a.K)(e,n)},error(t,e,n){t||(0,a._)(e,n)}}},9832:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),a.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=a},2716:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.Text_uGevg {\n\tmargin: 0;\n\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\t--min-fs-2: calc(var(--min-fs-1) * var(--min-font-size-scale));\n\t--min-fs-3: calc(var(--min-fs-2) * var(--min-font-size-scale));\n\t--min-fs-4: calc(var(--min-fs-3) * var(--min-font-size-scale));\n\t--min-fs-5: calc(var(--min-fs-4) * var(--min-font-size-scale));\n\t--min-fs-6: calc(var(--min-fs-5) * var(--min-font-size-scale));\n\t--min-fs-7: calc(var(--min-fs-6) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\t--max-fs-2: calc(var(--max-fs-1) * var(--max-font-size-scale));\n\t--max-fs-3: calc(var(--max-fs-2) * var(--max-font-size-scale));\n\t--max-fs-4: calc(var(--max-fs-3) * var(--max-font-size-scale));\n\t--max-fs-5: calc(var(--max-fs-4) * var(--max-font-size-scale));\n\t--max-fs-6: calc(var(--max-fs-5) * var(--max-font-size-scale));\n\t--max-fs-7: calc(var(--max-fs-6) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\t--range-fs-2: calc(var(--max-fs-2) - var(--min-fs-2));\n\t--range-fs-3: calc(var(--max-fs-3) - var(--min-fs-3));\n\t--range-fs-4: calc(var(--max-fs-4) - var(--min-fs-4));\n\t--range-fs-5: calc(var(--max-fs-5) - var(--min-fs-5));\n\t--range-fs-6: calc(var(--max-fs-6) - var(--min-fs-6));\n\t--range-fs-7: calc(var(--max-fs-7) - var(--min-fs-7));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\t--fs-2: calc(var(--min-fs-2) * 1px + var(--range-fs-2) * var(--interpolate-by));\n\t--fs-3: calc(var(--min-fs-3) * 1px + var(--range-fs-3) * var(--interpolate-by));\n\t--fs-4: calc(var(--min-fs-4) * 1px + var(--range-fs-4) * var(--interpolate-by));\n\t--fs-5: calc(var(--min-fs-5) * 1px + var(--range-fs-5) * var(--interpolate-by));\n\t--fs-6: calc(var(--min-fs-6) * 1px + var(--range-fs-6) * var(--interpolate-by));\n\t--fs-7: calc(var(--min-fs-7) * 1px + var(--range-fs-7) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n\t--lh-2: calc(var(--lh-1) * var(--line-height-scale));\n\t--lh-3: calc(var(--lh-2) * var(--line-height-scale));\n\t--lh-4: calc(var(--lh-3) * var(--line-height-scale));\n\t--lh-5: calc(var(--lh-4) * var(--line-height-scale));\n\t--lh-6: calc(var(--lh-5) * var(--line-height-scale));\n\t--lh-7: calc(var(--lh-6) * var(--line-height-scale));\n}\n@media (min-width: 1200px) {\n.Text_uGevg {\n\t\t--resolution: 1200px;\n}\n}\n.Text_uGevg.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Text_uGevg.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Text_uGevg.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Text_uGevg.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n.Text_uGevg.size_2_NNp1l {\n\tfont-size: var(--fs-2);\n\tline-height: var(--lh-2);\n}\n.Text_uGevg.size_3_TxSrO {\n\tfont-size: var(--fs-3);\n\tline-height: var(--lh-3);\n}\n.Text_uGevg.size_4__0Hav {\n\tfont-size: var(--fs-4);\n\tline-height: var(--lh-4);\n}\n.Text_uGevg.size_5_A7Ebd {\n\tfont-size: var(--fs-5);\n\tline-height: var(--lh-5);\n}\n.Text_uGevg.size_6__lg_u {\n\tfont-size: var(--fs-6);\n\tline-height: var(--lh-6);\n}\n.Text_uGevg.size_7__prL8 {\n\tfont-size: var(--fs-7);\n\tline-height: var(--lh-7);\n}\n",""]),a.locals={Text:"Text_uGevg","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC",size_2:"size_2_NNp1l",size_3:"size_3_TxSrO",size_4:"size_4__0Hav",size_5:"size_5_A7Ebd",size_6:"size_6__lg_u",size_7:"size_7__prL8"},t.exports=a},9801:(t,e,n)=>{var a=n(7705)((function(t){return t[1]}));a.push([t.id,"\n.reactive-layer-props-lab[data-v-41ca392d] {\n\tfont-family: -apple-system, 'Helvetica Neue', sans-serif;\n}\n",""]),t.exports=a},6762:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var a=n(6385),i=n(5027),r=n(7459),s=n(8914),l=n(9235),o=n(4574);const c={components:{MBladeLayer:a.TX,MDialogLayer:r.Hv,MModalLayer:i.Pj},mixins:[a.TX.apiMixin,r.Hv.apiMixin,i.Pj.apiMixin],data:()=>({count:0}),mounted(){setInterval((()=>{this.count+=1}),1e3)},methods:{openModal(){const t=this.$createElement;this.modalApi.open((()=>t(l.Z,{attrs:{count:this.count}})))},openDialog(){const t=this.$createElement;this.dialogApi.open((()=>t(o.Z,{attrs:{count:this.count}})))},openBlade(){const t=this.$createElement;this.bladeApi.open((()=>t(s.Z,{attrs:{count:this.count}})))}}};n(8476);const f=(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reactive-layer-props-lab"},[n("button",{on:{click:t.openBlade}},[t._v("\n\t\topen blade\n\t")]),t._v(" "),n("button",{on:{click:t.openModal}},[t._v("\n\t\topen modal\n\t")]),t._v(" "),n("button",{on:{click:t.openDialog}},[t._v("\n\t\topen dialog\n\t")]),t._v(" "),n("br"),t._v("\n\tcount is "+t._s(t.count)+"\n\t"),n("m-blade-layer"),t._v(" "),n("m-modal-layer"),t._v(" "),n("m-dialog-layer")],1)}),[],!1,null,"41ca392d",null).exports},7531:(t,e,n)=>{var a=n(9832);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("7ac45ae2",a,!0,{})},7493:(t,e,n)=>{var a=n(2716);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("8cb0142e",a,!0,{})},8476:(t,e,n)=>{var a=n(9801);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(4023).Z)("b7dc9f62",a,!0,{})}}]);