"use strict";(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[793],{9289:function(e,t,o){o.d(t,{Qp:function(){return p},tG:function(){return w}});var n=!1;if("undefined"!=typeof window){var i={get passive(){n=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),d=[],l=!1,u=-1,a=void 0,c=void 0,s=void 0,v=function(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!v(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==c){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(t,e),c=void 0}},p=function(e,t){if(e){if(!d.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[o]),r?window.requestAnimationFrame((function(){if(void 0===c){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),r&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-u;!v(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?f(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",f,n?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},w=function(e){e?(d=d.filter((function(t){return t.targetElement!==e})),r&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===d.length&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),l=!1)),r?y():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},8242:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(193),i=o(7852),r={components:{MActionBarLayer:n.$n,MModalLayer:i.Pj},mixins:[i.Pj.apiMixin]},d=(0,o(1900).Z)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("m-action-bar-layer",[o("router-view"),e._v(" "),o("m-modal-layer")],1)}),[],!1,null,null,null).exports}}]);