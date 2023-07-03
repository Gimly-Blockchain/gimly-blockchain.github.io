"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[35223],{3905:function(e,t,r){r.d(t,{Zo:function(){return y},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,f=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return r?n.createElement(f,o(o({ref:t},y),{},{components:r})):n.createElement(f,o({ref:t},y))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66736:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"key-manager.importableprivatekey",title:"ImportablePrivateKey type",hide_title:!0},l=void 0,c={unversionedId:"api/key-manager.importableprivatekey",id:"api/key-manager.importableprivatekey",title:"ImportablePrivateKey type",description:"ImportablePrivateKey type",source:"@site/docs/api/key-manager.importableprivatekey.md",sourceDirName:"api",slug:"/api/key-manager.importableprivatekey",permalink:"/docs/api/key-manager.importableprivatekey",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/key-manager.importableprivatekey.md",tags:[],version:"current",frontMatter:{id:"key-manager.importableprivatekey",title:"ImportablePrivateKey type",hide_title:!0}},y={},u=[{value:"ImportablePrivateKey type",id:"importableprivatekey-type",level:2}],m={toc:u},s="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"importableprivatekey-type"},"ImportablePrivateKey type"),(0,i.kt)("p",null,"Represents private key data that can be imported. This is a subset of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/key-manager.managedprivatekey"},"ManagedPrivateKey"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," of the resulting ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/key-manager.managedprivatekey"},"ManagedPrivateKey")," can be generated automatically if none is provided."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ImportablePrivateKey = RequireOnly<ManagedPrivateKey, 'privateKeyHex' | 'type'>\n")),(0,i.kt)("b",null,"References:")," [RequireOnly](/docs/api/core-types.requireonly), [ManagedPrivateKey](/docs/api/key-manager.managedprivatekey)")}f.isMDXComponent=!0}}]);