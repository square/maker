(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[173],{1205:t=>{t.exports=function(t,o,e,n){var r=-1,a=null==t?0:t.length;for(n&&a&&(e=t[++r]);++r<a;)e=o(e,t[r],r,t);return e}},8263:t=>{var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(o)||[]}},642:t=>{t.exports=function(t){return function(o){return null==t?void 0:t[o]}}},8014:(t,o,e)=>{var n=e(1205),r=e(4383),a=e(5208),i=RegExp("['’]","g");t.exports=function(t){return function(o){return n(a(r(o).replace(i,"")),t,"")}}},8303:(t,o,e)=>{var n=e(642)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});t.exports=n},9952:t=>{var o=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return o.test(t)}},6083:t=>{var o="\\u2700-\\u27bf",e="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",i="\\d+",l="[\\u2700-\\u27bf]",u="["+e+"]",s="[^\\ud800-\\udfff"+r+i+o+e+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+n+"]",m="(?:"+u+"|"+s+")",p="(?:"+c+"|"+s+")",f="(?:['’](?:d|ll|m|re|s|t|ve))?",b="(?:['’](?:D|LL|M|RE|S|T|VE))?",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_="[\\ufe0e\\ufe0f]?",h=_+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,v].join("|")+")"+_+x+")*"),g="(?:"+[l,d,v].join("|")+")"+h,S=RegExp([c+"?"+u+"+"+f+"(?="+[a,c,"$"].join("|")+")",p+"+"+b+"(?="+[a,c+m,"$"].join("|")+")",c+"?"+m+"+"+f,c+"+"+b,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,g].join("|"),"g");t.exports=function(t){return t.match(S)||[]}},4383:(t,o,e)=>{var n=e(8303),r=e(2049),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(a,n).replace(i,"")}},5573:(t,o,e)=>{var n=e(8014)((function(t,o,e){return t+(e?"-":"")+o.toLowerCase()}));t.exports=n},5208:(t,o,e)=>{var n=e(8263),r=e(9952),a=e(2049),i=e(6083);t.exports=function(t,o,e){return t=a(t),void 0===(o=e?void 0:o)?r(t)?i(t):n(t):t.match(o)||[]}},3280:(t,o,e)=>{"use strict";e.d(o,{O:()=>c});var n=e(7060),r=e(2416),a=e(6812),i=e(4868);const l={small:"16px",medium:"24px",large:"32px",xlarge:"40px",xxlarge:"48px"},u=(0,n.Z)("width"),s={components:{RenderFn:i.Z},inject:{theme:{default:(0,a.uH)(),from:a.YH}},inheritAttrs:!1,props:{pattern:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:"small",validator:t=>l[t]||u(t)},color:{type:String,default:void 0,validator:(0,n.Z)("color")},fill:{type:String,default:void 0,validator:(0,n.Z)("fill")}},computed:{...(0,a.C9)("icon",["pattern","name","color","fill"]),iconRenderFn(){let t=this.theme.icons[this.resolvedName];return r.Z.warn(t,"'".concat(this.resolvedName,"' icon not defined in theme"),"Icon"),t=t||this.theme.icons.info,t},inlineStyles(){return{"--color":this.resolvedColor,"--icon-size":l[this.size]||this.size,"--fill":this.resolvedFill}}}};var d=e(3468),v=e.n(d);const c=(0,e(1900).Z)(s,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("render-fn",t._g(t._b({class:t.$s.Icon,style:t.inlineStyles,attrs:{"render-fn":t.iconRenderFn}},"render-fn",t.$attrs,!1),t.$listeners))}),[],!1,(function(t){this.$s=v().locals||v()}),null,null).exports},9414:(t,o,e)=>{"use strict";e.d(o,{g:()=>d});var n=e(7060),r=e(3280);const a=new Set(["small","medium","large","xlarge","xxlarge"]),i=(0,n.Z)("width"),l={components:{MIcon:r.O},props:{size:{type:String,default:"small",validator:t=>a.has(t)||i(t)}}};var u=e(7531),s=e.n(u);const d=(0,e(1900).Z)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:t.$s.Loading},[e("m-icon",{class:t.$s.Spinner,attrs:{size:t.size,name:"spinner"}})],1)}),[],!1,(function(t){this.$s=s().locals||s()}),null,null).exports},4868:(t,o,e)=>{"use strict";e.d(o,{Z:()=>n});const n={props:{renderFn:{type:Function,required:!0}},render(t){return this.renderFn(t)}}},2416:(t,o,e)=>{"use strict";e.d(o,{Z:()=>r});var n=e(4219);const r={warn(t,o,e){t||(0,n.K)(o,e)},error(t,o,e){t||(0,n._)(o,e)}}},6475:(t,o,e)=>{"use strict";e.d(o,{i8:()=>a,dL:()=>i,R4:()=>l,mj:()=>u});var n=e(9152),r=e(3690);(0,n.l7)([r.Z]);const a=.32,i=4.5,l=3;function u(t,o,e=l){let r=o;if(!o||(0,n.Vi)(o).contrast(t)<e){r=(0,n.Vi)(t).luminance()<a?"#ffffff":"#000000"}return r}},5412:(t,o,e)=>{"use strict";e.d(o,{Z:()=>x});var n=e(9931),r=e.n(n),a=e(9152),i=e(3690),l=e(1792),u=e(9792),s=e(6475),d=e(5681);const v=e.n(d)()();(0,a.l7)([i.Z,l.Z,u.Z]);const c={light:{"neutral-0":0,"neutral-10":.05,"neutral-20":.155,"neutral-80":.527,"neutral-90":.9,"neutral-100":1},dark:{"neutral-0":0,"neutral-10":.225,"neutral-20":.37,"neutral-80":.55,"neutral-90":.95,"neutral-100":1}},m={error:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},p={error:{fill:"#cd2026",text:"#ff7566"},warning:{fill:"#ffbf00",text:"#ffbf00"},success:{fill:"#008000",text:"#64cc52"}};function f(t,o){return(0,a.Vi)(t).delta(o)>=.25}function b(t,o){return(0,a.Vi)(t).contrast(o)>=s.R4}function x(t=v.background,o=v.primary){const e=(n=t,(0,a.Vi)(n).luminance()<s.i8);var n;const i=(0,s.mj)(t),l=e?c.dark:c.light,u={};Object.entries(l).forEach((([o,e])=>{u[o]=(0,a.Vi)(t).mix(i,e).toHex()}));const d=e?r()(p):r()(m);return d.contextualPrimary=function(t=v.background,o=v.primary,e){const n=(0,s.mj)(t),r=(0,a.Vi)(o).toHsl(),i={};if(f(o,t)){i.fill=o;const e=.2;i.text=b(o,t)?(0,a.Vi)(o).mix(n,e).toHex():n,i.onFill=(0,s.mj)(i.fill)}else i.fill=n,i.text=n,i.onFill=o;if("#ffffff"===(0,a.Vi)(t).toHex()){const t=25,o=95;i.subtle=(0,a.Vi)({h:r.h,s:t,l:o}).toHex()}else i.subtle=e["neutral-10"];return i}(t,o,u),["error","warning","success"].forEach((o=>{f(d[o].fill,t)||(d[o].onFill=d[o].fill,d[o].fill=i),b(d[o].text,t)||(d[o].text=i),"#ffffff"!==(0,a.Vi)(t).toHex()&&(d[o].subtle=u["neutral-10"]),d[o].onFill||(d[o].onFill=(0,s.mj)(d[o].fill))})),{primary:o,background:t,heading:(0,s.mj)(t),body:(0,s.mj)(t),...u,...d,elevation:e?u["neutral-20"]:"#ffffff",overlay:e?"rgba(255, 255, 255, 0.32)":"rgba(0, 0, 0, 0.32)"}}},5745:(t,o,e)=>{var n=e(7705)((function(t){return t[1]}));n.push([t.id,"\n.Icon_vCfSe {\n\t--icon-size: 16px;\n\t--color: inherit;\n\t--fill: currentColor;\n\n\twidth: var(--icon-size);\n\theight: var(--icon-size);\n\tcolor: var(--color);\n\tfill: var(--fill);\n}\n",""]),n.locals={Icon:"Icon_vCfSe"},t.exports=n},9832:(t,o,e)=>{var n=e(7705)((function(t){return t[1]}));n.push([t.id,"\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n@keyframes spin-one-turn__J3x8 {\nto {\n\t\ttransform: rotate(1turn);\n}\n}\n.Spinner__xbIq {\n\tanimation: spin-one-turn__J3x8 1s linear infinite;\n}\n",""]),n.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq","spin-one-turn":"spin-one-turn__J3x8"},t.exports=n},2510:(t,o,e)=>{var n=e(7705)((function(t){return t[1]}));n.push([t.id,"\n.wrapper[data-v-1e7ec666] {\n\tdisplay: flex;\n\tgrid-gap: 40px;\n\tpadding: 40px;\n}\np[data-v-1e7ec666],\nh3[data-v-1e7ec666] {\n\tmargin: 8px 0 0;\n}\n.controls[data-v-1e7ec666] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 8px;\n}\n.ButtonTable[data-v-1e7ec666] {\n\tmax-width: 100%;\n\tfont-family: -apple-system, 'Helvetica Neue', sans-serif;\n\tborder-collapse: separate;\n\tborder-spacing: 16px;\n}\n.icon[data-v-1e7ec666] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=n},332:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>s});var n=e(4069),r=e(6812),a=e(5412);const i={color:"#9142ff",colorHover:void 0,fontFamily:"Verdana",fontWeight:"normal",fontSize:void 0,fontFamilyHover:"Monospace",fontWeightHover:"bold",fontSizeHover:void 0,textColor:"#ffffff",textColorHover:void 0,borderRadius:void 0,borderRadiusHover:void 0,borderWidth:void 0,borderWidthHover:void 0,borderColor:void 0,borderColorHover:void 0,boxShadowHorizontal:void 0,boxShadowHorizontalHover:void 0,boxShadowVertical:void 0,boxShadowVerticalHover:void 0,boxShadowBlurRadius:void 0,boxShadowBlurRadiusHover:void 0,boxShadowSpreadRadius:void 0,boxShadowSpreadRadiusHover:void 0,boxShadowColor:void 0,boxShadowColorHover:void 0};function l(t,o,e,n,r){return e||n?"".concat(t||0,"px ").concat(o||0,"px ").concat(e||0,"px ").concat(n||0,"px ").concat(r||"#000000"):void 0}const u={components:{MButton:n.G,MTheme:r.qo},data:()=>({buttonText:"Button text that is long and may require truncation",infoText:"Information text that is long and may require truncation",bgColor:"#ffffff",...i}),computed:{theme(){const{fontSize:t,fontFamily:o,fontWeight:e,fontSizeHover:n,fontFamilyHover:r,fontWeightHover:i}=this,l={...o&&{fontFamily:o},...e&&{fontWeight:e},...t&&{fontSize:"".concat(t,"px")}},u={...r&&{fontFamily:r},...i&&{fontWeight:i},...n&&{fontSize:"".concat(n,"px")}};return{colors:{background:this.bgColor,...(0,a.Z)(this.bgColor)},text:{patterns:{buttonLabel:l,buttonLabelHover:u}},button:{textPatternHover:"buttonLabelHover"}}},buttonProps(){const{color:t,colorHover:o,textColor:e,textColorHover:n,borderRadius:r,borderRadiusHover:a,borderWidth:i,borderWidthHover:u,borderColor:s,borderColorHover:d,boxShadowHorizontal:v,boxShadowHorizontalHover:c,boxShadowVertical:m,boxShadowVerticalHover:p,boxShadowBlurRadius:f,boxShadowBlurRadiusHover:b,boxShadowSpreadRadius:x,boxShadowSpreadRadiusHover:_,boxShadowColor:h,boxShadowColorHover:g}=this;return{color:t,colorHover:o,textColor:e,textColorHover:n,borderColor:s,borderColorHover:d,boxShadow:l(v,m,f,x,h),boxShadowHover:l(c,p,b,_,g),...r&&{borderRadius:"".concat(r,"px")},...a&&{borderRadiusHover:"".concat(a,"px")},...i&&{borderWidth:"".concat(i,"px")},...u&&{borderWidthHover:"".concat(u,"px")}}}}};e(735);const s=(0,e(1900).Z)(u,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("m-theme",{staticClass:"wrapper",attrs:{theme:t.theme}},[e("div",{staticClass:"controls"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bgColor,expression:"bgColor"}],attrs:{type:"color"},domProps:{value:t.bgColor},on:{input:function(o){o.target.composing||(t.bgColor=o.target.value)}}}),t._v("\n\t\t\tbackground\n\t\t")]),t._v(" "),e("h3",[t._v("Button settings")]),t._v(" "),e("p",[t._v("* - Not applied on outline buttons")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontFamily,expression:"fontFamily"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontFamily=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tGeorgia\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tVerdana\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tMonospace\n\t\t\t\t")])]),t._v("\n\t\t\tFont family\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontWeight=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tnormal\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tbold\n\t\t\t\t")])]),t._v("\n\t\t\tFont weight\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"12",max:"32",step:"2"},domProps:{value:t.fontSize},on:{__r:function(o){t.fontSize=o.target.value}}}),t._v("\n\t\t\tFont size: "+t._s(t.fontSize)+"\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyHover,expression:"fontFamilyHover"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontFamilyHover=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tGeorgia\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tVerdana\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tMonospace\n\t\t\t\t")])]),t._v("\n\t\t\tFont family hover\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontWeightHover,expression:"fontWeightHover"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontWeightHover=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tnormal\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tbold\n\t\t\t\t")])]),t._v("\n\t\t\tFont weight hover\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSizeHover,expression:"fontSizeHover"}],attrs:{type:"range",min:"12",max:"32",step:"2"},domProps:{value:t.fontSizeHover},on:{__r:function(o){t.fontSizeHover=o.target.value}}}),t._v("\n\t\t\tFont size hover: "+t._s(t.fontSizeHover)+"\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(o){o.target.composing||(t.color=o.target.value)}}}),t._v("\n\t\t\tColor\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorHover,expression:"colorHover"}],attrs:{type:"color"},domProps:{value:t.colorHover},on:{input:function(o){o.target.composing||(t.colorHover=o.target.value)}}}),t._v("\n\t\t\tHover color\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textColor,expression:"textColor"}],attrs:{type:"color"},domProps:{value:t.textColor},on:{input:function(o){o.target.composing||(t.textColor=o.target.value)}}}),t._v("\n\t\t\tText color *\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textColorHover,expression:"textColorHover"}],attrs:{type:"color"},domProps:{value:t.textColorHover},on:{input:function(o){o.target.composing||(t.textColorHover=o.target.value)}}}),t._v("\n\t\t\tHover text color *\n\t\t")]),t._v(" "),e("p",[e("strong",[t._v("Border")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderRadius,expression:"borderRadius"}],attrs:{type:"number",min:"0",max:"32",step:"2"},domProps:{value:t.borderRadius},on:{input:function(o){o.target.composing||(t.borderRadius=o.target.value)}}}),t._v("\n\t\t\t\tRadius\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderWidth,expression:"borderWidth"}],attrs:{type:"number",min:"1",max:"10"},domProps:{value:t.borderWidth},on:{input:function(o){o.target.composing||(t.borderWidth=o.target.value)}}}),t._v("\n\t\t\t\tThickness\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderColor,expression:"borderColor"}],attrs:{type:"color"},domProps:{value:t.borderColor},on:{input:function(o){o.target.composing||(t.borderColor=o.target.value)}}}),t._v("\n\t\t\t\tColor *\n\t\t\t")])]),t._v(" "),e("p",[e("strong",[t._v("Hover border")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderRadiusHover,expression:"borderRadiusHover"}],attrs:{type:"number",min:"0",max:"32",step:"2"},domProps:{value:t.borderRadiusHover},on:{input:function(o){o.target.composing||(t.borderRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tRadius\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderWidthHover,expression:"borderWidthHover"}],attrs:{type:"number",min:"1",max:"10"},domProps:{value:t.borderWidthHover},on:{input:function(o){o.target.composing||(t.borderWidthHover=o.target.value)}}}),t._v("\n\t\t\t\tThickness\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderColorHover,expression:"borderColorHover"}],attrs:{type:"color"},domProps:{value:t.borderColorHover},on:{input:function(o){o.target.composing||(t.borderColorHover=o.target.value)}}}),t._v("\n\t\t\t\tColor *\n\t\t\t")])]),t._v(" "),e("p",[e("strong",[t._v("Box shadow")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowHorizontal,expression:"boxShadowHorizontal"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowHorizontal},on:{input:function(o){o.target.composing||(t.boxShadowHorizontal=o.target.value)}}}),t._v("\n\t\t\t\tHorizontal\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowVertical,expression:"boxShadowVertical"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowVertical},on:{input:function(o){o.target.composing||(t.boxShadowVertical=o.target.value)}}}),t._v("\n\t\t\t\tVertical\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowBlurRadius,expression:"boxShadowBlurRadius"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowBlurRadius},on:{input:function(o){o.target.composing||(t.boxShadowBlurRadius=o.target.value)}}}),t._v("\n\t\t\t\tBlur\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowSpreadRadius,expression:"boxShadowSpreadRadius"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowSpreadRadius},on:{input:function(o){o.target.composing||(t.boxShadowSpreadRadius=o.target.value)}}}),t._v("\n\t\t\t\tSpread\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowColor,expression:"boxShadowColor"}],attrs:{type:"color"},domProps:{value:t.boxShadowColor},on:{input:function(o){o.target.composing||(t.boxShadowColor=o.target.value)}}})]),t._v(" "),e("p",[e("strong",[t._v("Hover box shadow")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowHorizontalHover,expression:"boxShadowHorizontalHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowHorizontalHover},on:{input:function(o){o.target.composing||(t.boxShadowHorizontalHover=o.target.value)}}}),t._v("\n\t\t\t\tHorizontal\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowVerticalHover,expression:"boxShadowVerticalHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowVerticalHover},on:{input:function(o){o.target.composing||(t.boxShadowVerticalHover=o.target.value)}}}),t._v("\n\t\t\t\tVertical\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowBlurRadiusHover,expression:"boxShadowBlurRadiusHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowBlurRadiusHover},on:{input:function(o){o.target.composing||(t.boxShadowBlurRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tBlur\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowSpreadRadiusHover,expression:"boxShadowSpreadRadiusHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowSpreadRadiusHover},on:{input:function(o){o.target.composing||(t.boxShadowSpreadRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tSpread\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowColorHover,expression:"boxShadowColorHover"}],attrs:{type:"color"},domProps:{value:t.boxShadowColorHover},on:{input:function(o){o.target.composing||(t.boxShadowColorHover=o.target.value)}}})])]),t._v(" "),e("table",{staticClass:"ButtonTable"},[e("thead",[e("tr",[e("td"),t._v(" "),e("th",[t._v("\n\t\t\t\t\tFill\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\tOutline\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\tGhost\n\t\t\t\t")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("\n\t\t\t\t\tLarge\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tMedium\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tSmall\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tDisabled\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot (stacked)\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot (reversed)\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tFull width\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)])])])])}),[],!1,null,"1e7ec666",null).exports},3468:(t,o,e)=>{var n=e(5745);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,e(4023).Z)("2a811eb5",n,!0,{})},7531:(t,o,e)=>{var n=e(9832);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,e(4023).Z)("7ac45ae2",n,!0,{})},735:(t,o,e)=>{var n=e(2510);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,e(4023).Z)("b6051e62",n,!0,{})}}]);