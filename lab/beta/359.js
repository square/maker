(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[359,253],{253:function(t,e,n){"use strict";n.r(e),e.default={storeName:"Goodfellas Pizzeria",categories:["Most Popular","Pizza","Specialty Pies","Sides","Desserts"],items:[{name:"Breadstick",description:"A single breadstick the size of your arm",photo:"https://picsum.photos/900/600?Breadstick",cost:300,quantity:1,categories:["Most Popular","Sides"],oneOf:[{name:"Souffle Cups",selected:"",options:[{name:"Italian",cost:0},{name:"Balsamic",cost:0},{name:"Garlic Butter",cost:0}]}]},{name:"Extra Sauce",description:"When you wanna be the sauce boss",photo:"https://picsum.photos/900/600?ExtraSauce",cost:75,quantity:1,categories:["Most Popular","Sides"],oneOf:[{name:"Souffle Cups",selected:"",options:[{name:"Marinara",cost:0},{name:"Ranch",cost:0},{name:"Nacho Cheese",cost:0}]}]},{name:'16" Pie',description:'Build your own 16" pizza pie',photo:"https://picsum.photos/900/600?16Pie",cost:1400,quantity:1,categories:["Most Popular","Pizza"],anyOf:[{name:"Add Meat Toppings",selected:[],options:[{name:"Pepperoni",cost:200},{name:"Italian Sausage",cost:200},{name:"Bacon",cost:200}]},{name:"Add Veggie Toppings",selected:[],options:[{name:"Mushrooms",cost:200},{name:"Onions",cost:200},{name:"Black Olives",cost:200}]}]},{name:'22" Pie',description:'Build your own 22" pizza pie',photo:"https://picsum.photos/900/600?22Pie",cost:2e3,quantity:1,categories:["Most Popular","Pizza"],anyOf:[{name:"Add Meat Toppings",selected:[],options:[{name:"Pepperoni",cost:300},{name:"Italian Sausage",cost:300},{name:"Bacon",cost:300}]},{name:"Add Veggie Toppings",selected:[],options:[{name:"Mushrooms",cost:300},{name:"Onions",cost:300},{name:"Black Olives",cost:300}]}]},{name:"Wiseguy",description:"Straight from the garden",photo:"https://picsum.photos/900/600?Wiseguy",quantity:1,categories:["Specialty Pies"],oneOf:[{name:"Choose size",selected:"",options:[{name:'12"',cost:1300},{name:'16"',cost:2100},{name:'22"',cost:2900}]}]},{name:"The Vinny",description:"A friend of the family",photo:"https://picsum.photos/900/600?TheVinny",quantity:1,categories:["Specialty Pies"],oneOf:[{name:"Choose size",selected:"",options:[{name:'12"',cost:1400},{name:'16"',cost:2250},{name:'22"',cost:3100}]}]},{name:"Cannoli",description:"Pastry filled with sweet ricotta & chocolate chips",photo:"https://picsum.photos/900/600?Cannoli",cost:300,quantity:1,categories:["Desserts"]},{name:"Chocolate Chip Cookie",description:"Extra large chocolate filled chocolate chip cookie",photo:"https://picsum.photos/900/600?ChocolateChipCookie",cost:200,quantity:1,categories:["Desserts"]}]}},3216:function(t,e,n){"use strict";n.d(e,{b:function(){return c}});var i=n(771),s=n.n(i),o=n(3986);var a={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:t=>t>=-2&&t<=7},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:t=>s().valid(t)}},computed:{...(0,o.C9)("heading",["size","fontFamily","textColor"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor}}},render(t){const{$s:e,sizeClass:n,tag:i,inlineStyles:s}=this,o=this.$slots.default;return t(i,{class:[e.Heading,e[`size_${n}`]],style:s,attrs:this.$attrs,on:this.$listeners},o)}},r=n(1491),l=n.n(r);var c=(0,n(1900).Z)(a,undefined,undefined,!1,(function(t){this.$s=l().locals||l()}),null,null).exports},2630:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--color-900);\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},t.exports=i},6824:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\n.heading[data-v-279db657] {\n\tpadding: 24px;\n}\n.item[data-v-279db657] {\n\tdisplay: flex;\n\tpadding: 24px;\n\tcursor: pointer;\n}\n.item-details[data-v-279db657] {\n\tflex: 1 0 auto;\n}\n.item-description[data-v-279db657] {\n\tcolor: rgba(0, 0, 0, 0.7);\n}\n.item-preview[data-v-279db657] {\n\tflex: 0 0 auto;\n\twidth: 96px;\n\theight: 96px;\n\toverflow: hidden;\n\tborder-radius: 16px;\n}\n.notice-banner[data-v-279db657] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 16px;\n\tbackground-color: rgb(160, 121, 164);\n}\n.banner-text[data-v-279db657] {\n\tmargin: 8px;\n\tcolor: white;\n}\n.banner-subtext[data-v-279db657] {\n\tmargin: 8px;\n\tcolor: rgba(255, 255, 255, 0.7);\n}\n.highlight[data-v-279db657] {\n\tbackground-color: white;\n}\n",""]),t.exports=i},2466:function(t,e,n){var i=n(7705)((function(t){return t[1]}));i.push([t.id,"\nhtml,\nbody {\n\tbackground: #f6f6f6;\n}\n",""]),t.exports=i},1359:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=n(3216),s=n(990),o=n(8811),a=n(193),r=n(2492),l=n(5937),c=n(2220),h=n(1467),p=n(253),d={components:{MHeading:i.b,MText:s.H,MDivider:o.j,MImage:a.F,MActionBar:l.MS,MButton:c.G},inject:{modalApi:r.UJ},data:()=>p.default,computed:{addedItemCount(){return this.items.reduce(((t,e)=>e.quantity?t+e.quantity:t),0)}},methods:{openItemModal(t){this.modalApi.open((e=>e(h.default,{props:{item:t}})))},categoryItems(t){return this.items.filter((e=>e.categories.includes(t)))},formatItemCost(t){if(t.cost)return this.formatCost(t.cost);let e=Number.MAX_SAFE_INTEGER;let n=0;t.oneOf[0].options.forEach((t=>{e=Math.min(e,t.cost),n=Math.max(n,t.cost)}));return`${this.formatCost(e)} - ${this.formatCost(n)}`},formatCost:t=>`$${(t/100).toFixed(2)}`}},f=(n(929),n(3097),(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"highlight"},[n("m-heading",{staticClass:"heading",attrs:{size:1}},[t._v("\n\t\t\t"+t._s(t.storeName)+" Online Store\n\t\t")])],1),t._v(" "),n("div",{staticClass:"notice-banner"},[n("m-text",{staticClass:"banner-text"},[t._v("\n\t\t\tOrder and check out directly from our menu and we’ll deliver straight to you\n\t\t")]),t._v(" "),n("m-text",{staticClass:"banner-subtext"},[t._v("\n\t\t\tTable 9\n\t\t")])],1),t._v(" "),t._l(t.categories,(function(e){return n("div",{key:e},[n("m-heading",{staticClass:"heading"},[t._v("\n\t\t\t"+t._s(e)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"highlight"},[t._l(t.categoryItems(e),(function(e){return[n("div",{key:e.name,staticClass:"item",on:{click:function(n){return t.openItemModal(e)}}},[n("div",{staticClass:"item-details"},[n("m-heading",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),n("m-text",{staticClass:"item-description",attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.description)+"\n\t\t\t\t\t\t")]),t._v(" "),n("m-text",{attrs:{size:-1}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.formatItemCost(e))+"\n\t\t\t\t\t\t")])],1),t._v(" "),n("m-image",{staticClass:"item-preview",attrs:{src:e.photo}})],1),t._v(" "),n("m-divider",{key:e.name})]}))],2)],1)})),t._v(" "),n("m-action-bar",[n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",color:"rgb(160, 121, 164)","full-width":""},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.addedItemCount)+" items added\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView order\n\t\t\t")])],1)],2)}),[],!1,null,"279db657",null).exports)},1491:function(t,e,n){var i=n(2630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("ceb27898",i,!0,{})},929:function(t,e,n){var i=n(6824);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("614318cd",i,!0,{})},3097:function(t,e,n){var i=n(2466);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(4023).Z)("29616bd7",i,!0,{})}}]);