"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[48488],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,y=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(y,o(o({ref:t},f),{},{components:r})):n.createElement(y,o({ref:t},f))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55521:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"core-types.w3cverifiablecredential",title:"W3CVerifiableCredential type",hide_title:!0},l=void 0,p={unversionedId:"api/core-types.w3cverifiablecredential",id:"api/core-types.w3cverifiablecredential",title:"W3CVerifiableCredential type",description:"W3CVerifiableCredential type",source:"@site/docs/api/core-types.w3cverifiablecredential.md",sourceDirName:"api",slug:"/api/core-types.w3cverifiablecredential",permalink:"/docs/api/core-types.w3cverifiablecredential",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.w3cverifiablecredential.md",tags:[],version:"current",frontMatter:{id:"core-types.w3cverifiablecredential",title:"W3CVerifiableCredential type",hide_title:!0}},f={},u=[{value:"W3CVerifiableCredential type",id:"w3cverifiablecredential-type",level:2}],s={toc:u},d="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"w3cverifiablecredential-type"},"W3CVerifiableCredential type"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Represents a signed Verifiable Credential (includes proof), in either JSON or compact JWT format. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"VC data model")," See ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#proof-formats"},"proof formats")),(0,a.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type W3CVerifiableCredential = VerifiableCredential | CompactJWT\n")),(0,a.kt)("b",null,"References:")," [VerifiableCredential](/docs/api/core-types.verifiablecredential), [CompactJWT](/docs/api/core-types.compactjwt)")}y.isMDXComponent=!0}}]);