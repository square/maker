!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("chroma-js"));else if("function"==typeof define&&define.amd)define(["chroma-js"],r);else{var t="object"==typeof exports?r(require("chroma-js")):r(e["chroma-js"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,(function(e){return(()=>{"use strict";var r={446:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var f=t[e]={exports:{}};return r[e](f,f.exports,o),f.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>t});var e=o(446),r=o.n(e);const t=function(e,t){if(!t||r().contrast(e,t)<3){const t=.32,o=e.luminance()>t;return r()(o?"#000":"#fff")}return t}})(),n})()}));
//# sourceMappingURL=get-contrast.js.map