"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[45370],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return s}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(t),v=i,s=u["".concat(p,".").concat(v)]||u[v]||m[v]||o;return t?n.createElement(s,a(a({ref:r},l),{},{components:t})):n.createElement(s,a({ref:r},l))}));function s(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[u]="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},61339:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],d={id:"did-provider-web.webdidprovider.removeservice",title:"WebDIDProvider.removeService() method",hide_title:!0},p=void 0,c={unversionedId:"api/did-provider-web.webdidprovider.removeservice",id:"api/did-provider-web.webdidprovider.removeservice",title:"WebDIDProvider.removeService() method",description:"WebDIDProvider.removeService() method",source:"@site/docs/api/did-provider-web.webdidprovider.removeservice.md",sourceDirName:"api",slug:"/api/did-provider-web.webdidprovider.removeservice",permalink:"/docs/api/did-provider-web.webdidprovider.removeservice",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-provider-web.webdidprovider.removeservice.md",tags:[],version:"current",frontMatter:{id:"did-provider-web.webdidprovider.removeservice",title:"WebDIDProvider.removeService() method",hide_title:!0}},l={},u=[{value:"WebDIDProvider.removeService() method",id:"webdidproviderremoveservice-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:u},v="wrapper";function s(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(v,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"webdidproviderremoveservice-method"},"WebDIDProvider.removeService() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"removeService(args: {\n        identifier: IIdentifier;\n        id: string;\n        options?: any;\n    }, context: IContext): Promise<any>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},"{ identifier: ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),"; id: string; options?: any; }"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"IContext"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","any",">"))}s.isMDXComponent=!0}}]);