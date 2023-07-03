"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[57568],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38729:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"credential-ld.icredentialissuerld",title:"ICredentialIssuerLD interface",hide_title:!0},d=void 0,c={unversionedId:"api/credential-ld.icredentialissuerld",id:"api/credential-ld.icredentialissuerld",title:"ICredentialIssuerLD interface",description:"ICredentialIssuerLD interface",source:"@site/docs/api/credential-ld.icredentialissuerld.md",sourceDirName:"api",slug:"/api/credential-ld.icredentialissuerld",permalink:"/docs/api/credential-ld.icredentialissuerld",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/credential-ld.icredentialissuerld.md",tags:[],version:"current",frontMatter:{id:"credential-ld.icredentialissuerld",title:"ICredentialIssuerLD interface",hide_title:!0}},s={},u=[{value:"ICredentialIssuerLD interface",id:"icredentialissuerld-interface",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],p={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icredentialissuerld-interface"},"ICredentialIssuerLD interface"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"The interface definition for a plugin that can issue and verify Verifiable Credentials and Presentations that use JSON-LD format (also called Data Integrity Proofs)."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICredentialIssuerLD extends IPluginMethodMap\n")),(0,i.kt)("b",null,"Extends:")," [IPluginMethodMap](/docs/api/core-types.ipluginmethodmap)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"W3C Verifiable Credentials data model")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld.createverifiablecredentialld"},"createVerifiableCredentialLD(args, context)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Creates a Verifiable Credential. The payload, signer and format are chosen based on the ",(0,i.kt)("code",null,"args")," parameter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld.createverifiablepresentationld"},"createVerifiablePresentationLD(args, context)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Creates a Verifiable Presentation. The payload, signer and format are chosen based on the ",(0,i.kt)("code",null,"args")," parameter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld.verifycredentialld"},"verifyCredentialLD(args, context)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Verifies a Verifiable Credential JWT or LDS Format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld.verifypresentationld"},"verifyPresentationLD(args, context)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Verifies a Verifiable Presentation JWT or LDS Format.")))))}m.isMDXComponent=!0}}]);