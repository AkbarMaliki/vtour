(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-zadmin-kategori-event-event1~e7be81f9"],{"030a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[a("div",{staticClass:"shadow p-3 rounded-lg"},[a("div",{staticClass:"sm-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id",e.target.value)}}})]),a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"keterangan"}},[t._v("Keterangan")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keterangan,expression:"vdata.keterangan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"keterangan",name:"keterangan",placeholder:"keterangan"},domProps:{value:t.vdata.keterangan},on:{input:function(e){e.target.composing||t.$set(t.vdata,"keterangan",e.target.value)}}})]),a("div",{staticClass:"mt-3 p-3"},[a("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[a("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),a("div",{staticClass:"float-right"},[a("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){t.btn="tambah",t.vdata={}}}},[a("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.btn="delete"}}},[a("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])]),a("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[a("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?a("div",{staticClass:"p-2"},[a("div",{staticClass:"text-right"},[a("vue-json-excel",{attrs:{data:t.datanya}},[a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v(" Export "),a("span",{staticClass:"typcn typcn-chart-area"})])])],1),a("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])},s=[],i=a("1da1"),r=(a("96cf"),a("0677")),o=a("6be6"),c=localStorage.getItem("urlnya"),d=new r["a"],l={components:{Btables:o["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},methods:{getData:function(){var t=this;d.collection("app_gis_event",!1,c).doc().select("select * from app_gis_event where eventid='".concat(this.$route.query.eventid,"'")).then((function(e){t.datanya=e,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,t.vdata.eventid=t.$route.query.eventid,!confirm("Apakah yakin proses dilanjutkan ?")){e.next=20;break}if("tambah"!=t.btn){e.next=10;break}return delete t.vdata.id,e.next=7,d.collection("app_gis_event",!0,c).doc().set(t.vdata);case 7:a.getData(),e.next=20;break;case 10:if("update"!=t.btn){e.next=16;break}return e.next=13,d.collection("app_gis_event",!0,c).doc().set(t.vdata);case 13:a.getData(),e.next=20;break;case 16:if("delete"!=t.btn){e.next=20;break}return e.next=19,d.collection("app_gis_event",!0,c).doc(t.vdata.id)["delete"]();case 19:a.getData();case 20:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()}},u=l,p=a("2877"),b=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=page-zadmin-kategori-event-event1~e7be81f9.83028faf.js.map