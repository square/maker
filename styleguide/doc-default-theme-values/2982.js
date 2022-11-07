(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[2982],{90970:(n,a,t)=>{"use strict";t.d(a,{O:()=>m});var o=t(32416),e=t(2606);const d={medium:"16px",large:"24px"},r={inject:{theme:{default:(0,e.uH)(),from:e.YH}},inheritAttrs:!1,props:{name:{type:String,required:!0},size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)}},computed:{iconComponent(){const n=this.theme.icons[this.name];return o.Z.error(n,"'".concat(this.name,"' icon not defined in theme"),"Icon"),n},inlineStyles(){return{"--icon-size":d[this.size]}}}};var i=t(33468),l=t.n(i);const m=(0,t(51900).Z)(r,(function(){var n=this,a=n.$createElement;return(n._self._c||a)(n.iconComponent,n._g(n._b({tag:"component",class:n.$s.Icon,style:n.inlineStyles},"component",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=l().locals||l()}),null,null).exports},13635:(n,a,t)=>{"use strict";t.d(a,{w:()=>s});var o=t(32416),e=t(27060),d=t(90970),r=t(2606);const i={components:{MIcon:d.O},inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},type:{type:String,default:void 0,validator:n=>["error","success","warning","info"].includes(n)},display:{type:String,default:"inline",validator:n=>["inline","block"].includes(n)},iconName:{type:String,default:void 0},iconColor:{type:String,default:void 0,validator:(0,e.Z)("color")},color:{type:String,default:void 0,validator:(0,e.Z)("color")},bgColor:{type:String,default:void 0,validator:(0,e.Z)("color")}},computed:{...(0,r.C9)("notice",["pattern","type","iconName","iconColor","color","bgColor"]),finalIconName(){return this.resolvedIconName?this.resolvedIconName:"error"===this.resolvedType?"critical":"success"===this.resolvedType?"success":"warning"===this.resolvedType?"warning":"info"},showActions(){return this.$slots.actions&&"block"===this.display},style(){return{"--color":"inline"===this.display?this.resolvedColor:"var(--maker-color-neutral-90, #1b1b1b)","--color-icon":this.resolvedIconColor,"--color-bg":this.resolvedBgColor}}},created(){o.Z.warn(!("inline"===this.display&&this.$slots.actions),"inline Notices cannot have an actions slot","Notice")}};var l=t(3777),m=t.n(l);const s=(0,t(51900).Z)(i,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",n._g(n._b({class:[n.$s.Notice,n.$s["type_"+n.resolvedType],n.$s["display_"+n.display]],style:n.style},"div",n.$attrs,!1),n.$listeners),[t("div",{class:n.$s.IconContentWrapper},[t("div",{class:n.$s.IconAligner},[n._t("icon",(function(){return[t("m-icon",{class:n.$s.Icon,attrs:{name:n.finalIconName}})]}))],2),n._v(" "),t("div",[n._t("default")],2)]),n._v(" "),n.showActions?t("div",{class:n.$s.ActionsWrapper},[n._t("actions")],2):n._e()])}),[],!1,(function(n){this.$s=m().locals||m()}),null,null).exports},27060:(n,a,t)=>{"use strict";t.d(a,{Z:()=>o});const o=function(n){return function(a){return!t.g.CSS||t.g.CSS.supports(n,a)}}},85745:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tfill: currentColor;\n}\n",""]),o.locals={Icon:"Icon_vCfSe"},n.exports=o},42158:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.Notice_M_oGn {\n\tcolor: var(--color);\n\tfont-size: 14px;\n\tline-height: 24px;\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n}\n.IconContentWrapper_ill5_ {\n\tdisplay: flex;\n}\n.ActionsWrapper_va9WP {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n.ActionsWrapper_va9WP > * {\n\tmargin-right: 24px;\n}\n.IconAligner_Ok3dF {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n\tcolor: var(--color-icon);\n\tfill: var(--color-icon);\n}\n.Icon_Eo92s {\n\tcolor: var(--color-icon);\n}\n.ActionsWrapper_va9WP > *:last-child {\n\tmargin-right: 0;\n}\n.type_error_EiA8m {\n\t--color: #a82826;\n\t--color-icon: #cd2026;\n\t--color-bg: #f6eceb;\n}\n.type_warning_hTphd {\n\t--color: #7e662a;\n\t--color-icon: #ffbf00;\n\t--color-bg: #f9eecf;\n}\n.type_success_Y28n_ {\n\t--color: #0a7a06;\n\t--color-icon: #008000;\n\t--color-bg: #ebf1eb;\n}\n.type_info_QXd_q {\n\t--color: var(--maker-color-neutral-90, #1b1b1b);\n\t--color-icon: var(--maker-color-neutral-80, #707070);\n\t--color-bg: var(--maker-color-neutral-10, #f1f1f1);\n}\n.display_block__FcUo {\n\tpadding: 16px;\n\tbackground-color: var(--color-bg);\n}\n",""]),o.locals={Notice:"Notice_M_oGn",IconContentWrapper:"IconContentWrapper_ill5_",ActionsWrapper:"ActionsWrapper_va9WP",IconAligner:"IconAligner_Ok3dF",Icon:"Icon_Eo92s",type_error:"type_error_EiA8m",type_warning:"type_warning_hTphd",type_success:"type_success_Y28n_",type_info:"type_info_QXd_q",display_block:"display_block__FcUo"},n.exports=o},17180:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-12e64eaa] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-12e64eaa] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-12e64eaa]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-12e64eaa],\n.markdown-body h2 .octicon-link[data-v-12e64eaa],\n.markdown-body h3 .octicon-link[data-v-12e64eaa],\n.markdown-body h4 .octicon-link[data-v-12e64eaa],\n.markdown-body h5 .octicon-link[data-v-12e64eaa],\n.markdown-body h6 .octicon-link[data-v-12e64eaa] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-12e64eaa],\n.markdown-body h2:hover .anchor[data-v-12e64eaa],\n.markdown-body h3:hover .anchor[data-v-12e64eaa],\n.markdown-body h4:hover .anchor[data-v-12e64eaa],\n.markdown-body h5:hover .anchor[data-v-12e64eaa],\n.markdown-body h6:hover .anchor[data-v-12e64eaa] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-12e64eaa],\n.markdown-body h2:hover .anchor .octicon-link[data-v-12e64eaa],\n.markdown-body h3:hover .anchor .octicon-link[data-v-12e64eaa],\n.markdown-body h4:hover .anchor .octicon-link[data-v-12e64eaa],\n.markdown-body h5:hover .anchor .octicon-link[data-v-12e64eaa],\n.markdown-body h6:hover .anchor .octicon-link[data-v-12e64eaa] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-12e64eaa]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-12e64eaa]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-12e64eaa]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-12e64eaa]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-12e64eaa]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-12e64eaa]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-12e64eaa] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-12e64eaa] {\n  display: block;\n}\n.markdown-body summary[data-v-12e64eaa] {\n  display: list-item;\n}\n.markdown-body a[data-v-12e64eaa] {\n  background-color: initial;\n}\n.markdown-body a[data-v-12e64eaa]:active,\n.markdown-body a[data-v-12e64eaa]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-12e64eaa] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-12e64eaa] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-12e64eaa] {\n  border-style: none;\n}\n.markdown-body code[data-v-12e64eaa],\n.markdown-body kbd[data-v-12e64eaa],\n.markdown-body pre[data-v-12e64eaa] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-12e64eaa] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-12e64eaa] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-12e64eaa] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-12e64eaa] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-12e64eaa] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-12e64eaa] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-12e64eaa] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-12e64eaa]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-12e64eaa] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-12e64eaa] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-12e64eaa]:after,\n.markdown-body hr[data-v-12e64eaa]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-12e64eaa]:after {\n  clear: both;\n}\n.markdown-body table[data-v-12e64eaa] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-12e64eaa],\n.markdown-body th[data-v-12e64eaa] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-12e64eaa] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-12e64eaa] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-12e64eaa],\n.markdown-body h2[data-v-12e64eaa],\n.markdown-body h3[data-v-12e64eaa],\n.markdown-body h4[data-v-12e64eaa],\n.markdown-body h5[data-v-12e64eaa],\n.markdown-body h6[data-v-12e64eaa] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-12e64eaa] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-12e64eaa],\n.markdown-body h2[data-v-12e64eaa] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-12e64eaa] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-12e64eaa] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-12e64eaa],\n.markdown-body h4[data-v-12e64eaa] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-12e64eaa] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-12e64eaa] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-12e64eaa],\n.markdown-body h6[data-v-12e64eaa] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-12e64eaa] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-12e64eaa] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-12e64eaa] {\n  margin: 0;\n}\n.markdown-body ol[data-v-12e64eaa],\n.markdown-body ul[data-v-12e64eaa] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-12e64eaa],\n.markdown-body ul ol[data-v-12e64eaa] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-12e64eaa],\n.markdown-body ol ul ol[data-v-12e64eaa],\n.markdown-body ul ol ol[data-v-12e64eaa],\n.markdown-body ul ul ol[data-v-12e64eaa] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-12e64eaa] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-12e64eaa],\n.markdown-body pre[data-v-12e64eaa] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-12e64eaa] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-12e64eaa]::-webkit-inner-spin-button,\n.markdown-body input[data-v-12e64eaa]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-12e64eaa] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-12e64eaa] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-12e64eaa] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-12e64eaa] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-12e64eaa] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-12e64eaa] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-12e64eaa] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-12e64eaa] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-12e64eaa] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-12e64eaa] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-12e64eaa] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-12e64eaa] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-12e64eaa] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-12e64eaa] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-12e64eaa] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-12e64eaa],\n.markdown-body .px-3[data-v-12e64eaa] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-12e64eaa] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-12e64eaa] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-12e64eaa] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-12e64eaa] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-12e64eaa] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-12e64eaa] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-12e64eaa] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-12e64eaa] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-12e64eaa],\n.markdown-body .pl-s .pl-v[data-v-12e64eaa] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-12e64eaa],\n.markdown-body .pl-en[data-v-12e64eaa] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-12e64eaa],\n.markdown-body .pl-smi[data-v-12e64eaa] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-12e64eaa] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-12e64eaa] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-12e64eaa],\n.markdown-body .pl-s[data-v-12e64eaa],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-12e64eaa],\n.markdown-body .pl-sr[data-v-12e64eaa],\n.markdown-body .pl-sr .pl-cce[data-v-12e64eaa],\n.markdown-body .pl-sr .pl-sra[data-v-12e64eaa],\n.markdown-body .pl-sr .pl-sre[data-v-12e64eaa] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-12e64eaa],\n.markdown-body .pl-v[data-v-12e64eaa] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-12e64eaa] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-12e64eaa] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-12e64eaa] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-12e64eaa]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-12e64eaa] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-12e64eaa] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-12e64eaa],\n.markdown-body .pl-mh .pl-en[data-v-12e64eaa],\n.markdown-body .pl-ms[data-v-12e64eaa] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-12e64eaa] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-12e64eaa] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-12e64eaa] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-12e64eaa] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-12e64eaa] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-12e64eaa] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-12e64eaa] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-12e64eaa] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-12e64eaa] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-12e64eaa] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-12e64eaa] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-12e64eaa] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-12e64eaa] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-12e64eaa] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-12e64eaa] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-12e64eaa] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-12e64eaa] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-12e64eaa] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-12e64eaa] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-12e64eaa] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-12e64eaa] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-12e64eaa] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-12e64eaa] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-12e64eaa] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-12e64eaa] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-12e64eaa] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-12e64eaa] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-12e64eaa] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-12e64eaa] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-12e64eaa] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-12e64eaa]:after,\n.markdown-body[data-v-12e64eaa]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-12e64eaa]:after {\n  clear: both;\n}\n.markdown-body[data-v-12e64eaa]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-12e64eaa]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-12e64eaa]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-12e64eaa],\n.markdown-body details[data-v-12e64eaa],\n.markdown-body dl[data-v-12e64eaa],\n.markdown-body ol[data-v-12e64eaa],\n.markdown-body p[data-v-12e64eaa],\n.markdown-body pre[data-v-12e64eaa],\n.markdown-body table[data-v-12e64eaa],\n.markdown-body ul[data-v-12e64eaa] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-12e64eaa] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-12e64eaa] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-12e64eaa]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-12e64eaa]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-12e64eaa],\n.markdown-body h2[data-v-12e64eaa],\n.markdown-body h3[data-v-12e64eaa],\n.markdown-body h4[data-v-12e64eaa],\n.markdown-body h5[data-v-12e64eaa],\n.markdown-body h6[data-v-12e64eaa] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-12e64eaa] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-12e64eaa],\n.markdown-body h2[data-v-12e64eaa] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-12e64eaa] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-12e64eaa] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-12e64eaa] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-12e64eaa] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-12e64eaa] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-12e64eaa],\n.markdown-body ul[data-v-12e64eaa] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-12e64eaa],\n.markdown-body ol ul[data-v-12e64eaa],\n.markdown-body ul ol[data-v-12e64eaa],\n.markdown-body ul ul[data-v-12e64eaa] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-12e64eaa] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-12e64eaa] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-12e64eaa] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-12e64eaa] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-12e64eaa] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-12e64eaa] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-12e64eaa] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-12e64eaa] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-12e64eaa],\n.markdown-body table th[data-v-12e64eaa] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-12e64eaa] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-12e64eaa]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-12e64eaa] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-12e64eaa] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-12e64eaa] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-12e64eaa] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-12e64eaa] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-12e64eaa] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-12e64eaa] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-12e64eaa] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-12e64eaa],\n.markdown-body pre[data-v-12e64eaa] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-12e64eaa] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-12e64eaa] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-12e64eaa]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-12e64eaa] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-12e64eaa] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-12e64eaa] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-12e64eaa]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-12e64eaa]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-12e64eaa] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-12e64eaa] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-12e64eaa],\n.markdown-body .pl-token[data-v-12e64eaa]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-12e64eaa] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-12e64eaa] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-12e64eaa] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-12e64eaa] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-12e64eaa] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-12e64eaa] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-12e64eaa] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-12e64eaa] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-12e64eaa] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-12e64eaa] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-12e64eaa] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-12e64eaa] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-12e64eaa] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-12e64eaa] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-12e64eaa] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},17701:(n,a,t)=>{var o=t(77705)((function(n){return n[1]}));o.push([n.id,"\n.spaceout > *[data-v-40e268dd] {\n\tmargin-bottom: 16px;\n}\n.spaceout > *[data-v-40e268dd]:last-child {\n\tmargin-bottom: 0;\n}\n.spaceout[data-v-40e268dd] {\n\tmax-width: 400px;\n\tpadding: 16px;\n}\n.icon[data-v-40e268dd] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),n.exports=o},92982:(n,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var o=t(13635),e=t(49620),d=t(37858),r=t.n(d);const i={components:{MNotice:o.w,MTextButton:e.j,Plus:r()}};t(31334);var l=t(51900);const m=(0,l.Z)(i,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"spaceout"},[t("m-notice",{attrs:{pattern:"primary"},scopedSlots:n._u([{key:"icon",fn:function(){return[t("plus",{staticClass:"icon"})]},proxy:!0}])},[n._v("\n\t\tPrimary inline message\n\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"error"}},[n._v("\n\t\tError inline message\n\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"success"}},[n._v("\n\t\tSuccess inline message\n\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"warning"}},[n._v("\n\t\tWarning inline message\n\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"info"}},[n._v("\n\t\tInfo inline message\n\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"primary",display:"block"},scopedSlots:n._u([{key:"icon",fn:function(){return[t("plus",{staticClass:"icon"})]},proxy:!0},{key:"actions",fn:function(){return[t("m-text-button",{attrs:{pattern:"primary"}},[n._v("\n\t\t\t\tButton\n\t\t\t")]),n._v(" "),t("m-text-button",{attrs:{pattern:"primary"}},[n._v("\n\t\t\t\tDismiss\n\t\t\t")])]},proxy:!0}])},[n._v("\n\t\tPrimary block message\n\t\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"error",display:"block"},scopedSlots:n._u([{key:"actions",fn:function(){return[t("m-text-button",{attrs:{pattern:"error"}},[n._v("\n\t\t\t\tButton\n\t\t\t")]),n._v(" "),t("m-text-button",{attrs:{pattern:"error"}},[n._v("\n\t\t\t\tDismiss\n\t\t\t")])]},proxy:!0}])},[n._v("\n\t\tError block message\n\t\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"success",display:"block"},scopedSlots:n._u([{key:"actions",fn:function(){return[t("m-text-button",{attrs:{pattern:"success"}},[n._v("\n\t\t\t\tButton\n\t\t\t")]),n._v(" "),t("m-text-button",{attrs:{pattern:"success"}},[n._v("\n\t\t\t\tDismiss\n\t\t\t")])]},proxy:!0}])},[n._v("\n\t\tSuccess block message\n\t\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"warning",display:"block"},scopedSlots:n._u([{key:"actions",fn:function(){return[t("m-text-button",{attrs:{pattern:"warning"}},[n._v("\n\t\t\t\tButton\n\t\t\t")]),n._v(" "),t("m-text-button",{attrs:{pattern:"warning"}},[n._v("\n\t\t\t\tDismiss\n\t\t\t")])]},proxy:!0}])},[n._v("\n\t\tWarning block message\n\t\t")]),n._v(" "),t("m-notice",{attrs:{pattern:"info",display:"block"},scopedSlots:n._u([{key:"actions",fn:function(){return[t("m-text-button",{attrs:{pattern:"info"}},[n._v("\n\t\t\t\tButton\n\t\t\t")]),n._v(" "),t("m-text-button",{attrs:{pattern:"info"}},[n._v("\n\t\t\t\tDismiss\n\t\t\t")])]},proxy:!0}])},[n._v("\n\t\tInfo block message\n\t\t")])],1)}),[],!1,null,"40e268dd",null).exports;var s=t(415);const c={components:{Demo0:m,DemoCollapse:s.DemoCollapse,SrcFile:s.SrcFile}};t(91459);const p=(0,l.Z)(c,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Supports attributes from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[t("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Themable props* can be configured via the "),t("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component using the key "),t("code",[n._v("notice")]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("pattern*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[t("code",[n._v("'primary'")]),n._v(", "),t("code",[n._v("'error'")]),n._v(", "),t("code",[n._v("'success'")]),n._v(", "),t("code",[n._v("'warning'")]),n._v(", "),t("code",[n._v("'info'")]),n._v(", any custom pattern defined within the theme")]),n._v(" "),t("td",[n._v("pattern defined at theme level")])]),n._v(" "),t("tr",[t("td",[n._v("type*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'info'")])]),n._v(" "),t("td",[t("code",[n._v("'error'")]),n._v(", "),t("code",[n._v("'success'")]),n._v(", "),t("code",[n._v("'warning'")]),n._v(", "),t("code",[n._v("'info'")])]),n._v(" "),t("td",[n._v("type of notice")])]),n._v(" "),t("tr",[t("td",[n._v("display")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'inline'")])]),n._v(" "),t("td",[t("code",[n._v("'inline'")]),n._v(", "),t("code",[n._v("'block'")])]),n._v(" "),t("td",[n._v("notice display")])]),n._v(" "),t("tr",[t("td",[n._v("icon-name")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("name of icon, defined in theme")])]),n._v(" "),t("tr",[t("td",[n._v("icon-color")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("icon color")])]),n._v(" "),t("tr",[t("td",[n._v("color")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("text color for inline notices")])]),n._v(" "),t("tr",[t("td",[n._v("bg-color")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("background color for block notices")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[n._v("Slot")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("icon")]),n._v(" "),t("td",[n._v("icon in notice")])]),n._v(" "),t("tr",[t("td",[n._v("default")]),n._v(" "),t("td",[n._v("notice content")])]),n._v(" "),t("tr",[t("td",[n._v("actions")]),n._v(" "),t("td",[n._v("put text buttons here")])])])])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("p",[n._v("Supports events from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[t("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Notice")]),n._v(" "),t("p",[n._v("Use Notice to notify users of things.")]),n._v(" "),t("h2",[n._v("Examples")]),n._v(" "),t("p",[n._v("Notice has the following built-in patterns: primary, error, warning, success, info.")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div class="spaceout">\n\t\t<m-notice pattern="primary">\n\t\t\t<template #icon>\n\t\t\t\t<plus class="icon" />\n\t\t\t</template>\n\t\t\tPrimary inline message\n\t\t</m-notice>\n\t\t<m-notice pattern="error">\n\t\t\tError inline message\n\t\t</m-notice>\n\t\t<m-notice pattern="success">\n\t\t\tSuccess inline message\n\t\t</m-notice>\n\t\t<m-notice pattern="warning">\n\t\t\tWarning inline message\n\t\t</m-notice>\n\t\t<m-notice pattern="info">\n\t\t\tInfo inline message\n\t\t</m-notice>\n\n\t\t<m-notice\n\t\t\tpattern="primary"\n\t\t\tdisplay="block"\n\t\t>\n\t\t\t<template #icon>\n\t\t\t\t<plus class="icon" />\n\t\t\t</template>\n\t\t\tPrimary block message\n\t\t\t<template #actions>\n\t\t\t\t<m-text-button pattern="primary">\n\t\t\t\t\tButton\n\t\t\t\t</m-text-button>\n\t\t\t\t<m-text-button pattern="primary">\n\t\t\t\t\tDismiss\n\t\t\t\t</m-text-button>\n\t\t\t</template>\n\t\t</m-notice>\n\t\t<m-notice\n\t\t\tpattern="error"\n\t\t\tdisplay="block"\n\t\t>\n\t\t\tError block message\n\t\t\t<template #actions>\n\t\t\t\t<m-text-button pattern="error">\n\t\t\t\t\tButton\n\t\t\t\t</m-text-button>\n\t\t\t\t<m-text-button pattern="error">\n\t\t\t\t\tDismiss\n\t\t\t\t</m-text-button>\n\t\t\t</template>\n\t\t</m-notice>\n\t\t<m-notice\n\t\t\tpattern="success"\n\t\t\tdisplay="block"\n\t\t>\n\t\t\tSuccess block message\n\t\t\t<template #actions>\n\t\t\t\t<m-text-button pattern="success">\n\t\t\t\t\tButton\n\t\t\t\t</m-text-button>\n\t\t\t\t<m-text-button pattern="success">\n\t\t\t\t\tDismiss\n\t\t\t\t</m-text-button>\n\t\t\t</template>\n\t\t</m-notice>\n\t\t<m-notice\n\t\t\tpattern="warning"\n\t\t\tdisplay="block"\n\t\t>\n\t\t\tWarning block message\n\t\t\t<template #actions>\n\t\t\t\t<m-text-button pattern="warning">\n\t\t\t\t\tButton\n\t\t\t\t</m-text-button>\n\t\t\t\t<m-text-button pattern="warning">\n\t\t\t\t\tDismiss\n\t\t\t\t</m-text-button>\n\t\t\t</template>\n\t\t</m-notice>\n\t\t<m-notice\n\t\t\tpattern="info"\n\t\t\tdisplay="block"\n\t\t>\n\t\t\tInfo block message\n\t\t\t<template #actions>\n\t\t\t\t<m-text-button pattern="info">\n\t\t\t\t\tButton\n\t\t\t\t</m-text-button>\n\t\t\t\t<m-text-button pattern="info">\n\t\t\t\t\tDismiss\n\t\t\t\t</m-text-button>\n\t\t\t</template>\n\t\t</m-notice>\n\t</div>\n</template>\n\n<script>\nimport { MNotice } from \'@square/maker/components/Notice\';\nimport { MTextButton } from \'@square/maker/components/TextButton\';\nimport Plus from \'@square/maker-icons/Plus\';\n\nexport default {\n\tcomponents: {\n\t\tMNotice,\n\t\tMTextButton,\n\t\tPlus,\n\t},\n};\n<\/script>\n\n<style scoped>\n.spaceout > * {\n\tmargin-bottom: 16px;\n}\n.spaceout > *:last-child {\n\tmargin-bottom: 0;\n}\n.spaceout {\n\tmax-width: 400px;\n\tpadding: 16px;\n}\n.icon {\n\twidth: 16px;\n\theight: 16px;\n}\n</style>\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),t("h2",[n._v("Slots")]),n._v(" "),n._m(3),n._v(" "),t("h2",[n._v("Events")]),n._v(" "),n._m(4)],1)}],!1,null,"12e64eaa",null).exports},33468:(n,a,t)=>{var o=t(85745);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("2a811eb5",o,!0,{})},3777:(n,a,t)=>{var o=t(42158);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("64eace34",o,!0,{})},91459:(n,a,t)=>{var o=t(17180);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("aa6e0f56",o,!0,{})},31334:(n,a,t)=>{var o=t(17701);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,t(54023).Z)("bde94c5e",o,!0,{})}}]);