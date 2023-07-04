"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[90586],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,g=u["".concat(l,".").concat(s)]||u[s]||m[s]||d;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,i=new Array(d);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<d;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59666:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),d=(r(67294),r(3905)),i=["components"],o={id:"core-types.ididmanager.didmanageraddkey",title:"IDIDManager.didManagerAddKey() method",hide_title:!0},l=void 0,c={unversionedId:"api/core-types.ididmanager.didmanageraddkey",id:"api/core-types.ididmanager.didmanageraddkey",title:"IDIDManager.didManagerAddKey() method",description:"IDIDManager.didManagerAddKey() method",source:"@site/docs/api/core-types.ididmanager.didmanageraddkey.md",sourceDirName:"api",slug:"/api/core-types.ididmanager.didmanageraddkey",permalink:"/docs/api/core-types.ididmanager.didmanageraddkey",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.ididmanager.didmanageraddkey",title:"IDIDManager.didManagerAddKey() method",hide_title:!0}},p={},u=[{value:"IDIDManager.didManagerAddKey() method",id:"ididmanagerdidmanageraddkey-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:u},s="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,d.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"ididmanagerdidmanageraddkey-method"},"IDIDManager.didManagerAddKey() method"),(0,d.kt)("p",null,"Adds a key to a DID Document"),(0,d.kt)("b",null,"Signature:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerAddKey(args: IDIDManagerAddKeyArgs, context: IAgentContext<IKeyManager>): Promise<any>;\n")),(0,d.kt)("h2",{id:"parameters"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,d.kt)("th",{parentName:"tr",align:null},"Type"),(0,d.kt)("th",{parentName:"tr",align:null},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"args"),(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanageraddkeyargs"},"IDIDManagerAddKeyArgs")),(0,d.kt)("td",{parentName:"tr",align:null})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"context"),(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,d.kt)("td",{parentName:"tr",align:null})))),(0,d.kt)("b",null,"Returns:"),(0,d.kt)("p",null,"Promise","<","any",">"),(0,d.kt)("p",null,"identifier provider specific response. Can be txHash, etc,"))}g.isMDXComponent=!0}}]);