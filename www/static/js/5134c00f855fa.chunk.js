/*! For license information please see 5134c00f855fa.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhexo_pro_client=self.webpackChunkhexo_pro_client||[]).push([[513],{3513:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(6540),o=r(1923),i=r(4976),a=r(9036),c=r(4135),u=r(6789),l=r(2702),f=r(1198),s=r(6044),h=r(1575),p=r(6961),d=r(6510);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",g={};function b(){}function w(){}function x(){}var E={};l(E,a,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(P([])));_&&_!==r&&n.call(_,a)&&(E=_);var k=x.prototype=b.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==y(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=s(e,r,n);if("normal"===l.type){if(o=n.done?m:p,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=s(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return w.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},A(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(k),l(k,u,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function m(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function w(){var t=(0,n.useRef)(null),e=g((0,n.useState)([]),2),r=e[0],y=e[1],b=(0,d.A)(),w=g((0,n.useState)(1),2),x=w[0],E=w[1],L=function(){var t,e=(t=v().mark((function t(e){var r,n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Ay.get("/hexopro/api/pages/"+e._id+"/remove");case 3:return t.next=5,o.Ay.get("/hexopro/api/pages/list?deleted="+!1);case 5:r=t.sent,n=r.data.map((function(t,e){return{_id:t._id,title:t.title,cover:t.cover,date:t.date,permalink:t.permalink,updated:t.updated,key:e+1}})),y(n),E(x),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a.Ay.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),_=[{title:b["content.articleList.table.cover"],dataIndex:"cover",render:function(t,e,r){return n.createElement(c.A,{width:64,height:42.56,src:e.cover})}},{title:b["content.articleList.table.title"],dataIndex:"title",filterDropdown:function(e){var r=e.setSelectedKeys,o=e.selectedKeys,i=e.confirm;return n.createElement("div",{className:"arco-table-custom-filter"},n.createElement(u.A.Search,{ref:t,placeholder:"Please enter name",value:o[0]||"",onChange:function(t){r(t.target.value?[t.target.value]:[])},onSearch:function(){i()}}))},onFilter:function(t,e){return!t||-1!==e.title.indexOf(t)},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return t.current.focus()}),150)}},{title:b["content.articleList.table.permalink"],dataIndex:"permalink",render:function(t,e,r){return n.createElement("a",{href:decodeURIComponent(e.permalink),target:"_blank",rel:"noreferrer"},decodeURIComponent(e.permalink))}},{title:b["content.articleList.table.date"],dataIndex:"date"},{title:b["content.articleList.table.updated"],dataIndex:"updated"},{title:b["content.articleList.table.option"],dataIndex:"option",render:function(t,e,r){return n.createElement(l.A,null,n.createElement(i.N_,{to:"/page/".concat(e._id)},n.createElement(f.Ay,{type:"primary",size:"small"},b["content.articleList.btn.edit"])),n.createElement(s.A,{title:b["editor.header.pop.title"],description:b["page.editor.header.pop.des"],onConfirm:function(){a.Ay.info({content:"ok"}),L(e)},onCancel:function(){a.Ay.error({content:"cancel"})}},n.createElement(f.Ay,{type:"dashed",size:"small"},b["content.articleList.btn.delete"])))}}];return(0,n.useEffect)((function(){return o.Ay.get("/hexopro/api/pages/list?deleted="+!1).then((function(t){var e=t.data.map((function(t,e){return{_id:t._id,title:t.title,cover:t.cover,date:t.date,permalink:t.permalink,updated:t.updated,key:e+1}}));y(e)})),function(){}}),[]),n.createElement("div",null,n.createElement(h.A,{style:{height:"100%"}},n.createElement(p.A,{columns:_,dataSource:r,pagination:{current:x},onChange:function(t){E(t.current)}})))}}}]);
//# sourceMappingURL=5134c00f855fa.chunk.js.map