"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[99354],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=i,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90770:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"core-types.icredentialverifier.verifypresentation",title:"ICredentialVerifier.verifyPresentation() method",hide_title:!0},p=void 0,s={unversionedId:"api/core-types.icredentialverifier.verifypresentation",id:"api/core-types.icredentialverifier.verifypresentation",title:"ICredentialVerifier.verifyPresentation() method",description:"ICredentialVerifier.verifyPresentation() method",source:"@site/docs/api/core-types.icredentialverifier.verifypresentation.md",sourceDirName:"api",slug:"/api/core-types.icredentialverifier.verifypresentation",permalink:"/docs/api/core-types.icredentialverifier.verifypresentation",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icredentialverifier.verifypresentation.md",tags:[],version:"current",frontMatter:{id:"core-types.icredentialverifier.verifypresentation",title:"ICredentialVerifier.verifyPresentation() method",hide_title:!0}},c={},f=[{value:"ICredentialVerifier.verifyPresentation() method",id:"icredentialverifierverifypresentation-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:f},u="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"icredentialverifierverifypresentation-method"},"ICredentialVerifier.verifyPresentation() method"),(0,a.kt)("p",null,"Verifies a Verifiable Presentation JWT or LDS Format."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"verifyPresentation(args: IVerifyPresentationArgs, context: VerifierAgentContext): Promise<IVerifyResult>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/core-types.iverifypresentationargs"},"IVerifyPresentationArgs")),(0,a.kt)("td",{parentName:"tr",align:null},"Arguments necessary to verify a VerifiableCredential")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/core-types.verifieragentcontext"},"VerifierAgentContext")),(0,a.kt)("td",{parentName:"tr",align:null},"This reserved param is automatically added and handled by the framework, ","*","do not override","*")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core-types.iverifyresult"},"IVerifyResult"),">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a promise that resolves to an object containing a ",(0,a.kt)("inlineCode",{parentName:"li"},"verified")," boolean property and an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," for details")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Credential data model")))}m.isMDXComponent=!0}}]);