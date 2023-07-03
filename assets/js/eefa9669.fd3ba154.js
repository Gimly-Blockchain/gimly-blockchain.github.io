"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[87568],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,s=u["".concat(d,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(s,o(o({ref:t},l),{},{components:r})):n.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"did-manager.abstractidentifierprovider.matchprefix",title:"AbstractIdentifierProvider.matchPrefix() method",hide_title:!0},d=void 0,p={unversionedId:"api/did-manager.abstractidentifierprovider.matchprefix",id:"api/did-manager.abstractidentifierprovider.matchprefix",title:"AbstractIdentifierProvider.matchPrefix() method",description:"AbstractIdentifierProvider.matchPrefix() method",source:"@site/docs/api/did-manager.abstractidentifierprovider.matchprefix.md",sourceDirName:"api",slug:"/api/did-manager.abstractidentifierprovider.matchprefix",permalink:"/docs/api/did-manager.abstractidentifierprovider.matchprefix",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.abstractidentifierprovider.matchprefix.md",tags:[],version:"current",frontMatter:{id:"did-manager.abstractidentifierprovider.matchprefix",title:"AbstractIdentifierProvider.matchPrefix() method",hide_title:!0}},l={},u=[{value:"AbstractIdentifierProvider.matchPrefix() method",id:"abstractidentifierprovidermatchprefix-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:u},m="wrapper";function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"abstractidentifierprovidermatchprefix-method"},"AbstractIdentifierProvider.matchPrefix() method"),(0,a.kt)("p",null,"Subclasses can override this to signal that they can work with a given DID prefix"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"matchPrefix?(prefix: string): boolean;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"a DID URL prefix, Example: 'did\ud83d\udd11z6Mk', or ",(0,a.kt)("code",null,"did:ethr"),", or ",(0,a.kt)("code",null,"did:ethr:arbitrum:testnet"))))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"boolean"))}s.isMDXComponent=!0}}]);