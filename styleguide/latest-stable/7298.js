(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[7298],{21205:n=>{n.exports=function(n,e,t,a){var o=-1,d=null==n?0:n.length;for(a&&d&&(t=n[++o]);++o<d;)t=e(t,n[o],o,n);return t}},88263:n=>{var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(e)||[]}},642:n=>{n.exports=function(n){return function(e){return null==n?void 0:n[e]}}},48014:(n,e,t)=>{var a=t(21205),o=t(64383),d=t(15208),r=RegExp("['’]","g");n.exports=function(n){return function(e){return a(d(o(e).replace(r,"")),n,"")}}},8303:(n,e,t)=>{var a=t(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});n.exports=a},49952:n=>{var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return e.test(n)}},46083:n=>{var e="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="["+o+"]",r="\\d+",i="[\\u2700-\\u27bf]",l="["+t+"]",c="[^\\ud800-\\udfff"+o+r+e+t+a+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+a+"]",s="(?:"+l+"|"+c+")",v="(?:"+p+"|"+c+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",u="(?:['’](?:D|LL|M|RE|S|T|VE))?",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",k="[\\ufe0e\\ufe0f]?",w=k+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",b,m].join("|")+")"+k+f+")*"),y="(?:"+[i,b,m].join("|")+")"+w,g=RegExp([p+"?"+l+"+"+h+"(?="+[d,p,"$"].join("|")+")",v+"+"+u+"(?="+[d,p+s,"$"].join("|")+")",p+"?"+s+"+"+h,p+"+"+u,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,y].join("|"),"g");n.exports=function(n){return n.match(g)||[]}},64383:(n,e,t)=>{var a=t(8303),o=t(72049),d=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=o(n))&&n.replace(d,a).replace(r,"")}},95573:(n,e,t)=>{var a=t(48014)((function(n,e,t){return n+(t?"-":"")+e.toLowerCase()}));n.exports=a},15208:(n,e,t)=>{var a=t(88263),o=t(49952),d=t(72049),r=t(46083);n.exports=function(n,e,t){return n=d(n),void 0===(e=t?void 0:e)?o(n)?r(n):a(n):n.match(e)||[]}},53403:(n,e,t)=>{"use strict";t.d(e,{U:()=>b});var a=t(9152),o=t(32416),d=t(2606),r=t(27060);const i={inject:{theme:{default:(0,d.uH)(),from:d.YH}},inheritAttrs:!1,props:{label:{type:String,default:void 0},sublabel:{type:String,default:void 0},requirementLabel:{type:String,default:void 0},size:{type:String,default:"medium",validator:n=>["small","medium","large"].includes(n)},bgColor:{type:String,default:void 0,validator:n=>(0,a.Vi)(n).isValid()||"transparent"===n},color:{type:String,default:void 0,validator:n=>(0,a.Vi)(n).isValid()},padding:{type:String,default:"16px 24px",validator:(0,r.Z)("padding")}},computed:{...(0,d.C9)("container",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,"--padding":this.padding}},hasLabel(){return this.$slots.label||this.label},hasSublabel(){return this.$slots.sublabel||this.sublabel},hasRequirementLabel(){return this.$slots.requirementLabel||this.$slots["requirement-label"]||this.requirementLabel},hasHeaderContent(){return this.hasLabel||this.hasSublabel||this.hasRequirementLabel}},mounted(){o.Z.warn(!(this.$slots.label&&this.label),"Label slot cannot be used together with label prop, former overrides the latter.","Container"),o.Z.warn(!(this.$slots.sublabel&&this.sublabel),"Sublabel slot cannot be used together with sublabel prop, former overrides the latter.","Container"),o.Z.warn(!((this.$slots.requirementLabel||this.$slots["requirement-label"])&&this.requirementLabel),"Requirement Label slot cannot be used together with requirement label prop, former overrides the latter.","Container")}};var l=t(58187),c=t.n(l);const b=(0,t(51900).Z)(i,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",n._g(n._b({class:[n.$s.Container,n.$s["size_"+n.size]],style:n.style},"section",n.$attrs,!1),n.$listeners),[n.hasHeaderContent?t("header",{class:n.$s.Header},[n.hasLabel?t("div",{class:n.$s.Label},[n._t("label",(function(){return[n._v("\n\t\t\t\t"+n._s(n.label)+"\n\t\t\t")]})),n._v(" "),n.hasSublabel?t("div",{class:n.$s.Sublabel},[n._t("sublabel",(function(){return[n._v("\n\t\t\t\t\t"+n._s(n.sublabel)+"\n\t\t\t\t")]}))],2):n._e()],2):n._e(),n._v(" "),n.hasRequirementLabel?t("div",{class:n.$s.RequirementLabel},[n._t("requirement-label",(function(){return[n._v("\n\t\t\t\t"+n._s(n.requirementLabel)+"\n\t\t\t")]}))],2):n._e()]):n._e(),n._v(" "),n._t("default")],2)}),[],!1,(function(n){this.$s=c().locals||c()}),null,null).exports},79338:(n,e,t)=>{"use strict";t.d(e,{j:()=>l});var a=t(2606),o=t(27060);const d={inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},size:{type:String,default:void 0,validator:(0,o.Z)("height")},color:{type:String,default:void 0,validator:(0,o.Z)("color")}},computed:{...(0,a.C9)("divider",["pattern","color","size"]),styles(){return{"--divider-color":this.resolvedColor,"--divider-size":this.resolvedSize}}}};var r=t(23295),i=t.n(r);const l=(0,t(51900).Z)(d,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",n._g(n._b({class:n.$s.Divider,style:n.styles},"div",n.$attrs,!1),n.$listeners))}),[],!1,(function(n){this.$s=i().locals||i()}),null,null).exports},72971:(n,e,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n.Container_qgBQ0 {\n\tpadding: var(--padding);\n\tbackground-color: var(--bg-color, inherit);\n}\n.Label_Z2G32 {\n\tmargin-bottom: 16px;\n\tcolor: var(--color, var(--maker-color-heading, #000000));\n\tfont-weight: var(--maker-font-heading-font-weight, 500);\n\tfont-size: 14px;\n\tfont-family: var(--maker-font-heading-font-family, inherit);\n\tline-height: 20px;\n}\n.size_small_rA2CG .Label_Z2G32 {\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\tletter-spacing: 0.5px;\n\t\ttext-transform: uppercase;\n}\n.size_medium_HmOW3 .Label_Z2G32 {\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n}\n.size_large_XJvD5 .Label_Z2G32 {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n}\n.Sublabel_zfbi9 {\n\tcolor: var(--color, var(--maker-color-body, #000000));\n\tfont-weight: var(--maker-font-body-font-weight, 400);\n\tfont-size: 14px;\n\tfont-family: var(--maker-font-body-font-family, inherit);\n\tline-height: 24px;\n\tletter-spacing: normal;\n\ttext-transform: none;\n}\n.RequirementLabel_B6FKi {\n\tpadding-left: 8px;\n\tcolor: var(--color, inherit);\n\tfont-size: 14px;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.Header__pri2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tfont-size: 14px;\n}\n",""]),a.locals={Container:"Container_qgBQ0",Label:"Label_Z2G32",size_small:"size_small_rA2CG",size_medium:"size_medium_HmOW3",size_large:"size_large_XJvD5",Sublabel:"Sublabel_zfbi9",RequirementLabel:"RequirementLabel_B6FKi",Header:"Header__pri2"},n.exports=a},12474:(n,e,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n.Divider__q2yX {\n\theight: var(--divider-size);\n\tmargin: 0;\n\tpadding: 0;\n\tbackground-color: var(--divider-color);\n\tborder: none;\n\ttransition: height 0.5s;\n}\n",""]),a.locals={Divider:"Divider__q2yX"},n.exports=a},58558:(n,e,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,"\n.mobile[data-v-12a9401e] {\n\toverflow: hidden;\n\tborder-radius: 30px;\n\tpadding: 32px 16px;\n\twidth: 400px;\n\tborder: 2px solid var(--maker-color-neutral-10, #f1f1f1);\n\tbox-shadow:\n\t\t4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),\n\t\t12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),\n\t\t23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),\n\t\t38px 51px 54px -40px rgba(0, 0, 0, 0.098);\n}\n.mobile-scroll[data-v-12a9401e] {\n\tborder: 2px solid var(--maker-color-neutral-10, #f1f1f1);\n}\n",""]),n.exports=a},9001:(n,e,t)=>{var a=t(77705)((function(n){return n[1]}));a.push([n.id,'\n.markdown-body .octicon[data-v-525c71ee] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-525c71ee] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-525c71ee]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-525c71ee],\n.markdown-body h2 .octicon-link[data-v-525c71ee],\n.markdown-body h3 .octicon-link[data-v-525c71ee],\n.markdown-body h4 .octicon-link[data-v-525c71ee],\n.markdown-body h5 .octicon-link[data-v-525c71ee],\n.markdown-body h6 .octicon-link[data-v-525c71ee] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-525c71ee],\n.markdown-body h2:hover .anchor[data-v-525c71ee],\n.markdown-body h3:hover .anchor[data-v-525c71ee],\n.markdown-body h4:hover .anchor[data-v-525c71ee],\n.markdown-body h5:hover .anchor[data-v-525c71ee],\n.markdown-body h6:hover .anchor[data-v-525c71ee] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-525c71ee],\n.markdown-body h2:hover .anchor .octicon-link[data-v-525c71ee],\n.markdown-body h3:hover .anchor .octicon-link[data-v-525c71ee],\n.markdown-body h4:hover .anchor .octicon-link[data-v-525c71ee],\n.markdown-body h5:hover .anchor .octicon-link[data-v-525c71ee],\n.markdown-body h6:hover .anchor .octicon-link[data-v-525c71ee] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-525c71ee]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-525c71ee]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-525c71ee]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-525c71ee]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-525c71ee]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-525c71ee]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-525c71ee] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-525c71ee] {\n  display: block;\n}\n.markdown-body summary[data-v-525c71ee] {\n  display: list-item;\n}\n.markdown-body a[data-v-525c71ee] {\n  background-color: initial;\n}\n.markdown-body a[data-v-525c71ee]:active,\n.markdown-body a[data-v-525c71ee]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-525c71ee] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-525c71ee] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-525c71ee] {\n  border-style: none;\n}\n.markdown-body code[data-v-525c71ee],\n.markdown-body kbd[data-v-525c71ee],\n.markdown-body pre[data-v-525c71ee] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-525c71ee] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-525c71ee] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-525c71ee] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-525c71ee] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-525c71ee] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-525c71ee] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-525c71ee] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-525c71ee]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-525c71ee] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-525c71ee] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-525c71ee]:after,\n.markdown-body hr[data-v-525c71ee]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-525c71ee]:after {\n  clear: both;\n}\n.markdown-body table[data-v-525c71ee] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-525c71ee],\n.markdown-body th[data-v-525c71ee] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-525c71ee] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-525c71ee] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-525c71ee],\n.markdown-body h2[data-v-525c71ee],\n.markdown-body h3[data-v-525c71ee],\n.markdown-body h4[data-v-525c71ee],\n.markdown-body h5[data-v-525c71ee],\n.markdown-body h6[data-v-525c71ee] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-525c71ee] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-525c71ee],\n.markdown-body h2[data-v-525c71ee] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-525c71ee] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-525c71ee] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-525c71ee],\n.markdown-body h4[data-v-525c71ee] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-525c71ee] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-525c71ee] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-525c71ee],\n.markdown-body h6[data-v-525c71ee] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-525c71ee] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-525c71ee] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-525c71ee] {\n  margin: 0;\n}\n.markdown-body ol[data-v-525c71ee],\n.markdown-body ul[data-v-525c71ee] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-525c71ee],\n.markdown-body ul ol[data-v-525c71ee] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-525c71ee],\n.markdown-body ol ul ol[data-v-525c71ee],\n.markdown-body ul ol ol[data-v-525c71ee],\n.markdown-body ul ul ol[data-v-525c71ee] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-525c71ee] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-525c71ee],\n.markdown-body pre[data-v-525c71ee] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-525c71ee] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-525c71ee]::-webkit-inner-spin-button,\n.markdown-body input[data-v-525c71ee]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-525c71ee] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-525c71ee] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-525c71ee] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-525c71ee] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-525c71ee] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-525c71ee] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-525c71ee] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-525c71ee] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-525c71ee] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-525c71ee] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-525c71ee] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-525c71ee] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-525c71ee] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-525c71ee] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-525c71ee] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-525c71ee],\n.markdown-body .px-3[data-v-525c71ee] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-525c71ee] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-525c71ee] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-525c71ee] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-525c71ee] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-525c71ee] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-525c71ee] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-525c71ee] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-525c71ee] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-525c71ee],\n.markdown-body .pl-s .pl-v[data-v-525c71ee] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-525c71ee],\n.markdown-body .pl-en[data-v-525c71ee] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-525c71ee],\n.markdown-body .pl-smi[data-v-525c71ee] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-525c71ee] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-525c71ee] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-525c71ee],\n.markdown-body .pl-s[data-v-525c71ee],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-525c71ee],\n.markdown-body .pl-sr[data-v-525c71ee],\n.markdown-body .pl-sr .pl-cce[data-v-525c71ee],\n.markdown-body .pl-sr .pl-sra[data-v-525c71ee],\n.markdown-body .pl-sr .pl-sre[data-v-525c71ee] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-525c71ee],\n.markdown-body .pl-v[data-v-525c71ee] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-525c71ee] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-525c71ee] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-525c71ee] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-525c71ee]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-525c71ee] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-525c71ee] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-525c71ee],\n.markdown-body .pl-mh .pl-en[data-v-525c71ee],\n.markdown-body .pl-ms[data-v-525c71ee] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-525c71ee] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-525c71ee] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-525c71ee] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-525c71ee] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-525c71ee] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-525c71ee] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-525c71ee] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-525c71ee] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-525c71ee] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-525c71ee] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-525c71ee] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-525c71ee] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-525c71ee] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-525c71ee] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-525c71ee] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-525c71ee] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-525c71ee] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-525c71ee] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-525c71ee] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-525c71ee] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-525c71ee] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-525c71ee] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-525c71ee] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-525c71ee] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-525c71ee] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-525c71ee] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-525c71ee] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-525c71ee] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-525c71ee] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-525c71ee] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-525c71ee]:after,\n.markdown-body[data-v-525c71ee]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-525c71ee]:after {\n  clear: both;\n}\n.markdown-body[data-v-525c71ee]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-525c71ee]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-525c71ee]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-525c71ee],\n.markdown-body details[data-v-525c71ee],\n.markdown-body dl[data-v-525c71ee],\n.markdown-body ol[data-v-525c71ee],\n.markdown-body p[data-v-525c71ee],\n.markdown-body pre[data-v-525c71ee],\n.markdown-body table[data-v-525c71ee],\n.markdown-body ul[data-v-525c71ee] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-525c71ee] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-525c71ee] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-525c71ee]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-525c71ee]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-525c71ee],\n.markdown-body h2[data-v-525c71ee],\n.markdown-body h3[data-v-525c71ee],\n.markdown-body h4[data-v-525c71ee],\n.markdown-body h5[data-v-525c71ee],\n.markdown-body h6[data-v-525c71ee] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-525c71ee] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-525c71ee],\n.markdown-body h2[data-v-525c71ee] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-525c71ee] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-525c71ee] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-525c71ee] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-525c71ee] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-525c71ee] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-525c71ee],\n.markdown-body ul[data-v-525c71ee] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-525c71ee],\n.markdown-body ol ul[data-v-525c71ee],\n.markdown-body ul ol[data-v-525c71ee],\n.markdown-body ul ul[data-v-525c71ee] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-525c71ee] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-525c71ee] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-525c71ee] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-525c71ee] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-525c71ee] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-525c71ee] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-525c71ee] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-525c71ee] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-525c71ee],\n.markdown-body table th[data-v-525c71ee] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-525c71ee] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-525c71ee]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-525c71ee] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-525c71ee] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-525c71ee] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-525c71ee] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-525c71ee] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-525c71ee] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-525c71ee] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-525c71ee] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-525c71ee],\n.markdown-body pre[data-v-525c71ee] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-525c71ee] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-525c71ee] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-525c71ee]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-525c71ee] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-525c71ee] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-525c71ee] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-525c71ee]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-525c71ee]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-525c71ee] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-525c71ee] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-525c71ee],\n.markdown-body .pl-token[data-v-525c71ee]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-525c71ee] {\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-525c71ee] {\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-525c71ee] {\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-525c71ee] {\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-525c71ee] {\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-525c71ee] {\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-525c71ee] {\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-525c71ee] {\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-525c71ee] {\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-525c71ee] {\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-525c71ee] {\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-525c71ee] {\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-525c71ee] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-525c71ee] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-525c71ee] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},6099:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var a=t(79338);const o={components:{MDivider:a.j}};var d=t(51900);const r=(0,d.Z)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h4",[n._v("divider 👇")]),n._v(" "),t("m-divider"),n._v(" "),t("h4",[n._v("divider ☝️")])],1)}),[],!1,null,null,null).exports;var i=t(415),l=t(2317),c=t(53403);const b={components:{MContainer:c.U,MDivider:a.j,MButton:l.G},data:()=>({size:0}),computed:{gapSize(){return this.size%16+8},gapPattern(){return"gap-".concat(this.gapSize)}},methods:{toggleSize(){this.size+=8}}};t(73313);const m=(0,d.Z)(b,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("m-button",{attrs:{size:"small",pattern:"primaryOutline"},on:{click:n.toggleSize}},[n._v("\n\t\ttoggle gap size ("+n._s(n.gapSize)+"px)\n\t")]),n._v(" "),t("m-container",{attrs:{label:"Container one",sublabel:"Some sublabel","requirement-label":"Also do X"}},[n._v("\n\t\tContent inside the container.\n\t")]),n._v(" "),t("m-divider",{attrs:{pattern:n.gapPattern}}),n._v(" "),t("m-container",{attrs:{label:"Container two",sublabel:"Other sublabel","requirement-label":"Also do Y"}},[n._v("\n\t\tContent inside another container.\n\t")]),n._v(" "),t("m-divider",{attrs:{pattern:n.gapPattern}}),n._v(" "),t("m-container",{attrs:{label:"Container three",sublabel:"Another sublabel","requirement-label":"Also do Z"}},[n._v("\n\t\tContent inside the last container.\n\t")])],1)}),[],!1,null,"12a9401e",null).exports,p={components:{Demo0:r,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile,Demo1:m}};t(73799);const s=(0,d.Z)(p,(function(){var n=this,e=n.$createElement;n._self._c;return n._m(5)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("Sometimes you may want to visually separate a list of containers, you can do so using the built-in "),t("code",[n._v("gap-8")]),n._v(" and "),t("code",[n._v("gap-16")]),n._v(" patterns like so:")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("Supports attributes from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[t("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("Themable props* can be configured via the "),t("a",{attrs:{href:"#/Theme"}},[n._v("Theme")]),n._v(" component using the key "),t("code",[n._v("divider")]),n._v(".")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("Prop")]),n._v(" "),t("th",[n._v("Type")]),n._v(" "),t("th",[n._v("Default")]),n._v(" "),t("th",[n._v("Possible values")]),n._v(" "),t("th",[n._v("Description")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("pattern*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[n._v("—")]),n._v(" "),t("td",[t("code",[n._v("'gap-8'")]),n._v(", "),t("code",[n._v("'gap-16'")]),n._v(", any custom pattern defined within the theme")]),n._v(" "),t("td",[n._v("pattern defined at theme level")])]),n._v(" "),t("tr",[t("td",[n._v("size*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'1px'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("Size (height) of the divider")])]),n._v(" "),t("tr",[t("td",[n._v("color*")]),n._v(" "),t("td",[t("code",[n._v("string")])]),n._v(" "),t("td",[t("code",[n._v("'#d3d3d3'")])]),n._v(" "),t("td",[n._v("-")]),n._v(" "),t("td",[n._v("Color of the divider")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("Supports events from "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"}},[t("code",[n._v("<div>")])]),n._v(".")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Divider")]),n._v(" "),t("p",[n._v("Use Divider to horizontally separate similar content.")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<h4>divider 👇</h4>\n\t\t<m-divider />\n\t\t<h4>divider ☝️</h4>\n\t</div>\n</template>\n\n<script>\nimport { MDivider } from '@square/maker/components/Divider';\n\nexport default {\n\tcomponents: {\n\t\tMDivider,\n\t},\n};\n<\/script>\n")]],2)],1),n._v(" "),t("h2",[n._v("Examples")]),n._v(" "),n._m(0),n._v(" "),t("demo-collapse",[t("Demo1"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-button\n\t\t\tsize="small"\n\t\t\tpattern="primaryOutline"\n\t\t\t@click="toggleSize"\n\t\t>\n\t\t\ttoggle gap size ({{ gapSize }}px)\n\t\t</m-button>\n\t\t<m-container\n\t\t\tlabel="Container one"\n\t\t\tsublabel="Some sublabel"\n\t\t\trequirement-label="Also do X"\n\t\t>\n\t\t\tContent inside the container.\n\t\t</m-container>\n\t\t<m-divider :pattern="gapPattern" />\n\t\t<m-container\n\t\t\tlabel="Container two"\n\t\t\tsublabel="Other sublabel"\n\t\t\trequirement-label="Also do Y"\n\t\t>\n\t\t\tContent inside another container.\n\t\t</m-container>\n\t\t<m-divider :pattern="gapPattern" />\n\t\t<m-container\n\t\t\tlabel="Container three"\n\t\t\tsublabel="Another sublabel"\n\t\t\trequirement-label="Also do Z"\n\t\t>\n\t\t\tContent inside the last container.\n\t\t</m-container>\n\t</div>\n</template>\n\n<script>\nimport { MButton } from \'@square/maker/components/Button\';\nimport { MContainer } from \'@square/maker/components/Container\';\nimport { MDivider } from \'@square/maker/components/Divider\';\n\nconst STEP = 8;\nconst MAX = 16;\n\nexport default {\n\tcomponents: {\n\t\tMContainer,\n\t\tMDivider,\n\t\tMButton,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tsize: 0,\n\t\t};\n\t},\n\tcomputed: {\n\t\tgapSize() {\n\t\t\treturn (this.size % MAX) + STEP;\n\t\t},\n\t\tgapPattern() {\n\t\t\treturn `gap-${this.gapSize}`;\n\t\t},\n\t},\n\tmethods: {\n\t\ttoggleSize() {\n\t\t\tthis.size += STEP;\n\t\t},\n\t},\n};\n<\/script>\n\n<style scoped>\n.mobile {\n\toverflow: hidden;\n\tborder-radius: 30px;\n\tpadding: 32px 16px;\n\twidth: 400px;\n\tborder: 2px solid $maker-color-neutral-10;\n\tbox-shadow:\n\t\t4.8px 6.4px 10.8px -40px rgba(0, 0, 0, 0.34),\n\t\t12.2px 16.4px 18.2px -40px rgba(0, 0, 0, 0.213),\n\t\t23.7px 31.8px 26.4px -40px rgba(0, 0, 0, 0.159),\n\t\t38px 51px 54px -40px rgba(0, 0, 0, 0.098);\n}\n\n.mobile-scroll {\n\tborder: 2px solid $maker-color-neutral-10;\n}\n</style>\n')]],2)],1),n._v(" "),t("h2",[n._v("Props")]),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),n._m(3),n._v(" "),t("h2",[n._v("Events")]),n._v(" "),n._m(4)],1)}],!1,null,"525c71ee",null).exports},58187:(n,e,t)=>{var a=t(72971);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("a829cb1e",a,!0,{})},23295:(n,e,t)=>{var a=t(12474);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("08f41739",a,!0,{})},73313:(n,e,t)=>{var a=t(58558);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("7e2cf3b1",a,!0,{})},73799:(n,e,t)=>{var a=t(9001);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals);(0,t(54023).Z)("f84fdcec",a,!0,{})}}]);