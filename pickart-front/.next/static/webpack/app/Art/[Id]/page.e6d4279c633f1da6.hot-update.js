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

/***/ "(app-pages-browser)/./src/components/Art/CommentInput.tsx":
/*!*********************************************!*\
  !*** ./src/components/Art/CommentInput.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Art; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Art.module.scss */ \"(app-pages-browser)/./src/components/Art/Art.module.scss\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Art_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImgPlusText/IPT */ \"(app-pages-browser)/./src/components/ImgPlusText/IPT.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction Art() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [serverResponse, setServerResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async ()=>{\n        try {\n            const response = await fetch(\"/api/submit\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input: inputValue\n                })\n            });\n            const data = await response.json();\n            setServerResponse(data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInput),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \" \",\n                img: \"/likesWhite.png\",\n                size: \"S\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValue,\n                onChange: (event)=>setInputValue(event.target.value),\n                placeholder: \"Enter your comment\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Send),\n                onClick: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().arrow)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(Art, \"X5I7XvOgnkizWxt7SBwdxWD2KGY=\");\n_c = Art;\nvar _c;\n$RefreshReg$(_c, \"Art\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydC9Db21tZW50SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUViO0FBQ0Q7QUFPckMsTUFBTUksV0FBVztBQUNqQixNQUFNQyxhQUFhO0FBR0osU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJELE1BQU1VLGVBQWU7UUFDakIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxlQUFlO2dCQUN4Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO2dCQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxPQUFPWjtnQkFBVztZQUM3QztZQUNBLE1BQU1hLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQ1gsa0JBQWtCVTtRQUN0QixFQUFFLE9BQU9FLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVd2QixzRUFBbUI7OzBCQUMvQiw4REFBQ0Msd0RBQUdBO2dCQUFDd0IsT0FBTTtnQkFBSUMsS0FBSTtnQkFBa0JDLE1BQUs7Ozs7OzswQkFDMUMsOERBQUNWO2dCQUFNVyxNQUFLO2dCQUNSQyxPQUFPeEI7Z0JBQ1B5QixVQUFVLENBQUNDLFFBQVV6QixjQUFjeUIsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO2dCQUNyREksYUFBWTs7Ozs7OzBCQUNoQiw4REFBQ1g7Z0JBQUlDLFdBQVd2Qiw4REFBVztnQkFBRW1DLFNBQVMxQjs7a0NBQ2xDLDhEQUFDMkI7a0NBQUU7Ozs7OztrQ0FHSCw4REFBQ2Q7d0JBQUlDLFdBQVd2QiwrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVDO0dBakN3Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0L0NvbW1lbnRJbnB1dC50c3g/YTUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FydC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IElQVCBmcm9tIFwiLi4vSW1nUGx1c1RleHQvSVBUXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBmaWxlUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0FydHMvXCI7XHJcbmNvbnN0IEF2YXRhclBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9BdmF0YXJzL1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydCgpIHtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZXJ2ZXJSZXNwb25zZSwgc2V0U2VydmVyUmVzcG9uc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc3VibWl0Jywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXQ6IGlucHV0VmFsdWUgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRTZXJ2ZXJSZXNwb25zZShkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50SW5wdXR9PlxyXG4gICAgICAgICAgICA8SVBUIHRpdGxlPScgJyBpbWc9XCIvbGlrZXNXaGl0ZS5wbmdcIiBzaXplPSdTJz48L0lQVD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGNvbW1lbnRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbmR9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSVBUIiwiZmlsZVBhdGgiLCJBdmF0YXJQYXRoIiwiQXJ0IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzZXJ2ZXJSZXNwb25zZSIsInNldFNlcnZlclJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlucHV0IiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJDb21tZW50SW5wdXQiLCJ0aXRsZSIsImltZyIsInNpemUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJTZW5kIiwib25DbGljayIsInAiLCJhcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Art/CommentInput.tsx\n"));

/***/ })

});