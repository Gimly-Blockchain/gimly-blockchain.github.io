"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[85953],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75561:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),s=["components"],c={id:"credential-w3c.w3cmessagehandler",title:"W3cMessageHandler class",hide_title:!0},i=void 0,o={unversionedId:"api/credential-w3c.w3cmessagehandler",id:"api/credential-w3c.w3cmessagehandler",title:"W3cMessageHandler class",description:"W3cMessageHandler class",source:"@site/docs/api/credential-w3c.w3cmessagehandler.md",sourceDirName:"api",slug:"/api/credential-w3c.w3cmessagehandler",permalink:"/docs/api/credential-w3c.w3cmessagehandler",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/credential-w3c.w3cmessagehandler.md",tags:[],version:"current",frontMatter:{id:"credential-w3c.w3cmessagehandler",title:"W3cMessageHandler class",hide_title:!0}},d={},p=[{value:"W3cMessageHandler class",id:"w3cmessagehandler-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p},m="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"w3cmessagehandler-class"},"W3cMessageHandler class"),(0,l.kt)("p",null,"An implementation of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/message-handler.abstractmessagehandler"},"AbstractMessageHandler"),"."),(0,l.kt)("p",null,"This plugin can handle incoming W3C Verifiable Credentials and Presentations and prepare them for internal storage as ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/message-handler.message"},"Message")," types."),(0,l.kt)("p",null,"The current version can only handle ",(0,l.kt)("inlineCode",{parentName:"p"},"JWT")," encoded"),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class W3cMessageHandler extends AbstractMessageHandler\n")),(0,l.kt)("b",null,"Extends:")," [AbstractMessageHandler](/docs/api/message-handler.abstractmessagehandler)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastore"},"IDataStore")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-w3c.w3cmessagehandler.handle"},"handle(message, context)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);