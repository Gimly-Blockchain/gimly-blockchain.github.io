"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[10],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={id:"signing_keys",title:"Signing & Keys"},c=void 0,l={unversionedId:"basics/signing_keys",id:"basics/signing_keys",title:"Signing & Keys",description:"In the domain of self-sovereign identity and cryptography, private and public keys are integral to secure digital interactions and data encryption. They form the core of the public key infrastructure (PKI).",source:"@site/docs/basics/signing_keys.md",sourceDirName:"basics",slug:"/basics/signing_keys",permalink:"/docs/basics/signing_keys",draft:!1,tags:[],version:"current",frontMatter:{id:"signing_keys",title:"Signing & Keys"},sidebar:"docs",previous:{title:"Decentralized Identifiers",permalink:"/docs/basics/decentralized_identifiers"},next:{title:"PMS Systems",permalink:"/docs/software_systems_integrations/pms_systems"}},p={},u=[],d={toc:u},g="wrapper";function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the domain of self-sovereign identity and cryptography, ",(0,a.kt)("strong",{parentName:"p"},"private")," and ",(0,a.kt)("strong",{parentName:"p"},"public keys")," are integral to secure digital interactions and data encryption. They form the core of the ",(0,a.kt)("strong",{parentName:"p"},"public key infrastructure (PKI)"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Private Key"),": A confidential key used by the owner for secure digital transactions, such as creating verifiable credentials or managing decentralized identifiers (DIDs). It generates a unique digital signature. The security of this key is vital; if lost or stolen, the corresponding identity could be compromised.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Public Key"),": Openly accessible, this key pairs with a specific private key. While the private key creates a digital signature, the public key verifies it. Successful verification indicates the signature was created by the paired private key."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Digital Signature")," is a cryptographic process employing the private key to validate data's authenticity and integrity, such as a message or document."),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"Self-Sovereign Identity (SSI)"),", these cryptographic procedures facilitate the management of digital identities (through DIDs) and the issuance, sharing, and verification of digital credentials."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifiable Credentials")," represent issuer-made declarations in a tamper-proof and privacy-respecting manner. These credentials can include various data types, such as qualifications or attestations about an individual's attributes."),(0,a.kt)("p",null,"The signing process for verifiable credentials involves:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Credential Creation"),": The issuer compiles the credential, incorporating details about the subject and other metadata.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Credential Signing"),": The issuer generates a digital signature by encrypting a digital representation of the credential (usually a hash) with their private key.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Credential Issuance"),": The credential, along with its digital signature, is given to the subject. The delivery method depends on the system used."))),(0,a.kt)("p",null,"When a third party (verifier) evaluates the credential, they use the issuer's public key to decrypt the digital signature, producing the original hash. If both hashes match, it validates the credential's integrity and authenticity."),(0,a.kt)("p",null,"This process hinges on the security and confidentiality of the private key. Any breaches could allow fraudsters to issue counterfeit credentials, emphasizing the importance of key management in SSI systems."))}y.isMDXComponent=!0}}]);