"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[2588],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(k,s(s({ref:e},c),{},{components:r})):a.createElement(k,s({ref:e},c))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30670:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"data-store-json.privatekeystorejson",title:"PrivateKeyStoreJson class",hide_title:!0},l=void 0,p={unversionedId:"api/data-store-json.privatekeystorejson",id:"api/data-store-json.privatekeystorejson",title:"PrivateKeyStoreJson class",description:"PrivateKeyStoreJson class",source:"@site/docs/api/data-store-json.privatekeystorejson.md",sourceDirName:"api",slug:"/api/data-store-json.privatekeystorejson",permalink:"/docs/api/data-store-json.privatekeystorejson",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store-json.privatekeystorejson.md",tags:[],version:"current",frontMatter:{id:"data-store-json.privatekeystorejson",title:"PrivateKeyStoreJson class",hide_title:!0}},c={},u=[{value:"PrivateKeyStoreJson class",id:"privatekeystorejson-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u},m="wrapper";function k(t){var e=t.components,r=(0,n.Z)(t,s);return(0,o.kt)(m,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"privatekeystorejson-class"},"PrivateKeyStoreJson class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"An implementation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractprivatekeystore"},"AbstractPrivateKeyStore")," that uses a JSON object to store the private key material needed by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/kms-local.keymanagementsystem"},"KeyManagementSystem"),"."),(0,o.kt)("p",null,"This class must be initialized with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", which serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. The JSON object does not have to be shared with other users of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", but it can be."),(0,o.kt)("p",null,"If an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")," is used, then key material is encrypted, even in memory."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PrivateKeyStoreJson extends AbstractPrivateKeyStore\n")),(0,o.kt)("b",null,"Extends:")," [AbstractPrivateKeyStore](/docs/api/key-manager.abstractprivatekeystore)",(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson._constructor_"},"(constructor)(jsonStore, secretBox)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,o.kt)("code",null,"PrivateKeyStoreJson")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson.deletekey"},"deleteKey({ alias })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson.getkey"},"getKey({ alias })")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson.importkey"},"importKey(args)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson.listkeys"},"listKeys()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))))))}k.isMDXComponent=!0}}]);