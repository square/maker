(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(n,a,o){var t=o(128),d="object"==typeof self&&self&&self.Object===Object&&self,r=t||d||Function("return this")();n.exports=r},128:function(n,a,o){(function(a){var o="object"==typeof a&&a&&a.Object===Object&&a;n.exports=o}).call(this,o(4))},129:function(n,a,o){var t=o(130),d=o(133);n.exports=function(n){return"symbol"==typeof n||d(n)&&"[object Symbol]"==t(n)}},130:function(n,a,o){var t=o(88),d=o(131),r=o(132),e=t?t.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":e&&e in Object(n)?d(n):r(n)}},131:function(n,a,o){var t=o(88),d=Object.prototype,r=d.hasOwnProperty,e=d.toString,b=t?t.toStringTag:void 0;n.exports=function(n){var a=r.call(n,b),o=n[b];try{n[b]=void 0;var t=!0}catch(n){}var d=e.call(n);return t&&(a?n[b]=o:delete n[b]),d}},132:function(n,a){var o=Object.prototype.toString;n.exports=function(n){return o.call(n)}},133:function(n,a){n.exports=function(n){return null!=n&&"object"==typeof n}},182:function(n,a,o){var t=o(329);n.exports=function(n){return null==n?"":t(n)}},183:function(n,a,o){var t=o(337);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o(3).default)("5d0780db",t,!0,{})},323:function(n,a,o){var t=o(324)((function(n,a,o){return n+(o?"-":"")+a.toLowerCase()}));n.exports=t},324:function(n,a,o){var t=o(325),d=o(326),r=o(332),e=RegExp("['’]","g");n.exports=function(n){return function(a){return t(r(d(a).replace(e,"")),n,"")}}},325:function(n,a){n.exports=function(n,a,o,t){var d=-1,r=null==n?0:n.length;for(t&&r&&(o=n[++d]);++d<r;)o=a(o,n[d],d,n);return o}},326:function(n,a,o){var t=o(327),d=o(182),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,e=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=d(n))&&n.replace(r,t).replace(e,"")}},327:function(n,a,o){var t=o(328)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=t},328:function(n,a){n.exports=function(n){return function(a){return null==n?void 0:n[a]}}},329:function(n,a,o){var t=o(88),d=o(330),r=o(331),e=o(129),b=t?t.prototype:void 0,i=b?b.toString:void 0;n.exports=function n(a){if("string"==typeof a)return a;if(r(a))return d(a,n)+"";if(e(a))return i?i.call(a):"";var o=a+"";return"0"==o&&1/a==-1/0?"-0":o}},330:function(n,a){n.exports=function(n,a){for(var o=-1,t=null==n?0:n.length,d=Array(t);++o<t;)d[o]=a(n[o],o,n);return d}},331:function(n,a){var o=Array.isArray;n.exports=o},332:function(n,a,o){var t=o(333),d=o(334),r=o(182),e=o(335);n.exports=function(n,a,o){return n=r(n),void 0===(a=o?void 0:a)?d(n)?e(n):t(n):n.match(a)||[]}},333:function(n,a){var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(o)||[]}},334:function(n,a){var o=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return o.test(n)}},335:function(n,a){var o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",t="["+o+"]",d="\\d+",r="[\\u2700-\\u27bf]",e="[a-z\\xdf-\\xf6\\xf8-\\xff]",b="[^\\ud800-\\udfff"+o+d+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+e+"|"+b+")",p="(?:"+m+"|"+b+")",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",f="[\\ufe0e\\ufe0f]?"+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,c].join("|")+")[\\ufe0e\\ufe0f]?"+v+")*"),s="(?:"+[r,i,c].join("|")+")"+f,y=RegExp([m+"?"+e+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[t,m,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[t,m+l,"$"].join("|")+")",m+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",d,s].join("|"),"g");n.exports=function(n){return n.match(y)||[]}},336:function(n,a,o){"use strict";o(183)},337:function(n,a,o){var t=o(1)(!1);t.push([n.i,'\n.markdown-body .octicon[data-v-628bca71] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-628bca71] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-628bca71]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-628bca71],\n.markdown-body h2 .octicon-link[data-v-628bca71],\n.markdown-body h3 .octicon-link[data-v-628bca71],\n.markdown-body h4 .octicon-link[data-v-628bca71],\n.markdown-body h5 .octicon-link[data-v-628bca71],\n.markdown-body h6 .octicon-link[data-v-628bca71] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-628bca71],\n.markdown-body h2:hover .anchor[data-v-628bca71],\n.markdown-body h3:hover .anchor[data-v-628bca71],\n.markdown-body h4:hover .anchor[data-v-628bca71],\n.markdown-body h5:hover .anchor[data-v-628bca71],\n.markdown-body h6:hover .anchor[data-v-628bca71] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-628bca71],\n.markdown-body h2:hover .anchor .octicon-link[data-v-628bca71],\n.markdown-body h3:hover .anchor .octicon-link[data-v-628bca71],\n.markdown-body h4:hover .anchor .octicon-link[data-v-628bca71],\n.markdown-body h5:hover .anchor .octicon-link[data-v-628bca71],\n.markdown-body h6:hover .anchor .octicon-link[data-v-628bca71] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-628bca71]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-628bca71]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-628bca71]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-628bca71]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-628bca71]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-628bca71]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-628bca71] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-628bca71] {\n  display: block;\n}\n.markdown-body summary[data-v-628bca71] {\n  display: list-item;\n}\n.markdown-body a[data-v-628bca71] {\n  background-color: initial;\n}\n.markdown-body a[data-v-628bca71]:active,\n.markdown-body a[data-v-628bca71]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-628bca71] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-628bca71] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-628bca71] {\n  border-style: none;\n}\n.markdown-body code[data-v-628bca71],\n.markdown-body kbd[data-v-628bca71],\n.markdown-body pre[data-v-628bca71] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-628bca71] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-628bca71] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-628bca71] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-628bca71] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-628bca71] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-628bca71] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-628bca71] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-628bca71]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-628bca71] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-628bca71] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-628bca71]:after,\n.markdown-body hr[data-v-628bca71]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-628bca71]:after {\n  clear: both;\n}\n.markdown-body table[data-v-628bca71] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-628bca71],\n.markdown-body th[data-v-628bca71] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-628bca71] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-628bca71] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-628bca71],\n.markdown-body h2[data-v-628bca71],\n.markdown-body h3[data-v-628bca71],\n.markdown-body h4[data-v-628bca71],\n.markdown-body h5[data-v-628bca71],\n.markdown-body h6[data-v-628bca71] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-628bca71] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-628bca71],\n.markdown-body h2[data-v-628bca71] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-628bca71] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-628bca71] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-628bca71],\n.markdown-body h4[data-v-628bca71] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-628bca71] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-628bca71] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-628bca71],\n.markdown-body h6[data-v-628bca71] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-628bca71] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-628bca71] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-628bca71] {\n  margin: 0;\n}\n.markdown-body ol[data-v-628bca71],\n.markdown-body ul[data-v-628bca71] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-628bca71],\n.markdown-body ul ol[data-v-628bca71] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-628bca71],\n.markdown-body ol ul ol[data-v-628bca71],\n.markdown-body ul ol ol[data-v-628bca71],\n.markdown-body ul ul ol[data-v-628bca71] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-628bca71] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-628bca71],\n.markdown-body pre[data-v-628bca71] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-628bca71] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-628bca71]::-webkit-inner-spin-button,\n.markdown-body input[data-v-628bca71]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-628bca71] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-628bca71] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-628bca71] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-628bca71] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-628bca71] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-628bca71] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-628bca71] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-628bca71] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-628bca71] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-628bca71] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-628bca71] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-628bca71] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-628bca71] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-628bca71] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-628bca71] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-628bca71],\n.markdown-body .px-3[data-v-628bca71] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-628bca71] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-628bca71] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-628bca71] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-628bca71] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-628bca71] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-628bca71] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-628bca71] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-628bca71] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-628bca71],\n.markdown-body .pl-s .pl-v[data-v-628bca71] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-628bca71],\n.markdown-body .pl-en[data-v-628bca71] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-628bca71],\n.markdown-body .pl-smi[data-v-628bca71] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-628bca71] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-628bca71] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-628bca71],\n.markdown-body .pl-s[data-v-628bca71],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-628bca71],\n.markdown-body .pl-sr[data-v-628bca71],\n.markdown-body .pl-sr .pl-cce[data-v-628bca71],\n.markdown-body .pl-sr .pl-sra[data-v-628bca71],\n.markdown-body .pl-sr .pl-sre[data-v-628bca71] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-628bca71],\n.markdown-body .pl-v[data-v-628bca71] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-628bca71] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-628bca71] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-628bca71] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-628bca71]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-628bca71] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-628bca71] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-628bca71],\n.markdown-body .pl-mh .pl-en[data-v-628bca71],\n.markdown-body .pl-ms[data-v-628bca71] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-628bca71] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-628bca71] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-628bca71] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-628bca71] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-628bca71] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-628bca71] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-628bca71] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-628bca71] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-628bca71] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-628bca71] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-628bca71] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-628bca71] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-628bca71] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-628bca71] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-628bca71] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-628bca71] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-628bca71] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-628bca71] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-628bca71] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-628bca71] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-628bca71] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-628bca71] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-628bca71] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-628bca71] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-628bca71] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-628bca71] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-628bca71] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-628bca71] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-628bca71] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-628bca71] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-628bca71]:after,\n.markdown-body[data-v-628bca71]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-628bca71]:after {\n  clear: both;\n}\n.markdown-body[data-v-628bca71]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-628bca71]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-628bca71]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-628bca71],\n.markdown-body details[data-v-628bca71],\n.markdown-body dl[data-v-628bca71],\n.markdown-body ol[data-v-628bca71],\n.markdown-body p[data-v-628bca71],\n.markdown-body pre[data-v-628bca71],\n.markdown-body table[data-v-628bca71],\n.markdown-body ul[data-v-628bca71] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-628bca71] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-628bca71] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-628bca71]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-628bca71]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-628bca71],\n.markdown-body h2[data-v-628bca71],\n.markdown-body h3[data-v-628bca71],\n.markdown-body h4[data-v-628bca71],\n.markdown-body h5[data-v-628bca71],\n.markdown-body h6[data-v-628bca71] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-628bca71] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-628bca71],\n.markdown-body h2[data-v-628bca71] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-628bca71] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-628bca71] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-628bca71] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-628bca71] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-628bca71] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-628bca71],\n.markdown-body ul[data-v-628bca71] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-628bca71],\n.markdown-body ol ul[data-v-628bca71],\n.markdown-body ul ol[data-v-628bca71],\n.markdown-body ul ul[data-v-628bca71] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-628bca71] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-628bca71] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-628bca71] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-628bca71] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-628bca71] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-628bca71] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-628bca71] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-628bca71] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-628bca71],\n.markdown-body table th[data-v-628bca71] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-628bca71] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-628bca71]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-628bca71] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-628bca71] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-628bca71] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-628bca71] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-628bca71] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-628bca71] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-628bca71] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-628bca71] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-628bca71],\n.markdown-body pre[data-v-628bca71] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-628bca71] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-628bca71] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-628bca71]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-628bca71] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-628bca71] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-628bca71] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-628bca71]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-628bca71]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-628bca71] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-628bca71] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-628bca71],\n.markdown-body .pl-token[data-v-628bca71]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-628bca71] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-628bca71] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-628bca71] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-628bca71] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-628bca71] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-628bca71] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-628bca71] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-628bca71] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-628bca71] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-628bca71] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-628bca71] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-628bca71] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-628bca71] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-628bca71] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-628bca71] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},42:function(n,a,o){"use strict";o.r(a);var t=o(323),d=o.n(t),r={inheritAttrs:!1,mounted(){this.applyTheme()},updated(){this.applyTheme()},methods:{applyTheme(){const{$el:n}=this;Object.entries(this.$attrs).forEach(([a,o])=>{Object.entries(o).forEach(([o,t])=>{const d="--"+this.hash(a,o);n.style.setProperty(d,t)})})},hash:(n,a)=>`${d()(n)}-${d()(a)}`}},e=o(0),b={components:{MTheme:Object(e.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",[this._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({theme:{colors:{primary:"#a079a4",primaryText:"#ffffff",secondary:"#f5eff5",secondaryText:"#4f2d52",tertiary:"#ffffff",tertiaryText:"#4f2d52"}}})},i=Object(e.a)(b,(function(){var n=this.$createElement;return(this._self._c||n)("m-theme",this._b({},"m-theme",this.theme,!1))}),[],!1,null,null,null).exports,c=o(54),m={components:{Demo0:i,DemoCollapse:c.DemoCollapse,SrcFile:c.SrcFile}},l=(o(336),Object(e.a)(m,(function(){var n=this.$createElement;this._self._c;return this._m(2)}),[function(){var n=this.$createElement,a=this._self._c||n;return a("p",[this._v("Add the Theme component "),a("em",[this._v("anywhere")]),this._v(" top-level to encapsulate all library components. In this example, the Theme component wraps the entire App.")])},function(){var n=this.$createElement,a=this._self._c||n;return a("table",[a("thead",[a("tr",[a("th",[this._v("Slot")]),this._v(" "),a("th",[this._v("Description")])])]),this._v(" "),a("tbody",[a("tr",[a("td",[this._v("default")]),this._v(" "),a("td",[this._v("—")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Theme")]),n._v(" "),n._m(0),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<m-theme v-bind=\"theme\">\n\t\t\x3c!-- <app /> --\x3e\n\t</m-theme>\n</template>\n\n<script>\nimport { MTheme } from '@square/maker/components/Theme';\n\nexport default {\n\tcomponents: {\n\t\tMTheme,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\ttheme: {\n\t\t\t\tcolors: {\n\t\t\t\t\tprimary: '#a079a4',\n\t\t\t\t\tprimaryText: '#ffffff',\n\n\t\t\t\t\tsecondary: '#f5eff5',\n\t\t\t\t\tsecondaryText: '#4f2d52',\n\n\t\t\t\t\ttertiary: '#ffffff',\n\t\t\t\t\ttertiaryText: '#4f2d52',\n\t\t\t\t},\n\t\t\t},\n\t\t};\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(1)],1)}],!1,null,"628bca71",null));a.default=l.exports},88:function(n,a,o){var t=o(101).Symbol;n.exports=t}}]);