(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e21f8e"],{"0071":function(t,e,l){"use strict";l("8abb")},"1dde":function(t,e,l){var o=l("d039"),a=l("b622"),s=l("2d00"),r=a("species");t.exports=function(t){return s>=51||!o((function(){var e=[],l=e.constructor={};return l[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},6018:function(t,e,l){"use strict";l("81c3")},"65f0":function(t,e,l){var o=l("861d"),a=l("e8b5"),s=l("b622"),r=s("species");t.exports=function(t,e){var l;return a(t)&&(l=t.constructor,"function"!=typeof l||l!==Array&&!a(l.prototype)?o(l)&&(l=l[r],null===l&&(l=void 0)):l=void 0),new(void 0===l?Array:l)(0===e?0:e)}},"81c3":function(t,e,l){},8418:function(t,e,l){"use strict";var o=l("c04e"),a=l("9bf2"),s=l("5c6c");t.exports=function(t,e,l){var r=o(e);r in t?a.f(t,r,s(0,l)):t[r]=l}},"8abb":function(t,e,l){},a434:function(t,e,l){"use strict";var o=l("23e7"),a=l("23cb"),s=l("a691"),r=l("50c4"),n=l("7b0b"),i=l("65f0"),c=l("8418"),m=l("1dde"),f=m("splice"),u=Math.max,d=Math.min,p=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var l,o,m,f,v,_,y=n(this),I=r(y.length),h=a(t,I),x=arguments.length;if(0===x?l=o=0:1===x?(l=0,o=I-h):(l=x-2,o=d(u(s(e),0),I-h)),I+l-o>p)throw TypeError(b);for(m=i(y,o),f=0;f<o;f++)v=h+f,v in y&&c(m,f,y[v]);if(m.length=o,l<o){for(f=h;f<I-o;f++)v=f+o,_=f+l,v in y?y[_]=y[v]:delete y[_];for(f=I;f>I-o+l;f--)delete y[f-1]}else if(l>o)for(f=I-o;f>h;f--)v=f+o-1,_=f+l-1,v in y?y[_]=y[v]:delete y[_];for(f=0;f<l;f++)y[f+h]=arguments[f+2];return y.length=I-o+l,m}})},e7b5:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"json"},[l("h2",{staticClass:"title"},[t._v("生成json对象")]),l("Form",{ref:"jsonForm",attrs:{model:t.form,"label-position":"left","label-width":100}},[l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("公司名称")]),l("Input",{model:{value:t.form.company_name,callback:function(e){t.$set(t.form,"company_name",e)},expression:"form.company_name"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("公司头像")]),l("Input",{model:{value:t.form.head_portrait,callback:function(e){t.$set(t.form,"head_portrait",e)},expression:"form.head_portrait"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("公司图片墙")]),l("Input",{model:{value:t.form.photo_wall_list,callback:function(e){t.$set(t.form,"photo_wall_list",e)},expression:"form.photo_wall_list"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("法人代表")]),l("Input",{model:{value:t.form.corporate_representative,callback:function(e){t.$set(t.form,"corporate_representative",e)},expression:"form.corporate_representative"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("店铺主推产品")]),l("Input",{model:{value:t.form.main_commodity_list,callback:function(e){t.$set(t.form,"main_commodity_list",e)},expression:"form.main_commodity_list"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("产品目录分类")]),l("Input",{model:{value:t.form.commodity_classify_list,callback:function(e){t.$set(t.form,"commodity_classify_list",e)},expression:"form.commodity_classify_list"}})],1),t._l(t.form.productResponseList,(function(e,o){return l("FormItem",{key:o,attrs:{label:"商品"+(o+1)}},[l("Row",[l("Col",{attrs:{span:"8"}},[l("Input",{attrs:{type:"text",placeholder:"商品名称"},model:{value:e.title,callback:function(l){t.$set(e,"title",l)},expression:"item.title"}})],1),l("Col",{attrs:{span:"8"}},[l("Input",{attrs:{type:"text",placeholder:"商品图片地址"},model:{value:e.imgUrl,callback:function(l){t.$set(e,"imgUrl",l)},expression:"item.imgUrl"}})],1),l("Col",{attrs:{span:"8"}},[l("Input",{attrs:{type:"text",placeholder:"商品价格"},model:{value:e.price,callback:function(l){t.$set(e,"price",l)},expression:"item.price"}})],1),l("Col",{attrs:{span:"8"}},[l("Input",{attrs:{type:"text",placeholder:"商品所属分类"},model:{value:e.classify,callback:function(l){t.$set(e,"classify",l)},expression:"item.classify"}})],1),l("Col",{attrs:{span:"8",offset:"1"}},[l("Button",{on:{click:function(e){return t.handleRemove(o)}}},[t._v("Delete")])],1)],1)],1)})),l("FormItem",[l("Row",[l("Col",{attrs:{span:"12"}},[l("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:t.handleAdd}},[t._v("添加商品")])],1)],1)],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("标签")]),l("Input",{model:{value:t.form.label_list,callback:function(e){t.$set(t.form,"label_list",e)},expression:"form.label_list"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("公司详情")]),l("Input",{model:{value:t.form.company_introduce,callback:function(e){t.$set(t.form,"company_introduce",e)},expression:"form.company_introduce"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("成立时间")]),l("Input",{model:{value:t.form.date_establishment,callback:function(e){t.$set(t.form,"date_establishment",e)},expression:"form.date_establishment"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("商品数量")]),l("Input",{model:{value:t.form.commodity_number,callback:function(e){t.$set(t.form,"commodity_number",e)},expression:"form.commodity_number"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("注册资金")]),l("Input",{model:{value:t.form.registered_capital,callback:function(e){t.$set(t.form,"registered_capital",e)},expression:"form.registered_capital"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("主营商品")]),l("Input",{model:{value:t.form.commodity_type_list,callback:function(e){t.$set(t.form,"commodity_type_list",e)},expression:"form.commodity_type_list"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("厂家地址")]),l("Input",{model:{value:t.form.factory_address,callback:function(e){t.$set(t.form,"factory_address",e)},expression:"form.factory_address"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("登记机关")]),l("Input",{model:{value:t.form.registration_authority,callback:function(e){t.$set(t.form,"registration_authority",e)},expression:"form.registration_authority "}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("经营状态")]),l("Input",{model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("企业信用代码")]),l("Input",{model:{value:t.form.credit_code,callback:function(e){t.$set(t.form,"credit_code",e)},expression:"form.credit_code"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("企业类型")]),l("Input",{model:{value:t.form.enterprise_type,callback:function(e){t.$set(t.form,"enterprise_type",e)},expression:"form.enterprise_type"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("销售品牌")]),l("Input",{model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("客户动态")]),l("Input",{model:{value:t.form.dynamic_condition_list,callback:function(e){t.$set(t.form,"dynamic_condition_list",e)},expression:"form.dynamic_condition_list"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("企业认证信息")]),l("Input",{model:{value:t.form.authentication_information,callback:function(e){t.$set(t.form,"authentication_information",e)},expression:"form.authentication_information"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("营业期限")]),l("Input",{model:{value:t.form.deadline_business,callback:function(e){t.$set(t.form,"deadline_business",e)},expression:"form.deadline_business"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("年检日期")]),l("Input",{model:{value:t.form.annual_inspection_date,callback:function(e){t.$set(t.form,"annual_inspection_date",e)},expression:"form.annual_inspection_date"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("所属行业")]),l("Input",{model:{value:t.form.industry_type,callback:function(e){t.$set(t.form,"industry_type",e)},expression:"form.industry_type"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("经营范围")]),l("Input",{model:{value:t.form.brand_type,callback:function(e){t.$set(t.form,"brand_type",e)},expression:"form.brand_type"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("联系人名称")]),l("Input",{model:{value:t.form.contact_information,callback:function(e){t.$set(t.form,"contact_information",e)},expression:"form.contact_information"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("电子邮箱")]),l("Input",{model:{value:t.form.mailbox,callback:function(e){t.$set(t.form,"mailbox",e)},expression:"form.mailbox"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("qq")]),l("Input",{model:{value:t.form.qq,callback:function(e){t.$set(t.form,"qq",e)},expression:"form.qq"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("微信")]),l("Input",{model:{value:t.form.wx,callback:function(e){t.$set(t.form,"wx",e)},expression:"form.wx"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("电话")]),l("Input",{model:{value:t.form.iphone,callback:function(e){t.$set(t.form,"iphone",e)},expression:"form.iphone"}})],1),l("FormItem",[l("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v("地址")]),l("Input",{model:{value:t.form.site,callback:function(e){t.$set(t.form,"site",e)},expression:"form.site"}})],1),l("FormItem",[l("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("jsonForm")}}},[t._v("生成")]),l("Button",{staticStyle:{"margin-left":"20px"},on:{click:t.empty}},[t._v("清空")])],1)],2)],1),l("json-model",{ref:"jsonmodel"})],1)},a=[],s=(l("a434"),function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Modal",{attrs:{width:"550",title:t.title},on:{"on-cancel":t.console,"on-ok":t.console},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[l("div",{staticClass:"jsonmodel"},t._l(t.head,(function(e,o){return l("p",{key:e+o},[t._v(t._s(e.key)+':"'+t._s(e.value)+'",')])})),0)])],1)}),r=[],n={name:"jsonmodel",data:function(){return{modal1:!1,title:"生成成功",head:[]}},methods:{handle:function(t){var e;for(var l in this.modal1=!0,t)e={key:l,value:t[l]},this.head.push(e)},console:function(){this.head=[],this.value=[]}}},i=n,c=(l("0071"),l("2877")),m=Object(c["a"])(i,s,r,!1,null,"60e7f2c4",null),f=m.exports,u={name:"json",components:{jsonModel:f},data:function(){return{form:{productResponseList:[{imgUrl:"",title:"",price:"",classify:""}]},jsonObj:{}}},methods:{handleAdd:function(){this.index++,this.form.productResponseList.push({imgUrl:"",title:"",price:"",classify:""})},handleRemove:function(t){this.form.productResponseList.splice(t,1)},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){return t})).then((function(t){console.log("form",e.form)}))},empty:function(){this.form={productResponseList:[{imgUrl:"",title:"",price:"",classify:""}]}}},created:function(){}},d=u,p=(l("6018"),Object(c["a"])(d,o,a,!1,null,"f6477374",null));e["default"]=p.exports},e8b5:function(t,e,l){var o=l("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-49e21f8e.bde055ba.js.map