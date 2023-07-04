"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[97656],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38038:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],c={id:"credential-w3c",title:"credential-w3c package",hide_title:!0},o=void 0,p={unversionedId:"api/credential-w3c",id:"api/credential-w3c",title:"credential-w3c package",description:"credential-w3c package",source:"@site/docs/api/credential-w3c.md",sourceDirName:"api",slug:"/api/credential-w3c",permalink:"/docs/api/credential-w3c",draft:!1,tags:[],version:"current",frontMatter:{id:"credential-w3c",title:"credential-w3c package",hide_title:!0}},s={},d=[{value:"credential-w3c package",id:"credential-w3c-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"credential-w3c-package"},"credential-w3c package"),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/credential-w3c.credentialplugin"},"plugin")," for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," that implements ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.icredentialissuer"},"ICredentialIssuer")," interface."),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/credential-w3c.w3cmessagehandler"},"plugin")," for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," that verifies Credentials and Presentations in a message."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-w3c.credentialplugin"},"CredentialPlugin")),(0,i.kt)("td",{parentName:"tr",align:null},"A Gimly plugin that implements the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.icredentialplugin"},"ICredentialPlugin")," methods.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-w3c.w3cmessagehandler"},"W3cMessageHandler")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"An implementation of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.abstractmessagehandler"},"AbstractMessageHandler"),"."),(0,i.kt)("p",null,"This plugin can handle incoming W3C Verifiable Credentials and Presentations and prepare them for internal storage as ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/message-handler.message"},"Message")," types."),(0,i.kt)("p",null,"The current version can only handle ",(0,i.kt)("code",null,"JWT")," encoded"))))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/credential-w3c.credentialissuer"},"CredentialIssuer")),(0,i.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);