(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eaaf486","chunk-6ca827f4"],{"0c6d":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var r=n("0d5e");function a(t){return r["a"].get("/videoRecommend",{params:t})}function i(t){return r["a"].get("/videoCategoryDetails",{params:t})}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2035:function(t,e,n){},"22a2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crosstalk"},[n("h2",{staticClass:"title"},[t._v("搞笑段子合集")]),t.loading?n("div",[n("Input",{staticStyle:{width:"300px","margin-bottom":"20px"},attrs:{type:"text",placeholder:"请输入内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("Button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:t.searchList}},[t._v("搜索")])],1):t._e(),t.loading?t._e():n("div",{staticClass:"demo-spin-container"},[n("Spin",{attrs:{fix:"",size:"large"}})],1),t.loading?n("List",{attrs:{"item-layout":"vertical"}},t._l(t.data,(function(e){return n("ListItem",{key:e.title,staticClass:"crosstalk-list",nativeOn:{click:function(n){return t.routerGo("crosstalkmodel",e)}}},[n("ListItemMeta",{attrs:{avatar:e.data.author.icon,title:e.data.title,description:e.data.description+e.data.descriptionEditor}}),t._v(" "+t._s(e.content)+" "),n("template",{slot:"extra"},[n("img",{staticStyle:{width:"280px"},attrs:{src:e.data.cover.detail}})])],2)})),1):t._e(),t.loading?n("Page",{staticStyle:{"text-align":"center","margin-top":"10px"},attrs:{total:t.page.total,current:t.page.index,"page-size":t.page.size,"show-total":""},on:{"on-change":t.crosstalkPage}}):t._e()],1)},a=[],i=(n("ac1f"),n("841c"),n("fb6a"),n("4de4"),n("0c6d")),o=n("9b43"),s={name:"crosstalk",components:{Vue:o["default"]},data:function(){return{data:[],data2:[],page:{index:1,size:3,total:0},loading:!1,search:"",searchData:""}},methods:{crosstalkPage:function(t){this.page.index=t;var e=(t-1)*this.page.size,n=t*this.page.size;""===this.search||null===this.search?(this.data=this.data2.slice(e,n),this.page.total=this.data2.length):(this.data=this.searchData.slice(e,n),this.page.total=this.searchData.length)},routerGo:function(t,e){this.$router.push({name:t}),localStorage.setItem("crossContent",JSON.stringify(e))},searchList:function(){var t=this;""!==this.search&&null!==this.search||(this.data=this.data2.slice(0,this.page.size));var e=this.data2.filter((function(e){return-1!==e.data.title.indexOf(t.search)}));this.searchData=e,this.page.total=this.searchData.length,this.data=this.searchData.slice(0,this.page.size)}},created:function(){var t=this,e={id:127397};Object(i["a"])(e).then((function(e){e.result.filter((function(e){t.data2.push(e)})),t.page.total=t.data2.length,t.data=t.data2.slice(0,t.page.size),t.loading=!0})).catch((function(e){t.$Message.error("网络错误，请求失败！"),console.log(e),t.loading=!0}))}},c=s,l=(n("6090"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,"0b02922a",null);e["default"]=u.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=i("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},6090:function(t,e,n){"use strict";n("2035")},"65e5":function(t,e,n){"use strict";n("ff89")},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,i(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),o=n("129f"),s=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=a(t),c=String(this),l=i.lastIndex;o(l,0)||(i.lastIndex=0);var u=s(i,c);return o(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,s=i("native-string-replace",String.prototype.replace),c=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=l||d||u;f&&(c=function(t){var e,n,a,i,c=this,f=u&&c.sticky,h=r.call(c),p=c.source,v=0,g=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",h)),d&&(n=new RegExp("^"+p+"$(?!\\s)",h)),l&&(e=c.lastIndex),a=o.call(f?n:c,g),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=c.lastIndex,c.lastIndex+=a[0].length):c.lastIndex=0:l&&a&&(c.lastIndex=c.global?a.index+a[0].length:e),d&&a&&a.length>1&&s.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=c},"9b43":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue"},[n("h2",{staticClass:"header"},[t._v("Vue")]),n("Vue-content",{ref:"VueContent"}),n("Table",{staticStyle:{"margin-top":"30px"},attrs:{columns:t.vueHeader,data:t.list},scopedSlots:t._u([{key:"title",fn:function(e){var r=e.row;return[n("strong",[t._v(t._s(r.title))])]}},{key:"operation",fn:function(e){var r=e.row;return[n("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.show(r.title)}}},[t._v("查看")])]}}])}),n("Page",{staticStyle:{float:"right"},attrs:{total:t.vueList.length,current:t.page.index,"page-size":t.page.size},on:{"on-change":t.pIndexChange}})],1)},a=[],i=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{title:"Vue",fullscreen:""},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[this.list[0]?n("div",[n("h1",[t._v(t._s(t.list[0].header))]),n("List",{attrs:{border:"",size:"large"}},[n("ListItem",[t._v(t._s(t.list[0].title))])],1),n("Card",{staticStyle:{width:"100%"}},[n("div",{staticStyle:{"text-align":"left"}},[n("h3",[t._v(t._s(t.list[0].titleCon))])])]),n("Alert",{attrs:{type:"warning"}},[t._v(t._s(t.list[0].content))]),n("Alert",[t._v(t._s(t.list[0].code))]),n("div",{staticStyle:{background:"#eee",padding:"20px"}},[n("Card",{attrs:{bordered:!1}},[n("p",[t._v(t._s(t.list[0].conBody))])])],1)],1):n("div",[n("h2",[t._v("暂无数据")])]),n("div",{attrs:{slot:"footer"},slot:"footer"})])],1)}),o=[],s=(n("4de4"),[{header:null,title:null,titleCon:null,content:null,code:null,conBody:null},{header:"计算属性与侦听器",title:" 模板里的差值表达式非常便利了，但是设计它的初衷就是为了简洁明了的。在模板中放太多的逻辑性的数据会让模板过重而且难以维护，不利于阅读。所以，对于任何复杂的逻辑数据，我们应该使用计算属性。",titleCon:"计算属性缓存 vs 方法",content:"虽然利用methods里的方法也可以得到相同的结果。但是，计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值。这就意味着，只要内容没有发生改变，多次执行该计算属性，计算属性会立即返回之前的计算结果，避免了重复运算。",code:"当有一些数据需要随着其他数据变动而变动时，很容易滥用 watch。通常更好的做法是使用计算属性而不是命令式的watch回调。避免命令式的重复代码。",conBody:"侦听器：虽然计算属性在大多数情况下更合适，但当需要在数据变化的时候执行异步或开销较大的操作时，这个方式是最有用的。"},{header:"路由容易忘的知识点",title:"redirect",titleCon:"如果导航到了某个路由下的话就让它调到指定的路由对象",content:"嵌套路由：children （父路由下嵌套子路由，通常用于导航、tab栏等）",code:"动态路由： 在注册路由的路径后面接参数，其中:id就是参数。 在跳转路由之后的组件中使用传递的参数：",conBody:"动态路由传值的三种方式: 直接路由地址拼接，params传值（刷新之后数据丢失）,query传值（刷新之后数据不会丢失）"},{header:"路由守卫",title:"vue路由中路由守卫非常重要",titleCon:"全局前置守卫： router.beforeEach，当一个导航路由被触发时，全局前置守卫会根据创建的顺序调用。守卫时异步解析执行的，此时导航在所有守卫resolve结束之前一直处于等待中。",content:"每个守卫方法都会接受三个参数： * to ： 即将要进入的路由对象 * from：当前导航正好离开的路由对象（当前路由） * next：重要，一定要调用该方法来resolve这个钩子。 * next()：执行这个方法，进入管道中的下一个钩子，开始跳转路由对象。如果全部钩子执行完了，则导航的状态就是confirmed，即跳转成功。 * next(false)：中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者点击的浏览器后退按钮），那么URL地址会重置到当前的from路由对应的地址，即当前的路由对象。 * next('/')或next({path: '/'})：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航，你可以向next传递任意的路由路径 * next(error)：略。暂时用不到，需要的话再查文档。",code:" 全局后置钩子： router.afterEach 全局后置钩子和守卫不同的是，这些钩子不会接收next()函数也不会改变导航本身",conBody:"组件内的守卫： * beforeRouteEnter * beforeRouteUpdate * beforRouteLeave beforeRouteEnter守卫不能访问 组件实例 this，因为守卫在导航跳转成功之前开始调用，这时候组件实例还没有被创建。不过，可以通过一个回调给next函数， 来访问组件实例。在导航被确认之后的时候执行回调，并且把组件实例作为回调方法的参数。"},{header:"VUE的生命周期",title:"VUE的生命周期钩子函数：",titleCon:"渲染页面前：",content:"* beforeCreate: 组件实例创建之前。实例还没有初始化，这个时候还没有el和data。 * created: 组件实例创建之后。在这里实例已经初始化了。实例完成的配置有：数据观测、属性和方法的运算，watch/event事件的回调。完成了data数据的初始化，el还没有。然后，挂载阶段还没有开始，此时组件还没有渲染到页面上，$el属性目前不可见。 * beforeMount: 挂载开始之前调用此钩子函数。相关的render函数首次被调用（虚拟DOM），实例完成的配置有：编译模板，把data里面的数据和模板生成html，完成了el和data初始化。注意：此时数据还以没有渲染到html页面上，只是做了一些准备工作。",code:"渲染页面后：",conBody:"* mounted: 挂载完成。也就是模板中的html已经渲染到了页面上，此时可以做一些ajax的操作。注意：mounted钩子函数只会执行一次。 * beforeUpdate: 在数据更新之前调用。发现在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加的重复的渲染过程。 * updated: 数据更新之后调用。在由于数据更改导致的虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多情况下，应该避免在此期间更改状态，因为可能会导致更新无限循环，该钩子在服务器渲染期间不被调用。 * beforeDestroy: 在组件实例销毁之前被调用。此时实例仍然完全可用。 * 这一步还可以用 this 来获取实例 * 一般在这一步做一些重置的操作，比如清除掉组件中的定时器和监听的dom事件。 * destroyed: 在组件实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁，该钩子函数在服务器渲染期间不被调用。"}]),c={data:function(){return{modal1:!1,vueList:s,list:[]}},methods:{handle:function(t){this.modal1=!0,this.list=this.vueList.filter((function(e){if(e.header==t)return e}))}}},l=c,u=n("2877"),d=Object(u["a"])(l,i,o,!1,null,"ae2c9acc",null),f=d.exports,h=[{title:"标题",key:"title"},{title:"概要",key:"outline"},{title:"层级",key:"hierarchy"},{title:"操作",slot:"operation",align:"center"}],p=[{title:"vue",outline:"vue基础",hierarchy:"基础1"},{title:"计算属性与侦听器",outline:"vue基础",hierarchy:"基础"},{title:"路由守卫",outline:"vue路由中路由守卫非常重要",hierarchy:"进阶"},{title:"路由容易忘的知识点",outline:"vue基础",hierarchy:"vue-router"},{title:"VUE的生命周期",outline:"VUE的生命周期钩子函数：",hierarchy:"高阶"}],v={name:"vue",components:{VueContent:f},data:function(){return{vueHeader:h,vueList:p,list:[],page:{index:1,size:5,total:10}}},methods:{show:function(t){this.$refs.VueContent.handle(t)},pIndexChange:function(t){this.page.index=t;var e=(t-1)*this.page.size,n=t*this.page.size;this.list=this.vueList.slice(e,n)}},created:function(){this.list=this.vueList.slice(0,this.page.size)}},g=v,x=(n("65e5"),Object(u["a"])(g,r,a,!1,null,"de0b105e",null));e["default"]=x.exports},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,h=5==t||d;return function(p,v,g,x){for(var y,m,b=i(p),E=a(b),_=r(v,g,3),C=o(E.length),w=0,R=x||s,I=e?R(p,C):n||f?R(p,0):void 0;C>w;w++)if((h||w in E)&&(y=E[w],m=_(y,w,b),t))if(e)I[w]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:c.call(I,y)}else switch(t){case 4:return!1;case 7:c.call(I,y)}return d?-1:l||u?u:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),i=n("d039"),o=n("b622"),s=n("9112"),c=o("species"),l=RegExp.prototype,u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=o(t),g=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),x=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!x||"replace"===t&&(!u||!d||h)||"split"===t&&!p){var y=/./[v],m=n(v,""[t],(function(t,e,n,r,i){var o=e.exec;return o===a||o===l.exec?g&&!i?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=m[0],E=m[1];r(String.prototype,t,b),r(l,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&s(l[v],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),o=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=d("slice"),h=u("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,u,d=c(this),f=s(d.length),g=o(t,f),x=o(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,g,x);for(r=new(void 0===n?Array:n)(v(x-g,0)),u=0;g<x;g++,u++)g in d&&l(r,u,d[g]);return r.length=u,r}})},ff89:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1eaaf486.8b64d1fc.js.map