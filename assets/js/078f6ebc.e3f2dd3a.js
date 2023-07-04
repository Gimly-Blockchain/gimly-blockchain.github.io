"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[87166],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=f(r),m=o,y=l["".concat(c,".").concat(m)]||l[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74910:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"core-types.proofformat",title:"ProofFormat type",hide_title:!0},c=void 0,f={unversionedId:"api/core-types.proofformat",id:"api/core-types.proofformat",title:"ProofFormat type",description:"ProofFormat type",source:"@site/docs/api/core-types.proofformat.md",sourceDirName:"api",slug:"/api/core-types.proofformat",permalink:"/docs/api/core-types.proofformat",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.proofformat",title:"ProofFormat type",hide_title:!0}},u={},l=[{value:"ProofFormat type",id:"proofformat-type",level:2}],s={toc:l},m="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"proofformat-type"},"ProofFormat type"),(0,a.kt)("p",null,"The type of encoding to be used for the Verifiable Credential or Presentation to be generated."),(0,a.kt)("p",null,"Only ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lds")," is supported at the moment."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ProofFormat = 'jwt' | 'lds' | 'EthereumEip712Signature2021'\n")))}y.isMDXComponent=!0}}]);