(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-zadmin-kategori-geojson~13dc7019"],{e1c3:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-10"},[e("p",{staticClass:"font-semibold p-3 text-lg"},[t._v("Tambah data Geo JSON Peta !")]),e("hr"),e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"title"}},[t._v("Title : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]),e("p",{staticClass:"mt-1 mb-1"},[t._v("Kategori")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.kategori,expression:"vdata.kategori"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"kategori",a.target.multiple?e:e[0])}}},[e("option",[t._v("Route")]),e("option",[t._v("Signal")])]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"upload"}},[t._v("Upload geojson file : ")]),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya",name:"upload",placeholder:"upload"},on:{change:t.upload}}),e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.geojson,expression:"vdata.geojson"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"geojson",name:"geojson",placeholder:"geojson"},domProps:{value:t.vdata.geojson},on:{input:function(a){a.target.composing||t.$set(t.vdata,"geojson",a.target.value)}}})])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10 sm:ml-5"},[t.datanya.length>0?e("div",{staticClass:"p-3"},[e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:["latitude","longitude"]},on:{selected:t.ambil}})],1):t._e()])])])},s=[],o=e("1da1"),i=(e("96cf"),e("0677")),l=e("6be6"),r=localStorage.getItem("urlnya"),c=new i["a"],d={layout:"app_admin2",components:{Btables:l["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},methods:{upload:function(){var t=this,a=document.querySelector("#filenya");c.collection("tbuser",!1,r).upload(a).then((function(a){t.vdata.geojson=a,t.$forceUpdate()}))},test:function(){this.$refs.btable.getData()},getData:function(){var t=this;c.collection("app_gis_geojson",!1,r).doc().select("select * from app_gis_geojson where id_peta='".concat(this.$route.query.id,"'")).then((function(a){t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;t.vdata.id_peta=this.$route.query.id,confirm("Apakah yakin proses dilanjutkan ?")&&("tambah"==this.btn?(delete this.vdata.id,c.collection("app_gis_geojson",!1,r).doc().set(this.vdata).then((function(a){t.getData()}))):"update"==this.btn?c.collection("app_gis_geojson",!1,r).doc().set(this.vdata).then((function(a){t.getData()})):"delete"==this.btn&&c.collection("app_gis_geojson",!1,r).doc(this.vdata.id)["delete"]().then((function(a){t.getData()})))}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()}},u=d,m=e("2877"),p=Object(m["a"])(u,n,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=page-zadmin-kategori-geojson~13dc7019.3bbc20f2.js.map