"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[72317],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),k=n,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},16025:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"selective-disclosure",title:"selective-disclosure package",hide_title:!0},c=void 0,o={unversionedId:"api/selective-disclosure",id:"api/selective-disclosure",title:"selective-disclosure package",description:"selective-disclosure package",source:"@site/docs/api/selective-disclosure.md",sourceDirName:"api",slug:"/api/selective-disclosure",permalink:"/docs/api/selective-disclosure",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/selective-disclosure.md",tags:[],version:"current",frontMatter:{id:"selective-disclosure",title:"selective-disclosure package",hide_title:!0}},u={},p=[{value:"selective-disclosure package",id:"selective-disclosure-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}],d={toc:p},k="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)(k,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"selective-disclosure-package"},"selective-disclosure package"),(0,l.kt)("p",null,"Provides a ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/selective-disclosure.iselectivedisclosure"},"plugin")," for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")," that implements ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/selective-disclosure.selectivedisclosure"},"SelectiveDisclosure")," interface."),(0,l.kt)("p",null,"Provides a ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/selective-disclosure.sdrmessagehandler"},"plugin")," for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," that detects Selective Disclosure Request in a message"),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.sdrmessagehandler"},"SdrMessageHandler")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," A Gimly message handler plugin that can decode an incoming Selective Disclosure Response into the internal Message representation."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.selectivedisclosure"},"SelectiveDisclosure")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," This class adds support for creating ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/uport-project/specs/blob/develop/flows/selectivedisclosure.md"},"Selective Disclosure")," requests and interpret the responses received."),(0,l.kt)("p",null,"This implementation of the uPort protocol uses ",(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"W3C Presentation")," as the response encoding instead of a ",(0,l.kt)("code",null,"shareReq"),"."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interface"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.icreateprofilecredentialsargs"},"ICreateProfileCredentialsArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Profile data"),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.icreateselectivedisclosurerequestargs"},"ICreateSelectiveDisclosureRequestArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Contains the parameters of a Selective Disclosure Request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.icredentialrequestinput"},"ICredentialRequestInput")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Describes a particular credential that is being requested")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.icredentialsforsdr"},"ICredentialsForSdr")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The credentials that make up a response of a Selective Disclosure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.igetverifiablecredentialsforsdrargs"},"IGetVerifiableCredentialsForSdrArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Encapsulates the params needed to gather credentials to fulfill a Selective disclosure request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.ipresentationvalidationresult"},"IPresentationValidationResult")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The result of a selective disclosure response validation."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosure"},"ISelectiveDisclosure")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Describes the interface of a Selective Disclosure plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.iselectivedisclosurerequest"},"ISelectiveDisclosureRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Represents the Selective Disclosure request parameters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.issuer"},"Issuer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Used for requesting Credentials using Selective Disclosure. Represents an accepted issuer of a credential."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.ivalidatepresentationagainstsdrargs"},"IValidatePresentationAgainstSdrArgs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," A tuple used to verify a Selective Disclosure Response. Encapsulates the response(",(0,l.kt)("code",null,"presentation"),") and the corresponding request (",(0,l.kt)("code",null,"sdr"),") that made it."),(0,l.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/selective-disclosure.messagetypes"},"MessageTypes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Identifies a ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/core-types.imessage"},"IMessage")," that represents a Selective Disclosure Request")))))}m.isMDXComponent=!0}}]);