(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[855],{6010:(o,r,t)=>{"use strict";t.d(r,{qo:()=>lo,YH:()=>a,uH:()=>L,C9:()=>G});var e=t(7727),l=t.n(e),n=t(4299),i=t.n(n),c=t(4219);const a=Symbol("ThemeKey");var s=t(2032),u=t.n(s),f=t(6963),h=t.n(f),d=t(6613),m=t.n(d),g=t(6155),p=t.n(g),b=t(7556),x=t.n(b),y=t(8300),C=t.n(y),v=t(6975),w=t.n(v),k=t(6641),F=t.n(k),P=t(9893),S=t.n(P),W=t(7858),O=t.n(W),T=t(7389),_=t.n(T);var I=t(643),N=t.n(I),R=t(2810),z=t.n(R),B=t(5692),$=t.n(B),Z=t(2416);function q(o){return $()(o)&&o.startsWith("@")?this.resolve(this.getPath(o)):o}function E(o){if(!$()(o))throw new Error("cannot resolve pointer ".concat(o," it is not a string"));if(!o.startsWith("@"))throw new Error("cannot resolve pointer ".concat(o," it is missed the @ prefix"));const r=o.slice(1),t=N()(this,r);if(z()(t))throw new Error("invalid pointer ".concat(o," does not point to a field that exists within the theme"));return t}function G(o,r){const t={};for(const l of r)"pattern"===l?t.resolvedPattern=function(){if(!z()(this.pattern))return this.pattern;let r;const t=this.theme[o].pattern;if(z()(t)||(r=t),z()(r))return;const e=this.theme.resolve(r),l=this.$vnode.componentOptions.Ctor.extendOptions.props.pattern.validator;if(l)Z.Z.error(l(e),'Invalid value "'.concat(e,'" for prop "pattern" for component "').concat(o,'" in theme.'),"Theme");else{var n;const r=null===(n=this.theme[o].patterns)||void 0===n?void 0:n[e];Z.Z.error(r,'Invalid pattern "'.concat(e,'" for component "').concat(o,'" in theme.'),"Theme")}return e}:t["resolved".concat((e=l,e[0].toUpperCase()+e.slice(1)))]=function(){if(!z()(this[l]))return this[l];let r;const t=this.theme[o][l];if(z()(t)||(r=t),!z()(this.resolvedPattern)){var e,n;const t=null===(e=this.theme[o].patterns)||void 0===e||null===(n=e[this.resolvedPattern])||void 0===n?void 0:n[l];z()(t)||(r=t)}if(z()(r))return;const i=this.theme.resolve(r),c=this.$vnode.componentOptions.Ctor.extendOptions.props[l].validator;return c&&Z.Z.error(c(i),'Invalid value "'.concat(i,'" for prop "').concat(l,'" for component "').concat(o,'" in theme.'),"Theme"),i};var e;return t}var M=t(102),j=t.n(M),A=t(5466),H=t.n(A),K=t(2491),U=t.n(K);function L(){return{colors:j()(),fonts:H()(),icons:{critical:h(),warning:u(),success:m(),info:p(),chevronUp:x(),chevronDown:C(),chevronLeft:w(),chevronRight:F(),close:S(),plus:O(),arrowUp:_()},shapes:U()(),profiles:{},button:{size:"medium",variant:"fill",shape:void 0,color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center",patterns:{primaryFill:{color:"@colors.contextualPrimary.fill",textColor:"@colors.contextualPrimary.onFill"},errorFill:{color:"@colors.critical.fill",textColor:"@colors.critical.onFill"},successFill:{color:"@colors.success.fill",textColor:"@colors.success.onFill"},warningFill:{color:"@colors.warning.fill",textColor:"@colors.warning.onFill"},infoFill:{color:'@colors["neutral-90"]',textColor:'@colors["neutral-10"]'},primaryOutline:{variant:"outline",color:"@colors.contextualPrimary.text"},errorOutline:{variant:"outline",color:"@colors.critical.text"},successOutline:{variant:"outline",color:"@colors.success.text"},warningOutline:{variant:"outline",color:"@colors.warning.text"},infoOutline:{variant:"outline",color:'@colors["neutral-90"]'},primarySubtle:{textColor:"@colors.contextualPrimary.text",color:"@colors.contextualPrimary.subtle"},errorSubtle:{textColor:"@colors.critical.text",color:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",color:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",color:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',color:'@colors["neutral-10"]'},primaryGhost:{variant:"ghost",color:"@colors.contextualPrimary.text"},errorGhost:{variant:"ghost",color:"@colors.critical.text"},successGhost:{variant:"ghost",color:"@colors.success.text"},warningGhost:{variant:"ghost",color:"@colors.warning.text"},infoGhost:{variant:"ghost",color:'@colors["neutral-90"]'}}},link:{color:"@colors.primary"},textbutton:{color:"@colors.primary",size:"medium",patterns:{primary:{color:"@colors.contextualPrimary.text"},error:{color:"@colors.critical.text"},success:{color:"@colors.success.text"},warning:{color:"@colors.warning.text"},info:{color:'@colors["neutral-90"]'}}},actionbarbutton:{color:"@colors.primary",shape:void 0,textColor:void 0,fullWidth:!1,align:"center"},image:{shape:void 0},card:{shape:void 0},text:{size:0,fontFamily:"@fonts.body.fontFamily",color:"@colors.body",element:"p",fontWeight:"@fonts.body.fontWeight",fontStyle:"inherit",textTransform:"inherit",textAlign:"inherit",patterns:{headline:{size:7,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h1",color:"@colors.heading"},title:{size:3,fontFamily:"@fonts.heading.fontFamily",fontWeight:"@fonts.heading.fontWeight",element:"h2",color:"@colors.heading"},paragraph:{},label:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight"},buttonLabel:{fontFamily:"@fonts.label.fontFamily",fontWeight:"@fonts.label.fontWeight",fontSize:"inherit"}}},choice:{selectedColor:"@colors.primary"},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{type:"info",patterns:{primary:{iconColor:"@colors.contextualPrimary.fill",color:"@colors.contextualPrimary.text",bgColor:"@colors.contextualPrimary.subtle"},error:{type:"error",iconName:"critical",iconColor:"@colors.critical.fill",color:"@colors.critical.text",bgColor:"@colors.critical.subtle"},success:{type:"success",iconName:"success",iconColor:"@colors.success.fill",color:"@colors.success.text",bgColor:"@colors.success.subtle"},warning:{type:"warning",iconName:"warning",iconColor:"@colors.warning.fill",color:"@colors.warning.text",bgColor:"@colors.warning.subtle"},info:{type:"info",iconName:"info",iconColor:'@colors["neutral-80"]',color:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},pill:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{},primaryOutline:{textColor:"@colors.contextualPrimary.text",bgColor:"transparent"},errorOutline:{textColor:"@colors.critical.text",bgColor:"transparent"},successOutline:{textColor:"@colors.success.text",bgColor:"transparent"},warningOutline:{textColor:"@colors.warning.text",bgColor:"transparent"},infoOutline:{textColor:'@colors["neutral-90"]',bgColor:"transparent"},primarySubtle:{textColor:"@colors.contextualPrimary.text",bgColor:"@colors.contextualPrimary.subtle"},errorSubtle:{textColor:"@colors.critical.text",bgColor:"@colors.critical.subtle"},successSubtle:{textColor:"@colors.success.text",bgColor:"@colors.success.subtle"},warningSubtle:{textColor:"@colors.warning.text",bgColor:"@colors.warning.subtle"},infoSubtle:{textColor:'@colors["neutral-90"]',bgColor:'@colors["neutral-10"]'}}},badge:{textColor:'@colors["neutral-0"]',bgColor:'@colors["neutral-90"]',patterns:{primary:{textColor:"@colors.contextualPrimary.onFill",bgColor:"@colors.contextualPrimary.fill"},error:{textColor:"@colors.critical.onFill",bgColor:"@colors.critical.fill"},success:{textColor:"@colors.success.onFill",bgColor:"@colors.success.fill"},warning:{textColor:"@colors.warning.onFill",bgColor:"@colors.warning.fill"},info:{}}},toast:{persistent:!1,dismissAfter:5e3,iconName:"info",showIcon:!1,bgColor:"@colors.background",color:"@colors.body",accentColor:"@colors.body",patterns:{info:{},success:{iconName:"success",showIcon:!0,accentColor:"@colors.success.fill"},warning:{iconName:"warning",showIcon:!0,accentColor:"@colors.warning.fill"},error:{iconName:"critical",showIcon:!0,accentColor:"@colors.critical.fill"},primary:{accentColor:"@colors.contextualPrimary.fill"}}},starrating:{color:"@colors.warning.fill"},progresscircle:{color:'@colors["neutral-100"]',iconColor:'@colors["neutral-100"]',iconName:void 0},progressbar:{color:'@colors["neutral-100"]',size:"medium",shape:void 0},modal:{color:"@colors.body",bgColor:"@colors.background"},dialog:{color:"@colors.body",bgColor:"@colors.background"},blade:{color:"@colors.body",bgColor:"@colors.background"},container:{color:void 0,bgColor:void 0},resolve:q,getPath:E}}var D=t(8479),Y=t.n(D);function J(o){var r;return null==o||null===(r=o[0])||void 0===r?void 0:r.id}function Q(o){const r={};for(const t of o)r[t.id]=t;return r}function V(o,r){const t=Q(o),e=Q(r);return function(o){const r=[];for(const[t,e]of Object.entries(o))e.id=t,r.push(e);return r}(i()(t,e))}function X(o,r){return function(o){return o&&o.render}(r)?r:J(o)&&J(r)?V(o,r):void 0}function oo(o,r,t,e){if(l()(o,r,t,X),e){const r=o.profiles[e];if(r)l()(o,r,X);else{const r=Object.keys(o.profiles);(0,c.K)("profile ".concat(e," doesn't exist within theme, only found: ").concat(r),"Theme")}}o.resolve=q,o.getPath=E}const ro={inject:{parentTheme:{default:L(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:void 0}},data(){const o={};return oo(o,this.parentTheme,this.theme,this.profile),o},computed:{styles(){return Y()(this)}},watch:{parentTheme:{handler(){oo(this.$data,this.parentTheme,this.theme,this.profile)},deep:!0,immediate:!0}},beforeUpdate(){oo(this.$data,this.parentTheme,this.theme,this.profile)}};var to=t(5004),eo=t.n(to);const lo=(0,t(1900).Z)(ro,(function(){var o=this,r=o.$createElement;return(o._self._c||r)("div",{class:o.$s.Theme,style:o.styles},[o._t("default")],2)}),[],!1,(function(o){this.$s=eo().locals||eo()}),null,null).exports},102:o=>{o.exports=function(){return{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",body:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.32)",primary:"#006aff",contextualPrimary:{fill:"#006aff",onFill:"#ffffff",subtle:"#eff2f5",text:"#1c54c7"},critical:{fill:"#cd2026",onFill:"#ffffff",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",onFill:"#000000",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",onFill:"#ffffff",text:"#0a7A06",subtle:"#ebf1eb"}}}},5466:o=>{o.exports=function(){return{baseSize:16,sizeScale:1.17,heading:{fontFamily:"inherit",fontWeight:"500"},body:{fontFamily:"inherit",fontWeight:"400"},label:{fontFamily:"inherit",fontWeight:"500"}}}},2491:o=>{o.exports=function(){return{defaultBorderRadius:"4px",cardBorderRadius:"4px",buttonBorderRadius:"4px",imageBorderRadius:"0px"}}},8479:o=>{o.exports=function(o){const{colors:r,fonts:t,shapes:e}=o;return{"--maker-color-neutral-0":r["neutral-0"],"--maker-color-neutral-10":r["neutral-10"],"--maker-color-neutral-20":r["neutral-20"],"--maker-color-neutral-80":r["neutral-80"],"--maker-color-neutral-90":r["neutral-90"],"--maker-color-neutral-100":r["neutral-100"],"--maker-color-primary":r.primary,"--maker-color-background":r.background,"--maker-color-heading":r.heading,"--maker-color-body":r.body,"--maker-color-elevation":r.elevation,"--maker-color-overlay":r.overlay,"--maker-font-heading-font-family":t.heading.fontFamily,"--maker-font-heading-font-weight":t.heading.fontWeight,"--maker-font-body-font-family":t.body.fontFamily,"--maker-font-body-font-weight":t.body.fontWeight,"--maker-font-label-font-family":t.label.fontFamily,"--maker-font-label-font-weight":t.label.fontWeight,"--maker-shape-default-border-radius":e.defaultBorderRadius,"--maker-shape-card-border-radius":e.cardBorderRadius,"--maker-shape-button-border-radius":e.buttonBorderRadius,"--maker-shape-image-border-radius":e.imageBorderRadius,"--maker-shape-thumbnail-border-radius":"".concat((l=e.imageBorderRadius,n=0,i=8,Math.min(Math.max(Number.parseInt(l,10),n),i)),"px")};var l,n,i}},2416:(o,r,t)=>{"use strict";t.d(r,{Z:()=>l});var e=t(4219);const l={warn(o,r,t){o||(0,e.K)(r,t)},error(o,r,t){o||(0,e._)(r,t)}}},7060:(o,r,t)=>{"use strict";t.d(r,{Z:()=>e});const e=function(o){return function(r){return!t.g.CSS||t.g.CSS.supports(o,r)}}},4219:(o,r,t)=>{"use strict";t.d(r,{_:()=>l,K:()=>n});const e=o=>["%c @square/maker/M".concat(o),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],l=(o,r)=>{throw console.error(...e(r),o),new Error("".concat((o=>"[@square/maker/M".concat(o,"]"))(r)," ").concat(o))},n=(o,r)=>{console.warn(...e(r),o)}},5820:(o,r,t)=>{var e=t(7705)((function(o){return o[1]}));e.push([o.id,"\n.Theme_rI2oH {\n\tcolor: var(--maker-color-body, #000000);\n\tfont-weight: var(--maker-font-body-font-weight, 400);\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tbackground-color: var(--maker-color-background, #ffffff);\n}\n",""]),e.locals={Theme:"Theme_rI2oH"},o.exports=e},5004:(o,r,t)=>{var e=t(5820);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals);(0,t(4023).Z)("12fe2849",e,!0,{})}}]);