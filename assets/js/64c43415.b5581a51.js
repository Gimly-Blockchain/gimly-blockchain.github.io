"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[35372],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(r),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,s(s({ref:e},p),{},{components:r})):n.createElement(y,s({ref:e},p))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5083:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"data-store-json.privatekeystorejson._constructor_",title:"PrivateKeyStoreJson.(constructor)",hide_title:!0},c=void 0,l={unversionedId:"api/data-store-json.privatekeystorejson._constructor_",id:"api/data-store-json.privatekeystorejson._constructor_",title:"PrivateKeyStoreJson.(constructor)",description:"PrivateKeyStoreJson.(constructor)",source:"@site/docs/api/data-store-json.privatekeystorejson._constructor_.md",sourceDirName:"api",slug:"/api/data-store-json.privatekeystorejson._constructor_",permalink:"/docs/api/data-store-json.privatekeystorejson._constructor_",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store-json.privatekeystorejson._constructor_.md",tags:[],version:"current",frontMatter:{id:"data-store-json.privatekeystorejson._constructor_",title:"PrivateKeyStoreJson.(constructor)",hide_title:!0}},p={},u=[{value:"PrivateKeyStoreJson.(constructor)",id:"privatekeystorejsonconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:u},m="wrapper";function y(t){var e=t.components,r=(0,o.Z)(t,s);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"privatekeystorejsonconstructor"},"PrivateKeyStoreJson.(constructor)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Constructs a new instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateKeyStoreJson")," class"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(jsonStore: GimlyJsonStore, secretBox?: AbstractSecretBox | undefined);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonStore"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore")),(0,a.kt)("td",{parentName:"tr",align:null},"This serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. The JSON object does not have to be shared with other users of ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", but it can be.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secretBox"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")," ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," If this is used, then key material is encrypted, even in memory.")))))}y.isMDXComponent=!0}}]);