(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[539],{6539:(o,r,t)=>{"use strict";t.d(r,{qo:()=>D,YH:()=>c,uH:()=>Z,C9:()=>N});var e=t(7727),n=t.n(e),l=t(4299),i=t.n(l),a=t(7674),s=t(4219);const c=Symbol("ThemeKey");var f=t(2032),u=t.n(f),d=t(6963),h=t.n(d),m=t(6613),p=t.n(m),g=t(6155),b=t.n(g),y=t(7556),v=t.n(y),x=t(8300),C=t.n(x),k=t(6975),w=t.n(k),F=t(6641),P=t.n(F);const W={critical:h(),warning:u(),success:p(),info:b(),chevronUp:v(),chevronDown:C(),chevronLeft:w(),chevronRight:P()};var _=t(643),O=t.n(_),T=t(2810),R=t.n(T),S=t(5692),B=t.n(S),$=t(2416);function z(o){return B()(o)&&o.startsWith("@")?this.resolve(this.getPath(o)):o}function I(o){if(!B()(o))throw new Error("cannot resolve pointer ".concat(o," it is not a string"));if(!o.startsWith("@"))throw new Error("cannot resolve pointer ".concat(o," it is missed the @ prefix"));const r=o.slice(1),t=O()(this,r);if(R()(t))throw new Error("invalid pointer ".concat(o," does not point to a field that exists within the theme"));return t}function N(o,r){const t={};for(const n of r)"pattern"===n?t.resolvedPattern=function(){if(!R()(this.pattern))return this.pattern;let r;const t=this.theme[o].pattern;if(R()(t)||(r=t),R()(r))return;const e=this.theme.resolve(r),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n)$.Z.error(n(e),'Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(o,'" in theme.'));else{var l;const r=null===(l=this.theme[o].patterns)||void 0===l?void 0:l[e];$.Z.error(r,'Invalid pattern "'.concat(e,'" for component "').concat(o,'" in theme.'))}return e}:t["resolved".concat((e=n,e[0].toUpperCase()+e.slice(1)))]=function(){if(!R()(this[n]))return this[n];let r;const t=this.theme[o][n];if(R()(t)||(r=t),!R()(this.resolvedPattern)){var e,l;const t=null===(e=this.theme[o].patterns)||void 0===e||null===(l=e[this.resolvedPattern])||void 0===l?void 0:l[n];R()(t)||(r=t)}if(R()(r))return;const i=this.theme.resolve(r),a=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return a&&$.Z.error(a(i),'Invalid value "'.concat(i,'" for prop "').concat(n,'" for component "').concat(o,'" in theme.')),i};var e;return t}function Z(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",contextualPrimary:{fill:"#000000",onFill:"#ffffff",text:"#000000",subtle:"#f5efef"},critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},icons:W,shapes:{defaultBorderRadius:"4px",cardBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:{},button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary",color:"@colors.contextualPrimary.fill"},tertiary:{variant:"tertiary",color:"@colors.contextualPrimary.fill"}}},link:{color:"@colors.primary"},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:"@colors.primary"},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",patterns:{error:{type:"error",iconName:"critical",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconName:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconName:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconName:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},primaryOutline:{textColor:"@colors.contextualPrimary.text",bgColor:"transparent"},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},primarySubtle:{textColor:"@colors.contextualPrimary.text",bgColor:"@colors.contextualPrimary.subtle"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},badge:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{}}},starrating:{color:"@colors.warning.fill"},progresscircle:{color:"@colors.contextualPrimary.fill",iconColor:"@colors.contextualPrimary.fill",iconName:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:z,getPath:I}}function q(o){var r;return null==o||null===(r=o[0])||void 0===r?void 0:r.id}function E(o){const r={};for(const t of o)r[t.id]=t;return r}function M(o,r){const t=E(o),e=E(r);return function(o){const r=[];for(const[t,e]of Object.entries(o))e.id=t,r.push(e);return r}(i()(t,e))}function U(o,r){return function(o){return o&&o.render}(r)?r:q(o)&&q(r)?M(o,r):void 0}function j(o,r,t,e){if(n()(o,r,t,U),e){const r=o.profiles[e];if(r)n()(o,r,U);else{const r=Object.keys(o.profiles);(0,s.K)("profile ".concat(e," doesn't exist within theme, only found: ").concat(r),"Theme")}}o.resolve=z,o.getPath=I}const H={inject:{parentTheme:{default:Z(),from:c}},provide(){return{[c]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:void 0}},data(){const o={};return j(o,this.parentTheme,this.theme,this.profile),o},computed:{styles(){const{colors:o,fonts:r,shapes:t}=this;return{"--maker-color-neutral-0":o["neutral-0"],"--maker-color-neutral-10":o["neutral-10"],"--maker-color-neutral-20":o["neutral-20"],"--maker-color-neutral-80":o["neutral-80"],"--maker-color-neutral-90":o["neutral-90"],"--maker-color-neutral-100":o["neutral-100"],"--maker-color-primary":o.primary,"--maker-color-background":o.background,"--maker-color-heading":o.heading,"--maker-color-body":o.body,"--maker-color-elevation":o.elevation,"--maker-color-overlay":o.overlay,"--maker-font-heading-font-family":r.heading.fontFamily,"--maker-font-heading-font-weight":r.heading.fontWeight,"--maker-font-body-font-family":r.body.fontFamily,"--maker-font-body-font-weight":r.body.fontWeight,"--maker-font-label-font-family":r.label.fontFamily,"--maker-font-label-font-weight":r.label.fontWeight,"--maker-shape-default-border-radius":t.defaultBorderRadius,"--maker-shape-card-border-radius":t.cardBorderRadius,"--maker-shape-button-border-radius":t.buttonBorderRadius,"--maker-shape-image-border-radius":t.imageBorderRadius,"--maker-shape-thumbnail-border-radius":"".concat((e=t.imageBorderRadius,n=0,l=8,Math.min(Math.max(Number.parseInt(e,a.U),n),l)),"px")};var e,n,l}},watch:{parentTheme:{handler(){j(this.$data,this.parentTheme,this.theme,this.profile)},deep:!0,immediate:!0}},beforeUpdate(){j(this.$data,this.parentTheme,this.theme,this.profile)}};var K=t(5004),A=t.n(K);const D=(0,t(1900).Z)(H,(function(){var o=this,r=o.$createElement;return(o._self._c||r)("div",{class:o.$s.Theme,style:o.styles},[o._t("default")],2)}),[],!1,(function(o){this.$s=A().locals||A()}),null,null).exports},2416:(o,r,t)=>{"use strict";t.d(r,{Z:()=>n});var e=t(4219);const n={warn(o,r,t){o||(0,e.K)(r,t)},error(o,r,t){o||(0,e._)(r,t)}}},7674:(o,r,t)=>{"use strict";t.d(r,{U:()=>e});const e=10},4219:(o,r,t)=>{"use strict";t.d(r,{_:()=>n,K:()=>l});const e=o=>["%c @square/maker/M".concat(o),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],n=(o,r)=>{throw console.error(...e(r),o),new Error("".concat((o=>"[@square/maker/M".concat(o,"]"))(r)," ").concat(o))},l=(o,r)=>{console.warn(...e(r),o)}},5820:(o,r,t)=>{var e=t(7705)((function(o){return o[1]}));e.push([o.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},o.exports=e},5004:(o,r,t)=>{var e=t(5820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);(0,t(4023).Z)("12fe2849",e,!0,{})}}]);