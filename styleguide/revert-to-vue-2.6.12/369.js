(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[369],{9901:function(n,a,d){"use strict";d.d(a,{g:function(){return e}});var o={props:{size:{type:String,default:"normal",validator:n=>["normal","large"].includes(n)}}},t=d(7531),r=d.n(t);var e=(0,d(1900).Z)(o,(function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",{class:n.$s.Loading},[d("svg",{class:[n.$s.Spinner,n.$s["size_"+n.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[d("circle",{class:[n.$s.Circle,n.$s["size_"+n.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports},9832:function(n,a,d){var o=d(6738),t=d(7705)(o);t.push([n.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),t.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},n.exports=t},5389:function(n,a,d){var o=d(6738),t=d(7705)(o);t.push([n.id,'\n.markdown-body .octicon[data-v-77a5c4db] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-77a5c4db] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-77a5c4db]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-77a5c4db],\n.markdown-body h2 .octicon-link[data-v-77a5c4db],\n.markdown-body h3 .octicon-link[data-v-77a5c4db],\n.markdown-body h4 .octicon-link[data-v-77a5c4db],\n.markdown-body h5 .octicon-link[data-v-77a5c4db],\n.markdown-body h6 .octicon-link[data-v-77a5c4db] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-77a5c4db],\n.markdown-body h2:hover .anchor[data-v-77a5c4db],\n.markdown-body h3:hover .anchor[data-v-77a5c4db],\n.markdown-body h4:hover .anchor[data-v-77a5c4db],\n.markdown-body h5:hover .anchor[data-v-77a5c4db],\n.markdown-body h6:hover .anchor[data-v-77a5c4db] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-77a5c4db],\n.markdown-body h2:hover .anchor .octicon-link[data-v-77a5c4db],\n.markdown-body h3:hover .anchor .octicon-link[data-v-77a5c4db],\n.markdown-body h4:hover .anchor .octicon-link[data-v-77a5c4db],\n.markdown-body h5:hover .anchor .octicon-link[data-v-77a5c4db],\n.markdown-body h6:hover .anchor .octicon-link[data-v-77a5c4db] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-77a5c4db]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-77a5c4db]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-77a5c4db]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-77a5c4db]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-77a5c4db]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-77a5c4db]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-77a5c4db] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-77a5c4db] {\n  display: block;\n}\n.markdown-body summary[data-v-77a5c4db] {\n  display: list-item;\n}\n.markdown-body a[data-v-77a5c4db] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-77a5c4db]:active,\n.markdown-body a[data-v-77a5c4db]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-77a5c4db] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-77a5c4db] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-77a5c4db] {\n  border-style: none;\n}\n.markdown-body code[data-v-77a5c4db],\n.markdown-body kbd[data-v-77a5c4db],\n.markdown-body pre[data-v-77a5c4db] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-77a5c4db] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-77a5c4db] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-77a5c4db] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-77a5c4db] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-77a5c4db] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-77a5c4db] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-77a5c4db] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-77a5c4db]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-77a5c4db] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-77a5c4db] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-77a5c4db]:after,\n.markdown-body hr[data-v-77a5c4db]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-77a5c4db]:after {\n  clear: both;\n}\n.markdown-body table[data-v-77a5c4db] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-77a5c4db],\n.markdown-body th[data-v-77a5c4db] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-77a5c4db] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-77a5c4db] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-77a5c4db],\n.markdown-body h2[data-v-77a5c4db],\n.markdown-body h3[data-v-77a5c4db],\n.markdown-body h4[data-v-77a5c4db],\n.markdown-body h5[data-v-77a5c4db],\n.markdown-body h6[data-v-77a5c4db] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-77a5c4db] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-77a5c4db],\n.markdown-body h2[data-v-77a5c4db] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-77a5c4db] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-77a5c4db] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-77a5c4db],\n.markdown-body h4[data-v-77a5c4db] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-77a5c4db] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-77a5c4db] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-77a5c4db],\n.markdown-body h6[data-v-77a5c4db] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-77a5c4db] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-77a5c4db] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-77a5c4db] {\n  margin: 0;\n}\n.markdown-body ol[data-v-77a5c4db],\n.markdown-body ul[data-v-77a5c4db] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-77a5c4db],\n.markdown-body ul ol[data-v-77a5c4db] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-77a5c4db],\n.markdown-body ol ul ol[data-v-77a5c4db],\n.markdown-body ul ol ol[data-v-77a5c4db],\n.markdown-body ul ul ol[data-v-77a5c4db] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-77a5c4db] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-77a5c4db],\n.markdown-body pre[data-v-77a5c4db] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-77a5c4db] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-77a5c4db]::-webkit-inner-spin-button,\n.markdown-body input[data-v-77a5c4db]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-77a5c4db] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-77a5c4db] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-77a5c4db] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-77a5c4db] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-77a5c4db] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-77a5c4db] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-77a5c4db] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-77a5c4db] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-77a5c4db] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-77a5c4db] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-77a5c4db] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-77a5c4db] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-77a5c4db] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-77a5c4db] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-77a5c4db] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-77a5c4db],\n.markdown-body .px-3[data-v-77a5c4db] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-77a5c4db] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-77a5c4db] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-77a5c4db] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-77a5c4db] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-77a5c4db] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-77a5c4db] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-77a5c4db] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-77a5c4db] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-77a5c4db],\n.markdown-body .pl-s .pl-v[data-v-77a5c4db] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-77a5c4db],\n.markdown-body .pl-en[data-v-77a5c4db] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-77a5c4db],\n.markdown-body .pl-smi[data-v-77a5c4db] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-77a5c4db] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-77a5c4db] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-77a5c4db],\n.markdown-body .pl-s[data-v-77a5c4db],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-77a5c4db],\n.markdown-body .pl-sr[data-v-77a5c4db],\n.markdown-body .pl-sr .pl-cce[data-v-77a5c4db],\n.markdown-body .pl-sr .pl-sra[data-v-77a5c4db],\n.markdown-body .pl-sr .pl-sre[data-v-77a5c4db] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-77a5c4db],\n.markdown-body .pl-v[data-v-77a5c4db] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-77a5c4db] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-77a5c4db] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-77a5c4db] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-77a5c4db]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-77a5c4db] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-77a5c4db] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-77a5c4db],\n.markdown-body .pl-mh .pl-en[data-v-77a5c4db],\n.markdown-body .pl-ms[data-v-77a5c4db] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-77a5c4db] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-77a5c4db] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-77a5c4db] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-77a5c4db] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-77a5c4db] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-77a5c4db] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-77a5c4db] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-77a5c4db] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-77a5c4db] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-77a5c4db] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-77a5c4db] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-77a5c4db] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-77a5c4db] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-77a5c4db] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-77a5c4db] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-77a5c4db] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-77a5c4db] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-77a5c4db] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-77a5c4db] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-77a5c4db] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-77a5c4db] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-77a5c4db] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-77a5c4db] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-77a5c4db] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-77a5c4db] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-77a5c4db] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-77a5c4db] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-77a5c4db] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-77a5c4db] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-77a5c4db] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-77a5c4db]:after,\n.markdown-body[data-v-77a5c4db]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-77a5c4db]:after {\n  clear: both;\n}\n.markdown-body[data-v-77a5c4db]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-77a5c4db]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-77a5c4db]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-77a5c4db],\n.markdown-body details[data-v-77a5c4db],\n.markdown-body dl[data-v-77a5c4db],\n.markdown-body ol[data-v-77a5c4db],\n.markdown-body p[data-v-77a5c4db],\n.markdown-body pre[data-v-77a5c4db],\n.markdown-body table[data-v-77a5c4db],\n.markdown-body ul[data-v-77a5c4db] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-77a5c4db] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-77a5c4db] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-77a5c4db]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-77a5c4db]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-77a5c4db],\n.markdown-body h2[data-v-77a5c4db],\n.markdown-body h3[data-v-77a5c4db],\n.markdown-body h4[data-v-77a5c4db],\n.markdown-body h5[data-v-77a5c4db],\n.markdown-body h6[data-v-77a5c4db] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-77a5c4db] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-77a5c4db],\n.markdown-body h2[data-v-77a5c4db] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-77a5c4db] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-77a5c4db] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-77a5c4db] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-77a5c4db] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-77a5c4db] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-77a5c4db],\n.markdown-body ul[data-v-77a5c4db] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-77a5c4db],\n.markdown-body ol ul[data-v-77a5c4db],\n.markdown-body ul ol[data-v-77a5c4db],\n.markdown-body ul ul[data-v-77a5c4db] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-77a5c4db] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-77a5c4db] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-77a5c4db] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-77a5c4db] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-77a5c4db] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-77a5c4db] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-77a5c4db] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-77a5c4db] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-77a5c4db],\n.markdown-body table th[data-v-77a5c4db] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-77a5c4db] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-77a5c4db]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-77a5c4db] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-77a5c4db] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-77a5c4db] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-77a5c4db] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-77a5c4db] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-77a5c4db] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-77a5c4db] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-77a5c4db] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-77a5c4db],\n.markdown-body pre[data-v-77a5c4db] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-77a5c4db] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-77a5c4db] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-77a5c4db]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-77a5c4db] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-77a5c4db] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-77a5c4db] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-77a5c4db]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-77a5c4db]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-77a5c4db] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-77a5c4db] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-77a5c4db],\n.markdown-body .pl-token[data-v-77a5c4db]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-77a5c4db] {\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-77a5c4db] {\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-77a5c4db] {\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-77a5c4db] {\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-77a5c4db] {\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-77a5c4db] {\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-77a5c4db] {\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-77a5c4db] {\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-77a5c4db] {\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-77a5c4db] {\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-77a5c4db] {\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-77a5c4db] {\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-77a5c4db] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-77a5c4db] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-77a5c4db] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},2369:function(n,a,d){"use strict";d.r(a),d.d(a,{default:function(){return i}});var o={components:{MLoading:d(9901).g}},t=d(1900),r=(0,t.Z)(o,(function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",[d("h4",[n._v("normal size")]),n._v(" "),d("m-loading"),n._v(" "),d("h4",[n._v("large size")]),n._v(" "),d("m-loading",{attrs:{size:"large"}})],1)}),[],!1,null,null,null).exports,e=d(415),b={components:{Demo0:r,DemoCollapse:e.DemoCollapse,SrcFile:e.SrcFile}},i=(d(3129),(0,t.Z)(b,(function(){var n=this,a=n.$createElement;n._self._c;return n._m(3)}),[function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("p",[n._v("Supports attributes from "),d("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[d("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("table",[d("thead",[d("tr",[d("th",[n._v("Prop")]),n._v(" "),d("th",[n._v("Type")]),n._v(" "),d("th",[n._v("Default")]),n._v(" "),d("th",[n._v("Possible values")]),n._v(" "),d("th",[n._v("Description")])])]),n._v(" "),d("tbody",[d("tr",[d("td",[n._v("size")]),n._v(" "),d("td",[d("code",[n._v("string")])]),n._v(" "),d("td",[d("code",[n._v("'normal'")])]),n._v(" "),d("td",[d("code",[n._v("normal")]),n._v(", "),d("code",[n._v("large")])]),n._v(" "),d("td",[n._v("—")])])])])},function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("p",[n._v("Supports events from "),d("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[d("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,a=n.$createElement,d=n._self._c||a;return d("div",{staticClass:"markdown-body"},[d("h1",[n._v("Loading")]),n._v(" "),d("demo-collapse",[d("Demo0"),n._v(" "),d("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<h4>normal size</h4>\n\t\t<m-loading />\n\n\t\t<h4>large size</h4>\n\t\t<m-loading size=\"large\" />\n\t</div>\n</template>\n\n<script>\nimport { MLoading } from '@square/maker/components/Loading';\n\nexport default {\n\tcomponents: {\n\t\tMLoading,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),d("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),d("h2",[n._v("Events")]),n._v(" "),n._m(2)],1)}],!1,null,"77a5c4db",null).exports)},7531:function(n,a,d){var o=d(9832);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,d(4023).Z)("7ac45ae2",o,!0,{})},3129:function(n,a,d){var o=d(5389);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);(0,d(4023).Z)("490ef5e2",o,!0,{})}}]);