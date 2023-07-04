"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[77806],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"data-store.identifier.getlatestclaimvalue",title:"Identifier.getLatestClaimValue() method",hide_title:!0},u=void 0,c={unversionedId:"api/data-store.identifier.getlatestclaimvalue",id:"api/data-store.identifier.getlatestclaimvalue",title:"Identifier.getLatestClaimValue() method",description:"Identifier.getLatestClaimValue() method",source:"@site/docs/api/data-store.identifier.getlatestclaimvalue.md",sourceDirName:"api",slug:"/api/data-store.identifier.getlatestclaimvalue",permalink:"/docs/api/data-store.identifier.getlatestclaimvalue",draft:!1,tags:[],version:"current",frontMatter:{id:"data-store.identifier.getlatestclaimvalue",title:"Identifier.getLatestClaimValue() method",hide_title:!0}},s={},d=[{value:"Identifier.getLatestClaimValue() method",id:"identifiergetlatestclaimvalue-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"identifiergetlatestclaimvalue-method"},"Identifier.getLatestClaimValue() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Convenience method to get the most recent information about a subject DID as described by Verifiable Credential claims."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// get the latest claim value for credentials containing `credentialSubject.name` and this Identifier as subject.\nconst name = await identifier.getLatestClaimValue({ type: 'name' })\n")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getLatestClaimValue(dbConnection: Promise<Connection>, where: any): Promise<string | null | undefined>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dbConnection"),(0,i.kt)("td",{parentName:"tr",align:null},"Promise","<","Connection",">"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"where"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"The TypeORM ",(0,i.kt)("code",null,"where")," filter to use.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","string ","|"," null ","|"," undefined",">"))}f.isMDXComponent=!0}}]);