(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[462],{71432:(n,t,o)=>{var a=o(19751),e=/^\s+/;n.exports=function(n){return n?n.slice(0,a(n)+1).replace(e,""):n}},19751:n=>{var t=/\s/;n.exports=function(n){for(var o=n.length;o--&&t.test(n.charAt(o)););return o}},50569:(n,t,o)=>{var a=o(70071),e=o(55989),d=o(56705),r=Math.max,i=Math.min;n.exports=function(n,t,o){var l,m,s,p,v,b,c=0,h=!1,w=!1,y=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function k(t){var o=l,a=m;return l=m=void 0,c=t,p=n.apply(a,o)}function f(n){return c=n,v=setTimeout(g,t),h?k(n):p}function u(n){var o=n-b;return void 0===b||o>=t||o<0||w&&n-c>=s}function g(){var n=e();if(u(n))return x(n);v=setTimeout(g,function(n){var o=t-(n-b);return w?i(o,s-(n-c)):o}(n))}function x(n){return v=void 0,y&&l?k(n):(l=m=void 0,p)}function _(){var n=e(),o=u(n);if(l=arguments,m=this,b=n,o){if(void 0===v)return f(b);if(w)return clearTimeout(v),v=setTimeout(g,t),k(b)}return void 0===v&&(v=setTimeout(g,t)),p}return t=d(t)||0,a(o)&&(h=!!o.leading,s=(w="maxWait"in o)?r(d(o.maxWait)||0,t):s,y="trailing"in o?!!o.trailing:y),_.cancel=function(){void 0!==v&&clearTimeout(v),c=0,l=b=m=v=void 0},_.flush=function(){return void 0===v?p:x(e())},_}},55989:(n,t,o)=>{var a=o(44362);n.exports=function(){return a.Date.now()}},69792:(n,t,o)=>{var a=o(50569),e=o(70071);n.exports=function(n,t,o){var d=!0,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return e(o)&&(d="leading"in o?!!o.leading:d,r="trailing"in o?!!o.trailing:r),a(n,t,{leading:d,maxWait:t,trailing:r})}},56705:(n,t,o)=>{var a=o(71432),e=o(70071),d=o(34655),r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(d(n))return NaN;if(e(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=e(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=a(n);var o=i.test(n);return o||l.test(n)?m(n.slice(2),o?2:8):r.test(n)?NaN:+n}},13555:function(n){n.exports=function(){"use strict";var n=function(n){var t=n.props,o=n.data,a=n.parent,e=function n(t){return Array.isArray(t)?(o=t=>n(t),t.reduce(((n,t)=>n.concat(o(t))),[])):null!==(a=t)&&"object"==typeof a?function(n){let t=[];for(const o in n)n[o]&&t.push(o);return t}(t):"string"==typeof t&&t?[t]:[];var o,a}([o.staticClass,o.class]);if(e){var d,r,i,l=(r=(d=t).body,i=d.document,r?window.document.body:!!i&&window.document.documentElement);if(l){var m=function(n,t){if(!t.length)return;const{classList:o}=n;return t.filter((n=>{if(!o.contains(n))return o.add(n),!0}))}(l,e),s=function(){!function(n,t){if(!t||!t.length)return;let o;for(;o=t.shift();)n.classList.remove(o);n.classList.length||n.removeAttribute("class")}(l,m)};a.$once("hook:beforeUpdate",s),a.$once("hook:destroyed",s)}}},t=Object.prototype.hasOwnProperty,o=function(n,t,o){var a="&"===t[0],e="~"===(t=a?t.slice(1):t)[0],d="!"===(t=e?t.slice(1):t)[0];return{o:n,t:t=d?t.slice(1):t,i:o,u:{once:e,capture:d,passive:a}}},a=function(n){var a,e,d,r=n.props,i=n.listeners,l=n.parent,m=function(n,a){var e,d,r=[];for(var i in a)if(e=a,d=i,t.call(e,d)){var l=a[i],m=o(n,i,l);m.o.addEventListener(m.t,m.i,m.u),r.push(m)}return r}((e=(a=r).body,d=a.document,e?window.document.body:d?window.document:window),i),s=function(){!function(n){for(var t;t=n.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(m)};l.$once("hook:beforeUpdate",s),l.$once("hook:destroyed",s)},e=function(t){a(t),n(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,t){return t.parent._isMounted?e(t):t.parent.$once("hook:mounted",(function(){e(t)})),t.slots().default}}}()},39211:(n,t,o)=>{"use strict";o.d(t,{T:()=>r});var a=o(31838),e=o(45832);const d={components:{MTransitionResponsive:a.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:e.iu,enter:this.enter,leave:this.leave}]}}};const r=(0,o(51900).Z)(d,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},31838:(n,t,o)=>{"use strict";o.d(t,{w:()=>e});const a={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,t){this.getResponsiveTransition().enter({element:n,onComplete:t})},handleLeave(n,t){this.getResponsiveTransition().leave({element:n,onComplete:t})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let t;return this.transitions.forEach((o=>{n>=o.minWidth&&(t=o)})),t}}};const e=(0,o(51900).Z)(a,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:(n,t,o)=>{"use strict";o.d(t,{iu:()=>d,OE:()=>r,AT:()=>l,ST:()=>m,hJ:()=>v,Y7:()=>c,dx:()=>g,s4:()=>x,vq:()=>_,vn:()=>z,w0:()=>C,I0:()=>M,$y:()=>E,rG:()=>S,iM:()=>$,tq:()=>T,cT:()=>j,uL:()=>q,C9:()=>P});var a=o(19546),e=o(47069);const d=0,r=840,i="spring",l=200,m={type:i,stiffness:600,damping:60,mass:1},s={type:i,stiffness:400,damping:40,mass:1},p={type:i,stiffness:400,damping:30,mass:1.5},v={from:0,to:100},b={from:100,to:0};function c(n,t,o,a){return e=>function(n,t,o,a,e){return{[a]:"".concat(n/100*(o-t)+t).concat(e)}}(e,n,t,o,a)}const h=c(0,100,"opacity","%"),w=c(0,100,"y","%"),y=c(0,100,"x","%"),k=c(40,0,"y","px"),f=n=>({...h(n),...k(n)}),u=(n,t)=>{const o=c(t,0,"y","px");return{...h(n),...o(n)}};function g({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=h,r=v;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function x({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=h,r=v;o.set(d(r.from)),o.render(),setTimeout((()=>{(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}),l)}function _({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=h,r=b;o.set(d(r.from)),o.render(),(0,e.j)({...b,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function z({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=w,r=b;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function C({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=w,r=v;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function M({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=y,r=b;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function E({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=y,r=v;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function S({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=f,r=v;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function $({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=f,r=v;o.set(d(r.from)),o.render(),setTimeout((()=>{(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}),l)}function T({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=u,r=v,i=20+5*n.dataset.loadIndex;o.set(d(r.from)),o.render(),(0,e.j)({...r,...s,onUpdate(n){o.set(d(n,i))},onComplete:t})}function j({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=f,r=b;o.set(d(r.from)),o.render(),(0,e.j)({...r,...m,onUpdate(n){o.set(d(n))},onComplete:t})}function q({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=w,r=b;o.set(d(r.from)),o.render(),(0,e.j)({...r,...p,onUpdate(n){o.set(d(n))},onComplete:t})}function P({element:n,onComplete:t}){const o=(0,a.ZP)(n),d=w,r=v;o.set(d(r.from)),o.render(),(0,e.j)({...r,...p,onUpdate(n){o.set(d(n))},onComplete:t})}},76784:(n,t,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,"\n.image[data-v-11e0a3fb] {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 400px;\n\tmargin-right: 25px;\n}\n.image-tall[data-v-11e0a3fb] {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 500px;\n}\n.image-wide[data-v-11e0a3fb] {\n\tdisplay: inline-block;\n\twidth: 600px;\n\theight: 400px;\n}\n",""]),n.exports=a},30457:(n,t,o)=>{var a=o(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-519510e0] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-519510e0] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-519510e0]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-519510e0],\n.markdown-body h2 .octicon-link[data-v-519510e0],\n.markdown-body h3 .octicon-link[data-v-519510e0],\n.markdown-body h4 .octicon-link[data-v-519510e0],\n.markdown-body h5 .octicon-link[data-v-519510e0],\n.markdown-body h6 .octicon-link[data-v-519510e0] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-519510e0],\n.markdown-body h2:hover .anchor[data-v-519510e0],\n.markdown-body h3:hover .anchor[data-v-519510e0],\n.markdown-body h4:hover .anchor[data-v-519510e0],\n.markdown-body h5:hover .anchor[data-v-519510e0],\n.markdown-body h6:hover .anchor[data-v-519510e0] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-519510e0],\n.markdown-body h2:hover .anchor .octicon-link[data-v-519510e0],\n.markdown-body h3:hover .anchor .octicon-link[data-v-519510e0],\n.markdown-body h4:hover .anchor .octicon-link[data-v-519510e0],\n.markdown-body h5:hover .anchor .octicon-link[data-v-519510e0],\n.markdown-body h6:hover .anchor .octicon-link[data-v-519510e0] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-519510e0]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-519510e0]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-519510e0]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-519510e0]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-519510e0]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-519510e0]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-519510e0] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-519510e0] {\n  display: block;\n}\n.markdown-body summary[data-v-519510e0] {\n  display: list-item;\n}\n.markdown-body a[data-v-519510e0] {\n  background-color: initial;\n}\n.markdown-body a[data-v-519510e0]:active,\n.markdown-body a[data-v-519510e0]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-519510e0] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-519510e0] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-519510e0] {\n  border-style: none;\n}\n.markdown-body code[data-v-519510e0],\n.markdown-body kbd[data-v-519510e0],\n.markdown-body pre[data-v-519510e0] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-519510e0] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-519510e0] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-519510e0] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-519510e0] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-519510e0] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-519510e0] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-519510e0] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-519510e0]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-519510e0] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-519510e0] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-519510e0]:after,\n.markdown-body hr[data-v-519510e0]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-519510e0]:after {\n  clear: both;\n}\n.markdown-body table[data-v-519510e0] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-519510e0],\n.markdown-body th[data-v-519510e0] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-519510e0] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-519510e0] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-519510e0],\n.markdown-body h2[data-v-519510e0],\n.markdown-body h3[data-v-519510e0],\n.markdown-body h4[data-v-519510e0],\n.markdown-body h5[data-v-519510e0],\n.markdown-body h6[data-v-519510e0] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-519510e0] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-519510e0],\n.markdown-body h2[data-v-519510e0] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-519510e0] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-519510e0] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-519510e0],\n.markdown-body h4[data-v-519510e0] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-519510e0] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-519510e0] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-519510e0],\n.markdown-body h6[data-v-519510e0] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-519510e0] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-519510e0] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-519510e0] {\n  margin: 0;\n}\n.markdown-body ol[data-v-519510e0],\n.markdown-body ul[data-v-519510e0] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-519510e0],\n.markdown-body ul ol[data-v-519510e0] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-519510e0],\n.markdown-body ol ul ol[data-v-519510e0],\n.markdown-body ul ol ol[data-v-519510e0],\n.markdown-body ul ul ol[data-v-519510e0] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-519510e0] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-519510e0],\n.markdown-body pre[data-v-519510e0] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-519510e0] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-519510e0]::-webkit-inner-spin-button,\n.markdown-body input[data-v-519510e0]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-519510e0] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-519510e0] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-519510e0] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-519510e0] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-519510e0] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-519510e0] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-519510e0] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-519510e0] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-519510e0] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-519510e0] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-519510e0] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-519510e0] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-519510e0] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-519510e0] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-519510e0] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-519510e0],\n.markdown-body .px-3[data-v-519510e0] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-519510e0] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-519510e0] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-519510e0] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-519510e0] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-519510e0] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-519510e0] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-519510e0] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-519510e0] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-519510e0],\n.markdown-body .pl-s .pl-v[data-v-519510e0] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-519510e0],\n.markdown-body .pl-en[data-v-519510e0] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-519510e0],\n.markdown-body .pl-smi[data-v-519510e0] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-519510e0] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-519510e0] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-519510e0],\n.markdown-body .pl-s[data-v-519510e0],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-519510e0],\n.markdown-body .pl-sr[data-v-519510e0],\n.markdown-body .pl-sr .pl-cce[data-v-519510e0],\n.markdown-body .pl-sr .pl-sra[data-v-519510e0],\n.markdown-body .pl-sr .pl-sre[data-v-519510e0] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-519510e0],\n.markdown-body .pl-v[data-v-519510e0] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-519510e0] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-519510e0] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-519510e0] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-519510e0]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-519510e0] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-519510e0] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-519510e0],\n.markdown-body .pl-mh .pl-en[data-v-519510e0],\n.markdown-body .pl-ms[data-v-519510e0] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-519510e0] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-519510e0] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-519510e0] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-519510e0] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-519510e0] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-519510e0] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-519510e0] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-519510e0] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-519510e0] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-519510e0] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-519510e0] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-519510e0] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-519510e0] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-519510e0] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-519510e0] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-519510e0] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-519510e0] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-519510e0] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-519510e0] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-519510e0] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-519510e0] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-519510e0] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-519510e0] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-519510e0] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-519510e0] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-519510e0] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-519510e0] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-519510e0] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-519510e0] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-519510e0] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-519510e0]:after,\n.markdown-body[data-v-519510e0]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-519510e0]:after {\n  clear: both;\n}\n.markdown-body[data-v-519510e0]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-519510e0]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-519510e0]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-519510e0],\n.markdown-body details[data-v-519510e0],\n.markdown-body dl[data-v-519510e0],\n.markdown-body ol[data-v-519510e0],\n.markdown-body p[data-v-519510e0],\n.markdown-body pre[data-v-519510e0],\n.markdown-body table[data-v-519510e0],\n.markdown-body ul[data-v-519510e0] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-519510e0] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-519510e0] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-519510e0]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-519510e0]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-519510e0],\n.markdown-body h2[data-v-519510e0],\n.markdown-body h3[data-v-519510e0],\n.markdown-body h4[data-v-519510e0],\n.markdown-body h5[data-v-519510e0],\n.markdown-body h6[data-v-519510e0] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-519510e0] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-519510e0],\n.markdown-body h2[data-v-519510e0] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-519510e0] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-519510e0] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-519510e0] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-519510e0] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-519510e0] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-519510e0],\n.markdown-body ul[data-v-519510e0] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-519510e0],\n.markdown-body ol ul[data-v-519510e0],\n.markdown-body ul ol[data-v-519510e0],\n.markdown-body ul ul[data-v-519510e0] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-519510e0] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-519510e0] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-519510e0] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-519510e0] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-519510e0] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-519510e0] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-519510e0] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-519510e0] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-519510e0],\n.markdown-body table th[data-v-519510e0] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-519510e0] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-519510e0]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-519510e0] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-519510e0] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-519510e0] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-519510e0] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-519510e0] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-519510e0] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-519510e0] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-519510e0] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-519510e0],\n.markdown-body pre[data-v-519510e0] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-519510e0] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-519510e0] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-519510e0]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-519510e0] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-519510e0] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-519510e0] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-519510e0]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-519510e0]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-519510e0] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-519510e0] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-519510e0],\n.markdown-body .pl-token[data-v-519510e0]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-519510e0] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-519510e0] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-519510e0] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-519510e0] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-519510e0] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-519510e0] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-519510e0] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-519510e0] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-519510e0] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-519510e0] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-519510e0] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-519510e0] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-519510e0] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-519510e0] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-519510e0] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},90571:(n,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});const a={components:{MImage:o(77024).F},data:()=>({shape:"square",shapeOptions:["square","circle","arch"],fadedInComplete:"Fade in not completed"}),methods:{imageVisible(){this.fadedInComplete="Fade in completed"}}};o(89022);var e=o(51900);const d=(0,e.Z)(a,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h4",[n._v("image")]),n._v(" "),o("m-image",{staticClass:"image",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape},on:{"image:visible":n.imageVisible}}),n._v(" "),o("m-image",{staticClass:"image image-tall",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape}}),n._v(" "),o("m-image",{staticClass:"image image-wide",attrs:{src:"https://source.unsplash.com/random/400x600",shape:n.shape}}),n._v(" "),o("br"),n._v("\n\t"+n._s(n.fadedInComplete)+"\n\t"),o("br"),n._v(" "),o("label",[n._v("\n\t\tShape\n\t\t"),o("select",{directives:[{name:"model",rawName:"v-model",value:n.shape,expression:"shape"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(n){return n.selected})).map((function(n){return"_value"in n?n._value:n.value}));n.shape=t.target.multiple?o:o[0]}}},n._l(n.shapeOptions,(function(t,a){return o("option",{key:a,domProps:{value:t}},[n._v("\n\t\t\t\t"+n._s(t)+"\n\t\t\t")])})),0)])],1)}),[],!1,null,"11e0a3fb",null).exports;var r=o(415);const i={components:{Demo0:d,DemoCollapse:r.DemoCollapse,SrcFile:r.SrcFile}};o(99298);const l=(0,e.Z)(i,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports all "),o("code",[n._v("<img>")]),n._v(" attributes")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports attributes from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[o("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("src")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("srcset")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("sizes")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])]),n._v(" "),o("tr",[o("td",[n._v("shape")]),n._v(" "),o("td",[o("code",[n._v("string")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[o("code",[n._v("original")]),n._v(", "),o("code",[n._v("square")]),n._v(", "),o("code",[n._v("circle")]),n._v(", "),o("code",[n._v("arch")])]),n._v(" "),o("td",[n._v("Original applies theme’s border radius, square applies border radius of 0")])]),n._v(" "),o("tr",[o("td",[n._v("lazyload")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("Supports events from "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"}},[o("code",[n._v("<img>")])]),n._v(".")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[n._v("Event")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("image:visible")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Image")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>image</h4>\n\t\t<m-image\n\t\t\tclass="image"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t\t@image:visible="imageVisible"\n\t\t/>\n\t\t<m-image\n\t\t\tclass="image image-tall"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t/>\n\t\t<m-image\n\t\t\tclass="image image-wide"\n\t\t\tsrc="https://source.unsplash.com/random/400x600"\n\t\t\t:shape="shape"\n\t\t/>\n\t\t<br>\n\t\t{{ fadedInComplete }}\n\t\t<br>\n\t\t<label>\n\t\t\tShape\n\t\t\t<select\n\t\t\t\tv-model="shape"\n\t\t\t>\n\t\t\t\t<option\n\t\t\t\t\tv-for="(value, index) in shapeOptions"\n\t\t\t\t\t:key="index"\n\t\t\t\t\t:value="value"\n\t\t\t\t>\n\t\t\t\t\t{{ value }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</label>\n\t</div>\n</template>\n\n<script>\nimport { MImage } from \'@square/maker/components/Image\';\n\nexport default {\n\tcomponents: {\n\t\tMImage,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tshape: \'square\',\n\t\t\tshapeOptions: [\n\t\t\t\t\'square\',\n\t\t\t\t\'circle\',\n\t\t\t\t\'arch\',\n\t\t\t],\n\t\t\tfadedInComplete: \'Fade in not completed\',\n\t\t};\n\t},\n\n\tmethods: {\n\t\timageVisible() {\n\t\t\tthis.fadedInComplete = \'Fade in completed\';\n\t\t},\n\t},\n};\n<\/script>\n\n<style scoped>\n.image {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 400px;\n\tmargin-right: 25px;\n}\n\n.image-tall {\n\tdisplay: inline-block;\n\twidth: 400px;\n\theight: 500px;\n}\n\n.image-wide {\n\tdisplay: inline-block;\n\twidth: 600px;\n\theight: 400px;\n}\n</style>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"519510e0",null).exports},89022:(n,t,o)=>{var a=o(76784);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("709acac4",a,!0,{})},99298:(n,t,o)=>{var a=o(30457);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,o(54023).Z)("b15814e2",a,!0,{})}}]);