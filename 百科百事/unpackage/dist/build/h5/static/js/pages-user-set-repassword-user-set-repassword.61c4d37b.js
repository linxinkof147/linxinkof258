(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-set-repassword-user-set-repassword"],{"0e6e":function(t,n,s){n=t.exports=s("2350")(!1),n.push([t.i,"/* 公共按钮 */.user-set-btn[data-v-1d81fb88]{width:100%;margin:%?20?% 0;background:#ffe933!important;border:0!important;color:#333!important}.user-set-btn-disable[data-v-1d81fb88]{background:#f4f4f4!important;border:%?1?% solid #eee!important;color:#909090!important}.body[data-v-1d81fb88]{padding:0 %?20?%!important}.common-input[data-v-1d81fb88]{font-size:%?30?%;border-bottom:%?1?% solid #f4f4f4}",""])},"2dc7":function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=r(s("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return d(t)||i(t,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,n){var s=[],e=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0)if(s.push(o.value),n&&s.length===n)break}catch(d){r=!0,a=d}finally{try{e||null==i["return"]||i["return"]()}finally{if(r)throw a}}return s}function d(t){if(Array.isArray(t))return t}function u(t,n,s,e,r,a,o){try{var i=t[a](o),d=i.value}catch(u){return void s(u)}i.done?n(d):Promise.resolve(d).then(e,r)}function c(t){return function(){var n=this,s=arguments;return new Promise(function(e,r){var a=t.apply(n,s);function o(t){u(a,e,r,o,i,"next",t)}function i(t){u(a,e,r,o,i,"throw",t)}o(void 0)})}}var l={data:function(){return{hasPassword:!1,oldpassword:"",newpassword:"",renewpassword:"",disabled:!0,loading:!1}},onLoad:function(t){this.hasPassword=!(!t.password||"false"===t.password)},watch:{oldpassword:function(t){this.change()},newpassword:function(t){this.change()},renewpassword:function(t){this.change()}},methods:{change:function(){return this.newpassword&&this.renewpassword?this.disabled=!1:this.hasPassword&&!this.oldpassword?this.disabled=!0:void(this.disabled=!0)},check:function(){return!this.hasPassword||this.oldpassword&&""!=this.oldpassword?this.newpassword&&""!=this.newpassword?this.renewpassword&&""!=this.renewpassword?this.newpassword===this.renewpassword||(uni.showToast({title:"确认密码和新密码不一致",icon:"none"}),!1):(uni.showToast({title:"确认密码不能为空",icon:"none"}),!1):(uni.showToast({title:"新密码不能为空",icon:"none"}),!1):(uni.showToast({title:"旧密码不能为空",icon:"none"}),!1)},submit:function(){var t=c(e.default.mark(function t(){var n,s,r,o;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.check()){t.next=2;break}return t.abrupt("return");case 2:return this.loading=this.disabled=!0,t.next=5,this.$http.post("/repassword",{oldpassword:this.oldpassword||0,newpassword:this.newpassword,renewpassword:this.renewpassword},{token:!0,checkToken:!0});case 5:if(n=t.sent,s=a(n,2),r=s[0],o=s[1],this.$http.errorCheck(r,o)){t.next=12;break}return this.loading=this.disabled=!1,t.abrupt("return");case 12:return this.User.userinfo.password=!0,uni.setStorageSync("userinfo",this.User.userinfo),this.loading=this.disabled=!1,t.abrupt("return",uni.showToast({title:"修改密码成功！",success:function(){uni.navigateBack({delta:1})}}));case 16:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=l},"482a":function(t,n,s){var e=s("0e6e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=s("4f06").default;r("41f15618",e,!0,{sourceMap:!1,shadowMode:!1})},"7ff9":function(t,n,s){"use strict";var e=s("482a"),r=s.n(e);r.a},bcfa:function(t,n,s){"use strict";s.r(n);var e=s("fe7a"),r=s("f064");for(var a in r)"default"!==a&&function(t){s.d(n,t,function(){return r[t]})}(a);s("7ff9");var o=s("2877"),i=Object(o["a"])(r["default"],e["a"],e["b"],!1,null,"1d81fb88",null);n["default"]=i.exports},f064:function(t,n,s){"use strict";s.r(n);var e=s("2dc7"),r=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(n,t,function(){return e[t]})}(a);n["default"]=r.a},fe7a:function(t,n,s){"use strict";var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-uni-view",{staticClass:"body"},[t.hasPassword?s("v-uni-input",{staticClass:"uni-input common-input",attrs:{type:"text",placeholder:"输入旧密码"},model:{value:t.oldpassword,callback:function(n){t.oldpassword=n},expression:"oldpassword"}}):t._e(),s("v-uni-input",{staticClass:"uni-input common-input",attrs:{type:"text",placeholder:"输入新密码"},model:{value:t.newpassword,callback:function(n){t.newpassword=n},expression:"newpassword"}}),s("v-uni-input",{staticClass:"uni-input common-input",attrs:{type:"text",placeholder:"输入确认密码"},model:{value:t.renewpassword,callback:function(n){t.renewpassword=n},expression:"renewpassword"}}),s("v-uni-button",{staticClass:"user-set-btn",class:{"user-set-btn-disable":t.disabled},attrs:{loading:t.loading,type:"primary",disabled:t.disabled},on:{click:function(n){n=t.$handleEvent(n),t.submit(n)}}},[t._v("完成")])],1)},r=[];s.d(n,"a",function(){return e}),s.d(n,"b",function(){return r})}}]);