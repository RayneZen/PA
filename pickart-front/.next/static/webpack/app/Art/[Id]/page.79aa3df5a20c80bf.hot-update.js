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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Art.module.scss */ \"(app-pages-browser)/./src/components/Art/Art.module.scss\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Art_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImgPlusText/IPT */ \"(app-pages-browser)/./src/components/ImgPlusText/IPT.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction Comments(param) {\n    let { ArtWorkId } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            var _session_data;\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common[\"Authorization\"] = \"Bearer \".concat((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.token);\n        }\n    }, [\n        session\n    ]);\n    const handleSubmit = async ()=>{\n        try {\n            if (inputValue != \"\") {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/AddComment?ArtWorkId=\".concat(ArtWorkId, \"&Comment=\").concat(inputValue));\n                // console.log(response.data);\n                setInputValue(\"\");\n                setFetching(true);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fetching) {\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/Comments?ArtWorkId=\".concat(ArtWorkId)).then((response)=>{\n                console.log(\"Comments \", response.data);\n                setComment(response.data);\n            }).finally(()=>{\n                setFetching(false);\n                if (isInitialLoad) {\n                    setIsInitialLoad(false);\n                }\n            });\n        }\n    }, [\n        fetching,\n        comment.length\n    ]);\n    const InputComment = ()=>{\n        var _session_data_user;\n        _s1();\n        const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (inputRef.current) {\n                inputRef.current.focus();\n                inputRef.current.addEventListener(\"keyup\", function(event) {\n                    if (event.keyCode === 13) {\n                        handleSubmit();\n                    }\n                });\n            }\n        }, [\n            inputValue\n        ]);\n        console.log(\"Sessia \", session);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInput),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: \" \",\n                    img: session.status === \"authenticated\" ? AvatarPath + ((_session_data_user = session.data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.Avatar) : \"/likesWhite.png\",\n                    size: \"S\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    type: \"text\",\n                    value: inputValue,\n                    onChange: (event)=>setInputValue(event.target.value),\n                    placeholder: \"Enter your comment\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Send),\n                    onClick: session.status === \"authenticated\" ? handleSubmit : next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().arrow)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, this);\n    };\n    _s1(InputComment, \"cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputComment, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            comment.length <= 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n                children: \"This work has no comments yet.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                lineNumber: 106,\n                columnNumber: 17\n            }, this) : comment.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Comment),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentTop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/Profile/\".concat(comment.CommentatorId),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: comment.Name,\n                                        img: AvatarPath + comment.Avatar,\n                                        size: \"M\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),\n                                    children: \"8 hours ago\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                children: comment.CommentText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(Comments, \"rXHHxRT/3Ak1SZF7MqcxXACXEnI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydC9Db21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ2pDO0FBQ2E7QUFDRDtBQUNSO0FBQ2lDO0FBVTlELE1BQU1VLFdBQVc7QUFDakIsTUFBTUMsYUFBYTtBQUVKLFNBQVNDLFNBQVMsS0FBb0M7UUFBcEMsRUFBRUMsU0FBUyxFQUF5QixHQUFwQzs7O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFVO0lBQzVELE1BQU1rQixVQUFVWCwyREFBVUE7SUFDMUIsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJbUIsUUFBUUcsTUFBTSxLQUFLLGlCQUFpQjtnQkFDdUJIO1lBQTNEaEIsNkNBQUtBLENBQUNvQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQixHQUFHLFVBQW1DLFFBQXpCTixnQkFBQUEsUUFBUU8sSUFBSSxjQUFaUCxvQ0FBQUEsY0FBY1EsSUFBSSxDQUFDQyxLQUFLO1FBQ3ZGO0lBQ0osR0FBRztRQUFDVDtLQUFRO0lBRVosTUFBTVUsZUFBZTtRQUNqQixJQUFJO1lBQ0EsSUFBR1QsY0FBWSxJQUFJO2dCQUNmLE1BQU1VLFdBQVcsTUFBTTNCLDZDQUFLQSxDQUFDNEIsSUFBSSxDQUM3Qiw4Q0FBbUVYLE9BQXJCUixXQUFVLGFBQXNCLE9BQVhRO2dCQUV2RSw4QkFBOEI7Z0JBQzlCQyxjQUFjO2dCQUNkTCxZQUFZO1lBQ2hCO1FBQ0osRUFBRSxPQUFPZ0IsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFFQWhDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWlCLGVBQWU7WUFDZkQsWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ0M7S0FBYztJQUVsQmpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWUsVUFBVztZQUNYWiw2Q0FBS0EsQ0FBQytCLEdBQUcsQ0FBWSw0Q0FBc0QsT0FBVnRCLFlBQzVEdUIsSUFBSSxDQUFDTCxDQUFBQTtnQkFDRkcsUUFBUUcsR0FBRyxDQUFDLGFBQWFOLFNBQVNKLElBQUk7Z0JBQ3RDWixXQUFXZ0IsU0FBU0osSUFBSTtZQUM1QixHQUNDVyxPQUFPLENBQUM7Z0JBQ0xyQixZQUFZO2dCQUNaLElBQUlDLGVBQWU7b0JBQ2ZDLGlCQUFpQjtnQkFDckI7WUFDSjtRQUNSO0lBQ0osR0FBRztRQUFDSDtRQUFVRixRQUFReUIsTUFBTTtLQUFDO0lBRTdCLE1BQU1DLGVBQWU7WUFnQjBEcEI7O1FBZjNFLE1BQU1xQixXQUFXdEMsNkNBQU1BLENBQUM7UUFFeEJGLGdEQUFTQSxDQUFDO1lBQ04sSUFBSXdDLFNBQVNDLE9BQU8sRUFBRTtnQkFDbEJELFNBQVNDLE9BQU8sQ0FBQ0MsS0FBSztnQkFDdEJGLFNBQVNDLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsU0FBUyxTQUFTQyxLQUFLO29CQUNyRCxJQUFJQSxNQUFNQyxPQUFPLEtBQUssSUFBSTt3QkFDdEJoQjtvQkFDSjtnQkFDSjtZQUNKO1FBQ0osR0FBRztZQUFDVDtTQUFXO1FBQ2ZhLFFBQVFHLEdBQUcsQ0FBQyxXQUFVakI7UUFDdEIscUJBQ0ksOERBQUMyQjtZQUFJQyxXQUFXM0Msc0VBQW1COzs4QkFDL0IsOERBQUNDLHdEQUFHQTtvQkFBQzRDLE9BQU07b0JBQUlDLEtBQUsvQixRQUFRRyxNQUFNLEtBQUssa0JBQWlCWixlQUFXUyxxQkFBQUEsUUFBUU8sSUFBSSxDQUFDQyxJQUFJLGNBQWpCUix5Q0FBQUEsbUJBQW1CZ0MsTUFBTSxJQUFDO29CQUFtQkMsTUFBSzs7Ozs7OzhCQUNySCw4REFBQ0M7b0JBQ0dDLEtBQUtkO29CQUNMZSxNQUFLO29CQUNMQyxPQUFPcEM7b0JBQ1BxQyxVQUFVLENBQUNiLFFBQVV2QixjQUFjdUIsTUFBTWMsTUFBTSxDQUFDRixLQUFLO29CQUNyREcsYUFBWTs7Ozs7OzhCQUVoQiw4REFBQ2I7b0JBQUlDLFdBQVczQyw4REFBVztvQkFBRXlELFNBQVMxQyxRQUFRRyxNQUFNLEtBQUssa0JBQWtCTyxlQUFldEIsbURBQU1BOztzQ0FDNUYsOERBQUN1RDtzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDaEI7NEJBQUlDLFdBQVczQywrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTVDO1FBOUJNbUM7SUFnQ04scUJBQ0k7OzBCQUNJLDhEQUFDQTs7Ozs7WUFDQTFCLFFBQVF5QixNQUFNLElBQUksa0JBQ2YsOERBQUNRO2dCQUFJQyxXQUFXM0MsdUVBQW9COzBCQUFFOzs7Ozt1QkFFdENTLFFBQVFvRCxHQUFHLENBQUMsQ0FBQ3BELHdCQUNULDhEQUFDaUM7b0JBQUlDLFdBQVczQyxpRUFBYzs7c0NBQzFCLDhEQUFDMEM7NEJBQUlDLFdBQVczQyxvRUFBaUI7OzhDQUM3Qiw4REFBQ0UsaURBQUlBO29DQUFDOEQsTUFBTSxZQUFrQyxPQUF0QnZELFFBQVF3RCxhQUFhOzhDQUN6Qyw0RUFBQ2hFLHdEQUFHQTt3Q0FBQzRDLE9BQU9wQyxRQUFReUQsSUFBSTt3Q0FBRXBCLEtBQUt4QyxhQUFhRyxRQUFRc0MsTUFBTTt3Q0FBRUMsTUFBSzs7Ozs7Ozs7Ozs7OENBRXJFLDhEQUFDVTtvQ0FBRWYsV0FBVzNDLDhEQUFXOzhDQUFFOzs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDMEM7NEJBQUlDLFdBQVczQyx1RUFBb0I7c0NBQ2hDLDRFQUFDb0U7MENBQU0zRCxRQUFRNEQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RDtHQXhHd0I5RDs7UUFJSkgsdURBQVVBOzs7S0FKTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0L0NvbW1lbnQudHN4P2NjZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSVBUIGZyb20gXCIuLi9JbWdQbHVzVGV4dC9JUFRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIENvbW1lbnQge1xyXG4gICAgQXJ0V29ya0lkOiBudW1iZXI7XHJcbiAgICBDb21tZW50YXRvcklkOiBudW1iZXI7XHJcbiAgICBOYW1lOiBzdHJpbmc7XHJcbiAgICBBdmF0YXI6IHN0cmluZztcclxuICAgIENvbW1lbnRUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGZpbGVQYXRoID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvQXJ0cy9cIjtcclxuY29uc3QgQXZhdGFyUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0F2YXRhcnMvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cyh7IEFydFdvcmtJZCB9OiB7IEFydFdvcmtJZDogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPENvbW1lbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJbml0aWFsTG9hZCwgc2V0SXNJbml0aWFsTG9hZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7c2Vzc2lvbi5kYXRhPy51c2VyLnRva2VufWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoaW5wdXRWYWx1ZSE9JycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAxL0FkZENvbW1lbnQ/QXJ0V29ya0lkPSR7QXJ0V29ya0lkfSZDb21tZW50PSR7aW5wdXRWYWx1ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0luaXRpYWxMb2FkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmV0Y2hpbmcgKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldDxDb21tZW50W10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvQ29tbWVudHM/QXJ0V29ya0lkPSR7QXJ0V29ya0lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21tZW50cyBcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzSW5pdGlhbExvYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtmZXRjaGluZywgY29tbWVudC5sZW5ndGhdKTtcclxuXHJcbiAgICBjb25zdCBJbnB1dENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaW5wdXRWYWx1ZV0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2Vzc2lhIFwiLHNlc3Npb24pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudElucHV0fT5cclxuICAgICAgICAgICAgICAgIDxJUFQgdGl0bGU9JyAnIGltZz17c2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiPyBBdmF0YXJQYXRoK3Nlc3Npb24uZGF0YS51c2VyPy5BdmF0YXI6XCIvbGlrZXNXaGl0ZS5wbmdcIn0gc2l6ZT0nUyc+PC9JUFQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbmR9IG9uQ2xpY2s9e3Nlc3Npb24uc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiA/IGhhbmRsZVN1Ym1pdCA6IHNpZ25Jbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxJbnB1dENvbW1lbnQgLz5cclxuICAgICAgICAgICAge2NvbW1lbnQubGVuZ3RoIDw9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRJbnNpZGV9PlRoaXMgd29yayBoYXMgbm8gY29tbWVudHMgeWV0LjwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgY29tbWVudC5tYXAoKGNvbW1lbnQ6IENvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRUb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9Qcm9maWxlLyR7Y29tbWVudC5Db21tZW50YXRvcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJUFQgdGl0bGU9e2NvbW1lbnQuTmFtZX0gaW1nPXtBdmF0YXJQYXRoICsgY29tbWVudC5BdmF0YXJ9IHNpemU9J00nPjwvSVBUPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+OCBob3VycyBhZ288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRJbnNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQ+e2NvbW1lbnQuQ29tbWVudFRleHR9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJheGlvcyIsInN0eWxlcyIsIklQVCIsIkxpbmsiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiZmlsZVBhdGgiLCJBdmF0YXJQYXRoIiwiQ29tbWVudHMiLCJBcnRXb3JrSWQiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJpc0luaXRpYWxMb2FkIiwic2V0SXNJbml0aWFsTG9hZCIsInNlc3Npb24iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInN0YXR1cyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRhdGEiLCJ1c2VyIiwidG9rZW4iLCJoYW5kbGVTdWJtaXQiLCJyZXNwb25zZSIsInBvc3QiLCJlcnJvciIsImNvbnNvbGUiLCJnZXQiLCJ0aGVuIiwibG9nIiwiZmluYWxseSIsImxlbmd0aCIsIklucHV0Q29tbWVudCIsImlucHV0UmVmIiwiY3VycmVudCIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImRpdiIsImNsYXNzTmFtZSIsIkNvbW1lbnRJbnB1dCIsInRpdGxlIiwiaW1nIiwiQXZhdGFyIiwic2l6ZSIsImlucHV0IiwicmVmIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIlNlbmQiLCJvbkNsaWNrIiwicCIsImFycm93IiwiQ29tbWVudEluc2lkZSIsIm1hcCIsIkNvbW1lbnQiLCJDb21tZW50VG9wIiwiaHJlZiIsIkNvbW1lbnRhdG9ySWQiLCJOYW1lIiwidGltZSIsInRleHQiLCJDb21tZW50VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Art/Comment.tsx\n"));

/***/ })

});