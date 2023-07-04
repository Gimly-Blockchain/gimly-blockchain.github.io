"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[68184],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||s;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11612:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"data-store",title:"data-store package",hide_title:!0},l=void 0,d={unversionedId:"api/data-store",id:"api/data-store",title:"data-store package",description:"data-store package",source:"@site/docs/api/data-store.md",sourceDirName:"api",slug:"/api/data-store",permalink:"/docs/api/data-store",draft:!1,tags:[],version:"current",frontMatter:{id:"data-store",title:"data-store package",hide_title:!0}},p={},m=[{value:"data-store package",id:"data-store-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],c={toc:m},k="wrapper";function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)(k,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"data-store-package"},"data-store package"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM")," backed plugins. ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/data-store.datastore"},"plugin")," that implements ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastore"},"IDataStore")," interface. ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/data-store.datastoreorm"},"plugin")," that implements ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," interface. Provides ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/data-store.keystore"},"KeyStore")," for ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/key-manager.keymanager"},"KeyManager")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/data-store.didstore"},"DIDStore")," for ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/did-manager.didmanager"},"DIDManager")),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Class"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.claim"},"Claim")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents the properties of a claim extracted from a Verifiable Credential ",(0,s.kt)("code",null,"credentialSubject"),", and stored in a TypeORM database for querying.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.credential_2"},"Credential_2")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some common properties of a Verifiable Credential that are stored in a TypeORM database for querying.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastore"},"DataStore")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," This class implements the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastore"},"IDataStore")," interface using a TypeORM compatible database."),(0,s.kt)("p",null,"This allows you to store and retrieve Verifiable Credentials, Presentations and Messages by their IDs."),(0,s.kt)("p",null,"For more complex queries you should use ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastoreorm"},"DataStoreORM")," which is the default way to query the stored data by some common properties. These two classes MUST also share the same database connection."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastorediscoveryprovider"},"DataStoreDiscoveryProvider")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," This implementation of ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.abstractdiddiscoveryprovider"},"AbstractDidDiscoveryProvider")," helps you discover DIDs based on data that is stored by a local plugin that implements ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM"),"."),(0,s.kt)("p",null,"DIDs can be discovered by partial matches of ",(0,s.kt)("code",null,"name")," from ",(0,s.kt)("code",null,"Profile")," credentials, by partial matches of ",(0,s.kt)("code",null,"alias")," of managed DIDs as well as partial matches of DIDs that are issuer or subject of credentials."),(0,s.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastoreorm"},"DataStoreORM")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," This class implements the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.idatastoreorm"},"IDataStoreORM")," query interface using a TypeORM compatible database."),(0,s.kt)("p",null,"This allows you to filter Verifiable Credentials, Presentations and Messages by some common properties that are parsed and stored in database tables."),(0,s.kt)("p",null,"This class is designed to work with ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastore"},"DataStore")," which is the default way to populate the database with Credentials, Presentations and Messages in such a way that they can be queried by this class. These two classes MUST also share the same database connection."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.didstore"},"DIDStore")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"An implementation of ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-manager.abstractdidstore"},"AbstractDIDStore")," that uses a TypeORM database to store the relationships between DIDs, their providers and controllers and their keys and services as they are known and managed by a Gimly agent."),(0,s.kt)("p",null,"An instance of this class can be used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-manager.didmanager"},"DIDManager")," as the data storage layer."),(0,s.kt)("p",null,"To make full use of this class, it should use the same database as the one used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.keystore"},"KeyStore"),"."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.identifier"},"Identifier")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some properties and relationships of an ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.iidentifier"},"IIdentifier")," that are stored in a TypeORM database for the purpose of keeping track of keys and services associated with a DID managed by a Gimly agent.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.key"},"Key")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some properties of a ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey")," that are stored in a TypeORM database for the purpose of keeping track of the ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem"},"AbstractKeyManagementSystem")," implementations and the keys they are able to use.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.keystore"},"KeyStore")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"An implementation of ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeystore"},"AbstractKeyStore")," that uses a TypeORM database to store the relationships between keys, their IDs, aliases and ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractkeymanagementsystem"},"KMS implementations"),", as they are known and managed by a Gimly agent."),(0,s.kt)("p",null,"An instance of this class can be used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.keymanager"},"KeyManager")," as the data storage layer."),(0,s.kt)("p",null,"To make full use of this class, it should use the same database as the one used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.didstore"},"DIDStore"),"."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.message"},"Message")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some common properties of an ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessage"},"IMessage")," that are stored in a TypeORM database for querying.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.premigrationkey"},"PreMigrationKey")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," This represents the private key data of keys that were stored by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.keystore"},"KeyStore")," before Gimly 3.0. During database migration this key material is moved to a different table and accessible by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.privatekeystore"},"PrivateKeyStore"),"."),(0,s.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.presentation"},"Presentation")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some common properties of a Verifiable Presentation that are stored in a TypeORM database for querying.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.privatekey"},"PrivateKey")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some properties of a ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.managedprivatekey"},"ManagedPrivateKey")," that are stored in a TypeORM database when using a ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.privatekeystore"},"PrivateKeyStore")," to store private key data.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.privatekeystore"},"PrivateKeyStore")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"An implementation of ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractprivatekeystore"},"AbstractPrivateKeyStore")," that uses a TypeORM database connection to store private key material."),(0,s.kt)("p",null,"The keys can be encrypted while at rest if this class is initialized with an ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/key-manager.abstractsecretbox"},"AbstractSecretBox")," implementation."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.service"},"Service")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents some properties of a as it is stored in a TypeORM database. This is used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.didstore"},"DIDStore")," to provide information to ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/did-manager.didmanager"},"DIDManager")," when DID management information is stored in a local TypeORM database."),(0,s.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,s.kt)("h2",{id:"interfaces"},"Interfaces"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Interface"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.metadata"},"MetaData")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Represents message metadata as it is stored by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.datastore"},"DataStore"),"."),(0,s.kt)("p",null,"This metadata is most often used by ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," and ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessagehandler"},"IMessageHandler")," implementations to decorate messages that are interpreted and decoded, but not returned as final, as they pass through the message handler chain."),(0,s.kt)("p",null,"- This API may change without a BREAKING CHANGE notice."))))),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Variable"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.entities"},"Entities")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"The TypeORM entities used by this package."),(0,s.kt)("p",null,"This array SHOULD be used when creating a TypeORM connection."))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.migrations"},"migrations")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,"The migrations array that SHOULD be used when initializing a TypeORM database connection."),(0,s.kt)("p",null,"These ensure the correct creation of tables and the proper migrations of data when tables change between versions."))))),(0,s.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/data-store.keytype_2"},"KeyType_2")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("p",null,(0,s.kt)("b",null,(0,s.kt)("i",null,"(BETA)"))," Mirrors ",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.tkeytype"},"TKeyType")),(0,s.kt)("p",null,"- This API may change without a BREAKING CHANGE notice."))))))}u.isMDXComponent=!0}}]);