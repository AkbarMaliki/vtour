(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-zadmin-kategori-floorplan~31ecd969"],{"74b4":function(t,a,e){"use strict";e.r(a);var i,o,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a",{attrs:{href:"#",id:"export"},on:{click:t.exporta}},[t._v("export")]),e("button",{staticClass:"btn btn-sm btn-style9  text-xs",staticStyle:{position:"fixed",top:"10px",left:"100px","z-index":"1000"},attrs:{type:"button",id:"modesnya"},on:{click:function(a){t.modes=!t.modes}}},[t._v("Mode")]),e("button",{staticClass:"btn btn-sm btn-style9  text-xs",staticStyle:{position:"fixed",top:"10px",left:"200px","z-index":"1000"},attrs:{type:"button"},on:{click:function(a){t.setting=!t.setting}}},[t._v("Setting")]),t.setting?e("div",{staticClass:"sm-form p-3",staticStyle:{position:"fixed",top:"60px",left:"200px","z-index":"1000",background:"white"}},[e("label",{attrs:{for:"color"}},[t._v("Color")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata2.color,expression:"vdata2.color"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"color",name:"color",placeholder:"color"},domProps:{value:t.vdata2.color},on:{input:function(a){a.target.composing||t.$set(t.vdata2,"color",a.target.value)}}}),e("label",{attrs:{for:"title"}},[t._v("title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata2.title,expression:"vdata2.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata2.title},on:{input:function(a){a.target.composing||t.$set(t.vdata2,"title",a.target.value)}}})]):t._e(),e("button",{staticClass:"btn btn-sm btn-style9  text-xs",staticStyle:{position:"fixed",top:"10px",right:"50px","z-index":"1000"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[t._v(t._s(t.$route.query.nama))]),t.modal?e("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100vh",width:"100vw",position:"fixed","z-index":"100",background:"rgba(151,151,179,0.4)"},on:{click:function(a){t.modal=!1}}},[e("div",{staticStyle:{width:"100%"}})]):t._e(),t.modal?e("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"1000"}},[e("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100px"}},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"p-4 bg-white rounded-lg shadow"},[e("p",{staticClass:"text-xs text-center font-bold p-3 uppercase"},[t._v("Pilih Kategori ")]),e("button",{staticClass:"btn btn-sm ml-2",class:"icon"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="icon"}}},[t._v("Icon")]),e("button",{staticClass:"btn btn-sm ml-2",class:"barcode"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="barcode"}}},[t._v("Barcode")]),e("button",{staticClass:"btn btn-sm  ml-2",class:"gambar"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="gambar"}}},[t._v("Gambar")]),e("button",{staticClass:"btn btn-sm  ml-2",class:"radius"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="radius"}}},[t._v("Radius")]),e("div",{staticStyle:{width:"70vw",height:"80vh",overflow:"scroll"}},[e("form",{staticClass:"text-sm",attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},["floorplan"==t.pilihkategori?e("div",[e("p",{staticClass:"text-cneter"},[t._v("Tambahkan maximum/minimum 1 floor plan")]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"floorplan"}},[t._v("Floor plan")]),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya3",name:"floorplan",placeholder:"floorplan"},on:{change:t.upload3}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.floorplan,expression:"vdata.floorplan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"floorplan",name:"floorplan",placeholder:"floorplan"},domProps:{value:t.vdata.floorplan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"floorplan",a.target.value)}}})]),t.vdata.floorplan?e("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticStyle:{height:"70px"},attrs:{src:t.vdata.floorplan,alt:""}}):t._e(),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"link3d"}},[t._v("Link 3D")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.link3d,expression:"vdata.link3d"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"link3d",name:"link3d",placeholder:"link3d"},domProps:{value:t.vdata.link3d},on:{input:function(a){a.target.composing||t.$set(t.vdata,"link3d",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"nilai1"}},[t._v("Your nilai1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nilai1,expression:"vdata.nilai1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nilai1",name:"nilai1",placeholder:"nilai1"},domProps:{value:t.vdata.nilai1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nilai1",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"nilai2"}},[t._v("Your nilai2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nilai2,expression:"vdata.nilai2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nilai2",name:"nilai2",placeholder:"nilai2"},domProps:{value:t.vdata.nilai2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nilai2",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"nilai3"}},[t._v("Your nilai3")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nilai3,expression:"vdata.nilai3"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nilai3",name:"nilai3",placeholder:"nilai3"},domProps:{value:t.vdata.nilai3},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nilai3",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"nilai4"}},[t._v("Your nilai4")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nilai4,expression:"vdata.nilai4"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nilai4",name:"nilai4",placeholder:"nilai4"},domProps:{value:t.vdata.nilai4},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nilai4",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"center1"}},[t._v("Your center1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.center1,expression:"vdata.center1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"center1",name:"center1",placeholder:"center1"},domProps:{value:t.vdata.center1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"center1",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"center2"}},[t._v("Your center2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.center2,expression:"vdata.center2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"center2",name:"center2",placeholder:"center2"},domProps:{value:t.vdata.center2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"center2",a.target.value)}}})])]):e("div",{staticClass:"sm-form "},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-5"},["radius"==t.pilihkategori?e("div",[e("p",[t._v("Wilayah/Kecamatan : ")]),e("v-select",{attrs:{options:t.wilayah,label:"kecamatan",reduce:function(t){return t.id}},model:{value:t.vdata.wilayah,callback:function(a){t.$set(t.vdata,"wilayah",a)},expression:"vdata.wilayah"}})],1):t._e(),"barcode"!=t.pilihkategori?e("div",{staticClass:"sm-form "},[e("label",{staticClass:"p-0 mt-2",attrs:{for:"title"}},[t._v("Title : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]):e("div",[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"idbarcode"}},[t._v("ID Barcode")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.idbarcode,expression:"vdata.idbarcode"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"idbarcode",name:"idbarcode",placeholder:"idbarcode"},domProps:{value:t.vdata.idbarcode},on:{input:function(a){a.target.composing||t.$set(t.vdata,"idbarcode",a.target.value)}}})])]),e("p",{staticClass:"text-sm"},[t._v("Deskripsi : ")]),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.deskripsi,expression:"vdata.deskripsi"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"deskripsi",name:"deskripsi",rows:"2",placeholder:"deskripsi..."},domProps:{value:t.vdata.deskripsi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"deskripsi",a.target.value)}}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lat"}},[t._v("Lat : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lat,expression:"vdata.lat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lat",name:"lat",placeholder:"lat"},domProps:{value:t.vdata.lat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lat",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lng"}},[t._v("Lng : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lng,expression:"vdata.lng"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lng",name:"lng",placeholder:"lng"},domProps:{value:t.vdata.lng},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lng",a.target.value)}}})])])]),e("button",{staticClass:"btn btn-sm btn-dark float-right ",attrs:{type:"button"},on:{click:t.gantiPosisi}},[e("span",{staticClass:"typcn typcn-arrow-repeat"})]),e("p",{staticClass:"text-sm"},[t._v("Type Popup : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],attrs:{type:"radio",id:"click",value:"click"},domProps:{checked:t._q(t.vdata.popup,"click")},on:{change:function(a){return t.$set(t.vdata,"popup","click")}}}),e("label",{attrs:{for:"click"}},[t._v("click")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],staticClass:"ml-2",attrs:{type:"radio",id:"hover",value:"hover"},domProps:{checked:t._q(t.vdata.popup,"hover")},on:{change:function(a){return t.$set(t.vdata,"popup","hover")}}}),e("label",{attrs:{for:"hover"}},[t._v("hover")]),e("hr"),t.vdata.id?e("div",[e("button",{staticClass:"btn btn-sm btn-style10  ",attrs:{type:"button"},on:{click:function(a){return t.$router.push("/gis/zadmin/kategori/event/event1?eventid="+t.vdata.event)}}},[t._v("Event 1")]),e("p",{staticClass:"text-sm"},[t._v("Aktif ? : ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.event,expression:"vdata.event"}],staticClass:"form-control",staticStyle:{width:"200px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"event",a.target.multiple?e:e[0])}}},[e("option",[t._v("false")]),e("option",[t._v("true")])]),e("label",{attrs:{for:"query"}},[t._v("Query dipake")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.idquery,expression:"vdata.idquery"}],staticClass:"form-control",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"idquery",a.target.multiple?e:e[0])},t.ubahquery]}},t._l(t.pilihan,(function(a,i){return e("option",{key:i+"pilhan",domProps:{value:a.id}},[t._v(t._s(a.title))])})),0),e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.query,expression:"vdata.query"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"query",name:"query",placeholder:"query * from tbuser"},domProps:{value:t.vdata.query},on:{input:function(a){a.target.composing||t.$set(t.vdata,"query",a.target.value)}}})])]):t._e()]),e("div",{staticClass:"col-sm-5"},["radius"==t.pilihkategori?e("div",[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"p-0 mt-2",attrs:{for:"radius"}},[t._v("Radius lingkaran/area : ")]),e("p",{staticClass:"text-xs text-red-300"},[t._v("per Meter/M")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.radius,expression:"vdata.radius"}],staticClass:"form-control form-control-sm",staticStyle:{width:"50%"},attrs:{required:"",type:"text",id:"radius",name:"radius",placeholder:"ex: 100"},domProps:{value:t.vdata.radius},on:{input:function(a){a.target.composing||t.$set(t.vdata,"radius",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"color"}},[t._v("Warna/color : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.color,expression:"vdata.color"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"color",id:"color",name:"color",placeholder:"color"},domProps:{value:t.vdata.color},on:{input:function(a){a.target.composing||t.$set(t.vdata,"color",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"opacity"}},[t._v("Opacity (seberapa transparent) : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.opacity,expression:"vdata.opacity"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"opacity",name:"opacity",placeholder:"ex : 0.0 - 1.0"},domProps:{value:t.vdata.opacity},on:{input:function(a){a.target.composing||t.$set(t.vdata,"opacity",a.target.value)}}})])]):e("div",["icon"==t.pilihkategori?e("div",[e("label",{staticClass:"p-0 mt-2",attrs:{for:"file"}},[t._v("Icon Link/Upload: ")]),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya",name:"file",placeholder:"file"},on:{change:t.upload}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.icon,expression:"vdata.icon"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"icon",name:"icon",placeholder:"icon"},domProps:{value:t.vdata.icon},on:{input:function(a){a.target.composing||t.$set(t.vdata,"icon",a.target.value)}}}),e("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:t.defaults}},[e("span",{staticClass:"typcn typcn-arrow-loop"})]),t.defaultOn?e("div",[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"color"}},[t._v("Pin Option")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pin.color,expression:"pin.color"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"color",name:"color",placeholder:"color"},domProps:{value:t.pin.color},on:{change:t.defaults,input:function(a){a.target.composing||t.$set(t.pin,"color",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pin.type,expression:"pin.type"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"type",name:"type",placeholder:"type"},domProps:{value:t.pin.type},on:{change:t.defaults,input:function(a){a.target.composing||t.$set(t.pin,"type",a.target.value)}}})])]):t._e()]):t._e(),e("br"),e("div",[e("label",{staticClass:"p-0 mt-2",attrs:{for:"file"}},[t._v("Gambar Link/Upload: ")]),"icon"==t.pilihkategori?e("p",{staticClass:"text-xs text-red-500"},[t._v("Gambar akan berada di deskripsi saat icon di klik ")]):t._e(),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya2",name:"file",placeholder:"file"},on:{change:t.upload2}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.gambar,expression:"vdata.gambar"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"gambar",name:"gambar",placeholder:"gambar"},domProps:{value:t.vdata.gambar},on:{input:function(a){a.target.composing||t.$set(t.vdata,"gambar",a.target.value)}}})])])])])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])]),t.datanya.length>0?e("div",{staticClass:"p-3"},[e("Btables",{ref:"btable",attrs:{tables:t.td,cari:[""],hide:["id","wilayah","id_peta","deskripsi","icon","gambar","radius","color","opacity","floorplan","query","query2","height","width","nilai1","nilai2","nilai3","nilai4","center1","center2","idquery"]},on:{selected:t.ambil}})],1):t._e()])])])])]):t._e(),t.ready?e("div",[e("div",{staticStyle:{height:"100vh",width:"100vw",background:"white"},attrs:{id:"mapid"}})]):t._e()])},s=[],r=(e("4de4"),e("4795"),e("4160"),e("159b"),e("5319"),e("ac1f"),e("99af"),e("acd8"),e("0677")),l=e("6be6"),c=new r["a"],d=localStorage.getItem("urlnya"),p={components:{Btables:l["a"]},data:function(){return{photoSize:[-30.865,155.2094],defaultOn:!1,modal:!1,setting:!1,modes:!1,selected:!1,ready:!1,mode:"free",vdata2:{title:"",color:"#f00f0f"},center:[-2.3615836073925434,115.46956926581515],vdata:{opacity:"0.6",radius:"100",height:-30.865,width:155.2094},pin:{color:"#f00f0f",type:"marker"},btn:"tambah",wilayah:[],pilihan:[],datanya:[],posisi:[],nilai:[],pilihkategori:"icon",iconSize:30}},computed:{td:function(){var t=this,a=this.datanya;return a=a.filter((function(a){if(a.kategori==t.pilihkategori)return a})),a},dynamicSize:function(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor:function(){return[this.iconSize/2,1.15*this.iconSize]}},watch:{modes:function(){this.ready=!1,this.getWilayah(),this.$forceUpdate()}},mounted:function(){this.$route.query.geo&&"true"==this.$route.query.geo&&setTimeout((function(){document.querySelector("#modesnya").click()}),1e3),this.getWilayah(),this.getDataRoom()},methods:{ubahquery:function(){this.vdata.query="select * from app_gis_ruangan where id='".concat(this.vdata.idquery,"' order by id"),this.$forceUpdate()},getDataRoom:function(){var t=this;c.collection("app_gis_ruangan",!1,d).doc().select("select * from app_gis_ruangan where idpeta='".concat(this.$route.query.id,"'")).then((function(a){console.log(a),t.pilihan=a,t.$forceUpdate()}))},events:function(t){alert(t)},exporta:function(){var t=this,a=o.toGeoJSON();a.features.forEach((function(a){a.properties.stroke=t.vdata2.color,a.properties["stroke-width"]=5,a.properties.title=t.vdata2.title}));var e="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(a));document.getElementById("export").setAttribute("href","data:"+e),document.getElementById("export").setAttribute("download","data.geojson")},defaults:function(){this.defaultOn=!0;var t=this.pin.color.replace("#","");this.vdata.icon="https://a.tiles.mapbox.com/v4/marker/pin-m-".concat(this.pin.type,"+").concat(t,"@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A")},getWilayah:function(){var t=this;c.collection("app_gis_wilayah_balangan",!1,d).doc().select("select * from app_gis_wilayah_balangan").then((function(a){t.wilayah=a,console.log("wilayah",a),c.collection("app_gis_marker",!1,d).doc().select("select floorplan,height,width,center1,center2,nilai1,nilai2,nilai3,nilai4\n                 from app_gis_marker where id_peta='".concat(t.$route.query.id,"'")).then((function(a){console.log(a),a.length>0&&(t.vdata.height=parseFloat(a[0].height),t.vdata.width=parseFloat(a[0].width),t.nilai[0]=parseFloat(a[0].nilai1),t.nilai[1]=parseFloat(a[0].nilai2),t.nilai[2]=parseFloat(a[0].nilai3),t.nilai[3]=parseFloat(a[0].nilai4),a[0].center1&&(t.center=[parseFloat(a[0].center1),parseFloat(a[0].center2)]),t.vdata.floorplan=a[0].floorplan,t.photoSize=[parseFloat(a[0].height),parseFloat(a[0].width)],console.log(t.photoSize),t.$forceUpdate()),t.loadmap()}))}))},loadmap:function(){var t=this,a=this;this.getData(),this.ready=!1,i=null,setTimeout((function(){t.ready=!0,setTimeout((function(){i=new L.Map("mapid");var e=a.center;if(i.setView(e,19),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),t.modes||i.on("click",(function(t){console.log(t),a.posisi[0]=t.latlng.lat,a.posisi[1]=t.latlng.lng,a.modal=!0,a.$forceUpdate()})),t.vdata.floorplan){var n=a.vdata.floorplan,s=[[e[0]-a.nilai[0],e[1]+a.nilai[1]],[e[0]+a.nilai[2],e[1]-a.nilai[3]]];L.imageOverlay(n,s).addTo(i)}o=L.featureGroup().addTo(i);new L.Control.Draw({edit:{featureGroup:o}}).addTo(i);i.on(L.Draw.Event.CREATED,(function(t){t.layer.properties={stroke:a.color},console.log(t.layer);t.layerType;var e=t.layer;console.log("layer",e),o.addLayer(t.layer),i.addLayer(e),alert("layer added")})),a.datanya.length>0&&a.datanya.forEach((function(t){if(console.log("kategori",t.kategori),"icon"==t.kategori){var e=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?L.marker([t.lat,t.lng],{icon:e}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)})):L.marker([t.lat,t.lng],{icon:e}).bindTooltip('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)}))}else if("barcode"==t.kategori){console.log("kategori",t);e=L.icon({iconUrl:"https://gis.egov.balangankab.go.id/files/me.png",iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?L.marker([t.lat,t.lng],{icon:e}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.idbarcode,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)})):L.marker([t.lat,t.lng],{icon:e}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.idbarcode,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)}))}else if("gambar"==t.kategori){e=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?L.marker([t.lat,t.lng],{icon:e}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)})):L.marker([t.lat,t.lng],{icon:e}).bindTooltip('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)}))}else"radius"==t.kategori&&("click"==t.popup?L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                </div>\n                                "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)})):L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                            <div class="text-xs">\n                                <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                <div class="text-justify">').concat(t.deskripsi,"</div>\n                            </div>\n                            "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&a.events(t.event)})))})),L.control.ruler().addTo(i)}),2e3)}),1e3)},gantiPosisi:function(){this.vdata.lat=this.posisi[0],this.vdata.lng=this.posisi[1],this.$forceUpdate()},getData:function(){var t=this;c.collection("app_gis_marker",!1,d).doc().select("\n                select *,tb1.id as id\n                 from app_gis_marker tb1 left join app_gis_wilayah_balangan tb2 on tb2.id=tb1.wilayah where tb1.id_peta='".concat(this.$route.query.id,"'")).then((function(a){console.log("hasil",a),t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.pilihkategori=t.kategori,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;t.vdata.kategori=t.pilihkategori,t.vdata.id_peta=this.$route.query.id,confirm("Apakah yakin proses dilanjutkan ?")&&("tambah"==this.btn?(delete this.vdata.id,c.collection("app_gis_marker",!1,d).doc().set(this.vdata).then((function(a){t.getData()}))):"update"==this.btn?c.collection("app_gis_marker",!1,d).doc().set(this.vdata).then((function(a){t.getData()})):"delete"==this.btn&&(console.log(this.vdata),c.collection("app_gis_marker",!1,d).doc(this.vdata.id)["delete"]().then((function(a){t.getData()}))),this.loadmap())},upload:function(){var t=this,a=document.querySelector("#filenya");c.collection("tbuser",!1,d).upload(a).then((function(a){console.log(a),t.vdata.icon=a,t.$forceUpdate()}))},upload2:function(){var t=this,a=document.querySelector("#filenya2");c.collection("tbuser",!1,d).upload(a).then((function(a){console.log(a),t.vdata.gambar=a,t.$forceUpdate()}))},upload3:function(){var t=this,a=document.querySelector("#filenya3");c.collection("tbuser",!1,d).upload(a).then((function(a){console.log(a),t.vdata.floorplan=a,t.$forceUpdate()}))}},metaInfo:{title:"Add Marker dynamic",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.css",integrity:"sha384-P9DABSdtEY/XDbEInD3q+PlL+BjqPCXGcF8EkhtKSfSTr/dS5PBKa9+/PMkW2xsY",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw-src.css",crossorigin:"anonymous"}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""},{src:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.js",integrity:"sha384-N2S8y7hRzXUPiepaSiUvBH1ZZ7Tc/ZfchhbPdvOE5v3aBBCIepq9l+dBJPFdo1ZJ",crossorigin:"anonymous"},{src:"https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js",crossorigin:"anonymous"}]}},v=p,m=e("2877"),u=Object(m["a"])(v,n,s,!1,null,null,null);a["default"]=u.exports},"7e12":function(t,a,e){var i=e("da84"),o=e("58a8").trim,n=e("5899"),s=i.parseFloat,r=1/s(n+"-0")!==-1/0;t.exports=r?function(t){var a=o(String(t)),e=s(a);return 0===e&&"-"==a.charAt(0)?-0:e}:s},"99af":function(t,a,e){"use strict";var i=e("23e7"),o=e("d039"),n=e("e8b5"),s=e("861d"),r=e("7b0b"),l=e("50c4"),c=e("8418"),d=e("65f0"),p=e("1dde"),v=e("b622"),m=e("2d00"),u=v("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!o((function(){var t=[];return t[u]=!1,t.concat()[0]!==t})),b=p("concat"),y=function(t){if(!s(t))return!1;var a=t[u];return void 0!==a?!!a:n(t)},k=!h||!b;i({target:"Array",proto:!0,forced:k},{concat:function(t){var a,e,i,o,n,s=r(this),p=d(s,0),v=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?s:arguments[a],y(n)){if(o=l(n.length),v+o>f)throw TypeError(g);for(e=0;e<o;e++,v++)e in n&&c(p,v,n[e])}else{if(v>=f)throw TypeError(g);c(p,v++,n)}return p.length=v,p}})},acd8:function(t,a,e){var i=e("23e7"),o=e("7e12");i({global:!0,forced:parseFloat!=o},{parseFloat:o})}}]);
//# sourceMappingURL=page-zadmin-kategori-floorplan~31ecd969.8d2c765b.js.map