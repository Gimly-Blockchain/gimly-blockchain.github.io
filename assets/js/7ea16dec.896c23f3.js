"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[40272],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=o(r),m=s,u=g["".concat(l,".").concat(m)]||g[m]||c[m]||i;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:s,a[1]=p;for(var o=2;o<i;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47694:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return g}});var n=r(87462),s=r(63366),i=(r(67294),r(3905)),a=["components"],p={id:"message-handler.messagehandler",title:"MessageHandler class",hide_title:!0},l=void 0,o={unversionedId:"api/message-handler.messagehandler",id:"api/message-handler.messagehandler",title:"MessageHandler class",description:"MessageHandler class",source:"@site/docs/api/message-handler.messagehandler.md",sourceDirName:"api",slug:"/api/message-handler.messagehandler",permalink:"/docs/api/message-handler.messagehandler",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/message-handler.messagehandler.md",tags:[],version:"current",frontMatter:{id:"message-handler.messagehandler",title:"MessageHandler class",hide_title:!0}},d={},g=[{value:"MessageHandler class",id:"messagehandler-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:g},m="wrapper";function u(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"messagehandler-class"},"MessageHandler class"),(0,i.kt)("p",null,"A Gimly agent plugin that implements ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," methods."),(0,i.kt)("p",null,"This plugin is meant to chain together multiple other ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," implementations."),(0,i.kt)("p",null,"When handling a message, the message is passed from one handler to the next, and each handler in the chain can decide if it is able to interpret the message."),(0,i.kt)("p",null,"If the message can be processed by a handler it is returned as an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.imessage"},"IMessage"),". If the message cannot be processed by any of the handlers, an error is thrown."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class MessageHandler implements IAgentPlugin\n")),(0,i.kt)("b",null,"Implements:")," [IAgentPlugin](/docs/api/core-types.iagentplugin)",(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler._constructor_"},"(constructor)(options)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"MessageHandler")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler.methods"},"methods")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"readonly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")),(0,i.kt)("td",{parentName:"tr",align:null},"Plugin methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler.schema"},"schema")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"readonly")),(0,i.kt)("td",{parentName:"tr",align:null},"{ components: { schemas: { IHandleMessageArgs: { type: string; properties: { raw: { type: string; description: string; }; metaData: { type: string; items: { $ref: string; }; description: string; }; save: { type: string; description: string; deprecated: string; }; }; required: string","[","]","; description: string; }; IMetaData: { type: string; properties: { type: { type: string; description: string; }; value: { type: string; description: string; }; }; required: string","[","]","; description: string; }; IMessage: { type: string; properties: { id: { type: string; description: string; }; type: { type: string; description: string; }; createdAt: { type: string; description: string; }; expiresAt: { type: string; description: string; }; threadId: { type: string; description: string; }; raw: { type: string; description: string; }; data: { anyOf: { type: string; }","[","]","; description: string; }; replyTo: { type: string; items: { type: string; }; description: string; }; replyUrl: { type: string; description: string; }; from: { type: string; description: string; }; to: { type: string; description: string; }; metaData: { anyOf: ({ type: string; items: { $ref: string; }; } ","|"," { type: string; items?: undefined; })","[","]","; description: string; }; credentials: { type: string; items: { $ref: string; }; description: string; }; presentations: { type: string; items: { $ref: string; }; description: string; }; attachments: { type: string; items: { $ref: string; }; description: string; }; returnRoute: { type: string; description: string; }; }; required: string","[","]","; description: string; }; VerifiableCredential: { type: string; properties: { proof: { $ref: string; }; issuer: { $ref: string; }; credentialSubject: { $ref: string; }; type: { anyOf: ({ type: string; items: { type: string; }; } ","|"," { type: string; items?: undefined; })","[","]",'; }; "@context": { $ref: string; }; issuanceDate: { type: string; }; expirationDate: { type: string; }; credentialStatus: { $ref: string; }; id: { type: string; }; }; required: string',"[","]","; description: string; }; ProofType: { type: string; properties: { type: { type: string; }; }; description: string; }; IssuerType: { anyOf: ({ type: string; properties: { id: { type: string; }; }; required: string","[","]","; } ","|"," { type: string; properties?: undefined; required?: undefined; })","[","]","; description: string; }; CredentialSubject: { type: string; properties: { id: { type: string; }; }; description: string; }; ContextType: { anyOf: ({ type: string; items?: undefined; } ","|"," { type: string; items: { anyOf: { type: string; }","[","]","; }; })","[","]","; description: string; }; CredentialStatusReference: { type: string; properties: { id: { type: string; }; type: { type: string; }; }; required: string","[","]","; description: string; }; VerifiablePresentation: { type: string; properties: { proof: { $ref: string; }; holder: { type: string; }; verifiableCredential: { type: string; items: { $ref: string; }; }; type: { anyOf: ({ type: string; items: { type: string; }; } ","|"," { type: string; items?: undefined; })","[","]",'; }; "@context": { $ref: string; }; verifier: { type: string; items: { type: string; }; }; issuanceDate: { type: string; }; expirationDate: { type: string; }; id: { type: string; }; }; required: string',"[","]","; description: string; }; W3CVerifiableCredential: { anyOf: { $ref: string; }","[","]","; description: string; }; CompactJWT: { type: string; description: string; }; IMessageAttachment: { type: string; properties: { id: { type: string; }; description: { type: string; }; filename: { type: string; }; media_type: { type: string; }; format: { type: string; }; lastmod_time: { type: string; }; byte_count: { type: string; }; data: { $ref: string; }; }; required: string","[","]","; description: string; }; IMessageAttachmentData: { type: string; properties: { jws: {}; hash: { type: string; }; links: { type: string; items: { type: string; }; }; base64: { type: string; }; json: {}; }; description: string; }; }; methods: { handleMessage: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; }; }; }"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler.handlemessage"},"handleMessage(args, context)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Parses a raw message."),(0,i.kt)("p",null,"After the message is parsed, you can decide if it should be saved, and pass the result to ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastore.datastoresavemessage"},"dataStoreSaveMessage()")," to save it."))))))}u.isMDXComponent=!0}}]);