"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[52945],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),a=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=a(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=a(t),v=o,y=u["".concat(p,".").concat(v)]||u[v]||l[v]||i;return t?n.createElement(y,c(c({ref:r},s),{},{components:t})):n.createElement(y,c({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=v;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[u]="string"==typeof e?e:o,c[1]=d;for(var a=2;a<i;a++)c[a]=t[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},44122:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return d},metadata:function(){return a},toc:function(){return u}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],d={id:"did-discovery.diddiscovery.providers",title:"DIDDiscovery.providers property",hide_title:!0},p=void 0,a={unversionedId:"api/did-discovery.diddiscovery.providers",id:"api/did-discovery.diddiscovery.providers",title:"DIDDiscovery.providers property",description:"DIDDiscovery.providers property",source:"@site/docs/api/did-discovery.diddiscovery.providers.md",sourceDirName:"api",slug:"/api/did-discovery.diddiscovery.providers",permalink:"/docs/api/did-discovery.diddiscovery.providers",draft:!1,tags:[],version:"current",frontMatter:{id:"did-discovery.diddiscovery.providers",title:"DIDDiscovery.providers property",hide_title:!0}},s={},u=[{value:"DIDDiscovery.providers property",id:"diddiscoveryproviders-property",level:2}],l={toc:u},v="wrapper";function y(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)(v,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diddiscoveryproviders-property"},"DIDDiscovery.providers property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly providers: Array<AbstractDidDiscoveryProvider>;\n")))}y.isMDXComponent=!0}}]);