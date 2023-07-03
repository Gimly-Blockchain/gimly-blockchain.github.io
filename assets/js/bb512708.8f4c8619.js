"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[31694],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return y}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,y=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68292:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"core-types.iverifycredentialargs.credential",title:"IVerifyCredentialArgs.credential property",hide_title:!0},l=void 0,p={unversionedId:"api/core-types.iverifycredentialargs.credential",id:"api/core-types.iverifycredentialargs.credential",title:"IVerifyCredentialArgs.credential property",description:"IVerifyCredentialArgs.credential property",source:"@site/docs/api/core-types.iverifycredentialargs.credential.md",sourceDirName:"api",slug:"/api/core-types.iverifycredentialargs.credential",permalink:"/docs/api/core-types.iverifycredentialargs.credential",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/core-types.iverifycredentialargs.credential.md",tags:[],version:"current",frontMatter:{id:"core-types.iverifycredentialargs.credential",title:"IVerifyCredentialArgs.credential property",hide_title:!0}},d={},s=[{value:"IVerifyCredentialArgs.credential property",id:"iverifycredentialargscredential-property",level:2}],u={toc:s},f="wrapper";function y(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)(f,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"iverifycredentialargscredential-property"},"IVerifyCredentialArgs.credential property"),(0,a.kt)("p",null,"The Verifiable Credential object according to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"canonical model")," or the JWT representation."),(0,a.kt)("p",null,"The signer of the Credential is verified based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer.id")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"credential")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," property of the JWT payload respectively"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"credential: W3CVerifiableCredential\n")))}y.isMDXComponent=!0}}]);