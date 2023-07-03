"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[53286],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,g=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27373:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"core-types.ididmanager.didmanagergetbyalias",title:"IDIDManager.didManagerGetByAlias() method",hide_title:!0},d=void 0,p={unversionedId:"api/core-types.ididmanager.didmanagergetbyalias",id:"api/core-types.ididmanager.didmanagergetbyalias",title:"IDIDManager.didManagerGetByAlias() method",description:"IDIDManager.didManagerGetByAlias() method",source:"@site/docs/api/core-types.ididmanager.didmanagergetbyalias.md",sourceDirName:"api",slug:"/api/core-types.ididmanager.didmanagergetbyalias",permalink:"/docs/api/core-types.ididmanager.didmanagergetbyalias",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.ididmanager.didmanagergetbyalias.md",tags:[],version:"current",frontMatter:{id:"core-types.ididmanager.didmanagergetbyalias",title:"IDIDManager.didManagerGetByAlias() method",hide_title:!0}},c={},s=[{value:"IDIDManager.didManagerGetByAlias() method",id:"ididmanagerdidmanagergetbyalias-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ididmanagerdidmanagergetbyalias-method"},"IDIDManager.didManagerGetByAlias() method"),(0,i.kt)("p",null,"Returns a specific identifier by alias"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"didManagerGetByAlias(args: IDIDManagerGetByAliasArgs): Promise<IIdentifier>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core-types.ididmanagergetbyaliasargs"},"IDIDManagerGetByAliasArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Required. Arguments to get the identifier")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core-types.iidentifier"},"IIdentifier"),">"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const identifier = await agent.didManagerGetByAlias({\n  alias: 'charlie',\n  provider: 'did:ethr:goerli',\n})\n")))}g.isMDXComponent=!0}}]);