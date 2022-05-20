(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[5539],{85539:(t,n,o)=>{"use strict";o.d(n,{G:()=>m});var e=o(60771),r=o.n(e),i=o(69901),a=o(30648),l=o(46475);function s(t){return t.alpha(.3)}function c(t){return r().mix(t,"#000",.05)}function d(t){return r().mix(t,"#000",.1)}const u={primary:function(t){const n=r()(t.color),o=c(n),e=d(n),i=t.textColor?r()(t.textColor):void 0,a=(0,l.Z)(n,i),u=c(a),f=d(a),p=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":n.hex(),"--color-main-hover":o.hex(),"--color-main-active":e.hex(),"--color-contrast":a.hex(),"--color-contrast-hover":u.hex(),"--color-contrast-active":f.hex(),"--color-focus":p.hex()}},secondary:function(t){const n=r()(t.color),o=c(n),e=d(n),i=s(n);return{"--small-padding":"0 16px","--medium-padding":"0 24px","--large-padding":"0 32px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":o.hex(),"--color-contrast-active":e.hex(),"--color-focus":i.hex(),"--outline-border":"inset 0 0 0 1px var(--color-contrast)"}},tertiary:function(t){const n=r()(t.color),o=c(n),e=d(n),i=s(n);return{"--small-padding":"0 8px","--medium-padding":"0 12px","--large-padding":"0 20px","--color-main":"transparent","--color-main-hover":"rgba(0, 0, 0, 0.05)","--color-main-active":"rgba(0, 0, 0, 0.1)","--color-contrast":n.hex(),"--color-contrast-hover":o.hex(),"--color-contrast-active":e.hex(),"--color-focus":i.hex()}}},f={components:{MLoading:i.g},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:"button"},size:{type:String,default:void 0,validator:t=>["small","medium","large"].includes(t)},fullWidth:{type:Boolean,default:void 0},color:{type:String,default:void 0,validator:t=>r().valid(t)},textColor:{type:String,default:void 0,validator:t=>r().valid(t)},variant:{type:String,default:void 0,validator:t=>["primary","secondary","tertiary"].includes(t)},shape:{type:String,default:void 0,validator:t=>["squared","rounded","pill"].includes(t)},disabled:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:t=>["center","stack","space-between"].includes(t)},loading:{type:Boolean,default:!1}},computed:{...(0,a.C9)("button",["color","size","textColor","variant","shape","align","fullWidth","pattern"]),style(){return u[this.resolvedVariant]({color:this.resolvedColor,textColor:this.resolvedTextColor})},isDisabled(){return this.disabled||this.loading}},methods:{isSingleChild(){if(this.$scopedSlots.information)return!1;const t=(this.$slots.default||[]).filter((t=>t.tag||t.text.trim().length>0));return 1===t.length&&t[0].tag}}};var p=o(3441),h=o.n(p);const m=(0,o(51900).Z)(f,(function(){var t,n=this,o=n.$createElement,e=n._self._c||o;return e("button",n._g(n._b({class:[n.$s.Button,n.$s["size_"+n.resolvedSize],n.$s["shape_"+n.resolvedShape],n.$s["align_"+n.resolvedAlign],(t={},t[n.$s.fullWidth]=n.resolvedFullWidth,t[n.$s.iconButton]=n.isSingleChild()&&!n.resolvedFullWidth,t[n.$s.loading]=n.loading,t)],style:n.style,attrs:{type:n.type,disabled:n.isDisabled}},"button",n.$attrs,!1),n.$listeners),[n.loading?e("m-loading",{class:n.$s.Loading}):n._e(),n._v(" "),e("span",{class:n.$s.MainText},[n._t("default")],2),n._v(" "),n.$scopedSlots.information?e("span",{class:n.$s.InformationText},[n._t("information")],2):n._e()],1)}),[],!1,(function(t){this.$s=h().locals||h()}),null,null).exports},69901:(t,n,o)=>{"use strict";o.d(n,{g:()=>a});const e={props:{size:{type:String,default:"normal",validator:t=>["normal","large"].includes(t)}}};var r=o(17531),i=o.n(r);const a=(0,o(51900).Z)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{class:t.$s.Loading},[o("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=i().locals||i()}),null,null).exports},30648:(t,n,o)=>{"use strict";o.d(n,{qo:()=>w,YH:()=>l,uH:()=>_,C9:()=>v});var e=o(85066),r=o.n(e),i=o(54299),a=o.n(i);const l=Symbol("ThemeKey");var s=o(20643),c=o.n(s),d=o(92810),u=o.n(d),f=o(75692),p=o.n(f),h=o(32416);function m(t){return p()(t)&&t.startsWith("@")?this.resolve(this.getPath(t)):t}function g(t){if(!p()(t))throw new Error("cannot resolve pointer ".concat(t," it is not a string"));if(!t.startsWith("@"))throw new Error("cannot resolve pointer ".concat(t," it is missed the @ prefix"));const n=t.slice(1),o=c()(this,n);if(u()(o))throw new Error("invalid pointer ".concat(t," does not point to a field that exists within the theme"));return o}function v(t,n){const o={};for(const r of n)"pattern"===r?o.resolvedPattern=function(){if(!u()(this.pattern))return this.pattern;let n;const o=this.theme[t].pattern;if(u()(o)||(n=o),u()(n))return;const e=this.theme.resolve(n),r=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(r)h.Z.error(r(e),'Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(t,'" in theme.'));else{var i;const n=null===(i=this.theme[t].patterns)||void 0===i?void 0:i[e];h.Z.error(n,'Invalid pattern "'.concat(e,'" for component "').concat(t,'" in theme.'))}return e}:o["resolved".concat((e=r,e[0].toUpperCase()+e.slice(1)))]=function(){if(!u()(this[r]))return this[r];let n;const o=this.theme[t][r];if(u()(o)||(n=o),!u()(this.resolvedPattern)){var e,i;const o=null===(e=this.theme[t].patterns)||void 0===e||null===(i=e[this.resolvedPattern])||void 0===i?void 0:i[r];u()(o)||(n=o)}if(u()(n))return;const a=this.theme.resolve(n),l=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return l&&h.Z.error(l(a),'Invalid value "'.concat(a,'" for prop "').concat(r,'" for component "').concat(t,'" in theme.')),a};var e;return o}function _(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},shapes:{defaultBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontFamily",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]',patterns:{error:{type:"error",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:m,getPath:g}}function b(t,n,o,e){a()(t,n,o),a()(t,r()(t.profiles,{id:e})),t.colors={...t.colors},t.resolve=m,t.getPath=g}const x={inject:{parentTheme:{default:_(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const t={};return b(t,this.parentTheme,this.theme,this.profile),t},computed:{styles(){const{colors:t,fonts:n,shapes:o}=this;return{"--maker-color-neutral-0":t["neutral-0"],"--maker-color-neutral-10":t["neutral-10"],"--maker-color-neutral-20":t["neutral-20"],"--maker-color-neutral-80":t["neutral-80"],"--maker-color-neutral-90":t["neutral-90"],"--maker-color-neutral-100":t["neutral-100"],"--maker-color-primary":t.primary,"--maker-color-background":t.background,"--maker-color-heading":t.heading,"--maker-color-body":t.body,"--maker-color-elevation":t.elevation,"--maker-color-overlay":t.overlay,"--maker-font-heading-font-family":n.heading.fontFamily,"--maker-font-heading-font-weight":n.heading.fontWeight,"--maker-font-body-font-family":n.body.fontFamily,"--maker-font-body-font-weight":n.body.fontWeight,"--maker-font-label-font-family":n.label.fontFamily,"--maker-font-label-font-weight":n.label.fontWeight,"--maker-shape-default-border-radius":o.defaultBorderRadius,"--maker-shape-button-border-radius":o.buttonBorderRadius,"--maker-shape-image-border-radius":o.imageBorderRadius}}},beforeUpdate(){b(this.$data,this.parentTheme,this.theme,this.profile)}};var y=o(35004),k=o.n(y);const w=(0,o(51900).Z)(x,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Theme,style:t.styles},[t._t("default")],2)}),[],!1,(function(t){this.$s=k().locals||k()}),null,null).exports},32416:(t,n,o)=>{"use strict";o.d(n,{Z:()=>r});var e=o(14219);const r={warn(t,n,o){t||(0,e.K)(n,o)},error(t,n,o){t||(0,e._)(n,o)}}},14219:(t,n,o)=>{"use strict";o.d(n,{_:()=>i,K:()=>a});const e="object"==typeof process&&"object"==typeof process.env&&!0,r=t=>["%c @square/maker".concat(t),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(t,n)=>{throw console.error(...r(n),t),new Error("".concat((t=>"[@square/maker]".concat(t))(n)," ").concat(t))},a=(t,n)=>{e&&console.warn(...r(n),t)}},46475:(t,n,o)=>{"use strict";o.d(n,{Z:()=>i});var e=o(60771),r=o.n(e);const i=function(t,n){if(!n||r().contrast(t,n)<3){const n=.32,o=t.luminance()>n;return r()(o?"#000":"#fff")}return n}},20758:(t,n,o)=>{var e=o(77705)((function(t){return t[1]}));e.push([t.id,"\n.Button_vQBWk {\n\t--radius-rounded-button: 8px;\n\t--radius-pill-button: 32px;\n\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, var(--radius-rounded-button));\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_vQBWk.shape_squared_IPrN0 {\n\t\tborder-radius: 0;\n}\n.Button_vQBWk.shape_rounded_UM3O1 {\n\t\tborder-radius: var(--radius-rounded-button);\n}\n.Button_vQBWk.shape_pill_aYEm0 {\n\t\tborder-radius: var(--radius-pill-button);\n}\n.Button_vQBWk.iconButton_u2Q6y {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_vQBWk.size_small_tMshx {\n\t\theight: 32px;\n\t\tpadding: var(--small-padding);\n\t\tfont-size: 12px\n}\n.Button_vQBWk.size_small_tMshx > * {\n\t\t\tline-height: 1.4;\n}\n.Button_vQBWk.size_small_tMshx.iconButton_u2Q6y {\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_medium_S6z9M {\n\t\theight: 48px;\n\t\tpadding: var(--medium-padding);\n\t\tfont-size: 14px\n}\n.Button_vQBWk.size_medium_S6z9M > * {\n\t\t\tline-height: 1.77;\n}\n.Button_vQBWk.size_medium_S6z9M.iconButton_u2Q6y {\n\t\t\twidth: 48px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.size_large_pt7y9 {\n\t\theight: 64px;\n\t\tpadding: var(--large-padding);\n\t\tfont-size: 16px\n}\n.Button_vQBWk.size_large_pt7y9 > * {\n\t\t\tline-height: 1.5;\n}\n.Button_vQBWk.size_large_pt7y9.iconButton_u2Q6y {\n\t\t\twidth: 64px;\n\t\t\tpadding: 0;\n}\n.Button_vQBWk.iconButton_u2Q6y > * {\n\t\tline-height: 0;\n}\n.Button_vQBWk.fullWidth_vaDLi {\n\t\twidth: 100%;\n}\n.Button_vQBWk.align_center__N8aS {\n\t\tjustify-content: center;\n}\n.Button_vQBWk.align_stack_XfpCI {\n\t\tflex-direction: column;\n}\n.Button_vQBWk.align_space-between_cvBfb {\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: space-between;\n}\n.Button_vQBWk:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Button_vQBWk:focus {\n\t\t--focus-border:\n\t\t\t0 0 0 1px var(--maker-color-neutral-20, #fff),\n\t\t\t0 0 0 3px var(--color-focus);\n}\n.Button_vQBWk:hover:not(:disabled) {\n\t\tcolor: var(--color-contrast-hover);\n\t\tbackground-color: var(--color-main-hover);\n}\n.Button_vQBWk:active:not(:disabled) {\n\t\tcolor: var(--color-contrast-active);\n\t\tbackground-color: var(--color-main-active);\n}\n.Button_vQBWk.loading_f3zc7 {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_LttwZ {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_DK0_A {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.InformationText_djO_J {\n\twidth: -webkit-min-content;\n\twidth: min-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n.Button_vQBWk.align_center__N8aS .InformationText_djO_J {\n\tmargin-left: 8px;\n}\n.Button_vQBWk.align_space-between_cvBfb .InformationText_djO_J {\n\tmargin-right: 8px;\n}\n",""]),e.locals={Button:"Button_vQBWk",shape_squared:"shape_squared_IPrN0",shape_rounded:"shape_rounded_UM3O1",shape_pill:"shape_pill_aYEm0",iconButton:"iconButton_u2Q6y",size_small:"size_small_tMshx",size_medium:"size_medium_S6z9M",size_large:"size_large_pt7y9",fullWidth:"fullWidth_vaDLi",align_center:"align_center__N8aS",align_stack:"align_stack_XfpCI","align_space-between":"align_space-between_cvBfb",loading:"loading_f3zc7",Loading:"Loading_LttwZ",MainText:"MainText_DK0_A",InformationText:"InformationText_djO_J"},t.exports=e},39832:(t,n,o)=>{var e=o(77705)((function(t){return t[1]}));e.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),e.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=e},35820:(t,n,o)=>{var e=o(77705)((function(t){return t[1]}));e.push([t.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},t.exports=e},3441:(t,n,o)=>{var e=o(20758);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,o(54023).Z)("180e274e",e,!0,{})},17531:(t,n,o)=>{var e=o(39832);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,o(54023).Z)("7ac45ae2",e,!0,{})},35004:(t,n,o)=>{var e=o(35820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);(0,o(54023).Z)("12fe2849",e,!0,{})}}]);