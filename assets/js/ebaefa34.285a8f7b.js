"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[57959],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"core-types.icheckcredentialstatusargs.diddocumentoverride",title:"ICheckCredentialStatusArgs.didDocumentOverride property",hide_title:!0},d=void 0,u={unversionedId:"api/core-types.icheckcredentialstatusargs.diddocumentoverride",id:"api/core-types.icheckcredentialstatusargs.diddocumentoverride",title:"ICheckCredentialStatusArgs.didDocumentOverride property",description:"ICheckCredentialStatusArgs.didDocumentOverride property",source:"@site/docs/api/core-types.icheckcredentialstatusargs.diddocumentoverride.md",sourceDirName:"api",slug:"/api/core-types.icheckcredentialstatusargs.diddocumentoverride",permalink:"/docs/api/core-types.icheckcredentialstatusargs.diddocumentoverride",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.icheckcredentialstatusargs.diddocumentoverride",title:"ICheckCredentialStatusArgs.didDocumentOverride property",hide_title:!0}},s={},p=[{value:"ICheckCredentialStatusArgs.didDocumentOverride property",id:"icheckcredentialstatusargsdiddocumentoverride-property",level:2}],l={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icheckcredentialstatusargsdiddocumentoverride-property"},"ICheckCredentialStatusArgs.didDocumentOverride property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"The DID document of the issuer. This can be used in case the DID Document is already resolver, to avoid a potentially expensive DID resolution operation."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didDocumentOverride?: DIDDocument;\n")))}f.isMDXComponent=!0}}]);