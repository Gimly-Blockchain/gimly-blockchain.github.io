"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[25886],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34838:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"credential-ld.credentialissuerld.createverifiablepresentationld",title:"CredentialIssuerLD.createVerifiablePresentationLD() method",hide_title:!0},s=void 0,d={unversionedId:"api/credential-ld.credentialissuerld.createverifiablepresentationld",id:"api/credential-ld.credentialissuerld.createverifiablepresentationld",title:"CredentialIssuerLD.createVerifiablePresentationLD() method",description:"CredentialIssuerLD.createVerifiablePresentationLD() method",source:"@site/docs/api/credential-ld.credentialissuerld.createverifiablepresentationld.md",sourceDirName:"api",slug:"/api/credential-ld.credentialissuerld.createverifiablepresentationld",permalink:"/docs/api/credential-ld.credentialissuerld.createverifiablepresentationld",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/credential-ld.credentialissuerld.createverifiablepresentationld.md",tags:[],version:"current",frontMatter:{id:"credential-ld.credentialissuerld.createverifiablepresentationld",title:"CredentialIssuerLD.createVerifiablePresentationLD() method",hide_title:!0}},c={},p=[{value:"CredentialIssuerLD.createVerifiablePresentationLD() method",id:"credentialissuerldcreateverifiablepresentationld-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"credentialissuerldcreateverifiablepresentationld-method"},"CredentialIssuerLD.createVerifiablePresentationLD() method"),(0,i.kt)("p",null,"Creates a Verifiable Presentation. The payload, signer and format are chosen based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," parameter."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"createVerifiablePresentationLD(args: ICreateVerifiablePresentationLDArgs, context: IRequiredContext): Promise<VerifiablePresentation>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icreateverifiablepresentationldargs"},"ICreateVerifiablePresentationLDArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Arguments necessary to create the Presentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.irequiredcontext"},"IRequiredContext")),(0,i.kt)("td",{parentName:"tr",align:null},"This reserved param is automatically added and handled by the framework, ","*","do not override","*")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablepresentation"},"VerifiablePresentation"),">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a promise that resolves to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/core-types.verifiablepresentation"},"VerifiablePresentation")," that was requested or rejects with an error if there was a problem with the input or while getting the key to sign")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Presentation data model")),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))}f.isMDXComponent=!0}}]);