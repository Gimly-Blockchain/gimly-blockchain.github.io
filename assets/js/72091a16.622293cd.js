"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[23161],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),u=n,d=y["".concat(m,".").concat(u)]||y[u]||c[u]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[y]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97154:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return y}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"key-manager.memoryprivatekeystore",title:"MemoryPrivateKeyStore class",hide_title:!0},m=void 0,p={unversionedId:"api/key-manager.memoryprivatekeystore",id:"api/key-manager.memoryprivatekeystore",title:"MemoryPrivateKeyStore class",description:"MemoryPrivateKeyStore class",source:"@site/docs/api/key-manager.memoryprivatekeystore.md",sourceDirName:"api",slug:"/api/key-manager.memoryprivatekeystore",permalink:"/docs/api/key-manager.memoryprivatekeystore",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/key-manager.memoryprivatekeystore.md",tags:[],version:"current",frontMatter:{id:"key-manager.memoryprivatekeystore",title:"MemoryPrivateKeyStore class",hide_title:!0}},s={},y=[{value:"MemoryPrivateKeyStore class",id:"memoryprivatekeystore-class",level:2},{value:"Methods",id:"methods",level:2}],c={toc:y},u="wrapper";function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"memoryprivatekeystore-class"},"MemoryPrivateKeyStore class"),(0,o.kt)("p",null,"An implementation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractprivatekeystore"},"AbstractPrivateKeyStore")," that holds everything in memory."),(0,o.kt)("p",null,"This is usable by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/kms-local.keymanagementsystem"},"KeyManagementSystem")," to hold the private key data."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class MemoryPrivateKeyStore extends AbstractPrivateKeyStore\n")),(0,o.kt)("b",null,"Extends:")," [AbstractPrivateKeyStore](/docs/api/key-manager.abstractprivatekeystore)",(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memoryprivatekeystore.deletekey"},"deleteKey({ alias })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memoryprivatekeystore.getkey"},"getKey({ alias })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memoryprivatekeystore.importkey"},"importKey(args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.memoryprivatekeystore.listkeys"},"listKeys()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);