(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-feedback/user-feedback"],{"31be":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),i=a(n("e6ae"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return c(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t,e){return d(t)||h(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(u){i=!0,a=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function d(t){if(Array.isArray(t))return t}function p(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function m(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){p(a,r,i,o,s,"next",t)}function s(t){p(a,r,i,o,s,"throw",t)}o(void 0)})}}var g=function(){return n.e("components/user-chat/user-chat-bottom").then(n.bind(null,"aaa0"))},b=function(){return n.e("components/user-chat/user-chat-list").then(n.bind(null,"b16e"))},v={components:{userChatBottom:g,userChatList:b},data:function(){return{scrollTop:0,style:{contentH:0,itemH:0},list:[],page:1,loadtext:"点击加载更多"}},onReady:function(){this.getdata(),this.initdata()},methods:{initdata:function(){try{var e=t.getSystemInfoSync();this.style.contentH=e.windowHeight-t.upx2px(120)}catch(n){}},loadmore:function(){"点击加载更多"==this.loadtext&&(this.loadtext="加载中...",this.page++,this.getdata())},pageToBottom:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=t.createSelectorQuery().in(this),i=r.selectAll(".chat-item");this.$nextTick(function(){i.fields({size:!0},function(t){if(t){if(n)for(var r=0;r<t.length;r++)e.style.itemH+=t[r].height;else e.style.itemH+=t[t.length-1].height;e.scrollTop=e.style.itemH>e.style.contentH?e.style.itemH:0}}).exec()})},getdata:function(){var t=m(r.default.mark(function t(){var e,n,a,s,u,c,f,h,d;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="/feedbacklist/".concat(this.page),t.next=3,this.$http.get(e,{},{token:!0,checkToken:!0});case 3:if(n=t.sent,a=l(n,2),s=a[0],u=a[1],this.$http.errorCheck(s,u)){t.next=9;break}return t.abrupt("return");case 9:for(c=u.data.data.list,f=[],h=0;h<c.length;h++)c[h].from_id!=this.User.userinfo.id&&c[h].to_id!=this.User.userinfo.id||(d=c[h].from_id==this.User.userinfo.id,f.push({isme:d,userpic:d?this.User.userinfo.userpic:"../../static/demo/userpic/11.jpg",type:"text",data:c[h].data,time:c[h].create_time,gstime:i.default.gettime.getChatTime(c[h].create_time,h>0?c[h-1].create_time:0)}));this.loadtext=c.length<10?"没有更多数据了":"点击加载更多",f.reverse(),this.list=[].concat(f,o(this.list)),1===this.page&&this.list.length>0&&this.pageToBottom(!0);case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),submit:function(){var e=m(r.default.mark(function e(n){var a,o,s,u,c,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/feedback",{data:n},{token:!0,checkToken:!0});case 2:if(a=e.sent,o=l(a,2),s=o[0],u=o[1],this.$http.errorCheck(s,u)){e.next=8;break}return e.abrupt("return");case 8:c=(new Date).getTime(),f=i.default.gettime.getChatTime(c,this.list.length>0?this.list[this.list.length-1].time:0),this.list.push({isme:!0,userpic:this.User.userinfo.userpic,type:"text",data:n,time:c,gstime:f}),this.pageToBottom(),t.showToast({title:"反馈成功"});case 13:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()}};e.default=v}).call(this,n("6e42")["default"])},"36b9":function(t,e,n){},"4f0d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},6620:function(t,e,n){"use strict";n.r(e);var r=n("31be"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"92a2":function(t,e,n){"use strict";n.r(e);var r=n("4f0d"),i=n("6620");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("bdbd");var o=n("2877"),s=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},bdbd:function(t,e,n){"use strict";var r=n("36b9"),i=n.n(r);i.a}},[["e08b","common/runtime","common/vendor"]]]);