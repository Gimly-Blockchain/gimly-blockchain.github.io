"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[86529],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,y=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"core-types.iresolver.getdidcomponentbyid",title:"IResolver.getDIDComponentById() method",hide_title:!0},d=void 0,p={unversionedId:"api/core-types.iresolver.getdidcomponentbyid",id:"api/core-types.iresolver.getdidcomponentbyid",title:"IResolver.getDIDComponentById() method",description:"IResolver.getDIDComponentById() method",source:"@site/docs/api/core-types.iresolver.getdidcomponentbyid.md",sourceDirName:"api",slug:"/api/core-types.iresolver.getdidcomponentbyid",permalink:"/docs/api/core-types.iresolver.getdidcomponentbyid",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.iresolver.getdidcomponentbyid.md",tags:[],version:"current",frontMatter:{id:"core-types.iresolver.getdidcomponentbyid",title:"IResolver.getDIDComponentById() method",hide_title:!0}},l={},s=[{value:"IResolver.getDIDComponentById() method",id:"iresolvergetdidcomponentbyid-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iresolvergetdidcomponentbyid-method"},"IResolver.getDIDComponentById() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Dereferences a DID URL fragment and returns the corresponding DID document entry."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getDIDComponentById(args: GetDIDComponentArgs): Promise<DIDDocComponent>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.getdidcomponentargs"},"GetDIDComponentArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the component you want.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.diddoccomponent"},"DIDDocComponent"),">"),(0,i.kt)("p",null,"a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," containing the or"),(0,i.kt)("h2",{id:"exceptions"},"Exceptions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"not_found:...")," in case the fragment is not displayed in the DID document"),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const did = 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190'\nconst didFragment = `${did}#controller`\nconst fragment = await agent.getDIDComponentById({\n  didDocument: (await agent.resolveDid({ didUrl: did }))?.didDocument,\n  didUrl: didFragment,\n  section: 'authentication',\n})\nexpect(fragment).toEqual({\n  id: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190#controller',\n  type: 'EcdsaSecp256k1RecoveryMethod2020',\n  controller: 'did:ethr:goerli:0xb09b66026ba5909a7cfe99b76875431d2b8d5190',\n  blockchainAccountId: 'eip155:5:0xb09B66026bA5909A7CFE99b76875431D2b8D5190',\n})\n")))}y.isMDXComponent=!0}}]);