(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[531],{69901:function(n,t,o){"use strict";o.d(t,{g:function(){return e}});var a={props:{size:{type:String,default:"normal",validator:n=>["normal","large"].includes(n)}}},d=o(17531),r=o.n(d);var e=(0,o(51900).Z)(a,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{class:n.$s.Loading},[o("svg",{class:[n.$s.Spinner,n.$s["size_"+n.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{class:[n.$s.Circle,n.$s["size_"+n.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(n){this.$s=r().locals||r()}),null,null).exports},32416:function(n,t,o){"use strict";var a=o(14219);const d={warn(n,t,o){n||(0,a.K)(t,o)},error(n,t,o){n||(0,a._)(t,o)}};t.Z=d},14219:function(n,t,o){"use strict";o.d(t,{_:function(){return r},K:function(){return e}});const a="object"==typeof process&&"object"==typeof process.env&&!0,d=n=>[`%c @square/maker${n}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(n,t)=>{throw console.error(...d(t),n),new Error(`${(n=>`[@square/maker]${n}`)(t)} ${n}`)},e=(n,t)=>{a&&console.warn(...d(t),n)}},39832:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_normal_CMqqP {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_normal_CMqqP {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),a.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_normal:"size_normal_CMqqP",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},n.exports=a},24298:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.Button_aI_Cx {\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tmin-width: 0;\n\tcolor: var(--color-contrast, inherit);\n\tfont-weight: 500;\n\tfont-family: inherit;\n\tvertical-align: middle;\n\tbackground-color: var(--color-main);\n\tborder: none;\n\tborder-radius: 8px;\n\toutline: none;\n\tbox-shadow:\n\t\tvar(--outline-border, 0 0),\n\t\tvar(--focus-border, 0 0);\n\tcursor: pointer;\n\ttransition:\n\t\tcolor 0.2s ease-in,\n\t\tbackground-color 0.2s ease-in,\n\t\tbox-shadow 0.2s ease-in;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\ttouch-action: manipulation;\n\tfill: currentColor\n}\n.Button_aI_Cx.iconButton__1Khv {\n\t\tmin-width: -webkit-max-content;\n\t\tmin-width: max-content;\n}\n.Button_aI_Cx.size_medium_t5BZq {\n\t\tfont-size: 14px;\n}\n.Button_aI_Cx.size_large_gBBmA {\n\t\tfont-size: 16px;\n}\n.Button_aI_Cx:disabled {\n\t\tcursor: auto;\n\t\tcursor: initial\n}\n.Button_aI_Cx:disabled > * {\n\t\t\topacity: 0.4;\n}\n.Button_aI_Cx.loading_bNQgE {\n\t\t/* don't inherit color in loading state on hover/active */\n\t\tcolor: transparent !important;\n}\n.Loading_pd2rj {\n\tposition: absolute;\n\ttop: 4px;\n\tright: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: var(--color-contrast);\n\tbackground-color: transparent;\n}\n.MainText_qfj5z {\n\tdisplay: flex;\n\tgrid-gap: 8px;\n\talign-items: center;\n\twidth: -webkit-max-content;\n\twidth: max-content;\n\tmax-width: 100%;\n\toverflow: hidden;\n\tline-height: 1;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n",""]),a.locals={Button:"Button_aI_Cx",iconButton:"iconButton__1Khv",size_medium:"size_medium_t5BZq",size_large:"size_large_gBBmA",loading:"loading_bNQgE",Loading:"Loading_pd2rj",MainText:"MainText_qfj5z"},n.exports=a},69305:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-3d86401f] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-3d86401f] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-3d86401f]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-3d86401f],\n.markdown-body h2 .octicon-link[data-v-3d86401f],\n.markdown-body h3 .octicon-link[data-v-3d86401f],\n.markdown-body h4 .octicon-link[data-v-3d86401f],\n.markdown-body h5 .octicon-link[data-v-3d86401f],\n.markdown-body h6 .octicon-link[data-v-3d86401f] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-3d86401f],\n.markdown-body h2:hover .anchor[data-v-3d86401f],\n.markdown-body h3:hover .anchor[data-v-3d86401f],\n.markdown-body h4:hover .anchor[data-v-3d86401f],\n.markdown-body h5:hover .anchor[data-v-3d86401f],\n.markdown-body h6:hover .anchor[data-v-3d86401f] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-3d86401f],\n.markdown-body h2:hover .anchor .octicon-link[data-v-3d86401f],\n.markdown-body h3:hover .anchor .octicon-link[data-v-3d86401f],\n.markdown-body h4:hover .anchor .octicon-link[data-v-3d86401f],\n.markdown-body h5:hover .anchor .octicon-link[data-v-3d86401f],\n.markdown-body h6:hover .anchor .octicon-link[data-v-3d86401f] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-3d86401f]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-3d86401f]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-3d86401f]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-3d86401f]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-3d86401f]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-3d86401f]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-3d86401f] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-3d86401f] {\n  display: block;\n}\n.markdown-body summary[data-v-3d86401f] {\n  display: list-item;\n}\n.markdown-body a[data-v-3d86401f] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-3d86401f]:active,\n.markdown-body a[data-v-3d86401f]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-3d86401f] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-3d86401f] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-3d86401f] {\n  border-style: none;\n}\n.markdown-body code[data-v-3d86401f],\n.markdown-body kbd[data-v-3d86401f],\n.markdown-body pre[data-v-3d86401f] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-3d86401f] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-3d86401f] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-3d86401f] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-3d86401f] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-3d86401f] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-3d86401f] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-3d86401f] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-3d86401f]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-3d86401f] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-3d86401f] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-3d86401f]:after,\n.markdown-body hr[data-v-3d86401f]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-3d86401f]:after {\n  clear: both;\n}\n.markdown-body table[data-v-3d86401f] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-3d86401f],\n.markdown-body th[data-v-3d86401f] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-3d86401f] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-3d86401f] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-3d86401f],\n.markdown-body h2[data-v-3d86401f],\n.markdown-body h3[data-v-3d86401f],\n.markdown-body h4[data-v-3d86401f],\n.markdown-body h5[data-v-3d86401f],\n.markdown-body h6[data-v-3d86401f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-3d86401f] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-3d86401f],\n.markdown-body h2[data-v-3d86401f] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-3d86401f] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-3d86401f] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-3d86401f],\n.markdown-body h4[data-v-3d86401f] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-3d86401f] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-3d86401f] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-3d86401f],\n.markdown-body h6[data-v-3d86401f] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-3d86401f] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-3d86401f] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-3d86401f] {\n  margin: 0;\n}\n.markdown-body ol[data-v-3d86401f],\n.markdown-body ul[data-v-3d86401f] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-3d86401f],\n.markdown-body ul ol[data-v-3d86401f] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-3d86401f],\n.markdown-body ol ul ol[data-v-3d86401f],\n.markdown-body ul ol ol[data-v-3d86401f],\n.markdown-body ul ul ol[data-v-3d86401f] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-3d86401f] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-3d86401f],\n.markdown-body pre[data-v-3d86401f] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-3d86401f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-3d86401f]::-webkit-inner-spin-button,\n.markdown-body input[data-v-3d86401f]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-3d86401f] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-3d86401f] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-3d86401f] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-3d86401f] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-3d86401f] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-3d86401f] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-3d86401f] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-3d86401f] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-3d86401f] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-3d86401f] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-3d86401f] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-3d86401f] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-3d86401f] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-3d86401f] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-3d86401f] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-3d86401f],\n.markdown-body .px-3[data-v-3d86401f] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-3d86401f] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-3d86401f] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-3d86401f] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-3d86401f] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-3d86401f] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-3d86401f] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-3d86401f] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-3d86401f] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-3d86401f],\n.markdown-body .pl-s .pl-v[data-v-3d86401f] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-3d86401f],\n.markdown-body .pl-en[data-v-3d86401f] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-3d86401f],\n.markdown-body .pl-smi[data-v-3d86401f] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-3d86401f] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-3d86401f] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-3d86401f],\n.markdown-body .pl-s[data-v-3d86401f],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-3d86401f],\n.markdown-body .pl-sr[data-v-3d86401f],\n.markdown-body .pl-sr .pl-cce[data-v-3d86401f],\n.markdown-body .pl-sr .pl-sra[data-v-3d86401f],\n.markdown-body .pl-sr .pl-sre[data-v-3d86401f] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-3d86401f],\n.markdown-body .pl-v[data-v-3d86401f] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-3d86401f] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-3d86401f] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-3d86401f] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-3d86401f]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-3d86401f] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-3d86401f] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-3d86401f],\n.markdown-body .pl-mh .pl-en[data-v-3d86401f],\n.markdown-body .pl-ms[data-v-3d86401f] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-3d86401f] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-3d86401f] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-3d86401f] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-3d86401f] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-3d86401f] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-3d86401f] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-3d86401f] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-3d86401f] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-3d86401f] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-3d86401f] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-3d86401f] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-3d86401f] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-3d86401f] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-3d86401f] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-3d86401f] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-3d86401f] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-3d86401f] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-3d86401f] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-3d86401f] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-3d86401f] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-3d86401f] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-3d86401f] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-3d86401f] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-3d86401f] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-3d86401f] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-3d86401f] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-3d86401f] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-3d86401f] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-3d86401f] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-3d86401f] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-3d86401f]:after,\n.markdown-body[data-v-3d86401f]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-3d86401f]:after {\n  clear: both;\n}\n.markdown-body[data-v-3d86401f]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-3d86401f]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-3d86401f]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-3d86401f],\n.markdown-body details[data-v-3d86401f],\n.markdown-body dl[data-v-3d86401f],\n.markdown-body ol[data-v-3d86401f],\n.markdown-body p[data-v-3d86401f],\n.markdown-body pre[data-v-3d86401f],\n.markdown-body table[data-v-3d86401f],\n.markdown-body ul[data-v-3d86401f] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-3d86401f] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-3d86401f] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-3d86401f]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-3d86401f]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-3d86401f],\n.markdown-body h2[data-v-3d86401f],\n.markdown-body h3[data-v-3d86401f],\n.markdown-body h4[data-v-3d86401f],\n.markdown-body h5[data-v-3d86401f],\n.markdown-body h6[data-v-3d86401f] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-3d86401f] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-3d86401f],\n.markdown-body h2[data-v-3d86401f] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-3d86401f] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-3d86401f] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-3d86401f] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-3d86401f] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-3d86401f] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-3d86401f],\n.markdown-body ul[data-v-3d86401f] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-3d86401f],\n.markdown-body ol ul[data-v-3d86401f],\n.markdown-body ul ol[data-v-3d86401f],\n.markdown-body ul ul[data-v-3d86401f] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-3d86401f] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-3d86401f] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-3d86401f] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-3d86401f] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-3d86401f] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-3d86401f] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-3d86401f] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-3d86401f] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-3d86401f],\n.markdown-body table th[data-v-3d86401f] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-3d86401f] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-3d86401f]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-3d86401f] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-3d86401f] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-3d86401f] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-3d86401f] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-3d86401f] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-3d86401f] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-3d86401f] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-3d86401f] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-3d86401f],\n.markdown-body pre[data-v-3d86401f] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-3d86401f] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-3d86401f] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-3d86401f]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-3d86401f] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-3d86401f] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-3d86401f] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-3d86401f]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-3d86401f]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-3d86401f] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-3d86401f] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-3d86401f],\n.markdown-body .pl-token[data-v-3d86401f]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-3d86401f] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-3d86401f] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-3d86401f] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-3d86401f] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-3d86401f] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-3d86401f] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-3d86401f] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-3d86401f] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-3d86401f] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-3d86401f] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-3d86401f] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-3d86401f] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-3d86401f] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-3d86401f] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-3d86401f] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},5361:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\nbody {\n\tbackground-color: #f9f9f9;\n}\nth {\n\tpadding-right: 32px;\n}\n",""]),n.exports=a},45531:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return p}});var a=o(60771),d=o.n(a),r=o(69901),e=o(32416);var i={components:{MLoading:r.g},inheritAttrs:!1,props:{type:{type:String,default:"button"},size:{type:String,default:"medium",validator:n=>["medium","large"].includes(n)},color:{type:String,default:void 0,validator:n=>d().valid(n)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{style(){return function(n){const t=n.color?d()(n.color):void 0;return{"--color-main":"color","--color-contrast":t?t.hex():void 0}}({color:this.color})}},created(){e.Z.warn(this.$slots.default,"TextButton should be used with a label")}},l=o(35713),b=o.n(l),m=o(51900);var s={components:{MTextButton:(0,m.Z)(i,(function(){var n,t=this,o=t.$createElement,a=t._self._c||o;return a("button",t._g(t._b({class:[t.$s.Button,t.$s["size_"+t.size],(n={},n[t.$s.loading]=t.loading,n)],style:t.style,attrs:{type:t.type,disabled:t.disabled}},"button",t.$attrs,!1),t.$listeners),[t.loading?a("m-loading",{class:t.$s.Loading}):t._e(),t._v(" "),a("span",{class:t.$s.MainText},[t._t("default")],2)],1)}),[],!1,(function(n){this.$s=b().locals||b()}),null,null).exports},data:()=>({color:"#000"})},f=(o(31984),(0,m.Z)(s,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("label",[n._v("\n\t\tColor picker\n\t\t"),o("input",{directives:[{name:"model",rawName:"v-model",value:n.color,expression:"color"}],attrs:{type:"color"},domProps:{value:n.color},on:{input:function(t){t.target.composing||(n.color=t.target.value)}}})]),o("br"),o("br"),n._v(" "),o("table",[o("tbody",[o("tr",[o("th",[n._v("\n\t\t\t\t\tLarge\n\t\t\t\t")]),n._v(" "),o("td",[o("m-text-button",{attrs:{size:"large",color:n.color}},[n._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")]),n._v(" "),o("m-text-button",{attrs:{size:"large",color:n.color,disabled:""}},[n._v("\n\t\t\t\t\t\tDisabled button\n\t\t\t\t\t")]),n._v(" "),o("m-text-button",{attrs:{size:"large",color:n.color,loading:""}},[n._v("\n\t\t\t\t\t\tLoading\n\t\t\t\t\t")])],1)]),n._v(" "),o("tr",[o("th",[n._v("\n\t\t\t\t\tMedium\n\t\t\t\t")]),n._v(" "),o("td",[o("m-text-button",{attrs:{size:"medium",color:n.color}},[n._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")]),n._v(" "),o("m-text-button",{attrs:{size:"medium",color:n.color,disabled:""}},[n._v("\n\t\t\t\t\t\tDisabled button\n\t\t\t\t\t")]),n._v(" "),o("m-text-button",{attrs:{size:"medium",color:n.color,loading:""}},[n._v("\n\t\t\t\t\t\tLoading\n\t\t\t\t\t")])],1)])])])])}),[],!1,null,null,null).exports),c=o(415),v={components:{Demo0:f,DemoCollapse:c.DemoCollapse,SrcFile:c.SrcFile}},p=(o(95502),(0,m.Z)(v,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("This button is just clickable text and was made to be used inside the "),o("code",[n._v("#actions")]),n._v(" slots of other components such as Notice or Card.\nThere are no focus, active, or hover states.")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"}},[o("code",[n._v("<button>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("type")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'button'")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Type of the button")])]),n._v(" "),o("tr",[o("td",[n._v("size")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'medium'")])]),n._v(" "),o("td",[o("code",[n._v("medium")]),n._v(", "),o("code",[n._v("large")])]),n._v(" "),o("td",[n._v("Size of the button label text")])]),n._v(" "),o("tr",[o("td",[n._v("color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Text color of button")])]),n._v(" "),o("tr",[o("td",[n._v("disabled")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles button disabled state")])]),n._v(" "),o("tr",[o("td",[n._v("loading")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles button loading state")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("Button label")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"}},[o("code",[n._v("<button>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("TextButton")]),n._v(" "),n._m(0),n._v(" "),o("h2",[n._v("Styles & Sizes")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<label>\n\t\t\tColor picker\n\t\t\t<input\n\t\t\t\tv-model="color"\n\t\t\t\ttype="color"\n\t\t\t>\n\t\t</label><br><br>\n\t\t<table>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tLarge\n\t\t\t\t\t</th>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="large"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tButton\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="large"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tDisabled button\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="large"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t\tloading\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tLoading\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tMedium\n\t\t\t\t\t</th>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="medium"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tButton\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="medium"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tDisabled button\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t\t<m-text-button\n\t\t\t\t\t\t\tsize="medium"\n\t\t\t\t\t\t\t:color="color"\n\t\t\t\t\t\t\tloading\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tLoading\n\t\t\t\t\t\t</m-text-button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</template>\n\n<script>\nimport { MTextButton } from \'@square/maker/components/TextButton\';\n\nexport default {\n\tcomponents: {\n\t\tMTextButton,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tcolor: \'#000\',\n\t\t};\n\t},\n};\n<\/script>\n\n<style>\nbody {\n\tbackground-color: #f9f9f9;\n}\n\nth {\n\tpadding-right: 32px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(3),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(4)],1)}],!1,null,"3d86401f",null).exports)},17531:function(n,t,o){var a=o(39832);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("7ac45ae2",a,!0,{})},35713:function(n,t,o){var a=o(24298);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("49bbe38a",a,!0,{})},95502:function(n,t,o){var a=o(69305);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("2a2010b9",a,!0,{})},31984:function(n,t,o){var a=o(5361);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("2833db48",a,!0,{})}}]);