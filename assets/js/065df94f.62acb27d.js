"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[12935],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6625:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"data-store.datastoreorm.datastoreormgetverifiablecredentials",title:"DataStoreORM.dataStoreORMGetVerifiableCredentials() method",hide_title:!0},d=void 0,s={unversionedId:"api/data-store.datastoreorm.datastoreormgetverifiablecredentials",id:"api/data-store.datastoreorm.datastoreormgetverifiablecredentials",title:"DataStoreORM.dataStoreORMGetVerifiableCredentials() method",description:"DataStoreORM.dataStoreORMGetVerifiableCredentials() method",source:"@site/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentials.md",sourceDirName:"api",slug:"/api/data-store.datastoreorm.datastoreormgetverifiablecredentials",permalink:"/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentials",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentials.md",tags:[],version:"current",frontMatter:{id:"data-store.datastoreorm.datastoreormgetverifiablecredentials",title:"DataStoreORM.dataStoreORMGetVerifiableCredentials() method",hide_title:!0}},c={},p=[{value:"DataStoreORM.dataStoreORMGetVerifiableCredentials() method",id:"datastoreormdatastoreormgetverifiablecredentials-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"datastoreormdatastoreormgetverifiablecredentials-method"},"DataStoreORM.dataStoreORMGetVerifiableCredentials() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"dataStoreORMGetVerifiableCredentials(args: FindArgs<TCredentialColumns>, context: AuthorizedDIDContext): Promise<Array<UniqueVerifiableCredential>>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.findargs"},"FindArgs"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.tcredentialcolumns"},"TCredentialColumns"),">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.authorizeddidcontext"},"AuthorizedDIDContext")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","Array","<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.uniqueverifiablecredential"},"UniqueVerifiableCredential"),">",">"))}f.isMDXComponent=!0}}]);