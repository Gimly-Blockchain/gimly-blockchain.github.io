"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[70109],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=m(r),u=a,d=y["".concat(o,".").concat(u)]||y[u]||p[u]||s;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[y]="string"==typeof e?e:a,c[1]=i;for(var m=2;m<s;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9844:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return y}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),c=["components"],i={id:"key-manager.abstractkeymanagementsystem.sharedsecret",title:"AbstractKeyManagementSystem.sharedSecret() method",hide_title:!0},o=void 0,m={unversionedId:"api/key-manager.abstractkeymanagementsystem.sharedsecret",id:"api/key-manager.abstractkeymanagementsystem.sharedsecret",title:"AbstractKeyManagementSystem.sharedSecret() method",description:"AbstractKeyManagementSystem.sharedSecret() method",source:"@site/docs/api/key-manager.abstractkeymanagementsystem.sharedsecret.md",sourceDirName:"api",slug:"/api/key-manager.abstractkeymanagementsystem.sharedsecret",permalink:"/docs/api/key-manager.abstractkeymanagementsystem.sharedsecret",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/key-manager.abstractkeymanagementsystem.sharedsecret.md",tags:[],version:"current",frontMatter:{id:"key-manager.abstractkeymanagementsystem.sharedsecret",title:"AbstractKeyManagementSystem.sharedSecret() method",hide_title:!0}},l={},y=[{value:"AbstractKeyManagementSystem.sharedSecret() method",id:"abstractkeymanagementsystemsharedsecret-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:y},u="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"abstractkeymanagementsystemsharedsecret-method"},"AbstractKeyManagementSystem.sharedSecret() method"),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract sharedSecret(args: {\n        myKeyRef: Pick<IKey, 'kid'>;\n        theirKey: Pick<IKey, 'publicKeyHex' | 'type'>;\n    }): Promise<string>;\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"args"),(0,s.kt)("td",{parentName:"tr",align:null},"{ myKeyRef: Pick","<",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey"),", 'kid'",">","; theirKey: Pick","<",(0,s.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey"),", 'publicKeyHex' ","|"," 'type'",">","; }"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("b",null,"Returns:"),(0,s.kt)("p",null,"Promise","<","string",">"))}d.isMDXComponent=!0}}]);