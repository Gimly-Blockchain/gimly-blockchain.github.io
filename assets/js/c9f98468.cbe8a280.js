"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[88601],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(a),u=r,g=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return a?n.createElement(g,m(m({ref:e},d),{},{components:a})):n.createElement(g,m({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,m=new Array(i);m[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[s]="string"==typeof t?t:r,m[1]=l;for(var c=2;c<i;c++)m[c]=a[c];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33052:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),m=["components"],l={id:"did-comm.ididcommmessageattachmentdata",title:"IDIDCommMessageAttachmentData interface",hide_title:!0},o=void 0,c={unversionedId:"api/did-comm.ididcommmessageattachmentdata",id:"api/did-comm.ididcommmessageattachmentdata",title:"IDIDCommMessageAttachmentData interface",description:"IDIDCommMessageAttachmentData interface",source:"@site/docs/api/did-comm.ididcommmessageattachmentdata.md",sourceDirName:"api",slug:"/api/did-comm.ididcommmessageattachmentdata",permalink:"/docs/api/did-comm.ididcommmessageattachmentdata",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.ididcommmessageattachmentdata.md",tags:[],version:"current",frontMatter:{id:"did-comm.ididcommmessageattachmentdata",title:"IDIDCommMessageAttachmentData interface",hide_title:!0}},d={},s=[{value:"IDIDCommMessageAttachmentData interface",id:"ididcommmessageattachmentdata-interface",level:2},{value:"Properties",id:"properties",level:2}],p={toc:s},u="wrapper";function g(t){var e=t.components,a=(0,r.Z)(t,m);return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ididcommmessageattachmentdata-interface"},"IDIDCommMessageAttachmentData interface"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"The DIDComm message structure for data in an attachment. See ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/%5C#attachments"},"https://identity.foundation/didcomm-messaging/spec/\\#attachments")),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IDIDCommMessageAttachmentData\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessageattachmentdata.base64"},"base64?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessageattachmentdata.hash"},"hash?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessageattachmentdata.json"},"json?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessageattachmentdata.jws"},"jws?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessageattachmentdata.links"},"links?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("i",null,"(Optional)"))))))}g.isMDXComponent=!0}}]);