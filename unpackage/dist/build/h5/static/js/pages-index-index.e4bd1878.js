(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0bce":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-d4342702], uni-scroll-view[data-v-d4342702], uni-swiper-item[data-v-d4342702]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-d4342702]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-d4342702]{flex:1}.u-swiper__wrapper__item[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-d4342702]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-d4342702]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-d4342702]{position:absolute;bottom:10px}',""]),t.exports=e},"12a5":function(t,e,i){"use strict";i.r(e);var r=i("86ed"),n=i("a981");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("b383");var o=i("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"26861ad0",null,!1,r["a"],void 0);e["default"]=d.exports},"1dd9":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var r={props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}};e.default=r},3594:function(t,e){t.exports="data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"},"41b0":function(t,e,i){var r=i("cdf8");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("a9919e58",r,!0,{sourceMap:!1,shadowMode:!1})},"476f":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("53ca"));i("ac1f"),i("00b4");var a=r(i("502b")),o={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{currentIndex:0}},watch:{current:function(t,e){t!==e&&(this.currentIndex=t)}},computed:{itemStyle:function(){var t=this;return function(e){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=uni.$u.addUnit(t.radius),e!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?uni.$u.test.video(this.getSource(t))?"video":"image":"object"===(0,n.default)(t)&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":uni.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===(0,n.default)(t)&&this.keyName?t[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(t){var e=t.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=e,this.$emit("change",t.detail)},pauseVideo:function(t){var e=this.getSource(this.list[t]);if(uni.$u.test.video(e)){var i=uni.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(t){return"object"===(0,n.default)(t)&&t.poster?t.poster:""},clickHandler:function(t){this.$emit("click",t)}}};e.default=o},4838:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-23a72621], uni-scroll-view[data-v-23a72621], uni-swiper-item[data-v-23a72621]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-23a72621]{display:flex;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-23a72621]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-23a72621]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-23a72621]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-23a72621]{width:12px}',""]),t.exports=e},"4a8a":function(t,e,i){"use strict";i.r(e);var r=i("476f"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"4fea":function(t,e,i){"use strict";i.r(e);var r=i("df11"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"502b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var r={props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}};e.default=r},6665:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-26861ad0], uni-scroll-view[data-v-26861ad0], uni-swiper-item[data-v-26861ad0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-26861ad0]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-26861ad0]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-26861ad0]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-26861ad0 1s linear infinite;animation:u-rotate-data-v-26861ad0 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-26861ad0]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-26861ad0]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-26861ad0]{flex-direction:column}[data-v-26861ad0]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-26861ad0]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-26861ad0]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-26861ad0]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-26861ad0]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-26861ad0]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"6ef9":function(t,e,i){var r=i("4838");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("46301169",r,!0,{sourceMap:!1,shadowMode:!1})},"75df":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uSearch:i("8b7f").default,uSwiper:i("dcd0").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{},[r("v-uni-view",{staticClass:"search"},[r("u-search",{staticClass:"search-border",attrs:{bgColor:"#fff",shape:"round","show-action":!1,disabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch()}}})],1),r("v-uni-view",{staticClass:"swiper"},[r("u-swiper",{attrs:{list:t.list,mode:"dot",indicator:!0,indicatorMode:"dot",circular:!0,keyName:"image",effect3d:!0,radius:"5",previousMargin:"10",nextMargin:"10",autoplay:!0}})],1),r("v-uni-view",{staticClass:"physical-therapy"},t._l(t.technique,(function(e){return r("v-uni-view",{key:e._id,staticClass:"therapy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotechnique(e)}}},[r("v-uni-image",{staticClass:"img",attrs:{src:"../../static/technique/"+e.logoID+".png",mode:""}}),r("v-uni-view",{staticClass:"text"},[t._v(t._s(e.name))])],1)})),1),r("v-uni-view",{staticClass:"famous-doctor"},t._l(2,(function(e){return r("v-uni-view",{key:e,staticClass:"doctor"},[r("v-uni-image",{staticClass:"img",attrs:{src:i("3594"),mode:""}}),r("v-uni-view",{staticClass:"text"},[r("v-uni-view",{},[t._v("扁鹊")]),r("v-uni-view",{},[t._v("我是扁鹊，我输出萨伏阿海还是覅和哈市啊hi收到")])],1)],1)})),1)],1)},a=[]},"76ab":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var r={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=r},"7f2a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uLoadingIcon:i("12a5").default,uSwiperIndicator:i("e747").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:t.bgColor,height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)}},[t.loading?i("v-uni-view",{staticClass:"u-swiper__loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):i("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:t.$u.addUnit(t.height)},attrs:{circular:t.circular,interval:t.interval,duration:t.duration,autoplay:t.autoplay,current:t.current,currentItemId:t.currentItemId,previousMargin:t.$u.addUnit(t.previousMargin),nextMargin:t.$u.addUnit(t.nextMargin),acceleration:t.acceleration,displayMultipleItems:t.displayMultipleItems,easingFunction:t.easingFunction},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,r){return i("v-uni-swiper-item",{key:r,staticClass:"u-swiper__wrapper__item"},[i("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[t.itemStyle(r)]},["image"===t.getItemType(e)?i("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)},attrs:{src:t.getSource(e),mode:t.imgMode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(r)}}}):t._e(),"video"===t.getItemType(e)?i("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:t.$u.addUnit(t.height)},attrs:{id:"video-"+r,"enable-progress-gesture":!1,src:t.getSource(e),poster:t.getPoster(e),title:t.showTitle&&t.$u.test.object(e)&&e.title?e.title:"",controls:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(r)}}}):t._e(),t.showTitle&&t.$u.test.object(e)&&e.title&&t.$u.test.image(t.getSource(e))?i("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[t._t("indicator",[t.loading||!t.indicator||t.showTitle?t._e():i("u-swiper-indicator",{attrs:{indicatorActiveColor:t.indicatorActiveColor,indicatorInactiveColor:t.indicatorInactiveColor,length:t.list.length,current:t.currentIndex,indicatorMode:t.indicatorMode}})])],2)],1)},a=[]},"86ed":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():i("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return i("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?i("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},n=[]},"8a31":function(t,e,i){"use strict";(function(t){i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("c7eb")),a=r(i("1da1")),o={data:function(){return{Detail:[],list:[{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"1"},{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"2"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"3"}],technique:[]}},onLoad:function(){},methods:{goSearch:function(){uni.navigateTo({url:"/pages/search/search"})},getTechniqueList:function(){var e=this;return(0,a.default)((0,n.default)().mark((function i(){var r,a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=t.database(),i.next=3,r.collection("technique").get();case 3:a=i.sent,e.technique=a.result.data;case 5:case"end":return i.stop()}}),i)})))()},gotechnique:function(t){var e=t._id;uni.navigateTo({url:"./technique/technique?id=".concat(e)})}},onShow:function(){this.getTechniqueList()}};e.default=o}).call(this,i("a9ff")["default"])},"8d9d":function(t,e,i){"use strict";var r=i("41b0"),n=i.n(r);n.a},"930e":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a630"),i("3ca3");var n=r(i("76ab")),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),i=e[e.length-1],r=i.$getAppWebview();r.addEventListener("hide",(function(){t.webviewHide=!0})),r.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=a},a981:function(t,e,i){"use strict";i.r(e);var r=i("930e"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},accf:function(t,e,i){"use strict";i.r(e);var r=i("8a31"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},b2b7:function(t,e,i){"use strict";var r=i("ec40"),n=i.n(r);n.a},b383:function(t,e,i){"use strict";var r=i("f535"),n=i.n(r);n.a},b825:function(t,e,i){"use strict";var r=i("6ef9"),n=i.n(r);n.a},c232:function(t,e,i){"use strict";i.r(e);var r=i("75df"),n=i("accf");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("8d9d");var o=i("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"10fb4823",null,!1,r["a"],void 0);e["default"]=d.exports},cdf8:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */*[data-v-10fb4823]{margin:0;padding:0}.search[data-v-10fb4823]{margin:%?15?% 0}.swiper[data-v-10fb4823]{margin-bottom:%?15?%}.famous-doctor .doctor[data-v-10fb4823]{margin-bottom:%?20?%;display:flex;justify-content:center}.famous-doctor .doctor .img[data-v-10fb4823]{width:%?200?%;height:%?300?%;object-fit:contain}.famous-doctor .doctor .text[data-v-10fb4823]{width:%?400?%;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start}.physical-therapy[data-v-10fb4823]{display:flex;flex-wrap:wrap;justify-content:space-around}.physical-therapy .therapy[data-v-10fb4823]{width:%?100?%;display:flex;flex-direction:column;margin:%?40?%}.physical-therapy .therapy .img[data-v-10fb4823]{width:%?100?%;height:%?100?%}.physical-therapy .therapy .text[data-v-10fb4823]{text-align:center}',""]),t.exports=e},d136:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+t.indicatorMode],style:{width:t.$u.addUnit(t.lineWidth*t.length),backgroundColor:t.indicatorInactiveColor}},[i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[t.lineStyle]})],1):t._e(),"dot"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},t._l(t.length,(function(e,r){return i("v-uni-view",{key:r,staticClass:"u-swiper-indicator__wrapper__dot",class:[r===t.current&&"u-swiper-indicator__wrapper__dot--active"],style:[t.dotStyle(r)]})})),1):t._e()],1)},n=[]},dcd0:function(t,e,i){"use strict";i.r(e);var r=i("7f2a"),n=i("4a8a");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("b2b7");var o=i("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"d4342702",null,!1,r["a"],void 0);e["default"]=d.exports},df11:function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("1dd9")),a={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.lineWidth),t.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),t.backgroundColor=this.indicatorActiveColor,t},dotStyle:function(){var t=this;return function(e){var i={};return i.backgroundColor=e===t.current?t.indicatorActiveColor:t.indicatorInactiveColor,i}}}};e.default=a},e747:function(t,e,i){"use strict";i.r(e);var r=i("d136"),n=i("4fea");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("b825");var o=i("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"23a72621",null,!1,r["a"],void 0);e["default"]=d.exports},ec40:function(t,e,i){var r=i("0bce");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("0085cdae",r,!0,{sourceMap:!1,shadowMode:!1})},f535:function(t,e,i){var r=i("6665");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("fdf30446",r,!0,{sourceMap:!1,shadowMode:!1})}}]);