(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-space/user-space"],{"2d24":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},3227:function(t,e,n){},b432:function(t,e,n){"use strict";n.r(e);var i=n("2d24"),r=n("e8cf");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("ddfe");var s=n("2877"),u=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},ddfe:function(t,e,n){"use strict";var i=n("3227"),r=n.n(i);r.a},e8cf:function(t,e,n){"use strict";n.r(e);var i=n("f340"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},f340:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),r=a(n("e6ae"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return c(t)||o(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)if(n.push(s.value),e&&n.length===e)break}catch(o){r=!0,a=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return n}function c(t){if(Array.isArray(t))return t}function h(t,e,n,i,r,a,s){try{var u=t[a](s),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(i,r)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function s(t){h(a,i,r,s,u,"next",t)}function u(t){h(a,i,r,s,u,"throw",t)}s(void 0)})}}var d=function(){return n.e("components/user-space/user-space-head").then(n.bind(null,"6b70"))},l=function(){return n.e("components/home/home-data").then(n.bind(null,"1747"))},p=function(){return n.e("components/index/swiper-tab-head").then(n.bind(null,"5ef4"))},m=function(){return n.e("components/user-space/user-space-userinfo").then(n.bind(null,"2c90"))},b=function(){return n.e("components/common/common-list").then(n.bind(null,"a488"))},g=function(){return n.e("components/common/load-more").then(n.bind(null,"fc7a"))},v=function(){return n.e("components/user-space/user-space-popup").then(n.bind(null,"03dc"))},x=function(){return n.e("components/common/no-thing").then(n.bind(null,"1306"))},w={components:{userSpaceHead:d,homeData:l,swiperTabHead:p,userSpaceUserinfo:m,commonList:b,loadMore:g,userSpacePopup:v,noThing:x},data:function(){return{show:!1,userinfo:{bgimg:1,userpic:"",username:"",sex:0,age:20,isguanzhu:!1,regtime:"",id:0,birthday:"",job:"",path:"",qg:""},spacedata:[{name:"获赞",num:0},{name:"关注",num:0},{name:"粉丝",num:0}],tabIndex:0,tabBars:[{name:"主页",id:"zhuye"},{name:"糗事",id:"qiushi"},{name:"动态",id:"dongtai"}],tablist:[{},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1}]}},onReachBottom:function(){this.loadmore()},onNavigationBarButtonTap:function(t){0==t.index&&this.togleShow()},onLoad:function(t){this.__init(t.userid)},methods:{__init:function(t){this.getUserInfo(t),this.getCounts(t)},getUserInfo:function(){var t=f(i.default.mark(function t(e){var n,a,u,o,c,h,f,d,l,p,m;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=["不限","男","女"],a=["秘密","未婚","已婚"],e!=this.User.userinfo.id){t.next=9;break}o=this.User.userinfo,u=!0,c=!1,h=!1,t.next=21;break;case 9:return t.next=11,this.$http.post("/getuserinfo",{user_id:e},{token:!0});case 11:if(f=t.sent,d=s(f,2),l=d[0],p=d[1],this.$http.errorCheck(l,p)){t.next=17;break}return t.abrupt("return");case 17:o=p.data.data,u=!1,c=!!p.data.data.fens.length,h=!!p.data.data.blacklist.length;case 21:m=o.create_time?r.default.gettime.dateFormat(new Date(1e3*o.create_time),"{Y}-{MM}-{DD}"):"未知",this.userinfo={isme:u,bgimg:1,userpic:o.userpic,username:o.username,sex:n[o.userinfo.sex]||"不限",age:o.userinfo.age,isguanzhu:c,isblack:h,regtime:m,id:o.id,birthday:o.userinfo.birthday||"未知",job:o.userinfo.job||"未知",path:o.userinfo.path||"未知",qg:a[o.userinfo.qg]||"秘密"};case 23:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getCounts:function(){var t=f(i.default.mark(function t(e){var n,r,a,u,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e!=this.User.userinfo.id){t.next=4;break}n=this.User.counts,t.next=13;break;case 4:return t.next=6,this.$http.get("/user/getcounts/"+e);case 6:if(r=t.sent,a=s(r,2),u=a[0],o=a[1],this.$http.errorCheck(u,o)){t.next=12;break}return t.abrupt("return");case 12:n=o.data.data;case 13:n&&(this.spacedata[0].num=n.post_count,this.spacedata[1].num=n.withfollow_count,this.spacedata[2].num=n.withfen_count);case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),updateGuanZhu:function(e){this.userinfo.isguanzhu=e;var n={type:"guanzhu",userid:this.userinfo.id,data:e};t.$emit("updateData",n)},togleShow:function(){this.show=!this.show},lahei:function(){var e=f(i.default.mark(function e(){var n,r,a,u,o,c;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"Loading...",mask:!1}),n=this.userinfo.isblack?"/removeblack":"/addblack",r=this.userinfo.isblack?"移除黑名单":"加入黑名单",e.next=5,this.$http.post(n,{id:this.userinfo.id},{token:!0,checkToken:!0,checkAuth:!0});case 5:if(a=e.sent,u=s(a,2),o=u[0],c=u[1],this.$http.errorCheck(o,c)){e.next=12;break}return t.hideLoading(),e.abrupt("return",this.togleShow());case 12:t.hideLoading(),t.showToast({title:r+"成功"}),this.userinfo.isblack=!this.userinfo.isblack,this.togleShow();case 16:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),goToChat:function(){var t={userid:this.userinfo.id,userpic:this.userinfo.userpic,username:this.userinfo.username};this.User.navigate({url:"/pages/user-chat/user-chat?userinfo="+JSON.stringify(t)}),this.togleShow()},loadmore:function(){"上拉加载更多"==this.tablist[this.tabIndex].loadtext&&(this.tablist[this.tabIndex].loadtext="加载中...",this.tablist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t,this.tablist[t].firstload||0===t||this.getList()},getList:function(){var t=f(i.default.mark(function t(){var e,n,r,a,u,o,c,h,f,d;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.tablist[this.tabIndex].page,n=this.userinfo.isme?"/user/post/".concat(e):"/user/".concat(this.userinfo.id,"/post/").concat(e),r=this.tabIndex,t.next=5,this.$http.get(n,{},{token:!0});case 5:if(a=t.sent,u=s(a,2),o=u[0],c=u[1],this.$http.errorCheck(o,c)){t.next=11;break}return t.abrupt("return",this.tablist[r].loadtext="上拉加载更多");case 11:for(h=[],f=c.data.data.list,d=0;d<f.length;d++)h.push(this.__format(f[d]));return this.tablist[r].list=e>1?this.tablist[r].list.concat(h):h,this.tablist[r].firstload=!0,this.tablist[r].loadtext=f.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__format:function(t){var e={userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum};return t.user_id===this.User.userinfo.id&&(e.isguanzhu=!0),e}}};e.default=w}).call(this,n("543d")["default"])}},[["6ce9","common/runtime","common/vendor"]]]);