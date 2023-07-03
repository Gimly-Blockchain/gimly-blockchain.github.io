"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[36330],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,s=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return r?a.createElement(s,d(d({ref:t},m),{},{components:r})):a.createElement(s,d({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,d[1]=o;for(var l=2;l<i;l++)d[l]=r[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25829:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"did-manager.didmanager.didmanagercreate",title:"DIDManager.didManagerCreate() method",hide_title:!0},c=void 0,l={unversionedId:"api/did-manager.didmanager.didmanagercreate",id:"api/did-manager.didmanager.didmanagercreate",title:"DIDManager.didManagerCreate() method",description:"DIDManager.didManagerCreate() method",source:"@site/docs/api/did-manager.didmanager.didmanagercreate.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanagercreate",permalink:"/docs/api/did-manager.didmanager.didmanagercreate",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.didmanager.didmanagercreate.md",tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanagercreate",title:"DIDManager.didManagerCreate() method",hide_title:!0}},m={},p=[{value:"DIDManager.didManagerCreate() method",id:"didmanagerdidmanagercreate-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p},g="wrapper";function s(e){var t=e.components,r=(0,n.Z)(e,d);return(0,i.kt)(g,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanagercreate-method"},"DIDManager.didManagerCreate() method"),(0,i.kt)("p",null,"Creates and returns a new identifier"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerCreate(args: IDIDManagerCreateArgs, context: IAgentContext<IKeyManager>): Promise<IIdentifier>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanagercreateargs"},"IDIDManagerCreateArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Required. Arguments to create the identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"*","RESERVED","*"," This is filled by the framework when the method is called. This method's ",(0,i.kt)("a",{href:"/docs/agent/plugins#executing-plugin-methods"},"execution context")," requires an ",(0,i.kt)("code",null,"agent")," that has ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager")," methods.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),">"))}s.isMDXComponent=!0}}]);