(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-gis-map-floorplan2~31ecd969"],{"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,r=a("1dde"),n=r("filter");i({target:"Array",proto:!0,forced:!n},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},7806:function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pr-2"},[t.ready?a("div",[a("button",{staticClass:"btn btn-sm btn-dark ",staticStyle:{position:"absolute","z-index":"10006",right:"13px","margin-top":"12px"},attrs:{type:"button"},on:{click:function(e){t.shrink=!t.shrink}}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"13px",width:"13px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/th-list.svg",alt:""}})]),a("div",{staticClass:"row justify-content-center"},[t._m(0),t.shrink?a("div",{staticStyle:{position:"absolute","z-index":"10000",right:"10px","min-widht":"300px"}},[a("div",{staticClass:"shadow rounded-lg p-3 scrollbarnya",staticStyle:{"min-height":"80vh",overflow:"scroll",background:"linear-gradient(90deg, rgba(200,222,219,1) 0%, rgba(38,185,215,0.7319970224417892) 100%)"}},[a("button",{staticClass:"btn btn-sm btn-dark  float-right mr-5",attrs:{type:"button"},on:{click:t.show3dmap}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"13px",width:"13px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}})]),t._m(1),a("hr",{staticClass:"style13 mt-3 mb-3"}),t._l(t.listPeta,(function(e,i){return a("div",{key:i+"listpeta",staticClass:"  bg-white text-left p-4 shadow rounded-lg",staticStyle:{"font-size":"13px"}},[a("img",{staticClass:"d-inline ",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}}),a("span",{staticClass:"pl-2"},[t._v(t._s(e.kategori))]),a("hr",{staticClass:"mt-2 mb-2"}),a("ul",{staticClass:"  anim mb-3  animated slideInLeft "},[a("li",{staticClass:"bord  text-left p-1 ",staticStyle:{"font-size":"13px"}},[a("p",{staticClass:"p-1 mt-2 mb-2 hover:bg-green-400 anim rounded-lg",on:{click:function(e){return t.muncul(e)}}},[a("input",{attrs:{type:"checkbox",id:"marker",value:"marker",checked:""},on:{click:function(a){return t.loadmarker(e.id)}}}),a("label",{attrs:{for:"marker"}}),a("img",{staticClass:"d-inline",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/pin.svg",alt:""}}),t._v("Custom Marker "),a("img",{staticClass:"d-inline float-right",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-down.svg",alt:""}})]),a("div",{staticClass:"isaktif"},t._l(t.listMarker,(function(i,s){return i.icon?a("div",{directives:[{name:"show",rawName:"v-show",value:i.id_peta==e.id,expression:"item2.id_peta==item.id"}],key:s+"icon",staticClass:"hover:bg-green-400 text-xs pl-3"},[a("img",{staticClass:"d-inline",staticStyle:{height:"30px",width:"14px"},attrs:{src:i.icon,alt:""}}),t._v(" "),a("img",{staticClass:"d-inline",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-right.svg",alt:""}}),t._v(" "+t._s(i.title)+" ")]):t._e()})),0)]),t._m(2,!0),a("li",{staticClass:"bord  text-left p-3 ",staticStyle:{"font-size":"13px"}},[t._m(3,!0),a("div",{staticClass:"cursor-pointer"},t._l(t.listGeojson,(function(i,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:i.id_peta==e.id,expression:"item3.id_peta==item.id"}],key:s+"icon",staticClass:"hover:bg-green-400 cursor-pointer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.layers["geojson"+i.id+"on"],expression:"layers['geojson'+item3.id+'on']"}],staticClass:"ml-3 cursor-pointer",attrs:{type:"checkbox",id:"pilihan"+s},domProps:{checked:Array.isArray(t.layers["geojson"+i.id+"on"])?t._i(t.layers["geojson"+i.id+"on"],null)>-1:t.layers["geojson"+i.id+"on"]},on:{click:function(e){return t.loadgeojson(i)},change:function(e){var a=t.layers["geojson"+i.id+"on"],s=e.target,r=!!s.checked;if(Array.isArray(a)){var n=null,o=t._i(a,n);s.checked?o<0&&t.$set(t.layers,"geojson"+i.id+"on",a.concat([n])):o>-1&&t.$set(t.layers,"geojson"+i.id+"on",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.layers,"geojson"+i.id+"on",r)}}}),a("label",{attrs:{for:"pilihan"+s}},[a("img",{staticClass:"d-inline ml-1",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-right.svg",alt:""}}),t._v(" "+t._s(i.title))])])})),0)])])])}))],2)]):t._e()])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t.show3d?a("div",[t.vdata.link3d?a("div",{attrs:{id:"live3d"}},[a("hr"),a("p",{staticClass:"text-lg text-red-400 text-center"},[t._v("Untuk melihat tampilan 3D klik tombol di bawah ini !")]),t._m(4),a("iframe",{staticStyle:{height:"100vh",width:"100vw"},attrs:{src:t.vdata.link3d,title:"W3Schools Free Online Web Tutorials"}})]):t._e()]):t._e()])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-2 sm:order-1 shadow rounded-lg p-3 col-12"},[a("div",{staticStyle:{height:"100vh",width:"100%",background:"white"},attrs:{id:"mapid"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"font-semibold p-3 "},[t._v("NAVIGATION "),a("span",{staticClass:"typcn typcn-map"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("hr",{staticClass:"mt-2 mb-2"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-2"},[a("img",{staticClass:"d-inline ",staticStyle:{height:"14px",width:"14px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/map.svg",alt:""}}),t._v(" Pilihan/Route ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center text-lg font-semibold text-red-400 p-3"},[t._v("Click 3D "),a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-down.svg",alt:""}})])}],n=(a("4de4"),a("4160"),a("159b"),a("99af"),a("4795"),a("5319"),a("ac1f"),a("cb29"),a("b64b"),a("caad"),a("c975"),a("4b97")),o=(a("2ef0"),a("bc3a")),l=a.n(o),c=new n["a"],d={data:function(){return{photoSize:[-30.865,155.2094],ready:!1,shrink:!0,center:[-33.865,151.2094],loading:!0,show3d:!1,listPeta:[],listMarker:[],listGeojson:[],listgeojson:[],geojson:[],geoJsonLayer:{},layers:{},vdata:{},markers:{},listkategori:!1}},watch:{},methods:{events:function(t){alert(t)},bawah:function(t){t.target.querySelectorAll("ul").length>0&&t.target.querySelectorAll("ul")[0].classList.toggle("isaktif")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},parent:function(t){t.target.parentNode.click()},loadListPeta:function(){var t=this;c.collection("app_gis_kategori").doc().get("*","where id='".concat(this.$route.query.id,"' order by id")).then((function(e){t.listPeta=e,t.$forceUpdate()})),c.collection("app_gis_marker").doc().get("*","where tb1.id_peta='".concat(this.$route.query.id,"' order by id")).then((function(e){t.listMarker=e,t.$forceUpdate()})),c.collection("app_gis_geojson").doc().get("*","where tb1.id_peta='".concat(this.$route.query.id,"' order by id")).then((function(e){t.listGeojson=e,t.$forceUpdate()})),c.collection("app_gis_marker",!1).doc().select("select floorplan,link3d from app_gis_marker where id_peta='".concat(t.$route.query.id,"'")).then((function(e){console.log(e),e.length>0&&(t.vdata.floorplan=e[0].floorplan,t.vdata.link3d=e[0].link3d,t.$forceUpdate()),t.loadmap()}))},loadmarker:function(t){var e=this,a=this.listMarker;a=a.filter((function(e){return e.id_peta==t})),a.length>0&&a.forEach((function(t,a){if(i.hasLayer(e.markers["marker"+t.id]))return i.removeLayer(e.markers["marker"+t.id]),void(e.markers["marker"+t.id+"on"]=!1);if(e.markers["marker"+t.id+"on"]=!0,console.log("listicon",t),"icon"==t.kategori){console.log("icon",t);var s=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)}))}else if("gambar"==t.kategori){console.log("gambar",t);s=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)}))}else"radius"==t.kategori&&(console.log("radius",t),"click"==t.popup?e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                        </div>\n                        "),{maxWidth:500}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                      <div class="text-xs">\n                          <div class="font-bold uppercase">'.concat(t.title,'</div>\n                          <div class="text-justify">').concat(t.deskripsi,"</div>\n                      </div>\n                      "),{permanent:!1,sticky:!0}).addTo(i).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})))}))},loadgeojson:function(t){var e=this;l.a.get(t.geojson).then((function(a){if(i.hasLayer(e.layers["geojson"+t.id]))return i.removeLayer(e.layers["geojson"+t.id]),void(e.layers["geojson"+t.id+"on"]=!1);e.layers["geojson"+t.id]=L.geoJSON(a.data).addTo(i),e.layers["geojson"+t.id+"on"]=!0,"Polygon"==a.data.features[0].geometry.type?i.panTo(new L.LatLng(a.data.features[0].geometry.coordinates[0][0][1],a.data.features[0].geometry.coordinates[0][0][0])):i.panTo(new L.LatLng(a.data.features[0].geometry.coordinates[0][1],a.data.features[0].geometry.coordinates[0][0])),e.loadGeojsonLayer(e.layers["geojson"+t.id]),e.loading=!1,e.$forceUpdate()}))},loadmap:function(){var t=this;this.ready=!0,i=null,setTimeout((function(){var e=[-33.865,151.2094];i=new L.Map("mapid"),i.setView([-32.865,153.2094],8),L.tileLayer("",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(i),i.on("click",(function(e){console.log(e),t.posisi[0]=e.latlng.lat,t.posisi[1]=e.latlng.lng,t.modal=!0,t.$forceUpdate()})),console.log("vdata",t.vdata);var a=t.vdata.floorplan,s=[e,t.photoSize];L.imageOverlay(a,s).addTo(i),t.loadmarker(t.$route.query.id)}),1e3)},loadGeojsonLayer:function(t){t.eachLayer((function(t){setTimeout((function(){if(t["_icon"]){var e="";t.feature.properties["marker-symbol"]&&(e=e+"-"+t.feature.properties["marker-symbol"]),t["_icon"].src="https://a.tiles.mapbox.com/v4/marker/pin-m".concat(e,"+").concat(t.feature.properties["marker-color"].replace("#",""),"@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A"),t["_icon"].style.height="80px",t["_icon"].style.width="30px"}"Polygon"==t.feature.geometry.type&&(console.log("polygon"),t["_path"].setAttribute("fill",t.feature.properties.fill),t["_path"].addEventListener("mouseover",(function(){t["_path"].setAttribute("fill","#000")})),t["_path"].addEventListener("mouseout",(function(){t["_path"].setAttribute("fill",t.feature.properties.fill)})),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke),t["_path"].setAttribute("fill-opacity",t.feature.properties["fill-opacity"])),"LineString"==t.feature.geometry.type&&(console.log("LineString",t),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke?t.feature.properties.stroke:t.options.color))}),1e3);var e=["stroke","stroke-width","stroke-opacity","fill","fill-opacity","marker-color","marker-size","marker-symbol"],a='<table class="table table-sm table-striped">';Object.keys(t.feature.properties).filter((function(t){if(!e.includes(t))return t})).forEach((function(e){a+="\n                  ".concat(-1!=t.feature.properties[e].indexOf("http")?'<div><a href="'.concat(t.feature.properties[e],'" target="__blank"><img class="viewer" style="height:100px;width:100px;" src="').concat(t.feature.properties[e],'"></a></div>'):'\n                    <tr><td class="capitalize">'.concat(e,"</td><td>").concat(t.feature.properties[e],"</td></tr>                  \n                  "),"\n                  ")})),t.bindTooltip(a+"</table>",{permanent:!1,sticky:!0})}))},show3dmap:function(){this.show3d=!this.show3d,this.$forceUpdate(),setTimeout((function(){document.getElementById("live3d").scrollIntoView()}),3e3)}},mounted:function(){this.loadListPeta(),setTimeout((function(){document.querySelector('a[href="https://leafletjs.com"]').style.color="transparent"}),5e3)},metaInfo:{title:"Add Marker dynamic",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""}]}},p=d,u=(a("da57"),a("2877")),g=Object(u["a"])(p,s,r,!1,null,"2e5657b0",null);e["default"]=g.exports},7829:function(t,e,a){},"81d5":function(t,e,a){"use strict";var i=a("7b0b"),s=a("23cb"),r=a("50c4");t.exports=function(t){var e=i(this),a=r(e.length),n=arguments.length,o=s(n>1?arguments[1]:void 0,a),l=n>2?arguments[2]:void 0,c=void 0===l?a:s(l,a);while(c>o)e[o++]=t;return e}},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),r=a("e8b5"),n=a("861d"),o=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),p=a("1dde"),u=a("b622"),g=a("2d00"),h=u("isConcatSpreadable"),f=9007199254740991,m="Maximum allowed index exceeded",v=g>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),k=p("concat"),b=function(t){if(!n(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},y=!v||!k;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,i,s,r,n=o(this),p=d(n,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?n:arguments[e],b(r)){if(s=l(r.length),u+s>f)throw TypeError(m);for(a=0;a<s;a++,u++)a in r&&c(p,u,r[a])}else{if(u>=f)throw TypeError(m);c(p,u++,r)}return p.length=u,p}})},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,r=a("a640"),n=[].indexOf,o=!!n&&1/[1].indexOf(1,-0)<0,l=r("indexOf");i({target:"Array",proto:!0,forced:o||!l},{indexOf:function(t){return o?n.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").includes,r=a("44d2");i({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},cb29:function(t,e,a){var i=a("23e7"),s=a("81d5"),r=a("44d2");i({target:"Array",proto:!0},{fill:s}),r("fill")},da57:function(t,e,a){"use strict";a("7829")}}]);
//# sourceMappingURL=page-gis-map-floorplan2~31ecd969.9adf1d32.js.map