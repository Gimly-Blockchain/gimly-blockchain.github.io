"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[72606],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},73826:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"core-types.icreateverifiablepresentationargs.presentation",title:"ICreateVerifiablePresentationArgs.presentation property",hide_title:!0},s=void 0,c={unversionedId:"api/core-types.icreateverifiablepresentationargs.presentation",id:"api/core-types.icreateverifiablepresentationargs.presentation",title:"ICreateVerifiablePresentationArgs.presentation property",description:"ICreateVerifiablePresentationArgs.presentation property",source:"@site/docs/api/core-types.icreateverifiablepresentationargs.presentation.md",sourceDirName:"api",slug:"/api/core-types.icreateverifiablepresentationargs.presentation",permalink:"/docs/api/core-types.icreateverifiablepresentationargs.presentation",draft:!1,tags:[],version:"current",frontMatter:{id:"core-types.icreateverifiablepresentationargs.presentation",title:"ICreateVerifiablePresentationArgs.presentation property",hide_title:!0}},l={},u=[{value:"ICreateVerifiablePresentationArgs.presentation property",id:"icreateverifiablepresentationargspresentation-property",level:2}],f={toc:u},y="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icreateverifiablepresentationargspresentation-property"},"ICreateVerifiablePresentationArgs.presentation property"),(0,i.kt)("p",null,"The JSON payload of the Presentation according to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"canonical model"),"."),(0,i.kt)("p",null,"The signer of the Presentation is chosen based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"holder")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"presentation")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"issuanceDate")," will be added automatically if omitted"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"presentation: PresentationPayload\n")))}d.isMDXComponent=!0}}]);