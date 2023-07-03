"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[3004],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return a?r.createElement(g,d(d({ref:t},m),{},{components:a})):r.createElement(g,d({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,d=new Array(i);d[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,d[1]=o;for(var s=2;s<i;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36716:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),d=["components"],o={id:"did-manager.didmanager.didmanagersetalias",title:"DIDManager.didManagerSetAlias() method",hide_title:!0},l=void 0,s={unversionedId:"api/did-manager.didmanager.didmanagersetalias",id:"api/did-manager.didmanager.didmanagersetalias",title:"DIDManager.didManagerSetAlias() method",description:"DIDManager.didManagerSetAlias() method",source:"@site/docs/api/did-manager.didmanager.didmanagersetalias.md",sourceDirName:"api",slug:"/api/did-manager.didmanager.didmanagersetalias",permalink:"/docs/api/did-manager.didmanager.didmanagersetalias",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-manager.didmanager.didmanagersetalias.md",tags:[],version:"current",frontMatter:{id:"did-manager.didmanager.didmanagersetalias",title:"DIDManager.didManagerSetAlias() method",hide_title:!0}},m={},c=[{value:"DIDManager.didManagerSetAlias() method",id:"didmanagerdidmanagersetalias-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:c},u="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,d);return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didmanagerdidmanagersetalias-method"},"DIDManager.didManagerSetAlias() method"),(0,i.kt)("p",null,"Sets identifier alias"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerSetAlias({ did, alias }: IDIDManagerSetAliasArgs, context: IAgentContext<IKeyManager>): Promise<boolean>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"{ did, alias }"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanagersetaliasargs"},"IDIDManagerSetAliasArgs")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.iagentcontext"},"IAgentContext"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager"),">"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"/docs/agent/plugins#executing-plugin-methods"},"Execution context"),". Requires ",(0,i.kt)("code",null,"agent")," that has ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ikeymanager"},"IKeyManager")," methods")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","boolean",">"))}g.isMDXComponent=!0}}]);