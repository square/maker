(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7134],{64229:(n,a,t)=>{"use strict";t.d(a,{qo:()=>_,YH:()=>l,uH:()=>k,C9:()=>f});var o=t(85066),e=t.n(o),d=t(54299),r=t.n(d);const l=Symbol("ThemeKey");var i=t(20643),m=t.n(i),s=t(92810),c=t.n(s),p=t(75692),v=t.n(p),b=t(32416);function h(n){return v()(n)&&n.startsWith("@")?this.getPath(n):n}function u(n){if(!v()(n))throw new Error("cannot resolve pointer ".concat(n," it is not a string"));if(!n.startsWith("@"))throw new Error("cannot resolve pointer ".concat(n," it is missed the @ prefix"));const a=n.slice(1),t=m()(this,a);if(c()(t))throw new Error("invalid pointer ".concat(n," does not point to a field that exists within the theme"));return t}function f(n,a){const t={};for(const e of a)t["resolved".concat((o=e,o[0].toUpperCase()+o.slice(1)))]=function(){if(!c()(this[e]))return this[e];const a=this.theme[n][e];if(a){const t=a,o=this.theme.resolve(t),d=this.$vnode.componentOptions.Ctor.extendOptions.props[e].validator;return d&&b.Z.error(d(o),'Invalid value "'.concat(o,'" for prop "').concat(e,'" for component "').concat(n,'" in theme.')),o}};var o;return t}function k(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"inherit",text:"inherit",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},shapes:{squared:{defaultBorderRadius:"0px",buttonBorderRadius:"0px",imageBorderRadius:"0px"},rounded:{defaultBorderRadius:"4px",buttonBorderRadius:"8px",imageBorderRadius:"16px"},pill:{defaultBorderRadius:"4px",buttonBorderRadius:"100px",imageBorderRadius:"16px"},global:"rounded"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"@shapes.global",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"@shapes.global",textColor:void 0,fullWidth:!1,align:"center"},image:{shape:"@shapes.global"},card:{shape:"@shapes.global"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]'},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},dialog:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:h,getPath:u}}function y(n,a,t,o){r()(n,a,t),r()(n,e()(n.profiles,{id:o})),n.colors={...n.colors},n.resolve=h,n.getPath=u}const w={inject:{parentTheme:{default:k(),from:l}},provide(){return{[l]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return y(n,this.parentTheme,this.theme,this.profile),n},computed:{styles(){const{colors:n,shapes:a}=this,t=a[a.global];return{"--neutral-0":n["neutral-0"],"--neutral-10":n["neutral-10"],"--neutral-20":n["neutral-20"],"--neutral-80":n["neutral-80"],"--neutral-90":n["neutral-90"],"--neutral-100":n["neutral-100"],"--color-background":n.background,"--color-heading":n.heading,"--color-text":n.text,"--color-elevation":n["color-elevation"],"--color-overlay":n["color-overlay"],"--maker-shape-default-border-radius":t.defaultBorderRadius,"--maker-shape-button-border-radius":t.buttonBorderRadius}}},beforeUpdate(){y(this.$data,this.parentTheme,this.theme,this.profile)}};var g=t(35004),x=t.n(g);const _=(0,t(51900).Z)(w,(function(){var n=this,a=n.$createElement;return(n._self._c||a)("div",{class:n.$s.Theme,style:n.styles},[n._t("default")],2)}),[],!1,(function(n){this.$s=x().locals||x()}),null,null).exports},57346:(n,a,t)=>{"use strict";t.d(a,{S:()=>d});var o=t(43941),e=t.n(o);const d=(0,t(51900).Z)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{class:n.$s.Container},[n._t("control"),n._v(" "),n.$slots.error?t("span",{class:n.$s.Error},[n._t("error")],2):n._e()],2)}),[],!1,(function(n){this.$s=e().locals||e()}),null,null).exports},32416:(n,a,t)=>{"use strict";t.d(a,{Z:()=>e});var o=t(14219);const e={warn(n,a,t){n||(0,o.K)(a,t)},error(n,a,t){n||(0,o._)(a,t)}}},14219:(n,a,t)=>{"use strict";t.d(a,{_:()=>d,K:()=>r});const o="object"==typeof process&&"object"==typeof process.env&&!0,e=n=>["%c @square/maker".concat(n),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],d=(n,a)=>{throw console.error(...e(a),n),new Error("".concat((n=>"[@square/maker]".concat(n))(a)," ").concat(n))},r=(n,a)=>{o&&console.warn(...e(a),n)}},58950:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n\tMost (if not all) of these should be provided\n\tby the Theme Context, but this is a placeholder\n\tuntil we get a Theme Context component\n*/\n.variant_fill_ugQyA {\n\t--color-background: var(--neutral-10, #f6f7f9);\n\t--color-border: transparent;\n}\n.variant_outline_dYYZt {\n\t--color-border: var(--neutral-20, rgba(0, 0, 0, 0.3));\n}\n.Textarea_VsZKt {\n\t--color-placeholder: var(--neutral-80, rgba(0, 0, 0, 0.55));\n\t--color-foreground: var(--neutral-90, rgba(0, 0, 0, 0.9));\n\t--color-border-active: var(--neutral-80, #222);\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tbox-sizing: border-box;\n\twidth: 100%;\n\n\t/* top & bottom padding + 3 line-heights */\n\tmin-height: calc(12px * 2 + 24px * 3);\n\tpadding: 12px 16px;\n\tcolor: var(--color-foreground);\n\tfont-size: 16px;\n\tfont-family: inherit;\n\tfont-family: var(--font-family);\n\tline-height: 24px;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: var(--maker-shape-default-border-radius, 8px);\n\toutline: none;\n\ttransition:\n\t\tborder 0.2s ease,\n\t\tbackground-color 0.2s ease,\n\t\tcolor 0.2s ease;\n\tresize: none\n}\n.Textarea_VsZKt::placeholder {\n\t\tcolor: var(--color-placeholder);\n}\n.Textarea_VsZKt:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.Textarea_VsZKt:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Textarea_VsZKt:hover:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-border-active);\n}\n.Textarea_VsZKt:active:not(:disabled, :invalid), .Textarea_VsZKt:focus:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-border-active);\n}\n.Textarea_VsZKt.resizable_RzrdQ {\n\t\tresize: vertical;\n}\n",""]),o.locals={variant_fill:"variant_fill_ugQyA",variant_outline:"variant_outline_dYYZt",Textarea:"Textarea_VsZKt",resizable:"resizable_RzrdQ"},n.exports=o},35820:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),o.locals={Theme:"Theme_rI2oH"},n.exports=o},30263:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.Container_rLuTK {\n\tfont-size: 14px;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.Error__kSnm {\n\t/* provided by theme eventually */\n\t--color-error: rgba(206, 50, 23, 1);\n\n\tdisplay: inline-block;\n\tmargin-top: 8px;\n\tcolor: var(--color-error);\n}\n",""]),o.locals={Container:"Container_rLuTK",Error:"Error__kSnm"},n.exports=o},68532:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-281e10d2] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-281e10d2] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-281e10d2]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-281e10d2],\n.markdown-body h2 .octicon-link[data-v-281e10d2],\n.markdown-body h3 .octicon-link[data-v-281e10d2],\n.markdown-body h4 .octicon-link[data-v-281e10d2],\n.markdown-body h5 .octicon-link[data-v-281e10d2],\n.markdown-body h6 .octicon-link[data-v-281e10d2] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-281e10d2],\n.markdown-body h2:hover .anchor[data-v-281e10d2],\n.markdown-body h3:hover .anchor[data-v-281e10d2],\n.markdown-body h4:hover .anchor[data-v-281e10d2],\n.markdown-body h5:hover .anchor[data-v-281e10d2],\n.markdown-body h6:hover .anchor[data-v-281e10d2] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-281e10d2],\n.markdown-body h2:hover .anchor .octicon-link[data-v-281e10d2],\n.markdown-body h3:hover .anchor .octicon-link[data-v-281e10d2],\n.markdown-body h4:hover .anchor .octicon-link[data-v-281e10d2],\n.markdown-body h5:hover .anchor .octicon-link[data-v-281e10d2],\n.markdown-body h6:hover .anchor .octicon-link[data-v-281e10d2] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-281e10d2]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-281e10d2]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-281e10d2]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-281e10d2]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-281e10d2]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-281e10d2]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-281e10d2] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-281e10d2] {\n  display: block;\n}\n.markdown-body summary[data-v-281e10d2] {\n  display: list-item;\n}\n.markdown-body a[data-v-281e10d2] {\n  background-color: initial;\n}\n.markdown-body a[data-v-281e10d2]:active,\n.markdown-body a[data-v-281e10d2]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-281e10d2] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-281e10d2] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-281e10d2] {\n  border-style: none;\n}\n.markdown-body code[data-v-281e10d2],\n.markdown-body kbd[data-v-281e10d2],\n.markdown-body pre[data-v-281e10d2] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-281e10d2] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-281e10d2] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-281e10d2] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-281e10d2] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-281e10d2] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-281e10d2] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-281e10d2] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-281e10d2]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-281e10d2] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-281e10d2] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-281e10d2]:after,\n.markdown-body hr[data-v-281e10d2]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-281e10d2]:after {\n  clear: both;\n}\n.markdown-body table[data-v-281e10d2] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-281e10d2],\n.markdown-body th[data-v-281e10d2] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-281e10d2] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-281e10d2] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-281e10d2],\n.markdown-body h2[data-v-281e10d2],\n.markdown-body h3[data-v-281e10d2],\n.markdown-body h4[data-v-281e10d2],\n.markdown-body h5[data-v-281e10d2],\n.markdown-body h6[data-v-281e10d2] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-281e10d2] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-281e10d2],\n.markdown-body h2[data-v-281e10d2] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-281e10d2] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-281e10d2] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-281e10d2],\n.markdown-body h4[data-v-281e10d2] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-281e10d2] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-281e10d2] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-281e10d2],\n.markdown-body h6[data-v-281e10d2] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-281e10d2] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-281e10d2] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-281e10d2] {\n  margin: 0;\n}\n.markdown-body ol[data-v-281e10d2],\n.markdown-body ul[data-v-281e10d2] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-281e10d2],\n.markdown-body ul ol[data-v-281e10d2] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-281e10d2],\n.markdown-body ol ul ol[data-v-281e10d2],\n.markdown-body ul ol ol[data-v-281e10d2],\n.markdown-body ul ul ol[data-v-281e10d2] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-281e10d2] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-281e10d2],\n.markdown-body pre[data-v-281e10d2] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-281e10d2] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-281e10d2]::-webkit-inner-spin-button,\n.markdown-body input[data-v-281e10d2]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-281e10d2] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-281e10d2] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-281e10d2] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-281e10d2] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-281e10d2] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-281e10d2] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-281e10d2] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-281e10d2] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-281e10d2] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-281e10d2] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-281e10d2] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-281e10d2] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-281e10d2] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-281e10d2] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-281e10d2] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-281e10d2],\n.markdown-body .px-3[data-v-281e10d2] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-281e10d2] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-281e10d2] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-281e10d2] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-281e10d2] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-281e10d2] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-281e10d2] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-281e10d2] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-281e10d2] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-281e10d2],\n.markdown-body .pl-s .pl-v[data-v-281e10d2] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-281e10d2],\n.markdown-body .pl-en[data-v-281e10d2] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-281e10d2],\n.markdown-body .pl-smi[data-v-281e10d2] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-281e10d2] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-281e10d2] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-281e10d2],\n.markdown-body .pl-s[data-v-281e10d2],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-281e10d2],\n.markdown-body .pl-sr[data-v-281e10d2],\n.markdown-body .pl-sr .pl-cce[data-v-281e10d2],\n.markdown-body .pl-sr .pl-sra[data-v-281e10d2],\n.markdown-body .pl-sr .pl-sre[data-v-281e10d2] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-281e10d2],\n.markdown-body .pl-v[data-v-281e10d2] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-281e10d2] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-281e10d2] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-281e10d2] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-281e10d2]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-281e10d2] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-281e10d2] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-281e10d2],\n.markdown-body .pl-mh .pl-en[data-v-281e10d2],\n.markdown-body .pl-ms[data-v-281e10d2] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-281e10d2] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-281e10d2] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-281e10d2] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-281e10d2] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-281e10d2] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-281e10d2] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-281e10d2] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-281e10d2] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-281e10d2] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-281e10d2] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-281e10d2] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-281e10d2] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-281e10d2] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-281e10d2] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-281e10d2] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-281e10d2] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-281e10d2] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-281e10d2] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-281e10d2] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-281e10d2] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-281e10d2] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-281e10d2] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-281e10d2] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-281e10d2] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-281e10d2] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-281e10d2] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-281e10d2] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-281e10d2] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-281e10d2] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-281e10d2] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-281e10d2]:after,\n.markdown-body[data-v-281e10d2]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-281e10d2]:after {\n  clear: both;\n}\n.markdown-body[data-v-281e10d2]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-281e10d2]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-281e10d2]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-281e10d2],\n.markdown-body details[data-v-281e10d2],\n.markdown-body dl[data-v-281e10d2],\n.markdown-body ol[data-v-281e10d2],\n.markdown-body p[data-v-281e10d2],\n.markdown-body pre[data-v-281e10d2],\n.markdown-body table[data-v-281e10d2],\n.markdown-body ul[data-v-281e10d2] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-281e10d2] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-281e10d2] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-281e10d2]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-281e10d2]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-281e10d2],\n.markdown-body h2[data-v-281e10d2],\n.markdown-body h3[data-v-281e10d2],\n.markdown-body h4[data-v-281e10d2],\n.markdown-body h5[data-v-281e10d2],\n.markdown-body h6[data-v-281e10d2] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-281e10d2] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-281e10d2],\n.markdown-body h2[data-v-281e10d2] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-281e10d2] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-281e10d2] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-281e10d2] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-281e10d2] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-281e10d2] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-281e10d2],\n.markdown-body ul[data-v-281e10d2] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-281e10d2],\n.markdown-body ol ul[data-v-281e10d2],\n.markdown-body ul ol[data-v-281e10d2],\n.markdown-body ul ul[data-v-281e10d2] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-281e10d2] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-281e10d2] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-281e10d2] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-281e10d2] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-281e10d2] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-281e10d2] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-281e10d2] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-281e10d2] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-281e10d2],\n.markdown-body table th[data-v-281e10d2] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-281e10d2] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-281e10d2]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-281e10d2] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-281e10d2] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-281e10d2] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-281e10d2] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-281e10d2] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-281e10d2] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-281e10d2] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-281e10d2] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-281e10d2],\n.markdown-body pre[data-v-281e10d2] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-281e10d2] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-281e10d2] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-281e10d2]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-281e10d2] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-281e10d2] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-281e10d2] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-281e10d2]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-281e10d2]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-281e10d2] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-281e10d2] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-281e10d2],\n.markdown-body .pl-token[data-v-281e10d2]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-281e10d2] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-281e10d2] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-281e10d2] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-281e10d2] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-281e10d2] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-281e10d2] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-281e10d2] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-281e10d2] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-281e10d2] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-281e10d2] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-281e10d2] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-281e10d2] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-281e10d2] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-281e10d2] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-281e10d2] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},535:(n,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>E});var o=t(57346);const e={model:{prop:"value",event:"textarea:update"},props:{variant:{type:String,default:"fill",validator:n=>["fill","outline"].includes(n)},value:{type:String,default:""},invalid:{type:Boolean,default:!1},resizable:{type:Boolean,default:!1}},computed:{textareaVal:{get(){return this.value},set(n){this.$emit("textarea:update",n)}}},mounted(){this.setCustomValidity()},updated(){this.setCustomValidity()},methods:{setCustomValidity(){const n=this.invalid?"invalid":"";this.$refs.textarea.setCustomValidity(n)}}};var d=t(73068),r=t.n(d),l=t(51900);const i=(0,l.Z)(e,(function(){var n,a=this,t=a.$createElement;return(a._self._c||t)("textarea",a._g(a._b({directives:[{name:"model",rawName:"v-model",value:a.textareaVal,expression:"textareaVal"}],ref:"textarea",class:[a.$s.Textarea,a.$s["variant_"+a.variant],(n={},n[a.$s.resizable]=a.resizable,n)],domProps:{value:a.textareaVal},on:{input:function(n){n.target.composing||(a.textareaVal=n.target.value)}}},"textarea",a.$attrs,!1),a.$listeners))}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports,m={components:{MBlockFormControlLayout:o.S,TextareaControl:i},inheritAttrs:!1,model:{prop:"value",event:"textarea:update"},computed:{isInvalid(){return""===this.$attrs.invalid||this.$attrs.invalid||!!this.$slots.error}}};const s=(0,l.Z)(m,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("m-block-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[t("textarea-control",n._g(n._b({attrs:{invalid:n.isInvalid}},"textarea-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"error",fn:function(){return[n._t("error")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,c={components:{MTextarea:s}};const p=(0,l.Z)(c,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;var v=t(415);const b={components:{MTextarea:s}};const h=(0,l.Z)(b,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{disabled:"",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;const u={components:{MTextarea:s}};const f=(0,l.Z)(u,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{invalid:"",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;const k={components:{MNotice:t(5663).w,MTextarea:s}};const y=(0,l.Z)(k,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("m-textarea",{attrs:{placeholder:"Placeholder"},scopedSlots:n._u([{key:"error",fn:function(){return[t("m-notice",{attrs:{type:"error"}},[n._v("\n\t\t\terror message here\n\t\t")])]},proxy:!0}])})}),[],!1,null,null,null).exports;const w={components:{MTextarea:s}};const g=(0,l.Z)(w,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{resizable:"",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;const x={components:{MTextarea:s}};const _=(0,l.Z)(x,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{variant:"outline",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;const z={components:{MTextarea:s}};const T=(0,l.Z)(z,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{variant:"outline",disabled:"",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports;const M={components:{MTextarea:s}};const C=(0,l.Z)(M,(function(){var n=this.$createElement;return(this._self._c||n)("m-textarea",{attrs:{variant:"outline",invalid:"",placeholder:"Placeholder"}})}),[],!1,null,null,null).exports,$={components:{Demo0:p,DemoCollapse:v.DemoCollapse,SrcFile:v.SrcFile,Demo1:h,Demo2:f,Demo3:y,Demo4:g,Demo5:_,Demo6:T,Demo7:C}};t(96052);const E=(0,l.Z)($,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Supports attributes from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"}},[t("code",[n._v("<textarea>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("variant")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'fill'")])]),n._v(" "),t("td",[t("code",[n._v("fill")]),n._v(", "),t("code",[n._v("outline")])]),n._v(" "),t("td",[n._v("textarea variant")])]),n._v(" "),t("tr",[t("td",[n._v("v-model")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("''")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("textarea’s current value")])]),n._v(" "),t("tr",[t("td",[n._v("invalid")]),n._v(" "),t("td",[t("code",[n._v("boolean")])]),n._v(" "),t("td",[t("code",[n._v("false")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Toggle textarea’s invalid state")])]),n._v(" "),t("tr",[t("td",[n._v("resizable")]),n._v(" "),t("td",[t("code",[n._v("boolean")])]),n._v(" "),t("td",[t("code",[n._v("false")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("Toggles whether textarea is resizable")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Slot")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("error")]),n._v(" "),t("td",[n._v("slot for error messages")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Supports events from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"}},[t("code",[n._v("<textarea>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Event")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("textarea:update")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("updated textarea value")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Textarea")]),n._v(" "),t("h2",[n._v("Examples")]),n._v(" "),t("h3",[n._v("Default State")]),n._v(" "),t("p",[n._v("Filled variant.")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-textarea placeholder=\"Placeholder\" />\n</template>\n\n<script>\nimport { MTextarea } from '@square/maker/components/Textarea';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h3",[n._v("Disabled State")]),n._v(" "),t("demo-collapse",[t("Demo1"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-textarea\n\t\tdisabled\n\t\tplaceholder=\"Placeholder\"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from '@square/maker/components/Textarea';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h3",[n._v("Invalid State")]),n._v(" "),t("demo-collapse",[t("Demo2"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-textarea\n\t\tinvalid\n\t\tplaceholder=\"Placeholder\"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from '@square/maker/components/Textarea';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h3",[n._v("With Error Slot")]),n._v(" "),t("demo-collapse",[t("Demo3"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-textarea placeholder=\"Placeholder\">\n\t\t<template #error>\n\t\t\t<m-notice type=\"error\">\n\t\t\t\terror message here\n\t\t\t</m-notice>\n\t\t</template>\n\t</m-textarea>\n</template>\n\n<script>\nimport { MTextarea } from '@square/maker/components/Textarea';\nimport { MNotice } from '@square/maker/components/Notice';\n\nexport default {\n\tcomponents: {\n\t\tMNotice,\n\t\tMTextarea,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h3",[n._v("Resizeable")]),n._v(" "),t("demo-collapse",[t("Demo4"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-textarea\n\t\tresizable\n\t\tplaceholder=\"Placeholder\"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from '@square/maker/components/Textarea';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h3",[n._v("Outline Variant")]),n._v(" "),t("demo-collapse",[t("Demo5"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<m-textarea\n\t\tvariant="outline"\n\t\tplaceholder="Placeholder"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from \'@square/maker/components/Textarea\';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),t("h3",[n._v("Outline Variant Disabled State")]),n._v(" "),t("demo-collapse",[t("Demo6"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<m-textarea\n\t\tvariant="outline"\n\t\tdisabled\n\t\tplaceholder="Placeholder"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from \'@square/maker/components/Textarea\';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),t("h3",[n._v("Outline Variant Invalid State")]),n._v(" "),t("demo-collapse",[t("Demo7"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<m-textarea\n\t\tvariant="outline"\n\t\tinvalid\n\t\tplaceholder="Placeholder"\n\t/>\n</template>\n\n<script>\nimport { MTextarea } from \'@square/maker/components/Textarea\';\n\nexport default {\n\tcomponents: {\n\t\tMTextarea,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),t("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),t("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"281e10d2",null).exports},73068:(n,a,t)=>{var o=t(58950);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("3d55d4a8",o,!0,{})},35004:(n,a,t)=>{var o=t(35820);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("12fe2849",o,!0,{})},43941:(n,a,t)=>{var o=t(30263);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("6db595db",o,!0,{})},96052:(n,a,t)=>{var o=t(68532);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("4c83a2db",o,!0,{})}}]);