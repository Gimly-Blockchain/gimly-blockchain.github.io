"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[44600],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7401:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.icredentialstatusmanager",title:"ICredentialStatusManager interface",hide_title:!0},s=void 0,c={unversionedId:"api/core-types.icredentialstatusmanager",id:"api/core-types.icredentialstatusmanager",title:"ICredentialStatusManager interface",description:"ICredentialStatusManager interface",source:"@site/docs/api/core-types.icredentialstatusmanager.md",sourceDirName:"api",slug:"/api/core-types.icredentialstatusmanager",permalink:"/docs/api/core-types.icredentialstatusmanager",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icredentialstatusmanager.md",tags:[],version:"current",frontMatter:{id:"core-types.icredentialstatusmanager",title:"ICredentialStatusManager interface",hide_title:!0}},u={},p=[{value:"ICredentialStatusManager interface",id:"icredentialstatusmanager-interface",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icredentialstatusmanager-interface"},"ICredentialStatusManager interface"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Credential status manager interface"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICredentialStatusManager extends IPluginMethodMap\n")),(0,i.kt)("b",null,"Extends:")," [IPluginMethodMap](/docs/api/core-types.ipluginmethodmap)",(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icredentialstatusmanager.credentialstatusgenerate"},"credentialStatusGenerate(args)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Generates a ",(0,i.kt)("code",null,"credentialStatus")," property for a future credential, not yet signed."),(0,i.kt)("p",null,"This method is used during the creation of a ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential")," in order to make it capable of having its status updated later (to be revoked)."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icredentialstatusmanager.credentialstatustypes"},"credentialStatusTypes()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," List all the credential status types (methods) available in the current agent instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icredentialstatusmanager.credentialstatusupdate"},"credentialStatusUpdate(args)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Changes the status of an existing ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential"),". Commonly used to revoke an existing credential.")))))}f.isMDXComponent=!0}}]);