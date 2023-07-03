"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[82157],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||i;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,d[1]=o;for(var c=2;c<i;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},21229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"did-discovery",title:"did-discovery package",hide_title:!0},l=void 0,c={unversionedId:"api/did-discovery",id:"api/did-discovery",title:"did-discovery package",description:"did-discovery package",source:"@site/docs/api/did-discovery.md",sourceDirName:"api",slug:"/api/did-discovery",permalink:"/docs/api/did-discovery",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-discovery.md",tags:[],version:"current",frontMatter:{id:"did-discovery",title:"did-discovery package",hide_title:!0}},s={},p=[{value:"did-discovery package",id:"did-discovery-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2}],u={toc:p},y="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"did-discovery-package"},"did-discovery package"),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/did-discovery.ididdiscovery"},"plugin")," for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core.agent"},"Agent")),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.abstractdiddiscoveryprovider"},"AbstractDidDiscoveryProvider")),(0,i.kt)("td",{parentName:"tr",align:null},"An abstract class for the ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery"},"DIDDiscovery")," providers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery"},"DIDDiscovery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This class adds support for discovering DIDs."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscovermatch"},"IDIDDiscoverMatch")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," A single discovery match."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscovery"},"IDIDDiscovery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Describes the interface of DID discovery plugin."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscoverydiscoverdidargs"},"IDIDDiscoveryDiscoverDidArgs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Contains the parameters of a DID Discovery Request."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscoverydiscoverdidresult"},"IDIDDiscoveryDiscoverDidResult")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," DID Discovery results."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscoveryproviderresult"},"IDIDDiscoveryProviderResult")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Discovery results from one provider."),(0,i.kt)("p",null,"This API may change without a BREAKING CHANGE notice."))))))}m.isMDXComponent=!0}}]);