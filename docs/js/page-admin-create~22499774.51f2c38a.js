(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-create~22499774"],{be78:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"p-4 bg-white"},[n("button",{staticClass:"btn btn-sm ",class:"create"==t.mode?"btn-success":"btn-dark ",attrs:{type:"button"},on:{click:function(e){return t.gantiMode("create")}}},[t._v("Create "),n("span",{staticClass:"typcn typcn-pen"})]),n("button",{staticClass:"btn btn-sm ",class:"edit"==t.mode?"btn-warning":"btn-dark ",attrs:{type:"button"},on:{click:function(e){return t.gantiMode("edit")}}},[t._v("Edit "),n("span",{staticClass:"typcn typcn-edit"})]),n("button",{staticClass:"btn btn-sm ",class:"delete"==t.mode?"btn-danger":"btn-dark ",attrs:{type:"button"},on:{click:function(e){return t.gantiMode("delete")}}},[t._v("DELETE "),n("span",{staticClass:"typcn typcn-cancel"})]),n("button",{staticClass:"btn btn-sm ",class:"free"==t.mode?"btn-primary":"btn-dark ",attrs:{type:"button"},on:{click:function(e){return t.gantiMode("free")}}},[t._v("FREE MOVE "),n("span",{staticClass:"typcn typcn-map"})]),n("button",{staticClass:"btn btn-sm btn-style9   waves-effect",attrs:{type:"button"},on:{click:t.getPoly}},[t._v("get poly")])]),n("div",{staticStyle:{height:"100vh"},attrs:{id:"mapid"}})])},a=[],o=(n("4795"),n("4c1c")),i=n.n(o),c=new i.a,r={data:function(){return{mode:"free"}},methods:{gantiMode:function(t){this.mode=t,c.mode("create"==this.mode?o["CREATE"]:"edit"==this.mode?o["EDIT"]:"delete"==this.mode?o["DELETE"]:o["NONE"]),this.$forceUpdate()},getPoly:function(){console.log(c)}},mounted:function(){setTimeout((function(){var t=new L.Map("mapid");t.addLayer(c),t.setView([51.505,-.09],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicnVkeXNrYSIsImEiOiJja3B1cGY0OGwxOTlxMm5xdnJ6dTU3dXZiIn0.vqqfQlT3-d3KF9KNzemANg"}).addTo(t),c.on("markers",(function(t){console.log(t.eventType),console.log("LatLngs:",t.latLngs,"Polygons:",c.size())})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&c.cancel()}))}),2e3)},metaInfo:{title:"Cuaca API",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""}]}},l=r,d=n("2877"),p=Object(d["a"])(l,s,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=page-admin-create~22499774.51f2c38a.js.map