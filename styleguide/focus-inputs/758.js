(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[758],{45832:(n,o,a)=>{"use strict";a.d(o,{iu:()=>d,OE:()=>r,AT:()=>b,ST:()=>l,hJ:()=>s,Y7:()=>c,dx:()=>u,s4:()=>x,vq:()=>z,vn:()=>C,w0:()=>_,I0:()=>S,$y:()=>M,rG:()=>P,iM:()=>Z,tq:()=>j,cT:()=>E,uL:()=>H,C9:()=>T});var t=a(19546),e=a(47069);const d=0,r=840,i="spring",b=200,l={type:i,stiffness:600,damping:60,mass:1},m={type:i,stiffness:400,damping:40,mass:1},p={type:i,stiffness:400,damping:30,mass:1.5},s={from:0,to:100},v={from:100,to:0};function c(n,o,a,t){return e=>function(n,o,a,t,e){return{[t]:"".concat(n/100*(a-o)+o).concat(e)}}(e,n,o,a,t)}const w=c(0,100,"opacity","%"),k=c(0,100,"y","%"),y=c(0,100,"x","%"),h=c(40,0,"y","px"),g=n=>({...w(n),...h(n)}),f=(n,o)=>{const a=c(o,0,"y","px");return{...w(n),...a(n)}};function u({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=w,r=s;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function x({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=w,r=s;a.set(d(r.from)),a.render(),setTimeout((()=>{(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}),b)}function z({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=w,r=v;a.set(d(r.from)),a.render(),(0,e.j)({...v,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function C({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=k,r=v;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function _({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=k,r=s;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function S({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=y,r=v;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function M({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=y,r=s;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function P({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=g,r=s;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function Z({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=g,r=s;a.set(d(r.from)),a.render(),setTimeout((()=>{(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}),b)}function j({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=f,r=s,i=20+5*n.dataset.loadIndex;a.set(d(r.from)),a.render(),(0,e.j)({...r,...m,onUpdate(n){a.set(d(n,i))},onComplete:o})}function E({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=g,r=v;a.set(d(r.from)),a.render(),(0,e.j)({...r,...l,onUpdate(n){a.set(d(n))},onComplete:o})}function H({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=k,r=v;a.set(d(r.from)),a.render(),(0,e.j)({...r,...p,onUpdate(n){a.set(d(n))},onComplete:o})}function T({element:n,onComplete:o}){const a=(0,t.ZP)(n),d=k,r=s;a.set(d(r.from)),a.render(),(0,e.j)({...r,...p,onUpdate(n){a.set(d(n))},onComplete:o})}},32352:(n,o,a)=>{var t=a(77705)((function(n){return n[1]}));t.push([n.id,'\n.markdown-body .octicon[data-v-2553e0b3] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-2553e0b3] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-2553e0b3]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-2553e0b3],\n.markdown-body h2 .octicon-link[data-v-2553e0b3],\n.markdown-body h3 .octicon-link[data-v-2553e0b3],\n.markdown-body h4 .octicon-link[data-v-2553e0b3],\n.markdown-body h5 .octicon-link[data-v-2553e0b3],\n.markdown-body h6 .octicon-link[data-v-2553e0b3] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-2553e0b3],\n.markdown-body h2:hover .anchor[data-v-2553e0b3],\n.markdown-body h3:hover .anchor[data-v-2553e0b3],\n.markdown-body h4:hover .anchor[data-v-2553e0b3],\n.markdown-body h5:hover .anchor[data-v-2553e0b3],\n.markdown-body h6:hover .anchor[data-v-2553e0b3] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-2553e0b3],\n.markdown-body h2:hover .anchor .octicon-link[data-v-2553e0b3],\n.markdown-body h3:hover .anchor .octicon-link[data-v-2553e0b3],\n.markdown-body h4:hover .anchor .octicon-link[data-v-2553e0b3],\n.markdown-body h5:hover .anchor .octicon-link[data-v-2553e0b3],\n.markdown-body h6:hover .anchor .octicon-link[data-v-2553e0b3] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-2553e0b3]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-2553e0b3]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-2553e0b3]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-2553e0b3]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-2553e0b3]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-2553e0b3]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-2553e0b3] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-2553e0b3] {\n  display: block;\n}\n.markdown-body summary[data-v-2553e0b3] {\n  display: list-item;\n}\n.markdown-body a[data-v-2553e0b3] {\n  background-color: initial;\n}\n.markdown-body a[data-v-2553e0b3]:active,\n.markdown-body a[data-v-2553e0b3]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-2553e0b3] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-2553e0b3] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-2553e0b3] {\n  border-style: none;\n}\n.markdown-body code[data-v-2553e0b3],\n.markdown-body kbd[data-v-2553e0b3],\n.markdown-body pre[data-v-2553e0b3] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-2553e0b3] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-2553e0b3] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-2553e0b3] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-2553e0b3] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-2553e0b3] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-2553e0b3] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-2553e0b3] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-2553e0b3]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-2553e0b3] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-2553e0b3] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-2553e0b3]:after,\n.markdown-body hr[data-v-2553e0b3]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-2553e0b3]:after {\n  clear: both;\n}\n.markdown-body table[data-v-2553e0b3] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-2553e0b3],\n.markdown-body th[data-v-2553e0b3] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-2553e0b3] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-2553e0b3] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-2553e0b3],\n.markdown-body h2[data-v-2553e0b3],\n.markdown-body h3[data-v-2553e0b3],\n.markdown-body h4[data-v-2553e0b3],\n.markdown-body h5[data-v-2553e0b3],\n.markdown-body h6[data-v-2553e0b3] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-2553e0b3] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-2553e0b3],\n.markdown-body h2[data-v-2553e0b3] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-2553e0b3] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-2553e0b3] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-2553e0b3],\n.markdown-body h4[data-v-2553e0b3] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-2553e0b3] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-2553e0b3] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-2553e0b3],\n.markdown-body h6[data-v-2553e0b3] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-2553e0b3] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-2553e0b3] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-2553e0b3] {\n  margin: 0;\n}\n.markdown-body ol[data-v-2553e0b3],\n.markdown-body ul[data-v-2553e0b3] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-2553e0b3],\n.markdown-body ul ol[data-v-2553e0b3] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-2553e0b3],\n.markdown-body ol ul ol[data-v-2553e0b3],\n.markdown-body ul ol ol[data-v-2553e0b3],\n.markdown-body ul ul ol[data-v-2553e0b3] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-2553e0b3] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-2553e0b3],\n.markdown-body pre[data-v-2553e0b3] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-2553e0b3] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-2553e0b3]::-webkit-inner-spin-button,\n.markdown-body input[data-v-2553e0b3]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-2553e0b3] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-2553e0b3] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-2553e0b3] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-2553e0b3] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-2553e0b3] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-2553e0b3] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-2553e0b3] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-2553e0b3] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-2553e0b3] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-2553e0b3] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-2553e0b3] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-2553e0b3] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-2553e0b3] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-2553e0b3] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-2553e0b3] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-2553e0b3],\n.markdown-body .px-3[data-v-2553e0b3] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-2553e0b3] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-2553e0b3] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-2553e0b3] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-2553e0b3] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-2553e0b3] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-2553e0b3] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-2553e0b3] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-2553e0b3] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-2553e0b3],\n.markdown-body .pl-s .pl-v[data-v-2553e0b3] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-2553e0b3],\n.markdown-body .pl-en[data-v-2553e0b3] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-2553e0b3],\n.markdown-body .pl-smi[data-v-2553e0b3] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-2553e0b3] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-2553e0b3] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-2553e0b3],\n.markdown-body .pl-s[data-v-2553e0b3],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-2553e0b3],\n.markdown-body .pl-sr[data-v-2553e0b3],\n.markdown-body .pl-sr .pl-cce[data-v-2553e0b3],\n.markdown-body .pl-sr .pl-sra[data-v-2553e0b3],\n.markdown-body .pl-sr .pl-sre[data-v-2553e0b3] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-2553e0b3],\n.markdown-body .pl-v[data-v-2553e0b3] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-2553e0b3] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-2553e0b3] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-2553e0b3] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-2553e0b3]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-2553e0b3] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-2553e0b3] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-2553e0b3],\n.markdown-body .pl-mh .pl-en[data-v-2553e0b3],\n.markdown-body .pl-ms[data-v-2553e0b3] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-2553e0b3] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-2553e0b3] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-2553e0b3] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-2553e0b3] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-2553e0b3] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-2553e0b3] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-2553e0b3] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-2553e0b3] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-2553e0b3] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-2553e0b3] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-2553e0b3] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-2553e0b3] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-2553e0b3] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-2553e0b3] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-2553e0b3] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-2553e0b3] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-2553e0b3] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-2553e0b3] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-2553e0b3] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-2553e0b3] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-2553e0b3] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-2553e0b3] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-2553e0b3] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-2553e0b3] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-2553e0b3] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-2553e0b3] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-2553e0b3] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-2553e0b3] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-2553e0b3] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-2553e0b3] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-2553e0b3]:after,\n.markdown-body[data-v-2553e0b3]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-2553e0b3]:after {\n  clear: both;\n}\n.markdown-body[data-v-2553e0b3]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-2553e0b3]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-2553e0b3]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-2553e0b3],\n.markdown-body details[data-v-2553e0b3],\n.markdown-body dl[data-v-2553e0b3],\n.markdown-body ol[data-v-2553e0b3],\n.markdown-body p[data-v-2553e0b3],\n.markdown-body pre[data-v-2553e0b3],\n.markdown-body table[data-v-2553e0b3],\n.markdown-body ul[data-v-2553e0b3] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-2553e0b3] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-2553e0b3] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-2553e0b3]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-2553e0b3]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-2553e0b3],\n.markdown-body h2[data-v-2553e0b3],\n.markdown-body h3[data-v-2553e0b3],\n.markdown-body h4[data-v-2553e0b3],\n.markdown-body h5[data-v-2553e0b3],\n.markdown-body h6[data-v-2553e0b3] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-2553e0b3] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-2553e0b3],\n.markdown-body h2[data-v-2553e0b3] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-2553e0b3] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-2553e0b3] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-2553e0b3] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-2553e0b3] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-2553e0b3] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-2553e0b3],\n.markdown-body ul[data-v-2553e0b3] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-2553e0b3],\n.markdown-body ol ul[data-v-2553e0b3],\n.markdown-body ul ol[data-v-2553e0b3],\n.markdown-body ul ul[data-v-2553e0b3] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-2553e0b3] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-2553e0b3] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-2553e0b3] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-2553e0b3] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-2553e0b3] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-2553e0b3] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-2553e0b3] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-2553e0b3] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-2553e0b3],\n.markdown-body table th[data-v-2553e0b3] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-2553e0b3] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-2553e0b3]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-2553e0b3] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-2553e0b3] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-2553e0b3] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-2553e0b3] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-2553e0b3] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-2553e0b3] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-2553e0b3] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-2553e0b3] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-2553e0b3],\n.markdown-body pre[data-v-2553e0b3] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-2553e0b3] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-2553e0b3] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-2553e0b3]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-2553e0b3] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-2553e0b3] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-2553e0b3] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-2553e0b3]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-2553e0b3]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-2553e0b3] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-2553e0b3] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-2553e0b3],\n.markdown-body .pl-token[data-v-2553e0b3]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-2553e0b3] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-2553e0b3] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-2553e0b3] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-2553e0b3] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-2553e0b3] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-2553e0b3] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-2553e0b3] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-2553e0b3] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-2553e0b3] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-2553e0b3] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-2553e0b3] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-2553e0b3] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-2553e0b3] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-2553e0b3] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-2553e0b3] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},89491:(n,o,a)=>{var t=a(77705)((function(n){return n[1]}));t.push([n.id,"\n.bordered[data-v-6522cc9e] {\n\tborder: 2px solid black;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.smallTomato[data-v-6522cc9e] {\n\tbackground-color: tomato;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.largeGold[data-v-6522cc9e] {\n\tbackground-color: gold;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.wide[data-v-6522cc9e] {\n\tmax-width: 300px;\n}\n.narrow[data-v-6522cc9e] {\n\tmax-width: 100px;\n}\n",""]),n.exports=t},84758:(n,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>s});var t=a(19546),e=a(47069),d=a(45832);const r={name:"TransitionResize",data:()=>({leaveWidth:0,leaveHeight:0,enterWidth:0,enterHeight:0}),methods:{onBeforeEnter(n){n.style.setProperty("opacity","0%"),n.style.setProperty("overflow","hidden")},onEnter(n,o){if(this.enterWidth=n.offsetWidth,this.enterHeight=n.offsetHeight,this.leaveWidth===this.enterWidth&&this.leaveHeight===this.enterHeight)return n.style.removeProperty("overflow"),void(0,d.dx)({element:n,onComplete:o});!function({element:n,startWidth:o,endWidth:a,startHeight:r,endHeight:i,onComplete:b}){const l=(0,t.ZP)(n),m=(0,d.Y7)(o,a,"width","px"),p=(0,d.Y7)(r,i,"height","px"),s=n=>({...m(n),...p(n)}),v=d.hJ;l.set(s(v.from)),l.render(),(0,e.j)({...v,...d.ST,onUpdate(n){l.set(s(n))},onComplete:b})}({element:n,startWidth:this.leaveWidth,endWidth:this.enterWidth,startHeight:this.leaveHeight,endHeight:this.enterHeight,onComplete(){n.style.removeProperty("overflow"),(0,d.dx)({element:n,onComplete:o})}})},onAfterEnter(n){window.setTimeout((()=>{n.style.removeProperty("opacity"),n.style.removeProperty("width"),n.style.removeProperty("height")}),50)},onBeforeLeave(n){this.leaveWidth=n.offsetWidth,this.leaveHeight=n.offsetHeight},onLeave(n,o){(0,d.vq)({element:n,onComplete:o})}}};var i=a(51900);const b={components:{MTransitionResize:(0,i.Z)(r,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("transition",n._g(n._b({attrs:{css:!1,mode:"out-in"},on:{"before-enter":n.onBeforeEnter,enter:n.onEnter,"after-enter":n.onAfterEnter,"before-leave":n.onBeforeLeave,leave:n.onLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({showSmall:!0}),methods:{toggleSmall(){this.showSmall=!this.showSmall}}};a(3024);const l=(0,i.Z)(b,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"bordered",on:{click:n.toggleSmall}},[a("m-transition-resize",[n.showSmall?a("div",{key:"small",staticClass:"smallTomato"},[a("p",{staticClass:"narrow"},[n._v("\n\t\t\t\tnarrow small tomato\n\t\t\t")])]):a("div",{key:"large",staticClass:"largeGold"},[a("p",{staticClass:"wide"},[n._v("\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t")])])])],1)}),[],!1,null,"6522cc9e",null).exports;var m=a(415);const p={components:{Demo0:l,DemoCollapse:m.DemoCollapse,SrcFile:m.SrcFile}};a(9618);const s=(0,i.Z)(p,(function(){var n=this,o=n.$createElement;n._self._c;return n._m(1)}),[function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Slot")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("default")]),n._v(" "),a("td",[n._v("content to animate")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Transition Resize")]),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div\n\t\tclass="bordered"\n\t\t@click="toggleSmall"\n\t>\n\t\t<m-transition-resize>\n\t\t\t<div\n\t\t\t\tv-if="showSmall"\n\t\t\t\tkey="small"\n\t\t\t\tclass="smallTomato"\n\t\t\t>\n\t\t\t\t<p class="narrow">\n\t\t\t\t\tnarrow small tomato\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tv-else\n\t\t\t\tkey="large"\n\t\t\t\tclass="largeGold"\n\t\t\t>\n\t\t\t\t<p class="wide">\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</m-transition-resize>\n\t</div>\n</template>\n\n<script>\nimport { MTransitionResize } from \'@square/maker/components/TransitionResize\';\n\nexport default {\n\tcomponents: {\n\t\tMTransitionResize,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tshowSmall: true,\n\t\t};\n\t},\n\tmethods: {\n\t\ttoggleSmall() {\n\t\t\tthis.showSmall = !this.showSmall;\n\t\t},\n\t},\n};\n<\/script>\n\n<style scoped>\n.bordered {\n\tborder: 2px solid black;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.smallTomato {\n\tbackground-color: tomato;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.largeGold {\n\tbackground-color: gold;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.wide {\n\tmax-width: 300px;\n}\n.narrow {\n\tmax-width: 100px;\n}\n</style>\n')]],2)],1),n._v(" "),a("h2",[n._v("Slots")]),n._v(" "),n._m(0)],1)}],!1,null,"2553e0b3",null).exports},9618:(n,o,a)=>{var t=a(32352);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("43f7fa60",t,!0,{})},3024:(n,o,a)=>{var t=a(89491);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("0621a622",t,!0,{})}}]);