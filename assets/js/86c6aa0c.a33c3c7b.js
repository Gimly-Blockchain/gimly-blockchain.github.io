"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[70403],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,s=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(s,o(o({ref:t},l),{},{components:r})):n.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70936:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"did-provider-ethr.ethrdidprovider.createidentifier",title:"EthrDIDProvider.createIdentifier() method",hide_title:!0},p=void 0,c={unversionedId:"api/did-provider-ethr.ethrdidprovider.createidentifier",id:"api/did-provider-ethr.ethrdidprovider.createidentifier",title:"EthrDIDProvider.createIdentifier() method",description:"EthrDIDProvider.createIdentifier() method",source:"@site/docs/api/did-provider-ethr.ethrdidprovider.createidentifier.md",sourceDirName:"api",slug:"/api/did-provider-ethr.ethrdidprovider.createidentifier",permalink:"/docs/api/did-provider-ethr.ethrdidprovider.createidentifier",draft:!1,tags:[],version:"current",frontMatter:{id:"did-provider-ethr.ethrdidprovider.createidentifier",title:"EthrDIDProvider.createIdentifier() method",hide_title:!0}},l={},u=[{value:"EthrDIDProvider.createIdentifier() method",id:"ethrdidprovidercreateidentifier-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:u},m="wrapper";function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ethrdidprovidercreateidentifier-method"},"EthrDIDProvider.createIdentifier() method"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"createIdentifier({ kms, options }: {\n        kms?: string;\n        options?: CreateDidEthrOptions;\n    }, context: IRequiredContext): Promise<Omit<IIdentifier, 'provider'>>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{ kms, options }"),(0,a.kt)("td",{parentName:"tr",align:null},"{ kms?: string; options?: CreateDidEthrOptions; }"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"IRequiredContext"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","Omit","<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),", 'provider'",">",">"))}s.isMDXComponent=!0}}]);