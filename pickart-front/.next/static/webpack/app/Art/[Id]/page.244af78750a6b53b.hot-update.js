"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Art/[Id]/page",{

/***/ "(app-pages-browser)/./src/components/Art/Comment.tsx":
/*!****************************************!*\
  !*** ./src/components/Art/Comment.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Art.module.scss */ \"(app-pages-browser)/./src/components/Art/Art.module.scss\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Art_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImgPlusText/IPT */ \"(app-pages-browser)/./src/components/ImgPlusText/IPT.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction Comments(param) {\n    let { ArtWorkId } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            var _session_data;\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common[\"Authorization\"] = \"Bearer \".concat((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.token);\n        }\n    }, [\n        session\n    ]);\n    const handleSubmit = async ()=>{\n        try {\n            if (inputValue != \"\") {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/AddComment?ArtWorkId=\".concat(ArtWorkId, \"&Comment=\").concat(inputValue));\n                // console.log(response.data);\n                setInputValue(\"\");\n                setFetching(true);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fetching) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/Comments?ArtWorkId=\".concat(ArtWorkId)).then((response)=>{\n                console.log(\"Comments \", response.data);\n                setComment(response.data);\n            }).finally(()=>{\n                setFetching(false);\n                if (isInitialLoad) {\n                    setIsInitialLoad(false);\n                }\n            });\n        }\n    }, [\n        fetching,\n        comment.length\n    ]);\n    const InputComment = ()=>{\n        var _session_data_user;\n        _s1();\n        const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (inputRef.current) {\n                inputRef.current.focus();\n            }\n        }, [\n            inputValue\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInput),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: \" \",\n                    img: session.status === \"authenticated\" ? AvatarPath + ((_session_data_user = session.data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.image) : \"/likesWhite.png\",\n                    size: \"S\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    type: \"text\",\n                    value: inputValue,\n                    onChange: (event)=>setInputValue(event.target.value),\n                    placeholder: \"Enter your comment\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Send),\n                    onClick: session.status === \"authenticated\" ? handleSubmit : next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().arrow)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, this);\n    };\n    _s1(InputComment, \"cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputComment, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            comment.length <= 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n                children: \"This work has no comments yet.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, this) : comment.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Comment),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentTop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/Profile/\".concat(comment.CommentatorId),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: comment.Name,\n                                        img: AvatarPath + comment.Avatar,\n                                        size: \"M\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),\n                                    children: \"8 hours ago\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                children: comment.CommentText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(Comments, \"rXHHxRT/3Ak1SZF7MqcxXACXEnI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydC9Db21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ2pDO0FBQ2E7QUFDRDtBQUNSO0FBQ2lDO0FBVTlELE1BQU1VLFdBQVc7QUFDakIsTUFBTUMsYUFBYTtBQUVKLFNBQVNDLFNBQVMsS0FBb0M7UUFBcEMsRUFBRUMsU0FBUyxFQUF5QixHQUFwQzs7O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFVO0lBQzVELE1BQU1rQixVQUFVWCwyREFBVUE7SUFDMUIsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJbUIsUUFBUUcsTUFBTSxLQUFLLGlCQUFpQjtnQkFDdUJIO1lBQTNEaEIsNkNBQUtBLENBQUNvQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQixHQUFHLFVBQW1DLFFBQXpCTixnQkFBQUEsUUFBUU8sSUFBSSxjQUFaUCxvQ0FBQUEsY0FBY1EsSUFBSSxDQUFDQyxLQUFLO1FBQ3ZGO0lBQ0osR0FBRztRQUFDVDtLQUFRO0lBRVosTUFBTVUsZUFBZTtRQUNqQixJQUFJO1lBQ0EsSUFBR1QsY0FBWSxJQUFJO2dCQUNmLE1BQU1VLFdBQVcsTUFBTTNCLDZDQUFLQSxDQUFDNEIsSUFBSSxDQUM3Qiw4Q0FBbUVYLE9BQXJCUixXQUFVLGFBQXNCLE9BQVhRO2dCQUV2RSw4QkFBOEI7Z0JBQzlCQyxjQUFjO2dCQUNkTCxZQUFZO1lBQ2hCO1FBQ0osRUFBRSxPQUFPZ0IsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWlCLGVBQWU7WUFDZkQsWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ0M7S0FBYztJQUVsQmpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWUsVUFBVztZQUNYWiw2Q0FBS0EsQ0FBQytCLEdBQUcsQ0FBWSw0Q0FBc0QsT0FBVnRCLFlBQzVEdUIsSUFBSSxDQUFDTCxDQUFBQTtnQkFDRkcsUUFBUUcsR0FBRyxDQUFDLGFBQWFOLFNBQVNKLElBQUk7Z0JBQ3RDWixXQUFXZ0IsU0FBU0osSUFBSTtZQUM1QixHQUNDVyxPQUFPLENBQUM7Z0JBQ0xyQixZQUFZO2dCQUNaLElBQUlDLGVBQWU7b0JBQ2ZDLGlCQUFpQjtnQkFDckI7WUFDSjtRQUNSO0lBQ0osR0FBRztRQUFDSDtRQUFVRixRQUFReUIsTUFBTTtLQUFDO0lBRTdCLE1BQU1DLGVBQWU7WUFXMERwQjs7UUFWM0UsTUFBTXFCLFdBQVd0Qyw2Q0FBTUEsQ0FBQztRQUV4QkYsZ0RBQVNBLENBQUM7WUFDTixJQUFJd0MsU0FBU0MsT0FBTyxFQUFFO2dCQUNsQkQsU0FBU0MsT0FBTyxDQUFDQyxLQUFLO1lBQzFCO1FBQ0osR0FBRztZQUFDdEI7U0FBVztRQUVmLHFCQUNJLDhEQUFDdUI7WUFBSUMsV0FBV3hDLHNFQUFtQjs7OEJBQy9CLDhEQUFDQyx3REFBR0E7b0JBQUN5QyxPQUFNO29CQUFJQyxLQUFLNUIsUUFBUUcsTUFBTSxLQUFLLGtCQUFpQlosZUFBV1MscUJBQUFBLFFBQVFPLElBQUksQ0FBQ0MsSUFBSSxjQUFqQlIseUNBQUFBLG1CQUFtQjZCLEtBQUssSUFBQztvQkFBbUJDLE1BQUs7Ozs7Ozs4QkFDcEgsOERBQUNDO29CQUNHQyxLQUFLWDtvQkFDTFksTUFBSztvQkFDTEMsT0FBT2pDO29CQUNQa0MsVUFBVSxDQUFDQyxRQUFVbEMsY0FBY2tDLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSztvQkFDckRJLGFBQVk7Ozs7Ozs4QkFFaEIsOERBQUNkO29CQUFJQyxXQUFXeEMsOERBQVc7b0JBQUV1RCxTQUFTeEMsUUFBUUcsTUFBTSxLQUFLLGtCQUFrQk8sZUFBZXRCLG1EQUFNQTs7c0NBQzVGLDhEQUFDcUQ7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ2pCOzRCQUFJQyxXQUFXeEMsK0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUk1QztRQXpCTW1DO0lBMkJOLHFCQUNJOzswQkFDSSw4REFBQ0E7Ozs7O1lBQ0ExQixRQUFReUIsTUFBTSxJQUFJLGtCQUNmLDhEQUFDSztnQkFBSUMsV0FBV3hDLHVFQUFvQjswQkFBRTs7Ozs7dUJBRXRDUyxRQUFRa0QsR0FBRyxDQUFDLENBQUNsRCx3QkFDVCw4REFBQzhCO29CQUFJQyxXQUFXeEMsaUVBQWM7O3NDQUMxQiw4REFBQ3VDOzRCQUFJQyxXQUFXeEMsb0VBQWlCOzs4Q0FDN0IsOERBQUNFLGlEQUFJQTtvQ0FBQzRELE1BQU0sWUFBa0MsT0FBdEJyRCxRQUFRc0QsYUFBYTs4Q0FDekMsNEVBQUM5RCx3REFBR0E7d0NBQUN5QyxPQUFPakMsUUFBUXVELElBQUk7d0NBQUVyQixLQUFLckMsYUFBYUcsUUFBUXdELE1BQU07d0NBQUVwQixNQUFLOzs7Ozs7Ozs7Ozs4Q0FFckUsOERBQUNXO29DQUFFaEIsV0FBV3hDLDhEQUFXOzhDQUFFOzs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDdUM7NEJBQUlDLFdBQVd4Qyx1RUFBb0I7c0NBQ2hDLDRFQUFDbUU7MENBQU0xRCxRQUFRMkQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RDtHQW5Hd0I3RDs7UUFJSkgsdURBQVVBOzs7S0FKTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0L0NvbW1lbnQudHN4P2NjZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSVBUIGZyb20gXCIuLi9JbWdQbHVzVGV4dC9JUFRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIENvbW1lbnQge1xyXG4gICAgQXJ0V29ya0lkOiBudW1iZXI7XHJcbiAgICBDb21tZW50YXRvcklkOiBudW1iZXI7XHJcbiAgICBOYW1lOiBzdHJpbmc7XHJcbiAgICBBdmF0YXI6IHN0cmluZztcclxuICAgIENvbW1lbnRUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGZpbGVQYXRoID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvQXJ0cy9cIjtcclxuY29uc3QgQXZhdGFyUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0F2YXRhcnMvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cyh7IEFydFdvcmtJZCB9OiB7IEFydFdvcmtJZDogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPENvbW1lbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJbml0aWFsTG9hZCwgc2V0SXNJbml0aWFsTG9hZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7c2Vzc2lvbi5kYXRhPy51c2VyLnRva2VufWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoaW5wdXRWYWx1ZSE9JycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAxL0FkZENvbW1lbnQ/QXJ0V29ya0lkPSR7QXJ0V29ya0lkfSZDb21tZW50PSR7aW5wdXRWYWx1ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0luaXRpYWxMb2FkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmV0Y2hpbmcgKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldDxDb21tZW50W10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvQ29tbWVudHM/QXJ0V29ya0lkPSR7QXJ0V29ya0lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21tZW50cyBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzSW5pdGlhbExvYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtmZXRjaGluZywgY29tbWVudC5sZW5ndGhdKTtcclxuXHJcbiAgICBjb25zdCBJbnB1dENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2lucHV0VmFsdWVdKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudElucHV0fT5cclxuICAgICAgICAgICAgICAgIDxJUFQgdGl0bGU9JyAnIGltZz17c2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiPyBBdmF0YXJQYXRoK3Nlc3Npb24uZGF0YS51c2VyPy5pbWFnZTpcIi9saWtlc1doaXRlLnBuZ1wifSBzaXplPSdTJz48L0lQVD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VuZH0gb25DbGljaz17c2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiID8gaGFuZGxlU3VibWl0IDogc2lnbklufT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TZW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPElucHV0Q29tbWVudCAvPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5sZW5ndGggPD0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudEluc2lkZX0+VGhpcyB3b3JrIGhhcyBubyBjb21tZW50cyB5ZXQuPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBjb21tZW50Lm1hcCgoY29tbWVudDogQ29tbWVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudFRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1Byb2ZpbGUvJHtjb21tZW50LkNvbW1lbnRhdG9ySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElQVCB0aXRsZT17Y29tbWVudC5OYW1lfSBpbWc9e0F2YXRhclBhdGggKyBjb21tZW50LkF2YXRhcn0gc2l6ZT0nTSc+PC9JUFQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT44IGhvdXJzIGFnbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudEluc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dD57Y29tbWVudC5Db21tZW50VGV4dH08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImF4aW9zIiwic3R5bGVzIiwiSVBUIiwiTGluayIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJmaWxlUGF0aCIsIkF2YXRhclBhdGgiLCJDb21tZW50cyIsIkFydFdvcmtJZCIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImlzSW5pdGlhbExvYWQiLCJzZXRJc0luaXRpYWxMb2FkIiwic2Vzc2lvbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic3RhdHVzIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGF0YSIsInVzZXIiLCJ0b2tlbiIsImhhbmRsZVN1Ym1pdCIsInJlc3BvbnNlIiwicG9zdCIsImVycm9yIiwiY29uc29sZSIsImdldCIsInRoZW4iLCJsb2ciLCJmaW5hbGx5IiwibGVuZ3RoIiwiSW5wdXRDb21tZW50IiwiaW5wdXRSZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJDb21tZW50SW5wdXQiLCJ0aXRsZSIsImltZyIsImltYWdlIiwic2l6ZSIsImlucHV0IiwicmVmIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiU2VuZCIsIm9uQ2xpY2siLCJwIiwiYXJyb3ciLCJDb21tZW50SW5zaWRlIiwibWFwIiwiQ29tbWVudCIsIkNvbW1lbnRUb3AiLCJocmVmIiwiQ29tbWVudGF0b3JJZCIsIk5hbWUiLCJBdmF0YXIiLCJ0aW1lIiwidGV4dCIsIkNvbW1lbnRUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Art/Comment.tsx\n"));

/***/ })

});