(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6213],{13077:(e,t,n)=>{"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function f(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function c(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return r(c(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function h(e,t,n){void 0===n&&(n=!1);var a,s,d=f(t),h=f(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),m=c(t),v=r(e,h),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(d||!d&&!n)&&(("body"!==u(t)||l(m))&&(g=(a=t)!==o(a)&&f(a)?{scrollLeft:(s=a).scrollLeft,scrollTop:s.scrollTop}:i(a)),f(t)?((y=r(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):m&&(y.x=p(m))),{x:v.left+g.scrollLeft-y.x,y:v.top+g.scrollTop-y.y,width:v.width,height:v.height}}function m(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function v(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||c(e)}function g(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:f(e)&&l(e)?e:g(v(e))}function y(e,t){var n;void 0===t&&(t=[]);var r=g(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),f=i?[a].concat(a.visualViewport||[],l(r)?r:[]):r,s=t.concat(f);return i?s:s.concat(y(v(f)))}function b(e){return["table","td","th"].indexOf(u(e))>=0}function x(e){return f(e)&&"fixed"!==d(e).position?e.offsetParent:null}function w(e){for(var t=o(e),n=x(e);n&&b(n)&&"static"===d(n).position;)n=x(n);return n&&("html"===u(n)||"body"===u(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===d(e).position)return null;for(var n=v(e);f(n)&&["html","body"].indexOf(u(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{fi:()=>pe});var O="top",E="bottom",j="right",A="left",D="auto",k=[O,E,j,A],L="start",R="end",M="viewport",T="popper",C=k.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+R])}),[]),P=[].concat(k,[D]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+R])}),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function B(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?W:o;return function(e,t,n){void 0===n&&(n=i);var o,f,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;d(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var f=function(e){var t=B(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=f.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};u.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(H(t,n)){s.rects={reference:h(t,w(n),"fixed"===s.options.strategy),popper:m(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return f||(f=new Promise((function(e){Promise.resolve().then((function(){f=void 0,e(o())}))}))),f}),destroy:function(){d(),c=!0}};if(!H(e,t))return p;function d(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var U={passive:!0};const z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,f=r.resize,s=void 0===f||f,u=o(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",n.update,U)})),s&&u.addEventListener("resize",n.update,U),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),s&&u.removeEventListener("resize",n.update,U)}},data:{}};function N(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function _(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?N(o):null,a=o?q(o):null,f=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case O:t={x:f,y:n.y-r.height};break;case E:t={x:f,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:s};break;case A:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var u=i?Z(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case L:t[u]=t[u]-(n[c]/2-r[c]/2);break;case R:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}const V={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=_({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var $=Math.max,Y=Math.min,G=Math.round,F={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,s=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,h=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:G(G(t*r)/r)||0,y:G(G(n*r)/r)||0}}(f):"function"==typeof l?l(f):f,m=h.x,v=void 0===m?0:m,g=h.y,y=void 0===g?0:g,b=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),D=A,k=O,L=window;if(p){var M=w(n),T="clientHeight",C="clientWidth";M===o(n)&&"static"!==d(M=c(n)).position&&"absolute"===s&&(T="scrollHeight",C="scrollWidth"),M=M,i!==O&&(i!==A&&i!==j||a!==R)||(k=E,y-=M[T]-r.height,y*=u?1:-1),i!==A&&(i!==O&&i!==E||a!==R)||(D=j,v-=M[C]-r.width,v*=u?1:-1)}var P,S=Object.assign({position:s},p&&F);return u?Object.assign({},S,((P={})[k]=x?"0":"",P[D]=b?"0":"",P.transform=(L.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",P)):Object.assign({},S,((t={})[k]=x?y+"px":"",t[D]=b?v+"px":"",t.transform="",t))}var X={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(function(e){return X[e]}))}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Q[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===M?ne(function(e){var t=o(e),n=c(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,f=0,s=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(f=r.offsetLeft,s=r.offsetTop)),{width:i,height:a,x:f+p(e),y:s}}(e)):f(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=c(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+p(e),u=-r.scrollTop;return"rtl"===d(o||n).direction&&(s+=$(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:s,y:u}}(c(e)))}function oe(e,t,n){var r="clippingParents"===t?function(e){var t=y(v(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&f(e)?w(e):e;return a(n)?t.filter((function(e){return a(e)&&te(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],s=o.reduce((function(t,n){var r=re(e,n);return t.top=$(r.top,t.top),t.right=Y(r.right,t.right),t.bottom=Y(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),re(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,f=n.boundary,s=void 0===f?"clippingParents":f,u=n.rootBoundary,p=void 0===u?M:u,d=n.elementContext,l=void 0===d?T:d,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,g=void 0===v?0:v,y=ie("number"!=typeof g?g:ae(g,k)),b=l===T?"reference":T,x=e.rects.popper,w=e.elements[m?b:l],A=oe(a(w)?w:w.contextElement||c(e.elements.popper),s,p),D=r(e.elements.reference),L=_({reference:D,element:x,strategy:"absolute",placement:i}),R=ne(Object.assign({},x,L)),C=l===T?R:D,P={top:A.top-C.top+y.top,bottom:C.bottom-A.bottom+y.bottom,left:A.left-C.left+y.left,right:C.right-A.right+y.right},S=e.modifiersData.offset;if(l===T&&S){var B=S[i];Object.keys(P).forEach((function(e){var t=[j,E].indexOf(e)>=0?1:-1,n=[O,E].indexOf(e)>=0?"y":"x";P[e]+=B[n]*t}))}return P}function se(e,t,n){return $(e,Y(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ce(e){return[O,j,E,A].some((function(t){return e[t]>=0}))}var pe=I({defaultModifiers:[z,V,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,u={placement:N(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=P.reduce((function(e,n){return e[n]=function(e,t,n){var r=N(e),o=[A,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],f=i[1];return a=a||0,f=(f||0)*o,[A,j].indexOf(r)>=0?{x:f,y:a}:{x:a,y:f}}(n,t.rects,i),e}),{}),f=a[t.placement],s=f.x,u=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0===a||a,s=n.fallbackPlacements,u=n.padding,c=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,h=void 0===l||l,m=n.allowedAutoPlacements,v=t.options.placement,g=N(v),y=s||(g===v||!h?[K(v)]:function(e){if(N(e)===D)return[];var t=K(e);return[ee(e),t,ee(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(N(n)===D?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,u=void 0===s?P:s,c=q(r),p=c?f?C:C.filter((function(e){return q(e)===c})):k,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[N(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:c,rootBoundary:p,padding:u,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,R=new Map,M=!0,T=b[0],S=0;S<b.length;S++){var B=b[S],W=N(B),H=q(B)===L,I=[O,E].indexOf(W)>=0,U=I?"width":"height",z=fe(t,{placement:B,boundary:c,rootBoundary:p,altBoundary:d,padding:u}),Z=I?H?j:A:H?E:O;x[U]>w[U]&&(Z=K(Z));var _=K(Z),V=[];if(i&&V.push(z[W]<=0),f&&V.push(z[Z]<=0,z[_]<=0),V.every((function(e){return e}))){T=B,M=!1;break}R.set(B,V)}if(M)for(var $=function(e){var t=b.find((function(t){var n=R.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},Y=h?3:1;Y>0;Y--){if("break"===$(Y))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0!==a&&a,s=n.boundary,u=n.rootBoundary,c=n.altBoundary,p=n.padding,d=n.tether,l=void 0===d||d,h=n.tetherOffset,v=void 0===h?0:h,g=fe(t,{boundary:s,rootBoundary:u,padding:p,altBoundary:c}),y=N(t.placement),b=q(t.placement),x=!b,D=Z(y),k="x"===D?"y":"x",R=t.modifiersData.popperOffsets,M=t.rects.reference,T=t.rects.popper,C="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P={x:0,y:0};if(R){if(i||f){var S="y"===D?O:A,B="y"===D?E:j,W="y"===D?"height":"width",H=R[D],I=R[D]+g[S],U=R[D]-g[B],z=l?-T[W]/2:0,_=b===L?M[W]:T[W],V=b===L?-T[W]:-M[W],G=t.elements.arrow,F=l&&G?m(G):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=J[S],K=J[B],Q=se(0,M[W],F[W]),ee=x?M[W]/2-z-Q-X-C:_-Q-X-C,te=x?-M[W]/2+z+Q+K+C:V+Q+K+C,ne=t.elements.arrow&&w(t.elements.arrow),re=ne?"y"===D?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0,ie=R[D]+ee-oe-re,ae=R[D]+te-oe;if(i){var ue=se(l?Y(I,ie):I,H,l?$(U,ae):U);R[D]=ue,P[D]=ue-H}if(f){var ce="x"===D?O:A,pe="x"===D?E:j,de=R[k],le=de+g[ce],he=de-g[pe],me=se(l?Y(le,ie):le,de,l?$(he,ae):he);R[k]=me,P[k]=me-de}}t.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,f=N(n.placement),s=Z(f),u=[A,j].indexOf(f)>=0?"height":"width";if(i&&a){var c=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,k))}(o.padding,n),p=m(i),d="y"===s?O:A,l="y"===s?E:j,h=n.rects.reference[u]+n.rects.reference[s]-a[s]-n.rects.popper[u],v=a[s]-n.rects.reference[s],g=w(i),y=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,b=h/2-v/2,x=c[d],D=y-p[u]-c[l],L=y/2-p[u]/2+b,R=se(x,L,D),M=s;n.modifiersData[r]=((t={})[M]=R,t.centerOffset=R-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),f=fe(t,{altBoundary:!0}),s=ue(a,r),u=ue(f,o,i),c=ce(s),p=ce(u);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]})},19258:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},21205:e=>{e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},88263:e=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},642:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},38257:(e,t,n)=>{var r=n(52773),o=n(19258),i=n(43670),a=n(34655),f=r?r.prototype:void 0,s=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},48014:(e,t,n)=>{var r=n(21205),o=n(64383),i=n(15208),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},8303:(e,t,n)=>{var r=n(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=r},49952:e=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},46083:e=>{var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",f="[\\u2700-\\u27bf]",s="["+n+"]",u="[^\\ud800-\\udfff"+o+a+t+n+r+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",l="(?:"+s+"|"+u+")",h="(?:"+d+"|"+u+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,p].join("|")+")"+y+g+")*"),x="(?:"+[f,c,p].join("|")+")"+b,w=RegExp([d+"?"+s+"+"+m+"(?="+[i,d,"$"].join("|")+")",h+"+"+v+"(?="+[i,d+l,"$"].join("|")+")",d+"?"+l+"+"+m,d+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},64383:(e,t,n)=>{var r=n(8303),o=n(72049),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},34655:(e,t,n)=>{var r=n(1185),o=n(44939);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},95573:(e,t,n)=>{var r=n(48014)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},72049:(e,t,n)=>{var r=n(38257);e.exports=function(e){return null==e?"":r(e)}},15208:(e,t,n)=>{var r=n(88263),o=n(49952),i=n(72049),a=n(46083);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}},13555:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,n=e.data,r=e.parent,o=function e(t){return Array.isArray(t)?(n=t=>e(t),t.reduce(((e,t)=>e.concat(n(t))),[])):null!==(r=t)&&"object"==typeof r?function(e){let t=[];for(const n in e)e[n]&&t.push(n);return t}(t):"string"==typeof t&&t?[t]:[];var n,r}([n.staticClass,n.class]);if(o){var i,a,f,s=(a=(i=t).body,f=i.document,a?window.document.body:!!f&&window.document.documentElement);if(s){var u=function(e,t){if(!t.length)return;const{classList:n}=e;return t.filter((e=>{if(!n.contains(e))return n.add(e),!0}))}(s,o),c=function(){!function(e,t){if(!t||!t.length)return;let n;for(;n=t.shift();)e.classList.remove(n);e.classList.length||e.removeAttribute("class")}(s,u)};r.$once("hook:beforeUpdate",c),r.$once("hook:destroyed",c)}}},t=Object.prototype.hasOwnProperty,n=function(e,t,n){var r="&"===t[0],o="~"===(t=r?t.slice(1):t)[0],i="!"===(t=o?t.slice(1):t)[0];return{o:e,t:t=i?t.slice(1):t,i:n,u:{once:o,capture:i,passive:r}}},r=function(e){var r,o,i,a=e.props,f=e.listeners,s=e.parent,u=function(e,r){var o,i,a=[];for(var f in r)if(o=r,i=f,t.call(o,i)){var s=r[f],u=n(e,f,s);u.o.addEventListener(u.t,u.i,u.u),a.push(u)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),f),c=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(u)};s.$once("hook:beforeUpdate",c),s.$once("hook:destroyed",c)},o=function(t){r(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?o(t):t.parent.$once("hook:mounted",(function(){o(t)})),t.slots().default}}}()}}]);