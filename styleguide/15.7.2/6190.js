(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[6190],{13077:(e,t,n)=>{"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function p(e){return r(u(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1);var a,f,d=s(t),m=s(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),h=u(t),v=r(e,m),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(d||!d&&!n)&&(("body"!==c(t)||l(h))&&(g=(a=t)!==o(a)&&s(a)?{scrollLeft:(f=a).scrollLeft,scrollTop:f.scrollTop}:i(a)),s(t)?((y=r(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):h&&(y.x=p(h))),{x:v.left+g.scrollLeft-y.x,y:v.top+g.scrollTop-y.y,width:v.width,height:v.height}}function h(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||u(e)}function g(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:s(e)&&l(e)?e:g(v(e))}function y(e,t){var n;void 0===t&&(t=[]);var r=g(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],l(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(y(v(s)))}function b(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){return s(e)&&"fixed"!==d(e).position?e.offsetParent:null}function x(e){for(var t=o(e),n=w(e);n&&b(n)&&"static"===d(n).position;)n=w(n);return n&&("html"===c(n)||"body"===c(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===d(e).position)return null;for(var n=v(e);s(n)&&["html","body"].indexOf(c(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{fi:()=>pe});var O="top",j="bottom",E="right",k="left",D="auto",L=[O,j,E,k],A="start",M="end",P="viewport",B="popper",W=L.reduce((function(e,t){return e.concat([t+"-"+A,t+"-"+M])}),[]),H=[].concat(L,[D]).reduce((function(e,t){return e.concat([t,t+"-"+A,t+"-"+M])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function C(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var T={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function S(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?T:o;return function(e,t,n){void 0===n&&(n=i);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},T,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;d(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:a(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var s=function(e){var t=C(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,f.options.modifiers)));return f.orderedModifiers=s.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:p,options:r}),a=function(){};c.push(i||a)}})),p.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(q(t,n)){f.rects={reference:m(t,x(n),"fixed"===f.options.strategy),popper:h(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:p})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){d(),u=!0}};if(!q(e,t))return p;function d(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var _={passive:!0};const N={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,_)})),f&&c.addEventListener("resize",n.update,_),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),f&&c.removeEventListener("resize",n.update,_)}},data:{}};function U(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function I(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?V(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case j:t={x:s,y:n.y+n.height};break;case E:t={x:n.x+n.width,y:f};break;case k:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?I(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case A:t[c]=t[c]-(n[u]/2-r[u]/2);break;case M:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}const z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var F=Math.max,X=Math.min,Y=Math.round,G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,c=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,m=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Y(Y(t*r)/r)||0,y:Y(Y(n*r)/r)||0}}(s):"function"==typeof l?l(s):s,h=m.x,v=void 0===h?0:h,g=m.y,y=void 0===g?0:g,b=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),D=k,L=O,A=window;if(p){var P=x(n),B="clientHeight",W="clientWidth";P===o(n)&&"static"!==d(P=u(n)).position&&"absolute"===f&&(B="scrollHeight",W="scrollWidth"),P=P,i!==O&&(i!==k&&i!==E||a!==M)||(L=j,y-=P[B]-r.height,y*=c?1:-1),i!==k&&(i!==O&&i!==j||a!==M)||(D=E,v-=P[W]-r.width,v*=c?1:-1)}var H,R=Object.assign({position:f},p&&G);return c?Object.assign({},R,((H={})[L]=w?"0":"",H[D]=b?"0":"",H.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",H)):Object.assign({},R,((t={})[L]=w?y+"px":"",t[D]=b?v+"px":"",t.transform="",t))}var K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var Z={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,(function(e){return Z[e]}))}function te(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function re(e,t){return t===P?ne(function(e){var t=o(e),n=u(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+p(e),y:f}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,n=u(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=F(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=F(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+p(e),c=-r.scrollTop;return"rtl"===d(o||n).direction&&(f+=F(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(u(e)))}function oe(e,t,n){var r="clippingParents"===t?function(e){var t=y(v(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&s(e)?x(e):e;return a(n)?t.filter((function(e){return a(e)&&te(e,n)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],f=o.reduce((function(t,n){var r=re(e,n);return t.top=F(r.top,t.top),t.right=X(r.right,t.right),t.bottom=X(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),re(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function se(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,p=void 0===c?P:c,d=n.elementContext,l=void 0===d?B:d,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,g=void 0===v?0:v,y=ie("number"!=typeof g?g:ae(g,L)),b=l===B?"reference":B,w=e.rects.popper,x=e.elements[h?b:l],k=oe(a(x)?x:x.contextElement||u(e.elements.popper),f,p),D=r(e.elements.reference),A=$({reference:D,element:w,strategy:"absolute",placement:i}),M=ne(Object.assign({},w,A)),W=l===B?M:D,H={top:k.top-W.top+y.top,bottom:W.bottom-k.bottom+y.bottom,left:k.left-W.left+y.left,right:W.right-k.right+y.right},R=e.modifiersData.offset;if(l===B&&R){var C=R[i];Object.keys(H).forEach((function(e){var t=[E,j].indexOf(e)>=0?1:-1,n=[O,j].indexOf(e)>=0?"y":"x";H[e]+=C[n]*t}))}return H}function fe(e,t,n){return F(e,X(t,n))}function ce(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ue(e){return[O,E,j,k].some((function(t){return e[t]>=0}))}var pe=S({defaultModifiers:[N,z,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:U(t.placement),variation:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&c(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[k,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[k,E].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,h=n.allowedAutoPlacements,v=t.options.placement,g=U(v),y=f||(g===v||!m?[Q(v)]:function(e){if(U(e)===D)return[];var t=Q(e);return[ee(e),t,ee(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(U(n)===D?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?H:f,u=V(r),p=u?s?W:W.filter((function(e){return V(e)===u})):L,d=p.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,M=new Map,P=!0,B=b[0],R=0;R<b.length;R++){var C=b[R],T=U(C),q=V(C)===A,S=[O,j].indexOf(T)>=0,_=S?"width":"height",N=se(t,{placement:C,boundary:u,rootBoundary:p,altBoundary:d,padding:c}),I=S?q?E:k:q?j:O;w[_]>x[_]&&(I=Q(I));var $=Q(I),z=[];if(i&&z.push(N[T]<=0),s&&z.push(N[I]<=0,N[$]<=0),z.every((function(e){return e}))){B=C,P=!1;break}M.set(C,z)}if(P)for(var F=function(e){var t=b.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},X=m?3:1;X>0;X--){if("break"===F(X))break}t.placement!==B&&(t.modifiersData[r]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,d=n.tether,l=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,g=se(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),y=U(t.placement),b=V(t.placement),w=!b,D=I(y),L="x"===D?"y":"x",M=t.modifiersData.popperOffsets,P=t.rects.reference,B=t.rects.popper,W="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,H={x:0,y:0};if(M){if(i||s){var R="y"===D?O:k,C="y"===D?j:E,T="y"===D?"height":"width",q=M[D],S=M[D]+g[R],_=M[D]-g[C],N=l?-B[T]/2:0,$=b===A?P[T]:B[T],z=b===A?-B[T]:-P[T],Y=t.elements.arrow,G=l&&Y?h(Y):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[R],Q=J[C],Z=fe(0,P[T],G[T]),ee=w?P[T]/2-N-Z-K-W:$-Z-K-W,te=w?-P[T]/2+N+Z+Q+W:z+Z+Q+W,ne=t.elements.arrow&&x(t.elements.arrow),re=ne?"y"===D?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0,ie=M[D]+ee-oe-re,ae=M[D]+te-oe;if(i){var ce=fe(l?X(S,ie):S,q,l?F(_,ae):_);M[D]=ce,H[D]=ce-q}if(s){var ue="x"===D?O:k,pe="x"===D?j:E,de=M[L],le=de+g[ue],me=de-g[pe],he=fe(l?X(le,ie):le,de,l?F(me,ae):me);M[L]=he,H[L]=he-de}}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=U(n.placement),f=I(s),c=[k,E].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,L))}(o.padding,n),p=h(i),d="y"===f?O:k,l="y"===f?j:E,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],v=a[f]-n.rects.reference[f],g=x(i),y=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,b=m/2-v/2,w=u[d],D=y-p[c]-u[l],A=y/2-p[c]/2+b,M=fe(w,A,D),P=f;n.modifiersData[r]=((t={})[P]=M,t.centerOffset=M-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&te(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),f=ce(a,r),c=ce(s,o,i),u=ue(f),p=ue(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]})},13555:function(e){e.exports=function(){"use strict";var e=function(e){var t=e.props,n=e.data,r=e.parent,o=function e(t){return Array.isArray(t)?(n=t=>e(t),t.reduce(((e,t)=>e.concat(n(t))),[])):null!==(r=t)&&"object"==typeof r?function(e){let t=[];for(const n in e)e[n]&&t.push(n);return t}(t):"string"==typeof t&&t?[t]:[];var n,r}([n.staticClass,n.class]);if(o){var i,a,s,f=(a=(i=t).body,s=i.document,a?window.document.body:!!s&&window.document.documentElement);if(f){var c=function(e,t){if(!t.length)return;const{classList:n}=e;return t.filter((e=>{if(!n.contains(e))return n.add(e),!0}))}(f,o),u=function(){!function(e,t){if(!t||!t.length)return;let n;for(;n=t.shift();)e.classList.remove(n);e.classList.length||e.removeAttribute("class")}(f,c)};r.$once("hook:beforeUpdate",u),r.$once("hook:destroyed",u)}}},t=Object.prototype.hasOwnProperty,n=function(e,t,n){var r="&"===t[0],o="~"===(t=r?t.slice(1):t)[0],i="!"===(t=o?t.slice(1):t)[0];return{o:e,t:t=i?t.slice(1):t,i:n,u:{once:o,capture:i,passive:r}}},r=function(e){var r,o,i,a=e.props,s=e.listeners,f=e.parent,c=function(e,r){var o,i,a=[];for(var s in r)if(o=r,i=s,t.call(o,i)){var f=r[s],c=n(e,s,f);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),s),u=function(){!function(e){for(var t;t=e.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(c)};f.$once("hook:beforeUpdate",u),f.$once("hook:destroyed",u)},o=function(t){r(t),e(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(e,t){return t.parent._isMounted?o(t):t.parent.$once("hook:mounted",(function(){o(t)})),t.slots().default}}}()}}]);