"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[57086],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(o,".").concat(g)]||d[g]||m[g]||s;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},53147:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),l=["components"],i={id:"message-handler",title:"message-handler package",hide_title:!0},o=void 0,p={unversionedId:"api/message-handler",id:"api/message-handler",title:"message-handler package",description:"message-handler package",source:"@site/docs/api/message-handler.md",sourceDirName:"api",slug:"/api/message-handler",permalink:"/docs/api/message-handler",draft:!1,tags:[],version:"current",frontMatter:{id:"message-handler",title:"message-handler package",hide_title:!0}},c={},d=[{value:"message-handler package",id:"message-handler-package",level:2},{value:"Classes",id:"classes",level:2}],m={toc:d},g="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"message-handler-package"},"message-handler package"),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"plugin")," for the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," that implements ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," interface."),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Class"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.abstractmessagehandler"},"AbstractMessageHandler")),(0,s.kt)("td",{parentName:"tr",align:null},"An abstract class for creating ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," plugins")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.message"},"Message")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"A class implementing ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessage"},"IMessage"),"."),(0,s.kt)("p",null,"This is used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler"},"MessageHandler"),"."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"A Gimly agent plugin that implements ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," methods."),(0,s.kt)("p",null,"This plugin is meant to chain together multiple other ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," implementations."),(0,s.kt)("p",null,"When handling a message, the message is passed from one handler to the next, and each handler in the chain can decide if it is able to interpret the message."),(0,s.kt)("p",null,"If the message can be processed by a handler it is returned as an ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessage"},"IMessage"),". If the message cannot be processed by any of the handlers, an error is thrown."))))))}u.isMDXComponent=!0}}]);