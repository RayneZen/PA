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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CommentInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Art.module.scss */ \"(app-pages-browser)/./src/components/Art/Art.module.scss\");\n/* harmony import */ var _Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Art_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImgPlusText/IPT */ \"(app-pages-browser)/./src/components/ImgPlusText/IPT.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst filePath = \"http://localhost:3001/Arts/\";\nconst AvatarPath = \"http://localhost:3001/Avatars/\";\nfunction CommentInput(param) {\n    let { ArtWorkId } = param;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (session.status === \"authenticated\") {\n            var _session_data;\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common[\"Authorization\"] = \"Bearer \".concat((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.token);\n        }\n    }, [\n        session\n    ]);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [serverResponse, setServerResponse] = useState(null);\n    const handleSubmit = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/AddComment?ArtWorkId=\".concat(ArtWorkId), {\n                comment: inputValue\n            });\n            console.log(response.data);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CommentInput),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImgPlusText_IPT__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \" \",\n                img: \"/likesWhite.png\",\n                size: \"S\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: inputValue,\n                onChange: (event)=>setInputValue(event.target.value),\n                placeholder: \"Enter your comment\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Send),\n                onClick: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Art_module_scss__WEBPACK_IMPORTED_MODULE_2___default().arrow)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\PickArt\\\\pickart-front\\\\src\\\\components\\\\Art\\\\CommentInput.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(CommentInput, \"NOXmF72X4iAMZEeffqNzfAunbC8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = CommentInput;\nvar _c;\n$RefreshReg$(_c, \"CommentInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydC9Db21tZW50SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUMxQjtBQUNhO0FBQ3dCO0FBQ3pCO0FBTXJDLE1BQU1PLFdBQVc7QUFDakIsTUFBTUMsYUFBYTtBQUdKLFNBQVNDLGFBQWEsS0FBOEI7UUFBOUIsRUFBQ0MsU0FBUyxFQUFvQixHQUE5Qjs7SUFDakMsTUFBTUMsVUFBVU4sMkRBQVVBO0lBQzFCSixnREFBU0EsQ0FBQztRQUNOLElBQUlVLFFBQVFDLE1BQU0sS0FBSyxpQkFBaUI7Z0JBQ3VCRDtZQUEzRFIsNkNBQUtBLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBbUMsUUFBekJKLGdCQUFBQSxRQUFRSyxJQUFJLGNBQVpMLG9DQUFBQSxjQUFjTSxJQUFJLENBQUNDLEtBQUs7UUFDdkY7SUFDSixHQUFHO1FBQUNQO0tBQVE7SUFDWixNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdDLDhEQUE4RDtJQUU5RCxNQUFNbUIsZUFBZTtRQUNqQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsNkNBQUtBLENBQUNvQixJQUFJLENBQy9CLDhDQUF3RCxPQUFWYixZQUM5QztnQkFDRWMsU0FBU0w7WUFDWDtZQUVGTSxRQUFRQyxHQUFHLENBQUNKLFNBQVNOLElBQUk7UUFDM0IsRUFBRSxPQUFPVyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVGLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXekIsc0VBQW1COzswQkFDL0IsOERBQUNFLHdEQUFHQTtnQkFBQ3dCLE9BQU07Z0JBQUlDLEtBQUk7Z0JBQWtCQyxNQUFLOzs7Ozs7MEJBQzFDLDhEQUFDQztnQkFBTUMsTUFBSztnQkFDUkMsT0FBT2hCO2dCQUNQaUIsVUFBVSxDQUFDQyxRQUFVakIsY0FBY2lCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSztnQkFDckRJLGFBQVk7Ozs7OzswQkFDaEIsOERBQUNYO2dCQUFJQyxXQUFXekIsOERBQVc7Z0JBQUVxQyxTQUFTcEI7O2tDQUNsQyw4REFBQ3FCO2tDQUFFOzs7Ozs7a0NBR0gsOERBQUNkO3dCQUFJQyxXQUFXekIsK0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QztHQXZDd0JLOztRQUNKSix1REFBVUE7OztLQUROSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BcnQvQ29tbWVudElucHV0LnRzeD9hNTM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgSVBUIGZyb20gXCIuLi9JbWdQbHVzVGV4dC9JUFRcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBmaWxlUGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL0FydHMvXCI7XHJcbmNvbnN0IEF2YXRhclBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9BdmF0YXJzL1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRJbnB1dCh7QXJ0V29ya0lkfTp7QXJ0V29ya0lkOm51bWJlcn0pIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHtzZXNzaW9uLmRhdGE/LnVzZXIudG9rZW59YDtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2Vzc2lvbl0pO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gY29uc3QgW3NlcnZlclJlc3BvbnNlLCBzZXRTZXJ2ZXJSZXNwb25zZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9BZGRDb21tZW50P0FydFdvcmtJZD0ke0FydFdvcmtJZH1gLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29tbWVudDogaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRJbnB1dH0+XHJcbiAgICAgICAgICAgIDxJUFQgdGl0bGU9JyAnIGltZz1cIi9saWtlc1doaXRlLnBuZ1wiIHNpemU9J1MnPjwvSVBUPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgY29tbWVudFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VuZH0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInN0eWxlcyIsInVzZVNlc3Npb24iLCJJUFQiLCJmaWxlUGF0aCIsIkF2YXRhclBhdGgiLCJDb21tZW50SW5wdXQiLCJBcnRXb3JrSWQiLCJzZXNzaW9uIiwic3RhdHVzIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGF0YSIsInVzZXIiLCJ0b2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlU3VibWl0IiwicmVzcG9uc2UiLCJwb3N0IiwiY29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaW1nIiwic2l6ZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiU2VuZCIsIm9uQ2xpY2siLCJwIiwiYXJyb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Art/CommentInput.tsx\n"));

/***/ })

});