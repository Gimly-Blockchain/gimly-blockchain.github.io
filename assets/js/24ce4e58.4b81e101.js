"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[26848],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29154:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.icreateverifiablepresentationargs",title:"ICreateVerifiablePresentationArgs interface",hide_title:!0},p=void 0,s={unversionedId:"api/core-types.icreateverifiablepresentationargs",id:"api/core-types.icreateverifiablepresentationargs",title:"ICreateVerifiablePresentationArgs interface",description:"ICreateVerifiablePresentationArgs interface",source:"@site/docs/api/core-types.icreateverifiablepresentationargs.md",sourceDirName:"api",slug:"/api/core-types.icreateverifiablepresentationargs",permalink:"/docs/api/core-types.icreateverifiablepresentationargs",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.icreateverifiablepresentationargs",title:"ICreateVerifiablePresentationArgs interface",hide_title:!0}},c={},d=[{value:"ICreateVerifiablePresentationArgs interface",id:"icreateverifiablepresentationargs-interface",level:2},{value:"Properties",id:"properties",level:2}],u={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icreateverifiablepresentationargs-interface"},"ICreateVerifiablePresentationArgs interface"),(0,i.kt)("p",null,"Encapsulates the parameters required to create a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"W3C Verifiable Presentation")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICreateVerifiablePresentationArgs\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.challenge"},"challenge?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," Optional (only JWT) string challenge parameter to add to the verifiable presentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.domain"},"domain?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," Optional string domain parameter to add to the verifiable presentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.fetchremotecontexts"},"fetchRemoteContexts?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("i",null,"(Optional)")," When dealing with JSON-LD you also MUST provide the proper contexts. Set this to ",(0,i.kt)("code",null,"true")," ONLY if you want the ",(0,i.kt)("code",null,"@context")," URLs to be fetched in case they are not preloaded. The context definitions SHOULD rather be provided at startup instead of being fetched."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("code",null,"false")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.keyref"},"keyRef?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," ","[","Optional","]"," The ID of the key that should sign this presentation. If this is not specified, the first matching key will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.presentation"},"presentation")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.presentationpayload"},"PresentationPayload")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The JSON payload of the Presentation according to the ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"canonical model"),"."),(0,i.kt)("p",null,"The signer of the Presentation is chosen based on the ",(0,i.kt)("code",null,"holder")," property of the ",(0,i.kt)("code",null,"presentation")),(0,i.kt)("p",null,(0,i.kt)("code",null,"@context"),", ",(0,i.kt)("code",null,"type")," and ",(0,i.kt)("code",null,"issuanceDate")," will be added automatically if omitted"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.proofformat"},"proofFormat")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.proofformat"},"ProofFormat")),(0,i.kt)("td",{parentName:"tr",align:null},"The desired format for the VerifiablePresentation to be created. Currently, only JWT is supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.removeoriginalfields"},"removeOriginalFields?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," Remove payload members during JWT-JSON transformation. Defaults to ",(0,i.kt)("code",null,"true"),". See ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/%5C#jwt-encoding"},"https://www.w3.org/TR/vc-data-model/\\#jwt-encoding"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablepresentationargs.save"},"save?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," If this parameter is true, the resulting VerifiablePresentation is sent to the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastore"},"storage plugin")," to be saved. ",(0,i.kt)("p",null),(0,i.kt)("p",null))))))}m.isMDXComponent=!0}}]);