(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-gis-covid_map~31ecd969"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"13d5":function(t,e,a){"use strict";var n=a("23e7"),i=a("d58f").left,s=a("a640"),r=a("2d00"),o=a("605d"),l=s("reduce"),c=!o&&r>79&&r<83;n({target:"Array",proto:!0,forced:!l||c},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"42bb":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.ready?a("div",[a("div",{staticClass:"row "},[a("div",{staticClass:"col-md-6",staticStyle:{position:"relative"}},[a("div",{staticStyle:{position:"fixed",top:"10px",left:"60px","z-index":"100000",width:"50px"}},[a("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:function(e){t.listkategori=!t.listkategori}}},[a("span",{staticClass:"typcn typcn-th-large"})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.listkategori,expression:"listkategori"}],staticClass:"shadow rounded-lg p-3 bg-white animated fadeInLeft",staticStyle:{position:"fixed",top:"50px",left:"60px","z-index":"100000",width:"30vw"}},t._l(t.listPeta,(function(e,n){return a("div",{key:n+"listpeta",staticClass:"bord   text-left pl-3 shadow rounded-lg",staticStyle:{"font-size":"13px"},on:{click:function(e){return t.bawah(e)}}},[a("span",{staticClass:"typcn typcn-map",on:{click:function(e){return t.parent(e)}}},[a("span",{staticClass:"pl-2"},[t._v(t._s(e.kategori))])]),a("span",{staticClass:"typcn typcn-arrow-down float-right"}),a("ul",{staticClass:"isaktif  anim mb-3  animated slideInLeft "},[a("li",{staticClass:"bord  text-left p-1 shadow",staticStyle:{"font-size":"13px"}},[a("p",{staticClass:"p-1",on:{click:function(e){return t.muncul(e)}}},[a("input",{attrs:{type:"checkbox",id:"marker",value:"marker"},on:{click:function(a){return t.loadmarker(e.id)}}}),a("label",{attrs:{for:"marker"}}),a("span",{staticClass:"typcn typcn-pin"}),t._v("Custom Marker ")]),a("div",{staticClass:"isaktif"},t._l(t.listMarker,(function(n,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:n.id_peta==e.id,expression:"item2.id_peta==item.id"}],key:i+"icon",staticClass:"hover:bg-green-400 text-xs pl-3"},[a("span",{staticClass:"typcn typcn-arrow-right ml-1"}),t._v(" "+t._s(n.title)+" ")])})),0)]),a("li",{staticClass:"bord  text-left p-1 shadow",staticStyle:{"font-size":"13px"}},[a("p",{on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-map"}),t._v(" Geojson ")]),a("div",{staticClass:"isaktif"},t._l(t.listGeojson,(function(n,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:n.id_peta==e.id,expression:"item3.id_peta==item.id"}],key:i+"icon",staticClass:"hover:bg-green-400"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.layers["geojson"+n.id+"on"],expression:"layers['geojson'+item3.id+'on']"}],staticClass:"ml-3",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.layers["geojson"+n.id+"on"])?t._i(t.layers["geojson"+n.id+"on"],null)>-1:t.layers["geojson"+n.id+"on"]},on:{click:function(e){return t.loadgeojson(n)},change:function(e){var a=t.layers["geojson"+n.id+"on"],i=e.target,s=!!i.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);i.checked?o<0&&t.$set(t.layers,"geojson"+n.id+"on",a.concat([r])):o>-1&&t.$set(t.layers,"geojson"+n.id+"on",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.layers,"geojson"+n.id+"on",s)}}}),a("span",{staticClass:"typcn typcn-arrow-right ml-1"}),t._v(" "+t._s(n.title)+" ")])})),0)])])])})),0),a("div",{staticStyle:{height:"500px",width:"100%"},attrs:{id:"mapid"}})]),a("div",{staticClass:"col-sm-6 pr-4"},[a("p",{staticClass:"text-center font-semibold text-lg"},[t._v(" Data Covid Wilayah Kabupaten Balangan ")]),a("div",{staticClass:"table-responsive shadow rounded-lg p-3"},[a("table",{staticClass:"table table-sm table-striped table-bordered"},[t._m(0),t._l(t.covid,(function(e,n){return a("tr",{key:n+"covid"},[a("td",[t._v(t._s(e.covid[0].kecamatan))]),a("td",[t._v(t._s(e.odp))]),a("td",[t._v(t._s(e.pdp))]),a("td",[t._v(t._s(e.positif))]),a("td",[t._v(t._s(e.sembuh))]),a("td",[t._v(t._s(e.meninggal))])])}))],2)])])])]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Wilayah")]),a("th",[t._v("ODP")]),a("th",[t._v("PDP")]),a("th",[t._v("POSITIF")]),a("th",[t._v("SEMBUH")]),a("th",[t._v("MENINGGAL")])])}],r=a("1da1"),o=(a("96cf"),a("4795"),a("841c"),a("ac1f"),a("d81d"),a("4160"),a("159b"),a("4de4"),a("13d5"),a("e25e"),a("99af"),a("9911"),a("5319"),a("cb29"),a("4b97")),l=(a("2ef0"),a("bc3a")),c=a.n(l),d=new o["a"],p={data:function(){return{ready:!1,listsearch:!1,search:"",searchs:[],covid:[],center:[-2.3662494,115.4641079],loading:!0,listPeta:[],listMarker:[],listGeojson:[],listgeojson:[],geojson:[],geoJsonLayer:{},layers:{},markers:{},listkategori:!1,tilem:!1,tilemap:[{type:"openmap",tile:"open streetmap",link:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{type:"google",tile:"street",link:"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"},{type:"google",tile:"hybrid",link:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"},{type:"google",tile:"satelite",link:"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"}],pilihtilemap:{type:"openmap",tile:"open streetmap",link:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},watch:{pilihtilemap:function(){var t=this;this.ready=!1,n=null,setTimeout((function(){t.loadmap()}),1e3)},search:function(){}},methods:{cek:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,n=new GeoSearch.OpenStreetMapProvider,e.next=4,n.search({query:a.search});case 4:i=e.sent,t.searchs=i;case 6:case"end":return e.stop()}}),e)})))()},cari:function(t){console.log(t),n.panTo(new L.LatLng(t.y,t.x)),this.searchs=[]},bawah:function(t){t.target.querySelectorAll("ul").length>0&&t.target.querySelectorAll("ul")[0].classList.toggle("isaktif")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},parent:function(t){t.target.parentNode.click()},getCovidInfo:function(){var t=this,e=[];d.collection("app_gis_wilayah_balangan").doc().select("select * from app_gis_wilayah_balangan").then((function(a){var n=a;n=n.map((function(t){return t.id})),d.collection("app_gis_covid_balangan").doc().select("select *,tb1.id as id from app_gis_covid_balangan tb1 left join app_gis_wilayah_balangan tb2 on tb2.id=tb1.wilayah").then((function(a){var i=a;n.forEach((function(t,a){e[a]={id:t,covid:i.filter((function(e){return e.wilayah==t})),odp:i.filter((function(e){return e.wilayah==t})).reduce((function(t,e){return t+parseInt(e.odp)}),0),pdp:i.filter((function(e){return e.wilayah==t})).reduce((function(t,e){return t+parseInt(e.pdp)}),0),positif:i.filter((function(e){return e.wilayah==t})).reduce((function(t,e){return t+parseInt(e.positif)}),0),sembuh:i.filter((function(e){return e.wilayah==t})).reduce((function(t,e){return t+parseInt(e.sembuh)}),0),meninggal:i.filter((function(e){return e.wilayah==t})).reduce((function(t,e){return t+parseInt(e.meninggal)}),0)}})),t.covid=e}))}))},loadListPeta:function(){var t=this;d.collection("app_gis_kategori").doc().get("*","order by id").then((function(e){t.listPeta=e,t.$forceUpdate()})),d.collection("app_gis_marker").doc().get("*","order by id").then((function(e){t.listMarker=e,t.$forceUpdate()})),d.collection("app_gis_geojson").doc().get("*","order by id").then((function(e){t.listGeojson=e,t.$forceUpdate()}))},loadmarker:function(t){console.log(t);var e=this,a=this.listMarker;a=a.filter((function(e){return e.id_peta==t})),a.length>0&&a.forEach((function(t,a){if(n.hasLayer(e.markers["marker"+t.id]))return n.removeLayer(e.markers["marker"+t.id]),void(e.markers["marker"+t.id+"on"]=!1);e.markers["marker"+t.id+"on"]=!0,console.log("listicon",t),0==a&&n.panTo(new L.LatLng(t.lat,t.lng));var i=e.covid.filter((function(e){if(e.id==t.wilayah)return e}));if("icon"==t.kategori){console.log("icon",t);var s=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(n):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(n)}else if("gambar"==t.kategori){console.log("gambar",t);s=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(n):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:s}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(n)}else"radius"==t.kategori&&(console.log("radius",t),"click"==t.popup?e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                       <div class="text-sm">\n                          <div class="font-bold uppercase">'.concat(t.title,'</div>\n                          <div class="text-justify">').concat(t.deskripsi,"</div>\n                          <table class='table table-sm table-striped table-bordered'>  \n                            <tr>\n                                <td class='text-sm font-semibold'>ODP</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].odp,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>PDP</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].pdp,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>POSITIF</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].positif,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>SEMBUH</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].sembuh,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>MENINGGAL</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].meninggal,"</td>\n                            </tr>\n                          </table>\n                      </div>\n                        "),{maxWidth:500}).addTo(n):e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                      <div class="text-sm">\n                          <div class="font-bold uppercase">'.concat(t.title,'</div>\n                          <div class="text-justify">').concat(t.deskripsi,"</div>\n                          <table class='table table-sm table-striped table-bordered'>  \n                            <tr>\n                                <td class='text-sm font-semibold'>ODP</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].odp,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>PDP</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].pdp,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>POSITIF</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].positif,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>SEMBUH</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].sembuh,"</td>\n                            </tr>\n                             <tr>\n                                <td class='text-sm font-semibold'>MENINGGAL</td>\n                                <td class=\"pl-2 pr-2\">:</td>\n                                <td class='text-sm font-semibold'>").concat(i[0].meninggal,"</td>\n                            </tr>\n                          </table>\n                      </div>\n                      "),{permanent:!1,sticky:!0}).addTo(n))}))},loadgeojson:function(t){var e=this;this.listGeojson.forEach((function(t){c.a.get(t.geojson).then((function(a){if(n.hasLayer(e.layers["geojson"+t.id]))return n.removeLayer(e.layers["geojson"+t.id]),void(e.layers["geojson"+t.id+"on"]=!1);e.layers["geojson"+t.id]=L.geoJSON(a.data).addTo(n),e.layers["geojson"+t.id+"on"]=!0,console.log("res",e.layers),console.log(e.layers["geojson"+t.id]),e.loadGeojsonLayer(e.layers["geojson"+t.id]),e.loading=!1,e.$forceUpdate()}))})),setTimeout((function(){e.loadmarker("1")}),1e3)},loadmap:function(){var t=this;this.ready=!0,n=null,setTimeout((function(){n=new L.Map("mapid"),n.setView(t.center,10),"openmap"==t.pilihtilemap.type?L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}).addTo(n):"google"==t.pilihtilemap.type&&L.tileLayer(t.pilihtilemap.link,{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(n)}),1e3)},loadGeojsonLayer:function(t){t.eachLayer((function(t){setTimeout((function(){if(console.log("layernya",t),t["_icon"]){var e="";t.feature.properties["marker-symbol"]&&(e=e+"-"+t.feature.properties["marker-symbol"]),t["_icon"].src="https://a.tiles.mapbox.com/v4/marker/pin-m".concat(e,"+").concat(t.feature.properties["marker-color"].replace("#",""),"@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A"),t["_icon"].style.height="80px",t["_icon"].style.width="30px"}"Polygon"==t.feature.geometry.type&&(console.log("polygon"),t["_path"].setAttribute("fill",t.feature.properties.fill),t["_path"].addEventListener("mouseover",(function(){t["_path"].setAttribute("fill","#000")})),t["_path"].addEventListener("mouseout",(function(){t["_path"].setAttribute("fill",t.feature.properties.fill)})),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke),t["_path"].setAttribute("fill-opacity",t.feature.properties["fill-opacity"])),"MultiPolygon"==t.feature.geometry.type&&(console.log("MultiPolygon"),t["_path"].setAttribute("fill","#8ACE80"),t["_path"].addEventListener("mouseover",(function(){t["_path"].setAttribute("fill","#AAD3DF")})),t["_path"].addEventListener("mouseout",(function(){t["_path"].setAttribute("fill","#8ACE80")})),t["_path"].setAttribute("stroke-opacity","1.0"),t["_path"].setAttribute("stroke-width","3"),t["_path"].setAttribute("stroke","#000"),t["_path"].setAttribute("fill-opacity","0.7")),"LineString"==t.feature.geometry.type&&(console.log("LineString"),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke))}),1e3);var e='\n              <p class="font-semibold">\n              '.concat(t.feature.properties.WADMKK,'\n              </p>\n               <p class="font-semibold">\n              ').concat(t.feature.properties.WADMPR,"\n              </p>\n              <table>");e+="\n                    <tr>\n                        <td>Wilayah</td>\n                        <td class='pl-2 pr-2'>:</td>\n                        <td>".concat(t.feature.properties.NAMOBJ,"</td>\n                    </tr>\n                    \n                  "),t.bindTooltip(e+"</table>",{permanent:!1,sticky:!0})}))}},mounted:function(){var t=this;this.loadListPeta(),this.getCovidInfo(),setTimeout((function(){t.loadmap(),setTimeout((function(){t.loadgeojson(),setTimeout((function(){}),1e3)}),1e3)}),2e3)},metaInfo:{title:"Peta Covid",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.css",integrity:"sha384-P9DABSdtEY/XDbEInD3q+PlL+BjqPCXGcF8EkhtKSfSTr/dS5PBKa9+/PMkW2xsY",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""},{src:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.js",integrity:"sha384-N2S8y7hRzXUPiepaSiUvBH1ZZ7Tc/ZfchhbPdvOE5v3aBBCIepq9l+dBJPFdo1ZJ",crossorigin:"anonymous"},{src:"https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"}]}},u=p,f=(a("cf5e"),a("2877")),m=Object(f["a"])(u,i,s,!1,null,"53fb7a3c",null);e["default"]=m.exports},"4de4":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").filter,s=a("1dde"),r=s("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),s="["+i+"]",r=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},8166:function(t,e,a){},"81d5":function(t,e,a){"use strict";var n=a("7b0b"),i=a("23cb"),s=a("50c4");t.exports=function(t){var e=n(this),a=s(e.length),r=arguments.length,o=i(r>1?arguments[1]:void 0,a),l=r>2?arguments[2]:void 0,c=void 0===l?a:i(l,a);while(c>o)e[o++]=t;return e}},"841c":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),s=a("1d80"),r=a("129f"),o=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var s=i(t),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var d=o(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]}))},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),p=a("1dde"),u=a("b622"),f=a("2d00"),m=u("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=p("concat"),y=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},k=!v||!b;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,n,i,s,r=o(this),p=d(r,0),u=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?r:arguments[e],y(s)){if(i=l(s.length),u+i>h)throw TypeError(g);for(a=0;a<i;a++,u++)a in s&&c(p,u,s[a])}else{if(u>=h)throw TypeError(g);c(p,u++,s)}return p.length=u,p}})},c20d:function(t,e,a){var n=a("da84"),i=a("58a8").trim,s=a("5899"),r=n.parseInt,o=/^[+-]?0[Xx]/,l=8!==r(s+"08")||22!==r(s+"0x16");t.exports=l?function(t,e){var a=i(String(t));return r(a,e>>>0||(o.test(a)?16:10))}:r},cb29:function(t,e,a){var n=a("23e7"),i=a("81d5"),s=a("44d2");n({target:"Array",proto:!0},{fill:i}),s("fill")},cf5e:function(t,e,a){"use strict";a("8166")},d58f:function(t,e,a){var n=a("1c0b"),i=a("7b0b"),s=a("44ad"),r=a("50c4"),o=function(t){return function(e,a,o,l){n(a);var c=i(e),d=s(c),p=r(c.length),u=t?p-1:0,f=t?-1:1;if(o<2)while(1){if(u in d){l=d[u],u+=f;break}if(u+=f,t?u<0:p<=u)throw TypeError("Reduce of empty array with no initial value")}for(;t?u>=0:p>u;u+=f)u in d&&(l=a(l,d[u],u,c));return l}};t.exports={left:o(!1),right:o(!0)}},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,s=a("1dde"),r=s("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e25e:function(t,e,a){var n=a("23e7"),i=a("c20d");n({global:!0,forced:parseInt!=i},{parseInt:i})}}]);
//# sourceMappingURL=page-gis-covid_map~31ecd969.c039490e.js.map