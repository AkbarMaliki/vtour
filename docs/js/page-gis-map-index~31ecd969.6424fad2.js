(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-gis-map-index~31ecd969"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4de4":function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").filter,s=i("1dde"),r=s("filter");a({target:"Array",proto:!0,forced:!r},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"7b79":function(t,e,i){"use strict";i("b2b8")},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),n=i("23cb"),s=i("50c4");t.exports=function(t){var e=a(this),i=s(e.length),r=arguments.length,o=n(r>1?arguments[1]:void 0,i),c=r>2?arguments[2]:void 0,l=void 0===c?i:n(c,i);while(l>o)e[o++]=t;return e}},"841c":function(t,e,i){"use strict";var a=i("d784"),n=i("825a"),s=i("1d80"),r=i("129f"),o=i("14c3");a("search",1,(function(t,e,i){return[function(e){var i=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i):new RegExp(e)[t](String(i))},function(t){var a=i(e,t,this);if(a.done)return a.value;var s=n(t),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var d=o(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===d?-1:d.index}]}))},"8d2f":function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{position:"fixed",top:"10px",left:"100px","z-index":"100000",width:"50px"}},[i("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:function(e){t.listsearch=!t.listsearch}}},[i("span",{staticClass:"typcn typcn-zoom"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.listsearch,expression:"listsearch"}],staticStyle:{position:"fixed",left:"100px",top:"50px","z-index":"1000"}},[i("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.cek(e)}}},[i("div",{staticClass:"sm-form "},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",staticStyle:{width:"50vw"},attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),t._l(t.searchs,(function(e,a){return i("div",{key:a+"searchs",staticClass:"bg-white ",on:{click:function(i){return t.cari(e)}}},[i("p",{staticClass:"p-2 hover:bg-blue-300 cursor-pointer"},[t._v(" "+t._s(e.label)+" ")])])}))],2),i("div",{staticStyle:{position:"fixed",top:"10px",left:"60px","z-index":"100000",width:"50px"}},[i("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:function(e){t.listkategori=!t.listkategori}}},[i("span",{staticClass:"typcn typcn-th-large"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.listkategori,expression:"listkategori"}],staticClass:"shadow rounded-lg p-3 bg-white animated fadeInLeft",staticStyle:{position:"fixed",top:"50px",left:"60px","z-index":"100000","min-width":"30vw"}},t._l(t.listPeta,(function(e,a){return i("div",{key:a+"listpeta",staticClass:"bord   text-left pl-3 shadow rounded-lg",staticStyle:{"font-size":"13px"},on:{click:function(e){return t.bawah(e)}}},[i("span",{staticClass:"typcn typcn-map",on:{click:function(e){return t.parent(e)}}},[i("span",{staticClass:"pl-2"},[t._v(t._s(e.kategori))])]),i("span",{staticClass:"typcn typcn-arrow-down float-right"}),i("ul",{staticClass:"isaktif  anim mb-3  animated slideInLeft "},[i("li",{staticClass:"bord  text-left p-1 shadow",staticStyle:{"font-size":"13px"}},[i("p",{staticClass:"p-1",on:{click:function(e){return t.muncul(e)}}},[i("input",{attrs:{type:"checkbox",id:"marker",value:"marker"},on:{click:function(i){return t.loadmarker(e.id)}}}),i("label",{attrs:{for:"marker"}}),i("span",{staticClass:"typcn typcn-pin"}),t._v("Custom Marker ")]),i("div",{staticClass:"isaktif"},t._l(t.listMarker,(function(a,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:a.id_peta==e.id,expression:"item2.id_peta==item.id"}],key:n+"icon",staticClass:"hover:bg-green-400 text-xs pl-3"},[i("span",{staticClass:"typcn typcn-arrow-right ml-1"}),t._v(" "+t._s(a.title)+" ")])})),0)]),i("li",{staticClass:"bord  text-left p-1 shadow",staticStyle:{"font-size":"13px"}},[i("p",{on:{click:function(e){return t.muncul(e)}}},[i("span",{staticClass:"typcn typcn-map"}),t._v(" Geojson ")]),i("div",{staticClass:"isaktif"},t._l(t.listGeojson,(function(a,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:a.id_peta==e.id,expression:"item3.id_peta==item.id"}],key:n+"icon",staticClass:"hover:bg-green-400"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.layers["geojson"+a.id+"on"],expression:"layers['geojson'+item3.id+'on']"}],staticClass:"ml-3",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.layers["geojson"+a.id+"on"])?t._i(t.layers["geojson"+a.id+"on"],null)>-1:t.layers["geojson"+a.id+"on"]},on:{click:function(e){return t.loadgeojson(a)},change:function(e){var i=t.layers["geojson"+a.id+"on"],n=e.target,s=!!n.checked;if(Array.isArray(i)){var r=null,o=t._i(i,r);n.checked?o<0&&t.$set(t.layers,"geojson"+a.id+"on",i.concat([r])):o>-1&&t.$set(t.layers,"geojson"+a.id+"on",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.layers,"geojson"+a.id+"on",s)}}}),i("span",{staticClass:"typcn typcn-arrow-right ml-1"}),t._v(" "+t._s(a.title)+" ")])})),0)])])])})),0),i("div",{staticStyle:{position:"fixed",top:"10px",right:"40px","z-index":"100000","min-width":"50px"}},[i("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:function(e){t.tilem=!t.tilem}}},[i("span",{staticClass:"typcn typcn-map"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.tilem,expression:"tilem"}],staticClass:"shadow rounded-lg p-3 bg-white animated fadeIn",staticStyle:{position:"fixed",top:"50px",right:"10px","z-index":"100000","min-width":"150px"}},[i("p",{staticClass:"p-1 textxs"},[t._v("Layer Tile : ")]),t._l(t.tilemap,(function(e,a){return i("div",{key:a+"tilemap",staticClass:"text-sm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pilihtilemap,expression:"pilihtilemap"}],attrs:{type:"radio",id:e},domProps:{value:e,checked:t._q(t.pilihtilemap,e)},on:{change:function(i){t.pilihtilemap=e}}}),i("label",{staticClass:"ml-2",attrs:{for:e}},[t._v(" "+t._s(e.tile))]),i("br")])}))],2),t.ready?i("div",[i("div",{staticStyle:{height:"100vh"},attrs:{id:"mapid"}})]):t._e()])},s=[],r=i("1da1"),o=(i("96cf"),i("4795"),i("841c"),i("ac1f"),i("4de4"),i("4160"),i("159b"),i("99af"),i("9911"),i("5319"),i("cb29"),i("b64b"),i("caad"),i("c975"),i("4b97")),c=(i("2ef0"),i("bc3a")),l=i.n(c),d=new o["a"],p={data:function(){return{ready:!1,listsearch:!1,search:"",searchs:[],center:[-2.3662494,115.4641079],loading:!0,listPeta:[],listMarker:[],listGeojson:[],listgeojson:[],geojson:[],geoJsonLayer:{},layers:{},markers:{},listkategori:!1,tilem:!1,tilemap:[{type:"openmap",tile:"open streetmap",link:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{type:"google",tile:"street",link:"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"},{type:"google",tile:"hybrid",link:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"},{type:"google",tile:"satelite",link:"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"}],pilihtilemap:{type:"openmap",tile:"open streetmap",link:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},watch:{pilihtilemap:function(){var t=this;this.ready=!1,a=null,setTimeout((function(){t.loadmap()}),1e3)},search:function(){}},methods:{events:function(t){alert(t)},cek:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,a=new GeoSearch.OpenStreetMapProvider,e.next=4,a.search({query:i.search});case 4:n=e.sent,t.searchs=n;case 6:case"end":return e.stop()}}),e)})))()},cari:function(t){console.log(t),a.panTo(new L.LatLng(t.y,t.x)),this.searchs=[]},bawah:function(t){t.target.querySelectorAll("ul").length>0&&t.target.querySelectorAll("ul")[0].classList.toggle("isaktif")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},parent:function(t){t.target.parentNode.click()},loadListPeta:function(){var t=this;d.collection("app_gis_kategori").doc().get("*","order by id").then((function(e){t.listPeta=e,t.$forceUpdate()})),d.collection("app_gis_marker").doc().get("*","order by id").then((function(e){t.listMarker=e,t.$forceUpdate()})),d.collection("app_gis_geojson").doc().get("*","order by id").then((function(e){t.listGeojson=e,t.$forceUpdate()}))},loadmarker:function(t){var e=this,i=this.listMarker;i=i.filter((function(e){return e.id_peta==t})),i.length>0&&i.forEach((function(t,i){if(a.hasLayer(e.markers["marker"+t.id]))return a.removeLayer(e.markers["marker"+t.id]),void(e.markers["marker"+t.id+"on"]=!1);if(e.markers["marker"+t.id+"on"]=!0,console.log("listicon",t),0==i&&a.panTo(new L.LatLng(t.lat,t.lng)),"icon"==t.kategori){console.log("icon",t);var n=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)}))}else if("gambar"==t.kategori){console.log("gambar",t);n=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{maxWidth:500}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.marker([t.lat,t.lng],{icon:n}).bindTooltip('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                            ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                        </div>\n                        "),{permanent:!1,sticky:!0}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)}))}else"radius"==t.kategori&&(console.log("radius",t),"click"==t.popup?e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                        <div class="text-xs">\n                            <div class="font-bold uppercase">'.concat(t.title,'</div>\n                            <div class="text-justify">').concat(t.deskripsi,"</div>\n                        </div>\n                        "),{maxWidth:500}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})):e.markers["marker"+t.id]=L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                      <div class="text-xs">\n                          <div class="font-bold uppercase">'.concat(t.title,'</div>\n                          <div class="text-justify">').concat(t.deskripsi,"</div>\n                      </div>\n                      "),{permanent:!1,sticky:!0}).addTo(a).addEventListener("click",(function(){"false"!=t.event&&t.event&&e.events(t.event)})))}))},loadgeojson:function(t){var e=this;l.a.get(t.geojson).then((function(i){if(a.hasLayer(e.layers["geojson"+t.id]))return a.removeLayer(e.layers["geojson"+t.id]),void(e.layers["geojson"+t.id+"on"]=!1);e.layers["geojson"+t.id]=L.geoJSON(i.data).addTo(a),e.layers["geojson"+t.id+"on"]=!0,"Polygon"==i.data.features[0].geometry.type?a.panTo(new L.LatLng(i.data.features[0].geometry.coordinates[0][0][1],i.data.features[0].geometry.coordinates[0][0][0])):a.panTo(new L.LatLng(i.data.features[0].geometry.coordinates[0][1],i.data.features[0].geometry.coordinates[0][0])),e.loadGeojsonLayer(e.layers["geojson"+t.id]),e.loading=!1,e.$forceUpdate()}))},loadmap:function(){var t=this;this.ready=!0,a=null,setTimeout((function(){a=new L.Map("mapid"),a.setView(t.center,13),"openmap"==t.pilihtilemap.type?L.tileLayer(t.pilihtilemap.link,{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicnVkeXNrYSIsImEiOiJja3B1cGY0OGwxOTlxMm5xdnJ6dTU3dXZiIn0.vqqfQlT3-d3KF9KNzemANg"}).addTo(a):"google"==t.pilihtilemap.type&&L.tileLayer(t.pilihtilemap.link,{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(a)}),1e3)},loadGeojsonLayer:function(t){t.eachLayer((function(t){setTimeout((function(){if(t["_icon"]){var e="";t.feature.properties["marker-symbol"]&&(e=e+"-"+t.feature.properties["marker-symbol"]),t["_icon"].src="https://a.tiles.mapbox.com/v4/marker/pin-m".concat(e,"+").concat(t.feature.properties["marker-color"].replace("#",""),"@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A"),t["_icon"].style.height="80px",t["_icon"].style.width="30px"}"Polygon"==t.feature.geometry.type&&(console.log("polygon"),t["_path"].setAttribute("fill",t.feature.properties.fill),t["_path"].addEventListener("mouseover",(function(){t["_path"].setAttribute("fill","#000")})),t["_path"].addEventListener("mouseout",(function(){t["_path"].setAttribute("fill",t.feature.properties.fill)})),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke),t["_path"].setAttribute("fill-opacity",t.feature.properties["fill-opacity"])),"LineString"==t.feature.geometry.type&&(console.log("LineString"),t["_path"].setAttribute("stroke-opacity",t.feature.properties["stroke-opacity"]),t["_path"].setAttribute("stroke-width",t.feature.properties["stroke-width"]),t["_path"].setAttribute("stroke",t.feature.properties.stroke))}),1e3);var e=["stroke","stroke-width","stroke-opacity","fill","fill-opacity","marker-color","marker-size","marker-symbol"],i='<table class="table table-sm table-striped">';Object.keys(t.feature.properties).filter((function(t){if(!e.includes(t))return t})).forEach((function(e){i+="\n                  ".concat(-1!=t.feature.properties[e].indexOf("http")?'<div><a href="'.concat(t.feature.properties[e],'" target="__blank"><img class="viewer" style="height:100px;width:100px;" src="').concat(t.feature.properties[e],'"></a></div>'):'\n                    <tr><td class="capitalize">'.concat(e,"</td><td>").concat(t.feature.properties[e],"</td></tr>                  \n                  "),"\n                  ")})),t.bindTooltip(i+"</table>",{permanent:!1,sticky:!0})}))}},mounted:function(){var t=this;this.loadListPeta(),setTimeout((function(){t.loadmap()}),2e3)},metaInfo:{title:"Add Marker dynamic",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.css",integrity:"sha384-P9DABSdtEY/XDbEInD3q+PlL+BjqPCXGcF8EkhtKSfSTr/dS5PBKa9+/PMkW2xsY",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""},{src:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.js",integrity:"sha384-N2S8y7hRzXUPiepaSiUvBH1ZZ7Tc/ZfchhbPdvOE5v3aBBCIepq9l+dBJPFdo1ZJ",crossorigin:"anonymous"},{src:"https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"}]}},u=p,f=(i("7b79"),i("2877")),m=Object(f["a"])(u,n,s,!1,null,"e641af5a",null);e["default"]=m.exports},"99af":function(t,e,i){"use strict";var a=i("23e7"),n=i("d039"),s=i("e8b5"),r=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),d=i("65f0"),p=i("1dde"),u=i("b622"),f=i("2d00"),m=u("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=p("concat"),k=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},b=!v||!y;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,i,a,n,s,r=o(this),p=d(r,0),u=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],k(s)){if(n=c(s.length),u+n>h)throw TypeError(g);for(i=0;i<n;i++,u++)i in s&&l(p,u,s[i])}else{if(u>=h)throw TypeError(g);l(p,u++,s)}return p.length=u,p}})},b2b8:function(t,e,i){},c975:function(t,e,i){"use strict";var a=i("23e7"),n=i("4d64").indexOf,s=i("a640"),r=[].indexOf,o=!!r&&1/[1].indexOf(1,-0)<0,c=s("indexOf");a({target:"Array",proto:!0,forced:o||!c},{indexOf:function(t){return o?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,i){"use strict";var a=i("23e7"),n=i("4d64").includes,s=i("44d2");a({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cb29:function(t,e,i){var a=i("23e7"),n=i("81d5"),s=i("44d2");a({target:"Array",proto:!0},{fill:n}),s("fill")}}]);
//# sourceMappingURL=page-gis-map-index~31ecd969.6424fad2.js.map