"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[17981],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=n.createContext({}),a=function(e){var t=n.useContext(y),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(y.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,y=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=a(r),f=o,d=l["".concat(y,".").concat(f)]||l[f]||s[f]||p;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,c=new Array(p);c[0]=f;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var a=2;a<p;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94785:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return y},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),c=["components"],i={id:"core-types.tkeytype",title:"TKeyType type",hide_title:!0},y=void 0,a={unversionedId:"api/core-types.tkeytype",id:"api/core-types.tkeytype",title:"TKeyType type",description:"TKeyType type",source:"@site/docs/api/core-types.tkeytype.md",sourceDirName:"api",slug:"/api/core-types.tkeytype",permalink:"/docs/api/core-types.tkeytype",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.tkeytype.md",tags:[],version:"current",frontMatter:{id:"core-types.tkeytype",title:"TKeyType type",hide_title:!0}},u={},l=[{value:"TKeyType type",id:"tkeytype-type",level:2}],s={toc:l},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,p.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"tkeytype-type"},"TKeyType type"),(0,p.kt)("p",null,"Cryptographic key type."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export type TKeyType = 'Ed25519' | 'Secp256k1' | 'Secp256r1' | 'X25519' | 'Bls12381G1' | 'Bls12381G2'\n")))}d.isMDXComponent=!0}}]);