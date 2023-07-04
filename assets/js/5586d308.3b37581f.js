"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[17478],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||i;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},78956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"core-types.iverifycredentialargs.fetchremotecontexts",title:"IVerifyCredentialArgs.fetchRemoteContexts property",hide_title:!0},p=void 0,s={unversionedId:"api/core-types.iverifycredentialargs.fetchremotecontexts",id:"api/core-types.iverifycredentialargs.fetchremotecontexts",title:"IVerifyCredentialArgs.fetchRemoteContexts property",description:"IVerifyCredentialArgs.fetchRemoteContexts property",source:"@site/docs/api/core-types.iverifycredentialargs.fetchremotecontexts.md",sourceDirName:"api",slug:"/api/core-types.iverifycredentialargs.fetchremotecontexts",permalink:"/docs/api/core-types.iverifycredentialargs.fetchremotecontexts",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.iverifycredentialargs.fetchremotecontexts",title:"IVerifyCredentialArgs.fetchRemoteContexts property",hide_title:!0}},l={},f=[{value:"IVerifyCredentialArgs.fetchRemoteContexts property",id:"iverifycredentialargsfetchremotecontexts-property",level:2}],u={toc:f},y="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iverifycredentialargsfetchremotecontexts-property"},"IVerifyCredentialArgs.fetchRemoteContexts property"),(0,i.kt)("p",null,"When dealing with JSON-LD you also MUST provide the proper contexts. Set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," ONLY if you want the ",(0,i.kt)("inlineCode",{parentName:"p"},"@context")," URLs to be fetched in case they are not preloaded. The context definitions SHOULD rather be provided at startup instead of being fetched."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"fetchRemoteContexts?: boolean;\n")))}d.isMDXComponent=!0}}]);