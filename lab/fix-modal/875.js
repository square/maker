(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[875],{9289:function(e,t,o){"use strict";o.d(t,{Qp:function(){return p},tG:function(){return w}});var n=!1;if("undefined"!=typeof window){var i={get passive(){n=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,u=-1,a=void 0,s=void 0,c=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},p=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),r?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===c){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);c=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),r&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-u;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?v(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",v,n?{passive:!1}:void 0),d=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},w=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),r&&(e.ontouchstart=null,e.ontouchmove=null,d&&0===l.length&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),d=!1)),r?y():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},6946:function(e,t,o){var n=o(7705)((function(e){return e[1]}));n.push([e.id,'\nhtml,\nbody {\n\tfont-family: "Square Market", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n}\n',""]),e.exports=n},7933:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}});var n=o(193),i=o(7852),r={components:{MActionBarLayer:n.$n,MModalLayer:i.Pj},mixins:[i.Pj.apiMixin]},l=(o(6389),(0,o(1900).Z)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("m-action-bar-layer",[o("router-view")],1),e._v(" "),o("m-modal-layer")],1)}),[],!1,null,null,null).exports)},6389:function(e,t,o){var n=o(6946);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(4023).Z)("e3ad97ae",n,!0,{})}}]);