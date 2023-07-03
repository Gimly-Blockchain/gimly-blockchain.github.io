"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[31537],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),g=a,s=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(s,d(d({ref:t},p),{},{components:r})):n.createElement(s,d({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,d[1]=o;for(var m=2;m<i;m++)d[m]=r[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"did-manager.didmanager.didmanagerdelete",title:"DIDManager.didManagerDelete() method",hide_title:!0},l=void 0,m={unversionedId:"api/did-manager.didmanager.didmanagerdelete",id:"api/did-manager.didmanager.didmanagerdelete",title:"DIDManager.didManagerDelete() method",description:"DIDManager.didManagerDelete() method",source:"@site/docs/api/did-manager.didmanager.didmanagerdelete.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanagerdelete",permalink:"/docs/api/did-manager.didmanager.didmanagerdelete",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.didmanager.didmanagerdelete.md",tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanagerdelete",title:"DIDManager.didManagerDelete() method",hide_title:!0}},p={},c=[{value:"DIDManager.didManagerDelete() method",id:"didmanagerdidmanagerdelete-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c},g="wrapper";function s(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanagerdelete-method"},"DIDManager.didManagerDelete() method"),(0,i.kt)("p",null,"Deletes identifier"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerDelete({ did }: IDIDManagerDeleteArgs, context: IAgentContext<IKeyManager>): Promise<boolean>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"{ did }"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanagerdeleteargs"},"IDIDManagerDeleteArgs")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","boolean",">"))}s.isMDXComponent=!0}}]);