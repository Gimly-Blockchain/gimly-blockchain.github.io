"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[58344],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(a,".").concat(f)]||s[f]||y[f]||c;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],p={id:"core-types.contexttype",title:"ContextType type",hide_title:!0},a=void 0,u={unversionedId:"api/core-types.contexttype",id:"api/core-types.contexttype",title:"ContextType type",description:"ContextType type",source:"@site/docs/api/core-types.contexttype.md",sourceDirName:"api",slug:"/api/core-types.contexttype",permalink:"/docs/api/core-types.contexttype",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.contexttype.md",tags:[],version:"current",frontMatter:{id:"core-types.contexttype",title:"ContextType type",hide_title:!0}},l={},s=[{value:"ContextType type",id:"contexttype-type",level:2}],y={toc:s},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"contexttype-type"},"ContextType type"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,c.kt)("p",null,"The data type for ",(0,c.kt)("inlineCode",{parentName:"p"},"@context")," properties of credentials, presentations, etc."),(0,c.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ContextType = string | Record<string, any> | (string | Record<string, any>)[]\n")))}d.isMDXComponent=!0}}]);