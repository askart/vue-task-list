(function(t){function e(e){for(var n,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({list:"list"}[t]||t)+"."+{list:"598aa8c2"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={list:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({list:"list"}[t]||t)+"."+{list:"b2cd4b9a"}[t]+".css",i=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],f.parentNode.removeChild(f),r(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-task-list/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"373a":function(t,e,r){"use strict";r("7f6b")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Создание задачи")]),t._v(" | "),r("router-link",{attrs:{to:"/list"}},[t._v("Список задач")])],1),r("router-view")],1)},i=[],o=(r("5c0b"),r("2877")),s={},u=Object(o["a"])(s,a,i,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"task-form"},[r("form",{staticClass:"task-form__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"task-form__form__item"},[r("label",{attrs:{for:"task-form__form__item__title"}},[t._v("Название задачи")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],attrs:{id:"task-form__form__item__title",name:"title",rows:"2",cols:"303",required:""},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}})]),r("div",{staticClass:"task-form__form__item"},[r("label",{attrs:{for:"task-form__form__item__description"}},[t._v("Описание задачи")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{id:"task-form__form__item__description",name:"description",rows:"3",cols:"33",required:""},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})]),t._m(0)])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"task-form__form__item"},[r("input",{attrs:{type:"submit",value:"Создать задачу"}})])}],p={name:"TaskForm",data:function(){return{task:{title:"",description:""}}},methods:{handleSubmit:function(){this.$store.dispatch("Tasks/actionAddTask",this.task),this.$router.push({name:"list"})}}},m=p,v=(r("373a"),Object(o["a"])(m,d,f,!1,null,"336a6e46",null)),h=v.exports;n["a"].use(l["a"]);var _=[{path:"/",name:"form",component:h},{path:"/list",name:"list",component:function(){return r.e("list").then(r.bind(null,"e53e"))}}],g=new l["a"]({routes:_}),b=g,k=r("2f62"),y=r("5530"),w=r("1da1");r("96cf"),r("a4d3"),r("e01a"),r("4de4"),r("caad"),r("2532");function T(){return{list:[{id:1,title:"z",description:"wert"},{id:2,title:"y",description:"rtyu"},{id:3,title:"x",description:"yuio"}],lastId:3,loading:!1}}var x={getList:function(t){return t.list},getLoadingState:function(t){return t.loading}},O={addTask:function(t,e){var r=e.title,n=e.description;t.lastId+=1,t.list.push({id:t.lastId,title:r,description:n})},removeTasks:function(t,e){var r=e.ids;t.list=t.list.filter((function(t){return!r.includes(t.id)}))}};function j(){return P.apply(this,arguments)}function P(){return P=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout((function(){return t()}),3e3)})));case 1:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}var S={actionLoadTasks:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,r.loading=!0,t.next=4,j();case 4:r.loading=!1;case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),actionAddTask:function(t,e){var r=t.commit;r("addTask",e)},actionRemoveTasks:function(t,e){var r=t.commit;r("removeTasks",e)}},C=Object(y["a"])({},T()),E={namespaced:!0,state:C,getters:x,mutations:O,actions:S};n["a"].use(k["a"]);var A=new k["a"].Store({state:{},mutations:{},actions:{},modules:{Tasks:E}});n["a"].config.productionTip=!1,new n["a"]({router:b,store:A,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"7f6b":function(t,e,r){},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.69aa0620.js.map