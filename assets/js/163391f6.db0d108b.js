"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[7695],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,c(c({ref:t},p),{},{components:n})):r.createElement(k,c({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],l={id:"did-comm.pickuprecipientmessagehandler",title:"PickupRecipientMessageHandler class",hide_title:!0},o=void 0,s={unversionedId:"api/did-comm.pickuprecipientmessagehandler",id:"api/did-comm.pickuprecipientmessagehandler",title:"PickupRecipientMessageHandler class",description:"PickupRecipientMessageHandler class",source:"@site/docs/api/did-comm.pickuprecipientmessagehandler.md",sourceDirName:"api",slug:"/api/did-comm.pickuprecipientmessagehandler",permalink:"/docs/api/did-comm.pickuprecipientmessagehandler",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.pickuprecipientmessagehandler.md",tags:[],version:"current",frontMatter:{id:"did-comm.pickuprecipientmessagehandler",title:"PickupRecipientMessageHandler class",hide_title:!0}},p={},d=[{value:"PickupRecipientMessageHandler class",id:"pickuprecipientmessagehandler-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],u={toc:d},m="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pickuprecipientmessagehandler-class"},"PickupRecipientMessageHandler class"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"A plugin for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," that handles Pickup messages for the mediator role. This API may change without a BREAKING CHANGE notice."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PickupRecipientMessageHandler extends AbstractMessageHandler\n")),(0,i.kt)("b",null,"Extends:")," [AbstractMessageHandler](/docs/api/message-handler.abstractmessagehandler)",(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.pickuprecipientmessagehandler._constructor_"},"(constructor)()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,i.kt)("code",null,"PickupRecipientMessageHandler")," class")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-comm.pickuprecipientmessagehandler.handle"},"handle(message, context)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Handles messages for Pickup protocol and recipient role ",(0,i.kt)("a",{parentName:"td",href:"https://didcomm.org/pickup/3.0/"},"https://didcomm.org/pickup/3.0/"))))))}k.isMDXComponent=!0}}]);