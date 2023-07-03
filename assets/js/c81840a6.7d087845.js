"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[85508],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50905:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={id:"core-types.iresolver.resolvedid",title:"IResolver.resolveDid() method",hide_title:!0},s=void 0,d={unversionedId:"api/core-types.iresolver.resolvedid",id:"api/core-types.iresolver.resolvedid",title:"IResolver.resolveDid() method",description:"IResolver.resolveDid() method",source:"@site/docs/api/core-types.iresolver.resolvedid.md",sourceDirName:"api",slug:"/api/core-types.iresolver.resolvedid",permalink:"/docs/api/core-types.iresolver.resolvedid",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.iresolver.resolvedid.md",tags:[],version:"current",frontMatter:{id:"core-types.iresolver.resolvedid",title:"IResolver.resolveDid() method",hide_title:!0}},c={},p=[{value:"IResolver.resolveDid() method",id:"iresolverresolvedid-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:p},m="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iresolverresolvedid-method"},"IResolver.resolveDid() method"),(0,i.kt)("p",null,"Resolves DID and returns DID Resolution Result"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"resolveDid(args: ResolveDidArgs): Promise<DIDResolutionResult>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.resolvedidargs"},"ResolveDidArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Input arguments for resolving a DID")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","DIDResolutionResult",">"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const doc = await agent.resolveDid({\n  didUrl: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190',\n})\nexpect(doc.didDocument).toEqual({\n  '@context': ['https://www.w3.org/ns/did/v1', 'https://w3id.org/security/suites/secp256k1recovery-2020/v2'],\n  id: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190',\n  verificationMethod: [\n    {\n      id: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190#controller',\n      type: 'EcdsaSecp256k1RecoveryMethod2020',\n      controller: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190',\n      blockchainAccountId: 'eip155:5:0xb09B66026bA5909A7CFE99b76875431D2b8D5190',\n    },\n  ],\n  authentication: ['did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190#controller'],\n  assertionMethod: ['did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190#controller'],\n})\n")))}v.isMDXComponent=!0}}]);