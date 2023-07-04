"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[35610],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,y=s["".concat(p,".").concat(d)]||s[d]||f[d]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28104:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"core-types.iverifyresult",title:"IVerifyResult interface",hide_title:!0},p=void 0,u={unversionedId:"api/core-types.iverifyresult",id:"api/core-types.iverifyresult",title:"IVerifyResult interface",description:"IVerifyResult interface",source:"@site/docs/api/core-types.iverifyresult.md",sourceDirName:"api",slug:"/api/core-types.iverifyresult",permalink:"/docs/api/core-types.iverifyresult",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.iverifyresult",title:"IVerifyResult interface",hide_title:!0}},c={},s=[{value:"IVerifyResult interface",id:"iverifyresult-interface",level:2},{value:"Properties",id:"properties",level:2}],f={toc:s},d="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iverifyresult-interface"},"IVerifyResult interface"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Encapsulates the response object to verifyPresentation method after verifying a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"W3C Verifiable Presentation")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IVerifyResult\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iverifyresult.error"},"error?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ierror"},"IError")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)")," Optional Error object for the but currently the machine readable errors are not expored from DID-JWT package to be imported here")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iverifyresult.verified"},"verified")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This value is used to transmit the result of verification.")))))}y.isMDXComponent=!0}}]);