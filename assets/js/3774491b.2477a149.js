"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[83944],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return l}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(t),s=a,l=g["".concat(c,".").concat(s)]||g[s]||m[s]||i;return t?n.createElement(l,d(d({ref:r},u),{},{components:t})):n.createElement(l,d({ref:r},u))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=s;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[g]="string"==typeof e?e:a,d[1]=o;for(var p=2;p<i;p++)d[p]=t[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},46921:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),d=["components"],o={id:"did-manager.didmanager.didmanagergetproviders",title:"DIDManager.didManagerGetProviders() method",hide_title:!0},c=void 0,p={unversionedId:"api/did-manager.didmanager.didmanagergetproviders",id:"api/did-manager.didmanager.didmanagergetproviders",title:"DIDManager.didManagerGetProviders() method",description:"DIDManager.didManagerGetProviders() method",source:"@site/docs/api/did-manager.didmanager.didmanagergetproviders.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanagergetproviders",permalink:"/docs/api/did-manager.didmanager.didmanagergetproviders",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.didmanager.didmanagergetproviders.md",tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanagergetproviders",title:"DIDManager.didManagerGetProviders() method",hide_title:!0}},u={},g=[{value:"DIDManager.didManagerGetProviders() method",id:"didmanagerdidmanagergetproviders-method",level:2}],m={toc:g},s="wrapper";function l(e){var r=e.components,t=(0,a.Z)(e,d);return(0,i.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanagergetproviders-method"},"DIDManager.didManagerGetProviders() method"),(0,i.kt)("p",null,"Returns a list of available identifier providers"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerGetProviders(): Promise<string[]>;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","string","[","]",">"))}l.isMDXComponent=!0}}]);