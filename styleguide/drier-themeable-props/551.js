(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[551],{9893:function(t){t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=281)}({0:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a,u){var s,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,n){return s.call(n),f(t,n)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}e.d(n,"a",(function(){return r}))},281:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var o=e(0),i=Object(o.a)({},r,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",n.default=i.exports}})},569:function(t,n,e){var r=e(71),o=e(5989),i=e(6705),a=Math.max,u=Math.min;t.exports=function(t,n,e){var s,c,f,l,p,d,v=0,y=!1,m=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=s,r=c;return s=c=void 0,v=n,l=t.apply(r,e)}function g(t){return v=t,p=setTimeout(O,n),y?b(t):l}function _(t){var e=t-d;return void 0===d||e>=n||e<0||m&&t-v>=f}function O(){var t=o();if(_(t))return w(t);p=setTimeout(O,function(t){var e=n-(t-d);return m?u(e,f-(t-v)):e}(t))}function w(t){return p=void 0,h&&s?b(t):(s=c=void 0,l)}function x(){var t=o(),e=_(t);if(s=arguments,c=this,d=t,e){if(void 0===p)return g(d);if(m)return clearTimeout(p),p=setTimeout(O,n),b(d)}return void 0===p&&(p=setTimeout(O,n)),l}return n=i(n)||0,r(e)&&(y=!!e.leading,f=(m="maxWait"in e)?a(i(e.maxWait)||0,n):f,h="trailing"in e?!!e.trailing:h),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},x.flush=function(){return void 0===p?l:w(o())},x}},5989:function(t,n,e){var r=e(4362);t.exports=function(){return r.Date.now()}},9792:function(t,n,e){var r=e(569),o=e(71);t.exports=function(t,n,e){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),r(t,n,{leading:i,maxWait:n,trailing:a})}},6705:function(t,n,e){var r=e(71),o=e(4655),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=u.test(t);return e||s.test(t)?c(t.slice(2),e?2:8):a.test(t)?NaN:+t}},3555:function(t){t.exports=function(){"use strict";var t=function(t){var n=t.props,e=t.data,r=t.parent,o=function t(n){return Array.isArray(n)?(e=n=>t(n),n.reduce(((t,n)=>t.concat(e(n))),[])):null!==(r=n)&&"object"==typeof r?function(t){let n=[];for(const e in t)t[e]&&n.push(e);return n}(n):"string"==typeof n&&n?[n]:[];var e,r}([e.staticClass,e.class]);if(o){var i,a,u,s=(a=(i=n).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(s){var c=function(t,n){if(!n.length)return;const{classList:e}=t;return n.filter((t=>{if(!e.contains(t))return e.add(t),!0}))}(s,o),f=function(){!function(t,n){if(!n||!n.length)return;let e;for(;e=n.shift();)t.classList.remove(e);t.classList.length||t.removeAttribute("class")}(s,c)};r.$once("hook:beforeUpdate",f),r.$once("hook:destroyed",f)}}},n=Object.prototype.hasOwnProperty,e=function(t,n,e){var r="&"===n[0],o="~"===(n=r?n.slice(1):n)[0],i="!"===(n=o?n.slice(1):n)[0];return{o:t,t:n=i?n.slice(1):n,i:e,u:{once:o,capture:i,passive:r}}},r=function(t){var r,o,i,a=t.props,u=t.listeners,s=t.parent,c=function(t,r){var o,i,a=[];for(var u in r)if(o=r,i=u,n.call(o,i)){var s=r[u],c=e(t,u,s);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),u),f=function(){!function(t){for(var n;n=t.shift();)n.o.removeEventListener(n.t,n.i,n.u)}(c)};s.$once("hook:beforeUpdate",f),s.$once("hook:destroyed",f)},o=function(n){r(n),t(n)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,n){return n.parent._isMounted?o(n):n.parent.$once("hook:mounted",(function(){o(n)})),n.slots().default}}}()},7062:function(t,n){"use strict";var e=function(t){return t&&t.data&&(t.data.slot=void 0),t},r={functional:!0,render:function(t,n){var r=n.props;return Array.isArray(r.nodes)?r.nodes.map(e):e(r.nodes)}};n.Z=r},3883:function(t,n){"use strict";var e,r={"!":1,"&":2},o=/\B([A-Z])/g,i=/-(\w)/g;function a(t){return t.replace(i,(function(t,n){return n?n.toUpperCase():""}))}function u(t,n,e){if(e){var r=e.value,o=e.modifier,i=t[n];null==i||1===o?t[n]=r:2===o&&(Array.isArray(i)?Array.isArray(r)?i.push.apply(i,r):i.push(r):"object"==typeof i&&"object"==typeof r?Object.assign(i,r):"function"==typeof i&&"function"==typeof r?t[n]=function(){Reflect.apply(i,this,arguments),Reflect.apply(r,this,arguments)}:t[n]+=r)}}function s(t,n,e){t[n]||(t[n]={});var r=t[n];for(var o in e)u(r,o,e[o])}function c(t,n){if(n in t)return n;var e=n.replace(o,"-$1").toLowerCase();return e in t&&e}function f(t){var n={};for(var e in t){var o=t[e],i=r[e.slice(-1)];i?e=e.slice(0,-1):i=0,n[e]={value:o,modifier:i}}return n}function l(t,n){var e=a("static-"+n),r=[t[e],t[n]].filter(Boolean).flat(1/0);if(0!==r.length)return delete t[e],r}function p(t,n){var e=t[n];if(e)return delete t[n],e}function d(t){return t&&{value:t,modifier:0}}var v={functional:!0,render:function(t,n){var r=n.children,o=n.data;if(!r||function(t){for(var n in t)return!1;return!0}(o))return r;var i,v=f(o.attrs),y=f(o.on),m=f(o.nativeOn),h=p(v,"class")||d(l(o,"class")),b=p(v,"style")||d(l(o,"style")),g=p(v,"key")||d(o.key);return b&&"string"==typeof b.value&&(b.value=(i=b.value,Object.fromEntries(i.split(";").map((function(t){var n=t.split(":"),e=n[0],r=n[1];return e&&r&&[a(e.trim()),r.trim()]})).filter(Boolean)))),r.map((function(t){if((t=function(t){e||(e=Object.getPrototypeOf(t).constructor);var n=new e;return Object.assign(n,t),n.componentOptions&&(n.componentOptions=Object.assign({},n.componentOptions),n.componentOptions.propsData=Object.assign({},n.componentOptions.propsData)),n}(t)).tag){t.data||(t.data={});var n=Object.assign({},v),r=t,o=r.data,i=r.componentOptions;i?(s(i,"propsData",function(t,n){var e=t.Ctor.options.props,r={};if(e)for(var o in e){var i=c(n,o);i&&(r[o]=n[i],delete n[i])}return r}(i,n)),s(i,"listeners",y),s(o,"nativeOn",m),o.on=o.nativeOn):s(o,"on",y),s(o,"attrs",n),o.class=l(o,"class"),o.style=l(o,"style"),u(o,"class",h),u(o,"style",b),u(t,"key",g)}return t}))}};n.Z=v}}]);