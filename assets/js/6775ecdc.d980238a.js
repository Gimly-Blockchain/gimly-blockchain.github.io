"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[77033],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24328:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",title:"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method",hide_title:!0},l=void 0,u={unversionedId:"api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",id:"api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",title:"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method",description:"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method",source:"@site/docs/api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount.md",sourceDirName:"api",slug:"/api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",permalink:"/docs/api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store-json.datastorejson.datastoreormgetverifiablepresentationscount.md",tags:[],version:"current",frontMatter:{id:"data-store-json.datastorejson.datastoreormgetverifiablepresentationscount",title:"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method",hide_title:!0}},d={},c=[{value:"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method",id:"datastorejsondatastoreormgetverifiablepresentationscount-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:c},m="wrapper";function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)(m,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"datastorejsondatastoreormgetverifiablepresentationscount-method"},"DataStoreJson.dataStoreORMGetVerifiablePresentationsCount() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"dataStoreORMGetVerifiablePresentationsCount(args: FindArgs<TPresentationColumns>, context: AuthorizedDIDContext): Promise<number>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.findargs"},"FindArgs"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.tpresentationcolumns"},"TPresentationColumns"),">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.authorizeddidcontext"},"AuthorizedDIDContext")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","number",">"))}f.isMDXComponent=!0}}]);