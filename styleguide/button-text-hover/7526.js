(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7526],{90970:(n,t,d)=>{"use strict";d.d(t,{O:()=>l});var a=d(32416),o=d(2606);const e={medium:"16px",large:"24px"},r={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{name:{type:String,required:!0},size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)}},computed:{iconComponent(){const n=this.theme.icons[this.name];return a.Z.error(n,"'".concat(this.name,"' icon not defined in theme"),"Icon"),n},inlineStyles(){return{"--icon-size":e[this.size]}}}};var c=d(33468),i=d.n(c);const l=(0,d(51900).Z)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)(n.iconComponent,n._g(n._b({tag:"component",class:n.$s.Icon,style:n.inlineStyles},"component",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports},66767:(n,t,d)=>{var a=d(77705)((function(n){return n[1]}));a.push([n.id,"\n.Calendar_WFFPi {\n\t--font-size: 16px;\n\t--font-size-minus-1: 12px;\n\t--line-height: 24px;\n\t--line-height-minus-1: 16px;\n\t--cell-size: 40px;\n\t--cell-padding: 4px;\n\n\tmin-width: -webkit-min-content;\n\n\tmin-width: min-content;\n\tpadding: 16px;\n\tfont-size: var(--font-size);\n\tfont-family: inherit;\n\tline-height: var(--line-height);\n\tbackground-color: var(--maker-color-background, #ffffff);\n\tborder-radius: var(--maker-shape-default-border-radius, 4px);\n}\n.CalendarHeader_h9qtz {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-bottom: 8px;\n}\n.CalendarHeaderTitle__d7cZ {\n\tcolor: var(--maker-color-heading, #000000);\n\tfont-weight: var(--maker-font-label-font-weight, 500);\n\tfont-family: var(--maker-font-label-font-family, inherit);\n}\n.CalendarTable_HHp6C {\n\twidth: 100%;\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n}\n.DateHeaderCell_SFAYv {\n\twidth: var(--cell-size);\n\theight: var(--cell-size);\n\tpadding: var(--cell-padding);\n\tfont-size: var(--font-size-minus-1);\n\tline-height: var(--line-height-minus-1);\n\ttext-transform: uppercase;\n\tcursor: initial;\n}\n.DateCell_M9QOe {\n\tpadding: var(--cell-padding);\n\toverflow: hidden;\n\ttext-align: center;\n}\n.DateCellButton_lX828 {\n\twidth: var(--cell-size);\n\theight: var(--cell-size);\n\tpadding: 0;\n\tcolor: inherit;\n\tfont-weight: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tbackground-color: inherit;\n\tborder: none;\n\tborder-radius: var(--maker-shape-button-border-radius, 4px);\n\toutline: none;\n\tcursor: pointer;\n\ttransition: background-color 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation\n}\n.DateCellButton_lX828.selected_bP8I7 {\n\t\tcolor: var(--maker-color-background, #ffffff);\n\t\tbackground-color: var(--maker-color-body, #000000);\n}\n.DateCellButton_lX828.today_dOo3x {\n\t\tborder: 1px solid currentColor;\n}\n.DateCellButton_lX828.disabled_nUcF8 {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n}\n.DateCell_M9QOe:hover .DateCellButton_lX828:not(.selected_bP8I7):not(.disabled_nUcF8) {\n\tbackground-color: var(--maker-color-neutral-10, #f1f1f1);\n}\n",""]),a.locals={Calendar:"Calendar_WFFPi",CalendarHeader:"CalendarHeader_h9qtz",CalendarHeaderTitle:"CalendarHeaderTitle__d7cZ",CalendarTable:"CalendarTable_HHp6C",DateHeaderCell:"DateHeaderCell_SFAYv",DateCell:"DateCell_M9QOe",DateCellButton:"DateCellButton_lX828",selected:"selected_bP8I7",today:"today_dOo3x",disabled:"disabled_nUcF8"},n.exports=a},85745:(n,t,d)=>{var a=d(77705)((function(n){return n[1]}));a.push([n.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tfill: currentColor;\n}\n",""]),a.locals={Icon:"Icon_vCfSe"},n.exports=a},48431:(n,t,d)=>{var a=d(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-dcd0985c] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-dcd0985c] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-dcd0985c]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-dcd0985c],\n.markdown-body h2 .octicon-link[data-v-dcd0985c],\n.markdown-body h3 .octicon-link[data-v-dcd0985c],\n.markdown-body h4 .octicon-link[data-v-dcd0985c],\n.markdown-body h5 .octicon-link[data-v-dcd0985c],\n.markdown-body h6 .octicon-link[data-v-dcd0985c] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-dcd0985c],\n.markdown-body h2:hover .anchor[data-v-dcd0985c],\n.markdown-body h3:hover .anchor[data-v-dcd0985c],\n.markdown-body h4:hover .anchor[data-v-dcd0985c],\n.markdown-body h5:hover .anchor[data-v-dcd0985c],\n.markdown-body h6:hover .anchor[data-v-dcd0985c] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-dcd0985c],\n.markdown-body h2:hover .anchor .octicon-link[data-v-dcd0985c],\n.markdown-body h3:hover .anchor .octicon-link[data-v-dcd0985c],\n.markdown-body h4:hover .anchor .octicon-link[data-v-dcd0985c],\n.markdown-body h5:hover .anchor .octicon-link[data-v-dcd0985c],\n.markdown-body h6:hover .anchor .octicon-link[data-v-dcd0985c] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-dcd0985c]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-dcd0985c]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-dcd0985c]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-dcd0985c]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-dcd0985c]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-dcd0985c]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-dcd0985c] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-dcd0985c] {\n  display: block;\n}\n.markdown-body summary[data-v-dcd0985c] {\n  display: list-item;\n}\n.markdown-body a[data-v-dcd0985c] {\n  background-color: initial;\n}\n.markdown-body a[data-v-dcd0985c]:active,\n.markdown-body a[data-v-dcd0985c]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-dcd0985c] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-dcd0985c] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-dcd0985c] {\n  border-style: none;\n}\n.markdown-body code[data-v-dcd0985c],\n.markdown-body kbd[data-v-dcd0985c],\n.markdown-body pre[data-v-dcd0985c] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-dcd0985c] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-dcd0985c] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-dcd0985c] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-dcd0985c] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-dcd0985c] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-dcd0985c] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-dcd0985c] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-dcd0985c]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-dcd0985c] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-dcd0985c] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-dcd0985c]:after,\n.markdown-body hr[data-v-dcd0985c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-dcd0985c]:after {\n  clear: both;\n}\n.markdown-body table[data-v-dcd0985c] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-dcd0985c],\n.markdown-body th[data-v-dcd0985c] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-dcd0985c] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-dcd0985c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-dcd0985c],\n.markdown-body h2[data-v-dcd0985c],\n.markdown-body h3[data-v-dcd0985c],\n.markdown-body h4[data-v-dcd0985c],\n.markdown-body h5[data-v-dcd0985c],\n.markdown-body h6[data-v-dcd0985c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-dcd0985c] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-dcd0985c],\n.markdown-body h2[data-v-dcd0985c] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-dcd0985c] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-dcd0985c] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-dcd0985c],\n.markdown-body h4[data-v-dcd0985c] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-dcd0985c] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-dcd0985c] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-dcd0985c],\n.markdown-body h6[data-v-dcd0985c] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-dcd0985c] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-dcd0985c] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-dcd0985c] {\n  margin: 0;\n}\n.markdown-body ol[data-v-dcd0985c],\n.markdown-body ul[data-v-dcd0985c] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-dcd0985c],\n.markdown-body ul ol[data-v-dcd0985c] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-dcd0985c],\n.markdown-body ol ul ol[data-v-dcd0985c],\n.markdown-body ul ol ol[data-v-dcd0985c],\n.markdown-body ul ul ol[data-v-dcd0985c] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-dcd0985c] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-dcd0985c],\n.markdown-body pre[data-v-dcd0985c] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-dcd0985c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-dcd0985c]::-webkit-inner-spin-button,\n.markdown-body input[data-v-dcd0985c]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-dcd0985c] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-dcd0985c] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-dcd0985c] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-dcd0985c] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-dcd0985c] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-dcd0985c] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-dcd0985c] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-dcd0985c] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-dcd0985c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-dcd0985c] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-dcd0985c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-dcd0985c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-dcd0985c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-dcd0985c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-dcd0985c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-dcd0985c],\n.markdown-body .px-3[data-v-dcd0985c] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-dcd0985c] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-dcd0985c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-dcd0985c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-dcd0985c] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-dcd0985c] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-dcd0985c] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-dcd0985c] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-dcd0985c] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-dcd0985c],\n.markdown-body .pl-s .pl-v[data-v-dcd0985c] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-dcd0985c],\n.markdown-body .pl-en[data-v-dcd0985c] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-dcd0985c],\n.markdown-body .pl-smi[data-v-dcd0985c] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-dcd0985c] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-dcd0985c] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-dcd0985c],\n.markdown-body .pl-s[data-v-dcd0985c],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-dcd0985c],\n.markdown-body .pl-sr[data-v-dcd0985c],\n.markdown-body .pl-sr .pl-cce[data-v-dcd0985c],\n.markdown-body .pl-sr .pl-sra[data-v-dcd0985c],\n.markdown-body .pl-sr .pl-sre[data-v-dcd0985c] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-dcd0985c],\n.markdown-body .pl-v[data-v-dcd0985c] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-dcd0985c] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-dcd0985c] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-dcd0985c] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-dcd0985c]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-dcd0985c] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-dcd0985c] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-dcd0985c],\n.markdown-body .pl-mh .pl-en[data-v-dcd0985c],\n.markdown-body .pl-ms[data-v-dcd0985c] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-dcd0985c] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-dcd0985c] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-dcd0985c] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-dcd0985c] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-dcd0985c] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-dcd0985c] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-dcd0985c] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-dcd0985c] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-dcd0985c] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-dcd0985c] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-dcd0985c] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-dcd0985c] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-dcd0985c] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-dcd0985c] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-dcd0985c] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-dcd0985c] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-dcd0985c] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-dcd0985c] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-dcd0985c] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-dcd0985c] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-dcd0985c] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-dcd0985c] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-dcd0985c] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-dcd0985c] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-dcd0985c] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-dcd0985c] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-dcd0985c] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-dcd0985c] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-dcd0985c] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-dcd0985c] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-dcd0985c]:after,\n.markdown-body[data-v-dcd0985c]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-dcd0985c]:after {\n  clear: both;\n}\n.markdown-body[data-v-dcd0985c]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-dcd0985c]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-dcd0985c]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-dcd0985c],\n.markdown-body details[data-v-dcd0985c],\n.markdown-body dl[data-v-dcd0985c],\n.markdown-body ol[data-v-dcd0985c],\n.markdown-body p[data-v-dcd0985c],\n.markdown-body pre[data-v-dcd0985c],\n.markdown-body table[data-v-dcd0985c],\n.markdown-body ul[data-v-dcd0985c] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-dcd0985c] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-dcd0985c] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-dcd0985c]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-dcd0985c]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-dcd0985c],\n.markdown-body h2[data-v-dcd0985c],\n.markdown-body h3[data-v-dcd0985c],\n.markdown-body h4[data-v-dcd0985c],\n.markdown-body h5[data-v-dcd0985c],\n.markdown-body h6[data-v-dcd0985c] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-dcd0985c] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-dcd0985c],\n.markdown-body h2[data-v-dcd0985c] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-dcd0985c] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-dcd0985c] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-dcd0985c] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-dcd0985c] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-dcd0985c] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-dcd0985c],\n.markdown-body ul[data-v-dcd0985c] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-dcd0985c],\n.markdown-body ol ul[data-v-dcd0985c],\n.markdown-body ul ol[data-v-dcd0985c],\n.markdown-body ul ul[data-v-dcd0985c] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-dcd0985c] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-dcd0985c] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-dcd0985c] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-dcd0985c] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-dcd0985c] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-dcd0985c] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-dcd0985c] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-dcd0985c] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-dcd0985c],\n.markdown-body table th[data-v-dcd0985c] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-dcd0985c] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-dcd0985c]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-dcd0985c] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-dcd0985c] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-dcd0985c] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-dcd0985c] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-dcd0985c] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-dcd0985c] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-dcd0985c] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-dcd0985c] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-dcd0985c],\n.markdown-body pre[data-v-dcd0985c] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-dcd0985c] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-dcd0985c] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-dcd0985c]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-dcd0985c] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-dcd0985c] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-dcd0985c] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-dcd0985c]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-dcd0985c]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-dcd0985c] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-dcd0985c] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-dcd0985c],\n.markdown-body .pl-token[data-v-dcd0985c]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-dcd0985c] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-dcd0985c] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-dcd0985c] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-dcd0985c] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-dcd0985c] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-dcd0985c] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-dcd0985c] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-dcd0985c] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-dcd0985c] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-dcd0985c] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-dcd0985c] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-dcd0985c] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-dcd0985c] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-dcd0985c] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-dcd0985c] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},77526:(n,t,d)=>{"use strict";d.r(t),d.d(t,{default:()=>j});var a=d(98283),o=d.n(a),e=d(58279),r=d.n(e),c=d(94456),i=d.n(c),l=d(20772),m=d.n(l),s=d(7340),b=d.n(s),v=d(92426),p=d.n(v),h=d(27385),y=d.n(h),k=d(35280),w=d.n(k),f=d(14651),g=d(90970),u=d(2606);const x=n=>o()(n,{representation:"date"}),_=n=>!n||/^\d{4}-\d{2}-\d{2}$/.test(n),D={components:{MButton:f.G,MIcon:g.O},inject:{theme:{default:(0,u.uH)(),from:u.YH}},inheritAttrs:!1,model:{prop:"selectedDate",event:"calendar:update"},props:{selectedDate:{type:String,default:void 0,validator:_},minDate:{type:String,default:void 0,validator:_},maxDate:{type:String,default:void 0,validator:_},disabledDates:{type:Array,default:()=>[],validator:n=>n.every((n=>_(n)))},locale:{type:String,default:void 0}},data:()=>({showingMonth:new Date}),computed:{monthName(){return this.showingMonth.toLocaleString(this.locale,{month:"long",year:"numeric"})},weekdays(){const n=w()(new Date);return Array.from({length:7},((t,d)=>b()(n,d))).map((n=>n.toLocaleDateString(this.locale,{weekday:"short"})))},weeks(){const n=this.showingMonth.getMonth(),t=y()(this.showingMonth),d=[];let a=[];for(;t.getMonth()===n;){const n=t.getDay();a[n]=new Date(t);n===6&&(d.push(a),a=[]);const o=1;t.setDate(t.getDate()+o)}return d.push(a),d},selectedDateObject(){return this.selectedDate&&r()(this.selectedDate)},maxDateObject(){return this.maxDate&&r()(this.maxDate)},minDateObject(){return this.minDate&&r()(this.minDate)},calendarNavButtons(){return{color:this.theme.colors["neutral-10"]||"#f2f2f2",textColor:this.theme.colors["neutral-90"]||"#f2f2f2"}}},watch:{selectedDate(){const n=this.selectedDateObject;n&&(this.showingMonth=n)}},mounted(){this.selectedDateObject&&(this.showingMonth=this.selectedDateObject)},methods:{isCalendarNavDisabled(n){const t=i()(this.showingMonth,n);return-1===n&&this.minDateObject?y()(this.minDateObject)>y()(t):!(1!==n||!this.maxDateObject)&&p()(this.maxDateObject)<p()(t)},incrementMonth(n){this.showingMonth=i()(this.showingMonth,n)},isDateSelected(n){return this.selectedDate===x(n)},isDateDisabled(n){return!!(this.minDateObject&&this.minDateObject>n)||(!!(this.maxDateObject&&this.maxDateObject<n)||this.disabledDates.includes(x(n)))},isToday:m(),emitDate(n){this.isDateDisabled(n)||this.$emit("calendar:update",x(n))}}};var z=d(85938),C=d.n(z),M=d(51900);const S={components:{MCalendar:(0,M.Z)(D,(function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("div",n._g(n._b({class:n.$s.Calendar},"div",n.$attrs,!1),n.$listeners),[d("div",{class:n.$s.CalendarHeader},[d("m-button",n._b({attrs:{disabled:n.isCalendarNavDisabled(-1),size:"medium",variant:"fill"},on:{click:function(t){return n.incrementMonth(-1)}}},"m-button",n.calendarNavButtons,!1),[d("m-icon",{attrs:{name:"chevronLeft",size:"large"}})],1),n._v(" "),d("span",{class:n.$s.CalendarHeaderTitle},[n._v("\n\t\t\t"+n._s(n.monthName)+"\n\t\t")]),n._v(" "),d("m-button",n._b({attrs:{disabled:n.isCalendarNavDisabled(1),size:"medium",variant:"fill"},on:{click:function(t){return n.incrementMonth(1)}}},"m-button",n.calendarNavButtons,!1),[d("m-icon",{attrs:{name:"chevronRight",size:"large"}})],1)],1),n._v(" "),d("table",{class:n.$s.CalendarTable},[d("thead",[d("tr",n._l(n.weekdays,(function(t){return d("th",{key:"day-"+t,class:n.$s.DateHeaderCell},[n._v("\n\t\t\t\t\t"+n._s(t)+"\n\t\t\t\t")])})),0)]),n._v(" "),d("tbody",n._l(n.weeks,(function(t,a){return d("tr",{key:"week-"+a},n._l(t,(function(t,o){var e;return d("td",{key:"date-"+(a-o),class:n.$s.DateCell},[t?d("button",{class:[n.$s.DateCellButton,(e={},e[n.$s.selected]=n.isDateSelected(t),e[n.$s.disabled]=n.isDateDisabled(t),e[n.$s.today]=n.isToday(t),e)],attrs:{type:"button",tabindex:"-1"},on:{click:function(d){return d.preventDefault(),n.emitDate(t)}}},[n._v("\n\t\t\t\t\t\t"+n._s(t.getDate())+"\n\t\t\t\t\t")]):n._e()])})),0)})),0)])])}),[],!1,(function(n){this.$s=C().locals||C()}),null,null).exports},data:()=>({selectedDate:"",minDate:"",maxDate:"",disabledDates:[],locale:void 0,localeSelection:["en-US","da","de","es","fr","it","ja","nl","nb","pl","pt","ru","sv","tr","zh-CN","zh-TW","ko"]}),mounted(){const n=new Date,t=o()(i()(n,4),{representation:"date"}),d=o()(b()(n,-1),{representation:"date"}),a=o()(b()(n,5),{representation:"date"});this.minDate=d,this.maxDate=t,this.disabledDates.push(a)}};const O=(0,M.Z)(S,(function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("div",[d("div",{staticStyle:{"max-width":"600px","margin-bottom":"16px"}},[d("m-calendar",{attrs:{locale:n.locale,"min-date":n.minDate,"max-date":n.maxDate,"disabled-dates":n.disabledDates},model:{value:n.selectedDate,callback:function(t){n.selectedDate=t},expression:"selectedDate"}})],1),n._v(" "),d("label",[n._v("\n\t\tSelected date:\n\t\t"),d("input",{directives:[{name:"model",rawName:"v-model",value:n.selectedDate,expression:"selectedDate"}],attrs:{type:"date"},domProps:{value:n.selectedDate},on:{input:function(t){t.target.composing||(n.selectedDate=t.target.value)}}})]),d("br"),d("br"),n._v(" "),d("label",[n._v("\n\t\tMin date:\n\t\t"),d("input",{directives:[{name:"model",rawName:"v-model",value:n.minDate,expression:"minDate"}],attrs:{type:"date"},domProps:{value:n.minDate},on:{input:function(t){t.target.composing||(n.minDate=t.target.value)}}})]),d("br"),d("br"),n._v(" "),d("label",[n._v("\n\t\tMax date:\n\t\t"),d("input",{directives:[{name:"model",rawName:"v-model",value:n.maxDate,expression:"maxDate"}],attrs:{type:"date"},domProps:{value:n.maxDate},on:{input:function(t){t.target.composing||(n.maxDate=t.target.value)}}})]),d("br"),d("br"),n._v(" "),d("label",[n._v("\n\t\tLocale:\n\t\t"),d("select",{directives:[{name:"model",rawName:"v-model",value:n.locale,expression:"locale"}],on:{change:function(t){var d=Array.prototype.filter.call(t.target.options,(function(n){return n.selected})).map((function(n){return"_value"in n?n._value:n.value}));n.locale=t.target.multiple?d:d[0]}}},n._l(n.localeSelection,(function(t,a){return d("option",{key:a,domProps:{value:t}},[n._v("\n\t\t\t\t"+n._s(t)+"\n\t\t\t")])})),0)])])}),[],!1,null,null,null).exports;var $=d(415);const H={components:{Demo0:O,DemoCollapse:$.DemoCollapse,SrcFile:$.SrcFile}};d(87460);const j=(0,M.Z)(H,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(2)}),[function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("table",[d("thead",[d("tr",[d("th",[n._v("Prop")]),n._v(" "),d("th",[n._v("Type")]),n._v(" "),d("th",[n._v("Default")]),n._v(" "),d("th",[n._v("Possible values")]),n._v(" "),d("th",[n._v("Description")])])]),n._v(" "),d("tbody",[d("tr",[d("td",[n._v("v-model")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("-")]),n._v(" "),d("td",[n._v("Selected date value in ISO format.")])]),n._v(" "),d("tr",[d("td",[n._v("min-date")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("-")]),n._v(" "),d("td",[n._v("Disable the dates before the min-date in ISO format.")])]),n._v(" "),d("tr",[d("td",[n._v("max-date")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("-")]),n._v(" "),d("td",[n._v("Disable the dates after the max-date in ISO format.")])]),n._v(" "),d("tr",[d("td",[n._v("disabled-dates")]),n._v(" "),d("td",[d("code",[n._v("array")])]),n._v(" "),d("td",[d("code",[n._v("[]")])]),n._v(" "),d("td",[n._v("-")]),n._v(" "),d("td",[n._v("List of disabled dates in ISO format.")])]),n._v(" "),d("tr",[d("td",[n._v("locale")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("—")]),n._v(" "),d("td",[n._v("-")]),n._v(" "),d("td",[n._v("Calendar locale. Defaults to browser locale.")])])])])},function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("table",[d("thead",[d("tr",[d("th",[n._v("Event")]),n._v(" "),d("th",[n._v("Type")]),n._v(" "),d("th",[n._v("Description")])])]),n._v(" "),d("tbody",[d("tr",[d("td",[n._v("calendar:update")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[n._v("New ISO date")])])])])},function(){var n=this,t=n.$createElement,d=n._self._c||t;return d("div",{staticClass:"markdown-body"},[d("h1",[n._v("Calendar")]),n._v(" "),d("demo-collapse",[d("Demo0"),n._v(" "),d("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<div\n\t\t\tstyle=\"max-width: 600px; margin-bottom: 16px;\"\n\t\t>\n\t\t\t<m-calendar\n\t\t\t\tv-model=\"selectedDate\"\n\t\t\t\t:locale=\"locale\"\n\t\t\t\t:min-date=\"minDate\"\n\t\t\t\t:max-date=\"maxDate\"\n\t\t\t\t:disabled-dates=\"disabledDates\"\n\t\t\t/>\n\t\t</div>\n\t\t<label>\n\t\t\tSelected date:\n\t\t\t<input\n\t\t\t\tv-model=\"selectedDate\"\n\t\t\t\ttype=\"date\"\n\t\t\t>\n\t\t</label><br><br>\n\t\t<label>\n\t\t\tMin date:\n\t\t\t<input\n\t\t\t\tv-model=\"minDate\"\n\t\t\t\ttype=\"date\"\n\t\t\t>\n\t\t</label><br><br>\n\t\t<label>\n\t\t\tMax date:\n\t\t\t<input\n\t\t\t\tv-model=\"maxDate\"\n\t\t\t\ttype=\"date\"\n\t\t\t>\n\t\t</label><br><br>\n\t\t<label>\n\t\t\tLocale:\n\t\t\t<select\n\t\t\t\tv-model=\"locale\"\n\t\t\t>\n\t\t\t\t<option\n\t\t\t\t\tv-for=\"(option, index) in localeSelection\"\n\t\t\t\t\t:key=\"index\"\n\t\t\t\t\t:value=\"option\"\n\t\t\t\t>\n\t\t\t\t\t{{ option }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</label>\n\t</div>\n</template>\n\n<script>\nimport { MCalendar } from '@square/maker/components/Calendar';\nimport {\n\taddDays,\n\taddMonths,\n\tformatISO,\n} from 'date-fns';\n\nexport default {\n\tcomponents: {\n\t\tMCalendar,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tselectedDate: '',\n\t\t\tminDate: '',\n\t\t\tmaxDate: '',\n\t\t\tdisabledDates: [],\n\t\t\tlocale: undefined,\n\t\t\tlocaleSelection: [\n\t\t\t\t'en-US',\n\t\t\t\t'da',\n\t\t\t\t'de',\n\t\t\t\t'es',\n\t\t\t\t'fr',\n\t\t\t\t'it',\n\t\t\t\t'ja',\n\t\t\t\t'nl',\n\t\t\t\t'nb',\n\t\t\t\t'pl',\n\t\t\t\t'pt',\n\t\t\t\t'ru',\n\t\t\t\t'sv',\n\t\t\t\t'tr',\n\t\t\t\t'zh-CN',\n\t\t\t\t'zh-TW',\n\t\t\t\t'ko',\n\t\t\t],\n\t\t};\n\t},\n\n\tmounted() {\n\t\tconst today = new Date();\n\t\tconst arbitraryAddMonths = 4;\n\t\tconst maxDate = formatISO(addMonths(today, arbitraryAddMonths), {\n\t\t\trepresentation: 'date',\n\t\t});\n\t\tconst arbitraryAddDays = -1;\n\t\tconst minDate = formatISO(addDays(today, arbitraryAddDays), {\n\t\t\trepresentation: 'date',\n\t\t});\n\t\tconst arbitraryRelativeDisabledDate = 5;\n\t\tconst disabledDate = formatISO(addDays(today, arbitraryRelativeDisabledDate), {\n\t\t\trepresentation: 'date',\n\t\t});\n\n\t\tthis.minDate = minDate;\n\t\tthis.maxDate = maxDate;\n\t\tthis.disabledDates.push(disabledDate);\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),d("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),d("h2",[n._v("Events")]),n._v(" "),n._m(1)],1)}],!1,null,"dcd0985c",null).exports},85938:(n,t,d)=>{var a=d(66767);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,d(54023).Z)("745eff9a",a,!0,{})},33468:(n,t,d)=>{var a=d(85745);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,d(54023).Z)("2a811eb5",a,!0,{})},87460:(n,t,d)=>{var a=d(48431);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,d(54023).Z)("5f0421e0",a,!0,{})}}]);