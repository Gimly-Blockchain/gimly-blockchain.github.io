"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[64364],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),s=i,h=p["".concat(l,".").concat(s)]||p[s]||f[s]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"utils.getchainidfordidethr",title:"getChainIdForDidEthr() function",hide_title:!0},l=void 0,u={unversionedId:"api/utils.getchainidfordidethr",id:"api/utils.getchainidfordidethr",title:"getChainIdForDidEthr() function",description:"getChainIdForDidEthr() function",source:"@site/docs/api/utils.getchainidfordidethr.md",sourceDirName:"api",slug:"/api/utils.getchainidfordidethr",permalink:"/docs/api/utils.getchainidfordidethr",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/utils.getchainidfordidethr.md",tags:[],version:"current",frontMatter:{id:"utils.getchainidfordidethr",title:"getChainIdForDidEthr() function",hide_title:!0}},d={},p=[{value:"getChainIdForDidEthr() function",id:"getchainidfordidethr-function",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:p},s="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(s,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getchainidfordidethr-function"},"getChainIdForDidEthr() function"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Extracts the chain ID from a supporting legacy representations as well."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getChainIdForDidEthr(verificationMethod: _NormalizedVerificationMethod): number\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"verificationMethod"),(0,a.kt)("td",{parentName:"tr",align:null},"_","NormalizedVerificationMethod"),(0,a.kt)("td",{parentName:"tr",align:null},"the VerificationMethod object (from a DID document)")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"number"),(0,a.kt)("p",null,"a chain ID ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if none could be extracted."),(0,a.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))}h.isMDXComponent=!0}}]);