"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[24237],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var d=n.createContext({}),l=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,d=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(r),y=i,m=p["".concat(d,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[p]="string"==typeof t?t:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},75788:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"did-discovery.diddiscovery",title:"DIDDiscovery class",hide_title:!0},d=void 0,l={unversionedId:"api/did-discovery.diddiscovery",id:"api/did-discovery.diddiscovery",title:"DIDDiscovery class",description:"DIDDiscovery class",source:"@site/docs/api/did-discovery.diddiscovery.md",sourceDirName:"api",slug:"/api/did-discovery.diddiscovery",permalink:"/docs/api/did-discovery.diddiscovery",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/did-discovery.diddiscovery.md",tags:[],version:"current",frontMatter:{id:"did-discovery.diddiscovery",title:"DIDDiscovery class",hide_title:!0}},c={},p=[{value:"DIDDiscovery class",id:"diddiscovery-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p},y="wrapper";function m(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)(y,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"diddiscovery-class"},"DIDDiscovery class"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"This class adds support for discovering DIDs."),(0,a.kt)("p",null,"This API may change without a BREAKING CHANGE notice."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DIDDiscovery implements IAgentPlugin\n")),(0,a.kt)("b",null,"Implements:")," [IAgentPlugin](/docs/api/core-types.iagentplugin)",(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery._constructor_"},"(constructor)(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,a.kt)("code",null,"DIDDiscovery")," class")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery.methods"},"methods")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.ididdiscovery"},"IDIDDiscovery")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery.providers"},"providers")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",{parentName:"tr",align:null},"Array","<",(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.abstractdiddiscoveryprovider"},"AbstractDidDiscoveryProvider"),">"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery.schema"},"schema")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",{parentName:"tr",align:null},"{ components: { schemas: { IDIDDiscoveryDiscoverDidArgs: { type: string; properties: { query: { type: string; description: string; }; options: { type: string; description: string; }; }; required: string","[","]","; description: string; }; IDIDDiscoveryDiscoverDidResult: { type: string; properties: { query: { type: string; description: string; }; options: { type: string; description: string; }; results: { type: string; items: { $ref: string; }; description: string; }; errors: { type: string; additionalProperties: { type: string; }; description: string; }; }; required: string","[","]","; description: string; }; IDIDDiscoveryProviderResult: { type: string; properties: { provider: { type: string; description: string; }; matches: { type: string; items: { $ref: string; }; description: string; }; }; required: string","[","]","; description: string; }; IDIDDiscoverMatch: { type: string; properties: { did: { type: string; description: string; }; metaData: { type: string; description: string; }; }; required: string","[","]","; description: string; }; }; methods: { discoverDid: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; }; }; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)")))))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/did-discovery.diddiscovery.discoverdid"},"discoverDid(args, context)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,(0,a.kt)("i",null,"(BETA)"))," Queries data providers and returns DIDs with metadata")))))}m.isMDXComponent=!0}}]);