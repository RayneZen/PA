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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Background_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Background/Background */ \"(app-pages-browser)/./src/components/Background/Background.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Profile(param) {\n    let { Id } = param;\n    _s();\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isInitialLoad, setIsInitialLoad] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInitialLoad) {\n            setFetching(true);\n        }\n    }, [\n        isInitialLoad\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (fetching) {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/Profile?Id=\".concat(Id)).then((response)=>{\n                setProfile(response.data);\n            }).finally(()=>{\n                setFetching(false);\n                if (isInitialLoad) {\n                    setIsInitialLoad(false);\n                }\n            });\n        }\n    }, [\n        fetching,\n        Id,\n        isInitialLoad\n    ]);\n    console.log(\"Profile: \", profile);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Background_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Profile\\\\Profile.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Profile, \"tCO4FhYyC/T8f7vtsEtD4yXfBLw=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDVDtBQUMxQjtBQUVWLFNBQVNLLFFBQVMsS0FBaUI7UUFBakIsRUFBQ0MsRUFBRSxFQUFjLEdBQWpCOztJQU03QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVU7SUFDbEQsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQVU7SUFDNUQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFpQjtJQUV2REQsZ0RBQVNBLENBQUM7UUFDTixJQUFJTyxlQUFlO1lBQ2ZELFlBQVk7UUFDaEI7SUFDSixHQUFHO1FBQUNDO0tBQWM7SUFFbEJQLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUssVUFBVTtZQUNWSCw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFVLG9DQUF1QyxPQUFIUCxLQUNsRFEsSUFBSSxDQUFDQyxDQUFBQTtnQkFDRkgsV0FBV0csU0FBU0MsSUFBSTtZQUM1QixHQUNDQyxPQUFPLENBQUM7Z0JBQ0xULFlBQVk7Z0JBQ1osSUFBSUMsZUFBZTtvQkFDZkMsaUJBQWlCO2dCQUNyQjtZQUNKO1FBQ1I7SUFDSixHQUFHO1FBQUNIO1FBQVVEO1FBQUlHO0tBQWM7SUFFaENTLFFBQVFDLEdBQUcsQ0FBQyxhQUFZUjtJQUN4QixxQkFDSTtrQkFDQSw0RUFBQ1gseUVBQVVBOzs7Ozs7QUFHbkI7R0FyQ3dCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUudHN4PzQ3ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tncm91bmcgZnJvbSAnQC9jb21wb25lbnRzL0JhY2tncm91bmQvQmFja2dyb3VuZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSAoe0lkfTp7SWQ6IG51bWJlcn0pIHtcclxuICAgIGludGVyZmFjZSBQcm9maWxlIHtcclxuICAgICAgICBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgQXZhdGFyOiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIH1cclxuICAgIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSW5pdGlhbExvYWQsIHNldElzSW5pdGlhbExvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZTxQcm9maWxlIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xyXG4gICAgICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNJbml0aWFsTG9hZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldDxQcm9maWxlPihgaHR0cDovL2xvY2FsaG9zdDozMDAxL1Byb2ZpbGU/SWQ9JHtJZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2ZpbGUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0luaXRpYWxMb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmV0Y2hpbmcsIElkLCBpc0luaXRpYWxMb2FkXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJQcm9maWxlOiBcIixwcm9maWxlKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxCYWNrZ3JvdW5nPjwvQmFja2dyb3VuZz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5nIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUHJvZmlsZSIsIklkIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImlzSW5pdGlhbExvYWQiLCJzZXRJc0luaXRpYWxMb2FkIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZmluYWxseSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Profile/Profile.tsx\n"));

/***/ })

});