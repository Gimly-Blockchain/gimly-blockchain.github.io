"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[26682],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,s=m["".concat(l,".").concat(g)]||m[g]||u[g]||d;return r?n.createElement(s,i(i({ref:t},c),{},{components:r})):n.createElement(s,i({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,i=new Array(d);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<d;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20873:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),d=(r(67294),r(3905)),i=["components"],o={id:"did-manager.didmanager.didmanageraddkey",title:"DIDManager.didManagerAddKey() method",hide_title:!0},l=void 0,p={unversionedId:"api/did-manager.didmanager.didmanageraddkey",id:"api/did-manager.didmanager.didmanageraddkey",title:"DIDManager.didManagerAddKey() method",description:"DIDManager.didManagerAddKey() method",source:"@site/docs/api/did-manager.didmanager.didmanageraddkey.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanageraddkey",permalink:"/docs/api/did-manager.didmanager.didmanageraddkey",draft:!1,tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanageraddkey",title:"DIDManager.didManagerAddKey() method",hide_title:!0}},c={},m=[{value:"DIDManager.didManagerAddKey() method",id:"didmanagerdidmanageraddkey-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:m},g="wrapper";function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,d.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"didmanagerdidmanageraddkey-method"},"DIDManager.didManagerAddKey() method"),(0,d.kt)("p",null,"Adds a key to a DID Document"),(0,d.kt)("b",null,"Signature:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerAddKey({ did, key, options }: IDIDManagerAddKeyArgs, context: IAgentContext<IKeyManager>): Promise<any>;\n")),(0,d.kt)("h2",{id:"parameters"},"Parameters"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,d.kt)("th",{parentName:"tr",align:null},"Type"),(0,d.kt)("th",{parentName:"tr",align:null},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"{ did, key, options }"),(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanageraddkeyargs"},"IDIDManagerAddKeyArgs")),(0,d.kt)("td",{parentName:"tr",align:null})),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},"context"),(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,d.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,d.kt)("td",{parentName:"tr",align:null})))),(0,d.kt)("b",null,"Returns:"),(0,d.kt)("p",null,"Promise","<","any",">"),(0,d.kt)("p",null,"identifier provider specific response. Can be txHash, etc,"))}s.isMDXComponent=!0}}]);