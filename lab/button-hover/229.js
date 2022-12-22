(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[229],{9521:(t,o,e)=>{"use strict";e.d(o,{g:()=>i});const n={props:{size:{type:String,default:"medium",validator:t=>["medium","large"].includes(t)}}};var r=e(7531),a=e.n(r);const i=(0,e(1900).Z)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:t.$s.Loading},[e("svg",{class:[t.$s.Spinner,t.$s["size_"+t.size]],attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{class:[t.$s.Circle,t.$s["size_"+t.size]],attrs:{fill:"none","stroke-linecap":"round",cx:"8",cy:"8",r:"7"}})])])}),[],!1,(function(t){this.$s=a().locals||a()}),null,null).exports},6475:(t,o,e)=>{"use strict";e.d(o,{i8:()=>a,dL:()=>i,R4:()=>l,mj:()=>s});var n=e(9152),r=e(3690);(0,n.l7)([r.Z]);const a=.32,i=4.5,l=3;function s(t,o,e=l){let r=o;if(!o||(0,n.Vi)(o).contrast(t)<e){r=(0,n.Vi)(t).luminance()<a?"#ffffff":"#000000"}return r}},5412:(t,o,e)=>{"use strict";e.d(o,{Z:()=>_});var n=e(9931),r=e.n(n),a=e(9152),i=e(3690),l=e(1792),s=e(9792),u=e(6475),v=e(5681);const d=e.n(v)()();(0,a.l7)([i.Z,l.Z,s.Z]);const m={light:{"neutral-0":0,"neutral-10":.05,"neutral-20":.155,"neutral-80":.527,"neutral-90":.9,"neutral-100":1},dark:{"neutral-0":0,"neutral-10":.225,"neutral-20":.37,"neutral-80":.55,"neutral-90":.95,"neutral-100":1}},c={error:{fill:"#cd2026",text:"#a82826",subtle:"#f6eceb"},warning:{fill:"#ffbf00",text:"#7e662a",subtle:"#f9eecf"},success:{fill:"#008000",text:"#0a7A06",subtle:"#ebf1eb"}},p={error:{fill:"#cd2026",text:"#ff7566"},warning:{fill:"#ffbf00",text:"#ffbf00"},success:{fill:"#008000",text:"#64cc52"}};function b(t,o){return(0,a.Vi)(t).delta(o)>=.25}function f(t,o){return(0,a.Vi)(t).contrast(o)>=u.R4}function _(t=d.background,o=d.primary){const e=(n=t,(0,a.Vi)(n).luminance()<u.i8);var n;const i=(0,u.mj)(t),l=e?m.dark:m.light,s={};Object.entries(l).forEach((([o,e])=>{s[o]=(0,a.Vi)(t).mix(i,e).toHex()}));const v=e?r()(p):r()(c);return v.contextualPrimary=function(t=d.background,o=d.primary,e){const n=(0,u.mj)(t),r=(0,a.Vi)(o).toHsl(),i={};if(b(o,t)){i.fill=o;const e=.2;i.text=f(o,t)?(0,a.Vi)(o).mix(n,e).toHex():n,i.onFill=(0,u.mj)(i.fill)}else i.fill=n,i.text=n,i.onFill=o;if("#ffffff"===(0,a.Vi)(t).toHex()){const t=25,o=95;i.subtle=(0,a.Vi)({h:r.h,s:t,l:o}).toHex()}else i.subtle=e["neutral-10"];return i}(t,o,s),["error","warning","success"].forEach((o=>{b(v[o].fill,t)||(v[o].onFill=v[o].fill,v[o].fill=i),f(v[o].text,t)||(v[o].text=i),"#ffffff"!==(0,a.Vi)(t).toHex()&&(v[o].subtle=s["neutral-10"]),v[o].onFill||(v[o].onFill=(0,u.mj)(v[o].fill))})),{primary:o,background:t,heading:(0,u.mj)(t),body:(0,u.mj)(t),...s,...v,elevation:e?s["neutral-20"]:"#ffffff",overlay:e?"rgba(255, 255, 255, 0.32)":"rgba(0, 0, 0, 0.32)"}}},9832:(t,o,e)=>{var n=e(7705)((function(t){return t[1]}));n.push([t.id,"\n:root {\n\t--spinner-diameter: 16px;\n\t--spinner-lg-diameter: 64px;\n\t--offset: calc(3.145 * var(--spinner-diameter));\n\t--duration: 1.5s;\n}\n.Loading_HvRmM {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.Spinner__xbIq {\n\tanimation: rotate_il9Bs var(--duration) linear infinite\n}\n.Spinner__xbIq.size_medium_Nb8A1 {\n\t\twidth: var(--spinner-diameter);\n\t\theight: var(--spinner-diameter);\n}\n.Spinner__xbIq.size_large_CIeB8 {\n\t\twidth: var(--spinner-lg-diameter);\n\t\theight: var(--spinner-lg-diameter);\n}\n.Circle_WGUVw {\n\ttransform-origin: center;\n\tanimation: circle-line_QCY6O var(--duration) ease-in-out infinite;\n\tstroke: currentColor;\n\tstroke-dasharray: var(--offset)\n}\n.Circle_WGUVw.size_medium_Nb8A1 {\n\t\tstroke-width: 2px;\n}\n.Circle_WGUVw.size_large_CIeB8 {\n\t\tstroke-width: 1px;\n}\n@keyframes rotate_il9Bs {\nto { transform: rotate(270deg);\n}\n}\n@keyframes circle-line_QCY6O {\n0% {\n\t\tstroke-dashoffset: var(--offset);\n}\n50% {\n\t\ttransform: rotate(135deg);\n\t\tstroke-dashoffset: calc(var(--offset) / 3);\n}\n100% {\n\t\ttransform: rotate(450deg);\n\t\tstroke-dashoffset: var(--offset);\n}\n}\n",""]),n.locals={Loading:"Loading_HvRmM",Spinner:"Spinner__xbIq",rotate:"rotate_il9Bs",size_medium:"size_medium_Nb8A1",size_large:"size_large_CIeB8",Circle:"Circle_WGUVw","circle-line":"circle-line_QCY6O"},t.exports=n},2510:(t,o,e)=>{var n=e(7705)((function(t){return t[1]}));n.push([t.id,"\n.wrapper[data-v-1e7ec666] {\n\tdisplay: flex;\n\tgrid-gap: 40px;\n\tpadding: 40px;\n}\np[data-v-1e7ec666],\nh3[data-v-1e7ec666] {\n\tmargin: 8px 0 0;\n}\n.controls[data-v-1e7ec666] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgrid-gap: 8px;\n}\n.ButtonTable[data-v-1e7ec666] {\n\tmax-width: 100%;\n\tfont-family: -apple-system, 'Helvetica Neue', sans-serif;\n\tborder-collapse: separate;\n\tborder-spacing: 16px;\n}\n.icon[data-v-1e7ec666] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=n},332:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>u});var n=e(9347),r=e(6812),a=e(5412);const i={color:"#9142ff",colorHover:void 0,fontFamily:"Verdana",fontWeight:"normal",fontSize:void 0,fontFamilyHover:"Monospace",fontWeightHover:"bold",fontSizeHover:void 0,textColor:"#ffffff",textColorHover:void 0,borderRadius:void 0,borderRadiusHover:void 0,borderWidth:void 0,borderWidthHover:void 0,borderColor:void 0,borderColorHover:void 0,boxShadowHorizontal:void 0,boxShadowHorizontalHover:void 0,boxShadowVertical:void 0,boxShadowVerticalHover:void 0,boxShadowBlurRadius:void 0,boxShadowBlurRadiusHover:void 0,boxShadowSpreadRadius:void 0,boxShadowSpreadRadiusHover:void 0,boxShadowColor:void 0,boxShadowColorHover:void 0};function l(t,o,e,n,r){return e||n?"".concat(t||0,"px ").concat(o||0,"px ").concat(e||0,"px ").concat(n||0,"px ").concat(r||"#000000"):void 0}const s={components:{MButton:n.G,MTheme:r.qo},data:()=>({buttonText:"Button text that is long and may require truncation",infoText:"Information text that is long and may require truncation",bgColor:"#ffffff",...i}),computed:{theme(){const{fontSize:t,fontFamily:o,fontWeight:e,fontSizeHover:n,fontFamilyHover:r,fontWeightHover:i}=this,l={...o&&{fontFamily:o},...e&&{fontWeight:e},...t&&{fontSize:"".concat(t,"px")}},s={...r&&{fontFamily:r},...i&&{fontWeight:i},...n&&{fontSize:"".concat(n,"px")}};return{colors:{background:this.bgColor,...(0,a.Z)(this.bgColor)},text:{patterns:{buttonLabel:l,buttonLabelHover:s}},button:{textPatternHover:"buttonLabelHover"}}},buttonProps(){const{color:t,colorHover:o,textColor:e,textColorHover:n,borderRadius:r,borderRadiusHover:a,borderWidth:i,borderWidthHover:s,borderColor:u,borderColorHover:v,boxShadowHorizontal:d,boxShadowHorizontalHover:m,boxShadowVertical:c,boxShadowVerticalHover:p,boxShadowBlurRadius:b,boxShadowBlurRadiusHover:f,boxShadowSpreadRadius:_,boxShadowSpreadRadiusHover:x,boxShadowColor:h,boxShadowColorHover:g}=this;return{color:t,colorHover:o,textColor:e,textColorHover:n,borderColor:u,borderColorHover:v,boxShadow:l(d,c,b,_,h),boxShadowHover:l(m,p,f,x,g),...r&&{borderRadius:"".concat(r,"px")},...a&&{borderRadiusHover:"".concat(a,"px")},...i&&{borderWidth:"".concat(i,"px")},...s&&{borderWidthHover:"".concat(s,"px")}}}}};e(735);const u=(0,e(1900).Z)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("m-theme",{staticClass:"wrapper",attrs:{theme:t.theme}},[e("div",{staticClass:"controls"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bgColor,expression:"bgColor"}],attrs:{type:"color"},domProps:{value:t.bgColor},on:{input:function(o){o.target.composing||(t.bgColor=o.target.value)}}}),t._v("\n\t\t\tbackground\n\t\t")]),t._v(" "),e("h3",[t._v("Button settings")]),t._v(" "),e("p",[t._v("* - Not applied on outline buttons")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontFamily,expression:"fontFamily"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontFamily=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tGeorgia\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tVerdana\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tMonospace\n\t\t\t\t")])]),t._v("\n\t\t\tFont family\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontWeight=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tnormal\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tbold\n\t\t\t\t")])]),t._v("\n\t\t\tFont weight\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"12",max:"32",step:"2"},domProps:{value:t.fontSize},on:{__r:function(o){t.fontSize=o.target.value}}}),t._v("\n\t\t\tFont size: "+t._s(t.fontSize)+"\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyHover,expression:"fontFamilyHover"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontFamilyHover=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tGeorgia\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tVerdana\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tMonospace\n\t\t\t\t")])]),t._v("\n\t\t\tFont family hover\n\t\t")]),t._v(" "),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.fontWeightHover,expression:"fontWeightHover"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fontWeightHover=o.target.multiple?e:e[0]}}},[e("option",[t._v("\n\t\t\t\t\tnormal\n\t\t\t\t")]),t._v(" "),e("option",[t._v("\n\t\t\t\t\tbold\n\t\t\t\t")])]),t._v("\n\t\t\tFont weight hover\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSizeHover,expression:"fontSizeHover"}],attrs:{type:"range",min:"12",max:"32",step:"2"},domProps:{value:t.fontSizeHover},on:{__r:function(o){t.fontSizeHover=o.target.value}}}),t._v("\n\t\t\tFont size hover: "+t._s(t.fontSizeHover)+"\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(o){o.target.composing||(t.color=o.target.value)}}}),t._v("\n\t\t\tColor\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorHover,expression:"colorHover"}],attrs:{type:"color"},domProps:{value:t.colorHover},on:{input:function(o){o.target.composing||(t.colorHover=o.target.value)}}}),t._v("\n\t\t\tHover color\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textColor,expression:"textColor"}],attrs:{type:"color"},domProps:{value:t.textColor},on:{input:function(o){o.target.composing||(t.textColor=o.target.value)}}}),t._v("\n\t\t\tText color *\n\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textColorHover,expression:"textColorHover"}],attrs:{type:"color"},domProps:{value:t.textColorHover},on:{input:function(o){o.target.composing||(t.textColorHover=o.target.value)}}}),t._v("\n\t\t\tHover text color *\n\t\t")]),t._v(" "),e("p",[e("strong",[t._v("Border")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderRadius,expression:"borderRadius"}],attrs:{type:"number",min:"0",max:"32",step:"2"},domProps:{value:t.borderRadius},on:{input:function(o){o.target.composing||(t.borderRadius=o.target.value)}}}),t._v("\n\t\t\t\tRadius\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderWidth,expression:"borderWidth"}],attrs:{type:"number",min:"1",max:"10"},domProps:{value:t.borderWidth},on:{input:function(o){o.target.composing||(t.borderWidth=o.target.value)}}}),t._v("\n\t\t\t\tThickness\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderColor,expression:"borderColor"}],attrs:{type:"color"},domProps:{value:t.borderColor},on:{input:function(o){o.target.composing||(t.borderColor=o.target.value)}}}),t._v("\n\t\t\t\tColor *\n\t\t\t")])]),t._v(" "),e("p",[e("strong",[t._v("Hover border")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderRadiusHover,expression:"borderRadiusHover"}],attrs:{type:"number",min:"0",max:"32",step:"2"},domProps:{value:t.borderRadiusHover},on:{input:function(o){o.target.composing||(t.borderRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tRadius\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderWidthHover,expression:"borderWidthHover"}],attrs:{type:"number",min:"1",max:"10"},domProps:{value:t.borderWidthHover},on:{input:function(o){o.target.composing||(t.borderWidthHover=o.target.value)}}}),t._v("\n\t\t\t\tThickness\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.borderColorHover,expression:"borderColorHover"}],attrs:{type:"color"},domProps:{value:t.borderColorHover},on:{input:function(o){o.target.composing||(t.borderColorHover=o.target.value)}}}),t._v("\n\t\t\t\tColor *\n\t\t\t")])]),t._v(" "),e("p",[e("strong",[t._v("Box shadow")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowHorizontal,expression:"boxShadowHorizontal"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowHorizontal},on:{input:function(o){o.target.composing||(t.boxShadowHorizontal=o.target.value)}}}),t._v("\n\t\t\t\tHorizontal\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowVertical,expression:"boxShadowVertical"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowVertical},on:{input:function(o){o.target.composing||(t.boxShadowVertical=o.target.value)}}}),t._v("\n\t\t\t\tVertical\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowBlurRadius,expression:"boxShadowBlurRadius"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowBlurRadius},on:{input:function(o){o.target.composing||(t.boxShadowBlurRadius=o.target.value)}}}),t._v("\n\t\t\t\tBlur\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowSpreadRadius,expression:"boxShadowSpreadRadius"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowSpreadRadius},on:{input:function(o){o.target.composing||(t.boxShadowSpreadRadius=o.target.value)}}}),t._v("\n\t\t\t\tSpread\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowColor,expression:"boxShadowColor"}],attrs:{type:"color"},domProps:{value:t.boxShadowColor},on:{input:function(o){o.target.composing||(t.boxShadowColor=o.target.value)}}})]),t._v(" "),e("p",[e("strong",[t._v("Hover box shadow")])]),t._v(" "),e("div",{staticClass:"choice"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowHorizontalHover,expression:"boxShadowHorizontalHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowHorizontalHover},on:{input:function(o){o.target.composing||(t.boxShadowHorizontalHover=o.target.value)}}}),t._v("\n\t\t\t\tHorizontal\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowVerticalHover,expression:"boxShadowVerticalHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowVerticalHover},on:{input:function(o){o.target.composing||(t.boxShadowVerticalHover=o.target.value)}}}),t._v("\n\t\t\t\tVertical\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowBlurRadiusHover,expression:"boxShadowBlurRadiusHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowBlurRadiusHover},on:{input:function(o){o.target.composing||(t.boxShadowBlurRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tBlur\n\t\t\t")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowSpreadRadiusHover,expression:"boxShadowSpreadRadiusHover"}],attrs:{type:"number",min:"0",max:"20"},domProps:{value:t.boxShadowSpreadRadiusHover},on:{input:function(o){o.target.composing||(t.boxShadowSpreadRadiusHover=o.target.value)}}}),t._v("\n\t\t\t\tSpread\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boxShadowColorHover,expression:"boxShadowColorHover"}],attrs:{type:"color"},domProps:{value:t.boxShadowColorHover},on:{input:function(o){o.target.composing||(t.boxShadowColorHover=o.target.value)}}})])]),t._v(" "),e("table",{staticClass:"ButtonTable"},[e("thead",[e("tr",[e("td"),t._v(" "),e("th",[t._v("\n\t\t\t\t\tFill\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\tOutline\n\t\t\t\t")]),t._v(" "),e("th",[t._v("\n\t\t\t\t\tGhost\n\t\t\t\t")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("\n\t\t\t\t\tLarge\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"large"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tMedium\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"medium"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tSmall\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",size:"small"}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tDisabled\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",disabled:""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot (stacked)\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",align:"stack"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tInfo slot (reversed)\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost",align:"space-between"},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t\tInformation\n\t\t\t\t\t\t")]},proxy:!0}])},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t")])],1)]),t._v(" "),e("tr",[e("th",[t._v("\n\t\t\t\t\tFull width\n\t\t\t\t")]),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"fill","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"outline","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1),t._v(" "),e("td",[e("m-button",t._b({attrs:{variant:"ghost","full-width":""}},"m-button",t.buttonProps,!1),[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])],1)])])])])}),[],!1,null,"1e7ec666",null).exports},7531:(t,o,e)=>{var n=e(9832);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,e(4023).Z)("7ac45ae2",n,!0,{})},735:(t,o,e)=>{var n=e(2510);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,e(4023).Z)("b6051e62",n,!0,{})}}]);