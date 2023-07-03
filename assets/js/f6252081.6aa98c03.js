"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[63831],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9122:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.icreateverifiablecredentialargs",title:"ICreateVerifiableCredentialArgs interface",hide_title:!0},c=void 0,p={unversionedId:"api/core-types.icreateverifiablecredentialargs",id:"api/core-types.icreateverifiablecredentialargs",title:"ICreateVerifiableCredentialArgs interface",description:"ICreateVerifiableCredentialArgs interface",source:"@site/docs/api/core-types.icreateverifiablecredentialargs.md",sourceDirName:"api",slug:"/api/core-types.icreateverifiablecredentialargs",permalink:"/docs/api/core-types.icreateverifiablecredentialargs",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icreateverifiablecredentialargs.md",tags:[],version:"current",frontMatter:{id:"core-types.icreateverifiablecredentialargs",title:"ICreateVerifiableCredentialArgs interface",hide_title:!0}},d={},s=[{value:"ICreateVerifiableCredentialArgs interface",id:"icreateverifiablecredentialargs-interface",level:2},{value:"Properties",id:"properties",level:2}],u={toc:s},f="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icreateverifiablecredentialargs-interface"},"ICreateVerifiableCredentialArgs interface"),(0,i.kt)("p",null,"Encapsulates the parameters required to create a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"W3C Verifiable Credential")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICreateVerifiableCredentialArgs\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.credential"},"credential")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.credentialpayload"},"CredentialPayload")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The JSON payload of the Credential according to the ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"canonical model")),(0,i.kt)("p",null,"The signer of the Credential is chosen based on the ",(0,i.kt)("code",null,"issuer.id")," property of the ",(0,i.kt)("code",null,"credential")),(0,i.kt)("p",null,(0,i.kt)("code",null,"@context"),", ",(0,i.kt)("code",null,"type")," and ",(0,i.kt)("code",null,"issuanceDate")," will be added automatically if omitted"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.fetchremotecontexts"},"fetchRemoteContexts?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("i",null,"(Optional)")," When dealing with JSON-LD you also MUST provide the proper contexts. Set this to ",(0,i.kt)("code",null,"true")," ONLY if you want the ",(0,i.kt)("code",null,"@context")," URLs to be fetched in case they are not preloaded. The context definitions SHOULD rather be provided at startup instead of being fetched."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("code",null,"false")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.keyref"},"keyRef?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," ","[","Optional","]"," The ID of the key that should sign this credential. If this is not specified, the first matching key will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.proofformat"},"proofFormat")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.proofformat"},"ProofFormat")),(0,i.kt)("td",{parentName:"tr",align:null},"The desired format for the VerifiablePresentation to be created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.removeoriginalfields"},"removeOriginalFields?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," Remove payload members during JWT-JSON transformation. Defaults to ",(0,i.kt)("code",null,"true"),". See ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/%5C#jwt-encoding"},"https://www.w3.org/TR/vc-data-model/\\#jwt-encoding"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs.save"},"save?")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," If this parameter is true, the resulting VerifiablePresentation is sent to the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastore"},"storage plugin")," to be saved.")))))}m.isMDXComponent=!0}}]);