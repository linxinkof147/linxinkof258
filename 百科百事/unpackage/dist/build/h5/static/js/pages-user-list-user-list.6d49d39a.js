(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-list-user-list"],{"08ca":function(t,e,n){"use strict";var i=n("ae1b"),a=n.n(i);a.a},"15f8":function(t,e,n){"use strict";n.r(e);var i=n("7eb6"),a=n("d81f");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("526d");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"bc419f96",null);e["default"]=o.exports},"28c6":function(t,e,n){"use strict";n.r(e);var i=n("d966"),a=n("5072");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"6cb16e53",null);e["default"]=o.exports},"2fe2":function(t,e,n){"use strict";n.r(e);var i=n("62c2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"3abb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-scroll-view",{staticClass:"uni-swiper-tab",style:t.scrollStyle,attrs:{"scroll-x":""}},[t._l(t.tabBars,function(e,i){return[n("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==i},style:t.scrollItemStyle,on:{click:function(e){e=t.$handleEvent(e),t.tabtap(i)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),n("v-uni-view",{staticClass:"swiper-tab-line"})],1)]})],2)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},4294:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-swiper-tab[data-v-beecc99a]{border-bottom:%?1?% solid #eee}.swiper-tab-list[data-v-beecc99a]{color:#969696;font-weight:700}.uni-tab-bar .active[data-v-beecc99a]{color:#343434}.active .swiper-tab-line[data-v-beecc99a]{border-bottom:%?6?% solid #fede33;width:%?70?%;margin:auto;border-top:%?6?% solid #fede33;border-radius:%?20?%}",""])},"4a4a":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-62228ee0]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden}.uni-navbar__content uni-view[data-v-62228ee0]{line-height:44px}.uni-navbar__header[data-v-62228ee0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-62228ee0]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?120?%;padding:0 %?12?%}.uni-navbar__header-btns[data-v-62228ee0]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-62228ee0]:last-child{width:%?60?%}.uni-navbar__header-container[data-v-62228ee0]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-62228ee0]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-62228ee0]{height:44px}.uni-navbar--fixed[data-v-62228ee0]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-62228ee0]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-62228ee0]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},5072:function(t,e,n){"use strict";n.r(e);var i=n("7998"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"526d":function(t,e,n){"use strict";var i=n("9456"),a=n.n(i);a.a},"5ef4":function(t,e,n){"use strict";n.r(e);var i=n("3abb"),a=n("e938");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("74c6");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"beecc99a",null);e["default"]=o.exports},"62c2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("15f8")),a=r(n("c45d"));function r(t){return t&&t.__esModule?t:{default:t}}var s={name:"uni-nav-bar",components:{uniStatusBar:i.default,uniIcon:a.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=s},"74c6":function(t,e,n){"use strict";var i=n("dd03"),a=n.n(i);a.a},7998:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(n("a34a")),a=l(n("d284")),r=l(n("5ef4")),s=l(n("e563")),o=l(n("fc7a")),u=l(n("1306"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return v(t)||f(t,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){var n=[],i=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(n.push(s.value),e&&n.length===e)break}catch(u){a=!0,r=u}finally{try{i||null==o["return"]||o["return"]()}finally{if(a)throw r}}return n}function v(t){if(Array.isArray(t))return t}function h(t,e,n,i,a,r,s){try{var o=t[r](s),u=o.value}catch(l){return void n(l)}o.done?e(u):Promise.resolve(u).then(i,a)}function b(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function s(t){h(r,i,a,s,o,"next",t)}function o(t){h(r,i,a,s,o,"throw",t)}s(void 0)})}}var p={components:{swiperTabHead:r.default,userList:s.default,loadMore:o.default,noThing:u.default,uniNavBar:a.default},computed:{getHeight:function(){}},data:function(){return{tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:10},{name:"关注",id:"guanzhu",num:20},{name:"粉丝",id:"fensi",num:30}],newslist:[{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1}]}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search?searchType=user"})},onShow:function(){this.__init()},methods:{clickRight:function(){uni.navigateBack({delta:1})},openSearch:function(){uni.navigateTo({url:"../search/search?searchType=user"})},__init:function(){this.tabBars[0].num=this.User.counts.friend_count<100?this.User.counts.friend_count:"99+",this.tabBars[1].num=this.User.counts.withfollow_count<100?this.User.counts.withfollow_count:"99+",this.tabBars[2].num=this.User.counts.withfen_count<100?this.User.counts.withfen_count:"99+",this.getList()},getUrl:function(){var t=["/friends/","/follows/","/fens/"];return t[this.tabIndex]+this.newslist[this.tabIndex].page},getList:function(){var t=b(i.default.mark(function t(){var e,n,a,r,s,o,u,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this.tabIndex,t.next=4,this.$http.get(this.getUrl(),{},{token:!0,checkToken:!0});case 4:if(n=t.sent,a=c(n,2),r=a[0],s=a[1],this.$http.errorCheck(r,s)){t.next=11;break}return this.newslist[e].loadtext="上拉加载更多",t.abrupt("return");case 11:for(o=[],console.log(s),u=s.data.data.list,l=0;l<u.length;l++)o.push(this.__format(u[l],e));return this.newslist[e].list=this.newslist[e].page>1?this.newslist[e].list.concat(o):o,this.newslist[e].firstload=!0,this.newslist[e].loadtext=u.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 21:return t.prev=21,t.t0=t["catch"](0),t.abrupt("return");case 24:case"end":return t.stop()}},t,this,[[0,21]])}));function e(){return t.apply(this,arguments)}return e}(),__format:function(t,e){return{id:t.userinfo.user_id,userpic:t.userpic,username:t.username,age:t.userinfo.age,sex:t.userinfo.sex,isguanzhu:2!==e}},loadmore:function(t){"上拉加载更多"===this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[t].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.newslist[this.tabIndex].firstload||this.getList()}}};e.default=p},"7eb6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight,background:t.bgcolor}},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},9456:function(t,e,n){var i=n("9823");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("dcbe85f4",i,!0,{sourceMap:!1,shadowMode:!1})},9823:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-bc419f96]{display:block;width:100%;height:20px;height:0}",""])},ae1b:function(t,e,n){var i=n("4a4a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7dbb7f02",i,!0,{sourceMap:!1,shadowMode:!1})},c2e0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{tabBars:Array,tabIndex:Number,scrollStyle:{type:String,default:""},scrollItemStyle:{type:String,default:""}},methods:{tabtap:function(t){this.$emit("tabtap",t)}}};e.default=i},d284:function(t,e,n){"use strict";n.r(e);var i=n("f7fd"),a=n("2fe2");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("08ca");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"62228ee0",null);e["default"]=o.exports},d81f:function(t,e,n){"use strict";n.r(e);var i=n("dbb8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},d966:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tab-bar body"},[n("uni-nav-bar",{attrs:{shadow:!1,border:!1},on:{"click-right":function(e){e=t.$handleEvent(e),t.clickRight(e)}}},[n("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","border-radius":"4px","margin-left":"-120upx",height:"60upx","margin-top":"12upx",color:"#CCCCCC",background:"#F7F7F7"},on:{click:function(e){e=t.$handleEvent(e),t.openSearch(e)}}},[n("v-uni-view",{staticClass:"iconfont icon-sousuo",staticStyle:{"margin-right":"6upx"}}),t._v("搜索用户")],1),n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-view",[t._v("取消")])],1)],2),n("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex,scrollItemStyle:"width:33%;",scrollStyle:"border-bottom:0;"},on:{tabtap:function(e){e=t.$handleEvent(e),t.tabtap(e)}}}),n("v-uni-swiper",{staticClass:"swiper-box",style:t.getHeight,attrs:{current:t.tabIndex},on:{change:function(e){e=t.$handleEvent(e),t.tabChange(e)}}},t._l(t.newslist,function(e,i){return n("v-uni-swiper-item",{key:i,style:t.getHeight},[n("v-uni-scroll-view",{staticClass:"list",style:t.getHeight,attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadmore(i)}}},[e.list.length>0?[t._l(e.list,function(t,e){return[n("user-list",{key:e+"_0",attrs:{item:t,index:e}})]}),n("load-more",{attrs:{loadtext:e.loadtext}})]:e.firstload?[n("no-thing")]:[n("v-uni-view",{staticClass:"u-f-ajc",staticStyle:{"font-size":"50upx","font-weight":"bold",color:"#CCCCCC","padding-top":"100upx"}},[t._v("Loading ...")])]],2)],1)}),1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},dbb8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"uni-status-bar",props:{bgcolor:{type:String,default:""}},data:function(){return{statusBarHeight:i}}};e.default=a},dd03:function(t,e,n){var i=n("4294");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("156cddf0",i,!0,{sourceMap:!1,shadowMode:!1})},e938:function(t,e,n){"use strict";n.r(e);var i=n("c2e0"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},f7fd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":!!t.fixed,"uni-navbar--shadow":!!t.border,"uni-navbar--border":!!t.border},staticStyle:{"z-index":"9999"},style:{"background-color":t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);