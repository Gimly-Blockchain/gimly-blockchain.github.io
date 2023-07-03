"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[46162],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"did-comm.pickupmediatormessagehandler",title:"PickupMediatorMessageHandler class",hide_title:!0},s=void 0,c={unversionedId:"api/did-comm.pickupmediatormessagehandler",id:"api/did-comm.pickupmediatormessagehandler",title:"PickupMediatorMessageHandler class",description:"PickupMediatorMessageHandler class",source:"@site/docs/api/did-comm.pickupmediatormessagehandler.md",sourceDirName:"api",slug:"/api/did-comm.pickupmediatormessagehandler",permalink:"/docs/api/did-comm.pickupmediatormessagehandler",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.pickupmediatormessagehandler.md",tags:[],version:"current",frontMatter:{id:"did-comm.pickupmediatormessagehandler",title:"PickupMediatorMessageHandler class",hide_title:!0}},d={},p=[{value:"PickupMediatorMessageHandler class",id:"pickupmediatormessagehandler-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p},m="wrapper";function k(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pickupmediatormessagehandler-class"},"PickupMediatorMessageHandler class"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"A plugin for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," that handles Pickup messages for the mediator role. This API may change without a BREAKING CHANGE notice."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PickupMediatorMessageHandler extends AbstractMessageHandler\n")),(0,i.kt)("b",null,"Extends:")," [AbstractMessageHandler](/docs/api/message-handler.abstractmessagehandler)",(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.pickupmediatormessagehandler._constructor_"},"(constructor)()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,i.kt)("code",null,"PickupMediatorMessageHandler")," class")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.pickupmediatormessagehandler.handle"},"handle(message, context)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Handles messages for Pickup protocol and mediator role ",(0,i.kt)("a",{parentName:"td",href:"https://didcomm.org/pickup/3.0/"},"https://didcomm.org/pickup/3.0/"))))))}k.isMDXComponent=!0}}]);