"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[66645],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),y=c(n),u=a,g=y["".concat(m,".").concat(u)]||y[u]||p[u]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[y]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return y}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={id:"key-manager.abstractkeymanagementsystem.sign",title:"AbstractKeyManagementSystem.sign() method",hide_title:!0},m=void 0,c={unversionedId:"api/key-manager.abstractkeymanagementsystem.sign",id:"api/key-manager.abstractkeymanagementsystem.sign",title:"AbstractKeyManagementSystem.sign() method",description:"AbstractKeyManagementSystem.sign() method",source:"@site/docs/api/key-manager.abstractkeymanagementsystem.sign.md",sourceDirName:"api",slug:"/api/key-manager.abstractkeymanagementsystem.sign",permalink:"/docs/api/key-manager.abstractkeymanagementsystem.sign",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/key-manager.abstractkeymanagementsystem.sign.md",tags:[],version:"current",frontMatter:{id:"key-manager.abstractkeymanagementsystem.sign",title:"AbstractKeyManagementSystem.sign() method",hide_title:!0}},l={},y=[{value:"AbstractKeyManagementSystem.sign() method",id:"abstractkeymanagementsystemsign-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:y},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"abstractkeymanagementsystemsign-method"},"AbstractKeyManagementSystem.sign() method"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract sign(args: {\n        keyRef: Pick<IKey, 'kid'>;\n        algorithm?: string;\n        data: Uint8Array;\n        [x: string]: any;\n    }): Promise<string>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},"{ keyRef: Pick","<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikey"},"IKey"),", 'kid'",">","; algorithm?: string; data: Uint8Array; ","[","x: string","]",": any; }"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","string",">"))}g.isMDXComponent=!0}}]);