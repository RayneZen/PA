"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ImgBoard/ImgBoard.tsx":
/*!**********************************************!*\
  !*** ./src/components/ImgBoard/ImgBoard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImgBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImgBoard.module.scss */ \"(app-pages-browser)/./src/components/ImgBoard/ImgBoard.module.scss\");\n/* harmony import */ var _ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ImgPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImgPreview */ \"(app-pages-browser)/./src/components/ImgBoard/ImgPreview.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nfunction ImgBoard() {\n    _s();\n    const [arts, setArts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isTreading, setIsTreading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isLatest, setIsLatest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isFollowing, setIsFollowing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Запись в логи\");\n        localStorage.setItem(\"isTreading\", JSON.stringify(isTreading));\n        localStorage.setItem(\"isLatest\", JSON.stringify(isLatest));\n        localStorage.setItem(\"isFollowing\", JSON.stringify(isFollowing));\n    }, [\n        isTreading,\n        isLatest,\n        isFollowing\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Чтение из логов\");\n        const storedIsTreading = localStorage.getItem(\"isTreading\");\n        const storedIsLatest = localStorage.getItem(\"isLatest\");\n        const storedIsFollowing = localStorage.getItem(\"isFollowing\");\n        if (storedIsTreading) {\n            setIsTreading(JSON.parse(storedIsTreading));\n        }\n        if (storedIsLatest) {\n            setIsLatest(JSON.parse(storedIsLatest));\n        }\n        if (storedIsFollowing) {\n            setIsFollowing(JSON.parse(storedIsFollowing));\n        }\n        console.log(\"State \", isTreading, isLatest, isFollowing);\n        if (fetching) {\n            if (isTreading) {\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/?page=\".concat(currentPage)).then((response)=>{\n                    setArts((arts)=>[\n                            ...arts,\n                            ...response.data\n                        ]);\n                    setCurrentPage(currentPage + 1);\n                }).finally(()=>{\n                    setFetching(false);\n                    if (isInitialLoad) {\n                        setIsInitialLoad(false);\n                    }\n                });\n            } else if (isLatest) {\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/?page=\".concat(currentPage)).then((response)=>{\n                    setArts((arts)=>[\n                            ...arts,\n                            ...response.data\n                        ]);\n                    setCurrentPage(currentPage + 1);\n                }).finally(()=>{\n                    setFetching(false);\n                    if (isInitialLoad) {\n                        setIsInitialLoad(false);\n                    }\n                });\n            } else if (isFollowing) {\n                axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/Following?page=\".concat(currentPage)).then((response)=>{\n                    setArts((arts)=>[\n                            ...arts,\n                            ...response.data\n                        ]);\n                    setCurrentPage(currentPage + 1);\n                }).finally(()=>{\n                    setFetching(false);\n                    if (isInitialLoad) {\n                        setIsInitialLoad(false);\n                    }\n                });\n            }\n        }\n    }, [\n        fetching\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollHandler = ()=>{\n            if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {\n                setFetching(true);\n            }\n        };\n        document.addEventListener(\"scroll\", scrollHandler);\n        return function() {\n            document.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, [\n        fetching\n    ]);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const TreadingClick = ()=>{\n        setIsTreading(true);\n        setIsLatest(false);\n        setIsFollowing(false);\n        setCurrentPage(1);\n        setArts([]);\n        setFetching(true);\n    };\n    const LatestClick = ()=>{\n        setIsTreading(false);\n        setIsLatest(true);\n        setIsFollowing(false);\n        setCurrentPage(1);\n        setArts([]);\n        setFetching(true);\n    };\n    const FollowingClick = ()=>{\n        setIsTreading(false);\n        setIsLatest(false);\n        setIsFollowing(true);\n        setCurrentPage(1);\n        setArts([]);\n        setFetching(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            var _session_data;\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common[\"Authorization\"] = \"Bearer \".concat((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.token);\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            session.status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().MidBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: TreadingClick,\n                        className: isTreading ? (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Active) : (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Passive),\n                        children: \"Trending\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: LatestClick,\n                        className: isLatest ? (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Active) : (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Passive),\n                        children: \"Latest\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: FollowingClick,\n                        className: isFollowing ? (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Active) : (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Passive),\n                        children: \"Following\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                lineNumber: 153,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().MidBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: TreadingClick,\n                        className: isTreading ? (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Active) : (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Passive),\n                        children: \"Trending\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: LatestClick,\n                        className: isLatest ? (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Active) : (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Passive),\n                        children: \"Latest\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                lineNumber: 158,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImgBoard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ImgBoard),\n                children: arts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/Art/\".concat(post.ArtWorkId),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: post.Title,\n                            img: filePath + post.FileName\n                        }, post.ArtWorkId, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                            lineNumber: 169,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\ImgBoard\\\\ImgBoard.tsx\",\n                lineNumber: 165,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ImgBoard, \"ENjm+/oAgtVLQEnlqTGDa/hat8o=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = ImgBoard;\nvar _c;\n$RefreshReg$(_c, \"ImgBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltZ0JvYXJkL0ltZ0JvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lEO0FBQzVCO0FBQ0o7QUFDa0I7QUFDTjtBQUN5QjtBQVk5RCxNQUFNUSxXQUFXO0FBRUYsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDYyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQVU7SUFDNUQsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQVU7SUFDdEQsTUFBTSxDQUFDa0IsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQVU7SUFDbEQsTUFBTSxDQUFDb0IsYUFBYUMsZUFBZSxHQUFHckIsK0NBQVFBLENBQVU7SUFHeERELGdEQUFTQSxDQUFDLEtBRVYsR0FBRyxFQUFFO0lBRUxBLGdEQUFTQSxDQUFDO1FBQ051QixRQUFRQyxHQUFHLENBQUM7UUFDWkMsYUFBYUMsT0FBTyxDQUFDLGNBQWNDLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDbERRLGFBQWFDLE9BQU8sQ0FBQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNUO1FBQ2hETSxhQUFhQyxPQUFPLENBQUMsZUFBZUMsS0FBS0MsU0FBUyxDQUFDUDtJQUN2RCxHQUFHO1FBQUNKO1FBQVlFO1FBQVVFO0tBQVk7SUFFdENyQixnREFBU0EsQ0FBQztRQUNOLElBQUllLGVBQWU7WUFDZkgsWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ0c7S0FBYztJQUdsQmYsZ0RBQVNBLENBQUM7UUFDTnVCLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1LLG1CQUFtQkosYUFBYUssT0FBTyxD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bmVudHMvSW1nQm9hcmQvSW1nQm9hcmQudHN4P2RhZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IGxhenksIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWdCb2FyZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEltZ1ByZXZpZXcgZnJvbSAnLi9JbWdQcmV2aWV3J1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IE1pZEJhciBmcm9tICcuL01pZEJhcidcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIEFydCB7XHJcbiAgICBBcnRXb3JrSWQ6IG51bWJlcjtcclxuICAgIFRpdGxlOiBzdHJpbmc7XHJcbiAgICBGaWxlTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBmaWxlUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0FydHMvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWdCb2FyZCgpIHtcclxuICAgIGNvbnN0IFthcnRzLCBzZXRBcnRzXSA9IHVzZVN0YXRlPEFydFtdPihbXSk7XHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICAgIGNvbnN0IFtpc0luaXRpYWxMb2FkLCBzZXRJc0luaXRpYWxMb2FkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW2lzVHJlYWRpbmcsIHNldElzVHJlYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbaXNMYXRlc3QsIHNldElzTGF0ZXN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0ZvbGxvd2luZywgc2V0SXNGb2xsb3dpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0JfQsNC/0LjRgdGMINCyINC70L7Qs9C4XCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc1RyZWFkaW5nJywgSlNPTi5zdHJpbmdpZnkoaXNUcmVhZGluZykpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0xhdGVzdCcsIEpTT04uc3RyaW5naWZ5KGlzTGF0ZXN0KSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzRm9sbG93aW5nJywgSlNPTi5zdHJpbmdpZnkoaXNGb2xsb3dpbmcpKTtcclxuICAgIH0sIFtpc1RyZWFkaW5nLCBpc0xhdGVzdCwgaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0luaXRpYWxMb2FkXSk7XHJcbiAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQp9GC0LXQvdC40LUg0LjQtyDQu9C+0LPQvtCyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdG9yZWRJc1RyZWFkaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzVHJlYWRpbmcnKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRJc0xhdGVzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xhdGVzdCcpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZElzRm9sbG93aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRm9sbG93aW5nJyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoc3RvcmVkSXNUcmVhZGluZykge1xyXG4gICAgICAgICAgICBzZXRJc1RyZWFkaW5nKEpTT04ucGFyc2Uoc3RvcmVkSXNUcmVhZGluZykpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChzdG9yZWRJc0xhdGVzdCkge1xyXG4gICAgICAgICAgICBzZXRJc0xhdGVzdChKU09OLnBhcnNlKHN0b3JlZElzTGF0ZXN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHN0b3JlZElzRm9sbG93aW5nKSB7XHJcbiAgICAgICAgICAgIHNldElzRm9sbG93aW5nKEpTT04ucGFyc2Uoc3RvcmVkSXNGb2xsb3dpbmcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGF0ZSBcIixpc1RyZWFkaW5nLGlzTGF0ZXN0LGlzRm9sbG93aW5nKTtcclxuICAgICAgICBpZiAoZmV0Y2hpbmcpIHtcclxuICAgICAgICAgICAgaWYoaXNUcmVhZGluZyl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQ8QXJ0W10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvP3BhZ2U9JHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJ0cyhhcnRzID0+IFsuLi5hcnRzLCAuLi5yZXNwb25zZS5kYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzSW5pdGlhbExvYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGlzTGF0ZXN0KXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldDxBcnRbXT4oYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8/cGFnZT0ke2N1cnJlbnRQYWdlfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJ0cyhhcnRzID0+IFsuLi5hcnRzLCAuLi5yZXNwb25zZS5kYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzSW5pdGlhbExvYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQ8QXJ0W10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvRm9sbG93aW5nP3BhZ2U9JHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFydHMoYXJ0cyA9PiBbLi4uYXJ0cywgLi4ucmVzcG9uc2UuZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0luaXRpYWxMb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtmZXRjaGluZ10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCkgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbZmV0Y2hpbmddKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBUcmVhZGluZ0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzVHJlYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0SXNMYXRlc3QoZmFsc2UpO1xyXG4gICAgICAgIHNldElzRm9sbG93aW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcclxuICAgICAgICBzZXRBcnRzKFtdKTtcclxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgIH07Y29uc3QgTGF0ZXN0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNUcmVhZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNMYXRlc3QodHJ1ZSk7XHJcbiAgICAgICAgc2V0SXNGb2xsb3dpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgICAgIHNldEFydHMoW10pO1xyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgfTtjb25zdCBGb2xsb3dpbmdDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1RyZWFkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJc0xhdGVzdChmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNGb2xsb3dpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICAgICAgc2V0QXJ0cyhbXSk7XHJcbiAgICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7c2Vzc2lvbi5kYXRhPy51c2VyLnRva2VufWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nlc3Npb25dKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcblxyXG4gICAgICAgICAgICB7c2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NaWRCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e1RyZWFkaW5nQ2xpY2t9IGNsYXNzTmFtZT17aXNUcmVhZGluZyA/IHN0eWxlcy5BY3RpdmUgOiBzdHlsZXMuUGFzc2l2ZX0+VHJlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17TGF0ZXN0Q2xpY2t9IGNsYXNzTmFtZT17aXNMYXRlc3QgPyBzdHlsZXMuQWN0aXZlIDogc3R5bGVzLlBhc3NpdmV9PkxhdGVzdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtGb2xsb3dpbmdDbGlja30gY2xhc3NOYW1lPXtpc0ZvbGxvd2luZyA/IHN0eWxlcy5BY3RpdmUgOiBzdHlsZXMuUGFzc2l2ZX0+Rm9sbG93aW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWlkQmFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtUcmVhZGluZ0NsaWNrfSBjbGFzc05hbWU9e2lzVHJlYWRpbmcgPyBzdHlsZXMuQWN0aXZlIDogc3R5bGVzLlBhc3NpdmV9PlRyZW5kaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e0xhdGVzdENsaWNrfSBjbGFzc05hbWU9e2lzTGF0ZXN0ID8gc3R5bGVzLkFjdGl2ZSA6IHN0eWxlcy5QYXNzaXZlfT5MYXRlc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNoYWRvd30+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkltZ0JvYXJkfT5cclxuICAgICAgICAgICAgICAgIHthcnRzLm1hcCgocG9zdDogQXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9BcnQvJHtwb3N0LkFydFdvcmtJZH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nUHJldmlldyBrZXk9e3Bvc3QuQXJ0V29ya0lkfSB0aXRsZT17cG9zdC5UaXRsZX0gaW1nPXtmaWxlUGF0aCArIHBvc3QuRmlsZU5hbWV9PjwvSW1nUHJldmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiYXhpb3MiLCJzdHlsZXMiLCJJbWdQcmV2aWV3IiwidXNlU2Vzc2lvbiIsImZpbGVQYXRoIiwiSW1nQm9hcmQiLCJhcnRzIiwic2V0QXJ0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaXNJbml0aWFsTG9hZCIsInNldElzSW5pdGlhbExvYWQiLCJpc1RyZWFkaW5nIiwic2V0SXNUcmVhZGluZyIsImlzTGF0ZXN0Iiwic2V0SXNMYXRlc3QiLCJpc0ZvbGxvd2luZyIsInNldElzRm9sbG93aW5nIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkSXNUcmVhZGluZyIsImdldEl0ZW0iLCJzdG9yZWRJc0xhdGVzdCIsInN0b3JlZElzRm9sbG93aW5nIiwicGFyc2UiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZmluYWxseSIsInNjcm9sbEhhbmRsZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXNzaW9uIiwiVHJlYWRpbmdDbGljayIsIkxhdGVzdENsaWNrIiwiRm9sbG93aW5nQ2xpY2siLCJzdGF0dXMiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ1c2VyIiwidG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJNaWRCYXIiLCJwIiwib25DbGljayIsIkFjdGl2ZSIsIlBhc3NpdmUiLCJtYXAiLCJwb3N0IiwiaHJlZiIsIkFydFdvcmtJZCIsInRpdGxlIiwiVGl0bGUiLCJpbWciLCJGaWxlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImgBoard/ImgBoard.tsx\n"));

/***/ })

});