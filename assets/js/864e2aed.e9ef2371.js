"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[63199],{3905:function(e,t,r){r.d(t,{Zo:function(){return y},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,d=p["".concat(m,".").concat(u)]||p[u]||c[u]||o;return r?n.createElement(d,l(l({ref:t},y),{},{components:r})):n.createElement(d,l({ref:t},y))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8179:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"key-manager.memorykeystore",title:"MemoryKeyStore class",hide_title:!0},m=void 0,s={unversionedId:"api/key-manager.memorykeystore",id:"api/key-manager.memorykeystore",title:"MemoryKeyStore class",description:"MemoryKeyStore class",source:"@site/docs/api/key-manager.memorykeystore.md",sourceDirName:"api",slug:"/api/key-manager.memorykeystore",permalink:"/docs/api/key-manager.memorykeystore",draft:!1,tags:[],version:"current",frontMatter:{id:"key-manager.memorykeystore",title:"MemoryKeyStore class",hide_title:!0}},y={},p=[{value:"MemoryKeyStore class",id:"memorykeystore-class",level:2},{value:"Methods",id:"methods",level:2}],c={toc:p},u="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"memorykeystore-class"},"MemoryKeyStore class"),(0,o.kt)("p",null,"An implementation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractkeystore"},"AbstractKeyStore")," that holds everything in memory."),(0,o.kt)("p",null,"This is usable by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.keymanager"},"KeyManager")," to hold the key metadata and relationship to the KMS implementation."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class MemoryKeyStore extends AbstractKeyStore\n")),(0,o.kt)("b",null,"Extends:")," [AbstractKeyStore](/docs/api/key-manager.abstractkeystore)",(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memorykeystore.deletekey"},"deleteKey({ kid })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memorykeystore.getkey"},"getKey({ kid })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memorykeystore.importkey"},"importKey(args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memorykeystore.listkeys"},"listKeys(args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);