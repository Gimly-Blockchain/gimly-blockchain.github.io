"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[14893],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,g=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return r?a.createElement(g,d(d({ref:t},l),{},{components:r})):a.createElement(g,d({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,d[1]=o;for(var c=2;c<i;c++)d[c]=r[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88164:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"core-types.ididmanager.didmanagerupdate",title:"IDIDManager.didManagerUpdate() method",hide_title:!0},p=void 0,c={unversionedId:"api/core-types.ididmanager.didmanagerupdate",id:"api/core-types.ididmanager.didmanagerupdate",title:"IDIDManager.didManagerUpdate() method",description:"IDIDManager.didManagerUpdate() method",source:"@site/docs/api/core-types.ididmanager.didmanagerupdate.md",sourceDirName:"api",slug:"/api/core-types.ididmanager.didmanagerupdate",permalink:"/docs/api/core-types.ididmanager.didmanagerupdate",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.ididmanager.didmanagerupdate.md",tags:[],version:"current",frontMatter:{id:"core-types.ididmanager.didmanagerupdate",title:"IDIDManager.didManagerUpdate() method",hide_title:!0}},l={},u=[{value:"IDIDManager.didManagerUpdate() method",id:"ididmanagerdidmanagerupdate-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:u},s="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,d);return(0,i.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ididmanagerdidmanagerupdate-method"},"IDIDManager.didManagerUpdate() method"),(0,i.kt)("p",null,"Updates the DID document of a managed ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"DID"),"."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerUpdate(args: IDIDManagerUpdateArgs, context: IAgentContext<IKeyManager>): Promise<IIdentifier>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanagerupdateargs"},"IDIDManagerUpdateArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"the arguments necessary for the update. The options are specific for each DID provider.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"*","RESERVED","*"," This is filled by the framework when the method is called. This method's ",(0,i.kt)("a",{href:"/docs/agent/plugins#executing-plugin-methods"},"execution context")," requires an ",(0,i.kt)("code",null,"agent")," that has ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager")," methods.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),">"))}g.isMDXComponent=!0}}]);