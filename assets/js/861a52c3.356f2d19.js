"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[90012],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,c(c({ref:t},p),{},{components:r})):a.createElement(k,c({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),c=["components"],l={id:"kms-local.secretbox",title:"SecretBox class",hide_title:!0},s=void 0,i={unversionedId:"api/kms-local.secretbox",id:"api/kms-local.secretbox",title:"SecretBox class",description:"SecretBox class",source:"@site/docs/api/kms-local.secretbox.md",sourceDirName:"api",slug:"/api/kms-local.secretbox",permalink:"/docs/api/kms-local.secretbox",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/kms-local.secretbox.md",tags:[],version:"current",frontMatter:{id:"kms-local.secretbox",title:"SecretBox class",hide_title:!0}},p={},u=[{value:"SecretBox class",id:"secretbox-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],m={toc:u},d="wrapper";function k(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"secretbox-class"},"SecretBox class"),(0,o.kt)("p",null,"This is an implementation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")," that uses a JavaScript ",(0,o.kt)("a",{parentName:"p",href:"https://nacl.cr.yp.to/secretbox.html"},"nacl secretBox")," implementation for encryption."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/data-store.privatekeystore"},"PrivateKeyStore")," See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/data-store-json.privatekeystorejson"},"PrivateKeyStoreJson")," See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class SecretBox extends AbstractSecretBox\n")),(0,o.kt)("b",null,"Extends:")," [AbstractSecretBox](/docs/api/key-manager.abstractsecretbox)",(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/kms-local.secretbox._constructor_"},"(constructor)(secretKey)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,o.kt)("code",null,"SecretBox")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/kms-local.secretbox.createsecretkey"},"createSecretKey()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"static")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/kms-local.secretbox.decrypt"},"decrypt(encryptedMessageHex)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/kms-local.secretbox.encrypt"},"encrypt(message)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);