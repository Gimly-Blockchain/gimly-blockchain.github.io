"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[97030],{3905:function(n,e,t){t.d(e,{Zo:function(){return a},kt:function(){return y}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=r.createContext({}),g=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},a=function(n){var e=g(n.components);return r.createElement(c.Provider,{value:e},n.children)},d="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,c=n.parentName,a=o(n,["components","mdxType","originalType","parentName"]),d=g(t),u=i,y=d["".concat(c,".").concat(u)]||d[u]||l[u]||s;return t?r.createElement(y,p(p({ref:e},a),{},{components:t})):r.createElement(y,p({ref:e},a))}));function y(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,p=new Array(s);p[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[d]="string"==typeof n?n:i,p[1]=o;for(var g=2;g<s;g++)p[g]=t[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73550:function(n,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return g},toc:function(){return d}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),p=["components"],o={id:"selective-disclosure.selectivedisclosure.schema",title:"SelectiveDisclosure.schema property",hide_title:!0},c=void 0,g={unversionedId:"api/selective-disclosure.selectivedisclosure.schema",id:"api/selective-disclosure.selectivedisclosure.schema",title:"SelectiveDisclosure.schema property",description:"SelectiveDisclosure.schema property",source:"@site/docs/api/selective-disclosure.selectivedisclosure.schema.md",sourceDirName:"api",slug:"/api/selective-disclosure.selectivedisclosure.schema",permalink:"/docs/api/selective-disclosure.selectivedisclosure.schema",draft:!1,editUrl:"https://github.com/uport-project/gimly-website/edit/main/docs/api/selective-disclosure.selectivedisclosure.schema.md",tags:[],version:"current",frontMatter:{id:"selective-disclosure.selectivedisclosure.schema",title:"SelectiveDisclosure.schema property",hide_title:!0}},a={},d=[{value:"SelectiveDisclosure.schema property",id:"selectivedisclosureschema-property",level:2}],l={toc:d},u="wrapper";function y(n){var e=n.components,t=(0,i.Z)(n,p);return(0,s.kt)(u,(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"selectivedisclosureschema-property"},"SelectiveDisclosure.schema property"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'readonly schema: {\n        components: {\n            schemas: {\n                ICreateProfileCredentialsArgs: {\n                    type: string;\n                    properties: {\n                        holder: {\n                            type: string;\n                            description: string;\n                        };\n                        verifier: {\n                            type: string;\n                            description: string;\n                        };\n                        name: {\n                            type: string;\n                            description: string;\n                        };\n                        picture: {\n                            type: string;\n                            description: string;\n                        };\n                        url: {\n                            type: string;\n                            description: string;\n                        };\n                        save: {\n                            type: string;\n                            description: string;\n                        };\n                        send: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                VerifiablePresentation: {\n                    type: string;\n                    properties: {\n                        proof: {\n                            $ref: string;\n                        };\n                        holder: {\n                            type: string;\n                        };\n                        verifiableCredential: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                        };\n                        type: {\n                            anyOf: ({\n                                type: string;\n                                items: {\n                                    type: string;\n                                };\n                            } | {\n                                type: string;\n                                items?: undefined;\n                            })[];\n                        };\n                        "@context": {\n                            $ref: string;\n                        };\n                        verifier: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                        };\n                        issuanceDate: {\n                            type: string;\n                        };\n                        expirationDate: {\n                            type: string;\n                        };\n                        id: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                ProofType: {\n                    type: string;\n                    properties: {\n                        type: {\n                            type: string;\n                        };\n                    };\n                    description: string;\n                };\n                W3CVerifiableCredential: {\n                    anyOf: {\n                        $ref: string;\n                    }[];\n                    description: string;\n                };\n                VerifiableCredential: {\n                    type: string;\n                    properties: {\n                        proof: {\n                            $ref: string;\n                        };\n                        issuer: {\n                            $ref: string;\n                        };\n                        credentialSubject: {\n                            $ref: string;\n                        };\n                        type: {\n                            anyOf: ({\n                                type: string;\n                                items: {\n                                    type: string;\n                                };\n                            } | {\n                                type: string;\n                                items?: undefined;\n                            })[];\n                        };\n                        "@context": {\n                            $ref: string;\n                        };\n                        issuanceDate: {\n                            type: string;\n                        };\n                        expirationDate: {\n                            type: string;\n                        };\n                        credentialStatus: {\n                            $ref: string;\n                        };\n                        id: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IssuerType: {\n                    anyOf: ({\n                        type: string;\n                        properties: {\n                            id: {\n                                type: string;\n                            };\n                        };\n                        required: string[];\n                    } | {\n                        type: string;\n                        properties?: undefined;\n                        required?: undefined;\n                    })[];\n                    description: string;\n                };\n                CredentialSubject: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                        };\n                    };\n                    description: string;\n                };\n                ContextType: {\n                    anyOf: ({\n                        type: string;\n                        items?: undefined;\n                    } | {\n                        type: string;\n                        items: {\n                            anyOf: {\n                                type: string;\n                            }[];\n                        };\n                    })[];\n                    description: string;\n                };\n                CredentialStatusReference: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                        };\n                        type: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                CompactJWT: {\n                    type: string;\n                    description: string;\n                };\n                ICreateSelectiveDisclosureRequestArgs: {\n                    type: string;\n                    properties: {\n                        data: {\n                            $ref: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                ISelectiveDisclosureRequest: {\n                    type: string;\n                    properties: {\n                        issuer: {\n                            type: string;\n                            description: string;\n                        };\n                        subject: {\n                            type: string;\n                            description: string;\n                        };\n                        replyUrl: {\n                            type: string;\n                            description: string;\n                        };\n                        tag: {\n                            type: string;\n                        };\n                        claims: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        credentials: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                ICredentialRequestInput: {\n                    type: string;\n                    properties: {\n                        reason: {\n                            type: string;\n                            description: string;\n                        };\n                        essential: {\n                            type: string;\n                            description: string;\n                        };\n                        credentialType: {\n                            type: string;\n                            description: string;\n                        };\n                        credentialContext: {\n                            type: string;\n                            description: string;\n                        };\n                        claimType: {\n                            type: string;\n                            description: string;\n                        };\n                        claimValue: {\n                            type: string;\n                            description: string;\n                        };\n                        issuers: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                Issuer: {\n                    type: string;\n                    properties: {\n                        did: {\n                            type: string;\n                            description: string;\n                        };\n                        url: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IGetVerifiableCredentialsForSdrArgs: {\n                    type: string;\n                    properties: {\n                        sdr: {\n                            type: string;\n                            properties: {\n                                subject: {\n                                    type: string;\n                                    description: string;\n                                };\n                                replyUrl: {\n                                    type: string;\n                                    description: string;\n                                };\n                                tag: {\n                                    type: string;\n                                };\n                                claims: {\n                                    type: string;\n                                    items: {\n                                        $ref: string;\n                                    };\n                                    description: string;\n                                };\n                                credentials: {\n                                    type: string;\n                                    items: {\n                                        type: string;\n                                    };\n                                    description: string;\n                                };\n                            };\n                            required: string[];\n                            description: string;\n                        };\n                        did: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                ICredentialsForSdr: {\n                    type: string;\n                    properties: {\n                        reason: {\n                            type: string;\n                            description: string;\n                        };\n                        essential: {\n                            type: string;\n                            description: string;\n                        };\n                        credentialType: {\n                            type: string;\n                            description: string;\n                        };\n                        credentialContext: {\n                            type: string;\n                            description: string;\n                        };\n                        claimType: {\n                            type: string;\n                            description: string;\n                        };\n                        claimValue: {\n                            type: string;\n                            description: string;\n                        };\n                        issuers: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        credentials: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                UniqueVerifiableCredential: {\n                    type: string;\n                    properties: {\n                        hash: {\n                            type: string;\n                        };\n                        verifiableCredential: {\n                            $ref: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IValidatePresentationAgainstSdrArgs: {\n                    type: string;\n                    properties: {\n                        presentation: {\n                            $ref: string;\n                        };\n                        sdr: {\n                            $ref: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IPresentationValidationResult: {\n                    type: string;\n                    properties: {\n                        valid: {\n                            type: string;\n                        };\n                        claims: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n            };\n            methods: {\n                createProfilePresentation: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n                createSelectiveDisclosureRequest: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                getVerifiableCredentialsForSdr: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                        items: {\n                            $ref: string;\n                        };\n                    };\n                };\n                validatePresentationAgainstSdr: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n            };\n        };\n    };\n')))}y.isMDXComponent=!0}}]);