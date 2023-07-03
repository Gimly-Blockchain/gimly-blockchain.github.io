"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[52232],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=c,y=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55899:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),i=["components"],a={id:"core-types.credentialsubject",title:"CredentialSubject type",hide_title:!0},u=void 0,l={unversionedId:"api/core-types.credentialsubject",id:"api/core-types.credentialsubject",title:"CredentialSubject type",description:"CredentialSubject type",source:"@site/docs/api/core-types.credentialsubject.md",sourceDirName:"api",slug:"/api/core-types.credentialsubject",permalink:"/docs/api/core-types.credentialsubject",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.credentialsubject.md",tags:[],version:"current",frontMatter:{id:"core-types.credentialsubject",title:"CredentialSubject type",hide_title:!0}},p={},s=[{value:"CredentialSubject type",id:"credentialsubject-type",level:2}],d={toc:s},f="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"credentialsubject-type"},"CredentialSubject type"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"The value of the credentialSubject property is defined as a set of objects that contain one or more properties that are each related to a subject of the verifiable credential. Each object MAY contain an id."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credential-subject"},"Credential Subject")),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CredentialSubject = {\n  id?: string\n  [x: string]: any\n}\n")))}y.isMDXComponent=!0}}]);