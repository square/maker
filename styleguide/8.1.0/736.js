(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[736],{59788:(n,a,o)=>{"use strict";o.d(a,{r:()=>l});var t=o(32416);const d={mounted(){t.Z.error(this.$slots.label,'Missing "label" slot in inline form control')}};var r=o(34792),e=o.n(r);const l=(0,o(51900).Z)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("label",{class:n.$s.LayoutContainer},[o("div",{class:n.$s.ControlAligner},[n._t("control")],2),n._v(" "),o("div",[n._t("label"),n._v(" "),n.$slots.sublabel?o("div",{class:n.$s.SubLabel},[n._t("sublabel")],2):n._e()],2)])}),[],!1,(function(n){this.$s=e().locals||e()}),null,null).exports},32416:(n,a,o)=>{"use strict";o.d(a,{Z:()=>d});var t=o(14219);const d={warn(n,a,o){n||(0,t.K)(a,o)},error(n,a,o){n||(0,t._)(a,o)}}},14219:(n,a,o)=>{"use strict";o.d(a,{_:()=>r,K:()=>e});const t="object"==typeof process&&"object"==typeof process.env&&!0,d=n=>["%c @square/maker".concat(n),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(n,a)=>{throw console.error(...d(a),n),new Error("".concat((n=>"[@square/maker]".concat(n))(a)," ").concat(n))},e=(n,a)=>{t&&console.warn(...d(a),n)}},98253:(n,a,o)=>{var t=o(77705)((function(n){return n[1]}));t.push([n.id,'\n.RadioContainer_f_wsd {\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* these should later be pulled from\n\tthe ThemeProvider component */\n\t--color-border: rgba(0, 0, 0, 0.3);\n\t--color-background: rgba(255, 255, 255, 0.95);\n\t--color-fill: rgba(0, 0, 0, 0.9);\n\t--color-focus: rgba(0, 0, 0, 0.9);\n\t--color-error: rgba(206, 50, 23, 1);\n\t--color-disabled: rgba(0, 0, 0, 0.05);\n\t--color-disabled-fill: rgba(0, 0, 0, 0.15);\n}\n.Radio_QrTf4 {\n\tbox-sizing: border-box;\n\twidth: 20px;\n\theight: 20px;\n\tmargin: 0;\n\tpadding: 0;\n\tvertical-align: middle;\n\tbackground-color: var(--color-background);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 50%;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: background-color 0.2s ease;\n\t-webkit-appearance: none;\n\t        appearance: none;\n\t-webkit-user-select: none;\n\t        user-select: none\n}\n.Radio_QrTf4::after {\n\t\tdisplay: block;\n\t\twidth: 6px;\n\t\theight: 6px;\n\t\tmargin: 6px;\n\t\tbackground-color: var(--color-background);\n\t\tborder-radius: 50%;\n}\n.Radio_QrTf4:checked {\n\t\tbackground-color: var(--color-fill);\n\t\tborder-color: var(--color-fill)\n}\n.Radio_QrTf4:checked::after {\n\t\t\tcontent: "";\n}\n.Radio_QrTf4:disabled {\n\t\tbackground-color: var(--color-disabled);\n\t\tborder-color: var(--color-disabled);\n\t\tcursor: not-allowed;\n}\n.Radio_QrTf4:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Radio_QrTf4:checked:invalid {\n\t\tbackground-color: var(--color-error);\n\t\tborder-color: var(--color-error);\n}\n.Radio_QrTf4:hover:not(:disabled, :invalid), .Radio_QrTf4:focus:not(:disabled, :invalid), .Radio_QrTf4:active:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-focus);\n}\n',""]),t.locals={RadioContainer:"RadioContainer_f_wsd",Radio:"Radio_QrTf4"},n.exports=t},74115:(n,a,o)=>{var t=o(77705)((function(n){return n[1]}));t.push([n.id,"\n.LayoutContainer_uOszo {\n\t--opacity-sublabel: 0.55;\n\n\tdisplay: inline-flex;\n\tcolor: inherit;\n\tfont-size: 14px;\n\tfont-family: inherit;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.ControlAligner_iOAuQ {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.SubLabel_N9Mw5 {\n\topacity: var(--opacity-sublabel);\n}\n",""]),t.locals={LayoutContainer:"LayoutContainer_uOszo",ControlAligner:"ControlAligner_iOAuQ",SubLabel:"SubLabel_N9Mw5"},n.exports=t},70390:(n,a,o)=>{var t=o(77705)((function(n){return n[1]}));t.push([n.id,'\n.markdown-body .octicon[data-v-f96f7c58] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-f96f7c58] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-f96f7c58]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-f96f7c58],\n.markdown-body h2 .octicon-link[data-v-f96f7c58],\n.markdown-body h3 .octicon-link[data-v-f96f7c58],\n.markdown-body h4 .octicon-link[data-v-f96f7c58],\n.markdown-body h5 .octicon-link[data-v-f96f7c58],\n.markdown-body h6 .octicon-link[data-v-f96f7c58] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-f96f7c58],\n.markdown-body h2:hover .anchor[data-v-f96f7c58],\n.markdown-body h3:hover .anchor[data-v-f96f7c58],\n.markdown-body h4:hover .anchor[data-v-f96f7c58],\n.markdown-body h5:hover .anchor[data-v-f96f7c58],\n.markdown-body h6:hover .anchor[data-v-f96f7c58] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-f96f7c58],\n.markdown-body h2:hover .anchor .octicon-link[data-v-f96f7c58],\n.markdown-body h3:hover .anchor .octicon-link[data-v-f96f7c58],\n.markdown-body h4:hover .anchor .octicon-link[data-v-f96f7c58],\n.markdown-body h5:hover .anchor .octicon-link[data-v-f96f7c58],\n.markdown-body h6:hover .anchor .octicon-link[data-v-f96f7c58] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-f96f7c58]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-f96f7c58]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-f96f7c58]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-f96f7c58]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-f96f7c58]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-f96f7c58]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-f96f7c58] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-f96f7c58] {\n  display: block;\n}\n.markdown-body summary[data-v-f96f7c58] {\n  display: list-item;\n}\n.markdown-body a[data-v-f96f7c58] {\n  background-color: initial;\n}\n.markdown-body a[data-v-f96f7c58]:active,\n.markdown-body a[data-v-f96f7c58]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-f96f7c58] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-f96f7c58] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-f96f7c58] {\n  border-style: none;\n}\n.markdown-body code[data-v-f96f7c58],\n.markdown-body kbd[data-v-f96f7c58],\n.markdown-body pre[data-v-f96f7c58] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-f96f7c58] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-f96f7c58] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-f96f7c58] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-f96f7c58] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-f96f7c58] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-f96f7c58] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-f96f7c58] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-f96f7c58]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-f96f7c58] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-f96f7c58] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-f96f7c58]:after,\n.markdown-body hr[data-v-f96f7c58]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-f96f7c58]:after {\n  clear: both;\n}\n.markdown-body table[data-v-f96f7c58] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-f96f7c58],\n.markdown-body th[data-v-f96f7c58] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-f96f7c58] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-f96f7c58] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-f96f7c58],\n.markdown-body h2[data-v-f96f7c58],\n.markdown-body h3[data-v-f96f7c58],\n.markdown-body h4[data-v-f96f7c58],\n.markdown-body h5[data-v-f96f7c58],\n.markdown-body h6[data-v-f96f7c58] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-f96f7c58] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-f96f7c58],\n.markdown-body h2[data-v-f96f7c58] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-f96f7c58] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-f96f7c58] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-f96f7c58],\n.markdown-body h4[data-v-f96f7c58] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-f96f7c58] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-f96f7c58] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-f96f7c58],\n.markdown-body h6[data-v-f96f7c58] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-f96f7c58] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-f96f7c58] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-f96f7c58] {\n  margin: 0;\n}\n.markdown-body ol[data-v-f96f7c58],\n.markdown-body ul[data-v-f96f7c58] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-f96f7c58],\n.markdown-body ul ol[data-v-f96f7c58] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-f96f7c58],\n.markdown-body ol ul ol[data-v-f96f7c58],\n.markdown-body ul ol ol[data-v-f96f7c58],\n.markdown-body ul ul ol[data-v-f96f7c58] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-f96f7c58] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-f96f7c58],\n.markdown-body pre[data-v-f96f7c58] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-f96f7c58] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-f96f7c58]::-webkit-inner-spin-button,\n.markdown-body input[data-v-f96f7c58]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-f96f7c58] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-f96f7c58] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-f96f7c58] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-f96f7c58] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-f96f7c58] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-f96f7c58] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-f96f7c58] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-f96f7c58] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-f96f7c58] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-f96f7c58] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-f96f7c58] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-f96f7c58] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-f96f7c58] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-f96f7c58] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-f96f7c58] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-f96f7c58],\n.markdown-body .px-3[data-v-f96f7c58] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-f96f7c58] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-f96f7c58] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-f96f7c58] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-f96f7c58] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-f96f7c58] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-f96f7c58] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-f96f7c58] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-f96f7c58] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-f96f7c58],\n.markdown-body .pl-s .pl-v[data-v-f96f7c58] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-f96f7c58],\n.markdown-body .pl-en[data-v-f96f7c58] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-f96f7c58],\n.markdown-body .pl-smi[data-v-f96f7c58] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-f96f7c58] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-f96f7c58] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-f96f7c58],\n.markdown-body .pl-s[data-v-f96f7c58],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-f96f7c58],\n.markdown-body .pl-sr[data-v-f96f7c58],\n.markdown-body .pl-sr .pl-cce[data-v-f96f7c58],\n.markdown-body .pl-sr .pl-sra[data-v-f96f7c58],\n.markdown-body .pl-sr .pl-sre[data-v-f96f7c58] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-f96f7c58],\n.markdown-body .pl-v[data-v-f96f7c58] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-f96f7c58] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-f96f7c58] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-f96f7c58] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-f96f7c58]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-f96f7c58] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-f96f7c58] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-f96f7c58],\n.markdown-body .pl-mh .pl-en[data-v-f96f7c58],\n.markdown-body .pl-ms[data-v-f96f7c58] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-f96f7c58] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-f96f7c58] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-f96f7c58] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-f96f7c58] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-f96f7c58] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-f96f7c58] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-f96f7c58] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-f96f7c58] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-f96f7c58] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-f96f7c58] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-f96f7c58] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-f96f7c58] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-f96f7c58] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-f96f7c58] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-f96f7c58] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-f96f7c58] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-f96f7c58] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-f96f7c58] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-f96f7c58] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-f96f7c58] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-f96f7c58] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-f96f7c58] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-f96f7c58] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-f96f7c58] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-f96f7c58] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-f96f7c58] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-f96f7c58] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-f96f7c58] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-f96f7c58] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-f96f7c58] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-f96f7c58]:after,\n.markdown-body[data-v-f96f7c58]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-f96f7c58]:after {\n  clear: both;\n}\n.markdown-body[data-v-f96f7c58]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-f96f7c58]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-f96f7c58]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-f96f7c58],\n.markdown-body details[data-v-f96f7c58],\n.markdown-body dl[data-v-f96f7c58],\n.markdown-body ol[data-v-f96f7c58],\n.markdown-body p[data-v-f96f7c58],\n.markdown-body pre[data-v-f96f7c58],\n.markdown-body table[data-v-f96f7c58],\n.markdown-body ul[data-v-f96f7c58] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-f96f7c58] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-f96f7c58] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-f96f7c58]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-f96f7c58]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-f96f7c58],\n.markdown-body h2[data-v-f96f7c58],\n.markdown-body h3[data-v-f96f7c58],\n.markdown-body h4[data-v-f96f7c58],\n.markdown-body h5[data-v-f96f7c58],\n.markdown-body h6[data-v-f96f7c58] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-f96f7c58] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-f96f7c58],\n.markdown-body h2[data-v-f96f7c58] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-f96f7c58] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-f96f7c58] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-f96f7c58] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-f96f7c58] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-f96f7c58] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-f96f7c58],\n.markdown-body ul[data-v-f96f7c58] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-f96f7c58],\n.markdown-body ol ul[data-v-f96f7c58],\n.markdown-body ul ol[data-v-f96f7c58],\n.markdown-body ul ul[data-v-f96f7c58] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-f96f7c58] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-f96f7c58] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-f96f7c58] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-f96f7c58] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-f96f7c58] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-f96f7c58] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-f96f7c58] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-f96f7c58] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-f96f7c58],\n.markdown-body table th[data-v-f96f7c58] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-f96f7c58] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-f96f7c58]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-f96f7c58] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-f96f7c58] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-f96f7c58] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-f96f7c58] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-f96f7c58] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-f96f7c58] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-f96f7c58] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-f96f7c58] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-f96f7c58],\n.markdown-body pre[data-v-f96f7c58] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-f96f7c58] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-f96f7c58] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-f96f7c58]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-f96f7c58] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-f96f7c58] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-f96f7c58] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-f96f7c58]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-f96f7c58]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-f96f7c58] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-f96f7c58] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-f96f7c58],\n.markdown-body .pl-token[data-v-f96f7c58]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-f96f7c58] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-f96f7c58] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-f96f7c58] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-f96f7c58] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-f96f7c58] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-f96f7c58] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-f96f7c58] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-f96f7c58] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-f96f7c58] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-f96f7c58] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-f96f7c58] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-f96f7c58] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-f96f7c58] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-f96f7c58] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-f96f7c58] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},31623:(n,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>p});var t=o(59788);const d={inheritAttrs:!1,model:{prop:"selected",event:"radio:update"},props:{value:{type:void 0,required:!0},selected:{type:void 0,default:void 0},invalid:{type:Boolean,default:!1}},computed:{isChecked(){return this.selected===this.value},checkVal:{get(){return this.selected},set(n){this.$emit("radio:update",n)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.radio.setCustomValidity(this.invalid?"invalid":"")}}};var r=o(82133),e=o.n(r),l=o(51900);const i={components:{RadioControl:(0,l.Z)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{class:n.$s.RadioContainer},[o("input",n._g(n._b({directives:[{name:"model",rawName:"v-model",value:n.checkVal,expression:"checkVal"}],ref:"radio",class:n.$s.Radio,attrs:{type:"radio"},domProps:{value:n.value,checked:n.isChecked,checked:n._q(n.checkVal,n.value)},on:{change:function(a){n.checkVal=n.value}}},"input",n.$attrs,!1),n.$listeners))])}),[],!1,(function(n){this.$s=e().locals||e()}),null,null).exports,MInlineFormControlLayout:t.r},inheritAttrs:!1,model:{prop:"selected",event:"radio:update"}};const f={components:{MRadio:(0,l.Z)(i,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("m-inline-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[o("radio-control",n._g(n._b({},"radio-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"label",fn:function(){return[n._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[n._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},data:()=>({selectedVal:"normal"})};const c=(0,l.Z)(f,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",[o("h4",[n._v("normal state")]),n._v(" "),o("m-radio",{attrs:{value:"normal"},model:{value:n.selectedVal,callback:function(a){n.selectedVal=a},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("disabled state")]),n._v(" "),o("m-radio",{attrs:{disabled:"",value:"disabled"},model:{value:n.selectedVal,callback:function(a){n.selectedVal=a},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("invalid state")]),n._v(" "),o("m-radio",{attrs:{invalid:"",value:"invalid"},model:{value:n.selectedVal,callback:function(a){n.selectedVal=a},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("selected value")]),n._v(" "),o("pre",[o("code",[n._v(n._s(JSON.stringify(n.$data,null,4)))])]),n._v(" "),o("h4",[n._v("example with label")]),n._v(" "),o("m-radio",{attrs:{value:"label"},model:{value:n.selectedVal,callback:function(a){n.selectedVal=a},expression:"selectedVal"}},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t")]),n._v(" "),o("h4",[n._v("example with label + sublabel")]),n._v(" "),o("m-radio",{attrs:{value:"sublabel"},scopedSlots:n._u([{key:"sublabel",fn:function(){return[n._v("\n\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t")]},proxy:!0}]),model:{value:n.selectedVal,callback:function(a){n.selectedVal=a},expression:"selectedVal"}},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t")])],1)}),[],!1,null,null,null).exports;var b=o(415);const m={components:{Demo0:c,DemoCollapse:b.DemoCollapse,SrcFile:b.SrcFile}};o(5937);const p=(0,l.Z)(m,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"}},[o("code",[n._v('<input type="radio">')])]),n._v(".")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("value*")]),n._v(" "),o("td",[o("code",[n._v("undefined")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Value to return from v-model")])]),n._v(" "),o("tr",[o("td",[n._v("v-model")]),n._v(" "),o("td",[o("code",[n._v("undefined")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles radio’s selected state")])]),n._v(" "),o("tr",[o("td",[n._v("invalid")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles radio’s invalid state")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("Radio label")])]),n._v(" "),o("tr",[o("td",[n._v("sublabel")]),n._v(" "),o("td",[n._v("Radio sublabel")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"}},[o("code",[n._v('<input type="radio">')])]),n._v(".")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Event")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("radio:update")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Radio")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>normal state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="normal"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>disabled state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tdisabled\n\t\t\tvalue="disabled"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>invalid state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tinvalid\n\t\t\tvalue="invalid"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>selected value</h4>\n\t\t<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>\n\n\t\t<h4>example with label</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="label"\n\t\t>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t</m-radio>\n\n\t\t<h4>example with label + sublabel</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="sublabel"\n\t\t>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t\t<template #sublabel>\n\t\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t\t</template>\n\t\t</m-radio>\n\t</div>\n</template>\n\n<script>\nimport { MRadio } from \'@square/maker/components/Radio\';\n\nexport default {\n\tcomponents: {\n\t\tMRadio,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tselectedVal: \'normal\',\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"f96f7c58",null).exports},82133:(n,a,o)=>{var t=o(98253);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,o(54023).Z)("8e6b00a6",t,!0,{})},34792:(n,a,o)=>{var t=o(74115);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,o(54023).Z)("1de6cd41",t,!0,{})},5937:(n,a,o)=>{var t=o(70390);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,o(54023).Z)("063677bf",t,!0,{})}}]);