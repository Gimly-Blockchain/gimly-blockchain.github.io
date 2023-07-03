"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[90228],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69271:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"core-types.icredentialstatusmanager.credentialstatusupdate",title:"ICredentialStatusManager.credentialStatusUpdate() method",hide_title:!0},l=void 0,u={unversionedId:"api/core-types.icredentialstatusmanager.credentialstatusupdate",id:"api/core-types.icredentialstatusmanager.credentialstatusupdate",title:"ICredentialStatusManager.credentialStatusUpdate() method",description:"ICredentialStatusManager.credentialStatusUpdate() method",source:"@site/docs/api/core-types.icredentialstatusmanager.credentialstatusupdate.md",sourceDirName:"api",slug:"/api/core-types.icredentialstatusmanager.credentialstatusupdate",permalink:"/docs/api/core-types.icredentialstatusmanager.credentialstatusupdate",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.icredentialstatusmanager.credentialstatusupdate.md",tags:[],version:"current",frontMatter:{id:"core-types.icredentialstatusmanager.credentialstatusupdate",title:"ICredentialStatusManager.credentialStatusUpdate() method",hide_title:!0}},c={},d=[{value:"ICredentialStatusManager.credentialStatusUpdate() method",id:"icredentialstatusmanagercredentialstatusupdate-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"icredentialstatusmanagercredentialstatusupdate-method"},"ICredentialStatusManager.credentialStatusUpdate() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Changes the status of an existing ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.verifiablecredential"},"VerifiableCredential"),". Commonly used to revoke an existing credential."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"credentialStatusUpdate(args: CredentialStatusUpdateArgs): Promise<any>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.credentialstatusupdateargs"},"CredentialStatusUpdateArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Input arguments for updating the status(revoking) a credential")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","any",">"))}f.isMDXComponent=!0}}]);