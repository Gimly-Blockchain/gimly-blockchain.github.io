"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[67786],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"core-types.findclaimsargs",title:"FindClaimsArgs type",hide_title:!0},c=void 0,l={unversionedId:"api/core-types.findclaimsargs",id:"api/core-types.findclaimsargs",title:"FindClaimsArgs type",description:"FindClaimsArgs type",source:"@site/docs/api/core-types.findclaimsargs.md",sourceDirName:"api",slug:"/api/core-types.findclaimsargs",permalink:"/docs/api/core-types.findclaimsargs",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.findclaimsargs.md",tags:[],version:"current",frontMatter:{id:"core-types.findclaimsargs",title:"FindClaimsArgs type",hide_title:!0}},p={},u=[{value:"FindClaimsArgs type",id:"findclaimsargs-type",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"findclaimsargs-type"},"FindClaimsArgs type"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"The filter that can be used to find ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential"),"s in the data store, based on the types and values of their claims."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastoreorm.datastoreormgetverifiablecredentialsbyclaims"},"IDataStoreORM.dataStoreORMGetVerifiableCredentialsByClaims()")," This API may change without a BREAKING CHANGE notice."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FindClaimsArgs = FindArgs<TClaimsColumns>\n")),(0,a.kt)("b",null,"References:")," [FindArgs](/docs/api/core-types.findargs), [TClaimsColumns](/docs/api/core-types.tclaimscolumns)")}m.isMDXComponent=!0}}]);