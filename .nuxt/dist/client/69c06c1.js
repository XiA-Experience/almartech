(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(138).default)("2dbbebe2",content,!0,{sourceMap:!1})},355:function(t,e,r){"use strict";r(302)},356:function(t,e,r){var n=r(137)((function(i){return i[1]}));n.push([t.i,".container[data-v-2bd00674]{align-items:center;background-attachment:fixed;background-size:cover;display:flex;font-family:Arial,Helvetica,sans-serif;height:100vh;justify-content:center;overflow:auto}.contenedor-texto[data-v-2bd00674]{width:800px}.texto[data-v-2bd00674]{border:2px solid hsla(0,0%,100%,.5);border-radius:5px;color:#fff;padding:20px 60px;text-align:center;text-align:justify}",""]),n.locals={},t.exports=n},361:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{prismicData:{}}},mounted:function(){var t=this;this.$prismic.api.getByUID("index","index").then((function(e){console.log("Respuesta de Prismic:",e),t.prismicData=e})).catch((function(t){console.error("Error al obtener datos de Prismic",t)}))}},o=(r(355),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.prismicData.data?e("div",{staticClass:"container",style:{backgroundImage:"url("+t.prismicData.data.background_image.url+")"}},[e("div",{staticClass:"contenedor-texto"},[e("div",{staticClass:"texto"},[e("prismic-rich-text",{attrs:{field:t.prismicData.data.title_text}}),t._v(" "),e("prismic-rich-text",{staticStyle:{"font-size":"20px"},attrs:{field:t.prismicData.data.text_test}})],1)])]):t._e()}),[],!1,null,"2bd00674",null);e.default=component.exports}}]);