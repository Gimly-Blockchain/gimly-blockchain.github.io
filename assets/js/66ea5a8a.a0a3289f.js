"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[27140],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",hide_title:!0},s=void 0,c={unversionedId:"api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",id:"api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",description:"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",source:"@site/docs/api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims.md",sourceDirName:"api",slug:"/api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",permalink:"/docs/api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",hide_title:!0}},d={},p=[{value:"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",id:"idatastoreormdatastoreormgetverifiablecredentialsbyclaims-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"idatastoreormdatastoreormgetverifiablecredentialsbyclaims-method"},"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Returns a list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.uniqueverifiablecredential"},"UniqueVerifiableCredential"),"s that match the given filter based on the claims they contain."),(0,i.kt)("p",null,"These are VerifiableCredentials that were stored using ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastore.datastoresaveverifiablecredential"},"dataStoreSaveVerifiableCredential"),"."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"dataStoreORMGetVerifiableCredentialsByClaims(args: FindClaimsArgs, context: AuthorizedDIDContext): Promise<Array<UniqueVerifiableCredential>>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.findclaimsargs"},"FindClaimsArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"The filter to apply when querying")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.authorizeddidcontext"},"AuthorizedDIDContext")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Can be used to signal that only a particular DID is authorized to perform this operation. This will cause the result to only contain data that this DID should be able to access."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","Array","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.uniqueverifiablecredential"},"UniqueVerifiableCredential"),">",">"))}f.isMDXComponent=!0}}]);