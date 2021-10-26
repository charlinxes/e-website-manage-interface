(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98be5540"],{"705e":function(t,e,a){},"7b1f":function(t,e,a){"use strict";a("705e")},"9aa6":function(t,e,a){
/*!
  * Bootstrap alert.js v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(a("6a95"),a("302d"))})(0,(function(t,e){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var s=a(t),o=a(e);const r=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let a=t.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a="#"+a.split("#")[1]),e=a&&"#"!==a?a.trim():null}return e},i=t=>{const e=r(t);return e?document.querySelector(e):null},n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),l=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},d=[],c=t=>{"loading"===document.readyState?(d.length||document.addEventListener("DOMContentLoaded",()=>{d.forEach(t=>t())}),d.push(t)):t()},u=t=>{c(()=>{const e=l();if(e){const a=t.NAME,s=e.fn[a];e.fn[a]=t.jQueryInterface,e.fn[a].Constructor=t,e.fn[a].noConflict=()=>(e.fn[a]=s,t.jQueryInterface)}})},m=(t,e="hide")=>{const a="click.dismiss"+t.EVENT_KEY,o=t.NAME;s["default"].on(document,a,`[data-bs-dismiss="${o}"]`,(function(a){if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),n(this))return;const s=i(this)||this.closest("."+o),r=t.getOrCreateInstance(s);r[e]()}))},p="alert",v="bs.alert",h="."+v,f="close"+h,b="closed"+h,g="fade",_="show";class y extends o["default"]{static get NAME(){return p}close(){const t=s["default"].trigger(this._element,f);if(t.defaultPrevented)return;this._element.classList.remove(_);const e=this._element.classList.contains(g);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),s["default"].trigger(this._element,b),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=y.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return m(y,"close"),u(y),y}))},e6dc:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("Loading",{attrs:{active:t.isOuterLoading,loader:"bars"},on:{"update:active":function(e){t.isOuterLoading=e}}}),t.showAlert?a("div",{staticClass:"alert alert-danger alert-dismissible fade show\n    w-auto d-inline-block position-absolute start-50 translate-middle-x",attrs:{id:"myAlert",role:"alert"}},[a("strong",[t._v(t._s(t.alertMessage))]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}})]):t._e(),a("div",{staticClass:"text-end mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.showModal(!0)}}},[t._v("建立新的產品")])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mt-4 text-nowrap"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-end"},[t._v(t._s(t._f("currencyFilter")(e.origin_price)))]),a("td",{staticClass:"text-end"},[t._v(t._s(t._f("currencyFilter")(e.price)))]),a("td",{staticClass:"text-center"},[1==e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return a.preventDefault(),t.showModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ms-2",on:{click:function(a){return a.preventDefault(),t.showDelModal(e)}}},[t._v("刪除")])])])})),0)])]),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"productModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),s(t.updateProduct)}}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.hideModal.apply(null,arguments)}}})]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("ValidationProvider",{attrs:{name:"image"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"customFile"}},[t._v("上傳圖片 "),t.isInnerLoading?a("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):t._e()],1),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結",required:""},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}}),a("input",{ref:"files",staticClass:"form-control",class:o,attrs:{type:"file",name:"file-to-upload",id:"customFile"},on:{change:t.uploadFile}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))]),t.showInsideAlert?a("p",{staticClass:"text-danger fw-bold"},[t._v("上傳失敗，"+t._s(t.alertMessage))]):t._e()]}}],null,!0)})],1),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl,alt:t.tempProduct.image}})])]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("ValidationProvider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"category",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",class:o,attrs:{name:"category",id:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("請選擇分類")]),a("option",{attrs:{value:"cloth"}},[t._v("服飾")]),a("option",{attrs:{value:"food"}},[t._v("食品")]),a("option",{attrs:{value:"furniture"}},[t._v("家居")])]),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"category",rules:"required|length:1"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",class:o,attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)])]),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"origin_price",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",class:o,attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"col-md-6"},[a("ValidationProvider",{attrs:{name:"price",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",class:o,attrs:{type:"number",id:"price",placeholder:"請輸入售價(小於等於原價)"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)])]),a("hr",{staticClass:"mt-4"}),a("div",{staticClass:"col-12"},[a("ValidationProvider",{attrs:{name:"content",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,o=e.classes;return[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"content",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}}),a("p",{staticClass:"text-danger fw-bold mt-1 mb-1"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":"1","false-value":"0"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,"1")},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,o=s.checked?"1":"0";if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([r])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.hideModal.apply(null,arguments)}}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("確認")])])])])]}}])})],1)]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"productModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateProduct.apply(null,arguments)}}},[t._v("確認刪除")])])])])]),a("Pagination",t._b({on:{updateDataList:t.getProducts}},"Pagination",t.paginationObj,!1))],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",[t._v("原價")]),a("th",[t._v("售價")]),a("th",{staticClass:"text-center"},[t._v("是否啟用")]),a("th",{staticClass:"text-center"},[t._v("編輯 / 刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close","data-bs-dismiss":"modal"}})])}],r=a("5530"),i=(a("99af"),a("7c2b")),n=a.n(i),l=a("9aa6"),d=a.n(l),c=a("7bb1"),u=a("1799"),m={name:"Products",data:function(){return{products:[],tempProduct:{},myModal:{},modalState:"",isOuterLoading:!1,isInnerLoading:!1,showAlert:!1,showInsideAlert:!1,alertMessage:"",paginationObj:{total_pages:1,current_page:1,has_pre:!1,has_next:!1}}},components:{Pagination:u["a"],ValidationProvider:c["b"],ValidationObserver:c["a"]},created:function(){this.getProducts()},mounted:function(){this.myModal=new n.a(document.getElementById("productModal")),this.delMyModal=new n.a(document.getElementById("delProductModal")),this.myAlert=new d.a(document.getElementById("myAlert"))},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isOuterLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charlie","/products?page=").concat(e);this.$http.get(a).then((function(e){t.isOuterLoading=!1,t.products=e.data.products,t.paginationObj=e.data.pagination}))},showModal:function(t,e){t?(document.getElementById("customFile").value="",this.tempProduct={},this.modalState="add",this.myModal.show()):(document.getElementById("customFile").value="",this.tempProduct=Object(r["a"])({},e),this.modalState="revise",this.myModal.show())},showDelModal:function(t){this.tempProduct=Object(r["a"])({},t),this.modalState="delete",this.delMyModal.show()},hideModal:function(){this.myModal.hide(),this.$refs.form.reset(),this.showInsideAlert=!1},updateProduct:function(){var t=this;if("add"===this.modalState){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("charlie","/admin/product");this.$http.post(e,{data:this.tempProduct}).then((function(e){e.data.success?(t.hideModal(),t.getProducts()):(t.hideModal(),t.alertShow(e.data.message))}))}else if("revise"===this.modalState){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charlie","/admin/product/").concat(this.tempProduct.id);this.$http.put(a,{data:this.tempProduct}).then((function(e){e.data.success?(t.hideModal(),t.getProducts()):(t.hideModal(),t.alertShow(e.data.message))}))}else if("delete"===this.modalState){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("charlie","/admin/product/").concat(this.tempProduct.id);this.$http.delete(s,{data:this.tempProduct}).then((function(e){e.data.success?(t.delMyModal.hide(),t.getProducts()):(t.delMyModal.hide(),t.alertShow(e.data.message))}))}},alertShow:function(t){var e=this;this.alertMessage=t,this.showAlert=!0,setTimeout((function(){e.showAlert=!1}),5e3)},uploadFile:function(t){var e=this;this.isInnerLoading=!0;var a=t.target.files[0];console.log(a);var s=new FormData;s.append("file-to-upload",a);var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("charlie","/admin/upload");this.$http.post(o,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t.data),t.data.success?(e.tempProduct=Object(r["a"])(Object(r["a"])({},e.tempProduct),{},{imageUrl:t.data.imageUrl}),e.showInsideAlert=!1):(e.alertMessage=t.data.message,e.showInsideAlert=!0),e.isInnerLoading=!1}))}}},p=m,v=(a("7b1f"),a("2877")),h=Object(v["a"])(p,s,o,!1,null,"8f053eb4",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-98be5540.d15e6416.js.map