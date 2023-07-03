"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[7491],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(t),u=i,m=f["".concat(c,".").concat(u)]||f[u]||s[u]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[f]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35888:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return f}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"core-types.icredentialverifier.verifycredential",title:"ICredentialVerifier.verifyCredential() method",hide_title:!0},c=void 0,d={unversionedId:"api/core-types.icredentialverifier.verifycredential",id:"api/core-types.icredentialverifier.verifycredential",title:"ICredentialVerifier.verifyCredential() method",description:"ICredentialVerifier.verifyCredential() method",source:"@site/docs/api/core-types.icredentialverifier.verifycredential.md",sourceDirName:"api",slug:"/api/core-types.icredentialverifier.verifycredential",permalink:"/docs/api/core-types.icredentialverifier.verifycredential",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icredentialverifier.verifycredential.md",tags:[],version:"current",frontMatter:{id:"core-types.icredentialverifier.verifycredential",title:"ICredentialVerifier.verifyCredential() method",hide_title:!0}},p={},f=[{value:"ICredentialVerifier.verifyCredential() method",id:"icredentialverifierverifycredential-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:f},u="wrapper";function m(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"icredentialverifierverifycredential-method"},"ICredentialVerifier.verifyCredential() method"),(0,a.kt)("p",null,"Verifies a Verifiable Credential JWT, LDS Format or EIP712."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"verifyCredential(args: IVerifyCredentialArgs, context: VerifierAgentContext): Promise<IVerifyResult>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/core-types.iverifycredentialargs"},"IVerifyCredentialArgs")),(0,a.kt)("td",{parentName:"tr",align:null},"Arguments necessary to verify a VerifiableCredential")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/core-types.verifieragentcontext"},"VerifierAgentContext")),(0,a.kt)("td",{parentName:"tr",align:null},"This reserved param is automatically added and handled by the framework, ","*","do not override","*")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core-types.iverifyresult"},"IVerifyResult"),">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a promise that resolves to an object containing a ",(0,a.kt)("inlineCode",{parentName:"li"},"verified")," boolean property and an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," for details")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"Verifiable Credential data model")))}m.isMDXComponent=!0}}]);