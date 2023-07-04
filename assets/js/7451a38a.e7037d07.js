"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[28391],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65638:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"utils.extractissuer",title:"extractIssuer() function",hide_title:!0},c=void 0,u={unversionedId:"api/utils.extractissuer",id:"api/utils.extractissuer",title:"extractIssuer() function",description:"extractIssuer() function",source:"@site/docs/api/utils.extractissuer.md",sourceDirName:"api",slug:"/api/utils.extractissuer",permalink:"/docs/api/utils.extractissuer",draft:!1,tags:[],version:"current",frontMatter:{id:"utils.extractissuer",title:"extractIssuer() function",hide_title:!0}},s={},p=[{value:"extractIssuer() function",id:"extractissuer-function",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"extractissuer-function"},"extractIssuer() function"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Decodes a credential or presentation and returns the issuer ID ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," from a JWT or ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"issuer.id")," from a VC or ",(0,i.kt)("inlineCode",{parentName:"p"},"holder")," from a VP"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function extractIssuer(\n  input?:\n    | W3CVerifiableCredential\n    | W3CVerifiablePresentation\n    | CredentialPayload\n    | PresentationPayload\n    | null,\n): string\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.w3cverifiablecredential"},"W3CVerifiableCredential")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.w3cverifiablepresentation"},"W3CVerifiablePresentation")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.credentialpayload"},"CredentialPayload")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.presentationpayload"},"PresentationPayload")," ","|"," null"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("i",null,"(Optional)")," the credential or presentation whose issuer/holder needs to be extracted."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"string"))}m.isMDXComponent=!0}}]);