(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[8126],{44448:(n,e,a)=>{"use strict";a.d(e,{O:()=>m});var o=a(27060),t=a(32416),d=a(86812),r=a(54868);const b={medium:"16px",large:"24px",xlarge:"48px",xxlarge:"64px"},i={components:{RenderFn:r.Z},inject:{theme:{default:(0,d.uH)(),from:d.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:"medium",validator:n=>["medium","large","xlarge","xxlarge"].includes(n)},color:{type:String,default:void 0,validator:(0,o.Z)("color")},fill:{type:String,default:void 0,validator:(0,o.Z)("fill")}},computed:{...(0,d.C9)("icon",["pattern","name","color","fill"]),iconRenderFn(){const n=this.theme.icons[this.resolvedName];return t.Z.error(n,"'".concat(this.resolvedName,"' icon not defined in theme"),"Icon"),n},inlineStyles(){return{"--color":this.resolvedColor,"--icon-size":b[this.size],"--fill":this.resolvedFill}}}};var c=a(33468),l=a.n(c);const m=(0,a(51900).Z)(i,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("render-fn",n._g(n._b({class:n.$s.Icon,style:n.inlineStyles,attrs:{"render-fn":n.iconRenderFn}},"render-fn",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=l().locals||l()}),null,null).exports},54868:(n,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o={props:{renderFn:{type:Function,required:!0}},render(n){return this.renderFn(n)}}},27060:(n,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=function(n){return function(e){return!a.g.CSS||a.g.CSS.supports(n,e)}}},85745:(n,e,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\t--color: inherit;\n\t--fill: currentColor;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tcolor: var(--color);\n\tfill: var(--fill);\n}\n",""]),o.locals={Icon:"Icon_vCfSe"},n.exports=o},75405:(n,e,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,"\n.icon-list[data-v-16ab7239] {\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tlist-style: none;\n}\n.icon-list li[data-v-16ab7239] {\n\tdisplay: flex;\n\tgrid-gap: 4px;\n\talign-items: center;\n}\n",""]),n.exports=o},55926:(n,e,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-b3b5eeec] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-b3b5eeec] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-b3b5eeec]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-b3b5eeec],\n.markdown-body h2 .octicon-link[data-v-b3b5eeec],\n.markdown-body h3 .octicon-link[data-v-b3b5eeec],\n.markdown-body h4 .octicon-link[data-v-b3b5eeec],\n.markdown-body h5 .octicon-link[data-v-b3b5eeec],\n.markdown-body h6 .octicon-link[data-v-b3b5eeec] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-b3b5eeec],\n.markdown-body h2:hover .anchor[data-v-b3b5eeec],\n.markdown-body h3:hover .anchor[data-v-b3b5eeec],\n.markdown-body h4:hover .anchor[data-v-b3b5eeec],\n.markdown-body h5:hover .anchor[data-v-b3b5eeec],\n.markdown-body h6:hover .anchor[data-v-b3b5eeec] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-b3b5eeec],\n.markdown-body h2:hover .anchor .octicon-link[data-v-b3b5eeec],\n.markdown-body h3:hover .anchor .octicon-link[data-v-b3b5eeec],\n.markdown-body h4:hover .anchor .octicon-link[data-v-b3b5eeec],\n.markdown-body h5:hover .anchor .octicon-link[data-v-b3b5eeec],\n.markdown-body h6:hover .anchor .octicon-link[data-v-b3b5eeec] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-b3b5eeec]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-b3b5eeec]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-b3b5eeec]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-b3b5eeec]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-b3b5eeec]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-b3b5eeec]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-b3b5eeec] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-b3b5eeec] {\n  display: block;\n}\n.markdown-body summary[data-v-b3b5eeec] {\n  display: list-item;\n}\n.markdown-body a[data-v-b3b5eeec] {\n  background-color: initial;\n}\n.markdown-body a[data-v-b3b5eeec]:active,\n.markdown-body a[data-v-b3b5eeec]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-b3b5eeec] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-b3b5eeec] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-b3b5eeec] {\n  border-style: none;\n}\n.markdown-body code[data-v-b3b5eeec],\n.markdown-body kbd[data-v-b3b5eeec],\n.markdown-body pre[data-v-b3b5eeec] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-b3b5eeec] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-b3b5eeec] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-b3b5eeec] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-b3b5eeec] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-b3b5eeec] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-b3b5eeec] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-b3b5eeec] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-b3b5eeec]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-b3b5eeec] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-b3b5eeec] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-b3b5eeec]:after,\n.markdown-body hr[data-v-b3b5eeec]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-b3b5eeec]:after {\n  clear: both;\n}\n.markdown-body table[data-v-b3b5eeec] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-b3b5eeec],\n.markdown-body th[data-v-b3b5eeec] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-b3b5eeec] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-b3b5eeec] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-b3b5eeec],\n.markdown-body h2[data-v-b3b5eeec],\n.markdown-body h3[data-v-b3b5eeec],\n.markdown-body h4[data-v-b3b5eeec],\n.markdown-body h5[data-v-b3b5eeec],\n.markdown-body h6[data-v-b3b5eeec] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-b3b5eeec] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-b3b5eeec],\n.markdown-body h2[data-v-b3b5eeec] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-b3b5eeec] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-b3b5eeec] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-b3b5eeec],\n.markdown-body h4[data-v-b3b5eeec] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-b3b5eeec] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-b3b5eeec] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-b3b5eeec],\n.markdown-body h6[data-v-b3b5eeec] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-b3b5eeec] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-b3b5eeec] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-b3b5eeec] {\n  margin: 0;\n}\n.markdown-body ol[data-v-b3b5eeec],\n.markdown-body ul[data-v-b3b5eeec] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-b3b5eeec],\n.markdown-body ul ol[data-v-b3b5eeec] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-b3b5eeec],\n.markdown-body ol ul ol[data-v-b3b5eeec],\n.markdown-body ul ol ol[data-v-b3b5eeec],\n.markdown-body ul ul ol[data-v-b3b5eeec] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-b3b5eeec] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-b3b5eeec],\n.markdown-body pre[data-v-b3b5eeec] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-b3b5eeec] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-b3b5eeec]::-webkit-inner-spin-button,\n.markdown-body input[data-v-b3b5eeec]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-b3b5eeec] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-b3b5eeec] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-b3b5eeec] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-b3b5eeec] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-b3b5eeec] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-b3b5eeec] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-b3b5eeec] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-b3b5eeec] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-b3b5eeec] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-b3b5eeec] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-b3b5eeec] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-b3b5eeec] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-b3b5eeec] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-b3b5eeec] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-b3b5eeec] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-b3b5eeec],\n.markdown-body .px-3[data-v-b3b5eeec] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-b3b5eeec] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-b3b5eeec] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-b3b5eeec] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-b3b5eeec] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-b3b5eeec] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-b3b5eeec] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-b3b5eeec] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-b3b5eeec] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-b3b5eeec],\n.markdown-body .pl-s .pl-v[data-v-b3b5eeec] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-b3b5eeec],\n.markdown-body .pl-en[data-v-b3b5eeec] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-b3b5eeec],\n.markdown-body .pl-smi[data-v-b3b5eeec] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-b3b5eeec] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-b3b5eeec] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-b3b5eeec],\n.markdown-body .pl-s[data-v-b3b5eeec],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-b3b5eeec],\n.markdown-body .pl-sr[data-v-b3b5eeec],\n.markdown-body .pl-sr .pl-cce[data-v-b3b5eeec],\n.markdown-body .pl-sr .pl-sra[data-v-b3b5eeec],\n.markdown-body .pl-sr .pl-sre[data-v-b3b5eeec] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-b3b5eeec],\n.markdown-body .pl-v[data-v-b3b5eeec] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-b3b5eeec] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-b3b5eeec] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-b3b5eeec] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-b3b5eeec]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-b3b5eeec] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-b3b5eeec] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-b3b5eeec],\n.markdown-body .pl-mh .pl-en[data-v-b3b5eeec],\n.markdown-body .pl-ms[data-v-b3b5eeec] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-b3b5eeec] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-b3b5eeec] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-b3b5eeec] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-b3b5eeec] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-b3b5eeec] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-b3b5eeec] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-b3b5eeec] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-b3b5eeec] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-b3b5eeec] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-b3b5eeec] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-b3b5eeec] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-b3b5eeec] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-b3b5eeec] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-b3b5eeec] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-b3b5eeec] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-b3b5eeec] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-b3b5eeec] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-b3b5eeec] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-b3b5eeec] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-b3b5eeec] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-b3b5eeec] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-b3b5eeec] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-b3b5eeec] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-b3b5eeec] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-b3b5eeec] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-b3b5eeec] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-b3b5eeec] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-b3b5eeec] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-b3b5eeec] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-b3b5eeec] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-b3b5eeec]:after,\n.markdown-body[data-v-b3b5eeec]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-b3b5eeec]:after {\n  clear: both;\n}\n.markdown-body[data-v-b3b5eeec]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-b3b5eeec]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-b3b5eeec]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-b3b5eeec],\n.markdown-body details[data-v-b3b5eeec],\n.markdown-body dl[data-v-b3b5eeec],\n.markdown-body ol[data-v-b3b5eeec],\n.markdown-body p[data-v-b3b5eeec],\n.markdown-body pre[data-v-b3b5eeec],\n.markdown-body table[data-v-b3b5eeec],\n.markdown-body ul[data-v-b3b5eeec] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-b3b5eeec] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-b3b5eeec] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-b3b5eeec]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-b3b5eeec]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-b3b5eeec],\n.markdown-body h2[data-v-b3b5eeec],\n.markdown-body h3[data-v-b3b5eeec],\n.markdown-body h4[data-v-b3b5eeec],\n.markdown-body h5[data-v-b3b5eeec],\n.markdown-body h6[data-v-b3b5eeec] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-b3b5eeec] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-b3b5eeec],\n.markdown-body h2[data-v-b3b5eeec] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-b3b5eeec] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-b3b5eeec] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-b3b5eeec] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-b3b5eeec] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-b3b5eeec] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-b3b5eeec],\n.markdown-body ul[data-v-b3b5eeec] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-b3b5eeec],\n.markdown-body ol ul[data-v-b3b5eeec],\n.markdown-body ul ol[data-v-b3b5eeec],\n.markdown-body ul ul[data-v-b3b5eeec] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-b3b5eeec] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-b3b5eeec] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-b3b5eeec] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-b3b5eeec] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-b3b5eeec] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-b3b5eeec] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-b3b5eeec] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-b3b5eeec] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-b3b5eeec],\n.markdown-body table th[data-v-b3b5eeec] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-b3b5eeec] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-b3b5eeec]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-b3b5eeec] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-b3b5eeec] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-b3b5eeec] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-b3b5eeec] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-b3b5eeec] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-b3b5eeec] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-b3b5eeec] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-b3b5eeec] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-b3b5eeec],\n.markdown-body pre[data-v-b3b5eeec] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-b3b5eeec] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-b3b5eeec] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-b3b5eeec]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-b3b5eeec] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-b3b5eeec] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-b3b5eeec] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-b3b5eeec]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-b3b5eeec]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-b3b5eeec] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-b3b5eeec] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-b3b5eeec],\n.markdown-body .pl-token[data-v-b3b5eeec]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-b3b5eeec] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-b3b5eeec] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-b3b5eeec] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-b3b5eeec] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-b3b5eeec] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-b3b5eeec] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-b3b5eeec] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-b3b5eeec] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-b3b5eeec] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-b3b5eeec] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-b3b5eeec] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-b3b5eeec] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-b3b5eeec] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-b3b5eeec] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-b3b5eeec] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},97925:(n,e,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,"\n.icon-list[data-v-d83ec0ae] {\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tlist-style: none;\n}\n.icon-list li[data-v-d83ec0ae] {\n\tdisplay: flex;\n\tgrid-gap: 4px;\n\talign-items: center;\n}\n",""]),n.exports=o},58126:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});var o=a(44448),t=a(86812);const d={components:{MIcon:o.O},data:()=>({iconNames:Object.keys((0,t.uH)().icons)})};a(67215);var r=a(51900);const b=(0,r.Z)(d,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ul",{staticClass:"icon-list"},n._l(n.iconNames,(function(e){return a("li",{key:e},[a("m-icon",{attrs:{name:e}}),n._v(" "+n._s(e)+"\n\t")],1)})),0)}),[],!1,null,"d83ec0ae",null).exports;var i=a(415);const c={components:{MIcon:o.O},data:()=>({iconPatterns:Object.keys((0,t.uH)().icon.patterns)})};a(82736);const l=(0,r.Z)(c,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ul",{staticClass:"icon-list"},n._l(n.iconPatterns,(function(e){return a("li",{key:e},[a("m-icon",{attrs:{pattern:e}}),n._v(" "+n._s(e)+"\n\t")],1)})),0)}),[],!1,null,"16ab7239",null).exports,m={components:{Demo0:b,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile,Demo1:l}};a(91861);const v=(0,r.Z)(m,(function(){var n=this,e=n.$createElement;n._self._c;return n._m(6)}),[function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("p",[n._v("Maker provides several built-in icons (listed below). The icons "),a("code",[n._v("error")]),n._v(", "),a("code",[n._v("warning")]),n._v(", "),a("code",[n._v("success")]),n._v(" and "),a("code",[n._v("info")]),n._v(" are used within "),a("a",{attrs:{href:"#/Notice"}},[n._v("Notice")]),n._v(". "),a("code",[n._v("chevronLeft")]),n._v(" and "),a("code",[n._v("chevronRight")]),n._v(" are used within "),a("a",{attrs:{href:"#/Calendar"}},[n._v("Calendar")]),n._v(". "),a("code",[n._v("chevronDown")]),n._v(" is used within "),a("a",{attrs:{href:"#/Select"}},[n._v("Select")]),n._v(". "),a("code",[n._v("plus")]),n._v(" and "),a("code",[n._v("arrowUp")]),n._v(" are used within "),a("a",{attrs:{href:"#/ImageUploader"}},[n._v("ImageUploader")]),n._v(". "),a("code",[n._v("close")]),n._v(" is used within "),a("a",{attrs:{href:"#/Toast"}},[n._v("Toast")]),n._v(" and "),a("a",{attrs:{href:"#/ImageUploader"}},[n._v("ImageUploader")]),n._v(". "),a("code",[n._v("check")]),n._v(" is used within "),a("a",{attrs:{href:"#/Menu"}},[n._v("Menu")]),n._v(". "),a("code",[n._v("plus")]),n._v(" and "),a("code",[n._v("minus")]),n._v(" are used within "),a("a",{attrs:{href:"#/Stepper"}},[n._v("Stepper")]),n._v(". Any of these can be customized via the "),a("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component.")])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("p",[n._v("Patterns bundle an icon name along with a contextual color. Existing patterns can be customized, or new patterns can be added, via the "),a("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component.")])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("p",[n._v("Supports attributes from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg"}},[a("code",[n._v("<svg>")])]),n._v(".")])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("p",[n._v("Themable props* can be configured via the "),a("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component using the key "),a("code",[n._v("icon")]),n._v(".")])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[n._v("Prop")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Default")]),n._v(" "),a("th",[n._v("Possible values")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("pattern*")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[a("code",[n._v("'info'")]),n._v(", "),a("code",[n._v("'warning'")]),n._v(", "),a("code",[n._v("'error'")]),n._v(", "),a("code",[n._v("'success'")]),n._v(", "),a("code",[n._v("'primary'")]),n._v(", any custom pattern defined within the theme")]),n._v(" "),a("td",[n._v("pattern defined in theme")])]),n._v(" "),a("tr",[a("td",[n._v("name*")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'info'")])]),n._v(" "),a("td",[n._v("-")]),n._v(" "),a("td",[n._v("name of icon, defined in theme")])]),n._v(" "),a("tr",[a("td",[n._v("size")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'medium'")])]),n._v(" "),a("td",[a("code",[n._v("'medium'")]),n._v(", "),a("code",[n._v("'large'")]),n._v(", "),a("code",[n._v("'xlarge'")]),n._v(", "),a("code",[n._v("'xxlarge'")])]),n._v(" "),a("td",[n._v("size of icon")])]),n._v(" "),a("tr",[a("td",[n._v("color*")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'inherit'")])]),n._v(" "),a("td",[n._v("-")]),n._v(" "),a("td",[n._v("color of icon")])]),n._v(" "),a("tr",[a("td",[n._v("fill*")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'currentColor'")])]),n._v(" "),a("td",[n._v("-")]),n._v(" "),a("td",[n._v("fill of icon")])])])])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("p",[n._v("Supports events from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg"}},[a("code",[n._v("<svg>")])]),n._v(".")])},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Icon")]),n._v(" "),a("p",[n._v("Use Icon to render icons defined in the Theme.")]),n._v(" "),a("h2",[n._v("Examples")]),n._v(" "),a("h3",[n._v("Built-in default icons")]),n._v(" "),n._m(0),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<ul class="icon-list">\n\t\t<li\n\t\t\tv-for="iconName in iconNames"\n\t\t\t:key="iconName"\n\t\t>\n\t\t\t<m-icon :name="iconName" /> {{ iconName }}\n\t\t</li>\n\t</ul>\n</template>\n\n<script>\nimport { MIcon } from \'@square/maker/components/Icon\';\nimport { defaultTheme } from \'@square/maker/components/Theme\';\n\nexport default {\n\tcomponents: {\n\t\tMIcon,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\ticonNames: Object.keys(defaultTheme().icons),\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.icon-list {\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tlist-style: none;\n}\n\n.icon-list li {\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n}\n</style>\n')]],2)],1),n._v(" "),a("h3",[n._v("Built-in default patterns")]),n._v(" "),n._m(1),n._v(" "),a("demo-collapse",[a("Demo1"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<ul class="icon-list">\n\t\t<li\n\t\t\tv-for="iconPattern in iconPatterns"\n\t\t\t:key="iconPattern"\n\t\t>\n\t\t\t<m-icon :pattern="iconPattern" /> {{ iconPattern }}\n\t\t</li>\n\t</ul>\n</template>\n\n<script>\nimport { MIcon } from \'@square/maker/components/Icon\';\nimport { defaultTheme } from \'@square/maker/components/Theme\';\n\nexport default {\n\tcomponents: {\n\t\tMIcon,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\ticonPatterns: Object.keys(defaultTheme().icon.patterns),\n\t\t};\n\t},\n};\n<\/script>\n\n<style scoped>\n.icon-list {\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tlist-style: none;\n}\n\n.icon-list li {\n\tdisplay: flex;\n\tgap: 4px;\n\talign-items: center;\n}\n</style>\n')]],2)],1),n._v(" "),a("h2",[n._v("Props")]),n._v(" "),n._m(2),n._v(" "),n._m(3),n._v(" "),n._m(4),n._v(" "),a("h2",[n._v("Events")]),n._v(" "),n._m(5)],1)}],!1,null,"b3b5eeec",null).exports},33468:(n,e,a)=>{var o=a(85745);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("2a811eb5",o,!0,{})},82736:(n,e,a)=>{var o=a(75405);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("6247e962",o,!0,{})},91861:(n,e,a)=>{var o=a(55926);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("1fff9c75",o,!0,{})},67215:(n,e,a)=>{var o=a(97925);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("3591b984",o,!0,{})}}]);