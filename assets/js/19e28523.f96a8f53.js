"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[57408],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),f=i,d=l["".concat(s,".").concat(f)]||l[f]||y[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93564:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={id:"core-types.issuertype",title:"IssuerType type",hide_title:!0},s=void 0,c={unversionedId:"api/core-types.issuertype",id:"api/core-types.issuertype",title:"IssuerType type",description:"IssuerType type",source:"@site/docs/api/core-types.issuertype.md",sourceDirName:"api",slug:"/api/core-types.issuertype",permalink:"/docs/api/core-types.issuertype",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.issuertype",title:"IssuerType type",hide_title:!0}},u={},l=[{value:"IssuerType type",id:"issuertype-type",level:2}],y={toc:l},f="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"issuertype-type"},"IssuerType type"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"The issuer of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential")," or the holder of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablepresentation"},"VerifiablePresentation"),"."),(0,o.kt)("p",null,"The value of the issuer property MUST be either a URI or an object containing an id property. It is RECOMMENDED that the URI in the issuer or its id be one which, if de-referenced, results in a document containing machine-readable information about the issuer that can be used to verify the information expressed in the credential."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#issuer"},"Issuer data model")),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type IssuerType =\n  | {\n      id: string\n      [x: string]: any\n    }\n  | string\n")))}d.isMDXComponent=!0}}]);