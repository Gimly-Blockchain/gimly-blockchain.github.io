"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[21108],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30062:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",title:"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method",hide_title:!0},l=void 0,p={unversionedId:"api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",id:"api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",title:"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method",description:"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method",source:"@site/docs/api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount.md",sourceDirName:"api",slug:"/api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",permalink:"/docs/api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.idatastoreorm.datastoreormgetverifiablepresentationscount.md",tags:[],version:"current",frontMatter:{id:"core-types.idatastoreorm.datastoreormgetverifiablepresentationscount",title:"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method",hide_title:!0}},c={},u=[{value:"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method",id:"idatastoreormdatastoreormgetverifiablepresentationscount-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"idatastoreormdatastoreormgetverifiablepresentationscount-method"},"IDataStoreORM.dataStoreORMGetVerifiablePresentationsCount() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Returns a count of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.uniqueverifiablepresentation"},"UniqueVerifiablePresentation"),"s that match the given filter based on the top level properties of a presentation."),(0,o.kt)("p",null,"These are ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablepresentation"},"VerifiablePresentation"),"s that were stored using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastore.datastoresaveverifiablepresentation"},"dataStoreSaveVerifiablePresentation"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"dataStoreORMGetVerifiablePresentationsCount(args: FindPresentationsArgs, context: AuthorizedDIDContext): Promise<number>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.findpresentationsargs"},"FindPresentationsArgs")),(0,o.kt)("td",{parentName:"tr",align:null},"The filter to apply when querying")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.authorizeddidcontext"},"AuthorizedDIDContext")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Can be used to signal that only a particular DID is authorized to perform this operation. This will cause the result to only contain data that this DID should be able to access."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","number",">"))}f.isMDXComponent=!0}}]);