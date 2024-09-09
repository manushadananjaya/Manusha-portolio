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

/***/ "(app-pages-browser)/./components/ProjectPage.tsx":
/*!************************************!*\
  !*** ./components/ProjectPage.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Tab!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/tabs/tabs.js\");\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full py-20 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl mx-auto text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Group, {\n                selectedIndex: selectedIndex,\n                onChange: setSelectedIndex,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.List, {\n                        className: \"flex flex-wrap justify-center space-x-1 rounded-xl bg-blue-900/20 p-1 mt-6\",\n                        children: [\n                            \"Web Projects\",\n                            \"Mobile Applications\",\n                            \"Desktop Applications\",\n                            \"Microcontroller Projects\"\n                        ].map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                className: (param)=>{\n                                    let { selected } = param;\n                                    return \"w-full sm:w-auto py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg \".concat(selected ? \"bg-white shadow\" : \"text-blue-100 hover:bg-white/[0.12] hover:text-white\");\n                                },\n                                children: tab\n                            }, index, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panels, {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {\n                                className: \"space-y-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                    items: renderCards(webProjects)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {\n                                className: \"space-y-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                    items: renderCards(mobileApplications)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {\n                                className: \"space-y-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                    items: renderCards(desktopApplications)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Tab_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {\n                                className: \"space-y-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                                    items: renderCards(microcontrollerProjects)\n                                }, void 0, false, {\n                                    fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Array.from({\n            length: 3\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold text-neutral-700 dark:text-neutral-200\",\n                                children: \"The first rule of Apple club is that you boast about Apple club.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            \"Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"https://assets.aceternity.com/macbook.png\",\n                        alt: \"Macbook mockup from Aceternity UI\",\n                        height: 500,\n                        width: 500,\n                        className: \"md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, \"dummy-content\" + index, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false);\n_c1 = DummyContent;\nconst webProjects = [];\nconst mobileApplications = [];\nconst desktopApplications = [];\nconst microcontrollerProjects = [\n    {\n        category: \"Microcontroller\",\n        title: \"Arduino Smart Home System\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 105,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Microcontroller\",\n        title: \"ESP32 IoT Project\",\n        src: \"https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 111,\n            columnNumber: 14\n        }, undefined)\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBQ0E7QUFDOEI7QUFFdEUsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkQsTUFBTU8sY0FBYyxDQUFDQyxXQUNuQkEsU0FBU0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsQiw4REFBQ1IscUVBQUlBO2dCQUFnQk8sTUFBTUE7Z0JBQU1DLE9BQU9BO2VBQTdCRCxLQUFLRSxHQUFHOzs7OztJQUd2QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwRzs7Ozs7OzBCQUl4SCw4REFBQ2IsNEVBQUdBLENBQUNlLEtBQUs7Z0JBQUNYLGVBQWVBO2dCQUFlWSxVQUFVWDs7a0NBQ2pELDhEQUFDTCw0RUFBR0EsQ0FBQ2lCLElBQUk7d0JBQUNKLFdBQVU7a0NBQ2pCOzRCQUNDOzRCQUNBOzRCQUNBOzRCQUNBO3lCQUNELENBQUNMLEdBQUcsQ0FBQyxDQUFDVSxLQUFLUixzQkFDViw4REFBQ1YsNEVBQUdBO2dDQUVGYSxXQUFXO3dDQUFDLEVBQUVNLFFBQVEsRUFBRTsyQ0FDdEIsa0ZBSUMsT0FIQ0EsV0FDSSxvQkFDQTs7MENBSVBEOytCQVRJUjs7Ozs7Ozs7OztrQ0FjWCw4REFBQ1YsNEVBQUdBLENBQUNvQixNQUFNO3dCQUFDUCxXQUFVOzswQ0FDcEIsOERBQUNiLDRFQUFHQSxDQUFDcUIsS0FBSztnQ0FBQ1IsV0FBVTswQ0FDbkIsNEVBQUNaLHlFQUFRQTtvQ0FBQ3FCLE9BQU9oQixZQUFZaUI7Ozs7Ozs7Ozs7OzBDQUUvQiw4REFBQ3ZCLDRFQUFHQSxDQUFDcUIsS0FBSztnQ0FBQ1IsV0FBVTswQ0FDbkIsNEVBQUNaLHlFQUFRQTtvQ0FBQ3FCLE9BQU9oQixZQUFZa0I7Ozs7Ozs7Ozs7OzBDQUUvQiw4REFBQ3hCLDRFQUFHQSxDQUFDcUIsS0FBSztnQ0FBQ1IsV0FBVTswQ0FDbkIsNEVBQUNaLHlFQUFRQTtvQ0FBQ3FCLE9BQU9oQixZQUFZbUI7Ozs7Ozs7Ozs7OzBDQUUvQiw4REFBQ3pCLDRFQUFHQSxDQUFDcUIsS0FBSztnQ0FBQ1IsV0FBVTswQ0FDbkIsNEVBQUNaLHlFQUFRQTtvQ0FBQ3FCLE9BQU9oQixZQUFZb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBdERTdkI7S0FBQUE7QUF3RFQsTUFBTXdCLGVBQWUsa0JBQ25CO2tCQUNHQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUTtRQUFFLEdBQUd0QixHQUFHLENBQUMsQ0FBQ3VCLEdBQUdyQixzQkFDakMsOERBQUNFO2dCQUVDQyxXQUFVOztrQ0FFViw4REFBQ21CO3dCQUFFbkIsV0FBVTs7MENBQ1gsOERBQUNvQjtnQ0FBS3BCLFdBQVU7MENBQW1EOzs7Ozs7NEJBRTNEOzRCQUFJOzs7Ozs7O2tDQUtkLDhEQUFDaEIsa0RBQUtBO3dCQUNKYyxLQUFJO3dCQUNKdUIsS0FBSTt3QkFDSkMsUUFBUTt3QkFDUkMsT0FBTzt3QkFDUHZCLFdBQVU7d0JBQ1Z3QixRQUFROzs7Ozs7O2VBakJMLGtCQUFrQjNCOzs7Ozs7TUFKekJpQjtBQTRCTixNQUFNSixjQUFjLEVBRW5CO0FBQ0QsTUFBTUMscUJBQXFCLEVBRTFCO0FBQ0QsTUFBTUMsc0JBQXNCLEVBRTNCO0FBQ0QsTUFBTUMsMEJBQTBCO0lBQzlCO1FBQ0VZLFVBQVU7UUFDVkMsT0FBTztRQUNQNUIsS0FBSztRQUNMNkIsdUJBQVMsOERBQUNiOzs7OztJQUNaO0lBQ0E7UUFDRVcsVUFBVTtRQUNWQyxPQUFPO1FBQ1A1QixLQUFLO1FBQ0w2Qix1QkFBUyw4REFBQ2I7Ozs7O0lBQ1o7Q0FFRDtBQUVELCtEQUFleEIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLnRzeD9hNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FwcGxlLWNhcmRzLWNhcm91c2VsXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGVQYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByZW5kZXJDYXJkcyA9IChwcm9qZWN0cykgPT5cbiAgICBwcm9qZWN0cy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2NhcmQuc3JjfSBjYXJkPXtjYXJkfSBpbmRleD17aW5kZXh9IC8+XG4gICAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMjAgcHgtNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtMjAwIGRhcms6dGV4dC13aGl0ZSBmb250LXNhbnNcIj5cbiAgICAgICAgR2V0IHRvIGtub3cgYWJvdXQgbXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIDxUYWIuR3JvdXAgc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJbmRleH0gb25DaGFuZ2U9e3NldFNlbGVjdGVkSW5kZXh9PlxuICAgICAgICA8VGFiLkxpc3QgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgc3BhY2UteC0xIHJvdW5kZWQteGwgYmctYmx1ZS05MDAvMjAgcC0xIG10LTZcIj5cbiAgICAgICAgICB7W1xuICAgICAgICAgICAgXCJXZWIgUHJvamVjdHNcIixcbiAgICAgICAgICAgIFwiTW9iaWxlIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgICAgXCJEZXNrdG9wIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgICAgICAgXCJNaWNyb2NvbnRyb2xsZXIgUHJvamVjdHNcIixcbiAgICAgICAgICBdLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IHNlbGVjdGVkIH0pID0+XG4gICAgICAgICAgICAgICAgYHctZnVsbCBzbTp3LWF1dG8gcHktMi41IHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYmx1ZS03MDAgcm91bmRlZC1sZyAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLXdoaXRlIHNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLXdoaXRlL1swLjEyXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0YWJ9XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWIuTGlzdD5cblxuICAgICAgICA8VGFiLlBhbmVscyBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgPFRhYi5QYW5lbCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMod2ViUHJvamVjdHMpfSAvPlxuICAgICAgICAgIDwvVGFiLlBhbmVsPlxuICAgICAgICAgIDxUYWIuUGFuZWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKG1vYmlsZUFwcGxpY2F0aW9ucyl9IC8+XG4gICAgICAgICAgPC9UYWIuUGFuZWw+XG4gICAgICAgICAgPFRhYi5QYW5lbCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMoZGVza3RvcEFwcGxpY2F0aW9ucyl9IC8+XG4gICAgICAgICAgPC9UYWIuUGFuZWw+XG4gICAgICAgICAgPFRhYi5QYW5lbCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMobWljcm9jb250cm9sbGVyUHJvamVjdHMpfSAvPlxuICAgICAgICAgIDwvVGFiLlBhbmVsPlxuICAgICAgICA8L1RhYi5QYW5lbHM+XG4gICAgICA8L1RhYi5Hcm91cD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgRHVtbXlDb250ZW50ID0gKCkgPT4gKFxuICA8PlxuICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0pLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtcImR1bW15LWNvbnRlbnRcIiArIGluZGV4fVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0Y1RjVGN10gZGFyazpiZy1uZXV0cmFsLTgwMCBwLTggbWQ6cC0xNCByb3VuZGVkLTN4bCBtYi00XCJcbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTYwMCBkYXJrOnRleHQtbmV1dHJhbC00MDAgdGV4dC1iYXNlIG1kOnRleHQtMnhsIGZvbnQtc2FucyBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgVGhlIGZpcnN0IHJ1bGUgb2YgQXBwbGUgY2x1YiBpcyB0aGF0IHlvdSBib2FzdCBhYm91dCBBcHBsZSBjbHViLlxuICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgS2VlcCBhIGpvdXJuYWwsIHF1aWNrbHkgam90IGRvd24gYSBncm9jZXJ5IGxpc3QsIGFuZCB0YWtlIGFtYXppbmdcbiAgICAgICAgICBjbGFzcyBub3Rlcy4gV2FudCB0byBjb252ZXJ0IHRob3NlIG5vdGVzIHRvIHRleHQ/IE5vIHByb2JsZW0uXG4gICAgICAgICAgTGFuZ290aXlhIGplZXR1IGthIG1hcmEgaHVhIHlhYXIgaXMgcmVhZHkgdG8gY2FwdHVyZSBldmVyeSB0aG91Z2h0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLmFjZXRlcm5pdHkuY29tL21hY2Jvb2sucG5nXCJcbiAgICAgICAgICBhbHQ9XCJNYWNib29rIG1vY2t1cCBmcm9tIEFjZXRlcm5pdHkgVUlcIlxuICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbWQ6aC0xLzIgaC1mdWxsIHctZnVsbCBteC1hdXRvIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gIDwvPlxuKTtcblxuY29uc3Qgd2ViUHJvamVjdHMgPSBbXG4gIC8qIFdlYiBwcm9qZWN0cyBkYXRhIGhlcmUgKi9cbl07XG5jb25zdCBtb2JpbGVBcHBsaWNhdGlvbnMgPSBbXG4gIC8qIE1vYmlsZSBhcHBsaWNhdGlvbnMgZGF0YSBoZXJlICovXG5dO1xuY29uc3QgZGVza3RvcEFwcGxpY2F0aW9ucyA9IFtcbiAgLyogRGVza3RvcCBhcHBsaWNhdGlvbnMgZGF0YSBoZXJlICovXG5dO1xuY29uc3QgbWljcm9jb250cm9sbGVyUHJvamVjdHMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJNaWNyb2NvbnRyb2xsZXJcIixcbiAgICB0aXRsZTogXCJBcmR1aW5vIFNtYXJ0IEhvbWUgU3lzdGVtXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiTWljcm9jb250cm9sbGVyXCIsXG4gICAgdGl0bGU6IFwiRVNQMzIgSW9UIFByb2plY3RcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzE1NTQ2OTQxMjgtYzRjNjY2NWY1OWMyP3E9ODAmdz0zMzg3JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIC8vIEFkZCBtb3JlIG1pY3JvY29udHJvbGxlciBwcm9qZWN0cyBoZXJlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJUYWIiLCJDYXJvdXNlbCIsIkNhcmQiLCJQcm9maWxlUGFnZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsInNyYyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiR3JvdXAiLCJvbkNoYW5nZSIsIkxpc3QiLCJ0YWIiLCJzZWxlY3RlZCIsIlBhbmVscyIsIlBhbmVsIiwiaXRlbXMiLCJ3ZWJQcm9qZWN0cyIsIm1vYmlsZUFwcGxpY2F0aW9ucyIsImRlc2t0b3BBcHBsaWNhdGlvbnMiLCJtaWNyb2NvbnRyb2xsZXJQcm9qZWN0cyIsIkR1bW15Q29udGVudCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJwIiwic3BhbiIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicHJpb3JpdHkiLCJjYXRlZ29yeSIsInRpdGxlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});