"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[23840],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(c,".").concat(u)]||p[u]||l[u]||o;return a?r.createElement(g,m(m({ref:t},s),{},{components:a})):r.createElement(g,m({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,m=new Array(o);m[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,m[1]=i;for(var d=2;d<o;d++)m[d]=a[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26044:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),m=["components"],i={id:"did-comm.ididcomm.packdidcommmessage",title:"IDIDComm.packDIDCommMessage() method",hide_title:!0},c=void 0,d={unversionedId:"api/did-comm.ididcomm.packdidcommmessage",id:"api/did-comm.ididcomm.packdidcommmessage",title:"IDIDComm.packDIDCommMessage() method",description:"IDIDComm.packDIDCommMessage() method",source:"@site/docs/api/did-comm.ididcomm.packdidcommmessage.md",sourceDirName:"api",slug:"/api/did-comm.ididcomm.packdidcommmessage",permalink:"/docs/api/did-comm.ididcomm.packdidcommmessage",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-comm.ididcomm.packdidcommmessage.md",tags:[],version:"current",frontMatter:{id:"did-comm.ididcomm.packdidcommmessage",title:"IDIDComm.packDIDCommMessage() method",hide_title:!0}},s={},p=[{value:"IDIDComm.packDIDCommMessage() method",id:"ididcommpackdidcommmessage-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:p},u="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,m);return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ididcommpackdidcommmessage-method"},"IDIDComm.packDIDCommMessage() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Packs a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/did-comm.ididcommmessage"},"IDIDCommMessage")," using one of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/did-comm.didcommmessagepacking"},"DIDCommMessagePacking")," options."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"packDIDCommMessage(args: IPackDIDCommMessageArgs, context: IAgentContext<IDIDManager & IKeyManager & IResolver>): Promise<IPackedDIDCommMessage>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ipackdidcommmessageargs"},"IPackDIDCommMessageArgs")),(0,o.kt)("td",{parentName:"tr",align:null},"an ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ipackdidcommmessageargs"},"IPackDIDCommMessageArgs")," object. ","*"," args.message - ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommmessage"},"IDIDCommMessage")," - the message to be packed ","*"," args.packing - ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.didcommmessagepacking"},"DIDCommMessagePacking")," - the packing method ","*"," args.keyRef - Optional - string - either an ",(0,o.kt)("code",null,"id")," of a ",(0,o.kt)("code",null,"kid")," of a ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey")," that will be used when ",(0,o.kt)("code",null,"packing")," is ",(0,o.kt)("code",null,"jws")," or ",(0,o.kt)("code",null,"authcrypt"),". ","*"," args.options - ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/did-comm.ididcommoptions"},"IDIDCommOptions")," - optional options")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanager"},"IDIDManager")," ","&"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager")," ","&"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.iresolver"},"IResolver"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"This method requires an agent that also has ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanager"},"IDIDManager"),", ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager")," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.iresolver"},"IResolver")," plugins in use. When calling this method, the ",(0,o.kt)("code",null,"context")," is supplied automatically by the framework.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/did-comm.ipackeddidcommmessage"},"IPackedDIDCommMessage"),">"),(0,o.kt)("p",null,"a Promise that resolves to an object containing the serialized packed ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," string"),(0,o.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))}g.isMDXComponent=!0}}]);