(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[68],{13555:function(n){n.exports=function(){"use strict";var n=function(n){var t=n.props,o=n.data,a=n.parent,e=function n(t){return Array.isArray(t)?(o=t=>n(t),t.reduce(((n,t)=>n.concat(o(t))),[])):null!==(a=t)&&"object"==typeof a?function(n){let t=[];for(const o in n)n[o]&&t.push(o);return t}(t):"string"==typeof t&&t?[t]:[];var o,a}([o.staticClass,o.class]);if(e){var d,r,i,c=(r=(d=t).body,i=d.document,r?window.document.body:!!i&&window.document.documentElement);if(c){var m=function(n,t){if(!t.length)return;const{classList:o}=n;return t.filter((n=>{if(!o.contains(n))return o.add(n),!0}))}(c,e),l=function(){!function(n,t){if(!t||!t.length)return;let o;for(;o=t.shift();)n.classList.remove(o);n.classList.length||n.removeAttribute("class")}(c,m)};a.$once("hook:beforeUpdate",l),a.$once("hook:destroyed",l)}}},t=Object.prototype.hasOwnProperty,o=function(n,t,o){var a="&"===t[0],e="~"===(t=a?t.slice(1):t)[0],d="!"===(t=e?t.slice(1):t)[0];return{o:n,t:t=d?t.slice(1):t,i:o,u:{once:e,capture:d,passive:a}}},a=function(n){var a,e,d,r=n.props,i=n.listeners,c=n.parent,m=function(n,a){var e,d,r=[];for(var i in a)if(e=a,d=i,t.call(e,d)){var c=a[i],m=o(n,i,c);m.o.addEventListener(m.t,m.i,m.u),r.push(m)}return r}((e=(a=r).body,d=a.document,e?window.document.body:d?window.document:window),i),l=function(){!function(n){for(var t;t=n.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(m)};c.$once("hook:beforeUpdate",l),c.$once("hook:destroyed",l)},e=function(t){a(t),n(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,t){return t.parent._isMounted?e(t):t.parent.$once("hook:mounted",(function(){e(t)})),t.slots().default}}}()},27062:function(n,t){"use strict";var o=function(n){return n&&n.data&&(n.data.slot=void 0),n},a={functional:!0,render:function(n,t){var a=t.props;return Array.isArray(a.nodes)?a.nodes.map(o):o(a.nodes)}};t.Z=a},39211:function(n,t,o){"use strict";o.d(t,{T:function(){return r}});var a=o(31838),e=o(45832),d={components:{MTransitionResponsive:a.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:e.iu,enter:this.enter,leave:this.leave}]}}},r=(0,o(51900).Z)(d,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},31838:function(n,t,o){"use strict";o.d(t,{w:function(){return e}});var a={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,t){this.getResponsiveTransition().enter({element:n,onComplete:t})},handleLeave(n,t){this.getResponsiveTransition().leave({element:n,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let t;return this.transitions.forEach((o=>{n>=o.minWidth&&(t=o)})),t}}},e=(0,o(51900).Z)(a,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:function(n,t,o){"use strict";o.d(t,{iu:function(){return d},OE:function(){return r},AT:function(){return i},ST:function(){return c},hJ:function(){return m},Y7:function(){return p},dx:function(){return k},s4:function(){return f},vq:function(){return w},vn:function(){return h},w0:function(){return g},I0:function(){return _},$y:function(){return x},rG:function(){return M},iM:function(){return z},cT:function(){return P}});var a=o(19546),e=o(47069);const d=0,r=840,i=200,c={type:"spring",stiffness:600,damping:60,mass:1},m={from:0,to:100},l={from:100,to:0};function p(n,t,o,a){return e=>function(n,t,o,a,e){return{[a]:`${n/100*(o-t)+t}${e}`}}(e,n,t,o,a)}const v=p(0,100,"opacity","%"),b=p(0,100,"y","%"),s=p(0,100,"x","%"),u=p(40,0,"y","px"),y=n=>({...v(n),...u(n)});function k({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=v,r=m;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function f({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=v,r=m;o.set(d(r.from)),o.render(),setTimeout((()=>{(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}),i)}function w({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=v,r=l;o.set(d(r.from)),o.render(),(0,e.j)({...l,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function h({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=b,r=l;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function g({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=b,r=m;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function _({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=s,r=l;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function x({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=s,r=m;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function M({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=y,r=m;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}function z({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=y,r=m;o.set(d(r.from)),o.render(),setTimeout((()=>{(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}),i)}function P({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=y,r=l;o.set(d(r.from)),o.render(),(0,e.j)({...r,...c,onUpdate(n){o.set(d(n))},onComplete:t})}},93771:function(n,t,o){var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-4c69a448] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-4c69a448] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-4c69a448]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-4c69a448],\n.markdown-body h2 .octicon-link[data-v-4c69a448],\n.markdown-body h3 .octicon-link[data-v-4c69a448],\n.markdown-body h4 .octicon-link[data-v-4c69a448],\n.markdown-body h5 .octicon-link[data-v-4c69a448],\n.markdown-body h6 .octicon-link[data-v-4c69a448] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-4c69a448],\n.markdown-body h2:hover .anchor[data-v-4c69a448],\n.markdown-body h3:hover .anchor[data-v-4c69a448],\n.markdown-body h4:hover .anchor[data-v-4c69a448],\n.markdown-body h5:hover .anchor[data-v-4c69a448],\n.markdown-body h6:hover .anchor[data-v-4c69a448] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-4c69a448],\n.markdown-body h2:hover .anchor .octicon-link[data-v-4c69a448],\n.markdown-body h3:hover .anchor .octicon-link[data-v-4c69a448],\n.markdown-body h4:hover .anchor .octicon-link[data-v-4c69a448],\n.markdown-body h5:hover .anchor .octicon-link[data-v-4c69a448],\n.markdown-body h6:hover .anchor .octicon-link[data-v-4c69a448] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-4c69a448]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-4c69a448]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-4c69a448]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-4c69a448]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-4c69a448]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-4c69a448]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-4c69a448] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-4c69a448] {\n  display: block;\n}\n.markdown-body summary[data-v-4c69a448] {\n  display: list-item;\n}\n.markdown-body a[data-v-4c69a448] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-4c69a448]:active,\n.markdown-body a[data-v-4c69a448]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-4c69a448] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-4c69a448] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-4c69a448] {\n  border-style: none;\n}\n.markdown-body code[data-v-4c69a448],\n.markdown-body kbd[data-v-4c69a448],\n.markdown-body pre[data-v-4c69a448] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-4c69a448] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-4c69a448] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-4c69a448] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-4c69a448] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-4c69a448] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-4c69a448] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-4c69a448] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-4c69a448]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-4c69a448] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-4c69a448] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-4c69a448]:after,\n.markdown-body hr[data-v-4c69a448]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-4c69a448]:after {\n  clear: both;\n}\n.markdown-body table[data-v-4c69a448] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-4c69a448],\n.markdown-body th[data-v-4c69a448] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-4c69a448] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-4c69a448] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-4c69a448],\n.markdown-body h2[data-v-4c69a448],\n.markdown-body h3[data-v-4c69a448],\n.markdown-body h4[data-v-4c69a448],\n.markdown-body h5[data-v-4c69a448],\n.markdown-body h6[data-v-4c69a448] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-4c69a448] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-4c69a448],\n.markdown-body h2[data-v-4c69a448] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-4c69a448] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-4c69a448] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-4c69a448],\n.markdown-body h4[data-v-4c69a448] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-4c69a448] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-4c69a448] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-4c69a448],\n.markdown-body h6[data-v-4c69a448] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-4c69a448] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-4c69a448] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-4c69a448] {\n  margin: 0;\n}\n.markdown-body ol[data-v-4c69a448],\n.markdown-body ul[data-v-4c69a448] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-4c69a448],\n.markdown-body ul ol[data-v-4c69a448] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-4c69a448],\n.markdown-body ol ul ol[data-v-4c69a448],\n.markdown-body ul ol ol[data-v-4c69a448],\n.markdown-body ul ul ol[data-v-4c69a448] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-4c69a448] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-4c69a448],\n.markdown-body pre[data-v-4c69a448] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-4c69a448] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-4c69a448]::-webkit-inner-spin-button,\n.markdown-body input[data-v-4c69a448]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-4c69a448] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-4c69a448] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-4c69a448] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-4c69a448] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-4c69a448] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-4c69a448] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-4c69a448] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-4c69a448] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-4c69a448] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-4c69a448] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-4c69a448] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-4c69a448] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-4c69a448] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-4c69a448] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-4c69a448] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-4c69a448],\n.markdown-body .px-3[data-v-4c69a448] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-4c69a448] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-4c69a448] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-4c69a448] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-4c69a448] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-4c69a448] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-4c69a448] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-4c69a448] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-4c69a448] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-4c69a448],\n.markdown-body .pl-s .pl-v[data-v-4c69a448] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-4c69a448],\n.markdown-body .pl-en[data-v-4c69a448] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-4c69a448],\n.markdown-body .pl-smi[data-v-4c69a448] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-4c69a448] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-4c69a448] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-4c69a448],\n.markdown-body .pl-s[data-v-4c69a448],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-4c69a448],\n.markdown-body .pl-sr[data-v-4c69a448],\n.markdown-body .pl-sr .pl-cce[data-v-4c69a448],\n.markdown-body .pl-sr .pl-sra[data-v-4c69a448],\n.markdown-body .pl-sr .pl-sre[data-v-4c69a448] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-4c69a448],\n.markdown-body .pl-v[data-v-4c69a448] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-4c69a448] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-4c69a448] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-4c69a448] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-4c69a448]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-4c69a448] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-4c69a448] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-4c69a448],\n.markdown-body .pl-mh .pl-en[data-v-4c69a448],\n.markdown-body .pl-ms[data-v-4c69a448] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-4c69a448] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-4c69a448] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-4c69a448] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-4c69a448] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-4c69a448] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-4c69a448] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-4c69a448] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-4c69a448] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-4c69a448] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-4c69a448] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-4c69a448] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-4c69a448] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-4c69a448] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-4c69a448] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-4c69a448] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-4c69a448] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-4c69a448] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-4c69a448] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-4c69a448] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-4c69a448] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-4c69a448] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-4c69a448] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-4c69a448] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-4c69a448] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-4c69a448] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-4c69a448] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-4c69a448] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-4c69a448] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-4c69a448] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-4c69a448] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-4c69a448]:after,\n.markdown-body[data-v-4c69a448]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-4c69a448]:after {\n  clear: both;\n}\n.markdown-body[data-v-4c69a448]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-4c69a448]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-4c69a448]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-4c69a448],\n.markdown-body details[data-v-4c69a448],\n.markdown-body dl[data-v-4c69a448],\n.markdown-body ol[data-v-4c69a448],\n.markdown-body p[data-v-4c69a448],\n.markdown-body pre[data-v-4c69a448],\n.markdown-body table[data-v-4c69a448],\n.markdown-body ul[data-v-4c69a448] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-4c69a448] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-4c69a448] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-4c69a448]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-4c69a448]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-4c69a448],\n.markdown-body h2[data-v-4c69a448],\n.markdown-body h3[data-v-4c69a448],\n.markdown-body h4[data-v-4c69a448],\n.markdown-body h5[data-v-4c69a448],\n.markdown-body h6[data-v-4c69a448] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-4c69a448] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-4c69a448],\n.markdown-body h2[data-v-4c69a448] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-4c69a448] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-4c69a448] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-4c69a448] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-4c69a448] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-4c69a448] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-4c69a448],\n.markdown-body ul[data-v-4c69a448] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-4c69a448],\n.markdown-body ol ul[data-v-4c69a448],\n.markdown-body ul ol[data-v-4c69a448],\n.markdown-body ul ul[data-v-4c69a448] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-4c69a448] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-4c69a448] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-4c69a448] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-4c69a448] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-4c69a448] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-4c69a448] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-4c69a448] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-4c69a448] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-4c69a448],\n.markdown-body table th[data-v-4c69a448] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-4c69a448] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-4c69a448]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-4c69a448] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-4c69a448] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-4c69a448] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-4c69a448] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-4c69a448] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-4c69a448] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-4c69a448] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-4c69a448] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-4c69a448],\n.markdown-body pre[data-v-4c69a448] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-4c69a448] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-4c69a448] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-4c69a448]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-4c69a448] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-4c69a448] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-4c69a448] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-4c69a448]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-4c69a448]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-4c69a448] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-4c69a448] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-4c69a448],\n.markdown-body .pl-token[data-v-4c69a448]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-4c69a448] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-4c69a448] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-4c69a448] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-4c69a448] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-4c69a448] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-4c69a448] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-4c69a448] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-4c69a448] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-4c69a448] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-4c69a448] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-4c69a448] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-4c69a448] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-4c69a448] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-4c69a448] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-4c69a448] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},61484:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var a=o(39811),e=o(71943),d={name:"SimpleDemo",components:{MPopoverLayer:a.M3,MPopover:a.vj,MPopoverBubble:a.cO,MButton:e.G},mixins:[a.M3.popoverMixin]},r=o(51900),i=(0,r.Z)(d,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("m-popover-layer"),n._v(" "),o("div",{staticStyle:{padding:"5rem"}},[o("m-popover",{scopedSlots:n._u([{key:"tether",fn:function(t){return[o("m-button",{attrs:{variant:t.isOpen?"primary":"secondary"},on:{click:function(n){return t.toggle()}}},[n._v("\n\t\t\t\t\tPopover Toggle\n\t\t\t\t")])]}},{key:"content",fn:function(){return[o("m-popover-bubble",[n._v("\n\t\t\t\t\tContent 1\n\t\t\t\t")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null).exports,c=o(415),m={name:"SimpleDemo",components:{MPopoverLayer:a.M3,MPopover:a.vj,MPopoverBubble:a.cO,MButton:e.G},mixins:[a.M3.popoverMixin]},l=(0,r.Z)(m,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("m-popover-layer"),n._v(" "),o("m-button",{ref:"externalTrigger",attrs:{variant:"secondary"},on:{click:function(t){return n.$refs.popover.toggle(n.$refs.externalTrigger.$el)}}},[n._v("\n\t\tPopover Open\n\t")]),n._v(" "),o("div",{staticStyle:{padding:"5rem"}},[o("m-popover",{ref:"popover",scopedSlots:n._u([{key:"tether",fn:function(){return[o("span",{ref:"tether"},[n._v("\n\t\t\t\t\tIt will open on me\n\t\t\t\t")])]},proxy:!0},{key:"content",fn:function(){return[o("m-popover-bubble",[n._v("\n\t\t\t\t\tContent 1\n\t\t\t\t")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null).exports,p=o(93678),v=o(33216),b={name:"DemoModal",components:{MPopover:a.vj,MPopoverBubble:a.cO,MModal:p.x6,MButton:e.G,MHeading:v.b,MModalContent:p.nI},inject:{modalApi:p.UJ},methods:{closeModal(){this.modalApi.close()}}},s=(0,r.Z)(b,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("m-modal",[o("img",{staticClass:"cover-photo",attrs:{src:"https://picsum.photos/800/300"}}),n._v(" "),o("m-modal-content",[o("m-heading",[n._v("\n\t\t\tPopover in a modal\n\t\t")]),n._v(" "),o("m-popover",{scopedSlots:n._u([{key:"tether",fn:function(t){return[o("m-button",{attrs:{size:"small"},on:{click:function(n){return t.toggle()}}},[n._v("\n\t\t\t\t\tToggle Popover\n\t\t\t\t")])]}},{key:"content",fn:function(){return[o("m-popover-bubble",[o("div",{staticStyle:{padding:"10rem 2rem"}},[o("m-button",{on:{click:function(t){return n.closeModal()}}},[n._v("\n\t\t\t\t\t\t\tClose Modal\n\t\t\t\t\t\t")])],1)])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null).exports,u={name:"ModalDemo",components:{MPopoverLayer:a.M3,MButton:e.G,MModalLayer:p.Pj},mixins:[a.M3.popoverMixin,p.Pj.apiMixin],methods:{openModal(){const n=this.$createElement;this.modalApi.open((()=>n(s)),{closeOnClickOutside:!0})}}},y=(0,r.Z)(u,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("m-modal-layer"),n._v(" "),o("m-popover-layer"),n._v(" "),o("m-button",{on:{click:function(t){return n.openModal()}}},[n._v("\n\t\tOpen Modal\n\t")])],1)}),[],!1,null,null,null).exports,k={components:{Demo0:i,DemoCollapse:c.DemoCollapse,SrcFile:c.SrcFile,Demo1:l,Demo2:y}},f=(o(58039),(0,r.Z)(k,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(4)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("ignore-elements")]),n._v(" "),o("td",[o("code",[n._v("array")])]),n._v(" "),o("td",[o("code",[n._v("[]")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("placement")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'bottom-start'")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("distance-offset")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[o("code",[n._v("8")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("skidding-offset")]),n._v(" "),o("td",[o("code",[n._v("number")])]),n._v(" "),o("td",[o("code",[n._v("0")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("min-width")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("true")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Event")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("open")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("close")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'#000'")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("bg-color")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[o("code",[n._v("'#fff'")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Popover")]),n._v(" "),o("h2",[n._v("Simple Usage")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<m-popover-layer />\n\n\t\t<div style=\"padding: 5rem;\">\n\t\t\t<m-popover>\n\t\t\t\t<template #tether=\"popover\">\n\t\t\t\t\t<m-button\n\t\t\t\t\t\t:variant=\"popover.isOpen ? 'primary' : 'secondary'\"\n\t\t\t\t\t\t@click=\"popover.toggle()\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPopover Toggle\n\t\t\t\t\t</m-button>\n\t\t\t\t</template>\n\n\t\t\t\t<template #content>\n\t\t\t\t\t<m-popover-bubble>\n\t\t\t\t\t\tContent 1\n\t\t\t\t\t</m-popover-bubble>\n\t\t\t\t</template>\n\t\t\t</m-popover>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MPopoverLayer, MPopover, MPopoverBubble } from '@square/maker/components/Popover';\nimport { MButton } from '@square/maker/components/Button';\n\nexport default {\n\tname: 'SimpleDemo',\n\n\tcomponents: {\n\t\tMPopoverLayer,\n\t\tMPopover,\n\t\tMPopoverBubble,\n\t\tMButton,\n\t},\n\n\tmixins: [\n\t\tMPopoverLayer.popoverMixin,\n\t],\n};\n<\/script>\n")]],2)],1),n._v(" "),o("h2",[n._v("External Trigger")]),n._v(" "),o("demo-collapse",[o("Demo1"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-popover-layer />\n\n\t\t<m-button\n\t\t\tref="externalTrigger"\n\t\t\t:variant="false ? \'primary\' : \'secondary\'"\n\t\t\t@click="$refs.popover.toggle($refs.externalTrigger.$el)"\n\t\t>\n\t\t\tPopover Open\n\t\t</m-button>\n\n\t\t<div style="padding: 5rem;">\n\t\t\t<m-popover ref="popover">\n\t\t\t\t<template #tether>\n\t\t\t\t\t<span ref="tether">\n\t\t\t\t\t\tIt will open on me\n\t\t\t\t\t</span>\n\t\t\t\t</template>\n\t\t\t\t<template #content>\n\t\t\t\t\t<m-popover-bubble>\n\t\t\t\t\t\tContent 1\n\t\t\t\t\t</m-popover-bubble>\n\t\t\t\t</template>\n\t\t\t</m-popover>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { MPopoverLayer, MPopover, MPopoverBubble } from \'@square/maker/components/Popover\';\nimport { MButton } from \'@square/maker/components/Button\';\n\nexport default {\n\tname: \'SimpleDemo\',\n\n\tcomponents: {\n\t\tMPopoverLayer,\n\t\tMPopover,\n\t\tMPopoverBubble,\n\t\tMButton,\n\t},\n\n\tmixins: [\n\t\tMPopoverLayer.popoverMixin,\n\t],\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h2",[n._v("Modal/Dialog Usage")]),n._v(" "),o("demo-collapse",[o("Demo2"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<m-modal-layer />\n\t\t<m-popover-layer />\n\n\t\t<m-button\n\t\t\t@click=\"openModal()\"\n\t\t>\n\t\t\tOpen Modal\n\t\t</m-button>\n\t</div>\n</template>\n\n<script>\nimport { MPopoverLayer } from '@square/maker/components/Popover';\nimport { MButton } from '@square/maker/components/Button';\nimport { MModalLayer } from '@square/maker/components/Modal';\nimport DemoModal from 'doc/DemoModal.vue';\n\nexport default {\n\tname: 'ModalDemo',\n\n\tcomponents: {\n\t\tMPopoverLayer,\n\t\tMButton,\n\t\tMModalLayer,\n\t},\n\n\tmixins: [\n\t\tMPopoverLayer.popoverMixin,\n\t\tMModalLayer.apiMixin,\n\t],\n\n\tmethods: {\n\t\topenModal() {\n\t\t\tthis.modalApi.open(\n\t\t\t\t() => <DemoModal />,\n\t\t\t\t{\n\t\t\t\t\tcloseOnClickOutside: true,\n\t\t\t\t},\n\t\t\t);\n\t\t},\n\t},\n};\n<\/script>\n")]],2),n._v(" "),o("src-file",{attrs:{name:"DemoModal.vue",language:"html"}},[[n._v('<template>\n\t<m-modal>\n\t\t<img\n\t\t\tclass="cover-photo"\n\t\t\tsrc="https://picsum.photos/800/300"\n\t\t>\n\t\t<m-modal-content>\n\t\t\t<m-heading>\n\t\t\t\tPopover in a modal\n\t\t\t</m-heading>\n\n\t\t\t<m-popover>\n\t\t\t\t<template #tether="popover">\n\t\t\t\t\t<m-button\n\t\t\t\t\t\tsize="small"\n\t\t\t\t\t\t@click="popover.toggle()"\n\t\t\t\t\t>\n\t\t\t\t\t\tToggle Popover\n\t\t\t\t\t</m-button>\n\t\t\t\t</template>\n\n\t\t\t\t<template #content>\n\t\t\t\t\t<m-popover-bubble>\n\t\t\t\t\t\t<div style="padding: 10rem 2rem;">\n\t\t\t\t\t\t\t<m-button @click="closeModal()">\n\t\t\t\t\t\t\t\tClose Modal\n\t\t\t\t\t\t\t</m-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</m-popover-bubble>\n\t\t\t\t</template>\n\t\t\t</m-popover>\n\t\t</m-modal-content>\n\t</m-modal>\n</template>\n\n<script>\nimport { MPopover, MPopoverBubble } from \'@square/maker/components/Popover\';\nimport { MButton } from \'@square/maker/components/Button\';\nimport { MHeading } from \'@square/maker/components/Heading\';\nimport { MModal, MModalContent, modalApi } from \'@square/maker/components/Modal\';\n\nexport default {\n\tname: \'DemoModal\',\n\n\tcomponents: {\n\t\tMPopover,\n\t\tMPopoverBubble,\n\t\tMModal,\n\t\tMButton,\n\t\tMHeading,\n\t\tMModalContent,\n\t},\n\n\tinject: {\n\t\tmodalApi,\n\t},\n\n\tmethods: {\n\t\tcloseModal() {\n\t\t\tthis.modalApi.close();\n\t\t},\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h2",[n._v("Popover Props")]),n._v(" "),n._m(0),n._v(" "),o("h2",[n._v("Popover Events")]),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("PopoverBubble Props")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("PopoverBubble Slots")]),n._v(" "),n._m(3)],1)}],!1,null,"4c69a448",null).exports)},58039:function(n,t,o){var a=o(93771);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("ed6be05c",a,!0,{})}}]);