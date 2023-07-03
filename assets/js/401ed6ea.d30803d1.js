"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[14551],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(y,l(l({ref:t},g),{},{components:r})):n.createElement(y,l({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19377:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.ikeymanagersignargs",title:"IKeyManagerSignArgs interface",hide_title:!0},p=void 0,s={unversionedId:"api/core-types.ikeymanagersignargs",id:"api/core-types.ikeymanagersignargs",title:"IKeyManagerSignArgs interface",description:"IKeyManagerSignArgs interface",source:"@site/docs/api/core-types.ikeymanagersignargs.md",sourceDirName:"api",slug:"/api/core-types.ikeymanagersignargs",permalink:"/docs/api/core-types.ikeymanagersignargs",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.ikeymanagersignargs.md",tags:[],version:"current",frontMatter:{id:"core-types.ikeymanagersignargs",title:"IKeyManagerSignArgs interface",hide_title:!0}},g={},c=[{value:"IKeyManagerSignArgs interface",id:"ikeymanagersignargs-interface",level:2},{value:"Properties",id:"properties",level:2}],u={toc:c},m="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ikeymanagersignargs-interface"},"IKeyManagerSignArgs interface"),(0,i.kt)("p",null,"Input arguments for ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.ikeymanager.keymanagersign"},"keyManagerSign")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IKeyManagerSignArgs\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanagersignargs.algorithm"},"algorithm?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("i",null,"(Optional)")," The algorithm to use for signing. This must be one of the algorithms supported by the KMS for this key type."),(0,i.kt)("p",null,"The algorithm used here should match one of the names listed in ",(0,i.kt)("code",null,"IKey.meta.algorithms")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanagersignargs.data"},"data")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Data to sign")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanagersignargs.encoding"},"encoding?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"'utf-8' ","|"," 'base16' ","|"," 'base64' ","|"," 'hex'"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)"),' If the data is a "string" then you can specify which encoding is used. Default is "utf-8"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanagersignargs.keyref"},"keyRef")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The key handle, as returned during ",(0,i.kt)("code",null,"keyManagerCreateKey"))))))}y.isMDXComponent=!0}}]);