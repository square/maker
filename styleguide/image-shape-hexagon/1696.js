(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[1696],{1696:(e,t,n)=>{"use strict";n.d(t,{F:()=>v});var a=n(69792),i=n.n(a),r=n(13555),s=n.n(r),o=n(62355),l=n(78378),d=n(86812),h=n(27060);const c=1/456;function u(){const e=new WeakMap,t=new IntersectionObserver((t=>{t.forEach((t=>{var n;return null===(n=e.get(t.target))||void 0===n?void 0:n(t)}))}));return{watch(n,a){e.set(n,a),t.observe(n)},unwatch(n){t.unobserve(n),e.delete(n)}}}let f;const p={components:{PseudoWindow:s(),MTransitionFadeIn:o.j,MSkeletonBlock:l.s},inject:{theme:{default:(0,d.uH)(),from:d.YH}},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0},sizes:{type:String,default:void 0},shape:{type:String,default:void 0,validator:e=>["original","square","circle","arch","hexagon"].includes(e)},lazyload:{type:Boolean,default:!1},objectFit:{type:String,validator:(0,h.Z)("object-fit"),default:"cover"},objectPosition:{type:String,validator:(0,h.Z)("object-position"),default:"center"}},data(){return{shouldLoad:!1,loaded:!1,throttledResizeHandler:i()(this.getImageDimensions,200),height:0,width:0,SVG_PATH:"M 228.192 0 L 425.646 114 V 342 L 228.192 456 L 30.738586 342 V 114 L 228.192 0 Z"}},computed:{...(0,d.C9)("image",["shape"]),calculatedSrc(){return this.shouldLoad?this.src:""},calculatedSrcSet(){return this.shouldLoad?this.srcset:""},style(){return{"--image-height":"".concat(this.height,"px"),"--image-object-fit":this.objectFit,"--image-object-position":this.objectPosition}},isThumbnail(){return this.width<"150"},svgScale:()=>"scale(".concat(c,", ").concat(c,")")},watch:{src:"load",srcset:"load"},mounted(){var e;(this.loaded&&this.$emit("image:visible"),this.lazyload)?(null!==(e=f)&&void 0!==e||(f=new u),f.watch(this.$el,(({isIntersecting:e})=>{e&&this.load()}))):this.load();this.getImageDimensions()},beforeDestroy(){var e;null===(e=f)||void 0===e||e.unwatch(this.$el)},methods:{load(){this.shouldLoad=!0},getImageDimensions(){var e,t;this.height=(null===(e=this.$el)||void 0===e?void 0:e.offsetHeight)||"0",this.width=(null===(t=this.$el)||void 0===t?void 0:t.offsetWidth)||"0"},afterEnter(){this.$emit("image:visible")},onLoaded(){this.loaded=!0,this.getImageDimensions()}}};var g=n(27548),m=n.n(g);const v=(0,n(51900).Z)(p,(function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:t.$s.ImageWrapper},[t.loaded?t._e():a("m-skeleton-block",{class:[t.$s.Image,t.$s["shape_"+t.resolvedShape]]}),t._v(" "),a("m-transition-fade-in",{on:{"after-enter":t.afterEnter}},[a("img",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],class:(e={},e[t.$s.Image]=!0,e[t.$s["shape_"+t.resolvedShape]]=t.resolvedShape,e[t.$s.thumbnail]=t.isThumbnail,e),style:t.style,attrs:{srcset:t.calculatedSrcSet,sizes:t.sizes,src:t.calculatedSrc},on:{load:t.onLoaded}},"img",t.$attrs,!1),t.$listeners))]),t._v(" "),a("pseudo-window",{on:{resize:t.throttledResizeHandler}}),t._v(" "),a("div",{class:t.$s.ImageClipPaths},[a("svg",{attrs:{viewBox:"0 0 456 456",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("clipPath",{attrs:{id:"mImageHexPath",clipPathUnits:"objectBoundingBox",transform:t.svgScale}},[a("path",{attrs:{d:t.SVG_PATH,fill:"white"}})])])])])],1)}),[],!1,(function(e){this.$s=m().locals||m()}),null,null).exports},78378:(e,t,n)=>{"use strict";n.d(t,{s:()=>o,p:()=>k});const a={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(e){return this.$slots.default?this.$slots.default:e("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}};var i=n(72986),r=n.n(i),s=n(51900);const o=(0,s.Z)(a,undefined,undefined,!1,(function(e){this.$s=r().locals||r()}),null,null).exports;var l=Symbol();function d(e,t){e[l]||(e[l]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[l]||this.parentElement}}))}var h=function(e,t){var n=e.splice(0);t.append.apply(t,n),n.forEach((function(e){e[l]=void 0}))};function c(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[f]){var a=this[f].get(t);a&&(t=a[0])}t.before(e),d(e,this)}function u(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var n=this[f];if(n){var a=n.get(e);if(a)return h(a,e),n.delete(e),void(e[l]=void 0)}e.remove()}var f=Symbol(),p={insertBefore:c,removeChild:u},g=Symbol(),m={insertBefore:c,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[g],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[g]),n.forEach((function(e){return e.remove()}))},removeChild:u,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[g];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),d(e,this),this.frag.push(e)}};const v={directives:{frag:{inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,a=document.createComment("");e[g]=a,0===t.length&&t.push(a);var i=document.createDocumentFragment();i.append.apply(i,t),e.replaceWith(i),e.frag=t,function(e,t,n){e[f]||(e[f]=new Map,Object.assign(e,p)),e[f].set(t,n)}(n,e,t),d(e,n),t.forEach((function(t){return d(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var a=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,a))},get:function(){return""}}),Object.assign(e,m)},unbind:function(e){h(e.frag,e),e[g].remove()}}},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((e=>e.tag||e.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}};var _=n(32794),b=n.n(_);const k=(0,s.Z)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[e.loaded||e.children?[e._t("default")]:e._l(e.linesNum,(function(t){return n("div",e._g(e._b({key:"skeleton-text-"+t,class:e.$s.SkeletonText},"div",e.$attrs,!1),e.$listeners))}))],2)}),[],!1,(function(e){this.$s=b().locals||b()}),null,null).exports},62355:(e,t,n)=>{"use strict";n.d(t,{j:()=>s});var a=n(94569),i=n(45832);const r={components:{MTransition:a.T},inheritAttrs:!1,data:()=>({fadeInFn:i.dx,fadeOutFn:i.vq})};const s=(0,n(51900).Z)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("m-transition",e._g(e._b({attrs:{enter:e.fadeInFn,leave:e.fadeOutFn}},"m-transition",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null).exports},45227:(e,t,n)=>{var a=n(77705)((function(e){return e[1]}));a.push([e.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: var(--image-object-fit);\n\tobject-position: var(--image-object-position);\n\tborder-radius: var(--maker-shape-image-border-radius, 0px)\n}\n.Image_j_xX0.thumbnail__7QZj {\n\t\tborder-radius: var(--maker-shape-thumbnail-border-radius, 0px);\n}\n.Image_j_xX0.shape_square_NojeF {\n\t\tborder-radius: 0;\n}\n.Image_j_xX0.shape_circle_N3kcV {\n\t\tborder-radius: var(--image-height, 100%);\n}\n.Image_j_xX0.shape_arch__3RYa {\n\t\tborder-top-left-radius: var(--image-height);\n\t\tborder-top-right-radius: var(--image-height);\n}\n.Image_j_xX0.shape_hexagon_Vd_9P {\n\t\t-webkit-clip-path: url(#mImageHexPath);\n\t\tclip-path: url(#mImageHexPath);\n}\n.ImageClipPaths_D_JN8 {\n\twidth: 0;\n\theight: 0;\n\toverflow: hidden;\n}\n",""]),a.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0",thumbnail:"thumbnail__7QZj",shape_square:"shape_square_NojeF",shape_circle:"shape_circle_N3kcV",shape_arch:"shape_arch__3RYa",shape_hexagon:"shape_hexagon_Vd_9P",ImageClipPaths:"ImageClipPaths_D_JN8"},e.exports=a},8647:(e,t,n)=>{var a=n(77705)((function(e){return e[1]}));a.push([e.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: var(--maker-color-neutral-10, #f1f1f1);\n}\n100% { background-color: var(--maker-color-neutral-20, #d3d3d3);\n}\n}\n",""]),a.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},e.exports=a},33418:(e,t,n)=>{var a=n(77705)((function(e){return e[1]}));a.push([e.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: var(--maker-color-neutral-10, #f1f1f1);\n}\n100% { background-color: var(--maker-color-neutral-20, #d3d3d3);\n}\n}\n",""]),a.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},e.exports=a},27548:(e,t,n)=>{var a=n(45227);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(54023).Z)("14393fff",a,!0,{})},72986:(e,t,n)=>{var a=n(8647);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(54023).Z)("e53630ca",a,!0,{})},32794:(e,t,n)=>{var a=n(33418);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(54023).Z)("54e85523",a,!0,{})}}]);