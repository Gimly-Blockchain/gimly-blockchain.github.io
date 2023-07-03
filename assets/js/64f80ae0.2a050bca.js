"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[19204],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,s=c["".concat(m,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(s,o(o({ref:t},l),{},{components:r})):n.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93101:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],d={id:"did-manager.didmanager.didmanagerimport",title:"DIDManager.didManagerImport() method",hide_title:!0},m=void 0,p={unversionedId:"api/did-manager.didmanager.didmanagerimport",id:"api/did-manager.didmanager.didmanagerimport",title:"DIDManager.didManagerImport() method",description:"DIDManager.didManagerImport() method",source:"@site/docs/api/did-manager.didmanager.didmanagerimport.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanagerimport",permalink:"/docs/api/did-manager.didmanager.didmanagerimport",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.didmanager.didmanagerimport.md",tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanagerimport",title:"DIDManager.didManagerImport() method",hide_title:!0}},l={},c=[{value:"DIDManager.didManagerImport() method",id:"didmanagerdidmanagerimport-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c},g="wrapper";function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanagerimport-method"},"DIDManager.didManagerImport() method"),(0,i.kt)("p",null,"Imports identifier"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerImport(identifier: MinimalImportableIdentifier, context: IAgentContext<IKeyManager>): Promise<IIdentifier>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identifier"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.minimalimportableidentifier"},"MinimalImportableIdentifier")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),">"))}s.isMDXComponent=!0}}]);