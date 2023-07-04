"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[80873],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var g=r.createContext({}),o=function(n){var e=r.useContext(g),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(g.Provider,{value:e},n.children)},d="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,g=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),d=o(t),l=i,u=d["".concat(g,".").concat(l)]||d[l]||y[l]||s;return t?r.createElement(u,p(p({ref:e},c),{},{components:t})):r.createElement(u,p({ref:e},c))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,p=new Array(s);p[0]=l;var a={};for(var g in e)hasOwnProperty.call(e,g)&&(a[g]=e[g]);a.originalType=n,a[d]="string"==typeof n?n:i,p[1]=a;for(var o=2;o<s;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},27220:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return g},default:function(){return u},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return d}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),p=["components"],a={id:"message-handler.messagehandler.schema",title:"MessageHandler.schema property",hide_title:!0},g=void 0,o={unversionedId:"api/message-handler.messagehandler.schema",id:"api/message-handler.messagehandler.schema",title:"MessageHandler.schema property",description:"MessageHandler.schema property",source:"@site/docs/api/message-handler.messagehandler.schema.md",sourceDirName:"api",slug:"/api/message-handler.messagehandler.schema",permalink:"/docs/api/message-handler.messagehandler.schema",draft:!1,tags:[],version:"current",frontMatter:{id:"message-handler.messagehandler.schema",title:"MessageHandler.schema property",hide_title:!0}},c={},d=[{value:"MessageHandler.schema property",id:"messagehandlerschema-property",level:2}],y={toc:d},l="wrapper";function u(n){var e=n.components,t=(0,i.Z)(n,p);return(0,s.kt)(l,(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"messagehandlerschema-property"},"MessageHandler.schema property"),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'readonly schema: {\n        components: {\n            schemas: {\n                IHandleMessageArgs: {\n                    type: string;\n                    properties: {\n                        raw: {\n                            type: string;\n                            description: string;\n                        };\n                        metaData: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        save: {\n                            type: string;\n                            description: string;\n                            deprecated: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IMetaData: {\n                    type: string;\n                    properties: {\n                        type: {\n                            type: string;\n                            description: string;\n                        };\n                        value: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IMessage: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                            description: string;\n                        };\n                        type: {\n                            type: string;\n                            description: string;\n                        };\n                        createdAt: {\n                            type: string;\n                            description: string;\n                        };\n                        expiresAt: {\n                            type: string;\n                            description: string;\n                        };\n                        threadId: {\n                            type: string;\n                            description: string;\n                        };\n                        raw: {\n                            type: string;\n                            description: string;\n                        };\n                        data: {\n                            anyOf: {\n                                type: string;\n                            }[];\n                            description: string;\n                        };\n                        replyTo: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                            description: string;\n                        };\n                        replyUrl: {\n                            type: string;\n                            description: string;\n                        };\n                        from: {\n                            type: string;\n                            description: string;\n                        };\n                        to: {\n                            type: string;\n                            description: string;\n                        };\n                        metaData: {\n                            anyOf: ({\n                                type: string;\n                                items: {\n                                    $ref: string;\n                                };\n                            } | {\n                                type: string;\n                                items?: undefined;\n                            })[];\n                            description: string;\n                        };\n                        credentials: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        presentations: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        attachments: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                            description: string;\n                        };\n                        returnRoute: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                VerifiableCredential: {\n                    type: string;\n                    properties: {\n                        proof: {\n                            $ref: string;\n                        };\n                        issuer: {\n                            $ref: string;\n                        };\n                        credentialSubject: {\n                            $ref: string;\n                        };\n                        type: {\n                            anyOf: ({\n                                type: string;\n                                items: {\n                                    type: string;\n                                };\n                            } | {\n                                type: string;\n                                items?: undefined;\n                            })[];\n                        };\n                        "@context": {\n                            $ref: string;\n                        };\n                        issuanceDate: {\n                            type: string;\n                        };\n                        expirationDate: {\n                            type: string;\n                        };\n                        credentialStatus: {\n                            $ref: string;\n                        };\n                        id: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                ProofType: {\n                    type: string;\n                    properties: {\n                        type: {\n                            type: string;\n                        };\n                    };\n                    description: string;\n                };\n                IssuerType: {\n                    anyOf: ({\n                        type: string;\n                        properties: {\n                            id: {\n                                type: string;\n                            };\n                        };\n                        required: string[];\n                    } | {\n                        type: string;\n                        properties?: undefined;\n                        required?: undefined;\n                    })[];\n                    description: string;\n                };\n                CredentialSubject: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                        };\n                    };\n                    description: string;\n                };\n                ContextType: {\n                    anyOf: ({\n                        type: string;\n                        items?: undefined;\n                    } | {\n                        type: string;\n                        items: {\n                            anyOf: {\n                                type: string;\n                            }[];\n                        };\n                    })[];\n                    description: string;\n                };\n                CredentialStatusReference: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                        };\n                        type: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                VerifiablePresentation: {\n                    type: string;\n                    properties: {\n                        proof: {\n                            $ref: string;\n                        };\n                        holder: {\n                            type: string;\n                        };\n                        verifiableCredential: {\n                            type: string;\n                            items: {\n                                $ref: string;\n                            };\n                        };\n                        type: {\n                            anyOf: ({\n                                type: string;\n                                items: {\n                                    type: string;\n                                };\n                            } | {\n                                type: string;\n                                items?: undefined;\n                            })[];\n                        };\n                        "@context": {\n                            $ref: string;\n                        };\n                        verifier: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                        };\n                        issuanceDate: {\n                            type: string;\n                        };\n                        expirationDate: {\n                            type: string;\n                        };\n                        id: {\n                            type: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                W3CVerifiableCredential: {\n                    anyOf: {\n                        $ref: string;\n                    }[];\n                    description: string;\n                };\n                CompactJWT: {\n                    type: string;\n                    description: string;\n                };\n                IMessageAttachment: {\n                    type: string;\n                    properties: {\n                        id: {\n                            type: string;\n                        };\n                        description: {\n                            type: string;\n                        };\n                        filename: {\n                            type: string;\n                        };\n                        media_type: {\n                            type: string;\n                        };\n                        format: {\n                            type: string;\n                        };\n                        lastmod_time: {\n                            type: string;\n                        };\n                        byte_count: {\n                            type: string;\n                        };\n                        data: {\n                            $ref: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IMessageAttachmentData: {\n                    type: string;\n                    properties: {\n                        jws: {};\n                        hash: {\n                            type: string;\n                        };\n                        links: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                        };\n                        base64: {\n                            type: string;\n                        };\n                        json: {};\n                    };\n                    description: string;\n                };\n            };\n            methods: {\n                handleMessage: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n            };\n        };\n    };\n')))}u.isMDXComponent=!0}}]);