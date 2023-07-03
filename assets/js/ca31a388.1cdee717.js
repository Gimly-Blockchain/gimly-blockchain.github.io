"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[4683],{3905:function(e,t,n){n.d(t,{Zo:function(){return y},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),f=u(n),s=o,d=f["".concat(p,".").concat(s)]||f[s]||l[s]||a;return n?r.createElement(d,i(i({ref:t},y),{},{components:n})):r.createElement(d,i({ref:t},y))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"core-types.managedkeyinfo",title:"ManagedKeyInfo type",hide_title:!0},p=void 0,u={unversionedId:"api/core-types.managedkeyinfo",id:"api/core-types.managedkeyinfo",title:"ManagedKeyInfo type",description:"ManagedKeyInfo type",source:"@site/docs/api/core-types.managedkeyinfo.md",sourceDirName:"api",slug:"/api/core-types.managedkeyinfo",permalink:"/docs/api/core-types.managedkeyinfo",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.managedkeyinfo.md",tags:[],version:"current",frontMatter:{id:"core-types.managedkeyinfo",title:"ManagedKeyInfo type",hide_title:!0}},y={},f=[{value:"ManagedKeyInfo type",id:"managedkeyinfo-type",level:2}],l={toc:f},s="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"managedkeyinfo-type"},"ManagedKeyInfo type"),(0,a.kt)("p",null,"Represents information about a managed key. Private or secret key material is NOT present."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ManagedKeyInfo = Omit<IKey, 'privateKeyHex'>\n")),(0,a.kt)("b",null,"References:")," [IKey](/docs/api/core-types.ikey)")}d.isMDXComponent=!0}}]);