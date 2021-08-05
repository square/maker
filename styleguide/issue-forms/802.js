/*! For license information please see 802.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[802],{6802:function(r){r.exports=function(){"use strict";for(var r=function(r,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),r<e?e:r>n?n:r},e={},n=0,t=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];n<t.length;n+=1){var a=t[n];e["[object "+a+"]"]=a.toLowerCase()}var f=function(r){return e[Object.prototype.toString.call(r)]||"object"},o=Math.PI,u={clip_rgb:function(e){e._clipped=!1,e._unclipped=e.slice(0);for(var n=0;n<=3;n++)n<3?((e[n]<0||e[n]>255)&&(e._clipped=!0),e[n]=r(e[n],0,255)):3===n&&(e[n]=r(e[n],0,1));return e},limit:r,type:f,unpack:function(r,e){return void 0===e&&(e=null),r.length>=3?Array.prototype.slice.call(r):"object"==f(r[0])&&e?e.split("").filter((function(e){return void 0!==r[0][e]})).map((function(e){return r[0][e]})):r[0]},last:function(r){if(r.length<2)return null;var e=r.length-1;return"string"==f(r[e])?r[e].toLowerCase():null},PI:o,TWOPI:2*o,PITHIRD:o/3,DEG2RAD:o/180,RAD2DEG:180/o},c={format:{},autodetect:[]},i=u.last,l=u.clip_rgb,h=u.type,s=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=this;if("object"===h(r[0])&&r[0].constructor&&r[0].constructor===this.constructor)return r[0];var t=i(r),a=!1;if(!t){a=!0,c.sorted||(c.autodetect=c.autodetect.sort((function(r,e){return e.p-r.p})),c.sorted=!0);for(var f=0,o=c.autodetect;f<o.length;f+=1){var u=o[f];if(t=u.test.apply(u,r))break}}if(!c.format[t])throw new Error("unknown format: "+r);var s=c.format[t].apply(null,a?r:r.slice(0,-1));n._rgb=l(s),3===n._rgb.length&&n._rgb.push(1)};s.prototype.toString=function(){return"function"==h(this.hex)?this.hex():"["+this._rgb.join(",")+"]"};var d=s,b=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(b.Color,[null].concat(r)))};b.Color=d,b.version="2.1.0";var p=b,g=u.unpack,v=Math.max,m=u.unpack,y=u.unpack,w=u.type;d.prototype.cmyk=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=g(r,"rgb"),t=n[0],a=n[1],f=n[2],o=1-v(t/=255,v(a/=255,f/=255)),u=o<1?1/(1-o):0;return[(1-t-o)*u,(1-a-o)*u,(1-f-o)*u,o]}(this._rgb)},p.cmyk=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["cmyk"])))},c.format.cmyk=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=m(r,"cmyk"))[0],t=r[1],a=r[2],f=r[3],o=r.length>4?r[4]:1;return 1===f?[0,0,0,o]:[n>=1?0:255*(1-n)*(1-f),t>=1?0:255*(1-t)*(1-f),a>=1?0:255*(1-a)*(1-f),o]},c.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=y(r,"cmyk"),"array"===w(r)&&4===r.length)return"cmyk"}});var k=u.unpack,M=u.last,N=function(r){return Math.round(100*r)/100},_=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=k(r,"hsla"),t=M(r)||"lsa";return n[0]=N(n[0]||0),n[1]=N(100*n[1])+"%",n[2]=N(100*n[2])+"%","hsla"===t||n.length>3&&n[3]<1?(n[3]=n.length>3?n[3]:1,t="hsla"):n.length=3,t+"("+n.join(",")+")"},x=u.unpack,A=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=x(r,"rgba"))[0],t=r[1],a=r[2];n/=255,t/=255,a/=255;var f,o,u=Math.min(n,t,a),c=Math.max(n,t,a),i=(c+u)/2;return c===u?(f=0,o=Number.NaN):f=i<.5?(c-u)/(c+u):(c-u)/(2-c-u),n==c?o=(t-a)/(c-u):t==c?o=2+(a-n)/(c-u):a==c&&(o=4+(n-t)/(c-u)),(o*=60)<0&&(o+=360),r.length>3&&void 0!==r[3]?[o,f,i,r[3]]:[o,f,i]},E=u.unpack,P=u.last,F=Math.round,O=u.unpack,G=Math.round,j=function(){for(var r,e=[],n=arguments.length;n--;)e[n]=arguments[n];var t,a,f,o=(e=O(e,"hsl"))[0],u=e[1],c=e[2];if(0===u)t=a=f=255*c;else{var i=[0,0,0],l=[0,0,0],h=c<.5?c*(1+u):c+u-c*u,s=2*c-h,d=o/360;i[0]=d+1/3,i[1]=d,i[2]=d-1/3;for(var b=0;b<3;b++)i[b]<0&&(i[b]+=1),i[b]>1&&(i[b]-=1),6*i[b]<1?l[b]=s+6*(h-s)*i[b]:2*i[b]<1?l[b]=h:3*i[b]<2?l[b]=s+(h-s)*(2/3-i[b])*6:l[b]=s;t=(r=[G(255*l[0]),G(255*l[1]),G(255*l[2])])[0],a=r[1],f=r[2]}return e.length>3?[t,a,f,e[3]]:[t,a,f,1]},q=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,L=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,R=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,C=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,I=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,B=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,D=Math.round,S=function(r){var e;if(r=r.toLowerCase().trim(),c.format.named)try{return c.format.named(r)}catch(r){}if(e=r.match(q)){for(var n=e.slice(1,4),t=0;t<3;t++)n[t]=+n[t];return n[3]=1,n}if(e=r.match(L)){for(var a=e.slice(1,5),f=0;f<4;f++)a[f]=+a[f];return a}if(e=r.match(R)){for(var o=e.slice(1,4),u=0;u<3;u++)o[u]=D(2.55*o[u]);return o[3]=1,o}if(e=r.match(C)){for(var i=e.slice(1,5),l=0;l<3;l++)i[l]=D(2.55*i[l]);return i[3]=+i[3],i}if(e=r.match(I)){var h=e.slice(1,4);h[1]*=.01,h[2]*=.01;var s=j(h);return s[3]=1,s}if(e=r.match(B)){var d=e.slice(1,4);d[1]*=.01,d[2]*=.01;var b=j(d);return b[3]=+e[4],b}};S.test=function(r){return q.test(r)||L.test(r)||R.test(r)||C.test(r)||I.test(r)||B.test(r)};var $=S,Y=u.type;d.prototype.css=function(r){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=E(r,"rgba"),t=P(r)||"rgb";return"hsl"==t.substr(0,3)?_(A(n),t):(n[0]=F(n[0]),n[1]=F(n[1]),n[2]=F(n[2]),("rgba"===t||n.length>3&&n[3]<1)&&(n[3]=n.length>3?n[3]:1,t="rgba"),t+"("+n.slice(0,"rgb"===t?3:4).join(",")+")")}(this._rgb,r)},p.css=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["css"])))},c.format.css=$,c.autodetect.push({p:5,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===Y(r)&&$.test(r))return"css"}});var z=u.unpack;c.format.gl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=z(r,"rgba");return n[0]*=255,n[1]*=255,n[2]*=255,n},p.gl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["gl"])))},d.prototype.gl=function(){var r=this._rgb;return[r[0]/255,r[1]/255,r[2]/255,r[3]]};var T=u.unpack,U=u.unpack,V=Math.floor,W=u.unpack,X=u.type;d.prototype.hcg=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t=T(r,"rgb"),a=t[0],f=t[1],o=t[2],u=Math.min(a,f,o),c=Math.max(a,f,o),i=c-u,l=100*i/255,h=u/(255-i)*100;return 0===i?n=Number.NaN:(a===c&&(n=(f-o)/i),f===c&&(n=2+(o-a)/i),o===c&&(n=4+(a-f)/i),(n*=60)<0&&(n+=360)),[n,l,h]}(this._rgb)},p.hcg=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hcg"])))},c.format.hcg=function(){for(var r,e,n,t,a,f,o=[],u=arguments.length;u--;)o[u]=arguments[u];var c,i,l,h=(o=U(o,"hcg"))[0],s=o[1],d=o[2];d*=255;var b=255*s;if(0===s)c=i=l=d;else{360===h&&(h=0),h>360&&(h-=360),h<0&&(h+=360);var p=V(h/=60),g=h-p,v=d*(1-s),m=v+b*(1-g),y=v+b*g,w=v+b;switch(p){case 0:c=(r=[w,y,v])[0],i=r[1],l=r[2];break;case 1:c=(e=[m,w,v])[0],i=e[1],l=e[2];break;case 2:c=(n=[v,w,y])[0],i=n[1],l=n[2];break;case 3:c=(t=[v,m,w])[0],i=t[1],l=t[2];break;case 4:c=(a=[y,v,w])[0],i=a[1],l=a[2];break;case 5:c=(f=[w,v,m])[0],i=f[1],l=f[2]}}return[c,i,l,o.length>3?o[3]:1]},c.autodetect.push({p:1,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=W(r,"hcg"),"array"===X(r)&&3===r.length)return"hcg"}});var H=u.unpack,J=u.last,K=Math.round,Q=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=H(r,"rgba"),t=n[0],a=n[1],f=n[2],o=n[3],u=J(r)||"auto";void 0===o&&(o=1),"auto"===u&&(u=o<1?"rgba":"rgb");var c="000000"+((t=K(t))<<16|(a=K(a))<<8|(f=K(f))).toString(16);c=c.substr(c.length-6);var i="0"+K(255*o).toString(16);switch(i=i.substr(i.length-2),u.toLowerCase()){case"rgba":return"#"+c+i;case"argb":return"#"+i+c;default:return"#"+c}},Z=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,rr=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,er=function(r){if(r.match(Z)){4!==r.length&&7!==r.length||(r=r.substr(1)),3===r.length&&(r=(r=r.split(""))[0]+r[0]+r[1]+r[1]+r[2]+r[2]);var e=parseInt(r,16);return[e>>16,e>>8&255,255&e,1]}if(r.match(rr)){5!==r.length&&9!==r.length||(r=r.substr(1)),4===r.length&&(r=(r=r.split(""))[0]+r[0]+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]);var n=parseInt(r,16);return[n>>24&255,n>>16&255,n>>8&255,Math.round((255&n)/255*100)/100]}throw new Error("unknown hex color: "+r)},nr=u.type;d.prototype.hex=function(r){return Q(this._rgb,r)},p.hex=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hex"])))},c.format.hex=er,c.autodetect.push({p:4,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===nr(r)&&[3,4,5,6,7,8,9].indexOf(r.length)>=0)return"hex"}});var tr=u.unpack,ar=u.TWOPI,fr=Math.min,or=Math.sqrt,ur=Math.acos,cr=u.unpack,ir=u.limit,lr=u.TWOPI,hr=u.PITHIRD,sr=Math.cos,dr=u.unpack,br=u.type;d.prototype.hsi=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t=tr(r,"rgb"),a=t[0],f=t[1],o=t[2],u=fr(a/=255,f/=255,o/=255),c=(a+f+o)/3,i=c>0?1-u/c:0;return 0===i?n=NaN:(n=(a-f+(a-o))/2,n/=or((a-f)*(a-f)+(a-o)*(f-o)),n=ur(n),o>f&&(n=ar-n),n/=ar),[360*n,i,c]}(this._rgb)},p.hsi=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hsi"])))},c.format.hsi=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=cr(r,"hsi"))[0],o=r[1],u=r[2];return isNaN(f)&&(f=0),isNaN(o)&&(o=0),f>360&&(f-=360),f<0&&(f+=360),(f/=360)<1/3?t=1-((a=(1-o)/3)+(n=(1+o*sr(lr*f)/sr(hr-lr*f))/3)):f<2/3?a=1-((n=(1-o)/3)+(t=(1+o*sr(lr*(f-=1/3))/sr(hr-lr*f))/3)):n=1-((t=(1-o)/3)+(a=(1+o*sr(lr*(f-=2/3))/sr(hr-lr*f))/3)),[255*(n=ir(u*n*3)),255*(t=ir(u*t*3)),255*(a=ir(u*a*3)),r.length>3?r[3]:1]},c.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=dr(r,"hsi"),"array"===br(r)&&3===r.length)return"hsi"}});var pr=u.unpack,gr=u.type;d.prototype.hsl=function(){return A(this._rgb)},p.hsl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hsl"])))},c.format.hsl=j,c.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=pr(r,"hsl"),"array"===gr(r)&&3===r.length)return"hsl"}});var vr=u.unpack,mr=Math.min,yr=Math.max,wr=u.unpack,kr=Math.floor,Mr=u.unpack,Nr=u.type;d.prototype.hsv=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=vr(r,"rgb"))[0],o=r[1],u=r[2],c=mr(f,o,u),i=yr(f,o,u),l=i-c;return a=i/255,0===i?(n=Number.NaN,t=0):(t=l/i,f===i&&(n=(o-u)/l),o===i&&(n=2+(u-f)/l),u===i&&(n=4+(f-o)/l),(n*=60)<0&&(n+=360)),[n,t,a]}(this._rgb)},p.hsv=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hsv"])))},c.format.hsv=function(){for(var r,e,n,t,a,f,o=[],u=arguments.length;u--;)o[u]=arguments[u];var c,i,l,h=(o=wr(o,"hsv"))[0],s=o[1],d=o[2];if(d*=255,0===s)c=i=l=d;else{360===h&&(h=0),h>360&&(h-=360),h<0&&(h+=360);var b=kr(h/=60),p=h-b,g=d*(1-s),v=d*(1-s*p),m=d*(1-s*(1-p));switch(b){case 0:c=(r=[d,m,g])[0],i=r[1],l=r[2];break;case 1:c=(e=[v,d,g])[0],i=e[1],l=e[2];break;case 2:c=(n=[g,d,m])[0],i=n[1],l=n[2];break;case 3:c=(t=[g,v,d])[0],i=t[1],l=t[2];break;case 4:c=(a=[m,g,d])[0],i=a[1],l=a[2];break;case 5:c=(f=[d,g,v])[0],i=f[1],l=f[2]}}return[c,i,l,o.length>3?o[3]:1]},c.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=Mr(r,"hsv"),"array"===Nr(r)&&3===r.length)return"hsv"}});var _r=18,xr=.95047,Ar=1,Er=1.08883,Pr=.137931034,Fr=.206896552,Or=.12841855,Gr=.008856452,jr=u.unpack,qr=Math.pow,Lr=function(r){return(r/=255)<=.04045?r/12.92:qr((r+.055)/1.055,2.4)},Rr=function(r){return r>Gr?qr(r,1/3):r/Or+Pr},Cr=function(r,e,n){return r=Lr(r),e=Lr(e),n=Lr(n),[Rr((.4124564*r+.3575761*e+.1804375*n)/xr),Rr((.2126729*r+.7151522*e+.072175*n)/Ar),Rr((.0193339*r+.119192*e+.9503041*n)/Er)]},Ir=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=jr(r,"rgb"),t=n[0],a=n[1],f=n[2],o=Cr(t,a,f),u=o[0],c=o[1],i=116*c-16;return[i<0?0:i,500*(u-c),200*(c-o[2])]},Br=u.unpack,Dr=Math.pow,Sr=function(r){return 255*(r<=.00304?12.92*r:1.055*Dr(r,1/2.4)-.055)},$r=function(r){return r>Fr?r*r*r:Or*(r-Pr)},Yr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n,t,a,f=(r=Br(r,"lab"))[0],o=r[1],u=r[2];return t=(f+16)/116,n=isNaN(o)?t:t+o/500,a=isNaN(u)?t:t-u/200,t=Ar*$r(t),n=xr*$r(n),a=Er*$r(a),[Sr(3.2404542*n-1.5371385*t-.4985314*a),Sr(-.969266*n+1.8760108*t+.041556*a),Sr(.0556434*n-.2040259*t+1.0572252*a),r.length>3?r[3]:1]},zr=u.unpack,Tr=u.type;d.prototype.lab=function(){return Ir(this._rgb)},p.lab=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["lab"])))},c.format.lab=Yr,c.autodetect.push({p:2,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=zr(r,"lab"),"array"===Tr(r)&&3===r.length)return"lab"}});var Ur=u.unpack,Vr=u.RAD2DEG,Wr=Math.sqrt,Xr=Math.atan2,Hr=Math.round,Jr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Ur(r,"lab"),t=n[0],a=n[1],f=n[2],o=Wr(a*a+f*f),u=(Xr(f,a)*Vr+360)%360;return 0===Hr(1e4*o)&&(u=Number.NaN),[t,o,u]},Kr=u.unpack,Qr=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Kr(r,"rgb"),t=n[0],a=n[1],f=n[2],o=Ir(t,a,f),u=o[0],c=o[1],i=o[2];return Jr(u,c,i)},Zr=u.unpack,re=u.DEG2RAD,ee=Math.sin,ne=Math.cos,te=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=Zr(r,"lch"),t=n[0],a=n[1],f=n[2];return isNaN(f)&&(f=0),[t,ne(f*=re)*a,ee(f)*a]},ae=u.unpack,fe=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=(r=ae(r,"lch"))[0],t=r[1],a=r[2],f=te(n,t,a),o=f[0],u=f[1],c=f[2],i=Yr(o,u,c);return[i[0],i[1],i[2],r.length>3?r[3]:1]},oe=u.unpack,ue=u.unpack,ce=u.type;d.prototype.lch=function(){return Qr(this._rgb)},d.prototype.hcl=function(){return Qr(this._rgb).reverse()},p.lch=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["lch"])))},p.hcl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["hcl"])))},c.format.lch=fe,c.format.hcl=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=oe(r,"hcl").reverse();return fe.apply(void 0,n)},["lch","hcl"].forEach((function(r){return c.autodetect.push({p:2,test:function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(e=ue(e,r),"array"===ce(e)&&3===e.length)return r}})}));var ie={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},le=u.type;d.prototype.name=function(){for(var r=Q(this._rgb,"rgb"),e=0,n=Object.keys(ie);e<n.length;e+=1){var t=n[e];if(ie[t]===r)return t.toLowerCase()}return r},c.format.named=function(r){if(r=r.toLowerCase(),ie[r])return er(ie[r]);throw new Error("unknown color name: "+r)},c.autodetect.push({p:5,test:function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!e.length&&"string"===le(r)&&ie[r.toLowerCase()])return"named"}});var he=u.unpack,se=u.type,de=u.type;d.prototype.num=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=he(r,"rgb");return(n[0]<<16)+(n[1]<<8)+n[2]}(this._rgb)},p.num=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["num"])))},c.format.num=function(r){if("number"==se(r)&&r>=0&&r<=16777215)return[r>>16,r>>8&255,255&r,1];throw new Error("unknown num color: "+r)},c.autodetect.push({p:5,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(1===r.length&&"number"===de(r[0])&&r[0]>=0&&r[0]<=16777215)return"num"}});var be=u.unpack,pe=u.type,ge=Math.round;d.prototype.rgb=function(r){return void 0===r&&(r=!0),!1===r?this._rgb.slice(0,3):this._rgb.slice(0,3).map(ge)},d.prototype.rgba=function(r){return void 0===r&&(r=!0),this._rgb.slice(0,4).map((function(e,n){return n<3?!1===r?e:ge(e):e}))},p.rgb=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["rgb"])))},c.format.rgb=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=be(r,"rgba");return void 0===n[3]&&(n[3]=1),n},c.autodetect.push({p:3,test:function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];if(r=be(r,"rgba"),"array"===pe(r)&&(3===r.length||4===r.length&&"number"==pe(r[3])&&r[3]>=0&&r[3]<=1))return"rgb"}});var ve=Math.log,me=function(r){var e,n,t,a=r/100;return a<66?(e=255,n=-155.25485562709179-.44596950469579133*(n=a-2)+104.49216199393888*ve(n),t=a<20?0:.8274096064007395*(t=a-10)-254.76935184120902+115.67994401066147*ve(t)):(e=351.97690566805693+.114206453784165*(e=a-55)-40.25366309332127*ve(e),n=325.4494125711974+.07943456536662342*(n=a-50)-28.0852963507957*ve(n),t=255),[e,n,t,1]},ye=u.unpack,we=Math.round;d.prototype.temp=d.prototype.kelvin=d.prototype.temperature=function(){return function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];for(var n,t=ye(r,"rgb"),a=t[0],f=t[2],o=1e3,u=4e4,c=.4;u-o>c;){var i=me(n=.5*(u+o));i[2]/i[0]>=f/a?u=n:o=n}return we(n)}(this._rgb)},p.temp=p.kelvin=p.temperature=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return new(Function.prototype.bind.apply(d,[null].concat(r,["temp"])))},c.format.temp=c.format.kelvin=c.format.temperature=me;var ke=u.type;d.prototype.alpha=function(r,e){return void 0===e&&(e=!1),void 0!==r&&"number"===ke(r)?e?(this._rgb[3]=r,this):new d([this._rgb[0],this._rgb[1],this._rgb[2],r],"rgb"):this._rgb[3]},d.prototype.clipped=function(){return this._rgb._clipped||!1},d.prototype.darken=function(r){void 0===r&&(r=1);var e=this.lab();return e[0]-=_r*r,new d(e,"lab").alpha(this.alpha(),!0)},d.prototype.brighten=function(r){return void 0===r&&(r=1),this.darken(-r)},d.prototype.darker=d.prototype.darken,d.prototype.brighter=d.prototype.brighten,d.prototype.get=function(r){var e=r.split("."),n=e[0],t=e[1],a=this[n]();if(t){var f=n.indexOf(t);if(f>-1)return a[f];throw new Error("unknown channel "+t+" in mode "+n)}return a};var Me=u.type,Ne=Math.pow;d.prototype.luminance=function(r){if(void 0!==r&&"number"===Me(r)){if(0===r)return new d([0,0,0,this._rgb[3]],"rgb");if(1===r)return new d([255,255,255,this._rgb[3]],"rgb");var e=this.luminance(),n=20,t=function(e,a){var f=e.interpolate(a,.5,"rgb"),o=f.luminance();return Math.abs(r-o)<1e-7||!n--?f:o>r?t(e,f):t(f,a)},a=(e>r?t(new d([0,0,0]),this):t(this,new d([255,255,255]))).rgb();return new d(a.concat([this._rgb[3]]))}return _e.apply(void 0,this._rgb.slice(0,3))};var _e=function(r,e,n){return.2126*(r=xe(r))+.7152*(e=xe(e))+.0722*xe(n)},xe=function(r){return(r/=255)<=.03928?r/12.92:Ne((r+.055)/1.055,2.4)},Ae={},Ee=u.type,Pe=function(r,e,n){void 0===n&&(n=.5);for(var t=[],a=arguments.length-3;a-- >0;)t[a]=arguments[a+3];var f=t[0]||"lrgb";if(Ae[f]||t.length||(f=Object.keys(Ae)[0]),!Ae[f])throw new Error("interpolation mode "+f+" is not defined");return"object"!==Ee(r)&&(r=new d(r)),"object"!==Ee(e)&&(e=new d(e)),Ae[f](r,e,n).alpha(r.alpha()+n*(e.alpha()-r.alpha()))};d.prototype.mix=d.prototype.interpolate=function(r,e){void 0===e&&(e=.5);for(var n=[],t=arguments.length-2;t-- >0;)n[t]=arguments[t+2];return Pe.apply(void 0,[this,r,e].concat(n))},d.prototype.premultiply=function(r){void 0===r&&(r=!1);var e=this._rgb,n=e[3];return r?(this._rgb=[e[0]*n,e[1]*n,e[2]*n,n],this):new d([e[0]*n,e[1]*n,e[2]*n,n],"rgb")},d.prototype.saturate=function(r){void 0===r&&(r=1);var e=this.lch();return e[1]+=_r*r,e[1]<0&&(e[1]=0),new d(e,"lch").alpha(this.alpha(),!0)},d.prototype.desaturate=function(r){return void 0===r&&(r=1),this.saturate(-r)};var Fe=u.type;d.prototype.set=function(r,e,n){void 0===n&&(n=!1);var t=r.split("."),a=t[0],f=t[1],o=this[a]();if(f){var u=a.indexOf(f);if(u>-1){if("string"==Fe(e))switch(e.charAt(0)){case"+":case"-":o[u]+=+e;break;case"*":o[u]*=+e.substr(1);break;case"/":o[u]/=+e.substr(1);break;default:o[u]=+e}else{if("number"!==Fe(e))throw new Error("unsupported value for Color.set");o[u]=e}var c=new d(o,a);return n?(this._rgb=c._rgb,this):c}throw new Error("unknown channel "+f+" in mode "+a)}return o};Ae.rgb=function(r,e,n){var t=r._rgb,a=e._rgb;return new d(t[0]+n*(a[0]-t[0]),t[1]+n*(a[1]-t[1]),t[2]+n*(a[2]-t[2]),"rgb")};var Oe=Math.sqrt,Ge=Math.pow;Ae.lrgb=function(r,e,n){var t=r._rgb,a=t[0],f=t[1],o=t[2],u=e._rgb,c=u[0],i=u[1],l=u[2];return new d(Oe(Ge(a,2)*(1-n)+Ge(c,2)*n),Oe(Ge(f,2)*(1-n)+Ge(i,2)*n),Oe(Ge(o,2)*(1-n)+Ge(l,2)*n),"rgb")};Ae.lab=function(r,e,n){var t=r.lab(),a=e.lab();return new d(t[0]+n*(a[0]-t[0]),t[1]+n*(a[1]-t[1]),t[2]+n*(a[2]-t[2]),"lab")};var je=function(r,e,n,t){var a,f,o,u,c,i,l,h,s,b,p,g;return"hsl"===t?(o=r.hsl(),u=e.hsl()):"hsv"===t?(o=r.hsv(),u=e.hsv()):"hcg"===t?(o=r.hcg(),u=e.hcg()):"hsi"===t?(o=r.hsi(),u=e.hsi()):"lch"!==t&&"hcl"!==t||(t="hcl",o=r.hcl(),u=e.hcl()),"h"===t.substr(0,1)&&(c=(a=o)[0],l=a[1],s=a[2],i=(f=u)[0],h=f[1],b=f[2]),isNaN(c)||isNaN(i)?isNaN(c)?isNaN(i)?g=Number.NaN:(g=i,1!=s&&0!=s||"hsv"==t||(p=h)):(g=c,1!=b&&0!=b||"hsv"==t||(p=l)):g=c+n*(i>c&&i-c>180?i-(c+360):i<c&&c-i>180?i+360-c:i-c),void 0===p&&(p=l+n*(h-l)),new d([g,p,s+n*(b-s)],t)},qe=function(r,e,n){return je(r,e,n,"lch")};Ae.lch=qe,Ae.hcl=qe;Ae.num=function(r,e,n){var t=r.num(),a=e.num();return new d(t+n*(a-t),"num")};Ae.hcg=function(r,e,n){return je(r,e,n,"hcg")};Ae.hsi=function(r,e,n){return je(r,e,n,"hsi")};Ae.hsl=function(r,e,n){return je(r,e,n,"hsl")};Ae.hsv=function(r,e,n){return je(r,e,n,"hsv")};var Le=u.clip_rgb,Re=Math.pow,Ce=Math.sqrt,Ie=Math.PI,Be=Math.cos,De=Math.sin,Se=Math.atan2,$e=function(r,e){for(var n=r.length,t=[0,0,0,0],a=0;a<r.length;a++){var f=r[a],o=e[a]/n,u=f._rgb;t[0]+=Re(u[0],2)*o,t[1]+=Re(u[1],2)*o,t[2]+=Re(u[2],2)*o,t[3]+=u[3]*o}return t[0]=Ce(t[0]),t[1]=Ce(t[1]),t[2]=Ce(t[2]),t[3]>.9999999&&(t[3]=1),new d(Le(t))},Ye=u.type,ze=Math.pow,Te=function(r){var e="rgb",n=p("#ccc"),t=0,a=[0,1],f=[],o=[0,0],u=!1,c=[],i=!1,l=0,h=1,s=!1,d={},b=!0,g=1,v=function(r){if((r=r||["#fff","#000"])&&"string"===Ye(r)&&p.brewer&&p.brewer[r.toLowerCase()]&&(r=p.brewer[r.toLowerCase()]),"array"===Ye(r)){1===r.length&&(r=[r[0],r[0]]),r=r.slice(0);for(var e=0;e<r.length;e++)r[e]=p(r[e]);f.length=0;for(var n=0;n<r.length;n++)f.push(n/(r.length-1))}return k(),c=r},m=function(r){return r},y=function(r){return r},w=function(r,t){var a,i;if(null==t&&(t=!1),isNaN(r)||null===r)return n;i=t?r:u&&u.length>2?function(r){if(null!=u){for(var e=u.length-1,n=0;n<e&&r>=u[n];)n++;return n-1}return 0}(r)/(u.length-2):h!==l?(r-l)/(h-l):1,i=y(i),t||(i=m(i)),1!==g&&(i=ze(i,g)),i=o[0]+i*(1-o[0]-o[1]),i=Math.min(1,Math.max(0,i));var s=Math.floor(1e4*i);if(b&&d[s])a=d[s];else{if("array"===Ye(c))for(var v=0;v<f.length;v++){var w=f[v];if(i<=w){a=c[v];break}if(i>=w&&v===f.length-1){a=c[v];break}if(i>w&&i<f[v+1]){i=(i-w)/(f[v+1]-w),a=p.interpolate(c[v],c[v+1],i,e);break}}else"function"===Ye(c)&&(a=c(i));b&&(d[s]=a)}return a},k=function(){return d={}};v(r);var M=function(r){var e=p(w(r));return i&&e[i]?e[i]():e};return M.classes=function(r){if(null!=r){if("array"===Ye(r))u=r,a=[r[0],r[r.length-1]];else{var e=p.analyze(a);u=0===r?[e.min,e.max]:p.limits(e,"e",r)}return M}return u},M.domain=function(r){if(!arguments.length)return a;l=r[0],h=r[r.length-1],f=[];var e=c.length;if(r.length===e&&l!==h)for(var n=0,t=Array.from(r);n<t.length;n+=1){var o=t[n];f.push((o-l)/(h-l))}else{for(var u=0;u<e;u++)f.push(u/(e-1));if(r.length>2){var i=r.map((function(e,n){return n/(r.length-1)})),s=r.map((function(r){return(r-l)/(h-l)}));s.every((function(r,e){return i[e]===r}))||(y=function(r){if(r<=0||r>=1)return r;for(var e=0;r>=s[e+1];)e++;var n=(r-s[e])/(s[e+1]-s[e]);return i[e]+n*(i[e+1]-i[e])})}}return a=[l,h],M},M.mode=function(r){return arguments.length?(e=r,k(),M):e},M.range=function(r,e){return v(r),M},M.out=function(r){return i=r,M},M.spread=function(r){return arguments.length?(t=r,M):t},M.correctLightness=function(r){return null==r&&(r=!0),s=r,k(),m=s?function(r){for(var e=w(0,!0).lab()[0],n=w(1,!0).lab()[0],t=e>n,a=w(r,!0).lab()[0],f=e+(n-e)*r,o=a-f,u=0,c=1,i=20;Math.abs(o)>.01&&i-- >0;)t&&(o*=-1),o<0?(u=r,r+=.5*(c-r)):(c=r,r+=.5*(u-r)),o=(a=w(r,!0).lab()[0])-f;return r}:function(r){return r},M},M.padding=function(r){return null!=r?("number"===Ye(r)&&(r=[r,r]),o=r,M):o},M.colors=function(e,n){arguments.length<2&&(n="hex");var t=[];if(0===arguments.length)t=c.slice(0);else if(1===e)t=[M(.5)];else if(e>1){var f=a[0],o=a[1]-f;t=Ue(0,e,!1).map((function(r){return M(f+r/(e-1)*o)}))}else{r=[];var i=[];if(u&&u.length>2)for(var l=1,h=u.length,s=1<=h;s?l<h:l>h;s?l++:l--)i.push(.5*(u[l-1]+u[l]));else i=a;t=i.map((function(r){return M(r)}))}return p[n]&&(t=t.map((function(r){return r[n]()}))),t},M.cache=function(r){return null!=r?(b=r,M):b},M.gamma=function(r){return null!=r?(g=r,M):g},M.nodata=function(r){return null!=r?(n=p(r),M):n},M};function Ue(r,e,n){for(var t=[],a=r<e,f=n?a?e+1:e-1:e,o=r;a?o<f:o>f;a?o++:o--)t.push(o);return t}var Ve=function(r){var e,n,t,a,f,o,u;if(2===(r=r.map((function(r){return new d(r)}))).length)e=r.map((function(r){return r.lab()})),f=e[0],o=e[1],a=function(r){var e=[0,1,2].map((function(e){return f[e]+r*(o[e]-f[e])}));return new d(e,"lab")};else if(3===r.length)n=r.map((function(r){return r.lab()})),f=n[0],o=n[1],u=n[2],a=function(r){var e=[0,1,2].map((function(e){return(1-r)*(1-r)*f[e]+2*(1-r)*r*o[e]+r*r*u[e]}));return new d(e,"lab")};else if(4===r.length){var c;t=r.map((function(r){return r.lab()})),f=t[0],o=t[1],u=t[2],c=t[3],a=function(r){var e=[0,1,2].map((function(e){return(1-r)*(1-r)*(1-r)*f[e]+3*(1-r)*(1-r)*r*o[e]+3*(1-r)*r*r*u[e]+r*r*r*c[e]}));return new d(e,"lab")}}else if(5===r.length){var i=Ve(r.slice(0,3)),l=Ve(r.slice(2,5));a=function(r){return r<.5?i(2*r):l(2*(r-.5))}}return a},We=function(r,e,n){if(!We[n])throw new Error("unknown blend mode "+n);return We[n](r,e)},Xe=function(r){return function(e,n){var t=p(n).rgb(),a=p(e).rgb();return p.rgb(r(t,a))}},He=function(r){return function(e,n){var t=[];return t[0]=r(e[0],n[0]),t[1]=r(e[1],n[1]),t[2]=r(e[2],n[2]),t}};We.normal=Xe(He((function(r){return r}))),We.multiply=Xe(He((function(r,e){return r*e/255}))),We.screen=Xe(He((function(r,e){return 255*(1-(1-r/255)*(1-e/255))}))),We.overlay=Xe(He((function(r,e){return e<128?2*r*e/255:255*(1-2*(1-r/255)*(1-e/255))}))),We.darken=Xe(He((function(r,e){return r>e?e:r}))),We.lighten=Xe(He((function(r,e){return r>e?r:e}))),We.dodge=Xe(He((function(r,e){return 255===r||(r=e/255*255/(1-r/255))>255?255:r}))),We.burn=Xe(He((function(r,e){return 255*(1-(1-e/255)/(r/255))})));for(var Je=We,Ke=u.type,Qe=u.clip_rgb,Ze=u.TWOPI,rn=Math.pow,en=Math.sin,nn=Math.cos,tn=Math.floor,an=Math.random,fn=Math.log,on=Math.pow,un=Math.floor,cn=Math.abs,ln=function(r,e){void 0===e&&(e=null);var n={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0};return"object"===f(r)&&(r=Object.values(r)),r.forEach((function(r){e&&"object"===f(r)&&(r=r[e]),null==r||isNaN(r)||(n.values.push(r),n.sum+=r,r<n.min&&(n.min=r),r>n.max&&(n.max=r),n.count+=1)})),n.domain=[n.min,n.max],n.limits=function(r,e){return hn(n,r,e)},n},hn=function(r,e,n){void 0===e&&(e="equal"),void 0===n&&(n=7),"array"==f(r)&&(r=ln(r));var t=r.min,a=r.max,o=r.values.sort((function(r,e){return r-e}));if(1===n)return[t,a];var u=[];if("c"===e.substr(0,1)&&(u.push(t),u.push(a)),"e"===e.substr(0,1)){u.push(t);for(var c=1;c<n;c++)u.push(t+c/n*(a-t));u.push(a)}else if("l"===e.substr(0,1)){if(t<=0)throw new Error("Logarithmic scales are only possible for values > 0");var i=Math.LOG10E*fn(t),l=Math.LOG10E*fn(a);u.push(t);for(var h=1;h<n;h++)u.push(on(10,i+h/n*(l-i)));u.push(a)}else if("q"===e.substr(0,1)){u.push(t);for(var s=1;s<n;s++){var d=(o.length-1)*s/n,b=un(d);if(b===d)u.push(o[b]);else{var p=d-b;u.push(o[b]*(1-p)+o[b+1]*p)}}u.push(a)}else if("k"===e.substr(0,1)){var g,v=o.length,m=new Array(v),y=new Array(n),w=!0,k=0,M=null;(M=[]).push(t);for(var N=1;N<n;N++)M.push(t+N/n*(a-t));for(M.push(a);w;){for(var _=0;_<n;_++)y[_]=0;for(var x=0;x<v;x++)for(var A=o[x],E=Number.MAX_VALUE,P=void 0,F=0;F<n;F++){var O=cn(M[F]-A);O<E&&(E=O,P=F),y[P]++,m[x]=P}for(var G=new Array(n),j=0;j<n;j++)G[j]=null;for(var q=0;q<v;q++)null===G[g=m[q]]?G[g]=o[q]:G[g]+=o[q];for(var L=0;L<n;L++)G[L]*=1/y[L];w=!1;for(var R=0;R<n;R++)if(G[R]!==M[R]){w=!0;break}M=G,++k>200&&(w=!1)}for(var C={},I=0;I<n;I++)C[I]=[];for(var B=0;B<v;B++)C[g=m[B]].push(o[B]);for(var D=[],S=0;S<n;S++)D.push(C[S][0]),D.push(C[S][C[S].length-1]);D=D.sort((function(r,e){return r-e})),u.push(D[0]);for(var $=1;$<D.length;$+=2){var Y=D[$];isNaN(Y)||-1!==u.indexOf(Y)||u.push(Y)}}return u},sn={analyze:ln,limits:hn},dn=Math.sqrt,bn=Math.atan2,pn=Math.abs,gn=Math.cos,vn=Math.PI,mn={cool:function(){return Te([p.hsl(180,1,.9),p.hsl(250,.7,.4)])},hot:function(){return Te(["#000","#f00","#ff0","#fff"]).mode("rgb")}},yn={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},wn=0,kn=Object.keys(yn);wn<kn.length;wn+=1){var Mn=kn[wn];yn[Mn.toLowerCase()]=yn[Mn]}var Nn=yn;return p.average=function(r,e,n){void 0===e&&(e="lrgb"),void 0===n&&(n=null);var t=r.length;n||(n=Array.from(new Array(t)).map((function(){return 1})));var a=t/n.reduce((function(r,e){return r+e}));if(n.forEach((function(r,e){n[e]*=a})),r=r.map((function(r){return new d(r)})),"lrgb"===e)return $e(r,n);for(var f=r.shift(),o=f.get(e),u=[],c=0,i=0,l=0;l<o.length;l++)if(o[l]=(o[l]||0)*n[0],u.push(isNaN(o[l])?0:n[0]),"h"===e.charAt(l)&&!isNaN(o[l])){var h=o[l]/180*Ie;c+=Be(h)*n[0],i+=De(h)*n[0]}var s=f.alpha()*n[0];r.forEach((function(r,t){var a=r.get(e);s+=r.alpha()*n[t+1];for(var f=0;f<o.length;f++)if(!isNaN(a[f]))if(u[f]+=n[t+1],"h"===e.charAt(f)){var l=a[f]/180*Ie;c+=Be(l)*n[t+1],i+=De(l)*n[t+1]}else o[f]+=a[f]*n[t+1]}));for(var b=0;b<o.length;b++)if("h"===e.charAt(b)){for(var p=Se(i/u[b],c/u[b])/Ie*180;p<0;)p+=360;for(;p>=360;)p-=360;o[b]=p}else o[b]=o[b]/u[b];return s/=t,new d(o,e).alpha(s>.99999?1:s,!0)},p.bezier=function(r){var e=Ve(r);return e.scale=function(){return Te(e)},e},p.blend=Je,p.cubehelix=function(r,e,n,t,a){void 0===r&&(r=300),void 0===e&&(e=-1.5),void 0===n&&(n=1),void 0===t&&(t=1),void 0===a&&(a=[0,1]);var f,o=0;"array"===Ke(a)?f=a[1]-a[0]:(f=0,a=[a,a]);var u=function(u){var c=Ze*((r+120)/360+e*u),i=rn(a[0]+f*u,t),l=(0!==o?n[0]+u*o:n)*i*(1-i)/2,h=nn(c),s=en(c);return p(Qe([255*(i+l*(-.14861*h+1.78277*s)),255*(i+l*(-.29227*h-.90649*s)),255*(i+l*(1.97294*h)),1]))};return u.start=function(e){return null==e?r:(r=e,u)},u.rotations=function(r){return null==r?e:(e=r,u)},u.gamma=function(r){return null==r?t:(t=r,u)},u.hue=function(r){return null==r?n:("array"===Ke(n=r)?0==(o=n[1]-n[0])&&(n=n[1]):o=0,u)},u.lightness=function(r){return null==r?a:("array"===Ke(r)?(a=r,f=r[1]-r[0]):(a=[r,r],f=0),u)},u.scale=function(){return p.scale(u)},u.hue(n),u},p.mix=p.interpolate=Pe,p.random=function(){for(var r="#",e=0;e<6;e++)r+="0123456789abcdef".charAt(tn(16*an()));return new d(r,"hex")},p.scale=Te,p.analyze=sn.analyze,p.contrast=function(r,e){r=new d(r),e=new d(e);var n=r.luminance(),t=e.luminance();return n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)},p.deltaE=function(r,e,n,t){void 0===n&&(n=1),void 0===t&&(t=1),r=new d(r),e=new d(e);for(var a=Array.from(r.lab()),f=a[0],o=a[1],u=a[2],c=Array.from(e.lab()),i=c[0],l=c[1],h=c[2],s=dn(o*o+u*u),b=dn(l*l+h*h),p=f<16?.511:.040975*f/(1+.01765*f),g=.0638*s/(1+.0131*s)+.638,v=s<1e-6?0:180*bn(u,o)/vn;v<0;)v+=360;for(;v>=360;)v-=360;var m=v>=164&&v<=345?.56+pn(.2*gn(vn*(v+168)/180)):.36+pn(.4*gn(vn*(v+35)/180)),y=s*s*s*s,w=dn(y/(y+1900)),k=g*(w*m+1-w),M=s-b,N=o-l,_=u-h,x=(f-i)/(n*p),A=M/(t*g);return dn(x*x+A*A+(N*N+_*_-M*M)/(k*k))},p.distance=function(r,e,n){void 0===n&&(n="lab"),r=new d(r),e=new d(e);var t=r.get(n),a=e.get(n),f=0;for(var o in t){var u=(t[o]||0)-(a[o]||0);f+=u*u}return Math.sqrt(f)},p.limits=sn.limits,p.valid=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];try{return new(Function.prototype.bind.apply(d,[null].concat(r))),!0}catch(r){return!1}},p.scales=mn,p.colors=ie,p.brewer=Nn,p}()}}]);