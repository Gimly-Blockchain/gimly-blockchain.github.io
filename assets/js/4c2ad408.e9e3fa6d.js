"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[57142],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var m=n.createContext({}),d=function(t){var e=n.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(r),s=o,f=u["".concat(m,".").concat(s)]||u[s]||l[s]||a;return r?n.createElement(f,c(c({ref:e},p),{},{components:r})):n.createElement(f,c({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},97411:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={id:"did-comm.didcomm._constructor_",title:"DIDComm.(constructor)",hide_title:!0},m=void 0,d={unversionedId:"api/did-comm.didcomm._constructor_",id:"api/did-comm.didcomm._constructor_",title:"DIDComm.(constructor)",description:"DIDComm.(constructor)",source:"@site/docs/api/did-comm.didcomm._constructor_.md",sourceDirName:"api",slug:"/api/did-comm.didcomm._constructor_",permalink:"/docs/api/did-comm.didcomm._constructor_",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.didcomm._constructor_.md",tags:[],version:"current",frontMatter:{id:"did-comm.didcomm._constructor_",title:"DIDComm.(constructor)",hide_title:!0}},p={},u=[{value:"DIDComm.(constructor)",id:"didcommconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:u},s="wrapper";function f(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)(s,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"didcommconstructor"},"DIDComm.(constructor)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Constructor that takes a list of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/did-comm.ididcommtransport"},"IDIDCommTransport")," objects."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(transports?: IDIDCommTransport[]);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transports"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommtransport"},"IDIDCommTransport"),"[","]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," A list of ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommtransport"},"IDIDCommTransport")," objects. Defaults to ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcommhttptransport"},"DIDCommHttpTransport"))))))}f.isMDXComponent=!0}}]);