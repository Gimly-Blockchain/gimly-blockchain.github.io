"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[4973],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.icredentialissuer.createverifiablecredential",title:"ICredentialIssuer.createVerifiableCredential() method",hide_title:!0},c=void 0,s={unversionedId:"api/core-types.icredentialissuer.createverifiablecredential",id:"api/core-types.icredentialissuer.createverifiablecredential",title:"ICredentialIssuer.createVerifiableCredential() method",description:"ICredentialIssuer.createVerifiableCredential() method",source:"@site/docs/api/core-types.icredentialissuer.createverifiablecredential.md",sourceDirName:"api",slug:"/api/core-types.icredentialissuer.createverifiablecredential",permalink:"/docs/api/core-types.icredentialissuer.createverifiablecredential",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icredentialissuer.createverifiablecredential.md",tags:[],version:"current",frontMatter:{id:"core-types.icredentialissuer.createverifiablecredential",title:"ICredentialIssuer.createVerifiableCredential() method",hide_title:!0}},d={},p=[{value:"ICredentialIssuer.createVerifiableCredential() method",id:"icredentialissuercreateverifiablecredential-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icredentialissuercreateverifiablecredential-method"},"ICredentialIssuer.createVerifiableCredential() method"),(0,i.kt)("p",null,"Creates a Verifiable Credential. The payload, signer and format are chosen based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," parameter."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"createVerifiableCredential(args: ICreateVerifiableCredentialArgs, context: IssuerAgentContext): Promise<VerifiableCredential>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icreateverifiablecredentialargs"},"ICreateVerifiableCredentialArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Arguments necessary to create the Presentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.issueragentcontext"},"IssuerAgentContext")),(0,i.kt)("td",{parentName:"tr",align:null},"This reserved param is automatically added and handled by the framework, ","*","do not override","*")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential"),">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a promise that resolves to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential")," that was requested or rejects with an error if there was a problem with the input or while getting the key to sign")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"Verifiable Credential data model")))}f.isMDXComponent=!0}}]);