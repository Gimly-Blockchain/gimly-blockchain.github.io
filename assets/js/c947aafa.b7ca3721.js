"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[92115],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),p=c(a),u=r,d=p["".concat(i,".").concat(u)]||p[u]||y[u]||l;return a?n.createElement(d,s(s({ref:e},o),{},{components:a})):n.createElement(d,s({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=u;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[p]="string"==typeof t?t:r,s[1]=m;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82450:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],m={id:"key-manager.abstractkeymanagementsystem",title:"AbstractKeyManagementSystem class",hide_title:!0},i=void 0,c={unversionedId:"api/key-manager.abstractkeymanagementsystem",id:"api/key-manager.abstractkeymanagementsystem",title:"AbstractKeyManagementSystem class",description:"AbstractKeyManagementSystem class",source:"@site/docs/api/key-manager.abstractkeymanagementsystem.md",sourceDirName:"api",slug:"/api/key-manager.abstractkeymanagementsystem",permalink:"/docs/api/key-manager.abstractkeymanagementsystem",draft:!1,tags:[],version:"current",frontMatter:{id:"key-manager.abstractkeymanagementsystem",title:"AbstractKeyManagementSystem class",hide_title:!0}},o={},p=[{value:"AbstractKeyManagementSystem class",id:"abstractkeymanagementsystem-class",level:2},{value:"Methods",id:"methods",level:2}],y={toc:p},u="wrapper";function d(t){var e=t.components,a=(0,r.Z)(t,s);return(0,l.kt)(u,(0,n.Z)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"abstractkeymanagementsystem-class"},"AbstractKeyManagementSystem class"),(0,l.kt)("p",null,"This base abstract class should be extended to provide cryptographic functions to other Gimly plugins."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class AbstractKeyManagementSystem\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.createkey"},"createKey(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.deletekey"},"deleteKey(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.importkey"},"importKey(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.listkeys"},"listKeys()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.sharedsecret"},"sharedSecret(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.sign"},"sign(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.signethtx"},"signEthTX({ key, transaction })")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem.signjwt"},"signJWT({ key, data })")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);