(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-office-index~31ecd969"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1a0b":function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pr-2"},[t._m(0),t.ready?a("div",[a("button",{staticClass:"btn btn-sm btn-dark ",staticStyle:{position:"absolute","z-index":"10006",right:"13px","margin-top":"12px"},attrs:{type:"button"},on:{click:function(e){t.shrink=!t.shrink}}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"13px",width:"13px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/th-list.svg",alt:""}})]),t.eventshow?a("div",{staticClass:"animate__animated animate__fadeInRight scrollbarnya shadow p-3 rounded-lg bg-white",staticStyle:{position:"absolute",right:"0px","max-width":"300px","z-index":"10007",height:"100vh",overflow:"scroll",background:"linear-gradient(90deg, rgba(47,107,162,1) 0%, rgba(13,69,125,1) 100%)"}},[a("div",{staticClass:"p-3 shadow rounded-lg bg-white"},[a("button",{staticClass:"btn btn-sm btn-danger float-right mr-2 ",attrs:{type:"button"},on:{click:function(e){t.eventshow=!1}}},[t._v("x")]),a("p",{staticClass:"font-semibold text-xs"},[t._v("Data : ")]),t._l(t.eventdata,(function(e,i){return a("div",{key:i+"eventdata"},[a("hr",{staticClass:"mt-4 mb-1"}),a("div",{staticClass:"text-center"},[t.mores?a("button",{staticClass:"btn btn-sm btn-style2  text-xs mt-1 mb-1 float-left",attrs:{type:"button"},on:{click:function(a){return t.showMoreImage(e["id"])}}},[a("img",{staticClass:"d-inline",staticStyle:{height:"15px",width:"15px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/image.svg",alt:""}}),t._v(" More")]):t._e(),a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"rounded-lg p-2 img-thumbnail mt-2 mb-2",staticStyle:{display:"block",margin:"auto"},attrs:{src:e["gambar"],alt:""}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"p-2  mt-2 mb-2 "},[e["id360"]?a("a",{attrs:{href:"/#/office/360view?idgambar="+(e.id360.length>0?e.id360:"6"),target:"__blank"}},[t._m(1,!0)]):t._e()])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"p-2 mt-2 mb-2 "},[e.dollhouse?a("a",{attrs:{href:""+e.dollhouse,target:"__blank"}},[t._m(2,!0)]):t._e()])])]),t.showMore?a("div",[a("div",{staticClass:"row"},[t._l(t.moreImage,(function(t,e){return a("div",{key:e+"moreimage",staticClass:"col-4"},[a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"rounded-lg p-2 img-thumbnail mt-2 mb-2",staticStyle:{display:"block",margin:"auto"},attrs:{src:t.gambar,alt:""}})])})),a("div",{staticClass:"col-4"})],2)]):t._e()]),t._l(t.eventkey,(function(i,s){return a("div",{key:s+"eventkey"},[a("div",["id"!=i&&"createdAt"!=i&&"updateAt"!=i&&"idpeta"!=i&&"diskon"!=i&&"id360"!=i&&"dollhouse"!=i&&"type"!=i&&"gambar"!=i?a("div",[a("div",{staticClass:"text-xs font-semibold shadow p-1 pl-3 pt-2 pb-2 rounded-lg mt-2"},[a("span",{staticClass:"font-bold capitalize"},[t._v(" "+t._s(i)+" ")]),a("span",{staticClass:"pl-2 pr-2"},[t._v(":")]),a("br"),"harga"==i?a("span",{staticClass:"text-xs font-bold",class:"Kosong"==e[i]?"btn btn-sm btn-danger":"Penuh"==e[i]?"btn btn-sm btn-success":"",staticStyle:{"white-space":"pre-line"}},[t._v("Rp. "+t._s(e[i]))]):"tag"==i?a("span",{staticClass:"text-xs font-semibold ",class:"Kosong"==e[i]?"btn btn-sm btn-danger":"Penuh"==e[i]?"btn btn-sm btn-success":"",staticStyle:{"white-space":"pre-line"}},t._l(e[i].split(","),(function(e,i){return a("button",{key:i+"tag",staticClass:"btn btn-sm btn-dark  ml-1 mt-1",staticStyle:{"font-size":"9px"},attrs:{type:"button"}},[t._v(t._s(e))])})),0):a("span",{staticClass:"text-xs font-semibold",class:"Kosong"==e[i]?"btn btn-sm btn-danger":"Penuh"==e[i]?"btn btn-sm btn-success":"",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(e[i])}})])]):t._e()])])}))],2)}))],2)]):t._e(),a("div",{staticClass:"row justify-content-center"},[t._m(3),t.shrink?t._e():a("span",{staticClass:"animated bounce infinite",staticStyle:{position:"absolute","z-index":"10000",top:"10px",right:"50px"}},[t._m(4)]),t.shrink?a("div",{staticStyle:{position:"absolute","z-index":"10000",right:"0px",widht:"300px"}},[a("div",{staticClass:"shadow rounded-lg p-3 scrollbarnya",staticStyle:{height:"99vh",overflow:"scroll",width:"300px",background:"linear-gradient(90deg, rgba(47,107,162,1) 0%, rgba(13,69,125,1) 100%)"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.vdata.link3d,expression:"vdata.link3d"}],staticClass:"btn btn-sm btn-dark  float-right mr-8",attrs:{type:"button"},on:{click:t.show3dmap}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"13px",width:"13px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}})]),t._m(5),a("hr",{staticClass:"style13 mt-1 mb-1"}),t._l(t.listPeta,(function(e,i){return a("div",{key:i+"listpeta",staticClass:"  bg-white text-left p-4 shadow-lg rounded-lg",staticStyle:{"font-size":"13px"}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}}),a("span",{staticClass:"pl-2 font-semibold text-sm"},[t._v(t._s(e.kategori))]),a("hr",{staticClass:"mt-2 mb-2"}),a("ul",{staticClass:"  anim mb-3  animated slideInLeft "},[a("li",{staticClass:"bord  text-left p-1 ",staticStyle:{"font-size":"13px"}},[a("p",{staticClass:"p-1 mt-2 mb-2 hover:bg-green-400 anim rounded-lg",on:{click:function(e){return t.muncul(e)}}},[a("input",{attrs:{type:"checkbox",id:"marker",value:"marker",checked:""},on:{click:function(a){return t.loadmarker(e.id)}}}),a("label",{attrs:{for:"marker"}}),a("img",{staticClass:"d-inline",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/pin.svg",alt:""}}),t._v("Custom Marker "),a("img",{staticClass:"d-inline float-right",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-down.svg",alt:""}})]),a("div",{staticClass:"isaktif"},[a("div",{staticClass:"tips float-right"},[a("button",{staticClass:"btn btn-sm  text-xs mb-2 ",class:t.showme?"btn-dark ":"btn-outline-dark ",attrs:{type:"button"},on:{click:function(e){t.showme=!t.showme}}},[a("img",{staticClass:"d-inline",staticStyle:{height:"10px",width:"10px"},style:t.showme?"filter: brightness(0) invert(1);":"",attrs:{src:"https://upload.egov.balangankab.go.id/svg/pin.svg",alt:""}})]),a("span",{staticClass:"tipstextL"},[t._v("Munculkan Id Barcode")])]),t._l(t.listMarker,(function(i,s){return(t.showme?i.icon||i.idbarcode:i.icon)?a("div",{directives:[{name:"show",rawName:"v-show",value:i.id_peta==e.id,expression:"item2.id_peta==item.id"}],key:s+"icon",staticClass:"hover:bg-green-400 text-xs pl-3",on:{click:function(e){return t.centerTo(i)}}},[a("img",{staticClass:"d-inline",staticStyle:{height:"30px",width:"14px"},attrs:{src:i.idbarcode?"https://gis.egov.balangankab.go.id/files/me.png":i.icon,alt:""}}),t._v(" "),a("img",{staticClass:"d-inline",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-right.svg",alt:""}}),t._v(" "+t._s(i.idbarcode?i.idbarcode:i.title)+" ")]):t._e()}))],2)]),t._m(6,!0),a("li",{staticClass:"bord  text-left ",staticStyle:{"font-size":"13px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"sm-form "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm p-2",attrs:{type:"text",id:"search",name:"search",placeholder:"search ..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),a("div",{staticClass:"col-6"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.kategoris,expression:"kategoris"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.kategoris=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("All")]),a("option",[t._v("Route")]),a("option",[t._v("Signal")])])])]),a("hr",{staticClass:"mt-1 mb-1"}),t._m(7,!0),a("div",{staticClass:"cursor-pointer"},t._l(t.tdnya,(function(i,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:i.id_peta==e.id,expression:"item3.id_peta==item.id"}],key:s+"icon",staticClass:"hover:bg-green-400 cursor-pointer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.layers["geojson"+i.id+"on"],expression:"layers['geojson'+item3.id+'on']"}],staticClass:"ml-3 cursor-pointer",attrs:{type:"checkbox",id:"pilihan"+s},domProps:{checked:Array.isArray(t.layers["geojson"+i.id+"on"])?t._i(t.layers["geojson"+i.id+"on"],null)>-1:t.layers["geojson"+i.id+"on"]},on:{click:function(e){return t.loadgeojson(i)},change:function(e){var a=t.layers["geojson"+i.id+"on"],s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);s.checked?o<0&&t.$set(t.layers,"geojson"+i.id+"on",a.concat([r])):o>-1&&t.$set(t.layers,"geojson"+i.id+"on",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.layers,"geojson"+i.id+"on",n)}}}),a("label",{attrs:{for:"pilihan"+s}},[a("img",{staticClass:"d-inline ml-1",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-right.svg",alt:""}}),t._v(" "+t._s(i.title))])])})),0)])])])}))],2)]):t._e()])]):a("div",[t._m(8)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t.show3d?a("div",[t.vdata.link3d?a("div",{attrs:{id:"live3d"}},[a("hr"),a("p",{staticClass:"text-lg text-red-400 text-center"},[t._v("Untuk melihat tampilan 3D klik tombol di bawah ini !")]),t._m(9),a("iframe",{staticStyle:{height:"100vh",width:"100vw"},attrs:{src:t.vdata.link3d,title:"W3Schools Free Online Web Tutorials"}})]):t._e()]):t._e()])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",bottom:"30px",left:"30px","z-index":"100000000"}},[a("p",{staticClass:"text-sm text-red-400"},[t._v("Note : Hanya Contoh/Just an Example, ")]),a("p",{staticClass:"text-sm text-red-400"},[t._v("Produk Akhir lebih banyak props dan detail ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-style4  btn-block text-xs text-center",staticStyle:{"font-size":"9px"},attrs:{type:"button"}},[a("img",{staticClass:"d-inline",staticStyle:{height:"15px",width:"15px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-loop.svg",alt:""}}),a("br"),t._v(" 360 Tour ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-style4  btn-block text-xs text-center",staticStyle:{"font-size":"9px"},attrs:{type:"button"}},[a("img",{staticClass:"d-inline",staticStyle:{height:"15px",width:"15px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/world.svg",alt:""}}),a("br"),t._v(" 3D Dollhouse ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-2 sm:order-1 shadow rounded-lg p-3 col-12"},[a("div",{staticStyle:{height:"100vh",width:"100%",background:"white"},attrs:{id:"mapid"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"animated fadeOut delay-3s"},[t._v(" Menu "),a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-right.svg",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"font-semibold pb-2 text-white"},[t._v("NAVIGATION "),a("span",{staticClass:"typcn typcn-map"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("hr",{staticClass:"mt-1 mb-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-2"},[a("img",{staticClass:"d-inline ",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}}),t._v(" Pilihan/Route ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center shadow-lg rounded-lg",staticStyle:{height:"100vh"}},[a("div",{staticClass:"text-center",staticStyle:{width:"100%"}},[a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}}),a("p",{staticClass:"text-center font-semibold text-lg animated bounce infinite"},[t._v("Loading ...")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center text-lg font-semibold text-red-400 p-3"},[t._v("Click 3D "),a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-down.svg",alt:""}})])}],r=(a("4de4"),a("c975"),a("841c"),a("ac1f"),a("99af"),a("4795"),a("acd8"),a("4160"),a("159b"),a("b64b"),a("5319"),a("cb29"),a("caad"),a("4b97")),o=(a("2ef0"),a("bc3a")),c=a.n(o),l=new r["a"],d={data:function(){return{photoSize:[-30.865,155.2094],ready:!1,mores:!1,showMore:!1,eventshow:!1,showme:!1,moreImage:[],eventdata:[],eventkey:[],search:"",kategoris:"",shrink:!0,center:[-2.3615836073925434,115.46956926581515],loading:!0,show3d:!1,listPeta:[],listMarker:[],listGeojson:[],geojson:[],nilai:[],geoJsonLayer:{},layers:{},vdata:{},markers:{},routeid:"6",listkategori:!1}},watch:{},computed:{tdnya:function(){var t=this,e=this.listGeojson;return e=e.filter((function(e){if(-1!=e.title.toLowerCase().indexOf(t.search))return e})),e=e.filter((function(e){if(-1!=e.kategori.toLowerCase().indexOf(t.kategoris.toLowerCase()))return e})),e}},methods:{showMoreImage:function(t){var e=this;this.showMore?this.showMore=!1:l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t,"'")).then((function(t){console.log(t),e.moreImage=t,e.showMore=!0,e.$forceUpdate()}))},centerTo:function(t){var e=this;t.idbarcode?(this.$router.push("/office?id=".concat(this.routeid,"&me=").concat(t.idbarcode)),setTimeout((function(){e.$router.go()}),1e3)):i.panTo(new L.LatLng(t.lat,t.lng))},events:function(t){},bawah:function(t){t.target.querySelectorAll("ul").length>0&&t.target.querySelectorAll("ul")[0].classList.toggle("isaktif")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},parent:function(t){t.target.parentNode.click()},loadListPeta:function(){var t=this;l.collection("app_gis_kategori").doc().get("*","where id='".concat(this.routeid,"' order by id")).then((function(e){t.listPeta=e,t.$forceUpdate()})),l.collection("app_gis_marker").doc().get("*","where tb1.id_peta='".concat(this.routeid,"' order by id")).then((function(e){t.listMarker=e,t.$forceUpdate()})),l.collection("app_gis_geojson").doc().get("*","where tb1.id_peta='".concat(this.routeid,"' order by id")).then((function(e){t.listGeojson=e,t.$forceUpdate()})),l.collection("app_gis_marker",!1).doc().select("select floorplan,link3d,height,width,center1,center2,nilai1,nilai2,nilai3,nilai4,idquery\n          from app_gis_marker where id_peta='".concat(t.routeid,"'")).then((function(e){e.length>0&&(t.photoSize=[parseFloat(e[0].height),parseFloat(e[0].width)],t.nilai[0]=parseFloat(e[0].nilai1),t.nilai[1]=parseFloat(e[0].nilai2),t.nilai[2]=parseFloat(e[0].nilai3),t.nilai[3]=parseFloat(e[0].nilai4),e[0].center1&&(t.center=[parseFloat(e[0].center1),parseFloat(e[0].center2)]),t.vdata.floorplan=e[0].floorplan,t.vdata.link3d=e[0].link3d,t.$forceUpdate()),t.loadmap()}))},loadmarker:function(t){var e=this,a=this,s=this.listMarker;s=s.filter((function(e){return e.id_peta==t})),s.length>0&&s.forEach((function(t,s){if(i.hasLayer(a.markers["marker"+t.id]))return i.removeLayer(a.markers["marker"+t.id]),void(a.markers["marker"+t.id+"on"]=!1);if(a.markers["marker"+t.id+"on"]=!0,"icon"==t.kategori){var n=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}})):a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}}))}else if("barcode"==t.kategori){if(e.$route.query.me&&e.$route.query.me==t.idbarcode){n=L.icon({iconUrl:"https://gis.egov.balangankab.go.id/files/me.png",iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.idbarcode,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}})):a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}}))}}else if("gambar"==t.kategori){n=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}})):a.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}}))}else"radius"==t.kategori&&("click"==t.popup?a.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}})):a.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                      <div class="text-xs">\n                          <div class="font-bold uppercase">'.concat(t.title,'</div>\n                          <div class="text-justify">').concat(t.deskripsi,"</div>\n                      </div>\n                      "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){if("false"!=t.event&&t.event){a.events(t.event),a.eventshow=!0,a.showMore=!1;var e=t.query;a.mores=!1,l.collection("t").doc().select(e).then((function(t){l.collection("app_gis_ruangan_gambar",!1).doc().select("select * from app_gis_ruangan_gambar where idroom='".concat(t[0].id,"'")).then((function(t){t.length>0&&(a.mores=!0)})),a.eventdata=t,a.eventkey=Object.keys(t[0]),a.$forceUpdate()}))}})))}))},loadgeojson:function(t){var e=this;c.a.get(t.geojson).then((function(a){if(i.hasLayer(e.layers["geojson"+t.id]))return i.removeLayer(e.layers["geojson"+t.id]),void(e.layers["geojson"+t.id+"on"]=!1);e.layers["geojson"+t.id]=L.geoJSON(a.data).addTo(i),e.layers["geojson"+t.id+"on"]=!0,"Polygon"==a.data.features[0].geometry.type?i.panTo(new L.LatLng(a.data.features[0].geometry.coordinates[0][0][1],a.data.features[0].geometry.coordinates[0][0][0])):i.panTo(new L.LatLng(a.data.features[0].geometry.coordinates[0][1],a.data.features[0].geometry.coordinates[0][0])),e.loadGeojsonLayer(e.layers["geojson"+t.id]),e.loading=!1,e.$forceUpdate()}))},loadmap:function(){var t=this;this.ready=!0,i=null,setTimeout((function(){var e=[-33.865,151.2094];i=new L.Map("mapid");e=t.center;i.setView(e,19),L.tileLayer("",{maxZoom:25,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(i),i.on("click",(function(e){t.posisi[0]=e.latlng.lat,t.posisi[1]=e.latlng.lng,t.modal=!0,t.$forceUpdate()}));var a=t.vdata.floorplan,s=[[e[0]-t.nilai[0],e[1]+t.nilai[1]],[e[0]+t.nilai[2],e[1]-t.nilai[3]]];L.imageOverlay(a,s).addTo(i),t.loadmarker(t.routeid)}),1e3)},loadGeojsonLayer:function(t){t.eachLayer((function(t){setTimeout((function(){if(t["_icon"]){var e="";t.feature.properties["marker-symbol"]&&(e=e+"-"+t.feature.properties["marker-symbol"]),t["_icon"].src="https://a.tiles.mapbox.com/v4/marker/pin-m".concat(e,"+").concat(t.feature.properties["marker-color"].replace("#",""),"@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A"),t["_icon"].style.height="80px",t["_icon"].style.width="30px"}"Polygon"==t.feature.geometry.type&&(t["_path"].setAttribute("fill",t.feature.properties.fill?t.feature.properties.fill:"#fff"),t["_path"].addEventListener("mouseover",(function(){t["_path"].setAttribute("fill","#000")})),t["_path"].addEventListener("mouseout",(function(){t["_path"].setAttribute("fill",t.feature.properties.fill?t.feature.properties.fill:"#fff")})),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke),t["_path"].setAttribute("fill-opacity",t.feature.properties["fill-opacity"]?t.feature.properties["fill-opacity"]:"0.5")),"LineString"==t.feature.geometry.type&&(console.log("LineString",t),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke?t.feature.properties.stroke:t.options.color))}),1e3);var e=["stroke","stroke-width","stroke-opacity","fill","fill-opacity","marker-color","marker-size","marker-symbol"],a='<table class="table table-sm table-striped">';Object.keys(t.feature.properties).filter((function(t){if(!e.includes(t))return t})).forEach((function(e){a+="\n                  ".concat(-1!=t.feature.properties[e].indexOf("http")?'<div><a href="'.concat(t.feature.properties[e],'" target="__blank"><img class="viewer" style="height:100px;width:100px;" src="').concat(t.feature.properties[e],'"></a></div>'):'\n                    <tr><td class="capitalize">'.concat(e,"</td><td>").concat(t.feature.properties[e],"</td></tr>                  \n                  "),"\n                  ")})),t.bindTooltip(a+"</table>",{permanent:!1,sticky:!0})}))},show3dmap:function(){this.vdata.link3d&&(this.show3d=!this.show3d,this.$forceUpdate(),setTimeout((function(){document.getElementById("live3d").scrollIntoView()}),3e3))}},mounted:function(){var t=this;console.log("quote",this.$route),this.routeid=this.$route.query.cat,window.innerWidth<600&&setTimeout((function(){t.shrink=!1}),1e3),setTimeout((function(){document.querySelector('a[href="https://leafletjs.com"]').style.color="transparent"}),5e3),setTimeout((function(){t.loadListPeta()}),2e3)},metaInfo:{title:"Add Marker dynamic",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""}]}},p=d,u=(a("6bc7"),a("2877")),g=Object(u["a"])(p,s,n,!1,null,"1f72a6d0",null);e["default"]=g.exports},"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,n=a("1dde"),r=n("filter");i({target:"Array",proto:!0,forced:!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),s=a("5899"),n="["+s+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6bc7":function(t,e,a){"use strict";a("935a")},"7e12":function(t,e,a){var i=a("da84"),s=a("58a8").trim,n=a("5899"),r=i.parseFloat,o=1/r(n+"-0")!==-1/0;t.exports=o?function(t){var e=s(String(t)),a=r(e);return 0===a&&"-"==e.charAt(0)?-0:a}:r},"81d5":function(t,e,a){"use strict";var i=a("7b0b"),s=a("23cb"),n=a("50c4");t.exports=function(t){var e=i(this),a=n(e.length),r=arguments.length,o=s(r>1?arguments[1]:void 0,a),c=r>2?arguments[2]:void 0,l=void 0===c?a:s(c,a);while(l>o)e[o++]=t;return e}},"841c":function(t,e,a){"use strict";var i=a("d784"),s=a("825a"),n=a("1d80"),r=a("129f"),o=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=n(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var n=s(t),c=String(this),l=n.lastIndex;r(l,0)||(n.lastIndex=0);var d=o(n,c);return r(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))},"935a":function(t,e,a){},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),n=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),p=a("1dde"),u=a("b622"),g=a("2d00"),h=u("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",f=g>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=p("concat"),k=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},y=!f||!b;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,i,s,n,r=o(this),p=d(r,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?r:arguments[e],k(n)){if(s=c(n.length),u+s>m)throw TypeError(v);for(a=0;a<s;a++,u++)a in n&&l(p,u,n[a])}else{if(u>=m)throw TypeError(v);l(p,u++,n)}return p.length=u,p}})},acd8:function(t,e,a){var i=a("23e7"),s=a("7e12");i({global:!0,forced:parseFloat!=s},{parseFloat:s})},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,n=a("a640"),r=[].indexOf,o=!!r&&1/[1].indexOf(1,-0)<0,c=n("indexOf");i({target:"Array",proto:!0,forced:o||!c},{indexOf:function(t){return o?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").includes,n=a("44d2");i({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},cb29:function(t,e,a){var i=a("23e7"),s=a("81d5"),n=a("44d2");i({target:"Array",proto:!0},{fill:s}),n("fill")}}]);
//# sourceMappingURL=page-office-index~31ecd969.bd73cb15.js.map