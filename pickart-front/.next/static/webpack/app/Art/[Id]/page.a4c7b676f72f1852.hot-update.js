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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Art; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Art.module.scss */ \"(app-pages-browser)/./src/components/Art/Art.module.scss\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Art_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImgPlusText/IPT */ \"(app-pages-browser)/./src/components/ImgPlusText/IPT.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction Art(param) {\n    let { ArtWorkId } = param;\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fetching) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/Comments?ArtWorkId=\".concat(ArtWorkId)).then((response)=>{\n                console.log(\"Comments \", response.data);\n                setComment((comment)=>[\n                        ...comment,\n                        ...response.data\n                    ]);\n            }).finally(()=>{\n                setFetching(false);\n                if (isInitialLoad) {\n                    setIsInitialLoad(false);\n                }\n            });\n        }\n    }, [\n        fetching\n    ]);\n    console.log(\"Length \", comment.length);\n    if (comment.length <= 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n            children: \"This work has no comments yet.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n            lineNumber: 51,\n            columnNumber: 16\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: comment.map((comment)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Comment),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentTop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"/Profile/\".concat(comment.CommentatorId),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: comment.Name,\n                                        img: AvatarPath + comment.Avatar,\n                                        size: \"M\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().time),\n                                    children: \"8 hours ago\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInside),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                children: comment.CommentText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\Comment.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 25\n                }, this);\n            })\n        }, void 0, false);\n    }\n}\n_s(Art, \"FTMfMgumnkTLzqClNJRLNhcNvJk=\");\n_c = Art;\n// else if (comment.length <= 3) {\n//     return (\n//         <>\n//             {comment.map((comment: Comment) => {\n//                 return (\n//                     <div className={styles.Comment}>\n//                         <div className={styles.CommentTop}>\n//                             <Link href={`/Profile/${comment.CommentatorId}`}>\n//                                 <IPT title={comment.Name} img={AvatarPath + comment.Avatar} size='M'></IPT>\n//                             </Link>\n//                             <p className={styles.time}>8 hours ago</p>\n//                         </div>\n//                         <div className={styles.CommentInside}>\n//                             <text>{comment.CommentText}</text>\n//                         </div>\n//                     </div>\n//                 )\n//             })\n//             }\n{} //         </>\n //     );\n // }\nvar _c;\n$RefreshReg$(_c, \"Art\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydC9Db21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUMxQjtBQUNhO0FBQ0Q7QUFDUjtBQVk3QixNQUFNTyxXQUFXO0FBQ2pCLE1BQU1DLGFBQWE7QUFHSixTQUFTQyxJQUFJLEtBQW9DO1FBQXBDLEVBQUVDLFNBQVMsRUFBeUIsR0FBcEM7O0lBQ3hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3BELE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBVTtJQUM1REQsZ0RBQVNBLENBQUM7UUFDTixJQUFJYyxlQUFlO1lBQ2ZELFlBQVk7UUFDaEI7SUFDSixHQUFHO1FBQUNDO0tBQWM7SUFFbEJkLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVksVUFBVTtZQUNWViw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFZLDRDQUFzRCxPQUFWUCxZQUM1RFEsSUFBSSxDQUFDQyxDQUFBQTtnQkFDRkMsUUFBUUMsR0FBRyxDQUFDLGFBQWFGLFNBQVNHLElBQUk7Z0JBQ3RDVixXQUFXRCxDQUFBQSxVQUFXOzJCQUFJQTsyQkFBWVEsU0FBU0csSUFBSTtxQkFBQztZQUN4RCxHQUNDQyxPQUFPLENBQUM7Z0JBQ0xULFlBQVk7Z0JBQ1osSUFBSUMsZUFBZTtvQkFDZkMsaUJBQWlCO2dCQUNyQjtZQUNKO1FBQ1I7SUFDSixHQUFHO1FBQUNIO0tBQVM7SUFHYk8sUUFBUUMsR0FBRyxDQUFDLFdBQVdWLFFBQVFhLE1BQU07SUFDckMsSUFBSWIsUUFBUWEsTUFBTSxJQUFJLEdBQUc7UUFDckIscUJBQU8sOERBQUNDO1lBQUlDLFdBQVd0Qix1RUFBb0I7c0JBQUc7Ozs7OztJQUNsRCxPQUFPO1FBQ0gscUJBQ0k7c0JBQ0tPLFFBQVFpQixHQUFHLENBQUMsQ0FBQ2pCO2dCQUNWLHFCQUNJLDhEQUFDYztvQkFBSUMsV0FBV3RCLGlFQUFjOztzQ0FDMUIsOERBQUNxQjs0QkFBSUMsV0FBV3RCLG9FQUFpQjs7OENBQzdCLDhEQUFDRSxpREFBSUE7b0NBQUN5QixNQUFNLFlBQWtDLE9BQXRCcEIsUUFBUXFCLGFBQWE7OENBQ3pDLDRFQUFDM0Isd0RBQUdBO3dDQUFDNEIsT0FBT3RCLFFBQVF1QixJQUFJO3dDQUFFQyxLQUFLM0IsYUFBYUcsUUFBUXlCLE1BQU07d0NBQUVDLE1BQUs7Ozs7Ozs7Ozs7OzhDQUVyRSw4REFBQ0M7b0NBQUVaLFdBQVd0Qiw4REFBVzs4Q0FBRTs7Ozs7Ozs7Ozs7O3NDQUUvQiw4REFBQ3FCOzRCQUFJQyxXQUFXdEIsdUVBQW9CO3NDQUNoQyw0RUFBQ29DOzBDQUFNN0IsUUFBUThCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTFDOztJQUlaO0FBRUo7R0FyRHdCaEM7S0FBQUE7QUE4RHhCLGtDQUFrQztBQUNsQyxlQUFlO0FBQ2YsYUFBYTtBQUNiLG1EQUFtRDtBQUNuRCwyQkFBMkI7QUFDM0IsdURBQXVEO0FBQ3ZELDhEQUE4RDtBQUM5RCxnRkFBZ0Y7QUFDaEYsOEdBQThHO0FBQzlHLHNDQUFzQztBQUN0Qyx5RUFBeUU7QUFDekUsaUNBQWlDO0FBQ2pDLGlFQUFpRTtBQUNqRSxpRUFBaUU7QUFDakUsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixDQUErRCxFQUMvRCxjQUFjO0NBQ2QsU0FBUztDQUNULElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0L0NvbW1lbnQudHN4P2NjZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJUFQgZnJvbSBcIi4uL0ltZ1BsdXNUZXh0L0lQVFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBDb21tZW50IHtcclxuICAgIEFydFdvcmtJZDogbnVtYmVyO1xyXG4gICAgQ29tbWVudGF0b3JJZDogbnVtYmVyO1xyXG4gICAgTmFtZTogc3RyaW5nO1xyXG4gICAgQXZhdGFyOiBzdHJpbmc7XHJcbiAgICBDb21tZW50VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBmaWxlUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0FydHMvXCI7XHJcbmNvbnN0IEF2YXRhclBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9BdmF0YXJzL1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydCh7IEFydFdvcmtJZCB9OiB7IEFydFdvcmtJZDogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPENvbW1lbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNJbml0aWFsTG9hZCwgc2V0SXNJbml0aWFsTG9hZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzSW5pdGlhbExvYWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmZXRjaGluZykge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQ8Q29tbWVudFtdPihgaHR0cDovL2xvY2FsaG9zdDozMDAxL0NvbW1lbnRzP0FydFdvcmtJZD0ke0FydFdvcmtJZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnQoY29tbWVudCA9PiBbLi4uY29tbWVudCwgLi4ucmVzcG9uc2UuZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNJbml0aWFsTG9hZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZldGNoaW5nXSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiTGVuZ3RoIFwiLCBjb21tZW50Lmxlbmd0aCk7XHJcbiAgICBpZiAoY29tbWVudC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRJbnNpZGV9ID5UaGlzIHdvcmsgaGFzIG5vIGNvbW1lbnRzIHlldC48L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y29tbWVudC5tYXAoKGNvbW1lbnQ6IENvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50VG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1Byb2ZpbGUvJHtjb21tZW50LkNvbW1lbnRhdG9ySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJUFQgdGl0bGU9e2NvbW1lbnQuTmFtZX0gaW1nPXtBdmF0YXJQYXRoICsgY29tbWVudC5BdmF0YXJ9IHNpemU9J00nPjwvSVBUPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT44IGhvdXJzIGFnbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50SW5zaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dD57Y29tbWVudC5Db21tZW50VGV4dH08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZWxzZSBpZiAoY29tbWVudC5sZW5ndGggPD0gMykge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICB7Y29tbWVudC5tYXAoKGNvbW1lbnQ6IENvbW1lbnQpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50VG9wfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvUHJvZmlsZS8ke2NvbW1lbnQuQ29tbWVudGF0b3JJZH1gfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SVBUIHRpdGxlPXtjb21tZW50Lk5hbWV9IGltZz17QXZhdGFyUGF0aCArIGNvbW1lbnQuQXZhdGFyfSBzaXplPSdNJz48L0lQVD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjggaG91cnMgYWdvPC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50SW5zaWRlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0Pntjb21tZW50LkNvbW1lbnRUZXh0fTwvdGV4dD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT4gPHA+TG9hZCBtb3JlPC9wPiA8L2Rpdj4gKi8gfVxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZXMiLCJJUFQiLCJMaW5rIiwiZmlsZVBhdGgiLCJBdmF0YXJQYXRoIiwiQXJ0IiwiQXJ0V29ya0lkIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaXNJbml0aWFsTG9hZCIsInNldElzSW5pdGlhbExvYWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZpbmFsbHkiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJDb21tZW50SW5zaWRlIiwibWFwIiwiQ29tbWVudCIsIkNvbW1lbnRUb3AiLCJocmVmIiwiQ29tbWVudGF0b3JJZCIsInRpdGxlIiwiTmFtZSIsImltZyIsIkF2YXRhciIsInNpemUiLCJwIiwidGltZSIsInRleHQiLCJDb21tZW50VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Art/Comment.tsx\n"));

/***/ })

});