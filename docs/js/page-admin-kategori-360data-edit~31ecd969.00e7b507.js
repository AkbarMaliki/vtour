(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-kategori-360data-edit~31ecd969"],{"1d1c":function(t,e,a){var i=a("23e7"),o=a("83ab"),n=a("37e8");i({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:n})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("4160"),a("159b"),a("dbb4"),a("1d1c"),a("7a82");var i=a("ade3");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"7e12":function(t,e,a){var i=a("da84"),o=a("58a8").trim,n=a("5899"),r=i.parseFloat,s=1/r(n+"-0")!==-1/0;t.exports=s?function(t){var e=o(String(t)),a=r(e);return 0===a&&"-"==e.charAt(0)?-0:a}:r},acd8:function(t,e,a){var i=a("23e7"),o=a("7e12");i({global:!0,forced:parseFloat!=o},{parseFloat:o})},dbb4:function(t,e,a){var i=a("23e7"),o=a("83ab"),n=a("56ef"),r=a("fc6a"),s=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,a,i=r(t),o=s.f,d=n(i),l={},p=0;while(d.length>p)a=o(i,e=d[p++]),void 0!==a&&c(l,e,a);return l}})},dc53:function(t,e,a){"use strict";a.r(e);var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.imageload?a("div",{staticStyle:{position:"absolute",top:"0px","z-index":"1000"}},[a("div",{staticClass:"bg-dark text-white",staticStyle:{width:"100vw"}},[a("div",{staticClass:"row "},t._l(t.loadnya,(function(e,i){return a("div",{key:i+"loadnya",staticClass:"col-1 bg-blue-400 text-center animated slideInLeft",staticStyle:{height:"25px"}},[0==i?a("span",[t._v(" Loading ")]):t._e()])})),0)])]):t._e(),t.modal?a("div",[t._m(0)]):t._e(),t.rightSide?a("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"bg-white animated fadeInDown p-3 rounded shadow"},[a("button",{staticClass:"btn btn-sm btn-danger  float-right",attrs:{type:"button"},on:{click:function(e){t.rightSide=!1}}},[t._v("x")]),a("br"),a("hr",{staticClass:"mt-1 mb-1"}),"Text"==t.dataSide.type?a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.dataSide.text)+" ")]):t._e(),"Photo"==t.dataSide.type?a("div",[a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticStyle:{height:"300px"},attrs:{src:t.dataSide.gambar,alt:""}}),a("hr",{staticClass:"mt-2 mb-2"}),a("p",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.dataSide.detail)}})]):t._e(),"Video"==t.dataSide.type?a("div",[a("iframe",{staticStyle:{height:"300px",width:"450px"},attrs:{src:t.dataSide.youtube,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("hr",{staticClass:"mt-2 mb-2"}),a("p",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.dataSide.detail)}})]):t._e()])])])]):t._e(),t.ready?a("div",[a("div",{staticStyle:{height:"100vh",width:"100vw"},attrs:{id:"container"}})]):t._e(),a("div",{staticStyle:{position:"fixed","z-index":"10000",bottom:"0px",left:"0px",width:"100vw"},style:t.showGalery?"height:150px":"height:30px;"},[a("div",{staticStyle:{height:"30px",width:"100vw"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-sm btn-dark p-1 ",attrs:{type:"button"},on:{click:function(e){t.showGalery=!t.showGalery}}},[a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/image.svg",alt:""}}),a("img",{staticClass:"d-inline ml-3",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-up.svg",alt:""}})])])])]),t.showGalery?a("div",{staticClass:"p-2 rounded-t-lg shadow",staticStyle:{background:"linear-gradient(0deg, rgba(39,45,26,0.3958625686602766) 0%, rgba(40,42,23,0.37625472552302175) 100%)"}},[a("carousel",{attrs:{scrollPerPage:!1,"per-page":6,autoplay:!0,autoplayTimeout:2e3,speed:1e3,loop:!0,paginationEnabled:!1}},t._l(t.obj,(function(e,i){return a("slide",{key:i+"imageslide",staticStyle:{height:"100px"}},[a("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100px"}},[a("div",{staticStyle:{width:"100%"}},[a("img",{staticClass:"cursor-pointer",staticStyle:{display:"block",margin:"auto",height:"100px",width:"130px"},attrs:{src:e.gambar2,alt:""},on:{click:function(e){return t.showPano(i)}}})])])])})),1)],1):t._e()])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"100vh",position:"fixed",top:"0",left:"0",width:"100vw"}},[a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"bg-white p-3 rounded-lg shadow"},[t._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, aperiam? Ipsum corrupti laudantium voluptate dolor rem, veritatis eligendi dolores eum explicabo quidem maxime odit id harum nulla ad minima vel. ")])])])])])}],r=(a("1da1"),a("5530")),s=(a("96cf"),a("4160"),a("159b"),a("4de4"),a("a434"),a("e25e"),a("acd8"),a("4795"),a("d3b7"),a("4b97")),c=a("6be6"),d=a("0a63"),l=new s["a"],p={components:{Btables:c["a"],Carousel:d["Carousel"],Slide:d["Slide"]},data:function(){return{photo:[],listphoto:[],listHotspot:[],obj:[],imageload:!0,loadnya:[],modal:!1,show:!1,ready:!1,showGalery:!1,rightSide:!1,gambarUtama:"",btn:"tambah",vdata:{},info:{},dataSide:{},point:null}},methods:{getDatanya:function(){var t=this;this.ready=!1,l.collection("app_gis_360data_hotspot",!1).doc().select("select * from app_gis_360data_hotspot").then((function(e){t.datanya=e,t.ready=!0,t.$forceUpdate()}))},getData:function(){var t=this;l.collection("app_gis_360data",!1).doc().select("select * from app_gis_360data where id='".concat(this.$route.query.idgambar,"'")).then((function(e){t.photo=e,t.$forceUpdate()}))},getListPhoto:function(){var t=this,e=this;l.collection("app_gis_360data",!1).doc().select("select * from app_gis_360data").then((function(a){t.listphoto=a,l.collection("app_gis_360data_hotspot",!1).doc().select("select * from app_gis_360data_hotspot").then((function(t){e.listHotspot=t;var a=[];e.listphoto.forEach((function(t,i){a[i]=Object(r["a"])(Object(r["a"])({},t),{},{hotspot:e.listHotspot.filter((function(e){return e.idgambar==t.id}))})})),e.$forceUpdate()}))}))},getListHotspot:function(){},showPano:function(t){i.setPanorama(this.obj[t].panorama)}},mounted:function(){var t=this,e=this;this.getData(),this.getDatanya(),l.collection("app_gis_360data",!1).doc().select("select * from app_gis_360data").then((function(a){t.listphoto=a,l.collection("app_gis_360data_hotspot",!1).doc().select("select tb1.type,tb1.initialRoute,tb1.icon,tb1.detail,tb1.text,tb1.gambar,tb1.idgambar,tb1.youtube,tb1.point,tb1.hotspot,tb1.idroute,tb1.idpeta,tb2.gambar as gambarnya ,tb1.iconnya,tb1.title,tb1.size\n                 from app_gis_360data_hotspot tb1 left join app_gis_360data tb2 on tb2.id=tb1.idgambar").then((function(t){e.listHotspot=t,e.listphoto.forEach((function(t,a){e.obj[a]=Object(r["a"])(Object(r["a"])({},t),{},{hotspot:e.listHotspot.filter((function(e){return e.idgambar==t.id}))})}));var a=0;e.obj.forEach((function(t,i){t.id==e.$route.query.idgambar&&(a=i)}));var o,n=e.obj[a];e.obj.splice(a,1),e.obj.unshift(n);var s=[];o=document.querySelector("#container"),i=new PANOLENS.Viewer({container:o,cameraFov:60,reverseDragging:!1,autoHideInfospot:!1}),e.obj.forEach((function(t,a){e.obj[a].panorama=new PANOLENS.ImagePanorama(t.gambar),e.obj[a].panorama.addEventListener("progress",(function(t){e.imageload=!0,e.loadnya.push("1"),e.$forceUpdate(),console.log("image progress")})),e.obj[a].panorama.addEventListener("load",(function(t){e.imageload=!1,e.loadnya=[],e.$forceUpdate()}))})),e.listHotspot.forEach((function(t,a){console.log("icn",t.icon),"Custom"==t.icon?(s[a]=new PANOLENS.Infospot(parseInt(t.size),t.iconnya),s[a].position.set(parseFloat(JSON.parse(t.hotspot).x),parseFloat(JSON.parse(t.hotspot).y),parseFloat(JSON.parse(t.hotspot).z)),s[a].addHoverText(t.title),s[a].addEventListener("click",(function(){"Text"==t.type||"Photo"==t.type||"Video"==t.type?(e.rightSide=!e.rightSide,e.dataSide=t,e.$forceUpdate()):"Route"==t.type&&(i.setPanorama(e.obj.filter((function(e){return e.id==t.idroute}))[0].panorama),setTimeout((function(){i.tweenControlCenter(new THREE.Vector3(parseFloat(JSON.parse(t.initialRoute).x),parseFloat(JSON.parse(t.initialRoute).y),parseFloat(JSON.parse(t.initialRoute).z)),0)}),200))})),e.obj.filter((function(e){return e.id==t.idgambar}))[0].panorama.add(s[a])):("Arrow"==t.icon?s[a]=new PANOLENS.Infospot(parseInt(t.size),PANOLENS.DataImage.Arrow):"Info"==t.icon&&(s[a]=new PANOLENS.Infospot(parseInt(t.size),PANOLENS.DataImage.Info)),s[a].position.set(parseFloat(JSON.parse(t.hotspot).x),parseFloat(JSON.parse(t.hotspot).y),parseFloat(JSON.parse(t.hotspot).z)),s[a].addHoverText(t.title),s[a].addEventListener("click",(function(){"Text"==t.type||"Photo"==t.type||"Video"==t.type?(e.rightSide=!e.rightSide,e.dataSide=t,e.$forceUpdate()):"Route"==t.type&&(i.setPanorama(e.obj.filter((function(e){return e.id==t.idroute}))[0].panorama),setTimeout((function(){i.tweenControlCenter(new THREE.Vector3(parseFloat(JSON.parse(t.initialRoute).x),parseFloat(JSON.parse(t.initialRoute).y),parseFloat(JSON.parse(t.initialRoute).z)),0)}),200))})),e.obj.filter((function(e){return e.id==t.idgambar}))[0].panorama.add(s[a]))})),setTimeout((function(){e.obj.forEach((function(t,e){i.add(t.panorama)}))}),500),i.addUpdateCallback((function(){})),e.$forceUpdate()}))}))}},u=p,f=a("2877"),h=Object(f["a"])(u,o,n,!1,null,null,null);e["default"]=h.exports},e439:function(t,e,a){var i=a("23e7"),o=a("d039"),n=a("fc6a"),r=a("06cf").f,s=a("83ab"),c=o((function(){r(1)})),d=!s||c;i({target:"Object",stat:!0,forced:d,sham:!s},{getOwnPropertyDescriptor:function(t,e){return r(n(t),e)}})}}]);
//# sourceMappingURL=page-admin-kategori-360data-edit~31ecd969.00e7b507.js.map