"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[82893],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16633:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",hide_title:!0},s=void 0,d={unversionedId:"api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",id:"api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",description:"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",source:"@site/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims.md",sourceDirName:"api",slug:"/api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",permalink:"/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims.md",tags:[],version:"current",frontMatter:{id:"data-store.datastoreorm.datastoreormgetverifiablecredentialsbyclaims",title:"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",hide_title:!0}},c={},m=[{value:"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method",id:"datastoreormdatastoreormgetverifiablecredentialsbyclaims-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:m},u="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"datastoreormdatastoreormgetverifiablecredentialsbyclaims-method"},"DataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"dataStoreORMGetVerifiableCredentialsByClaims(args: FindArgs<TClaimsColumns>, context: AuthorizedDIDContext): Promise<Array<UniqueVerifiableCredential>>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.findargs"},"FindArgs"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.tclaimscolumns"},"TClaimsColumns"),">"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.authorizeddidcontext"},"AuthorizedDIDContext")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","Array","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.uniqueverifiablecredential"},"UniqueVerifiableCredential"),">",">"))}f.isMDXComponent=!0}}]);