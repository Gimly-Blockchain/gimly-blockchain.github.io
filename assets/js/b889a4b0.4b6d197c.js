"use strict";(self.webpackChunkgimly_site_docs=self.webpackChunkgimly_site_docs||[]).push([[3131],{3905:function(n,e,r){r.d(e,{Zo:function(){return o},kt:function(){return f}});var t=r(67294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function p(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function g(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},s=Object.keys(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var a=t.createContext({}),y=function(n){var e=t.useContext(a),r=e;return n&&(r="function"==typeof n?n(e):p(p({},e),n)),r},o=function(n){var e=y(n.components);return t.createElement(a.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,s=n.originalType,a=n.parentName,o=g(n,["components","mdxType","originalType","parentName"]),c=y(r),u=i,f=c["".concat(a,".").concat(u)]||c[u]||d[u]||s;return r?t.createElement(f,p(p({ref:e},o),{},{components:r})):t.createElement(f,p({ref:e},o))}));function f(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=r.length,p=new Array(s);p[0]=u;var g={};for(var a in e)hasOwnProperty.call(e,a)&&(g[a]=e[a]);g.originalType=n,g[c]="string"==typeof n?n:i,p[1]=g;for(var y=2;y<s;y++)p[y]=r[y];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97102:function(n,e,r){r.r(e),r.d(e,{assets:function(){return o},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return c}});var t=r(87462),i=r(63366),s=(r(67294),r(3905)),p=["components"],g={id:"key-manager.keymanager.schema",title:"KeyManager.schema property",hide_title:!0},a=void 0,y={unversionedId:"api/key-manager.keymanager.schema",id:"api/key-manager.keymanager.schema",title:"KeyManager.schema property",description:"KeyManager.schema property",source:"@site/docs/api/key-manager.keymanager.schema.md",sourceDirName:"api",slug:"/api/key-manager.keymanager.schema",permalink:"/docs/api/key-manager.keymanager.schema",draft:!1,tags:[],version:"current",frontMatter:{id:"key-manager.keymanager.schema",title:"KeyManager.schema property",hide_title:!0}},o={},c=[{value:"KeyManager.schema property",id:"keymanagerschema-property",level:2}],d={toc:c},u="wrapper";function f(n){var e=n.components,r=(0,i.Z)(n,p);return(0,s.kt)(u,(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"keymanagerschema-property"},"KeyManager.schema property"),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'readonly schema: {\n        components: {\n            schemas: {\n                IKeyManagerCreateArgs: {\n                    type: string;\n                    properties: {\n                        type: {\n                            $ref: string;\n                            description: string;\n                        };\n                        kms: {\n                            type: string;\n                            description: string;\n                        };\n                        meta: {\n                            $ref: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                TKeyType: {\n                    type: string;\n                    enum: string[];\n                    description: string;\n                };\n                KeyMetadata: {\n                    type: string;\n                    properties: {\n                        algorithms: {\n                            type: string;\n                            items: {\n                                type: string;\n                            };\n                        };\n                    };\n                    description: string;\n                };\n                ManagedKeyInfo: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        kms: {\n                            type: string;\n                            description: string;\n                        };\n                        type: {\n                            $ref: string;\n                            description: string;\n                        };\n                        publicKeyHex: {\n                            type: string;\n                            description: string;\n                        };\n                        meta: {\n                            anyOf: ({\n                                $ref: string;\n                                type?: undefined;\n                            } | {\n                                type: string;\n                                $ref?: undefined;\n                            })[];\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerDecryptJWEArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        data: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerDeleteArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerEncryptJWEArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        to: {\n                            type: string;\n                            properties: {\n                                kid: {\n                                    type: string;\n                                    description: string;\n                                };\n                                type: {\n                                    $ref: string;\n                                    description: string;\n                                };\n                                publicKeyHex: {\n                                    type: string;\n                                    description: string;\n                                };\n                                privateKeyHex: {\n                                    type: string;\n                                    description: string;\n                                };\n                                meta: {\n                                    anyOf: ({\n                                        $ref: string;\n                                        type?: undefined;\n                                    } | {\n                                        type: string;\n                                        $ref?: undefined;\n                                    })[];\n                                    description: string;\n                                };\n                            };\n                            required: string[];\n                            description: string;\n                        };\n                        data: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerGetArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKey: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        kms: {\n                            type: string;\n                            description: string;\n                        };\n                        type: {\n                            $ref: string;\n                            description: string;\n                        };\n                        publicKeyHex: {\n                            type: string;\n                            description: string;\n                        };\n                        privateKeyHex: {\n                            type: string;\n                            description: string;\n                        };\n                        meta: {\n                            anyOf: ({\n                                $ref: string;\n                                type?: undefined;\n                            } | {\n                                type: string;\n                                $ref?: undefined;\n                            })[];\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                MinimalImportableKey: {\n                    $ref: string;\n                    description: string;\n                };\n                "RequireOnly<IKey,(\\"privateKeyHex\\"|\\"type\\"|\\"kms\\")>": {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        kms: {\n                            type: string;\n                            description: string;\n                        };\n                        type: {\n                            $ref: string;\n                            description: string;\n                        };\n                        publicKeyHex: {\n                            type: string;\n                            description: string;\n                        };\n                        privateKeyHex: {\n                            type: string;\n                            description: string;\n                        };\n                        meta: {\n                            anyOf: ({\n                                $ref: string;\n                                type?: undefined;\n                            } | {\n                                type: string;\n                                $ref?: undefined;\n                            })[];\n                            description: string;\n                        };\n                    };\n                    description: string;\n                };\n                IKeyManagerSharedSecretArgs: {\n                    type: string;\n                    properties: {\n                        secretKeyRef: {\n                            type: string;\n                            description: string;\n                        };\n                        publicKey: {\n                            type: string;\n                            properties: {\n                                publicKeyHex: {\n                                    type: string;\n                                    description: string;\n                                };\n                                type: {\n                                    $ref: string;\n                                    description: string;\n                                };\n                            };\n                            required: string[];\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerSignArgs: {\n                    type: string;\n                    properties: {\n                        keyRef: {\n                            type: string;\n                            description: string;\n                        };\n                        algorithm: {\n                            type: string;\n                            description: string;\n                        };\n                        data: {\n                            type: string;\n                            description: string;\n                        };\n                        encoding: {\n                            type: string;\n                            enum: string[];\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerSignEthTXArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        transaction: {\n                            type: string;\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n                IKeyManagerSignJWTArgs: {\n                    type: string;\n                    properties: {\n                        kid: {\n                            type: string;\n                            description: string;\n                        };\n                        data: {\n                            anyOf: ({\n                                type: string;\n                                properties?: undefined;\n                                required?: undefined;\n                                additionalProperties?: undefined;\n                            } | {\n                                type: string;\n                                properties: {\n                                    BYTES_PER_ELEMENT: {\n                                        type: string;\n                                    };\n                                    buffer: {\n                                        anyOf: ({\n                                            type: string;\n                                            properties: {\n                                                byteLength: {\n                                                    type: string;\n                                                };\n                                            };\n                                            required: string[];\n                                        } | {\n                                            type?: undefined;\n                                            properties?: undefined;\n                                            required?: undefined;\n                                        })[];\n                                    };\n                                    byteLength: {\n                                        type: string;\n                                    };\n                                    byteOffset: {\n                                        type: string;\n                                    };\n                                    length: {\n                                        type: string;\n                                    };\n                                };\n                                required: string[];\n                                additionalProperties: {\n                                    type: string;\n                                };\n                            })[];\n                            description: string;\n                        };\n                    };\n                    required: string[];\n                    description: string;\n                };\n            };\n            methods: {\n                keyManagerCreate: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n                keyManagerDecryptJWE: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerDelete: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerEncryptJWE: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerGet: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n                keyManagerGetKeyManagementSystems: {\n                    description: string;\n                    arguments: {\n                        type: string;\n                    };\n                    returnType: {\n                        type: string;\n                        items: {\n                            type: string;\n                        };\n                    };\n                };\n                keyManagerImport: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        $ref: string;\n                    };\n                };\n                keyManagerSharedSecret: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerSign: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerSignEthTX: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n                keyManagerSignJWT: {\n                    description: string;\n                    arguments: {\n                        $ref: string;\n                    };\n                    returnType: {\n                        type: string;\n                    };\n                };\n            };\n        };\n    };\n')))}f.isMDXComponent=!0}}]);