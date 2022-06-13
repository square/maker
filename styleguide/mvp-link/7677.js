(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7677],{87677:(o,t,r)=>{"use strict";r.d(t,{qo:()=>$,YH:()=>s,uH:()=>O,C9:()=>B});var e=r(85066),n=r.n(e),l=r(57727),a=r.n(l),i=r(67674);const s=Symbol("ThemeKey");var c=r(2032),f=r.n(c),u=r(16963),d=r.n(u),h=r(26613),m=r.n(h),p=r(86155),g=r.n(p);const b={critical:d(),warning:f(),success:m(),info:g()};var v=r(20643),y=r.n(v),x=r(92810),C=r.n(x),k=r(75692),w=r.n(k),F=r(32416);function W(o){return w()(o)&&o.startsWith("@")?this.resolve(this.getPath(o)):o}function _(o){if(!w()(o))throw new Error("cannot resolve pointer ".concat(o," it is not a string"));if(!o.startsWith("@"))throw new Error("cannot resolve pointer ".concat(o," it is missed the @ prefix"));const t=o.slice(1),r=y()(this,t);if(C()(r))throw new Error("invalid pointer ".concat(o," does not point to a field that exists within the theme"));return r}function B(o,t){const r={};for(const n of t)"pattern"===n?r.resolvedPattern=function(){if(!C()(this.pattern))return this.pattern;let t;const r=this.theme[o].pattern;if(C()(r)||(t=r),C()(t))return;const e=this.theme.resolve(t),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n)F.Z.error(n(e),'Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(o,'" in theme.'));else{var l;const t=null===(l=this.theme[o].patterns)||void 0===l?void 0:l[e];F.Z.error(t,'Invalid pattern "'.concat(e,'" for component "').concat(o,'" in theme.'))}return e}:r["resolved".concat((e=n,e[0].toUpperCase()+e.slice(1)))]=function(){if(!C()(this[n]))return this[n];let t;const r=this.theme[o][n];if(C()(r)||(t=r),!C()(this.resolvedPattern)){var e,l;const r=null===(e=this.theme[o].patterns)||void 0===e||null===(l=e[this.resolvedPattern])||void 0===l?void 0:l[n];C()(r)||(t=r)}if(C()(t))return;const a=this.theme.resolve(t),i=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return i&&F.Z.error(i(a),'Invalid value "'.concat(a,'" for prop "').concat(n,'" for component "').concat(o,'" in theme.')),a};var e;return r}function O(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},icons:b,shapes:{defaultBorderRadius:"4px",cardBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},link:{color:void 0},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",patterns:{error:{type:"error",iconName:"critical",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconName:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconName:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconName:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:W,getPath:_}}function R(o,t){if((r=t)&&r.render)return t;var r}function S(o,t,r,e){a()(o,t,r,R),a()(o,n()(o.profiles,{id:e}),R),o.resolve=W,o.getPath=_}const T={inject:{parentTheme:{default:O(),from:s}},provide(){return{[s]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const o={};return S(o,this.parentTheme,this.theme,this.profile),o},computed:{styles(){const{colors:o,fonts:t,shapes:r}=this;return{"--maker-color-neutral-0":o["neutral-0"],"--maker-color-neutral-10":o["neutral-10"],"--maker-color-neutral-20":o["neutral-20"],"--maker-color-neutral-80":o["neutral-80"],"--maker-color-neutral-90":o["neutral-90"],"--maker-color-neutral-100":o["neutral-100"],"--maker-color-primary":o.primary,"--maker-color-background":o.background,"--maker-color-heading":o.heading,"--maker-color-body":o.body,"--maker-color-elevation":o.elevation,"--maker-color-overlay":o.overlay,"--maker-font-heading-font-family":t.heading.fontFamily,"--maker-font-heading-font-weight":t.heading.fontWeight,"--maker-font-body-font-family":t.body.fontFamily,"--maker-font-body-font-weight":t.body.fontWeight,"--maker-font-label-font-family":t.label.fontFamily,"--maker-font-label-font-weight":t.label.fontWeight,"--maker-shape-default-border-radius":r.defaultBorderRadius,"--maker-shape-card-border-radius":r.cardBorderRadius,"--maker-shape-button-border-radius":r.buttonBorderRadius,"--maker-shape-image-border-radius":r.imageBorderRadius,"--maker-shape-thumbnail-border-radius":"".concat((e=r.imageBorderRadius,n=0,l=8,Math.min(Math.max(Number.parseInt(e,i.U),n),l)),"px")};var e,n,l}},beforeUpdate(){S(this.$data,this.parentTheme,this.theme,this.profile)}};var P=r(35004),z=r.n(P);const $=(0,r(51900).Z)(T,(function(){var o=this,t=o.$createElement;return(o._self._c||t)("div",{class:o.$s.Theme,style:o.styles},[o._t("default")],2)}),[],!1,(function(o){this.$s=z().locals||z()}),null,null).exports},32416:(o,t,r)=>{"use strict";r.d(t,{Z:()=>n});var e=r(14219);const n={warn(o,t,r){o||(0,e.K)(t,r)},error(o,t,r){o||(0,e._)(t,r)}}},67674:(o,t,r)=>{"use strict";r.d(t,{U:()=>e});const e=10},14219:(o,t,r)=>{"use strict";r.d(t,{_:()=>l,K:()=>a});const e="object"==typeof process&&"object"==typeof process.env&&!0,n=o=>["%c @square/maker".concat(o),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],l=(o,t)=>{throw console.error(...n(t),o),new Error("".concat((o=>"[@square/maker]".concat(o))(t)," ").concat(o))},a=(o,t)=>{e&&console.warn(...n(t),o)}},35820:(o,t,r)=>{var e=r(77705)((function(o){return o[1]}));e.push([o.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},o.exports=e},35004:(o,t,r)=>{var e=r(35820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);(0,r(54023).Z)("12fe2849",e,!0,{})}}]);