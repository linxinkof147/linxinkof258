(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"5cac":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,n){return o(t)||u(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,n){var e=[],i=!0,a=!1,s=void 0;try{for(var r,u=t[Symbol.iterator]();!(i=(r=u.next()).done);i=!0)if(e.push(r.value),n&&e.length===n)break}catch(o){a=!0,s=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(a)throw s}}return e}function o(t){if(Array.isArray(t))return t}function c(t,n,e,i,a,s,r){try{var u=t[s](r),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,a)}function d(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var s=t.apply(n,e);function r(t){c(s,i,a,r,u,"next",t)}function u(t){c(s,i,a,r,u,"throw",t)}r(void 0)})}}var l=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"d284"))},h=function(){return e.e("components/index/index-list").then(e.bind(null,"f326"))},f=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"5ef4"))},p=function(){return e.e("components/common/load-more").then(e.bind(null,"fc7a"))},m=function(){return e.e("components/common/no-thing").then(e.bind(null,"1306"))},b={components:{indexList:h,swiperTabHead:f,loadMore:p,noThing:m,uniNavBar:l},data:function(){return{tabIndex:0,tabBars:[],newslist:[]}},onLoad:function(){this.getNav(),t.$on("updateData",this.updateData)},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(t){switch(t.index){case 1:this.User.navigate({url:"../add-input/add-input?postclass="+JSON.stringify(this.tabBars)});break}},methods:{clickLeft:function(){console.log("左边事件")},clickRight:function(){this.User.navigate({url:"../add-input/add-input?postclass="+JSON.stringify(this.tabBars)})},openSearch:function(){t.navigateTo({url:"../search/search"})},updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break;case"updateList":this.updateList(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var n=this.newslist[this.tabIndex].list.find(function(n){return n.id===t.post_id});n&&n.commentnum++},updateGuanZhu:function(t){this.newslist[this.tabIndex].list.forEach(function(n,e){n.userid===t.userid&&(n.isguanzhu=t.data)})},updateSupport:function(t){var n=this.newslist[this.tabIndex].list.find(function(n){return n.id===t.post_id});if(n){var e=n.infonum.index;n.infonum.index="ding"==t.do?1:2,0!==e&&(1==e?n.infonum.dingnum--:n.infonum.cainum--),0!==n.infonum.index&&(1==n.infonum.index?n.infonum.dingnum++:n.infonum.cainum++)}},updateList:function(t){var n=this.tabBars.findIndex(function(n){return n.id===t.post_class_id});n>-1&&this.newslist[n].list.push(this.__format(t))},getNav:function(){var t=d(i.default.mark(function t(){var n,e,a,r,u,o,c,d;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/postclass");case 2:if(n=t.sent,e=s(n,2),a=e[0],r=e[1],this.$http.errorCheck(a,r)){t.next=8;break}return t.abrupt("return");case 8:for(u=r.data.data.list,o=[],c=[],d=0;d<u.length;d++)o.push({id:u[d].id,name:u[d].classname}),c.push({loadtext:"上拉加载更多",list:[],page:1,firstload:!1});this.tabBars=o,this.newslist=c,this.tabBars.length>0&&this.getList();case 15:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getList:function(){var t=d(i.default.mark(function t(){var n,e,a,r,u,o,c,d,l,h,f=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.tabIndex,e="/postclass/".concat(this.tabBars[this.tabIndex].id,"/post/").concat(this.newslist[this.tabIndex].page),t.next=4,this.$http.get(e,{},{token:!0});case 4:if(a=t.sent,r=s(a,2),u=r[0],o=r[1],c=this.$http.errorCheck(u,o,function(){f.newslist[n].loadtext="上拉加载更多"},function(){f.newslist[n].loadtext="上拉加载更多"}),console.log(o),c){t.next=12;break}return t.abrupt("return");case 12:for(d=[],l=o.data.data.list,h=0;h<l.length;h++)d.push(this.__format(l[h]));return this.newslist[n].list=this.newslist[n].page>1?this.newslist[n].list.concat(d):d,this.newslist[n].firstload=!0,l.length<10?this.newslist[n].loadtext="没有更多数据了":this.newslist[n].loadtext="上拉加载更多",t.abrupt("return");case 19:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){return{userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},commentnum:t.comment_count,sharenum:t.sharenum}},loadmore:function(t){"上拉加载更多"==this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.getList()}}};n.default=b}).call(this,e("543d")["default"])},"613d":function(t,n,e){"use strict";e.r(n);var i=e("da5f"),a=e("db39");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var r=e("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},da5f:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},db39:function(t,n,e){"use strict";e.r(n);var i=e("5cac"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a}},[["a177","common/runtime","common/vendor"]]]);