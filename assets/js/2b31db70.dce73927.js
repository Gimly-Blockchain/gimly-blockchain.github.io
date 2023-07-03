"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[92066],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var r=a(67294);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,m=function(e,t){if(null==e)return{};var a,r,m={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(m[a]=e[a]);return m}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,m=e.mdxType,n=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=m,g=p["".concat(d,".").concat(u)]||p[u]||l[u]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:m,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46976:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(87462),m=a(63366),n=(a(67294),a(3905)),i=["components"],o={id:"did-comm.didcomm.getdidcommmessagemediatype",title:"DIDComm.getDidCommMessageMediaType() method",hide_title:!0},d=void 0,c={unversionedId:"api/did-comm.didcomm.getdidcommmessagemediatype",id:"api/did-comm.didcomm.getdidcommmessagemediatype",title:"DIDComm.getDidCommMessageMediaType() method",description:"DIDComm.getDidCommMessageMediaType() method",source:"@site/docs/api/did-comm.didcomm.getdidcommmessagemediatype.md",sourceDirName:"api",slug:"/api/did-comm.didcomm.getdidcommmessagemediatype",permalink:"/docs/api/did-comm.didcomm.getdidcommmessagemediatype",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.didcomm.getdidcommmessagemediatype.md",tags:[],version:"current",frontMatter:{id:"did-comm.didcomm.getdidcommmessagemediatype",title:"DIDComm.getDidCommMessageMediaType() method",hide_title:!0}},s={},p=[{value:"DIDComm.getDidCommMessageMediaType() method",id:"didcommgetdidcommmessagemediatype-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:p},u="wrapper";function g(e){var t=e.components,a=(0,m.Z)(e,i);return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"didcommgetdidcommmessagemediatype-method"},"DIDComm.getDidCommMessageMediaType() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Partially decodes a possible DIDComm message string to determine the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/did-comm.didcommmessagemediatype"},"DIDCommMessageMediaType")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getDidCommMessageMediaType({ message }: IPackedDIDCommMessage): Promise<DIDCommMessageMediaType>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"{ message }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ipackeddidcommmessage"},"IPackedDIDCommMessage")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/did-comm.didcommmessagemediatype"},"DIDCommMessageMediaType"),">"),(0,n.kt)("p",null,"the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/did-comm.didcommmessagemediatype"},"DIDCommMessageMediaType")," if it was successfully parsed"))}g.isMDXComponent=!0}}]);