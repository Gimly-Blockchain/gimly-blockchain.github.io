"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[90628],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},g="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,s=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=d(r),c=i,u=g["".concat(o,".").concat(c)]||g[c]||l[c]||s;return r?n.createElement(u,a(a({ref:e},m),{},{components:r})):n.createElement(u,a({ref:e},m))}));function u(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=r.length,a=new Array(s);a[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[g]="string"==typeof t?t:i,a[1]=p;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10123:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g}});var n=r(87462),i=r(63366),s=(r(67294),r(3905)),a=["components"],p={id:"did-comm.didcomm",title:"DIDComm class",hide_title:!0},o=void 0,d={unversionedId:"api/did-comm.didcomm",id:"api/did-comm.didcomm",title:"DIDComm class",description:"DIDComm class",source:"@site/docs/api/did-comm.didcomm.md",sourceDirName:"api",slug:"/api/did-comm.didcomm",permalink:"/docs/api/did-comm.didcomm",draft:!1,tags:[],version:"current",frontMatter:{id:"did-comm.didcomm",title:"DIDComm class",hide_title:!0}},m={},g=[{value:"DIDComm class",id:"didcomm-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],l={toc:g},c="wrapper";function u(t){var e=t.components,r=(0,i.Z)(t,a);return(0,s.kt)(c,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"didcomm-class"},"DIDComm class"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,s.kt)("p",null,"DID Comm plugin for ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")),(0,s.kt)("p",null,"This plugin provides a method of creating an encrypted message according to the initial ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identifier/DIDComm-js"},"DIDComm-js")," implementation."),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DIDComm implements IAgentPlugin\n")),(0,s.kt)("b",null,"Implements:")," [IAgentPlugin](/docs/api/core-types.iagentplugin)",(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"Be advised that this spec is still not final and that this protocol may need to change."),(0,s.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm._constructor_"},"(constructor)(transports)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Constructor that takes a list of ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommtransport"},"IDIDCommTransport")," objects.")))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.methods"},"methods")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"readonly")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcomm"},"IDIDComm")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Plugin methods")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.schema"},"schema")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"readonly")),(0,s.kt)("td",{parentName:"tr",align:null},"{ components: { schemas: { IPackedDIDCommMessage: { type: string; properties: { message: { type: string; }; }; required: string","[","]","; description: string; }; DIDCommMessageMediaType: { type: string; enum: string","[","]","; description: string; }; IPackDIDCommMessageArgs: { type: string; properties: { message: { $ref: string; }; packing: { $ref: string; }; keyRef: { type: string; }; options: { $ref: string; }; }; required: string","[","]","; description: string; }; IDIDCommMessage: { type: string; properties: { type: { type: string; }; from: { type: string; }; to: { type: string; }; thid: { type: string; }; pthid: { type: string; }; id: { type: string; }; expires_time: { type: string; }; created_time: { type: string; }; next: { type: string; }; from_prior: { type: string; }; body: {}; attachments: { type: string; items: { $ref: string; }; }; return_route: { type: string; }; }; required: string","[","]","; description: string; }; IDIDCommMessageAttachment: { type: string; properties: { id: { type: string; }; description: { type: string; }; filename: { type: string; }; media_type: { type: string; }; format: { type: string; }; lastmod_time: { type: string; }; byte_count: { type: string; }; data: { $ref: string; }; }; required: string","[","]","; description: string; }; IDIDCommMessageAttachmentData: { type: string; properties: { jws: {}; hash: { type: string; }; links: { type: string; items: { type: string; }; }; base64: { type: string; }; json: {}; }; description: string; }; DIDCommMessagePacking: { type: string; enum: string","[","]","; description: string; }; IDIDCommOptions: { type: string; properties: { bcc: { type: string; items: { type: string; }; description: string; }; recipientKids: { type: string; items: { type: string; }; description: string; }; }; description: string; }; ISendDIDCommMessageArgs: { type: string; properties: { packedMessage: { $ref: string; }; messageId: { type: string; }; returnTransportId: { type: string; }; recipientDidUrl: { type: string; }; }; required: string","[","]","; description: string; }; ISendMessageDIDCommAlpha1Args: { type: string; properties: { url: { type: string; }; save: { type: string; }; data: { type: string; properties: { id: { type: string; }; from: { type: string; }; to: { type: string; }; type: { type: string; }; body: { anyOf: { type: string; }","[","]","; }; }; required: string","[","]","; }; headers: { type: string; additionalProperties: { type: string; }; }; }; required: string","[","]","; deprecated: string; }; IMessage: { type: string; properties: { id: { type: string; description: string; }; type: { type: string; description: string; }; createdAt: { type: string; description: string; }; expiresAt: { type: string; description: string; }; threadId: { type: string; description: string; }; raw: { type: string; description: string; }; data: { anyOf: { type: string; }","[","]","; description: string; }; replyTo: { type: string; items: { type: string; }; description: string; }; replyUrl: { type: string; description: string; }; from: { type: string; description: string; }; to: { type: string; description: string; }; metaData: { anyOf: ({ type: string; items: { $ref: string; }; } ","|"," { type: string; items?: undefined; })","[","]","; description: string; }; credentials: { type: string; items: { $ref: string; }; description: string; }; presentations: { type: string; items: { $ref: string; }; description: string; }; attachments: { type: string; items: { $ref: string; }; description: string; }; returnRoute: { type: string; description: string; }; }; required: string","[","]","; description: string; }; IMetaData: { type: string; properties: { type: { type: string; description: string; }; value: { type: string; description: string; }; }; required: string","[","]","; description: string; }; VerifiableCredential: { type: string; properties: { proof: { $ref: string; }; issuer: { $ref: string; }; credentialSubject: { $ref: string; }; type: { anyOf: ({ type: string; items: { type: string; }; } ","|"," { type: string; items?: undefined; })","[","]",'; }; "@context": { $ref: string; }; issuanceDate: { type: string; }; expirationDate: { type: string; }; credentialStatus: { $ref: string; }; id: { type: string; }; }; required: string',"[","]","; description: string; }; ProofType: { type: string; properties: { type: { type: string; }; }; description: string; }; IssuerType: { anyOf: ({ type: string; properties: { id: { type: string; }; }; required: string","[","]","; } ","|"," { type: string; properties?: undefined; required?: undefined; })","[","]","; description: string; }; CredentialSubject: { type: string; properties: { id: { type: string; }; }; description: string; }; ContextType: { anyOf: ({ type: string; items?: undefined; } ","|"," { type: string; items: { anyOf: { type: string; }","[","]","; }; })","[","]","; description: string; }; CredentialStatusReference: { type: string; properties: { id: { type: string; }; type: { type: string; }; }; required: string","[","]","; description: string; }; VerifiablePresentation: { type: string; properties: { proof: { $ref: string; }; holder: { type: string; }; verifiableCredential: { type: string; items: { $ref: string; }; }; type: { anyOf: ({ type: string; items: { type: string; }; } ","|"," { type: string; items?: undefined; })","[","]",'; }; "@context": { $ref: string; }; verifier: { type: string; items: { type: string; }; }; issuanceDate: { type: string; }; expirationDate: { type: string; }; id: { type: string; }; }; required: string',"[","]","; description: string; }; W3CVerifiableCredential: { anyOf: { $ref: string; }","[","]","; description: string; }; CompactJWT: { type: string; description: string; }; IMessageAttachment: { type: string; properties: { id: { type: string; }; description: { type: string; }; filename: { type: string; }; media_type: { type: string; }; format: { type: string; }; lastmod_time: { type: string; }; byte_count: { type: string; }; data: { $ref: string; }; }; required: string","[","]","; description: string; }; IMessageAttachmentData: { type: string; properties: { jws: {}; hash: { type: string; }; links: { type: string; items: { type: string; }; }; base64: { type: string; }; json: {}; }; description: string; }; IUnpackDIDCommMessageArgs: { $ref: string; description: string; }; IUnpackedDIDCommMessage: { type: string; properties: { metaData: { $ref: string; }; message: { $ref: string; }; }; required: string","[","]","; description: string; }; IDIDCommMessageMetaData: { type: string; properties: { packing: { $ref: string; }; }; required: string","[","]","; description: string; }; }; methods: { getDIDCommMessageMediaType: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; packDIDCommMessage: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; sendDIDCommMessage: { description: string; arguments: { $ref: string; }; returnType: { type: string; }; }; sendMessageDIDCommAlpha1: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; unpackDIDCommMessage: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; }; }; }"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.transports"},"transports")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"readonly")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommtransport"},"IDIDCommTransport"),"[","]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)")))))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.getdidcommmessagemediatype"},"getDidCommMessageMediaType({ message })")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Partially decodes a possible DIDComm message string to determine the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcommmessagemediatype"},"DIDCommMessageMediaType"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.packdidcommmessage"},"packDIDCommMessage(args, context)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Packs a ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessage"},"IDIDCommMessage")," using one of the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcommmessagepacking"},"DIDCommMessagePacking")," options.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.senddidcommmessage"},"sendDIDCommMessage(args, context)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Sends the given message to the recipient. If a return transport is provided it will be checked whether the parent thread allows reusing the route. You cannot reuse the transport if the message was forwarded from a DIDComm mediator."),(0,s.kt)("p",null,"Emits an eventType 'DIDCommV2Message-sent' that contains the message id of packed DIDComm message ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ipackeddidcommmessage"},"IPackedDIDCommMessage")," after the message was sent."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.sendmessagedidcommalpha1"},"sendMessageDIDCommAlpha1(args, context)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcomm.unpackdidcommmessage"},"unpackDIDCommMessage(args, context)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Unpacks a possible DIDComm message and returns the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessage"},"IDIDCommMessage")," and ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcommmessagepacking"},"DIDCommMessagePacking")," used to pack it.")))))}u.isMDXComponent=!0}}]);