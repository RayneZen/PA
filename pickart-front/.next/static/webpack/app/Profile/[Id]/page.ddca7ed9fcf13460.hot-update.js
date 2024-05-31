"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Profile/[Id]/page",{

/***/ "(app-pages-browser)/./src/components/Profile/Profile.tsx":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ProfileImgBoard_ProfileImgBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProfileImgBoard/ProfileImgBoard */ \"(app-pages-browser)/./src/components/ProfileImgBoard/ProfileImgBoard.tsx\");\n/* harmony import */ var _components_Background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Background/Background */ \"(app-pages-browser)/./src/components/Background/Background.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction Profile(param) {\n    let { Id } = param;\n    _s();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (fetching) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/Profile/?Id=\".concat(Id)).then((response)=>{\n                setProfile(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            }).finally(()=>{\n                setFetching(false);\n                if (isInitialLoad) {\n                    setIsInitialLoad(false);\n                }\n            });\n        }\n    }, [\n        fetching\n    ]);\n    if (!profile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Profile\\\\Profile.tsx\",\n            lineNumber: 44,\n            columnNumber: 16\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Background_Background__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    Title: profile.Name,\n                    Logo: AvatarPath + profile.Avatar,\n                    Description: profile.Description ? profile.Description : \"Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Profile\\\\Profile.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfileImgBoard_ProfileImgBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ProfileId: Id\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Profile\\\\Profile.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Profile, \"/TvlBzlds97h8EtgynEs93i7q9w=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ2lEO0FBQ2Q7QUFRN0QsTUFBTU0sYUFBYTtBQUVKLFNBQVNDLFFBQVEsS0FBc0I7UUFBdEIsRUFBRUMsRUFBRSxFQUFrQixHQUF0Qjs7SUFDNUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFpQjtJQUN2RCxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVU7SUFDbEQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQVU7SUFFNURELGdEQUFTQSxDQUFDO1FBQ04sSUFBSVksZUFBZTtZQUNmRCxZQUFZO1FBQ2hCO0lBQ0osR0FBRztRQUFDQztLQUFjO0lBRWxCWixnREFBU0EsQ0FBQztRQUNOLElBQUlVLFVBQVU7WUFDVlIsNkNBQUtBLENBQUNZLEdBQUcsQ0FBVSxxQ0FBd0MsT0FBSFAsS0FDbkRRLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ0ZQLFdBQVdPLFNBQVNDLElBQUk7WUFDNUIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtnQkFDSEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNsQixHQUNDRSxPQUFPLENBQUM7Z0JBQ0xWLFlBQVk7Z0JBQ1osSUFBSUMsZUFBZTtvQkFDZkMsaUJBQWlCO2dCQUNyQjtZQUNKO1FBQ1I7SUFDSixHQUFHO1FBQUNIO0tBQVM7SUFFYixJQUFJLENBQUNGLFNBQVM7UUFDVixxQkFBTyw4REFBQ2M7c0JBQUk7Ozs7OztJQUNoQixPQUFPO1FBQ0gscUJBQ0k7OzhCQUNJLDhEQUFDbEIseUVBQVdBO29CQUFDbUIsT0FBT2YsUUFBUWdCLElBQUk7b0JBQUVDLE1BQU1wQixhQUFXRyxRQUFRa0IsTUFBTTtvQkFBRUMsYUFBYW5CLFFBQVFtQixXQUFXLEdBQUVuQixRQUFRbUIsV0FBVyxHQUFFOzs7Ozs7OEJBQzFILDhEQUFDeEIsbUZBQWVBO29CQUFDeUIsV0FBV3JCOzs7Ozs7OztJQUd4QztBQUNKO0dBdkN3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLnRzeD80N2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFByb2ZpbGVJbWdCb2FyZCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUltZ0JvYXJkL1Byb2ZpbGVJbWdCb2FyZCc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kZSBmcm9tICdAL2NvbXBvbmVudHMvQmFja2dyb3VuZC9CYWNrZ3JvdW5kJztcclxuXHJcbmludGVyZmFjZSBQcm9maWxlIHtcclxuICAgIE5hbWU6IHN0cmluZztcclxuICAgIEF2YXRhcjogc3RyaW5nO1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXZhdGFyUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0F2YXRhcnMvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgSWQgfTogeyBJZDogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFByb2ZpbGUgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSW5pdGlhbExvYWQsIHNldElzSW5pdGlhbExvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xyXG4gICAgICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNJbml0aWFsTG9hZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldDxQcm9maWxlPihgaHR0cDovL2xvY2FsaG9zdDozMDAxL1Byb2ZpbGUvP0lkPSR7SWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9maWxlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0luaXRpYWxMb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmV0Y2hpbmddKTtcclxuXHJcbiAgICBpZiAoIXByb2ZpbGUpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRlIFRpdGxlPXtwcm9maWxlLk5hbWV9IExvZ289e0F2YXRhclBhdGgrcHJvZmlsZS5BdmF0YXJ9IERlc2NyaXB0aW9uPXtwcm9maWxlLkRlc2NyaXB0aW9uID9wcm9maWxlLkRlc2NyaXB0aW9uIDpcIlByb2ZpbGVcIn0+PC9CYWNrZ3JvdW5kZT5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlSW1nQm9hcmQgUHJvZmlsZUlkPXtJZH0+PC9Qcm9maWxlSW1nQm9hcmQ+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUHJvZmlsZUltZ0JvYXJkIiwiQmFja2dyb3VuZGUiLCJBdmF0YXJQYXRoIiwiUHJvZmlsZSIsIklkIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaXNJbml0aWFsTG9hZCIsInNldElzSW5pdGlhbExvYWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJmaW5hbGx5IiwiZGl2IiwiVGl0bGUiLCJOYW1lIiwiTG9nbyIsIkF2YXRhciIsIkRlc2NyaXB0aW9uIiwiUHJvZmlsZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Profile/Profile.tsx\n"));

/***/ })

});