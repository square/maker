(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[5695],{9893:t=>{t.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=281)}({0:function(t,n,e){"use strict";function o(t,n,e,o,r,i,a,c){var s,u="function"==typeof t?t.options:t;if(n&&(u.render=n,u.staticRenderFns=e,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):r&&(s=c?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,n){return s.call(n),l(t,n)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}e.d(n,"a",(function(){return o}))},281:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{pre:!0,attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{pre:!0,attrs:{d:"M18 6L6 18M6 6l12 12"}})])};o._withStripped=!0;var r=e(0),i=Object(r.a)({},o,[],!1,null,null,null);i.options.__file="node_modules/feather-icons/dist/icons/x.svg",n.default=i.exports}})},569:(t,n,e)=>{var o=e(71),r=e(5989),i=e(6705),a=Math.max,c=Math.min;t.exports=function(t,n,e){var s,u,l,f,p,d,v=0,m=!1,b=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var e=s,o=u;return s=u=void 0,v=n,f=t.apply(o,e)}function _(t){return v=t,p=setTimeout(g,n),m?y(t):f}function w(t){var e=t-d;return void 0===d||e>=n||e<0||b&&t-v>=l}function g(){var t=r();if(w(t))return x(t);p=setTimeout(g,function(t){var e=n-(t-d);return b?c(e,l-(t-v)):e}(t))}function x(t){return p=void 0,h&&s?y(t):(s=u=void 0,f)}function k(){var t=r(),e=w(t);if(s=arguments,u=this,d=t,e){if(void 0===p)return _(d);if(b)return clearTimeout(p),p=setTimeout(g,n),y(d)}return void 0===p&&(p=setTimeout(g,n)),f}return n=i(n)||0,o(e)&&(m=!!e.leading,l=(b="maxWait"in e)?a(i(e.maxWait)||0,n):l,h="trailing"in e?!!e.trailing:h),k.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=u=p=void 0},k.flush=function(){return void 0===p?f:x(r())},k}},5989:(t,n,e)=>{var o=e(4362);t.exports=function(){return o.Date.now()}},9792:(t,n,e)=>{var o=e(569),r=e(71);t.exports=function(t,n,e){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return r(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),o(t,n,{leading:i,maxWait:n,trailing:a})}},3555:function(t){t.exports=function(){"use strict";var t=function(t){var n=t.props,e=t.data,o=t.parent,r=function t(n){return Array.isArray(n)?(e=n=>t(n),n.reduce(((t,n)=>t.concat(e(n))),[])):null!==(o=n)&&"object"==typeof o?function(t){let n=[];for(const e in t)t[e]&&n.push(e);return n}(n):"string"==typeof n&&n?[n]:[];var e,o}([e.staticClass,e.class]);if(r){var i,a,c,s=(a=(i=n).body,c=i.document,a?window.document.body:!!c&&window.document.documentElement);if(s){var u=function(t,n){if(!n.length)return;const{classList:e}=t;return n.filter((t=>{if(!e.contains(t))return e.add(t),!0}))}(s,r),l=function(){!function(t,n){if(!n||!n.length)return;let e;for(;e=n.shift();)t.classList.remove(e);t.classList.length||t.removeAttribute("class")}(s,u)};o.$once("hook:beforeUpdate",l),o.$once("hook:destroyed",l)}}},n=Object.prototype.hasOwnProperty,e=function(t,n,e){var o="&"===n[0],r="~"===(n=o?n.slice(1):n)[0],i="!"===(n=r?n.slice(1):n)[0];return{o:t,t:n=i?n.slice(1):n,i:e,u:{once:r,capture:i,passive:o}}},o=function(t){var o,r,i,a=t.props,c=t.listeners,s=t.parent,u=function(t,o){var r,i,a=[];for(var c in o)if(r=o,i=c,n.call(r,i)){var s=o[c],u=e(t,c,s);u.o.addEventListener(u.t,u.i,u.u),a.push(u)}return a}((r=(o=a).body,i=o.document,r?window.document.body:i?window.document:window),c),l=function(){!function(t){for(var n;n=t.shift();)n.o.removeEventListener(n.t,n.i,n.u)}(u)};s.$once("hook:beforeUpdate",l),s.$once("hook:destroyed",l)},r=function(n){o(n),t(n)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(t,n){return n.parent._isMounted?r(n):n.parent.$once("hook:mounted",(function(){r(n)})),n.slots().default}}}()},7062:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});var o=function(t){return t&&t.data&&(t.data.slot=void 0),t};const r={functional:!0,render:function(t,n){var e=n.props;return Array.isArray(e.nodes)?e.nodes.map(o):o(e.nodes)}}},3883:(t,n,e)=>{"use strict";e.d(n,{Z:()=>m});var o,r={"!":1,"&":2},i=/\B([A-Z])/g,a=/-(\w)/g;function c(t){return t.replace(a,(function(t,n){return n?n.toUpperCase():""}))}function s(t,n,e){if(e){var o=e.value,r=e.modifier,i=t[n];null==i||1===r?t[n]=o:2===r&&(Array.isArray(i)?Array.isArray(o)?i.push.apply(i,o):i.push(o):"object"==typeof i&&"object"==typeof o?Object.assign(i,o):"function"==typeof i&&"function"==typeof o?t[n]=function(){Reflect.apply(i,this,arguments),Reflect.apply(o,this,arguments)}:t[n]+=o)}}function u(t,n,e){t[n]||(t[n]={});var o=t[n];for(var r in e)s(o,r,e[r])}function l(t,n){if(n in t)return n;var e=n.replace(i,"-$1").toLowerCase();return e in t&&e}function f(t){var n={};for(var e in t){var o=t[e],i=r[e.slice(-1)];i?e=e.slice(0,-1):i=0,n[e]={value:o,modifier:i}}return n}function p(t,n){var e=c("static-"+n),o=[t[e],t[n]].filter(Boolean).flat(1/0);if(0!==o.length)return delete t[e],o}function d(t,n){var e=t[n];if(e)return delete t[n],e}function v(t){return t&&{value:t,modifier:0}}const m={functional:!0,render:function(t,n){var e=n.children,r=n.data;if(!e||function(t){for(var n in t)return!1;return!0}(r))return e;var i,a=f(r.attrs),m=f(r.on),b=f(r.nativeOn),h=d(a,"class")||v(p(r,"class")),y=d(a,"style")||v(p(r,"style")),_=d(a,"key")||v(r.key);return y&&"string"==typeof y.value&&(y.value=(i=y.value,Object.fromEntries(i.split(";").map((function(t){var n=t.split(":"),e=n[0],o=n[1];return e&&o&&[c(e.trim()),o.trim()]})).filter(Boolean)))),e.map((function(t){if((t=function(t){o||(o=Object.getPrototypeOf(t).constructor);var n=new o;return Object.assign(n,t),n.componentOptions&&(n.componentOptions=Object.assign({},n.componentOptions),n.componentOptions.propsData=Object.assign({},n.componentOptions.propsData)),n}(t)).tag){t.data||(t.data={});var n=Object.assign({},a),e=t,r=e.data,i=e.componentOptions;i?(u(i,"propsData",function(t,n){var e=t.Ctor.options.props,o={};if(e)for(var r in e){var i=l(n,r);i&&(o[r]=n[i],delete n[i])}return o}(i,n)),u(i,"listeners",m),u(r,"nativeOn",b),r.on=r.nativeOn):u(r,"on",m),u(r,"attrs",n),r.class=p(r,"class"),r.style=p(r,"style"),s(r,"class",h),s(r,"style",y),s(t,"key",_)}return t}))}}},5279:(t,n,e)=>{var o=e(7705)((function(t){return t[1]}));o.push([t.id,'\n.wrapper[data-v-b2ee5358] {\n\tmax-width: 400px;\n\tmargin: 0 auto;\n\tfont-family: "Square Market", system-ui;\n\tbackground: #ccc\n}\n.wrapper > div[data-v-b2ee5358] {\n\t\tposition: relative;\n\t\theight: 96px;\n}\n.icon[data-v-b2ee5358] {\n\twidth: 16px;\n\theight: 16px;\n}\n',""]),t.exports=o},6809:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>s});var o=e(8344),r=e(9893),i=e.n(r),a=e(9901);const c={components:{MInlineActionBar:o.pE,MActionBarButton:o.n5,XIcon:i(),MLoading:a.g},data:()=>({})};e(6763);const s=(0,e(1900).Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper",attrs:{"bg-color":"#ccc"}},[e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\tAction long text that wraps with very long text that wraps\n\t\t\t\twith very long text that wraps with very long text that wraps\n\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\tLabel with long text that wraps\n\t\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\t\tAction with text that wraps\n\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":"",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\tLabel with long text that wraps\n\t\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\t\tAction with text that wraps\n\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":"",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\tLabel with long text that stacks\n\t\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\t\tAction with text that stacks\n\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\tAction with text that wraps Action with text that wraps\n\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\tLabel with longer text\n\t\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\t\tConfirm\n\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"confirm",attrs:{"full-width":"",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\tLabel\n\t\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\t\tConfirm\n\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"action",attrs:{color:"#f6f6f6","full-width":""}},[t._v("\n\t\t\t\tAction\n\t\t\t")]),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\tConfirm\n\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"action",attrs:{color:"#f6f6f6","full-width":""}},[t._v("\n\t\t\t\tAction text that will wrap\n\t\t\t")]),t._v(" "),e("m-action-bar-button",{key:"confirm",attrs:{"full-width":""}},[t._v("\n\t\t\t\tConfirm button that wraps\n\t\t\t")])],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"}},[e("x-icon",{staticClass:"icon"})],1)],1)],1),t._v(" "),e("div",[e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{"full-width":"",color:"#f6f6f6"}},[e("m-loading")],1)],1)],1)])}),[],!1,null,"b2ee5358",null).exports},6763:(t,n,e)=>{var o=e(5279);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("357e3e2e",o,!0,{})}}]);
