"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[93301],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(r),k=i,y=u["".concat(p,".").concat(k)]||u[k]||s[k]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"did-provider-key",title:"did-provider-key package",hide_title:!0},p=void 0,l={unversionedId:"api/did-provider-key",id:"api/did-provider-key",title:"did-provider-key package",description:"did-provider-key package",source:"@site/docs/api/did-provider-key.md",sourceDirName:"api",slug:"/api/did-provider-key",permalink:"/docs/api/did-provider-key",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-provider-key.md",tags:[],version:"current",frontMatter:{id:"did-provider-key",title:"did-provider-key package",hide_title:!0}},c={},u=[{value:"did-provider-key package",id:"did-provider-key-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2}],s={toc:u},k="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(k,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"did-provider-key-package"},"did-provider-key package"),(0,a.kt)("p",null,"Provides ",(0,a.kt)("inlineCode",{parentName:"p"},"did:key")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/did-provider-key.keydidprovider"},"identifier provider")," for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/did-manager.didmanager"},"DIDManager")),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-provider-key.keydidprovider"},"KeyDIDProvider")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)"))," ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-manager.didmanager"},"DIDManager")," identifier provider for ",(0,a.kt)("code",null,"did:key")," identifiers"),(0,a.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-provider-key.getdidkeyresolver"},"getDidKeyResolver()")),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a mapping to a did:key resolver, usable by .")))))}y.isMDXComponent=!0}}]);