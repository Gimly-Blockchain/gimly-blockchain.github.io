"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[63134],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95069:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"remote-server.messagingrouter",title:"MessagingRouter variable",hide_title:!0},u=void 0,c={unversionedId:"api/remote-server.messagingrouter",id:"api/remote-server.messagingrouter",title:"MessagingRouter variable",description:"MessagingRouter variable",source:"@site/docs/api/remote-server.messagingrouter.md",sourceDirName:"api",slug:"/api/remote-server.messagingrouter",permalink:"/docs/api/remote-server.messagingrouter",draft:!1,tags:[],version:"current",frontMatter:{id:"remote-server.messagingrouter",title:"MessagingRouter variable",hide_title:!0}},l={},p=[{value:"MessagingRouter variable",id:"messagingrouter-variable",level:2}],g={toc:p},f="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"messagingrouter-variable"},"MessagingRouter variable"),(0,a.kt)("p",null,"Creates a router for handling incoming messages."),(0,a.kt)("p",null,"Messages posted to this router get sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleMessage")," method of the associated agent where this is used."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"MessagingRouter: (options: MessagingRouterOptions) => Router\n")))}m.isMDXComponent=!0}}]);