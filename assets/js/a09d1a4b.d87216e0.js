"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[52444],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),v=o,m=p["".concat(d,".").concat(v)]||p[v]||c[v]||i;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=v;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},74840:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={id:"did-resolver.didresolverplugin.resolvedid",title:"DIDResolverPlugin.resolveDid() method",hide_title:!0},d=void 0,s={unversionedId:"api/did-resolver.didresolverplugin.resolvedid",id:"api/did-resolver.didresolverplugin.resolvedid",title:"DIDResolverPlugin.resolveDid() method",description:"DIDResolverPlugin.resolveDid() method",source:"@site/docs/api/did-resolver.didresolverplugin.resolvedid.md",sourceDirName:"api",slug:"/api/did-resolver.didresolverplugin.resolvedid",permalink:"/docs/api/did-resolver.didresolverplugin.resolvedid",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-resolver.didresolverplugin.resolvedid.md",tags:[],version:"current",frontMatter:{id:"did-resolver.didresolverplugin.resolvedid",title:"DIDResolverPlugin.resolveDid() method",hide_title:!0}},u={},p=[{value:"DIDResolverPlugin.resolveDid() method",id:"didresolverpluginresolvedid-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:p},v="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)(v,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"didresolverpluginresolvedid-method"},"DIDResolverPlugin.resolveDid() method"),(0,i.kt)("p",null,"Resolves DID and returns DID Resolution Result"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"resolveDid({ didUrl, options, }: {\n        didUrl: string;\n        options?: DIDResolutionOptions;\n    }): Promise<DIDResolutionResult>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"{ didUrl, options, }"),(0,i.kt)("td",{parentName:"tr",align:null},"{ didUrl: string; options?: DIDResolutionOptions; }"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","DIDResolutionResult",">"))}m.isMDXComponent=!0}}]);