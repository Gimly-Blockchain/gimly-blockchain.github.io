"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[42114],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),y=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=y(r),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var y=2;y<o;y++)i[y]=r[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8866:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return y},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"key-manager.keymanager.keymanagerdecryptjwe",title:"KeyManager.keyManagerDecryptJWE() method",hide_title:!0},p=void 0,y={unversionedId:"api/key-manager.keymanager.keymanagerdecryptjwe",id:"api/key-manager.keymanager.keymanagerdecryptjwe",title:"KeyManager.keyManagerDecryptJWE() method",description:"KeyManager.keyManagerDecryptJWE() method",source:"@site/docs/api/key-manager.keymanager.keymanagerdecryptjwe.md",sourceDirName:"api",slug:"/api/key-manager.keymanager.keymanagerdecryptjwe",permalink:"/docs/api/key-manager.keymanager.keymanagerdecryptjwe",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/key-manager.keymanager.keymanagerdecryptjwe.md",tags:[],version:"current",frontMatter:{id:"key-manager.keymanager.keymanagerdecryptjwe",title:"KeyManager.keyManagerDecryptJWE() method",hide_title:!0}},l={},m=[{value:"KeyManager.keyManagerDecryptJWE() method",id:"keymanagerkeymanagerdecryptjwe-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:m},g="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keymanagerkeymanagerdecryptjwe-method"},"KeyManager.keyManagerDecryptJWE() method"),(0,o.kt)("p",null,"Decrypts data This API may change without a BREAKING CHANGE notice."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"keyManagerDecryptJWE({ kid, data }: IKeyManagerDecryptJWEArgs): Promise<string>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"{ kid, data }"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanagerdecryptjweargs"},"IKeyManagerDecryptJWEArgs")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","string",">"))}d.isMDXComponent=!0}}]);