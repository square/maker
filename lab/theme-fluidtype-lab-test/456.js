(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[456,884,280,537],{9893:function(t){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},281:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[e("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};r._withStripped=!0;var o=n(0),i=Object(o.a)({},r,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",e.default=i.exports}})},569:function(t,e,n){var r=n(71),o=n(5989),i=n(6705),a=Math.max,u=Math.min;t.exports=function(t,e,n){var s,c,f,l,p,d,v=0,h=!1,m=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=s,r=c;return s=c=void 0,v=e,l=t.apply(r,n)}function b(t){return v=t,p=setTimeout(_,e),h?g(t):l}function O(t){var n=t-d;return void 0===d||n>=e||n<0||m&&t-v>=f}function _(){var t=o();if(O(t))return w(t);p=setTimeout(_,function(t){var n=e-(t-d);return m?u(n,f-(t-v)):n}(t))}function w(t){return p=void 0,y&&s?g(t):(s=c=void 0,l)}function j(){var t=o(),n=O(t);if(s=arguments,c=this,d=t,n){if(void 0===p)return b(d);if(m)return clearTimeout(p),p=setTimeout(_,e),g(d)}return void 0===p&&(p=setTimeout(_,e)),l}return e=i(e)||0,r(n)&&(h=!!n.leading,f=(m="maxWait"in n)?a(i(n.maxWait)||0,e):f,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},j.flush=function(){return void 0===p?l:w(o())},j}},5989:function(t,e,n){var r=n(4362);t.exports=function(){return r.Date.now()}},9792:function(t,e,n){var r=n(569),o=n(71);t.exports=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:i,maxWait:e,trailing:a})}},8486:function(t,e){"use strict";var n=Symbol();function r(t,e){t[n]||(t[n]=e,Object.defineProperty(t,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var o=function(t,e){var r=t.splice(0);e.append.apply(e,r),r.forEach((function(t){t[n]=void 0}))};function i(t,e){if(this.frag){var n=this.frag.indexOf(e);n>-1&&this.frag.splice(n,0,t)}if(this[u]){var o=this[u].get(e);o&&(e=o[0])}e.before(t),r(t,this)}function a(t){if(this.frag){var e=this.frag.indexOf(t);e>-1&&this.frag.splice(e,1)}var r=this[u];if(r){var i=r.get(t);if(i)return o(i,t),r.delete(t),void(t[n]=void 0)}t.remove()}var u=Symbol(),s={insertBefore:i,removeChild:a},c=Symbol(),f={insertBefore:i,before:function(t){this.frag[0].before(t)},remove:function(){var t=this[c],e=this.frag,n=e.splice(0,e.length,t);n[0].before(this[c]),n.forEach((function(t){return t.remove()}))},removeChild:a,appendChild:function(t){var e=this.frag.length;this.frag[e-1].after(t);var n=this[c];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),r(t,this),this.frag.push(t)}},l={inserted:function(t){var e=Array.from(t.childNodes),n=t.parentNode,o=document.createComment("");t[c]=o,0===e.length&&e.push(o);var i=document.createDocumentFragment();i.append.apply(i,e),t.replaceWith(i),t.frag=e,function(t,e,n){t[u]||(t[u]=new Map,Object.assign(t,s)),t[u].set(e,n)}(n,t,e),r(t,n),e.forEach((function(e){return r(e,t)})),Object.defineProperty(t,"innerHTML",{set:function(e){var n=document.createElement("div");n.innerHTML=e;var r=t.frag.length;Array.from(n.childNodes).forEach((function(e){return t.appendChild(e)})),n.append.apply(n,t.frag.splice(0,r))},get:function(){return""}}),Object.assign(t,f)},unbind:function(t){o(t.frag,t),t[c].remove()}};e.Z=l},3555:function(t){t.exports=function(){"use strict";var t=function(t){var e=t.props,n=t.data,r=t.parent,o=function t(e){return Array.isArray(e)?(n=e=>t(e),e.reduce(((t,e)=>t.concat(n(e))),[])):null!==(r=e)&&"object"==typeof r?function(t){let e=[];for(const n in t)t[n]&&e.push(n);return e}(e):"string"==typeof e&&e?[e]:[];var n,r}([n.staticClass,n.class]);if(o){var i,a,u,s=(a=(i=e).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(s){var c=function(t,e){if(!e.length)return;const{classList:n}=t;return e.filter((t=>{if(!n.contains(t))return n.add(t),!0}))}(s,o),f=function(){!function(t,e){if(!e||!e.length)return;let n;for(;n=e.shift();)t.classList.remove(n);t.classList.length||t.removeAttribute("class")}(s,c)};r.$once("hook:beforeUpdate",f),r.$once("hook:destroyed",f)}}},e=Object.prototype.hasOwnProperty,n=function(t,e,n){var r="&"===e[0],o="~"===(e=r?e.slice(1):e)[0],i="!"===(e=o?e.slice(1):e)[0];return{o:t,t:e=i?e.slice(1):e,i:n,u:{once:o,capture:i,passive:r}}},r=function(t){var r,o,i,a=t.props,u=t.listeners,s=t.parent,c=function(t,r){var o,i,a=[];for(var u in r)if(o=r,i=u,e.call(o,i)){var s=r[u],c=n(t,u,s);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),u),f=function(){!function(t){for(var e;e=t.shift();)e.o.removeEventListener(e.t,e.i,e.u)}(c)};s.$once("hook:beforeUpdate",f),s.$once("hook:destroyed",f)},o=function(e){r(e),t(e)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,e){return e.parent._isMounted?o(e):e.parent.$once("hook:mounted",(function(){o(e)})),e.slots().default}}}()},7062:function(t,e){"use strict";var n=function(t){return t&&t.data&&(t.data.slot=void 0),t},r={functional:!0,render:function(t,e){var r=e.props;return Array.isArray(r.nodes)?r.nodes.map(n):n(r.nodes)}};e.Z=r},3883:function(t,e){"use strict";var n,r={"!":1,"&":2},o=/\B([A-Z])/g,i=/-(\w)/g;function a(t){return t.replace(i,(function(t,e){return e?e.toUpperCase():""}))}function u(t,e,n){if(n){var r=n.value,o=n.modifier,i=t[e];null==i||1===o?t[e]=r:2===o&&(Array.isArray(i)?Array.isArray(r)?i.push.apply(i,r):i.push(r):"object"==typeof i&&"object"==typeof r?Object.assign(i,r):"function"==typeof i&&"function"==typeof r?t[e]=function(){Reflect.apply(i,this,arguments),Reflect.apply(r,this,arguments)}:t[e]+=r)}}function s(t,e,n){t[e]||(t[e]={});var r=t[e];for(var o in n)u(r,o,n[o])}function c(t,e){if(e in t)return e;var n=e.replace(o,"-$1").toLowerCase();return n in t&&n}function f(t){var e={};for(var n in t){var o=t[n],i=r[n.slice(-1)];i?n=n.slice(0,-1):i=0,e[n]={value:o,modifier:i}}return e}function l(t,e){var n=a("static-"+e),r=[t[n],t[e]].filter(Boolean).flat(1/0);if(0!==r.length)return delete t[n],r}function p(t,e){var n=t[e];if(n)return delete t[e],n}function d(t){return t&&{value:t,modifier:0}}var v={functional:!0,render:function(t,e){var r=e.children,o=e.data;if(!r||function(t){for(var e in t)return!1;return!0}(o))return r;var i,v=f(o.attrs),h=f(o.on),m=f(o.nativeOn),y=p(v,"class")||d(l(o,"class")),g=p(v,"style")||d(l(o,"style")),b=p(v,"key")||d(o.key);return g&&"string"==typeof g.value&&(g.value=(i=g.value,Object.fromEntries(i.split(";").map((function(t){var e=t.split(":"),n=e[0],r=e[1];return n&&r&&[a(n.trim()),r.trim()]})).filter(Boolean)))),r.map((function(t){if((t=function(t){n||(n=Object.getPrototypeOf(t).constructor);var e=new n;return Object.assign(e,t),e.componentOptions&&(e.componentOptions=Object.assign({},e.componentOptions),e.componentOptions.propsData=Object.assign({},e.componentOptions.propsData)),e}(t)).tag){t.data||(t.data={});var e=Object.assign({},v),r=t,o=r.data,i=r.componentOptions;i?(s(i,"propsData",function(t,e){var n=t.Ctor.options.props,r={};if(n)for(var o in n){var i=c(e,o);i&&(r[o]=e[i],delete e[i])}return r}(i,e)),s(i,"listeners",h),s(o,"nativeOn",m),o.on=o.nativeOn):s(o,"on",h),s(o,"attrs",e),o.class=l(o,"class"),o.style=l(o,"style"),u(o,"class",y),u(o,"style",g),u(t,"key",b)}return t}))}};e.Z=v}}]);
