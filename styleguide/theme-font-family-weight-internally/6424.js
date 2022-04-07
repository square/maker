(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6424],{43368:(n,d,a)=>{"use strict";a.d(d,{H:()=>i});var o=a(74927);const t={inheritAttrs:!1,model:{prop:"selected",event:"radio:update"},props:{value:{type:void 0,required:!0},selected:{type:void 0,default:void 0},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{isChecked(){return this.selected===this.value},checkVal:{get(){return this.selected},set(n){this.$emit("radio:update",n)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.radio.setCustomValidity(this.invalid?"invalid":"")}}};var e=a(82133),r=a.n(e),l=a(51900);const b={components:{RadioControl:(0,l.Z)(t,(function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("div",{class:n.$s.RadioContainer},[a("input",n._g(n._b({directives:[{name:"model",rawName:"v-model",value:n.checkVal,expression:"checkVal"}],ref:"radio",class:n.$s.Radio,attrs:{type:"radio",disabled:n.disabled},domProps:{value:n.value,checked:n.isChecked,checked:n._q(n.checkVal,n.value)},on:{change:function(d){n.checkVal=n.value}}},"input",n.$attrs,!1),n.$listeners))])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports,MInlineFormControlLayout:o.r},inheritAttrs:!1,model:{prop:"selected",event:"radio:update"},props:{disabled:{type:Boolean,default:!1}}};const i=(0,l.Z)(b,(function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("m-inline-form-control-layout",{attrs:{disabled:n.disabled},scopedSlots:n._u([{key:"control",fn:function(){return[a("radio-control",n._g(n._b({attrs:{disabled:n.disabled}},"radio-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"label",fn:function(){return[n._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[n._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},74927:(n,d,a)=>{"use strict";a.d(d,{r:()=>l});var o=a(32416);const t={props:{disabled:{type:Boolean,default:!1}},mounted(){o.Z.error(this.$slots.label,'Missing "label" slot in inline form control')}};var e=a(34792),r=a.n(e);const l=(0,a(51900).Z)(t,(function(){var n,d=this,a=d.$createElement,o=d._self._c||a;return o("label",{class:[d.$s.LayoutContainer,(n={},n[d.$s.disabled]=d.disabled,n)]},[o("div",{class:d.$s.ControlAligner},[d._t("control")],2),d._v(" "),o("div",{class:d.$s.Label},[d._t("label"),d._v(" "),d.$slots.sublabel?o("div",{class:d.$s.SubLabel},[d._t("sublabel")],2):d._e()],2)])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports},32416:(n,d,a)=>{"use strict";a.d(d,{Z:()=>t});var o=a(14219);const t={warn(n,d,a){n||(0,o.K)(d,a)},error(n,d,a){n||(0,o._)(d,a)}}},14219:(n,d,a)=>{"use strict";a.d(d,{_:()=>e,K:()=>r});const o="object"==typeof process&&"object"==typeof process.env&&!0,t=n=>["%c @square/maker".concat(n),"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],e=(n,d)=>{throw console.error(...t(d),n),new Error("".concat((n=>"[@square/maker]".concat(n))(d)," ").concat(n))},r=(n,d)=>{o&&console.warn(...t(d),n)}},98253:(n,d,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,'\n.RadioContainer_f_wsd {\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* these should later be pulled from\n\tthe ThemeProvider component */\n\t--color-border: var(--neutral-20, rgba(0, 0, 0, 0.3));\n\t--color-fill: var(--neutral-90, rgba(0, 0, 0, 0.9));\n\t--color-error: rgba(206, 50, 23, 1);\n}\n.Radio_QrTf4 {\n\tbox-sizing: border-box;\n\twidth: 20px;\n\theight: 20px;\n\tmargin: 0;\n\tpadding: 0;\n\tvertical-align: middle;\n\tbackground-color: var(--color-background, #fff);\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 50%;\n\toutline: none;\n\tcursor: pointer;\n\ttransition:\n\t\tborder 0.2s ease,\n\t\tbackground-color 0.2s ease;\n\t-webkit-appearance: none;\n\t        appearance: none;\n\t-webkit-user-select: none;\n\t        user-select: none\n}\n.Radio_QrTf4::after {\n\t\tdisplay: block;\n\t\twidth: 6px;\n\t\theight: 6px;\n\t\tmargin: 6px;\n\t\tbackground-color: var(--color-background, #fff);\n\t\tborder-radius: 50%;\n}\n.Radio_QrTf4:checked {\n\t\tbackground-color: var(--color-fill);\n\t\tborder-color: var(--color-fill)\n}\n.Radio_QrTf4:checked::after {\n\t\t\tcontent: "";\n}\n.Radio_QrTf4:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Radio_QrTf4:checked:invalid {\n\t\tbackground-color: var(--color-error);\n\t\tborder-color: var(--color-error);\n}\n.Radio_QrTf4:hover:not(:disabled, :invalid), .Radio_QrTf4:focus:not(:disabled, :invalid), .Radio_QrTf4:active:not(:disabled, :invalid) {\n\t\tborder-color: var(--color-fill);\n}\n',""]),o.locals={RadioContainer:"RadioContainer_f_wsd",Radio:"Radio_QrTf4"},n.exports=o},74115:(n,d,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,"\n.LayoutContainer_uOszo {\n\tdisplay: inline-flex;\n\tfont-size: 14px;\n\tfont-family: inherit;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.disabled_SmrOi {\n\tcursor: not-allowed;\n\topacity: 0.5;\n}\n.ControlAligner_iOAuQ {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.Label_tlDI1 {\n\tfont-weight: var(--font-weight-paragraph, 400);\n\tfont-family: var(--font-family-paragraph, inherit);\n}\n.SubLabel_N9Mw5 {\n\tcolor: var(--neutral-80, inherit);\n}\n",""]),o.locals={LayoutContainer:"LayoutContainer_uOszo",disabled:"disabled_SmrOi",ControlAligner:"ControlAligner_iOAuQ",Label:"Label_tlDI1",SubLabel:"SubLabel_N9Mw5"},n.exports=o},53706:(n,d,a)=>{var o=a(77705)((function(n){return n[1]}));o.push([n.id,'\n.markdown-body .octicon[data-v-dfbd5914] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-dfbd5914] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-dfbd5914]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-dfbd5914],\n.markdown-body h2 .octicon-link[data-v-dfbd5914],\n.markdown-body h3 .octicon-link[data-v-dfbd5914],\n.markdown-body h4 .octicon-link[data-v-dfbd5914],\n.markdown-body h5 .octicon-link[data-v-dfbd5914],\n.markdown-body h6 .octicon-link[data-v-dfbd5914] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-dfbd5914],\n.markdown-body h2:hover .anchor[data-v-dfbd5914],\n.markdown-body h3:hover .anchor[data-v-dfbd5914],\n.markdown-body h4:hover .anchor[data-v-dfbd5914],\n.markdown-body h5:hover .anchor[data-v-dfbd5914],\n.markdown-body h6:hover .anchor[data-v-dfbd5914] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-dfbd5914],\n.markdown-body h2:hover .anchor .octicon-link[data-v-dfbd5914],\n.markdown-body h3:hover .anchor .octicon-link[data-v-dfbd5914],\n.markdown-body h4:hover .anchor .octicon-link[data-v-dfbd5914],\n.markdown-body h5:hover .anchor .octicon-link[data-v-dfbd5914],\n.markdown-body h6:hover .anchor .octicon-link[data-v-dfbd5914] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-dfbd5914]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-dfbd5914]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-dfbd5914]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-dfbd5914]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-dfbd5914]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-dfbd5914]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-dfbd5914] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-dfbd5914] {\n  display: block;\n}\n.markdown-body summary[data-v-dfbd5914] {\n  display: list-item;\n}\n.markdown-body a[data-v-dfbd5914] {\n  background-color: initial;\n}\n.markdown-body a[data-v-dfbd5914]:active,\n.markdown-body a[data-v-dfbd5914]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-dfbd5914] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-dfbd5914] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-dfbd5914] {\n  border-style: none;\n}\n.markdown-body code[data-v-dfbd5914],\n.markdown-body kbd[data-v-dfbd5914],\n.markdown-body pre[data-v-dfbd5914] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-dfbd5914] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-dfbd5914] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-dfbd5914] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-dfbd5914] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-dfbd5914] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-dfbd5914] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-dfbd5914] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-dfbd5914]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-dfbd5914] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-dfbd5914] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-dfbd5914]:after,\n.markdown-body hr[data-v-dfbd5914]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-dfbd5914]:after {\n  clear: both;\n}\n.markdown-body table[data-v-dfbd5914] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-dfbd5914],\n.markdown-body th[data-v-dfbd5914] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-dfbd5914] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-dfbd5914] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-dfbd5914],\n.markdown-body h2[data-v-dfbd5914],\n.markdown-body h3[data-v-dfbd5914],\n.markdown-body h4[data-v-dfbd5914],\n.markdown-body h5[data-v-dfbd5914],\n.markdown-body h6[data-v-dfbd5914] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-dfbd5914] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-dfbd5914],\n.markdown-body h2[data-v-dfbd5914] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-dfbd5914] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-dfbd5914] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-dfbd5914],\n.markdown-body h4[data-v-dfbd5914] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-dfbd5914] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-dfbd5914] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-dfbd5914],\n.markdown-body h6[data-v-dfbd5914] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-dfbd5914] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-dfbd5914] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-dfbd5914] {\n  margin: 0;\n}\n.markdown-body ol[data-v-dfbd5914],\n.markdown-body ul[data-v-dfbd5914] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-dfbd5914],\n.markdown-body ul ol[data-v-dfbd5914] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-dfbd5914],\n.markdown-body ol ul ol[data-v-dfbd5914],\n.markdown-body ul ol ol[data-v-dfbd5914],\n.markdown-body ul ul ol[data-v-dfbd5914] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-dfbd5914] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-dfbd5914],\n.markdown-body pre[data-v-dfbd5914] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-dfbd5914] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-dfbd5914]::-webkit-inner-spin-button,\n.markdown-body input[data-v-dfbd5914]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-dfbd5914] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-dfbd5914] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-dfbd5914] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-dfbd5914] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-dfbd5914] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-dfbd5914] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-dfbd5914] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-dfbd5914] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-dfbd5914] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-dfbd5914] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-dfbd5914] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-dfbd5914] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-dfbd5914] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-dfbd5914] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-dfbd5914] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-dfbd5914],\n.markdown-body .px-3[data-v-dfbd5914] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-dfbd5914] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-dfbd5914] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-dfbd5914] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-dfbd5914] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-dfbd5914] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-dfbd5914] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-dfbd5914] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-dfbd5914] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-dfbd5914],\n.markdown-body .pl-s .pl-v[data-v-dfbd5914] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-dfbd5914],\n.markdown-body .pl-en[data-v-dfbd5914] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-dfbd5914],\n.markdown-body .pl-smi[data-v-dfbd5914] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-dfbd5914] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-dfbd5914] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-dfbd5914],\n.markdown-body .pl-s[data-v-dfbd5914],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-dfbd5914],\n.markdown-body .pl-sr[data-v-dfbd5914],\n.markdown-body .pl-sr .pl-cce[data-v-dfbd5914],\n.markdown-body .pl-sr .pl-sra[data-v-dfbd5914],\n.markdown-body .pl-sr .pl-sre[data-v-dfbd5914] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-dfbd5914],\n.markdown-body .pl-v[data-v-dfbd5914] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-dfbd5914] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-dfbd5914] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-dfbd5914] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-dfbd5914]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-dfbd5914] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-dfbd5914] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-dfbd5914],\n.markdown-body .pl-mh .pl-en[data-v-dfbd5914],\n.markdown-body .pl-ms[data-v-dfbd5914] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-dfbd5914] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-dfbd5914] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-dfbd5914] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-dfbd5914] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-dfbd5914] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-dfbd5914] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-dfbd5914] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-dfbd5914] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-dfbd5914] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-dfbd5914] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-dfbd5914] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-dfbd5914] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-dfbd5914] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-dfbd5914] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-dfbd5914] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-dfbd5914] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-dfbd5914] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-dfbd5914] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-dfbd5914] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-dfbd5914] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-dfbd5914] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-dfbd5914] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-dfbd5914] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-dfbd5914] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-dfbd5914] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-dfbd5914] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-dfbd5914] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-dfbd5914] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-dfbd5914] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-dfbd5914] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-dfbd5914]:after,\n.markdown-body[data-v-dfbd5914]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-dfbd5914]:after {\n  clear: both;\n}\n.markdown-body[data-v-dfbd5914]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-dfbd5914]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-dfbd5914]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-dfbd5914],\n.markdown-body details[data-v-dfbd5914],\n.markdown-body dl[data-v-dfbd5914],\n.markdown-body ol[data-v-dfbd5914],\n.markdown-body p[data-v-dfbd5914],\n.markdown-body pre[data-v-dfbd5914],\n.markdown-body table[data-v-dfbd5914],\n.markdown-body ul[data-v-dfbd5914] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-dfbd5914] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-dfbd5914] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-dfbd5914]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-dfbd5914]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-dfbd5914],\n.markdown-body h2[data-v-dfbd5914],\n.markdown-body h3[data-v-dfbd5914],\n.markdown-body h4[data-v-dfbd5914],\n.markdown-body h5[data-v-dfbd5914],\n.markdown-body h6[data-v-dfbd5914] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-dfbd5914] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-dfbd5914],\n.markdown-body h2[data-v-dfbd5914] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-dfbd5914] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-dfbd5914] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-dfbd5914] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-dfbd5914] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-dfbd5914] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-dfbd5914],\n.markdown-body ul[data-v-dfbd5914] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-dfbd5914],\n.markdown-body ol ul[data-v-dfbd5914],\n.markdown-body ul ol[data-v-dfbd5914],\n.markdown-body ul ul[data-v-dfbd5914] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-dfbd5914] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-dfbd5914] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-dfbd5914] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-dfbd5914] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-dfbd5914] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-dfbd5914] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-dfbd5914] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-dfbd5914] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-dfbd5914],\n.markdown-body table th[data-v-dfbd5914] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-dfbd5914] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-dfbd5914]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-dfbd5914] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-dfbd5914] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-dfbd5914] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-dfbd5914] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-dfbd5914] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-dfbd5914] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-dfbd5914] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-dfbd5914] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-dfbd5914],\n.markdown-body pre[data-v-dfbd5914] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-dfbd5914] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-dfbd5914] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-dfbd5914]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-dfbd5914] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-dfbd5914] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-dfbd5914] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-dfbd5914]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-dfbd5914]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-dfbd5914] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-dfbd5914] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-dfbd5914],\n.markdown-body .pl-token[data-v-dfbd5914]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-dfbd5914] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-dfbd5914] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-dfbd5914] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-dfbd5914] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-dfbd5914] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-dfbd5914] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-dfbd5914] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-dfbd5914] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-dfbd5914] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-dfbd5914] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-dfbd5914] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-dfbd5914] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-dfbd5914] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-dfbd5914] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-dfbd5914] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=o},26424:(n,d,a)=>{"use strict";a.r(d),a.d(d,{default:()=>b});const o={components:{MRadio:a(43368).H},data:()=>({selectedVal:"normal"})};var t=a(51900);const e=(0,t.Z)(o,(function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("div",[a("h4",[n._v("normal state")]),n._v(" "),a("m-radio",{attrs:{value:"normal"},model:{value:n.selectedVal,callback:function(d){n.selectedVal=d},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("disabled state")]),n._v(" "),a("m-radio",{attrs:{disabled:"",value:"disabled"},model:{value:n.selectedVal,callback:function(d){n.selectedVal=d},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("invalid state")]),n._v(" "),a("m-radio",{attrs:{invalid:"",value:"invalid"},model:{value:n.selectedVal,callback:function(d){n.selectedVal=d},expression:"selectedVal"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),a("h4",[n._v("selected value")]),n._v(" "),a("pre",[a("code",[n._v(n._s(JSON.stringify(n.$data,null,4)))])]),n._v(" "),a("h4",[n._v("example with label")]),n._v(" "),a("m-radio",{attrs:{value:"label"},model:{value:n.selectedVal,callback:function(d){n.selectedVal=d},expression:"selectedVal"}},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t")]),n._v(" "),a("h4",[n._v("example with label + sublabel")]),n._v(" "),a("m-radio",{attrs:{value:"sublabel"},scopedSlots:n._u([{key:"sublabel",fn:function(){return[n._v("\n\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t")]},proxy:!0}]),model:{value:n.selectedVal,callback:function(d){n.selectedVal=d},expression:"selectedVal"}},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t")])],1)}),[],!1,null,null,null).exports;var r=a(415);const l={components:{Demo0:e,DemoCollapse:r.DemoCollapse,SrcFile:r.SrcFile}};a(17904);const b=(0,t.Z)(l,(function(){var n=this,d=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("p",[n._v("Supports attributes from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"}},[a("code",[n._v('<input type="radio">')])]),n._v(".")])},function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("table",[a("thead",[a("tr",[a("th",[n._v("Prop")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Default")]),n._v(" "),a("th",[n._v("Possible values")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("value*")]),n._v(" "),a("td",[a("code",[n._v("undefined")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Value to return from v-model")])]),n._v(" "),a("tr",[a("td",[n._v("v-model")]),n._v(" "),a("td",[a("code",[n._v("undefined")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Toggles radio’s selected state")])]),n._v(" "),a("tr",[a("td",[n._v("invalid")]),n._v(" "),a("td",[a("code",[n._v("boolean")])]),n._v(" "),a("td",[a("code",[n._v("false")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Toggles radio’s invalid state")])]),n._v(" "),a("tr",[a("td",[n._v("disabled")]),n._v(" "),a("td",[a("code",[n._v("boolean")])]),n._v(" "),a("td",[a("code",[n._v("false")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Toggles radio disabled state")])])])])},function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("table",[a("thead",[a("tr",[a("th",[n._v("Slot")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("default")]),n._v(" "),a("td",[n._v("Radio label")])]),n._v(" "),a("tr",[a("td",[n._v("sublabel")]),n._v(" "),a("td",[n._v("Radio sublabel")])])])])},function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("p",[n._v("Supports events from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"}},[a("code",[n._v('<input type="radio">')])]),n._v(".")])},function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("table",[a("thead",[a("tr",[a("th",[n._v("Event")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("radio:update")]),n._v(" "),a("td",[n._v("-")]),n._v(" "),a("td",[n._v("—")])])])])},function(){var n=this,d=n.$createElement,a=n._self._c||d;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Radio")]),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>normal state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="normal"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>disabled state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tdisabled\n\t\t\tvalue="disabled"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>invalid state</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tinvalid\n\t\t\tvalue="invalid"\n\t\t>\n\t\t\tlabel\n\t\t</m-radio>\n\n\t\t<h4>selected value</h4>\n\t\t<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>\n\n\t\t<h4>example with label</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="label"\n\t\t>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t</m-radio>\n\n\t\t<h4>example with label + sublabel</h4>\n\t\t<m-radio\n\t\t\tv-model="selectedVal"\n\t\t\tvalue="sublabel"\n\t\t>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t\t<template #sublabel>\n\t\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t\t</template>\n\t\t</m-radio>\n\t</div>\n</template>\n\n<script>\nimport { MRadio } from \'@square/maker/components/Radio\';\n\nexport default {\n\tcomponents: {\n\t\tMRadio,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tselectedVal: \'normal\',\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),a("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),a("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),a("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"dfbd5914",null).exports},82133:(n,d,a)=>{var o=a(98253);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("8e6b00a6",o,!0,{})},34792:(n,d,a)=>{var o=a(74115);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("1de6cd41",o,!0,{})},17904:(n,d,a)=>{var o=a(53706);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,a(54023).Z)("1df1fe06",o,!0,{})}}]);