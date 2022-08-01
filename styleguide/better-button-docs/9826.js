(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[9826],{49826:(o,t,r)=>{"use strict";r.d(t,{qo:()=>D,YH:()=>c,uH:()=>q,C9:()=>Z});var e=r(57727),n=r.n(e),i=r(54299),l=r.n(i),a=r(67674),s=r(14219);const c=Symbol("ThemeKey");var f=r(2032),u=r.n(f),d=r(16963),h=r.n(d),m=r(26613),p=r.n(m),g=r(86155),b=r.n(g),v=r(17556),y=r.n(v),x=r(58300),C=r.n(x),k=r(36975),w=r.n(k),F=r(16641),W=r.n(F);const _={critical:h(),warning:u(),success:p(),info:b(),chevronUp:y(),chevronDown:C(),chevronLeft:w(),chevronRight:W()};var T=r(20643),O=r.n(T),R=r(92810),B=r.n(R),S=r(75692),$=r.n(S),z=r(32416);function I(o){return $()(o)&&o.startsWith("@")?this.resolve(this.getPath(o)):o}function P(o){if(!$()(o))throw new Error("cannot resolve pointer ".concat(o," it is not a string"));if(!o.startsWith("@"))throw new Error("cannot resolve pointer ".concat(o," it is missed the @ prefix"));const t=o.slice(1),r=O()(this,t);if(B()(r))throw new Error("invalid pointer ".concat(o," does not point to a field that exists within the theme"));return r}function Z(o,t){const r={};for(const n of t)"pattern"===n?r.resolvedPattern=function(){if(!B()(this.pattern))return this.pattern;let t;const r=this.theme[o].pattern;if(B()(r)||(t=r),B()(t))return;const e=this.theme.resolve(t),n=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(n)z.Z.error(n(e),'Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(o,'" in theme.'));else{var i;const t=null===(i=this.theme[o].patterns)||void 0===i?void 0:i[e];z.Z.error(t,'Invalid pattern "'.concat(e,'" for component "').concat(o,'" in theme.'))}return e}:r["resolved".concat((e=n,e[0].toUpperCase()+e.slice(1)))]=function(){if(!B()(this[n]))return this[n];let t;const r=this.theme[o][n];if(B()(r)||(t=r),!B()(this.resolvedPattern)){var e,i;const r=null===(e=this.theme[o].patterns)||void 0===e||null===(i=e[this.resolvedPattern])||void 0===i?void 0:i[n];B()(r)||(t=r)}if(B()(t))return;const l=this.theme.resolve(t),a=this.$vnode.componentOptions.Ctor.extendOptions.props[n].validator;return a&&z.Z.error(a(l),'Invalid value "'.concat(l,'" for prop "').concat(n,'" for component "').concat(o,'" in theme.')),l};var e;return r}function q(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",body:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000",critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}},fonts:{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}},icons:_,shapes:{defaultBorderRadius:"4px",cardBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"},profiles:{},button:{size:"medium",variant:"primary",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primary:{variant:"primary"},secondary:{variant:"secondary"},tertiary:{variant:"tertiary"}}},link:{color:"@colors.primary"},textbutton:{color:"@colors.primary",size:"medium",patterns:{error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"}}},choice:{selectedColor:"@colors.primary"},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",patterns:{error:{type:"error",iconName:"critical",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconName:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconName:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconName:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:I,getPath:P}}function E(o){var t;return null==o||null===(t=o[0])||void 0===t?void 0:t.id}function M(o){const t={};for(const r of o)t[r.id]=r;return t}function N(o,t){const r=M(o),e=M(t);return function(o){const t=[];for(const[r,e]of Object.entries(o))e.id=r,t.push(e);return t}(l()(r,e))}function U(o,t){return function(o){return o&&o.render}(t)?t:E(o)&&E(t)?N(o,t):void 0}function j(o,t,r,e){if(n()(o,t,r,U),e){const t=o.profiles[e];if(t)n()(o,t,U);else{const t=Object.keys(o.profiles);(0,s.K)("profile ".concat(e," doesn't exist within theme, only found: ").concat(t),"Theme")}}o.resolve=I,o.getPath=P}const H={inject:{parentTheme:{default:q(),from:c}},provide(){return{[c]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:void 0}},data(){const o={};return j(o,this.parentTheme,this.theme,this.profile),o},computed:{styles(){const{colors:o,fonts:t,shapes:r}=this;return{"--maker-color-neutral-0":o["neutral-0"],"--maker-color-neutral-10":o["neutral-10"],"--maker-color-neutral-20":o["neutral-20"],"--maker-color-neutral-80":o["neutral-80"],"--maker-color-neutral-90":o["neutral-90"],"--maker-color-neutral-100":o["neutral-100"],"--maker-color-primary":o.primary,"--maker-color-background":o.background,"--maker-color-heading":o.heading,"--maker-color-body":o.body,"--maker-color-elevation":o.elevation,"--maker-color-overlay":o.overlay,"--maker-font-heading-font-family":t.heading.fontFamily,"--maker-font-heading-font-weight":t.heading.fontWeight,"--maker-font-body-font-family":t.body.fontFamily,"--maker-font-body-font-weight":t.body.fontWeight,"--maker-font-label-font-family":t.label.fontFamily,"--maker-font-label-font-weight":t.label.fontWeight,"--maker-shape-default-border-radius":r.defaultBorderRadius,"--maker-shape-card-border-radius":r.cardBorderRadius,"--maker-shape-button-border-radius":r.buttonBorderRadius,"--maker-shape-image-border-radius":r.imageBorderRadius,"--maker-shape-thumbnail-border-radius":"".concat((e=r.imageBorderRadius,n=0,i=8,Math.min(Math.max(Number.parseInt(e,a.U),n),i)),"px")};var e,n,i}},watch:{parentTheme:{handler(){j(this.$data,this.parentTheme,this.theme,this.profile)},deep:!0,immediate:!0}},beforeUpdate(){j(this.$data,this.parentTheme,this.theme,this.profile)}};var K=r(35004),A=r.n(K);const D=(0,r(51900).Z)(H,(function(){var o=this,t=o.$createElement;return(o._self._c||t)("div",{class:o.$s.Theme,style:o.styles},[o._t("default")],2)}),[],!1,(function(o){this.$s=A().locals||A()}),null,null).exports},32416:(o,t,r)=>{"use strict";r.d(t,{Z:()=>n});var e=r(14219);const n={warn(o,t,r){o||(0,e.K)(t,r)},error(o,t,r){o||(0,e._)(t,r)}}},67674:(o,t,r)=>{"use strict";r.d(t,{U:()=>e});const e=10},14219:(o,t,r)=>{"use strict";r.d(t,{_:()=>n,K:()=>i});const e=o=>["%c @square/maker/M".concat(o),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],n=(o,t)=>{throw console.error(...e(t),o),new Error("".concat((o=>"[@square/maker/M".concat(o,"]"))(t)," ").concat(o))},i=(o,t)=>{console.warn(...e(t),o)}},35820:(o,t,r)=>{var e=r(77705)((function(o){return o[1]}));e.push([o.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body);\n\tfont-weight: var(--maker-font-body-font-weight);\n\tfont-family: var(--maker-font-body-font-family);\n\tbackground-color: var(--maker-color-background);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},o.exports=e},35004:(o,t,r)=>{var e=r(35820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);(0,r(54023).Z)("12fe2849",e,!0,{})}}]);