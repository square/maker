(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[226],{49940:(r,t,e)=>{var n=e(43203)(e(44362),"DataView");r.exports=n},87114:(r,t,e)=>{var n=e(43203)(e(44362),"Promise");r.exports=n},10689:(r,t,e)=>{var n=e(43203)(e(44362),"Set");r.exports=n},85284:(r,t,e)=>{var n=e(43203)(e(44362),"WeakMap");r.exports=n},34111:r=>{r.exports=function(r,t){for(var e=-1,n=null==r?0:r.length;++e<n&&!1!==t(r[e],e,r););return r}},56523:r=>{r.exports=function(r,t){for(var e=-1,n=null==r?0:r.length,o=0,a=[];++e<n;){var u=r[e];t(u,e,r)&&(a[o++]=u)}return a}},18421:r=>{r.exports=function(r,t){for(var e=-1,n=t.length,o=r.length;++e<n;)r[o+e]=t[e];return r}},54639:(r,t,e)=>{var n=e(27841),o=e(63225);r.exports=function(r,t){return r&&n(t,o(t),r)}},24587:(r,t,e)=>{var n=e(27841),o=e(41291);r.exports=function(r,t){return r&&n(t,o(t),r)}},57643:(r,t,e)=>{var n=e(70959),o=e(34111),a=e(90879),u=e(54639),i=e(24587),s=e(68288),c=e(59430),b=e(62324),f=e(55063),p=e(55788),v=e(40367),h=e(42417),l=e(45393),d=e(50670),g=e(13632),y=e(43670),j=e(22343),x=e(86043),m=e(70071),w=e(51751),A=e(63225),M=e(41291),N="[object Arguments]",O="[object Function]",I="[object Object]",S={};S[N]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[I]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[O]=S["[object WeakMap]"]=!1,r.exports=function r(t,e,z,F,k,E){var R,U=1&e,D=2&e,P=4&e;if(z&&(R=k?z(t,F,k,E):z(t)),void 0!==R)return R;if(!m(t))return t;var H=y(t);if(H){if(R=l(t),!U)return c(t,R)}else{var V=h(t),$=V==O||"[object GeneratorFunction]"==V;if(j(t))return s(t,U);if(V==I||V==N||$&&!k){if(R=D||$?{}:g(t),!U)return D?f(t,i(R,t)):b(t,u(R,t))}else{if(!S[V])return k?t:{};R=d(t,V,U)}}E||(E=new n);var B=E.get(t);if(B)return B;E.set(t,R),w(t)?t.forEach((function(n){R.add(r(n,e,z,n,t,E))})):x(t)&&t.forEach((function(n,o){R.set(o,r(n,e,z,o,t,E))}));var C=H?void 0:(P?D?v:p:D?M:A)(t);return o(C||t,(function(n,o){C&&(n=t[o=n]),a(R,o,r(n,e,z,o,t,E))})),R}},60891:(r,t,e)=>{var n=e(18421),o=e(43670);r.exports=function(r,t,e){var a=t(r);return o(r)?a:n(a,e(r))}},81624:(r,t,e)=>{var n=e(42417),o=e(44939);r.exports=function(r){return o(r)&&"[object Map]"==n(r)}},67417:(r,t,e)=>{var n=e(42417),o=e(44939);r.exports=function(r){return o(r)&&"[object Set]"==n(r)}},27521:(r,t,e)=>{var n=e(62803),o=e(63865),a=Object.prototype.hasOwnProperty;r.exports=function(r){if(!n(r))return o(r);var t=[];for(var e in Object(r))a.call(r,e)&&"constructor"!=e&&t.push(e);return t}},41734:(r,t,e)=>{var n=e(14899);r.exports=function(r,t){var e=t?n(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.byteLength)}},90343:r=>{var t=/\w*$/;r.exports=function(r){var e=new r.constructor(r.source,t.exec(r));return e.lastIndex=r.lastIndex,e}},54871:(r,t,e)=>{var n=e(52773),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;r.exports=function(r){return a?Object(a.call(r)):{}}},62324:(r,t,e)=>{var n=e(27841),o=e(97976);r.exports=function(r,t){return n(r,o(r),t)}},55063:(r,t,e)=>{var n=e(27841),o=e(80569);r.exports=function(r,t){return n(r,o(r),t)}},55788:(r,t,e)=>{var n=e(60891),o=e(97976),a=e(63225);r.exports=function(r){return n(r,a,o)}},40367:(r,t,e)=>{var n=e(60891),o=e(80569),a=e(41291);r.exports=function(r){return n(r,a,o)}},97976:(r,t,e)=>{var n=e(56523),o=e(64043),a=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,i=u?function(r){return null==r?[]:(r=Object(r),n(u(r),(function(t){return a.call(r,t)})))}:o;r.exports=i},80569:(r,t,e)=>{var n=e(18421),o=e(62107),a=e(97976),u=e(64043),i=Object.getOwnPropertySymbols?function(r){for(var t=[];r;)n(t,a(r)),r=o(r);return t}:u;r.exports=i},42417:(r,t,e)=>{var n=e(49940),o=e(4804),a=e(87114),u=e(10689),i=e(85284),s=e(1185),c=e(51214),b="[object Map]",f="[object Promise]",p="[object Set]",v="[object WeakMap]",h="[object DataView]",l=c(n),d=c(o),g=c(a),y=c(u),j=c(i),x=s;(n&&x(new n(new ArrayBuffer(1)))!=h||o&&x(new o)!=b||a&&x(a.resolve())!=f||u&&x(new u)!=p||i&&x(new i)!=v)&&(x=function(r){var t=s(r),e="[object Object]"==t?r.constructor:void 0,n=e?c(e):"";if(n)switch(n){case l:return h;case d:return b;case g:return f;case y:return p;case j:return v}return t}),r.exports=x},45393:r=>{var t=Object.prototype.hasOwnProperty;r.exports=function(r){var e=r.length,n=new r.constructor(e);return e&&"string"==typeof r[0]&&t.call(r,"index")&&(n.index=r.index,n.input=r.input),n}},50670:(r,t,e)=>{var n=e(14899),o=e(41734),a=e(90343),u=e(54871),i=e(31234);r.exports=function(r,t,e){var s=r.constructor;switch(t){case"[object ArrayBuffer]":return n(r);case"[object Boolean]":case"[object Date]":return new s(+r);case"[object DataView]":return o(r,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(r,e);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(r);case"[object RegExp]":return a(r);case"[object Set]":return new s;case"[object Symbol]":return u(r)}}},63865:(r,t,e)=>{var n=e(15290)(Object.keys,Object);r.exports=n},79931:(r,t,e)=>{var n=e(57643);r.exports=function(r){return n(r,5)}},86043:(r,t,e)=>{var n=e(81624),o=e(19081),a=e(51985),u=a&&a.isMap,i=u?o(u):n;r.exports=i},51751:(r,t,e)=>{var n=e(67417),o=e(19081),a=e(51985),u=a&&a.isSet,i=u?o(u):n;r.exports=i},63225:(r,t,e)=>{var n=e(28083),o=e(27521),a=e(16175);r.exports=function(r){return a(r)?n(r):o(r)}},64043:r=>{r.exports=function(){return[]}},16765:(r,t,e)=>{"use strict";e.d(t,{Vi:()=>z,l7:()=>k});var n={grad:.9,turn:360,rad:360/(2*Math.PI)},o=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},a=function(r,t,e){return void 0===t&&(t=0),void 0===e&&(e=Math.pow(10,t)),Math.round(e*r)/e+0},u=function(r,t,e){return void 0===t&&(t=0),void 0===e&&(e=1),r>e?e:r>t?r:t},i=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},s=function(r){return{r:u(r.r,0,255),g:u(r.g,0,255),b:u(r.b,0,255),a:u(r.a)}},c=function(r){return{r:a(r.r),g:a(r.g),b:a(r.b),a:a(r.a,3)}},b=/^#([0-9a-f]{3,8})$/i,f=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},p=function(r){var t=r.r,e=r.g,n=r.b,o=r.a,a=Math.max(t,e,n),u=a-Math.min(t,e,n),i=u?a===t?(e-n)/u:a===e?2+(n-t)/u:4+(t-e)/u:0;return{h:60*(i<0?i+6:i),s:a?u/a*100:0,v:a/255*100,a:o}},v=function(r){var t=r.h,e=r.s,n=r.v,o=r.a;t=t/360*6,e/=100,n/=100;var a=Math.floor(t),u=n*(1-e),i=n*(1-(t-a)*e),s=n*(1-(1-t+a)*e),c=a%6;return{r:255*[n,i,u,u,s,n][c],g:255*[s,n,n,i,u,u][c],b:255*[u,u,s,n,n,i][c],a:o}},h=function(r){return{h:i(r.h),s:u(r.s,0,100),l:u(r.l,0,100),a:u(r.a)}},l=function(r){return{h:a(r.h),s:a(r.s),l:a(r.l),a:a(r.a,3)}},d=function(r){return v((e=(t=r).s,{h:t.h,s:(e*=((n=t.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:t.a}));var t,e,n},g=function(r){return{h:(t=p(r)).h,s:(o=(200-(e=t.s))*(n=t.v)/100)>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,e,n,o},y=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,j=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,x=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,w={string:[[function(r){var t=b.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?a(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?a(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=x.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:s({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(r){var t=y.exec(r)||j.exec(r);if(!t)return null;var e,o,a=h({h:(e=t[1],o=t[2],void 0===o&&(o="deg"),Number(e)*(n[o]||1)),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)});return d(a)},"hsl"]],object:[[function(r){var t=r.r,e=r.g,n=r.b,a=r.a,u=void 0===a?1:a;return o(t)&&o(e)&&o(n)?s({r:Number(t),g:Number(e),b:Number(n),a:Number(u)}):null},"rgb"],[function(r){var t=r.h,e=r.s,n=r.l,a=r.a,u=void 0===a?1:a;if(!o(t)||!o(e)||!o(n))return null;var i=h({h:Number(t),s:Number(e),l:Number(n),a:Number(u)});return d(i)},"hsl"],[function(r){var t=r.h,e=r.s,n=r.v,a=r.a,s=void 0===a?1:a;if(!o(t)||!o(e)||!o(n))return null;var c=function(r){return{h:i(r.h),s:u(r.s,0,100),v:u(r.v,0,100),a:u(r.a)}}({h:Number(t),s:Number(e),v:Number(n),a:Number(s)});return v(c)},"hsv"]]},A=function(r,t){for(var e=0;e<t.length;e++){var n=t[e][0](r);if(n)return[n,t[e][1]]}return[null,void 0]},M=function(r){return"string"==typeof r?A(r.trim(),w.string):"object"==typeof r&&null!==r?A(r,w.object):[null,void 0]},N=function(r,t){var e=g(r);return{h:e.h,s:u(e.s+100*t,0,100),l:e.l,a:e.a}},O=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},I=function(r,t){var e=g(r);return{h:e.h,s:e.s,l:u(e.l+100*t,0,100),a:e.a}},S=function(){function r(r){this.parsed=M(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return a(O(this.rgba),2)},r.prototype.isDark=function(){return O(this.rgba)<.5},r.prototype.isLight=function(){return O(this.rgba)>=.5},r.prototype.toHex=function(){return t=(r=c(this.rgba)).r,e=r.g,n=r.b,u=(o=r.a)<1?f(a(255*o)):"","#"+f(t)+f(e)+f(n)+u;var r,t,e,n,o,u},r.prototype.toRgb=function(){return c(this.rgba)},r.prototype.toRgbString=function(){return t=(r=c(this.rgba)).r,e=r.g,n=r.b,(o=r.a)<1?"rgba("+t+", "+e+", "+n+", "+o+")":"rgb("+t+", "+e+", "+n+")";var r,t,e,n,o},r.prototype.toHsl=function(){return l(g(this.rgba))},r.prototype.toHslString=function(){return t=(r=l(g(this.rgba))).h,e=r.s,n=r.l,(o=r.a)<1?"hsla("+t+", "+e+"%, "+n+"%, "+o+")":"hsl("+t+", "+e+"%, "+n+"%)";var r,t,e,n,o},r.prototype.toHsv=function(){return r=p(this.rgba),{h:a(r.h),s:a(r.s),v:a(r.v),a:a(r.a,3)};var r},r.prototype.invert=function(){return z({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),z(N(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),z(N(this.rgba,-r))},r.prototype.grayscale=function(){return z(N(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),z(I(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),z(I(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?z({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):a(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=g(this.rgba);return"number"==typeof r?z({h:r,s:t.s,l:t.l,a:t.a}):a(t.h)},r.prototype.isEqual=function(r){return this.toHex()===z(r).toHex()},r}(),z=function(r){return r instanceof S?r:new S(r)},F=[],k=function(r){r.forEach((function(r){F.indexOf(r)<0&&(r(S,w),F.push(r))}))}},40241:(r,t,e)=>{"use strict";e.d(t,{Z:()=>a});var n=function(r){var t=r/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},o=function(r){return.2126*n(r.r)+.7152*n(r.g)+.0722*n(r.b)};function a(r){r.prototype.luminance=function(){return r=o(this.rgba),void 0===(t=2)&&(t=0),void 0===e&&(e=Math.pow(10,t)),Math.round(e*r)/e+0;var r,t,e},r.prototype.contrast=function(t){void 0===t&&(t="#FFF");var e,n,a,u,i,s,c,b=t instanceof r?t:new r(t);return u=this.rgba,i=b.toRgb(),e=(s=o(u))>(c=o(i))?(s+.05)/(c+.05):(c+.05)/(s+.05),void 0===(n=2)&&(n=0),void 0===a&&(a=Math.pow(10,n)),Math.floor(a*e)/a+0},r.prototype.isReadable=function(r,t){return void 0===r&&(r="#FFF"),void 0===t&&(t={}),this.contrast(r)>=(u=void 0===(a=(e=t).size)?"normal":a,"AAA"===(o=void 0===(n=e.level)?"AA":n)&&"normal"===u?7:"AA"===o&&"large"===u?3:4.5);var e,n,o,a,u}}},57426:(r,t,e)=>{"use strict";e.d(t,{Z:()=>h});var n=function(r,t,e){return void 0===t&&(t=0),void 0===e&&(e=1),r>e?e:r>t?r:t},o=function(r){var t=r/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},a=function(r){return 255*(r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r)},u=96.422,i=82.521,s=function(r){var t,e,o=.9555766*(t=r).x+-.0230393*t.y+.0631636*t.z,u=-.0282895*t.x+1.0099416*t.y+.0210077*t.z,i=.0122982*t.x+-.020483*t.y+1.3299098*t.z;return e={r:a(.032404542*o-.015371385*u-.004985314*i),g:a(-.00969266*o+.018760108*u+41556e-8*i),b:a(556434e-9*o-.002040259*u+.010572252*i),a:r.a},{r:n(e.r,0,255),g:n(e.g,0,255),b:n(e.b,0,255),a:n(e.a)}},c=function(r){var t=o(r.r),e=o(r.g),a=o(r.b);return function(r){return{x:n(r.x,0,u),y:n(r.y,0,100),z:n(r.z,0,i),a:n(r.a)}}(function(r){return{x:1.0478112*r.x+.0228866*r.y+-.050127*r.z,y:.0295424*r.x+.9904844*r.y+-.0170491*r.z,z:-.0092345*r.x+.0150436*r.y+.7521316*r.z,a:r.a}}({x:100*(.4124564*t+.3575761*e+.1804375*a),y:100*(.2126729*t+.7151522*e+.072175*a),z:100*(.0193339*t+.119192*e+.9503041*a),a:r.a}))},b=216/24389,f=24389/27,p=function(r){var t=c(r),e=t.x/u,n=t.y/100,o=t.z/i;return e=e>b?Math.cbrt(e):(f*e+16)/116,{l:116*(n=n>b?Math.cbrt(n):(f*n+16)/116)-16,a:500*(e-n),b:200*(n-(o=o>b?Math.cbrt(o):(f*o+16)/116)),alpha:t.a}},v=function(r,t,e){var o,a=p(r),c=p(t);return function(r){var t=(r.l+16)/116,e=r.a/500+t,n=t-r.b/200;return s({x:(Math.pow(e,3)>b?Math.pow(e,3):(116*e-16)/f)*u,y:100*(r.l>8?Math.pow((r.l+16)/116,3):r.l/f),z:(Math.pow(n,3)>b?Math.pow(n,3):(116*n-16)/f)*i,a:r.alpha})}({l:n((o={l:a.l*(1-e)+c.l*e,a:a.a*(1-e)+c.a*e,b:a.b*(1-e)+c.b*e,alpha:a.alpha*(1-e)+c.alpha*e}).l,0,400),a:o.a,b:o.b,alpha:n(o.alpha)})};function h(r){function t(r,t,e){void 0===e&&(e=5);for(var n=[],o=1/(e-1),a=0;a<=e-1;a++)n.push(r.mix(t,o*a));return n}r.prototype.mix=function(t,e){void 0===e&&(e=.5);var n=t instanceof r?t:new r(t),o=v(this.toRgb(),n.toRgb(),e);return new r(o)},r.prototype.tints=function(r){return t(this,"#fff",r)},r.prototype.shades=function(r){return t(this,"#000",r)},r.prototype.tones=function(r){return t(this,"#808080",r)}}}}]);