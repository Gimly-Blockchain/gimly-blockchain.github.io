"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[25517],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),s=a,g=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(g,d(d({ref:t},p),{},{components:r})):n.createElement(g,d({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,d[1]=o;for(var l=2;l<i;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29394:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"did-manager.didmanager.didmanageraddservice",title:"DIDManager.didManagerAddService() method",hide_title:!0},c=void 0,l={unversionedId:"api/did-manager.didmanager.didmanageraddservice",id:"api/did-manager.didmanager.didmanageraddservice",title:"DIDManager.didManagerAddService() method",description:"DIDManager.didManagerAddService() method",source:"@site/docs/api/did-manager.didmanager.didmanageraddservice.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanageraddservice",permalink:"/docs/api/did-manager.didmanager.didmanageraddservice",draft:!1,tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanageraddservice",title:"DIDManager.didManagerAddService() method",hide_title:!0}},p={},m=[{value:"DIDManager.didManagerAddService() method",id:"didmanagerdidmanageraddservice-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:m},s="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanageraddservice-method"},"DIDManager.didManagerAddService() method"),(0,i.kt)("p",null,"Adds a service to a DID Document"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerAddService({ did, service, options }: IDIDManagerAddServiceArgs, context: IAgentContext<IKeyManager>): Promise<any>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"{ did, service, options }"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanageraddserviceargs"},"IDIDManagerAddServiceArgs")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","any",">"),(0,i.kt)("p",null,"identifier provider specific response. Can be txHash, etc,"))}g.isMDXComponent=!0}}]);