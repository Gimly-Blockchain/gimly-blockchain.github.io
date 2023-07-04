"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[86527],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40284:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],d={id:"credential-ld",title:"credential-ld package",hide_title:!0},o=void 0,p={unversionedId:"api/credential-ld",id:"api/credential-ld",title:"credential-ld package",description:"credential-ld package",source:"@site/docs/api/credential-ld.md",sourceDirName:"api",slug:"/api/credential-ld",permalink:"/docs/api/credential-ld",draft:!1,tags:[],version:"current",frontMatter:{id:"credential-ld",title:"credential-ld package",hide_title:!0}},s={},c=[{value:"credential-ld package",id:"credential-ld-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],u={toc:c},m="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"credential-ld-package"},"credential-ld package"),(0,l.kt)("p",null,"Provides a ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/credential-ld.credentialissuerld"},"plugin")," for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," that implements ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/credential-ld.icredentialissuerld"},"ICredentialIssuerLD")," interface."),(0,l.kt)("p",null,"This plugin adds support for working with JSON-LD credentials. When installed, this plugin will be automatically used by ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/credential-w3c.credentialplugin"},"CredentialPlugin")," if the user requests the credential to be signed by one of the installed signature suites."),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.credentialissuerld"},"CredentialIssuerLD")),(0,l.kt)("td",{parentName:"tr",align:null},"A Gimly plugin that implements the ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld"},"ICredentialIssuerLD")," methods.")))),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interface"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icreateverifiablecredentialldargs"},"ICreateVerifiableCredentialLDArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Encapsulates the parameters required to create a ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"W3C Verifiable Credential")),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icreateverifiablepresentationldargs"},"ICreateVerifiablePresentationLDArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Encapsulates the parameters required to create a ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"W3C Verifiable Presentation")),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.icredentialissuerld"},"ICredentialIssuerLD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The interface definition for a plugin that can issue and verify Verifiable Credentials and Presentations that use JSON-LD format (also called Data Integrity Proofs).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.iverifycredentialldargs"},"IVerifyCredentialLDArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Encapsulates the parameters required to verify a ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"W3C Verifiable Credential")),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.iverifypresentationldargs"},"IVerifyPresentationLDArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Encapsulates the parameters required to verify a ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"W3C Verifiable Presentation")),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.lddefaultcontexts"},"LdDefaultContexts")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Provides a hardcoded map of common Linked Data ",(0,l.kt)("code",null,"@context")," definitions."),(0,l.kt)("p",null,"You can use this to bootstrap the ",(0,l.kt)("code",null,"@context")," definitions used by ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.credentialissuerld"},"CredentialIssuerLD")," with these common context definitions."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,l.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.contextdoc"},"ContextDoc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Describes a document with a ",(0,l.kt)("code",null,"@context")," property."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/credential-ld.irequiredcontext"},"IRequiredContext")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Represents the requirements that this plugin has. The agent that is using this plugin is expected to provide these methods."),(0,l.kt)("p",null,"This interface can be used for static type checks, to make sure your application is properly initialized."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))))}k.isMDXComponent=!0}}]);