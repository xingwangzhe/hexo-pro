"use strict";(self.webpackChunkhexo_pro=self.webpackChunkhexo_pro||[]).push([[241,874],{6579:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(6540),r=n(2248),a=n.n(r),i=n(1923);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function s(e){var t=e.initValue,n=e.handleChangeContent,r=e.handleUploadingImage;var u=l((0,o.useState)(void 0),2),s=u[0],f=u[1],d=l((0,o.useState)(!1),2),m=d[0],h=d[1],p=l((0,o.useState)(!1),2),g=p[0],y=p[1];return(0,o.useEffect)((function(){return r(m),function(){h(void 0)}}),[m]),(0,o.useEffect)((function(){var e=new(a())("vditor",{theme:"classic",height:"100%",width:"100%",toolbarConfig:{pin:!1},after:function(){e.setValue(t);var n=document.querySelector(".vditor-toolbar"),o=document.getElementById("vditor");n&&o&&(n.style.width="".concat(o.clientWidth,"px"));var r=document.querySelector("vditor-content"),a=document.querySelector(".editor-header");console.log("editorHeader",a),console.log("content",r),r&&n&&a&&(console.log("走到这里了"),r.style.cssText="margin-top: ".concat(n.clientHeight+a.clientHeight,"px !important;")),window.addEventListener("resize",(function(){n&&o&&(n.style.width="".concat(o.clientWidth,"px"),r&&(r.style.marginTop="".concat(n.clientHeight+a.clientHeight,"px !important;")))}))},focus:function(e){y(!0)},blur:function(e){y(!1)},upload:{multiple:!1,error:function(e){console.log("err",e)},validate:function(e){return console.log("validate",e),!0},format:function(e,t){return console.log("format",e),t},file:function(e){return console.log("file",e),null},handler:function(t){console.log(t);var n,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(t);try{var r=function(){var t=n.value;h(!0);var o=new FileReader;o.onload=function(n){var o=t.name;(function(e,t){return new Promise((function(n,o){i.Ay.post("/hexopro/api/images/upload",{data:e,filename:t}).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))})(n.target.result,o).then((function(t){console.log("update=> ",t),t.code=0;t.msg,t.src;return setTimeout((function(){var n=e.getValue(),o=e.getCursorPosition();console.log("cursorPosition",o),g?e.setValue(n+"\n![alt text](".concat(t.src,")")):e.insertValue("\n![alt text](".concat(t.src,")"))}),300),null})).catch((function(e){return console.error("Image upload failed: ",e),e})).finally((function(){h(!1)}))},o.readAsDataURL(t)};for(o.s();!(n=o.n()).done;)r()}catch(e){o.e(e)}finally{o.f()}return null}},input:function(t){n(e.getValue())},toolbar:[{name:"emoji"},{name:"headings"},{name:"bold"},{name:"italic"},{name:"strike"},{name:"line"},{name:"quote"},{name:"list"},{name:"ordered-list"},{name:"check"},{name:"outdent"},{name:"indent"},{name:"code"},{name:"inline-code"},{name:"inline-code"},{name:"insert-after"},{name:"insert-before"},{name:"undo"},{name:"redo"},{name:"upload"},{name:"link"},{name:"table"},{name:"edit-mode"},{name:"preview",className:"toolbar-right"},{name:"fullscreen",className:"toolbar-right"},{name:"outline",className:"toolbar-right"},{name:"export",className:"toolbar-right"}]});return function(){null==s||s.destroy(),f(void 0)}}),[t]),o.createElement("div",{id:"vditorWapper",style:{width:"100%",height:"100%",flex:1,backgroundColor:"blue",borderRadius:"0px"}},o.createElement("div",{style:{width:"100%",height:"100%"},id:"vditor",className:"vditor"}))}},5915:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(8602),r=n(3598),a=n(7152),i=n(6370),l=n(1198),c=n(6044),u=n(3532),s=n(6476),f=n(6540),d=n(6942),m=n.n(d);function h(e){var t=e.initTitle,n=e.isPage,d=e.isDraft,h=e.popTitle,p=e.popDes,g=e.className,y=void 0===g?"":g,v=e.handleChangeTitle,b=e.handleSettingClick,S=e.handleRemoveSource,w=e.handlePublish;return f.createElement(a.A,{style:{width:"100%",borderBottomColor:"black",borderBottom:"1px solid gray",backgroundColor:"white"},align:"middle",className:m()("editor-header",y)},f.createElement(i.A,{span:12},f.createElement("input",{style:{width:"100%",height:60,border:"none",outline:"none",boxSizing:"border-box",fontSize:28,fontWeight:500,marginLeft:10},value:t,onChange:function(e){v(e.target.value)}})),f.createElement(i.A,{span:2,offset:9,style:{alignItems:"center",justifyContent:"center",paddingLeft:50}},f.createElement(s.A,null,f.createElement(l.Ay,{type:"default",icon:f.createElement(o.A,null),onClick:function(e){return b(e)}}),d&&!n?f.createElement(l.Ay,{type:"primary",onClick:w},"发布博客"):f.createElement(l.Ay,{type:"default",onClick:w},"转为草稿"),f.createElement(c.A,{title:h,description:p,onConfirm:function(){u.Ay.info({content:"ok"}),S()},onCancel:function(){u.Ay.error({content:"cancel"})}},f.createElement(l.Ay,{type:"default",icon:f.createElement(r.A,null)})))))}},241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(1923),r=n(6540),a=n(7767),i=n(1198),l=n(2543),c=n.n(l),u=n(2423),s=n(6579),f=n(5915),d=n(6510),m=n(6874);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}i.Ay.Group;const y=function(){var e=(0,a.Zp)(),t=(0,r.useRef)(null),n=(0,a.g)()._id,i=p((0,r.useState)({isDraft:!0,source:null}),2),l=i[0],g=i[1],y=p((0,r.useState)({}),2),v=y[0],b=y[1],S=p((0,r.useState)({tags:[],categories:[],frontMatter:{}}),2),w=S[0],A=S[1],C=p((0,r.useState)(""),2),x=C[0],E=C[1],k=p((0,r.useState)(""),2),P=k[0],j=k[1],I=p((0,r.useState)(""),2),T=(I[0],I[1]),M=p((0,r.useState)(""),2),D=M[0],N=M[1],V=p((0,r.useState)({}),2),O=(V[0],V[1]),R=p((0,r.useState)(!1),2),U=R[0],_=R[1],H=p((0,r.useState)(!1),2),q=(H[0],H[1],p((0,r.useState)(!1),2)),L=(q[0],q[1],(0,d.A)()),W=function(e){return new Promise((function(t,n){o.eu.get("/hexopro/api/posts/"+e).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))},z=function(e,t){if("postMeta"!=e)if("tagsCategoriesAndMetadata"!=e){if("post"==e){var n=t.raw.split("---"),o=""===n[0]?2:1,r=n.slice(o).join("---").trim();j(t.title),T(r),N(r),g(t)}}else b(t);else A(t)},B=function(){if(l.isDraft)return new Promise((function(e,t){console.log("publish blog"),o.eu.post("/hexopro/api/posts/"+n+"/publish").then((function(t){e(t.data)})).catch((function(e){t(e)}))}))};return(0,r.useEffect)((function(){W(n).then((function(e){if("object"===h(e)&&null!=e&&"_content"in e){var t=e._content;E(t)}})).catch((function(e){E(e)}))}),[]),(0,r.useEffect)((function(){var e={post:W(n),tagsCategoriesAndMetadata:new Promise((function(e,t){o.eu.get("/hexopro/api/tags-categories-and-metadata").then((function(t){e(t.data)})).catch((function(e){t(e)}))})),settings:new Promise((function(e,t){o.eu.get("/hexopro/api/settings/list").then((function(t){e(t.data)})).catch((function(e){t(e)}))})),postMeta:new Promise((function(e,t){o.eu.get("/hexopro/api/postMeta/"+n).then((function(t){e(t.data)})).catch((function(e){t(e)}))}))};Object.keys(e).forEach((function(t){Promise.resolve(e[t]).then((function(e){var n={};n[t]=e,O(n),z&&z(t,e)}))}))}),[]),(0,r.useEffect)((function(){var e=c().debounce((function(e){!function(e){console.log(e),new Promise((function(t,r){o.eu.post("/hexopro/api/posts/"+n,e).then((function(e){t(e.data)})).catch((function(e){r(e)}))}))}(e)}),1e3,{trailing:!0,loading:!0});t.current=e}),[]),r.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"blue",overflowY:"auto"}},r.createElement(f.default,{isPage:!1,isDraft:l.isDraft,handlePublish:function(){B().then((function(e){g(e)})).catch((function(e){console.log(e)}))},className:m.default["editor-header"],initTitle:P,popTitle:L["editor.header.pop.title"],popDes:L["page.editor.header.pop.des"],handleChangeTitle:function(e){if(e.target.value!=P){j(e.target.value),console.log(l.source);var n=l.source.split("/");n[n.length-1]=e.target.value+".md";var o=n.join("/");t.current({title:e.target.value,source:o})}},handleSettingClick:function(e){return _(!0)},handleRemoveSource:function(){new Promise((function(e,t){o.eu.get("/hexopro/api/posts/"+n+"/remove").then((function(t){e(t.data)})).catch((function(e){t(e)}))}));l.isDraft?e("/posts/drafts"):e("/posts/blogs")}}),r.createElement("div",{style:{backgroundColor:"red",width:"100%",flex:1,padding:0,border:"none"}},r.createElement(s.A,{initValue:x,handleChangeContent:function(e){e!==D&&(N(e),t.current({_content:e}))},handleUploadingImage:function(e){console.log("handleUploadingImage",e)}})),r.createElement(u.PostSettings,{visible:U,setVisible:_,tagCatMeta:v,setTagCatMeta:b,postMeta:w,setPostMeta:A,handleChange:function(e){return console.log("update",e),new Promise((function(t,r){o.eu.post("/hexopro/api/posts/"+n,e).then((function(e){t(e.data)})).catch((function(e){r(e)}))}))}}))}},6874:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o={}}}]);
//# sourceMappingURL=2419478aaae24.chunk.js.map