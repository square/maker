(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[114],{90:function(t,o,n){"use strict";n.d(o,{J1:function(){return c}});var r=n(4378),e=n.n(r),a=n(771),u=n.n(a);function s(t,o){const n=u()(t).num(),r=u()(o).num(),e=(16711680&n)>>16,a=(65280&n)>>8,s=255&n,c=(16711680&r)>>16,l=(65280&r)>>8,i=255&r,p=2.4,d=.2126729,f=.7151522,h=.072175,m=.03,M=12.82051282051282,k=.06;let w=Math.pow(e/255,p)*d+Math.pow(a/255,p)*f+Math.pow(s/255,p)*h,_=Math.pow(c/255,p)*d+Math.pow(l/255,p)*f+Math.pow(i/255,p)*h,g=0,b=0;return _=_>m?_:_+Math.pow(m-_,1.45),w=w>m?w:w+Math.pow(m-w,1.45),Math.abs(w-_)<5e-4?0:(w>_?(g=1.25*(Math.pow(w,.55)-Math.pow(_,.58)),b=g<.001?0:g<.078?g-g*M*k:g-k):(g=1.25*(Math.pow(w,.62)-Math.pow(_,.57)),b=g>-.001?0:g>-.078?g-g*M*k:g+k),Math.abs(100*b))}function c(t,o){return e()(o,(o=>s(t,o)))}},9274:function(t,o,n){var r=n(7705)((function(t){return t[1]}));r.push([t.id,"\n.demo_HFS5_ {\n\tpadding: 10px;\n\tcolor: var(--color-contrast, #fff);\n\tfont-size: 16px;\n\tbackground: var(--maker-colors-primary, #000);\n}\n",""]),r.locals={demo:"demo_HFS5_"},t.exports=r},114:function(t,o,n){"use strict";n.r(o),n.d(o,{default:function(){return s}});var r=n(90),e={inject:["theme"],inheritAttrs:!1,props:{color:{type:String,default:void 0},backgroundColor:{type:String,default:"#000"}},data:()=>({background:"#000"}),computed:{style(){return{"--color-contrast":this.color||(0,r.J1)(this.background,["#fff","#000"])}}},mounted(){this.$nextTick((()=>{const t=getComputedStyle(this.$el);this.background=t.backgroundColor}))}},a=n(6666),u=n.n(a);var s=(0,n(1900).Z)(e,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{class:t.$s.demo,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=u().locals||u()}),null,null).exports},6666:function(t,o,n){var r=n(9274);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4023).Z)("19151d9f",r,!0,{})}}]);