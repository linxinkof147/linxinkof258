(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"56cc":function(t,n,e){"use strict";e.r(n);var r=e("6f46"),i=e("de98");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("790a");var a=e("2877"),o=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports},"6f46":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i})},"71ac":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,n){return s(t)||o(t,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,n){var e=[],r=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0)if(e.push(a.value),n&&e.length===n)break}catch(s){i=!0,u=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw u}}return e}function s(t){if(Array.isArray(t))return t}function c(t,n,e,r,i,u,a){try{var o=t[u](a),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function h(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var u=t.apply(n,e);function a(t){c(u,r,i,a,o,"next",t)}function o(t){c(u,r,i,a,o,"throw",t)}a(void 0)})}}var l=function(){return e.e("components/news/news-nav-bar").then(e.bind(null,"0277"))},p=function(){return e.e("components/common/common-list").then(e.bind(null,"a488"))},f=function(){return e.e("components/common/load-more").then(e.bind(null,"fc7a"))},d=function(){return e.e("components/news/topic-nav").then(e.bind(null,"ccf1"))},m=function(){return e.e("components/news/topic-list").then(e.bind(null,"a497"))},g=function(){return e.e("components/common/no-thing").then(e.bind(null,"1306"))},v={components:{newsNavBar:l,commonList:p,loadMore:f,topicNav:d,topicList:m,noThing:g},computed:{getSearchWidth:function(){},getSwiperHeight:function(){}},data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"话题",id:"topic"}],guanzhu:{firstload:!1,loadtext:"上拉加载更多",page:1,list:[]},topic:{swiper:[],nav:[],list:[]}}},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var r=e.windowHeight-t.upx2px(100);n.swiperheight=r}}),this.__init()},onShow:function(){this.getFollowPostList()},methods:{__init:function(){this.getSwiper(),this.getNav(),this.getHot(),t.$on("updateData",this.updateData)},updateData:function(t){switch(t.type){case"support":this.updateSupport(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var n=this.guanzhu.list.find(function(n){return n.id===t.post_id});n&&n.commentnum++},updateSupport:function(t){var n=this.guanzhu.list.find(function(n){return n.id===t.post_id});n&&1!==n.infonum.index&&"ding"==t.do&&(n.infonum.index=1,n.goodnum++)},openSearch:function(){t.navigateTo({url:"../search/search?searchType=topic"})},getFollowPostList:function(){var t=h(r.default.mark(function t(){var n,e,i,a,o,s,c,h;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n="/followpost/".concat(this.guanzhu.page),t.next=3,this.$http.get(n,{},{token:!0});case 3:if(e=t.sent,i=u(e,2),a=i[0],o=i[1],this.$http.errorCheck(a,o)){t.next=10;break}return this.guanzhu.firstload=!0,t.abrupt("return",this.guanzhu.loadtext="上拉加载更多");case 10:for(s=[],console.log(o," at pages\\news\\news.vue:185"),c=o.data.data.list,h=0;h<c.length;h++)s.push(this.__format(c[h]));return this.guanzhu.list=this.guanzhu.page>1?this.guanzhu.list.concat(s):s,this.guanzhu.firstload=!0,this.guanzhu.loadtext=c.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 18:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){var n={userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},sex:t.user.userinfo.sex,age:t.user.userinfo.age,goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum};return t.user_id===this.User.userinfo.id&&(n.isguanzhu=!0),n},getSwiper:function(){var t=h(r.default.mark(function t(){var n,e,i,a,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/adsense/0");case 2:if(n=t.sent,e=u(n,2),i=e[0],a=e[1],this.$http.errorCheck(i,a)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=a.data.data.list,c=0;c<s.length;c++)o.push({src:s[c].src,url:s[c].url});this.topic.swiper=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getNav:function(){var t=h(r.default.mark(function t(){var n,e,i,a,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/topicclass");case 2:if(n=t.sent,e=u(n,2),i=e[0],a=e[1],this.$http.errorCheck(i,a)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=a.data.data.list,c=0;c<s.length;c++)o.push({id:s[c].id,name:s[c].classname});this.topic.nav=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getHot:function(){var t=h(r.default.mark(function t(){var n,e,i,a,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/hottopic");case 2:if(n=t.sent,e=u(n,2),i=e[0],a=e[1],this.$http.errorCheck(i,a)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=a.data.data.list,c=0;c<s.length;c++)o.push({id:s[c].id,titlepic:s[c].titlepic,title:s[c].title,desc:s[c].desc,totalnum:s[c].post_count,todaynum:s[c].todaypost_count});this.topic.list=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),changeTab:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},loadmore:function(){"上拉加载更多"==this.guanzhu.loadtext&&(this.guanzhu.loadtext="加载中...",this.guanzhu.page++,this.getFollowPostList())}}};n.default=v}).call(this,e("6e42")["default"])},"790a":function(t,n,e){"use strict";var r=e("915e"),i=e.n(r);i.a},"915e":function(t,n,e){},de98:function(t,n,e){"use strict";e.r(n);var r=e("71ac"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=i.a}},[["8daa","common/runtime","common/vendor"]]]);