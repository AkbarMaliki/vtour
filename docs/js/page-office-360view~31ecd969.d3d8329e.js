(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-office-360view~31ecd969"],{"1d1c":function(t,e,a){var i=a("23e7"),o=a("83ab"),r=a("37e8");i({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:r})},"4de4":function(t,e,a){"use strict";var i=a("23e7"),o=a("b727").filter,r=a("1dde"),n=r("filter");i({target:"Array",proto:!0,forced:!n},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("4160"),a("159b"),a("dbb4"),a("1d1c"),a("7a82");var i=a("ade3");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),o=a("5899"),r="["+o+"]",n=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"7e12":function(t,e,a){var i=a("da84"),o=a("58a8").trim,r=a("5899"),n=i.parseFloat,s=1/n(r+"-0")!==-1/0;t.exports=s?function(t){var e=o(String(t)),a=n(e);return 0===a&&"-"==e.charAt(0)?-0:a}:n},"98b1":function(t,e,a){"use strict";a.r(e);var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#173E62"}},[a("br"),t._m(0),t.rightSide?a("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"bg-white animated fadeInDown p-3 rounded shadow"},[a("button",{staticClass:"btn btn-sm btn-danger  float-right",attrs:{type:"button"},on:{click:function(e){t.rightSide=!1}}},[t._v("x")]),a("br"),a("hr",{staticClass:"mt-1 mb-1"}),"Text"==t.dataSide.type?a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.dataSide.text)+" ")]):t._e(),"Photo"==t.dataSide.type?a("div",[a("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticStyle:{height:"300px"},attrs:{src:t.dataSide.gambar,alt:""}}),a("hr",{staticClass:"mt-2 mb-2"}),a("p",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.dataSide.detail)}})]):t._e(),"Video"==t.dataSide.type?a("div",[a("iframe",{staticStyle:{height:"300px",width:"450px"},attrs:{src:t.dataSide.youtube,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("hr",{staticClass:"mt-2 mb-2"}),a("p",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.dataSide.detail)}})]):t._e()])])])]):t._e(),t.imageload?a("div",{staticStyle:{position:"absolute",top:"0px","z-index":"1000"}},[t._m(1)]):t._e(),t.ready?a("div",{},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-10",staticStyle:{position:"relative"}},[t.imageload?a("div",{staticStyle:{position:"absolute","z-index":"100",height:"100vh",width:"100%",background:"black"}}):t._e(),a("div",{staticStyle:{height:"87vh",width:"100%"},attrs:{id:"container"}})])])]):t._e(),a("div",{staticStyle:{position:"fixed","z-index":"10000",bottom:"0px",left:"0px",width:"100vw"},style:t.showGalery?"height:150px":"height:30px;"},[a("div",{staticStyle:{height:"30px",width:"100vw"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-sm btn-dark p-1 ",attrs:{type:"button"},on:{click:function(e){t.showGalery=!t.showGalery}}},[a("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/image.svg",alt:""}}),a("img",{staticClass:"d-inline ml-3",staticStyle:{height:"20px",width:"20px",filter:"brightness(0) invert(1)"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/arrow-up.svg",alt:""}})])])])]),t.showGalery?a("div",{staticClass:"p-2 rounded-t-lg shadow",staticStyle:{background:"linear-gradient(0deg, rgba(39,45,26,0.3958625686602766) 0%, rgba(40,42,23,0.37625472552302175) 100%)"}},[a("carousel",{attrs:{scrollPerPage:!1,"per-page":6,autoplay:!0,autoplayTimeout:2e3,speed:1e3,loop:!0,paginationEnabled:!1}},t._l(t.obj,(function(e,i){return a("slide",{key:i+"imageslide",staticStyle:{height:"100px"}},[a("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100px"}},[a("div",{staticStyle:{width:"100%"}},[a("img",{staticClass:"cursor-pointer",staticStyle:{display:"block",margin:"auto",height:"100px",width:"130px"},attrs:{src:e.gambar2,alt:""},on:{click:function(e){return t.showPano(i)}}})])])])})),1)],1):t._e()])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10"},[a("p",{staticClass:"text-2xl font-bold",staticStyle:{color:"#BDA588"}},[t._v(" Preview Virtual Tours: ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark text-white",staticStyle:{width:"100vw"}},[a("div",{staticClass:"bg-blue-400 text-black text-center animated slideInLeft",staticStyle:{height:"25px"},attrs:{id:"imageprogress"}},[t._v(" Loading ")])])}],n=a("5530"),s=(a("4160"),a("159b"),a("4de4"),a("a434"),a("e25e"),a("acd8"),a("4795"),a("4b97")),c=a("0a63"),d=new s["a"],l={components:{Carousel:c["Carousel"],Slide:c["Slide"]},layout:"app_landing_estate2",data:function(){return{photo:[],listphoto:[],listHotspot:[],obj:[],imageload:!0,loadnya:[],show:!1,ready:!1,showGalery:!1,rightSide:!1,gambarUtama:"",progressbar:"0",btn:"tambah",vdata:{},info:{},dataSide:{},point:null}},methods:{getData:function(){var t=this;d.collection("app_gis_360data",!1).doc().select("select * from app_gis_360data where id='".concat(this.$route.query.idgambar,"'")).then((function(e){t.photo=e,t.$forceUpdate()}))},showPano:function(t){i.setPanorama(this.obj[t].panorama)}},mounted:function(){var t=this,e=this;this.$route.query.idpeta&&this.$route.query.idgambar||alert("query id peta dan gambar tidak terpenuhi ");var a=document.querySelector("#imageprogress");this.getData(),this.ready=!1,d.collection("app_gis_360data",!1).doc().select("select * from app_gis_360data where idpeta='".concat(this.$route.query.idpeta,"'")).then((function(o){t.listphoto=o,t.ready=!0,d.collection("app_gis_360data_hotspot",!1).doc().select("select tb1.type,tb1.initialRoute,tb1.icon,tb1.detail,tb1.text,tb1.gambar,tb1.idgambar,tb1.youtube,tb1.point,tb1.hotspot,tb1.idroute,tb1.idpeta,tb2.gambar as gambarnya ,tb1.iconnya,tb1.title,tb1.size\n                 from app_gis_360data_hotspot tb1 left join app_gis_360data tb2 on tb2.id=tb1.idgambar where tb2.idpeta='".concat(t.$route.query.idpeta,"'")).then((function(t){e.listHotspot=t,e.listphoto.forEach((function(t,a){e.obj[a]=Object(n["a"])(Object(n["a"])({},t),{},{hotspot:e.listHotspot.filter((function(e){return e.idgambar==t.id}))})}));var o=0;e.obj.forEach((function(t,a){t.id==e.$route.query.idgambar&&(o=a)}));var r,s=e.obj[o];e.obj.splice(o,1),e.obj.unshift(s),console.log("that.obj",e.obj);var c=[];r=document.querySelector("#container"),i=new PANOLENS.Viewer({container:r,reverseDragging:!1,autoHideInfospot:!1,autoRotate:!0,autoRotateSpeed:1,autoRotateActivationDuration:2e3}),i.OrbitControls.noZoom=!0,e.obj.forEach((function(t,i){e.obj[i].panorama=new PANOLENS.ImagePanorama(t.gambar),e.obj[i].panorama.addEventListener("progress",(function(t){e.imageload=!0;var i=t.progress.loaded/t.progress.total*100;a.style.width=i+"%",e.progressbar=i,100===i&&(e.imageload=!1),e.$forceUpdate()})),e.obj[i].panorama.addEventListener("load",(function(t){e.imageload=!1}))})),e.listHotspot.forEach((function(t,a){console.log("icn",t.icon),"Custom"==t.icon?(c[a]=new PANOLENS.Infospot(parseInt(t.size),t.iconnya),c[a].position.set(parseFloat(JSON.parse(t.hotspot).x),parseFloat(JSON.parse(t.hotspot).y),parseFloat(JSON.parse(t.hotspot).z)),c[a].addHoverText(t.title),c[a].addEventListener("click",(function(){"Text"==t.type||"Photo"==t.type||"Video"==t.type?(e.rightSide=!e.rightSide,e.dataSide=t,e.$forceUpdate()):"Route"==t.type&&(i.setPanorama(e.obj.filter((function(e){return e.id==t.idroute}))[0].panorama),setTimeout((function(){i.tweenControlCenter(new THREE.Vector3(parseFloat(JSON.parse(t.initialRoute).x),parseFloat(JSON.parse(t.initialRoute).y),parseFloat(JSON.parse(t.initialRoute).z)),0)}),200))})),e.obj.filter((function(e){return e.id==t.idgambar}))[0].panorama.add(c[a])):("Arrow"==t.icon?c[a]=new PANOLENS.Infospot(parseInt(t.size),PANOLENS.DataImage.Arrow):"Info"==t.icon&&(c[a]=new PANOLENS.Infospot(parseInt(t.size),PANOLENS.DataImage.Info)),c[a].position.set(parseFloat(JSON.parse(t.hotspot).x),parseFloat(JSON.parse(t.hotspot).y),parseFloat(JSON.parse(t.hotspot).z)),c[a].addHoverText(t.title),c[a].addEventListener("click",(function(){"Text"==t.type||"Photo"==t.type||"Video"==t.type?(e.rightSide=!e.rightSide,e.dataSide=t,e.$forceUpdate()):"Route"==t.type&&(i.setPanorama(e.obj.filter((function(e){return e.id==t.idroute}))[0].panorama),setTimeout((function(){i.tweenControlCenter(new THREE.Vector3(parseFloat(JSON.parse(t.initialRoute).x),parseFloat(JSON.parse(t.initialRoute).y),parseFloat(JSON.parse(t.initialRoute).z)),0)}),200))})),e.obj.filter((function(e){return e.id==t.idgambar}))[0].panorama.add(c[a]))})),setTimeout((function(){e.obj.forEach((function(t,e){i.add(t.panorama)}))}),2e3),i.addUpdateCallback((function(){})),e.$forceUpdate()}))}))}},p=l,u=a("2877"),b=Object(u["a"])(p,o,r,!1,null,null,null);e["default"]=b.exports},acd8:function(t,e,a){var i=a("23e7"),o=a("7e12");i({global:!0,forced:parseFloat!=o},{parseFloat:o})},c20d:function(t,e,a){var i=a("da84"),o=a("58a8").trim,r=a("5899"),n=i.parseInt,s=/^[+-]?0[Xx]/,c=8!==n(r+"08")||22!==n(r+"0x16");t.exports=c?function(t,e){var a=o(String(t));return n(a,e>>>0||(s.test(a)?16:10))}:n},dbb4:function(t,e,a){var i=a("23e7"),o=a("83ab"),r=a("56ef"),n=a("fc6a"),s=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,a,i=n(t),o=s.f,d=r(i),l={},p=0;while(d.length>p)a=o(i,e=d[p++]),void 0!==a&&c(l,e,a);return l}})},e25e:function(t,e,a){var i=a("23e7"),o=a("c20d");i({global:!0,forced:parseInt!=o},{parseInt:o})},e439:function(t,e,a){var i=a("23e7"),o=a("d039"),r=a("fc6a"),n=a("06cf").f,s=a("83ab"),c=o((function(){n(1)})),d=!s||c;i({target:"Object",stat:!0,forced:d,sham:!s},{getOwnPropertyDescriptor:function(t,e){return n(r(t),e)}})}}]);
//# sourceMappingURL=page-office-360view~31ecd969.d3d8329e.js.map