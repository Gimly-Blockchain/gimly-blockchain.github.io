"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[704],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"basics/introduction",id:"basics/introduction",title:"Introduction",description:"The realm of verifiable data has expanded rapidly in recent years and continues to progress at an escalated pace. With such rapid innovation, numerous competing standards are inevitable, posing an interoperability challenge. Gimly, designed with flexibility, modularity, and scalability in mind, enables developers to craft a customized system from an ever-expanding list of standards without the stress of interoperability and rapidly evolving specifications.",source:"@site/docs/basics/introduction.md",sourceDirName:"basics",slug:"/basics/introduction",permalink:"/docs/basics/introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",next:{title:"Verifiable Data",permalink:"/docs/basics/verifiable_data"}},d={},p=[{value:"SSI philosophy and base principles",id:"ssi-philosophy-and-base-principles",level:2}],u={toc:p},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(f,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The realm of verifiable data has expanded rapidly in recent years and continues to progress at an escalated pace. With such rapid innovation, numerous competing standards are inevitable, posing an interoperability challenge. ",(0,a.kt)("strong",{parentName:"p"},"Gimly"),", designed with flexibility, modularity, and scalability in mind, enables developers to craft a customized system from an ever-expanding list of standards without the stress of interoperability and rapidly evolving specifications."),(0,a.kt)("p",null,"The prevalence of competing standards can place unnecessary strain and confusion on product owners and developers, who may prefer not to bind themselves to a specific vendor or heavily invest in standards that are likely to evolve. Managing the intricate dependency tree per platform on top of these shifting standards requires significant effort."),(0,a.kt)("p",null,"However, these challenges shouldn't deter businesses from unlocking the immense value of verifiable data for their users. We envisage an ecosystem characterized by interoperable functionality, enabled through specialized community plugins adhering to open standards."),(0,a.kt)("p",null,"At ",(0,a.kt)("strong",{parentName:"p"},"Gimly"),", our collaboration with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/"},"W3C")," and ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"DIF")," is focused on fostering compatibility across a multitude of projects and initiatives within this domain."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gimly ID")," offers a framework that simplifies the incorporation of cryptographically verifiable data into applications. This has been specifically designed to assist developers who wish to utilize DIDs, verifiable credentials, and data-centric protocols, thereby providing their users with cutting-edge features."),(0,a.kt)("p",null,"These documents cater to those seeking to delve into the foundational principles of verifiable data. They also aim to cultivate a thorough comprehension of the ",(0,a.kt)("strong",{parentName:"p"},"Gimly")," framework, enabling the creation of next-generation apps that harness the numerous advantages of trust networks."),(0,a.kt)("h2",{id:"ssi-philosophy-and-base-principles"},"SSI philosophy and base principles"),(0,a.kt)("p",null,"In this talk on ",(0,a.kt)("strong",{parentName:"p"},"self-sovereign identity")," by Christopher Allen, he explores the ideological and architectural aspects of this emerging technology. Currently, digital identity is centralized, leading to inherent problems. ",(0,a.kt)("strong",{parentName:"p"},"Self-sovereign identity")," aims to reclaim human dignity and authority in the digital world. It emphasizes control over one's digital self and demands moral authority over identity."),(0,a.kt)("p",null,"Digital credentials can establish trust at a distance, offering tamper-proof and convenient alternatives to physical credentials. Decentralized identifiers enable ",(0,a.kt)("strong",{parentName:"p"},"self-sovereignty")," and data portability, with global uniqueness and cryptographic verification."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Self-sovereign identity")," is crucial for privacy, accountability, and government acceptance, addressing the issue of the millions without legal identity. Lessons from history remind us that centralized architectures can be used for both good and evil. Support is advocated for protecting vulnerable communities and defending against attacks in elections."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Self-sovereign identity")," systems offer flexibility and options for identity verification through voluntary curation and the creation of new keys and authorizations."),(0,a.kt)("div",{class:"video-container"},(0,a.kt)("iframe",{src:"https://www.youtube.com/embed/JzM_Brpk95E",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}h.isMDXComponent=!0}}]);