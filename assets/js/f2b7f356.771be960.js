"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[11677],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(r),c=i,y=g["".concat(p,".").concat(c)]||g[c]||u[c]||s;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},56270:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return g}});var n=r(87462),i=r(63366),s=(r(67294),r(3905)),a=["components"],o={id:"did-resolver.didresolverplugin",title:"DIDResolverPlugin class",hide_title:!0},p=void 0,l={unversionedId:"api/did-resolver.didresolverplugin",id:"api/did-resolver.didresolverplugin",title:"DIDResolverPlugin class",description:"DIDResolverPlugin class",source:"@site/docs/api/did-resolver.didresolverplugin.md",sourceDirName:"api",slug:"/api/did-resolver.didresolverplugin",permalink:"/docs/api/did-resolver.didresolverplugin",draft:!1,tags:[],version:"current",frontMatter:{id:"did-resolver.didresolverplugin",title:"DIDResolverPlugin class",hide_title:!0}},d={},g=[{value:"DIDResolverPlugin class",id:"didresolverplugin-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:g},c="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,s.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"didresolverplugin-class"},"DIDResolverPlugin class"),(0,s.kt)("p",null,"A Gimly Plugin that enables users to resolve DID documents."),(0,s.kt)("p",null,"This plugin is used automatically by plugins that create or verify Verifiable Credentials or Presentations or when working with DIDComm"),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DIDResolverPlugin implements IAgentPlugin\n")),(0,s.kt)("b",null,"Implements:")," [IAgentPlugin](/docs/api/core-types.iagentplugin)",(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-resolver.didresolverplugin._constructor_"},"(constructor)(options)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,s.kt)("code",null,"DIDResolverPlugin")," class")))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-resolver.didresolverplugin.methods"},"methods")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"readonly")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.iresolver"},"IResolver")),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-resolver.didresolverplugin.schema"},"schema")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"readonly")),(0,s.kt)("td",{parentName:"tr",align:null},"{ components: { schemas: { GetDIDComponentArgs: { type: string; properties: { didDocument: { $ref: string; description: string; }; didUrl: { type: string; description: string; }; section: { $ref: string; description: string; }; }; required: string","[","]","; description: string; }; DIDDocument: { type: string; properties: { authentication: { type: string; items: { anyOf: ({ type: string; $ref?: undefined; } ","|"," { $ref: string; type?: undefined; })","[","]","; }; }; assertionMethod: { type: string; items: { anyOf: ({ type: string; $ref?: undefined; } ","|"," { $ref: string; type?: undefined; })","[","]","; }; }; keyAgreement: { type: string; items: { anyOf: ({ type: string; $ref?: undefined; } ","|"," { $ref: string; type?: undefined; })","[","]","; }; }; capabilityInvocation: { type: string; items: { anyOf: ({ type: string; $ref?: undefined; } ","|"," { $ref: string; type?: undefined; })","[","]","; }; }; capabilityDelegation: { type: string; items: { anyOf: ({ type: string; $ref?: undefined; } ","|"," { $ref: string; type?: undefined; })","[","]",'; }; }; "@context": { anyOf: ({ type: string; const: string; items?: undefined; } ',"|"," { type: string; const?: undefined; items?: undefined; } ","|"," { type: string; items: { type: string; }; const?: undefined; })","[","]","; }; id: { type: string; }; alsoKnownAs: { type: string; items: { type: string; }; }; controller: { anyOf: ({ type: string; items?: undefined; } ","|"," { type: string; items: { type: string; }; })","[","]","; }; verificationMethod: { type: string; items: { $ref: string; }; }; service: { type: string; items: { $ref: string; }; }; publicKey: { type: string; items: { $ref: string; }; deprecated: boolean; }; }; required: string","[","]","; description: string; }; VerificationMethod: { type: string; properties: { id: { type: string; }; type: { type: string; }; controller: { type: string; }; publicKeyBase58: { type: string; }; publicKeyBase64: { type: string; }; publicKeyJwk: { $ref: string; }; publicKeyHex: { type: string; }; publicKeyMultibase: { type: string; }; blockchainAccountId: { type: string; }; ethereumAddress: { type: string; }; }; required: string","[","]","; description: string; }; JsonWebKey: { type: string; properties: { alg: { type: string; }; crv: { type: string; }; e: { type: string; }; ext: { type: string; }; key_ops: { type: string; items: { type: string; }; }; kid: { type: string; }; kty: { type: string; }; n: { type: string; }; use: { type: string; }; x: { type: string; }; y: { type: string; }; }; required: string","[","]","; description: string; }; Service: { type: string; properties: { id: { type: string; }; type: { type: string; }; serviceEndpoint: { anyOf: ({ $ref: string; type?: undefined; items?: undefined; } ","|"," { type: string; items: { $ref: string; }; $ref?: undefined; })","[","]","; }; }; required: string","[","]","; description: string; }; ServiceEndpoint: { anyOf: { type: string; }","[","]","; description: string; }; DIDDocumentSection: { type: string; enum: string","[","]","; description: string; }; DIDDocComponent: { anyOf: { $ref: string; }","[","]","; description: string; }; ResolveDidArgs: { type: string; properties: { didUrl: { type: string; description: string; }; options: { $ref: string; description: string; }; }; required: string","[","]",'; description: string; }; DIDResolutionOptions: { type: string; properties: { accept: { type: string; }; }; description: string; }; DIDResolutionResult: { type: string; properties: { "@context": { anyOf: ({ type: string; const: string; items?: undefined; } ',"|"," { type: string; const?: undefined; items?: undefined; } ","|"," { type: string; items: { type: string; }; const?: undefined; })","[","]","; }; didResolutionMetadata: { $ref: string; }; didDocument: { anyOf: ({ $ref: string; type?: undefined; } ","|"," { type: string; $ref?: undefined; })","[","]","; }; didDocumentMetadata: { $ref: string; }; }; required: string","[","]","; description: string; }; DIDResolutionMetadata: { type: string; properties: { contentType: { type: string; }; error: { type: string; }; }; description: string; }; DIDDocumentMetadata: { type: string; properties: { created: { type: string; }; updated: { type: string; }; deactivated: { type: string; }; versionId: { type: string; }; nextUpdate: { type: string; }; nextVersionId: { type: string; }; equivalentId: { type: string; }; canonicalId: { type: string; }; }; description: string; }; }; methods: { getDIDComponentById: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; resolveDid: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; }; }; }"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-resolver.didresolverplugin.getdidcomponentbyid"},"getDIDComponentById({ didDocument, didUrl, section, })")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Dereferences a DID URL fragment and returns the corresponding DID document entry.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-resolver.didresolverplugin.resolvedid"},"resolveDid({ didUrl, options, })")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Resolves DID and returns DID Resolution Result")))))}y.isMDXComponent=!0}}]);