"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[88314],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,s(s({ref:e},p),{},{components:a})):n.createElement(h,s({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16640:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"data-store-json",title:"data-store-json package",hide_title:!0},l=void 0,d={unversionedId:"api/data-store-json",id:"api/data-store-json",title:"data-store-json package",description:"data-store-json package",source:"@site/docs/api/data-store-json.md",sourceDirName:"api",slug:"/api/data-store-json",permalink:"/docs/api/data-store-json",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/data-store-json.md",tags:[],version:"current",frontMatter:{id:"data-store-json",title:"data-store-json package",hide_title:!0}},p={},c=[{value:"data-store-json package",id:"data-store-json-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],m={toc:c},u="wrapper";function h(t){var e=t.components,a=(0,r.Z)(t,s);return(0,o.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-store-json-package"},"data-store-json package"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/data-store-json.datastorejson"},"plugin")," that implements ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastore"},"IDataStore")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM"),"interfaces and uses a JSON tree as a backend."),(0,o.kt)("p",null,"The JSON tree backend can be persisted to any JSON compatible media using a callback that gets called when the agent data is updated."),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.browserlocalstoragestore"},"BrowserLocalStorageStore")),(0,o.kt)("td",{parentName:"tr",align:null},"Implementation of ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore")," that uses browser localStorage to store data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.datastorejson"},"DataStoreJson")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," A Gimly agent storage plugin that implements the ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastore"},"IDataStore")," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," methods using one big JSON object as a backend."),(0,o.kt)("p",null,"Each update operation triggers a callback that can be used to either save the latest state of the agent data or compute a diff and log only the changes."),(0,o.kt)("p",null,"This plugin must be initialized with a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", which serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. The JSON object can be pre-populated with data from previous sessions."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.didstorejson"},"DIDStoreJson")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," An implementation of ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-manager.abstractdidstore"},"AbstractDIDStore")," that uses a JSON object to store the relationships between DIDs, their providers and controllers and their keys and services as they are known and managed by a Gimly agent."),(0,o.kt)("p",null,"An instance of this class can be used by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-manager.didmanager"},"DIDManager")," as the data storage layer."),(0,o.kt)("p",null,"This class must be initialized with a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", which serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. For correct usage, this MUST use the same ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore")," instance as the one used by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.keymanager"},"KeyManager"),"."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.keystorejson"},"KeyStoreJson")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," An implementation of ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeystore"},"AbstractKeyStore")," that uses a JSON object to store the relationships between keys, their IDs, aliases and ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem"},"KMS implementations"),", as they are known and managed by a Gimly agent."),(0,o.kt)("p",null,"An instance of this class can be used by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.keymanager"},"KeyManager")," as the data storage layer."),(0,o.kt)("p",null,"This class must be initialized with a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", which serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. For correct usage, this MUST use the same ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore")," instance as the one used by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-manager.didmanager"},"DIDManager"),"."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.privatekeystorejson"},"PrivateKeyStoreJson")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," An implementation of ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractprivatekeystore"},"AbstractPrivateKeyStore")," that uses a JSON object to store the private key material needed by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/kms-local.keymanagementsystem"},"KeyManagementSystem"),"."),(0,o.kt)("p",null,"This class must be initialized with a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", which serves as the JSON object storing data in memory as well as providing an update notification callback to persist this data. The JSON object does not have to be shared with other users of ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore"),", but it can be."),(0,o.kt)("p",null,"If an ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")," is used, then key material is encrypted, even in memory."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,o.kt)("h2",{id:"interfaces"},"Interfaces"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Interface"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.claimtableentry"},"ClaimTableEntry")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," This is used internally by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.datastorejson"},"DataStoreJson")," to represent the claims contained in a Verifiable Credential in a way that facilitates querying using the ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," interface."),(0,o.kt)("p",null,"This API may change in future versions without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.credentialtableentry"},"CredentialTableEntry")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," This is used internally by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.datastorejson"},"DataStoreJson")," to represent a Verifiable Credential in a way that facilitates querying using the ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," interface."),(0,o.kt)("p",null,"This API may change in future versions without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.presentationtableentry"},"PresentationTableEntry")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," This is used internally by ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.datastorejson"},"DataStoreJson")," to represent a Verifiable Presentation in a way that facilitates querying using the ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," interface."),(0,o.kt)("p",null,"This API may change in future versions without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsoncache"},"GimlyJsonCache")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," A JSON data layout for data-store-json implementations."),(0,o.kt)("p",null,"This API may change in future versions without a BREAKING CHANGE notice."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsonstore"},"GimlyJsonStore")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," An extension to ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsoncache"},"GimlyJsonCache")," that bundles an update notification callback that allows implementors to persist the ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsoncache"},"GimlyJsonCache")," and any other data it may contain to another storage medium."),(0,o.kt)("p",null,"This API may change in future versions without a BREAKING CHANGE notice."))))),(0,o.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.diffcallback"},"DiffCallback")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," A callback method that is called when the data stored in a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/data-store-json.gimlyjsoncache"},"GimlyJsonCache")," is updated.")))))}h.isMDXComponent=!0}}]);