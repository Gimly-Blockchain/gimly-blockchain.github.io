"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[82559],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:n,i[1]=d;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40686:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],d={id:"did-comm.coordinatemediationmediatormessagehandler",title:"CoordinateMediationMediatorMessageHandler class",hide_title:!0},l=void 0,s={unversionedId:"api/did-comm.coordinatemediationmediatormessagehandler",id:"api/did-comm.coordinatemediationmediatormessagehandler",title:"CoordinateMediationMediatorMessageHandler class",description:"CoordinateMediationMediatorMessageHandler class",source:"@site/docs/api/did-comm.coordinatemediationmediatormessagehandler.md",sourceDirName:"api",slug:"/api/did-comm.coordinatemediationmediatormessagehandler",permalink:"/docs/api/did-comm.coordinatemediationmediatormessagehandler",draft:!1,tags:[],version:"current",frontMatter:{id:"did-comm.coordinatemediationmediatormessagehandler",title:"CoordinateMediationMediatorMessageHandler class",hide_title:!0}},c={},m=[{value:"CoordinateMediationMediatorMessageHandler class",id:"coordinatemediationmediatormessagehandler-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],u={toc:m},p="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"coordinatemediationmediatormessagehandler-class"},"CoordinateMediationMediatorMessageHandler class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"A plugin for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message-handler.messagehandler"},"MessageHandler")," that handles Mediator Coordinator messages for the mediator role. This API may change without a BREAKING CHANGE notice."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CoordinateMediationMediatorMessageHandler extends AbstractMessageHandler\n")),(0,o.kt)("b",null,"Extends:")," [AbstractMessageHandler](/docs/api/message-handler.abstractmessagehandler)",(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.coordinatemediationmediatormessagehandler._constructor_"},"(constructor)()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,o.kt)("code",null,"CoordinateMediationMediatorMessageHandler")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.coordinatemediationmediatormessagehandler.handle"},"handle(message, context)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," Handles a Mediator Coordinator messages for the mediator role ",(0,o.kt)("a",{parentName:"td",href:"https://didcomm.org/mediator-coordination/2.0/"},"https://didcomm.org/mediator-coordination/2.0/"))))))}g.isMDXComponent=!0}}]);