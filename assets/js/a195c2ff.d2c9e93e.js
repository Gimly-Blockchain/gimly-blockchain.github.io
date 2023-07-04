"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[15551],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"did-comm.trustpingmessagehandler.handle",title:"TrustPingMessageHandler.handle() method",hide_title:!0},s=void 0,d={unversionedId:"api/did-comm.trustpingmessagehandler.handle",id:"api/did-comm.trustpingmessagehandler.handle",title:"TrustPingMessageHandler.handle() method",description:"TrustPingMessageHandler.handle() method",source:"@site/docs/api/did-comm.trustpingmessagehandler.handle.md",sourceDirName:"api",slug:"/api/did-comm.trustpingmessagehandler.handle",permalink:"/docs/api/did-comm.trustpingmessagehandler.handle",draft:!1,tags:[],version:"current",frontMatter:{id:"did-comm.trustpingmessagehandler.handle",title:"TrustPingMessageHandler.handle() method",hide_title:!0}},p={},u=[{value:"TrustPingMessageHandler.handle() method",id:"trustpingmessagehandlerhandle-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"trustpingmessagehandlerhandle-method"},"TrustPingMessageHandler.handle() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Handles a Trust Ping Message ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/%5C#trust-ping-protocol-10"},"https://identity.foundation/didcomm-messaging/spec/\\#trust-ping-protocol-10")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"handle(message: Message, context: IContext): Promise<Message>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"message"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/message-handler.message"},"Message")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"IContext"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message-handler.message"},"Message"),">"))}g.isMDXComponent=!0}}]);