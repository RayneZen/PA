"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Partfolio/page",{

/***/ "(app-pages-browser)/./src/components/Partfolio/PartfolioPage.tsx":
/*!****************************************************!*\
  !*** ./src/components/Partfolio/PartfolioPage.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PartfolioPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Partfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partfolio.module.scss */ \"(app-pages-browser)/./src/components/Partfolio/Partfolio.module.scss\");\n/* harmony import */ var _Partfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Partfolio_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Background_Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Background/Background */ \"(app-pages-browser)/./src/components/Background/Background.tsx\");\n/* harmony import */ var _PartfolioImgBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PartfolioImgBoard */ \"(app-pages-browser)/./src/components/Partfolio/PartfolioImgBoard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Avatars/\";\nfunction PartfolioPage() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            var _session_data, _session_data1;\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common[\"Authorization\"] = \"Bearer \".concat((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.token);\n            axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/Profile?Id=\".concat((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : _session_data1.user.Id)).then((response)=>{\n                setUser(response.data);\n                console.log(\"user \", user);\n            });\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background_Background__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                Title: (user === null || user === void 0 ? void 0 : user.Name) ? user.Name : \"User\",\n                Logo: (user === null || user === void 0 ? void 0 : user.Avatar) ? filePath + user.Avatar : \"/Logotip_Black.png\",\n                Description: (user === null || user === void 0 ? void 0 : user.Information_about_yourself) ? user === null || user === void 0 ? void 0 : user.Information_about_yourself : \"Information about youself.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Partfolio\\\\PartfolioPage.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Partfolio_module_scss__WEBPACK_IMPORTED_MODULE_3___default().MidBar)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Partfolio\\\\PartfolioPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            session.status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PartfolioImgBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ProfileId: session.data.user.Id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Partfolio\\\\PartfolioPage.tsx\",\n                lineNumber: 41,\n                columnNumber: 50\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Partfolio\\\\PartfolioPage.tsx\",\n                lineNumber: 41,\n                columnNumber: 125\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PartfolioPage, \"buKACEyDP8NNT3uDb/OJh2gx4Rg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = PartfolioPage;\nvar _c;\n$RefreshReg$(_c, \"PartfolioPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BhcnRmb2xpby9QYXJ0Zm9saW9QYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ25CO0FBQ3lCO0FBSVA7QUFDTTtBQUNFO0FBR3BELE1BQU1RLFdBQVc7QUFPRixTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQTtJQUNoQyxNQUFNUyxVQUFVWiwyREFBVUE7SUFFMUJJLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVEsUUFBUUMsTUFBTSxLQUFLLGlCQUFpQjtnQkFDdUJELGVBQ1BBO1lBRHBEWCw2Q0FBS0EsQ0FBQ2EsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFtQyxRQUF6QkosZ0JBQUFBLFFBQVFLLElBQUksY0FBWkwsb0NBQUFBLGNBQWNGLElBQUksQ0FBQ1EsS0FBSztZQUNuRmpCLDZDQUFLQSxDQUFDa0IsR0FBRyxDQUFPLG9DQUEwRCxRQUF0QlAsaUJBQUFBLFFBQVFLLElBQUksY0FBWkwscUNBQUFBLGVBQWNGLElBQUksQ0FBQ1UsRUFBRSxHQUNwRUMsSUFBSSxDQUFDLENBQUNDO2dCQUNIWCxRQUFRVyxTQUFTTCxJQUFJO2dCQUNyQk0sUUFBUUMsR0FBRyxDQUFDLFNBQVFkO1lBQ3hCO1FBQ1I7SUFDSixHQUFHO1FBQUNFO0tBQVE7SUFFWixxQkFDSTs7MEJBQ0ksOERBQUNOLDhEQUFVQTtnQkFBQ21CLE9BQU9mLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWdCLElBQUksSUFBR2hCLEtBQUtnQixJQUFJLEdBQUc7Z0JBQVFDLE1BQU1qQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1rQixNQUFNLElBQUdwQixXQUFXRSxLQUFLa0IsTUFBTSxHQUFHO2dCQUFzQkMsYUFBYW5CLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTW9CLDBCQUEwQixJQUFHcEIsaUJBQUFBLDJCQUFBQSxLQUFNb0IsMEJBQTBCLEdBQUc7Ozs7OzswQkFDM00sOERBQUNDO2dCQUFJQyxXQUFXM0Isc0VBQWE7Ozs7OztZQUc1Qk8sUUFBUUMsTUFBTSxLQUFLLGdDQUFpQiw4REFBQ04sMERBQWlCQTtnQkFBQzJCLFdBQVd0QixRQUFRSyxJQUFJLENBQUNQLElBQUksQ0FBQ1UsRUFBRTs7Ozs7cUNBQXlCLDhEQUFDZTswQkFBRTs7Ozs7Ozs7QUFHL0g7R0F4QndCMUI7O1FBRUpULHVEQUFVQTs7O0tBRk5TIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhcnRmb2xpby9QYXJ0Zm9saW9QYWdlLnRzeD8zODIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IElQVCBmcm9tICcuLi9JbWdQbHVzVGV4dC9JUFQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFydGZvbGlvLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9CYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xyXG5pbXBvcnQgUGFydGZvbGlvSW1nQm9hcmQgZnJvbSAnLi9QYXJ0Zm9saW9JbWdCb2FyZCc7XHJcblxyXG5cclxuY29uc3QgZmlsZVBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9BdmF0YXJzL1wiO1xyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBBdmF0YXI6IHN0cmluZyxcclxuICAgIEluZm9ybWF0aW9uX2Fib3V0X3lvdXJzZWxmOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydGZvbGlvUGFnZSgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24uc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xyXG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Nlc3Npb24uZGF0YT8udXNlci50b2tlbn1gO1xyXG4gICAgICAgICAgICBheGlvcy5nZXQ8VXNlcj4oYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9Qcm9maWxlP0lkPSR7c2Vzc2lvbi5kYXRhPy51c2VyLklkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBcIix1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZCBUaXRsZT17dXNlcj8uTmFtZSA/IHVzZXIuTmFtZSA6IFwiVXNlclwifSBMb2dvPXt1c2VyPy5BdmF0YXIgPyBmaWxlUGF0aCArIHVzZXIuQXZhdGFyIDogXCIvTG9nb3RpcF9CbGFjay5wbmdcIn0gRGVzY3JpcHRpb249e3VzZXI/LkluZm9ybWF0aW9uX2Fib3V0X3lvdXJzZWxmID8gdXNlcj8uSW5mb3JtYXRpb25fYWJvdXRfeW91cnNlbGYgOiBcIkluZm9ybWF0aW9uIGFib3V0IHlvdXNlbGYuXCJ9ID48L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWlkQmFyfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5QYXNpdmV9PlBhcnRmb2xpbzwvcD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2Vzc2lvbi5zdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiPyA8UGFydGZvbGlvSW1nQm9hcmQgUHJvZmlsZUlkPXtzZXNzaW9uLmRhdGEudXNlci5JZH0+PC9QYXJ0Zm9saW9JbWdCb2FyZD4gOiA8cD5Mb2FkaW5nPC9wPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkJhY2tncm91bmQiLCJQYXJ0Zm9saW9JbWdCb2FyZCIsImZpbGVQYXRoIiwiUGFydGZvbGlvUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwic2Vzc2lvbiIsInN0YXR1cyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRhdGEiLCJ0b2tlbiIsImdldCIsIklkIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIlRpdGxlIiwiTmFtZSIsIkxvZ28iLCJBdmF0YXIiLCJEZXNjcmlwdGlvbiIsIkluZm9ybWF0aW9uX2Fib3V0X3lvdXJzZWxmIiwiZGl2IiwiY2xhc3NOYW1lIiwiTWlkQmFyIiwiUHJvZmlsZUlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Partfolio/PartfolioPage.tsx\n"));

/***/ })

});