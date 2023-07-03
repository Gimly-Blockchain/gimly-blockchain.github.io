"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[71561],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(r),f=a,y=p["".concat(u,".").concat(f)]||p[f]||b[f]||o;return r?n.createElement(y,i(i({ref:e},c),{},{components:r})):n.createElement(y,i({ref:e},c))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[p]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52911:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"utils.bytestobase64url",title:"bytesToBase64url() function",hide_title:!0},u=void 0,s={unversionedId:"api/utils.bytestobase64url",id:"api/utils.bytestobase64url",title:"bytesToBase64url() function",description:"bytesToBase64url() function",source:"@site/docs/api/utils.bytestobase64url.md",sourceDirName:"api",slug:"/api/utils.bytestobase64url",permalink:"/docs/api/utils.bytestobase64url",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/utils.bytestobase64url.md",tags:[],version:"current",frontMatter:{id:"utils.bytestobase64url",title:"bytesToBase64url() function",hide_title:!0}},c={},p=[{value:"bytesToBase64url() function",id:"bytestobase64url-function",level:2},{value:"Parameters",id:"parameters",level:2}],b={toc:p},f="wrapper";function y(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)(f,(0,n.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bytestobase64url-function"},"bytesToBase64url() function"),(0,o.kt)("p",null,"Converts a Uint8Array to a base64url string"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function bytesToBase64url(b: Uint8Array): string\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"b"),(0,o.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,o.kt)("td",{parentName:"tr",align:null},"the array to be converted")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"))}y.isMDXComponent=!0}}]);