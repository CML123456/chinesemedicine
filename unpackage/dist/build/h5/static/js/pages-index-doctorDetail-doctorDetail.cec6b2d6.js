(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-doctorDetail-doctorDetail"],{6397:function(t,e,a){"use strict";var n=a("e4c4"),i=a.n(n);i.a},7502:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */*[data-v-52588fe0]{margin:0;padding:0}.body[data-v-52588fe0]{margin:%?20?% %?20?%;background-color:#fff;border-radius:%?20?%}.body .header[data-v-52588fe0]{margin:%?20?%;display:flex;justify-content:space-between}.body .header .text .header-name[data-v-52588fe0]{margin-top:%?80?%;font-size:%?40?%}.body .header .text .header-old[data-v-52588fe0]{font-size:%?24?%;color:#b1b1b1}.body .header .img[data-v-52588fe0]{margin-top:%?20?%;width:%?200?%;height:%?200?%;border-radius:%?10?%}.body .introduced[data-v-52588fe0]{margin:0 %?20?%}.body .foot[data-v-52588fe0]{margin-top:%?20?%;margin-left:%?20?%}.body .foot .text[data-v-52588fe0]{font-weight:600}.body .foot .conter[data-v-52588fe0]{margin-left:%?20?%;margin-top:%?20?%}',""]),t.exports=e},"9cd6":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={uCollapse:a("a6cc").default,uCollapseItem:a("833b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"header-name"},[t._v(t._s(t.detail.name))]),a("v-uni-view",{staticClass:"header-old"},[t._v(t._s(t.detail.oldinfo||""))])],1),a("v-uni-image",{staticClass:"img",attrs:{src:t.imgUrl,mode:""}})],1),a("v-uni-view",{staticClass:"introduced"},[t._v(t._s(t.detail.introduced))]),a("v-uni-view",{staticClass:"foot"},[a("v-uni-text",{staticClass:"text"},[t._v("主要成就")]),a("v-uni-text",{staticClass:"conter"},[t._v(t._s(t.detail.achievements))])],1),a("v-uni-view",{staticClass:"foot"},[a("v-uni-text",{staticClass:"text"},[t._v("擅长领域")]),a("v-uni-text",{staticClass:"conter"},[t._v(t._s(t.detail.goodAt))])],1),a("v-uni-view",{staticClass:"foot"},[a("v-uni-text",{staticClass:"text"},[t._v("作品")]),a("v-uni-text",{staticClass:"conter"},[t._v(t._s(t.detail.works))])],1),a("u-collapse",[a("u-collapse-item",{attrs:{title:"人物生平",name:"Docs guide"}},[a("v-uni-text",{staticClass:"u-collapse-content"},[t._v(t._s(t.detail.file))])],1),a("u-collapse-item",{attrs:{title:"轶事典故",name:"Variety components"}},[a("v-uni-text",{staticClass:"u-collapse-content"},[t._v(t._s(t.detail.allusions))])],1)],1)],1)},s=[]},bda0:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),s=n(a("1da1")),r={data:function(){return{id:"",detail:{},imgUrl:""}},methods:{getdoctorDetail:function(e){var a=this;return(0,s.default)((0,i.default)().mark((function n(){var s,r,o;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t.database(),n.next=3,s.collection("historical-doctor").where("_id=='"+e+"'").get();case 3:return r=n.sent,a.detail=r.result.data[0],n.next=7,t.getFileInfo({fileList:[a.detail.imgID]});case 7:o=n.sent,a.imgUrl=o.fileList[0].url;case 9:case"end":return n.stop()}}),n)})))()}},onLoad:function(t){this.id=t.id,this.getdoctorDetail(t.id)}};e.default=r}).call(this,a("a9ff")["default"])},c1c0:function(t,e,a){"use strict";a.r(e);var n=a("9cd6"),i=a("d4a7");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("6397");var r=a("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"52588fe0",null,!1,n["a"],void 0);e["default"]=o.exports},d4a7:function(t,e,a){"use strict";a.r(e);var n=a("bda0"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},e4c4:function(t,e,a){var n=a("7502");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e805c646",n,!0,{sourceMap:!1,shadowMode:!1})}}]);