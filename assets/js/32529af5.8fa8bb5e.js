"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[81786],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,g=u["".concat(m,".").concat(y)]||u[y]||p[y]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81257:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"kms-local.keymanagementsystem.sign",title:"KeyManagementSystem.sign() method",hide_title:!0},m=void 0,s={unversionedId:"api/kms-local.keymanagementsystem.sign",id:"api/kms-local.keymanagementsystem.sign",title:"KeyManagementSystem.sign() method",description:"KeyManagementSystem.sign() method",source:"@site/docs/api/kms-local.keymanagementsystem.sign.md",sourceDirName:"api",slug:"/api/kms-local.keymanagementsystem.sign",permalink:"/docs/api/kms-local.keymanagementsystem.sign",draft:!1,tags:[],version:"current",frontMatter:{id:"kms-local.keymanagementsystem.sign",title:"KeyManagementSystem.sign() method",hide_title:!0}},c={},u=[{value:"KeyManagementSystem.sign() method",id:"keymanagementsystemsign-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:u},y="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keymanagementsystemsign-method"},"KeyManagementSystem.sign() method"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"sign({ keyRef, algorithm, data, }: {\n        keyRef: Pick<IKey, 'kid'>;\n        algorithm?: string;\n        data: Uint8Array;\n    }): Promise<string>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"{ keyRef, algorithm, data, }"),(0,i.kt)("td",{parentName:"tr",align:null},"{ keyRef: Pick","<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey"),", 'kid'",">","; algorithm?: string; data: Uint8Array; }"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","string",">"))}g.isMDXComponent=!0}}]);