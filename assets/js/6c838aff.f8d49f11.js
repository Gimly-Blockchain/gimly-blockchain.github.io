"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[35942],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,y=s["".concat(i,".").concat(f)]||s[f]||m[f]||c;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],p={id:"core-types.compactjwt",title:"CompactJWT type",hide_title:!0},i=void 0,u={unversionedId:"api/core-types.compactjwt",id:"api/core-types.compactjwt",title:"CompactJWT type",description:"CompactJWT type",source:"@site/docs/api/core-types.compactjwt.md",sourceDirName:"api",slug:"/api/core-types.compactjwt",permalink:"/docs/api/core-types.compactjwt",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.compactjwt.md",tags:[],version:"current",frontMatter:{id:"core-types.compactjwt",title:"CompactJWT type",hide_title:!0}},l={},s=[{value:"CompactJWT type",id:"compactjwt-type",level:2}],m={toc:s},f="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"compactjwt-type"},"CompactJWT type"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,c.kt)("p",null,'Represents a Json Web Token in compact form. "header.payload.signature"'),(0,c.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"export type CompactJWT = string\n")))}y.isMDXComponent=!0}}]);