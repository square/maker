(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[353],{9940:(t,r,e)=>{var a=e(3203)(e(4362),"DataView");t.exports=a},7114:(t,r,e)=>{var a=e(3203)(e(4362),"Promise");t.exports=a},689:(t,r,e)=>{var a=e(3203)(e(4362),"Set");t.exports=a},5284:(t,r,e)=>{var a=e(3203)(e(4362),"WeakMap");t.exports=a},4111:t=>{t.exports=function(t,r){for(var e=-1,a=null==t?0:t.length;++e<a&&!1!==r(t[e],e,t););return t}},6523:t=>{t.exports=function(t,r){for(var e=-1,a=null==t?0:t.length,n=0,o=[];++e<a;){var c=t[e];r(c,e,t)&&(o[n++]=c)}return o}},8421:t=>{t.exports=function(t,r){for(var e=-1,a=r.length,n=t.length;++e<a;)t[n+e]=r[e];return t}},4639:(t,r,e)=>{var a=e(7841),n=e(3225);t.exports=function(t,r){return t&&a(r,n(r),t)}},4587:(t,r,e)=>{var a=e(7841),n=e(1291);t.exports=function(t,r){return t&&a(r,n(r),t)}},7643:(t,r,e)=>{var a=e(959),n=e(4111),o=e(879),c=e(4639),u=e(4587),p=e(8288),i=e(9430),b=e(2324),s=e(5063),f=e(5788),h=e(367),v=e(2417),l=e(5393),y=e(670),w=e(3632),M=e(3670),x=e(2343),j=e(6043),d=e(71),g=e(1751),z=e(3225),A=e(1291),m="[object Arguments]",O="[object Function]",S="[object Object]",I={};I[m]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[S]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[O]=I["[object WeakMap]"]=!1,t.exports=function t(r,e,k,F,P,U){var D,E=1&e,N=2&e,B=4&e;if(k&&(D=P?k(r,F,P,U):k(r)),void 0!==D)return D;if(!d(r))return r;var C=M(r);if(C){if(D=l(r),!E)return i(r,D)}else{var L=v(r),R=L==O||"[object GeneratorFunction]"==L;if(x(r))return p(r,E);if(L==S||L==m||R&&!P){if(D=N||R?{}:w(r),!E)return N?s(r,u(D,r)):b(r,c(D,r))}else{if(!I[L])return P?r:{};D=y(r,L,E)}}U||(U=new a);var V=U.get(r);if(V)return V;U.set(r,D),g(r)?r.forEach((function(a){D.add(t(a,e,k,a,r,U))})):j(r)&&r.forEach((function(a,n){D.set(n,t(a,e,k,n,r,U))}));var _=C?void 0:(B?N?h:f:N?A:z)(r);return n(_||r,(function(a,n){_&&(a=r[n=a]),o(D,n,t(a,e,k,n,r,U))})),D}},891:(t,r,e)=>{var a=e(8421),n=e(3670);t.exports=function(t,r,e){var o=r(t);return n(t)?o:a(o,e(t))}},1624:(t,r,e)=>{var a=e(2417),n=e(4939);t.exports=function(t){return n(t)&&"[object Map]"==a(t)}},7417:(t,r,e)=>{var a=e(2417),n=e(4939);t.exports=function(t){return n(t)&&"[object Set]"==a(t)}},7521:(t,r,e)=>{var a=e(2803),n=e(3865),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!a(t))return n(t);var r=[];for(var e in Object(t))o.call(t,e)&&"constructor"!=e&&r.push(e);return r}},1734:(t,r,e)=>{var a=e(4899);t.exports=function(t,r){var e=r?a(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}},343:t=>{var r=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,r.exec(t));return e.lastIndex=t.lastIndex,e}},4871:(t,r,e)=>{var a=e(2773),n=a?a.prototype:void 0,o=n?n.valueOf:void 0;t.exports=function(t){return o?Object(o.call(t)):{}}},2324:(t,r,e)=>{var a=e(7841),n=e(7976);t.exports=function(t,r){return a(t,n(t),r)}},5063:(t,r,e)=>{var a=e(7841),n=e(569);t.exports=function(t,r){return a(t,n(t),r)}},5788:(t,r,e)=>{var a=e(891),n=e(7976),o=e(3225);t.exports=function(t){return a(t,o,n)}},367:(t,r,e)=>{var a=e(891),n=e(569),o=e(1291);t.exports=function(t){return a(t,o,n)}},7976:(t,r,e)=>{var a=e(6523),n=e(4043),o=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols,u=c?function(t){return null==t?[]:(t=Object(t),a(c(t),(function(r){return o.call(t,r)})))}:n;t.exports=u},569:(t,r,e)=>{var a=e(8421),n=e(2107),o=e(7976),c=e(4043),u=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)a(r,o(t)),t=n(t);return r}:c;t.exports=u},2417:(t,r,e)=>{var a=e(9940),n=e(4804),o=e(7114),c=e(689),u=e(5284),p=e(1185),i=e(1214),b="[object Map]",s="[object Promise]",f="[object Set]",h="[object WeakMap]",v="[object DataView]",l=i(a),y=i(n),w=i(o),M=i(c),x=i(u),j=p;(a&&j(new a(new ArrayBuffer(1)))!=v||n&&j(new n)!=b||o&&j(o.resolve())!=s||c&&j(new c)!=f||u&&j(new u)!=h)&&(j=function(t){var r=p(t),e="[object Object]"==r?t.constructor:void 0,a=e?i(e):"";if(a)switch(a){case l:return v;case y:return b;case w:return s;case M:return f;case x:return h}return r}),t.exports=j},5393:t=>{var r=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,a=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(a.index=t.index,a.input=t.input),a}},670:(t,r,e)=>{var a=e(4899),n=e(1734),o=e(343),c=e(4871),u=e(1234);t.exports=function(t,r,e){var p=t.constructor;switch(r){case"[object ArrayBuffer]":return a(t);case"[object Boolean]":case"[object Date]":return new p(+t);case"[object DataView]":return n(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(t,e);case"[object Map]":return new p;case"[object Number]":case"[object String]":return new p(t);case"[object RegExp]":return o(t);case"[object Set]":return new p;case"[object Symbol]":return c(t)}}},3865:(t,r,e)=>{var a=e(5290)(Object.keys,Object);t.exports=a},9931:(t,r,e)=>{var a=e(7643);t.exports=function(t){return a(t,5)}},6043:(t,r,e)=>{var a=e(1624),n=e(9081),o=e(1985),c=o&&o.isMap,u=c?n(c):a;t.exports=u},1751:(t,r,e)=>{var a=e(7417),n=e(9081),o=e(1985),c=o&&o.isSet,u=c?n(c):a;t.exports=u},3225:(t,r,e)=>{var a=e(8083),n=e(7521),o=e(6175);t.exports=function(t){return o(t)?a(t):n(t)}},4043:t=>{t.exports=function(){return[]}},2942:(t,r,e)=>{"use strict";e.d(r,{Z:()=>y});var a=function(t){return"string"==typeof t?t.length>0:"number"==typeof t},n=function(t,r,e){return void 0===r&&(r=0),void 0===e&&(e=Math.pow(10,r)),Math.round(e*t)/e+0},o=function(t,r,e){return void 0===r&&(r=0),void 0===e&&(e=1),t>e?e:t>r?t:r},c=function(t){var r=t/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},u=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},p=96.422,i=82.521,b=function(t){var r,e,a=.9555766*(r=t).x+-.0230393*r.y+.0631636*r.z,n=-.0282895*r.x+1.0099416*r.y+.0210077*r.z,c=.0122982*r.x+-.020483*r.y+1.3299098*r.z;return e={r:u(.032404542*a-.015371385*n-.004985314*c),g:u(-.00969266*a+.018760108*n+41556e-8*c),b:u(556434e-9*a-.002040259*n+.010572252*c),a:t.a},{r:o(e.r,0,255),g:o(e.g,0,255),b:o(e.b,0,255),a:o(e.a)}},s=function(t){var r=c(t.r),e=c(t.g),a=c(t.b);return function(t){return{x:o(t.x,0,p),y:o(t.y,0,100),z:o(t.z,0,i),a:o(t.a)}}(function(t){return{x:1.0478112*t.x+.0228866*t.y+-.050127*t.z,y:.0295424*t.x+.9904844*t.y+-.0170491*t.z,z:-.0092345*t.x+.0150436*t.y+.7521316*t.z,a:t.a}}({x:100*(.4124564*r+.3575761*e+.1804375*a),y:100*(.2126729*r+.7151522*e+.072175*a),z:100*(.0193339*r+.119192*e+.9503041*a),a:t.a}))},f=216/24389,h=24389/27,v=function(t){var r=t.l,e=t.a,n=t.b,c=t.alpha,u=void 0===c?1:c;if(!a(r)||!a(e)||!a(n))return null;var p=function(t){return{l:o(t.l,0,400),a:t.a,b:t.b,alpha:o(t.alpha)}}({l:Number(r),a:Number(e),b:Number(n),alpha:Number(u)});return l(p)},l=function(t){var r=(t.l+16)/116,e=t.a/500+r,a=r-t.b/200;return b({x:(Math.pow(e,3)>f?Math.pow(e,3):(116*e-16)/h)*p,y:100*(t.l>8?Math.pow((t.l+16)/116,3):t.l/h),z:(Math.pow(a,3)>f?Math.pow(a,3):(116*a-16)/h)*i,a:t.alpha})};function y(t,r){t.prototype.toLab=function(){return a=(r=s(this.rgba)).y/100,o=r.z/i,e=(e=r.x/p)>f?Math.cbrt(e):(h*e+16)/116,t={l:116*(a=a>f?Math.cbrt(a):(h*a+16)/116)-16,a:500*(e-a),b:200*(a-(o=o>f?Math.cbrt(o):(h*o+16)/116)),alpha:r.a},{l:n(t.l,2),a:n(t.a,2),b:n(t.b,2),alpha:n(t.alpha,3)};var t,r,e,a,o},t.prototype.delta=function(r){void 0===r&&(r="#FFF");var e=r instanceof t?r:new t(r),a=function(t,r){var e=t.l,a=t.a,n=t.b,o=r.l,c=r.a,u=r.b,p=180/Math.PI,i=Math.PI/180,b=Math.pow(Math.pow(a,2)+Math.pow(n,2),.5),s=Math.pow(Math.pow(c,2)+Math.pow(u,2),.5),f=(e+o)/2,h=Math.pow((b+s)/2,7),v=.5*(1-Math.pow(h/(h+Math.pow(25,7)),.5)),l=a*(1+v),y=c*(1+v),w=Math.pow(Math.pow(l,2)+Math.pow(n,2),.5),M=Math.pow(Math.pow(y,2)+Math.pow(u,2),.5),x=(w+M)/2,j=0===l&&0===n?0:Math.atan2(n,l)*p,d=0===y&&0===u?0:Math.atan2(u,y)*p;j<0&&(j+=360),d<0&&(d+=360);var g=d-j,z=Math.abs(d-j);z>180&&d<=j?g+=360:z>180&&d>j&&(g-=360);var A=j+d;z<=180?A/=2:A=(j+d<360?A+360:A-360)/2;var m=1-.17*Math.cos(i*(A-30))+.24*Math.cos(2*i*A)+.32*Math.cos(i*(3*A+6))-.2*Math.cos(i*(4*A-63)),O=o-e,S=M-w,I=2*Math.sin(i*g/2)*Math.pow(w*M,.5),k=1+.015*Math.pow(f-50,2)/Math.pow(20+Math.pow(f-50,2),.5),F=1+.045*x,P=1+.015*x*m,U=30*Math.exp(-1*Math.pow((A-275)/25,2)),D=-2*Math.pow(h/(h+Math.pow(25,7)),.5)*Math.sin(2*i*U);return Math.pow(Math.pow(O/1/k,2)+Math.pow(S/1/F,2)+Math.pow(I/1/P,2)+D*S*I/(1*F*1*P),.5)}(this.toLab(),e.toLab())/100;return o(n(a,3))},r.object.push([v,"lab"])}},7426:(t,r,e)=>{"use strict";e.d(r,{Z:()=>v});var a=function(t,r,e){return void 0===r&&(r=0),void 0===e&&(e=1),t>e?e:t>r?t:r},n=function(t){var r=t/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},o=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},c=96.422,u=82.521,p=function(t){var r,e,n=.9555766*(r=t).x+-.0230393*r.y+.0631636*r.z,c=-.0282895*r.x+1.0099416*r.y+.0210077*r.z,u=.0122982*r.x+-.020483*r.y+1.3299098*r.z;return e={r:o(.032404542*n-.015371385*c-.004985314*u),g:o(-.00969266*n+.018760108*c+41556e-8*u),b:o(556434e-9*n-.002040259*c+.010572252*u),a:t.a},{r:a(e.r,0,255),g:a(e.g,0,255),b:a(e.b,0,255),a:a(e.a)}},i=function(t){var r=n(t.r),e=n(t.g),o=n(t.b);return function(t){return{x:a(t.x,0,c),y:a(t.y,0,100),z:a(t.z,0,u),a:a(t.a)}}(function(t){return{x:1.0478112*t.x+.0228866*t.y+-.050127*t.z,y:.0295424*t.x+.9904844*t.y+-.0170491*t.z,z:-.0092345*t.x+.0150436*t.y+.7521316*t.z,a:t.a}}({x:100*(.4124564*r+.3575761*e+.1804375*o),y:100*(.2126729*r+.7151522*e+.072175*o),z:100*(.0193339*r+.119192*e+.9503041*o),a:t.a}))},b=216/24389,s=24389/27,f=function(t){var r=i(t),e=r.x/c,a=r.y/100,n=r.z/u;return e=e>b?Math.cbrt(e):(s*e+16)/116,{l:116*(a=a>b?Math.cbrt(a):(s*a+16)/116)-16,a:500*(e-a),b:200*(a-(n=n>b?Math.cbrt(n):(s*n+16)/116)),alpha:r.a}},h=function(t,r,e){var n,o=f(t),i=f(r);return function(t){var r=(t.l+16)/116,e=t.a/500+r,a=r-t.b/200;return p({x:(Math.pow(e,3)>b?Math.pow(e,3):(116*e-16)/s)*c,y:100*(t.l>8?Math.pow((t.l+16)/116,3):t.l/s),z:(Math.pow(a,3)>b?Math.pow(a,3):(116*a-16)/s)*u,a:t.alpha})}({l:a((n={l:o.l*(1-e)+i.l*e,a:o.a*(1-e)+i.a*e,b:o.b*(1-e)+i.b*e,alpha:o.alpha*(1-e)+i.alpha*e}).l,0,400),a:n.a,b:n.b,alpha:a(n.alpha)})};function v(t){function r(t,r,e){void 0===e&&(e=5);for(var a=[],n=1/(e-1),o=0;o<=e-1;o++)a.push(t.mix(r,n*o));return a}t.prototype.mix=function(r,e){void 0===e&&(e=.5);var a=r instanceof t?r:new t(r),n=h(this.toRgb(),a.toRgb(),e);return new t(n)},t.prototype.tints=function(t){return r(this,"#fff",t)},t.prototype.shades=function(t){return r(this,"#000",t)},t.prototype.tones=function(t){return r(this,"#808080",t)}}}}]);