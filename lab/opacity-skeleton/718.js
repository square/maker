(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[718,152],{3449:(t,n,o)=>{var r=o(7705)((function(t){return t[1]}));r.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* stylelint-disable length-zero-no-unit */\n.FullScreenFixed_ec_cW {\n\t--initial-bottom-padding: 16px;\n\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tpadding: 16px;\n\tpadding-bottom: var(--initial-bottom-padding);\n\ttransition: padding-bottom 0.5s;\n\tpointer-events: none;\n}\n.mobile-position_bottom_FOSoi {\n\tflex-direction: column;\n\talign-items: center;\n}\n.mobile-position_top_xHqvK {\n\tflex-direction: column-reverse;\n\talign-items: center;\n}\n@media screen and (min-width: 840px) {\n.desktop-position_bottom_U1x2Y {\n\t\tflex-direction: column;\n\t\talign-items: center;\n}\n.desktop-position_bottom-left_bBTii {\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n}\n.desktop-position_bottom-right_o3t7r {\n\t\tflex-direction: column;\n\t\talign-items: flex-end;\n}\n.desktop-position_top__LTB7 {\n\t\tflex-direction: column-reverse;\n\t\talign-items: center;\n}\n.desktop-position_top-left_cTe6W {\n\t\tflex-direction: column-reverse;\n\t\talign-items: flex-start;\n}\n.desktop-position_top-right_m3lDX {\n\t\tflex-direction: column-reverse;\n\t\talign-items: flex-end;\n}\n}\n\n/* calculations imported from ActionBarLayer */\n.ActionbarOffset_bCrd1 {\n\t--actionbar-top-padding: 24px;\n\t--actionbar-size: 48px;\n\t--actionbar-bottom-padding:\n\t\tcalc(\n\t\t\t24px\n\t\t\t+ env(safe-area-inset-bottom, 24px)\n\t\t\t+ var(--chrome-bottom-offset, 0px)\n\t\t);\n\n\tpadding-bottom:\n\t\tcalc(\n\t\t\tvar(--actionbar-top-padding)\n\t\t\t+ var(--actionbar-size)\n\t\t\t+ var(--actionbar-bottom-padding)\n\t\t);\n}\n\n/*\n * 1) global actionbar is hidden on desktop resolutions\n * 2) inline actionbars aren't fixed to the bottom of\n *    the screen on desktop resolutions\n */\n@media screen and (min-width: 840px) {\n.ActionbarOffset_bCrd1 {\n\t\tpadding-bottom: var(--initial-bottom-padding);\n}\n}\n",""]),r.locals={FullScreenFixed:"FullScreenFixed_ec_cW","mobile-position_bottom":"mobile-position_bottom_FOSoi","mobile-position_top":"mobile-position_top_xHqvK","desktop-position_bottom":"desktop-position_bottom_U1x2Y","desktop-position_bottom-left":"desktop-position_bottom-left_bBTii","desktop-position_bottom-right":"desktop-position_bottom-right_o3t7r","desktop-position_top":"desktop-position_top__LTB7","desktop-position_top-left":"desktop-position_top-left_cTe6W","desktop-position_top-right":"desktop-position_top-right_m3lDX",ActionbarOffset:"ActionbarOffset_bCrd1"},t.exports=r},4068:(t,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>c});var r=o(1931),e=o(9582),i=o(4058),s=o(6212);function a(t,n){return{...n,key:Math.random().toString(36).slice(2,12),renderFn:t}}const u={provide(){const t={state:r.ZP.observable({toasts:[]}),open(t,n={}){const o=a(t,n);return this.state.toasts.push(o),()=>{const t=this.state.toasts.indexOf(o);if(-1!==t){const n=1;this.state.toasts.splice(t,n)}}},close(t){const n=this.state.toasts.find((n=>n.renderFn===t));if(!n)return;const o=this.state.toasts.indexOf(n);if(-1===o)return;this.state.toasts.splice(o,1)},closeAll(){for(;this.state.toasts.length;)this.state.toasts.pop()}};return this.toastApi||(this.toastApi=t),{[i.rf]:t}}},p={components:{MTransitionStack:e.w,ToastRenderFn:s.default},inject:{toastApi:i.rf},inheritAttrs:!1,props:{beforeEnterClass:{type:String,default:void 0},mobilePosition:{type:String,default:"bottom",validator:t=>["top","bottom"].includes(t)},desktopPosition:{type:String,default:"bottom",validator:t=>["top-left","top","top-right","bottom-left","bottom","bottom-right"].includes(t)}},apiMixin:u,computed:{addActionbarOffset(){return!!this.toastApi.state.toasts.find((t=>t.actionbarOffset))}}};var l=o(2262),d=o.n(l);const c=(0,o(1900).Z)(p,(function(){var t,n=this,o=n.$createElement,r=n._self._c||o;return r("m-transition-stack",{class:[n.$s.FullScreenFixed,n.$s["mobile-position_"+n.mobilePosition],n.$s["desktop-position_"+n.desktopPosition],(t={},t[n.$s.ActionbarOffset]=n.addActionbarOffset,t)],attrs:{"before-enter-class":n.beforeEnterClass}},n._l(n.toastApi.state.toasts,(function(t){return r("toast-render-fn",{key:t.key,attrs:{"render-fn":t.renderFn}})})),1)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},2262:(t,n,o)=>{var r=o(3449);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,o(4023).Z)("79a5a6c4",r,!0,{})},9152:(t,n,o)=>{"use strict";o.d(n,{Vi:()=>M,l7:()=>H});var r={grad:.9,turn:360,rad:360/(2*Math.PI)},e=function(t){return"string"==typeof t?t.length>0:"number"==typeof t},i=function(t,n,o){return void 0===n&&(n=0),void 0===o&&(o=Math.pow(10,n)),Math.round(o*t)/o+0},s=function(t,n,o){return void 0===n&&(n=0),void 0===o&&(o=1),t>o?o:t>n?t:n},a=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},u=function(t){return{r:s(t.r,0,255),g:s(t.g,0,255),b:s(t.b,0,255),a:s(t.a)}},p=function(t){return{r:i(t.r),g:i(t.g),b:i(t.b),a:i(t.a,3)}},l=/^#([0-9a-f]{3,8})$/i,d=function(t){var n=t.toString(16);return n.length<2?"0"+n:n},c=function(t){var n=t.r,o=t.g,r=t.b,e=t.a,i=Math.max(n,o,r),s=i-Math.min(n,o,r),a=s?i===n?(o-r)/s:i===o?2+(r-n)/s:4+(n-o)/s:0;return{h:60*(a<0?a+6:a),s:i?s/i*100:0,v:i/255*100,a:e}},b=function(t){var n=t.h,o=t.s,r=t.v,e=t.a;n=n/360*6,o/=100,r/=100;var i=Math.floor(n),s=r*(1-o),a=r*(1-(n-i)*o),u=r*(1-(1-n+i)*o),p=i%6;return{r:255*[r,a,s,s,u,r][p],g:255*[u,r,r,a,s,s][p],b:255*[s,s,u,r,r,a][p],a:e}},f=function(t){return{h:a(t.h),s:s(t.s,0,100),l:s(t.l,0,100),a:s(t.a)}},h=function(t){return{h:i(t.h),s:i(t.s),l:i(t.l),a:i(t.a,3)}},g=function(t){return b((o=(n=t).s,{h:n.h,s:(o*=((r=n.l)<50?r:100-r)/100)>0?2*o/(r+o)*100:0,v:r+o,a:n.a}));var n,o,r},m=function(t){return{h:(n=c(t)).h,s:(e=(200-(o=n.s))*(r=n.v)/100)>0&&e<200?o*r/100/(e<=100?e:200-e)*100:0,l:e/2,a:n.a};var n,o,r,e},v=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,x=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,k={string:[[function(t){var n=l.exec(t);return n?(t=n[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:4===t.length?i(parseInt(t[3]+t[3],16)/255,2):1}:6===t.length||8===t.length?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:8===t.length?i(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var n=x.exec(t)||y.exec(t);return n?n[2]!==n[4]||n[4]!==n[6]?null:u({r:Number(n[1])/(n[2]?100/255:1),g:Number(n[3])/(n[4]?100/255:1),b:Number(n[5])/(n[6]?100/255:1),a:void 0===n[7]?1:Number(n[7])/(n[8]?100:1)}):null},"rgb"],[function(t){var n=v.exec(t)||_.exec(t);if(!n)return null;var o,e,i=f({h:(o=n[1],e=n[2],void 0===e&&(e="deg"),Number(o)*(r[e]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return g(i)},"hsl"]],object:[[function(t){var n=t.r,o=t.g,r=t.b,i=t.a,s=void 0===i?1:i;return e(n)&&e(o)&&e(r)?u({r:Number(n),g:Number(o),b:Number(r),a:Number(s)}):null},"rgb"],[function(t){var n=t.h,o=t.s,r=t.l,i=t.a,s=void 0===i?1:i;if(!e(n)||!e(o)||!e(r))return null;var a=f({h:Number(n),s:Number(o),l:Number(r),a:Number(s)});return g(a)},"hsl"],[function(t){var n=t.h,o=t.s,r=t.v,i=t.a,u=void 0===i?1:i;if(!e(n)||!e(o)||!e(r))return null;var p=function(t){return{h:a(t.h),s:s(t.s,0,100),v:s(t.v,0,100),a:s(t.a)}}({h:Number(n),s:Number(o),v:Number(r),a:Number(u)});return b(p)},"hsv"]]},N=function(t,n){for(var o=0;o<n.length;o++){var r=n[o][0](t);if(r)return[r,n[o][1]]}return[null,void 0]},A=function(t){return"string"==typeof t?N(t.trim(),k.string):"object"==typeof t&&null!==t?N(t,k.object):[null,void 0]},F=function(t,n){var o=m(t);return{h:o.h,s:s(o.s+100*n,0,100),l:o.l,a:o.a}},S=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},O=function(t,n){var o=m(t);return{h:o.h,s:o.s,l:s(o.l+100*n,0,100),a:o.a}},$=function(){function t(t){this.parsed=A(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return null!==this.parsed},t.prototype.brightness=function(){return i(S(this.rgba),2)},t.prototype.isDark=function(){return S(this.rgba)<.5},t.prototype.isLight=function(){return S(this.rgba)>=.5},t.prototype.toHex=function(){return n=(t=p(this.rgba)).r,o=t.g,r=t.b,s=(e=t.a)<1?d(i(255*e)):"","#"+d(n)+d(o)+d(r)+s;var t,n,o,r,e,s},t.prototype.toRgb=function(){return p(this.rgba)},t.prototype.toRgbString=function(){return n=(t=p(this.rgba)).r,o=t.g,r=t.b,(e=t.a)<1?"rgba("+n+", "+o+", "+r+", "+e+")":"rgb("+n+", "+o+", "+r+")";var t,n,o,r,e},t.prototype.toHsl=function(){return h(m(this.rgba))},t.prototype.toHslString=function(){return n=(t=h(m(this.rgba))).h,o=t.s,r=t.l,(e=t.a)<1?"hsla("+n+", "+o+"%, "+r+"%, "+e+")":"hsl("+n+", "+o+"%, "+r+"%)";var t,n,o,r,e},t.prototype.toHsv=function(){return t=c(this.rgba),{h:i(t.h),s:i(t.s),v:i(t.v),a:i(t.a,3)};var t},t.prototype.invert=function(){return M({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},t.prototype.saturate=function(t){return void 0===t&&(t=.1),M(F(this.rgba,t))},t.prototype.desaturate=function(t){return void 0===t&&(t=.1),M(F(this.rgba,-t))},t.prototype.grayscale=function(){return M(F(this.rgba,-1))},t.prototype.lighten=function(t){return void 0===t&&(t=.1),M(O(this.rgba,t))},t.prototype.darken=function(t){return void 0===t&&(t=.1),M(O(this.rgba,-t))},t.prototype.rotate=function(t){return void 0===t&&(t=15),this.hue(this.hue()+t)},t.prototype.alpha=function(t){return"number"==typeof t?M({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):i(this.rgba.a,3);var n},t.prototype.hue=function(t){var n=m(this.rgba);return"number"==typeof t?M({h:t,s:n.s,l:n.l,a:n.a}):i(n.h)},t.prototype.isEqual=function(t){return this.toHex()===M(t).toHex()},t}(),M=function(t){return t instanceof $?t:new $(t)},I=[],H=function(t){t.forEach((function(t){I.indexOf(t)<0&&(t($,k),I.push(t))}))}}}]);