(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b185bf94"],{"9ddf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-center mt-5"},[t._v("HOLO購物網後台")]),s("main",{staticClass:"form-signin"},[s("form",[s("h3",{staticClass:"h3 mb-3 fw-normal"},[t._v("請登錄")]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",class:{"border-danger":t.showAlert},attrs:{type:"email",id:"floatingInput",placeholder:"name@example.com"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("label",{attrs:{for:"floatingInput"}},[t._v("郵箱地址")])]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",class:{"border-danger":t.showAlert},attrs:{type:"password",id:"floatingPassword",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("密碼")])]),t.showAlert?s("div",{staticClass:"text-danger mb-1"},[t._v("用戶名或密碼錯誤,請重新輸入")]):t._e(),t._m(0),s("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t._v(" 登陸 "),t.isLoading?s("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):t._e()],1)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 記住我 ")])])}],o=(s("99af"),{data:function(){return{user:{username:"",password:""},showAlert:!1,isLoading:!1}},methods:{login:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.$http.post(e,this.user).then((function(e){if(console.log(e.data),e.data.success){var s=e.data.token,a=e.data.expired;document.cookie="hexToken = ".concat(s,"; expires = ").concat(new Date(a)),t.$router.push({path:"/admin/products"}),t.isLoading=!1}else t.showAlert=!0,t.isLoading=!1}))}}}),r=o,i=(s("de24"),s("2877")),l=Object(i["a"])(r,a,n,!1,null,"b3ad0260",null);e["default"]=l.exports},c929:function(t,e,s){},de24:function(t,e,s){"use strict";s("c929")}}]);
//# sourceMappingURL=chunk-b185bf94.f7d0b18b.js.map