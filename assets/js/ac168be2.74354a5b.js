"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[59857],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var o=2;o<l;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45077:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var n=r(87462),i=r(63366),l=(r(67294),r(3905)),a=["components"],s={id:"selective-disclosure.iselectivedisclosure",title:"ISelectiveDisclosure interface",hide_title:!0},c=void 0,o={unversionedId:"api/selective-disclosure.iselectivedisclosure",id:"api/selective-disclosure.iselectivedisclosure",title:"ISelectiveDisclosure interface",description:"ISelectiveDisclosure interface",source:"@site/docs/api/selective-disclosure.iselectivedisclosure.md",sourceDirName:"api",slug:"/api/selective-disclosure.iselectivedisclosure",permalink:"/docs/api/selective-disclosure.iselectivedisclosure",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/selective-disclosure.iselectivedisclosure.md",tags:[],version:"current",frontMatter:{id:"selective-disclosure.iselectivedisclosure",title:"ISelectiveDisclosure interface",hide_title:!0}},u={},p=[{value:"ISelectiveDisclosure interface",id:"iselectivedisclosure-interface",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"iselectivedisclosure-interface"},"ISelectiveDisclosure interface"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"Describes the interface of a Selective Disclosure plugin."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ISelectiveDisclosure extends IPluginMethodMap\n")),(0,l.kt)("b",null,"Extends:")," [IPluginMethodMap](/docs/api/core-types.ipluginmethodmap)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uport-project/specs/blob/develop/messages/sharereq.md"},"Selective Disclosure Request")),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosure.createprofilepresentation"},"createProfilePresentation(args, context)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosure.createselectivedisclosurerequest"},"createSelectiveDisclosureRequest(args, context)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosure.getverifiablecredentialsforsdr"},"getVerifiableCredentialsForSdr(args, context)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosure.validatepresentationagainstsdr"},"validatePresentationAgainstSdr(args, context)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))))))}m.isMDXComponent=!0}}]);