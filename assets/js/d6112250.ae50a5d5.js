"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[83774],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),m=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},l="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),l=m(r),u=a,f=l["".concat(c,".").concat(u)]||l[u]||p[u]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32930:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"did-comm.abstractdidcommtransport.send",title:"AbstractDIDCommTransport.send() method",hide_title:!0},c=void 0,m={unversionedId:"api/did-comm.abstractdidcommtransport.send",id:"api/did-comm.abstractdidcommtransport.send",title:"AbstractDIDCommTransport.send() method",description:"AbstractDIDCommTransport.send() method",source:"@site/docs/api/did-comm.abstractdidcommtransport.send.md",sourceDirName:"api",slug:"/api/did-comm.abstractdidcommtransport.send",permalink:"/docs/api/did-comm.abstractdidcommtransport.send",draft:!1,tags:[],version:"current",frontMatter:{id:"did-comm.abstractdidcommtransport.send",title:"AbstractDIDCommTransport.send() method",hide_title:!0}},d={},l=[{value:"AbstractDIDCommTransport.send() method",id:"abstractdidcommtransportsend-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:l},u="wrapper";function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"abstractdidcommtransportsend-method"},"AbstractDIDCommTransport.send() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Sends the provided raw message (without further processing) to the service endpoint defined in the provided DID Document service section."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract send(service: any, message: string): Promise<IDIDCommTransportResult>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"service"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null},"The DID Document service section that contains a ",(0,o.kt)("code",null,"serviceEndpoint")," entry.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"message"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"The message to be sent."),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/did-comm.ididcommtransportresult"},"IDIDCommTransportResult"),">"))}f.isMDXComponent=!0}}]);