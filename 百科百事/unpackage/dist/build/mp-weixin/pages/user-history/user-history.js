(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-history/user-history"],{"0533":function(t,n,i){"use strict";i.r(n);var e=i("ce35"),o=i("6d7c");for(var u in o)"default"!==u&&function(t){i.d(n,t,function(){return o[t]})}(u);var a=i("2877"),r=Object(a["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},"6d7c":function(t,n,i){"use strict";i.r(n);var e=i("e34a"),o=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,function(){return e[t]})}(u);n["default"]=o.a},ce35:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},e34a:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return i.e("components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"d284"))},o=function(){return i.e("components/uni-list/uni-list").then(i.bind(null,"4ad0"))},u=function(){return i.e("components/uni-list-item/uni-list-item").then(i.bind(null,"0a13"))},a=function(){return i.e("components/common/no-thing").then(i.bind(null,"1306"))},r={components:{uniList:o,uniListItem:u,noThing:a,uniNavBar:e},data:function(){return{firstload:!1,list:[]}},onLoad:function(){this.getList()},onNavigationBarButtonTap:function(){this.clear()},methods:{clickRight:function(){this.clear()},clear:function(){var n=this;t.showModal({title:"提示",content:"是否要清除浏览历史？",success:function(i){i.confirm&&(n.User.clearHistory(),n.list=[],t.showToast({title:"清除成功"}))}})},getList:function(){try{var n=t.getStorageSync("HistoryList_"+this.User.userinfo.id);this.list=n?JSON.parse(n):[]}catch(i){t.showToast({title:"加载失败~",icon:"none"})}this.firstload=!0},openDetail:function(n){t.navigateTo({url:"/pages/detail/detail?detailData="+JSON.stringify(n)})}}};n.default=r}).call(this,i("543d")["default"])}},[["9844","common/runtime","common/vendor"]]]);