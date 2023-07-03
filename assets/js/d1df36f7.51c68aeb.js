"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[28531],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return v}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),s=i,v=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return t?n.createElement(v,a(a({ref:r},c),{},{components:t})):n.createElement(v,a({ref:r},c))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[u]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95398:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],d={id:"did-provider-ethr.ethrdidprovider.removekey",title:"EthrDIDProvider.removeKey() method",hide_title:!0},p=void 0,l={unversionedId:"api/did-provider-ethr.ethrdidprovider.removekey",id:"api/did-provider-ethr.ethrdidprovider.removekey",title:"EthrDIDProvider.removeKey() method",description:"EthrDIDProvider.removeKey() method",source:"@site/docs/api/did-provider-ethr.ethrdidprovider.removekey.md",sourceDirName:"api",slug:"/api/did-provider-ethr.ethrdidprovider.removekey",permalink:"/docs/api/did-provider-ethr.ethrdidprovider.removekey",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-provider-ethr.ethrdidprovider.removekey.md",tags:[],version:"current",frontMatter:{id:"did-provider-ethr.ethrdidprovider.removekey",title:"EthrDIDProvider.removeKey() method",hide_title:!0}},c={},u=[{value:"EthrDIDProvider.removeKey() method",id:"ethrdidproviderremovekey-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:u},s="wrapper";function v(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ethrdidproviderremovekey-method"},"EthrDIDProvider.removeKey() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"removeKey(args: {\n        identifier: IIdentifier;\n        kid: string;\n        options?: TransactionOptions;\n    }, context: IRequiredContext): Promise<any>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},"{ identifier: ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),"; kid: string; options?: TransactionOptions; }"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"IRequiredContext"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","any",">"))}v.isMDXComponent=!0}}]);