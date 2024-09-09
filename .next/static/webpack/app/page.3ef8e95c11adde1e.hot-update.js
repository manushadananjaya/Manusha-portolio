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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this));\n    const tabs = [\n        {\n            title: \"Web Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(webProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Mobile Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(mobileApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Desktop Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(desktopApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Micro-controller Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(microControllerProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl items-center mx-auto text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-start overflow-auto no-visible-scrollbar max-w-full w-full space-x-4 mt-8\",\n                children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSelectedIndex(idx),\n                        className: \"relative px-4 py-2 rounded-full transition-colors duration-300 \".concat(selectedIndex === idx ? \"bg-gray-200 dark:bg-zinc-800 text-black dark:text-white\" : \"bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white\"),\n                        children: [\n                            selectedIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.7\n                                },\n                                className: \"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"mt-8\",\n                children: tabs[selectedIndex].content\n            }, selectedIndex, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Array.from({\n            length: 3\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold text-neutral-700 dark:text-neutral-200\",\n                                children: \"The first rule of Apple club is that you boast about Apple club.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            \"Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"https://assets.aceternity.com/macbook.png\",\n                        alt: \"Macbook mockup from Aceternity UI\",\n                        height: 500,\n                        width: 500,\n                        className: \"md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, \"dummy-content\" + index, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c1 = DummyContent;\nconst webProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 116,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst mobileApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 126,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst desktopApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 136,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst microControllerProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 146,\n            columnNumber: 14\n        }, undefined)\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBRThCO0FBQy9CO0FBRXZDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1PLGNBQWMsQ0FBQ0MsV0FDbkJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNULHFFQUFJQTtnQkFBZ0JRLE1BQU1BO2dCQUFNQyxPQUFPQTtlQUE3QkQsS0FBS0UsR0FBRzs7Ozs7SUFJdkIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVU7Ozs7OztRQUN4QztRQUNBO1lBQ0VILE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVc7Ozs7OztRQUN4QztRQUNBO1lBQ0VKLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVk7Ozs7OztRQUN4QztRQUNBO1lBQ0VMLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWWE7Ozs7OztRQUN4QztLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBdUg7Ozs7OzswQkFJckksOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVCxLQUFLSixHQUFHLENBQUMsQ0FBQ2UsS0FBS0Msb0JBQ2QsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1yQixpQkFBaUJtQjt3QkFDaENILFdBQVcsa0VBSVYsT0FIQ2pCLGtCQUFrQm9CLE1BQ2QsNERBQ0E7OzRCQUdMcEIsa0JBQWtCb0IscUJBQ2pCLDhEQUFDdEIsaURBQU1BLENBQUNrQixHQUFHO2dDQUNUTyxVQUFTO2dDQUNUQyxZQUFZO29DQUFFQyxNQUFNO29DQUFVQyxRQUFRO29DQUFLQyxVQUFVO2dDQUFJO2dDQUN6RFYsV0FBVTs7Ozs7OzBDQUdkLDhEQUFDVztnQ0FBS1gsV0FBVTswQ0FDYkUsSUFBSVYsS0FBSzs7Ozs7Ozt1QkFoQlBVLElBQUlWLEtBQUs7Ozs7Ozs7Ozs7MEJBc0JwQiw4REFBQ1gsaURBQU1BLENBQUNrQixHQUFHO2dCQUVUYSxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFJO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLE1BQU07b0JBQUVILFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBSTtnQkFDNUJQLFlBQVk7b0JBQUVHLFVBQVU7Z0JBQUk7Z0JBQzVCVixXQUFVOzBCQUVUVCxJQUFJLENBQUNSLGNBQWMsQ0FBQ1UsT0FBTztlQVB2QlY7Ozs7Ozs7Ozs7O0FBV2I7R0F2RVNEO0tBQUFBO0FBeUVULE1BQU1tQyxlQUFlO0lBQ25CLHFCQUNFO2tCQUNHQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUTtRQUFFLEdBQUdqQyxHQUFHLENBQUMsQ0FBQ2tDLEdBQUdoQyxzQkFDakMsOERBQUNVO2dCQUVDQyxXQUFVOztrQ0FFViw4REFBQ3NCO3dCQUFFdEIsV0FBVTs7MENBQ1gsOERBQUNXO2dDQUFLWCxXQUFVOzBDQUFtRDs7Ozs7OzRCQUUzRDs0QkFBSTs7Ozs7OztrQ0FLZCw4REFBQ3hCLGtEQUFLQTt3QkFDSmMsS0FBSTt3QkFDSmlDLEtBQUk7d0JBQ0pDLFFBQVE7d0JBQ1JDLE9BQU87d0JBQ1B6QixXQUFVO3dCQUNWMEIsUUFBUTs7Ozs7OztlQWpCTCxrQkFBa0JyQzs7Ozs7O0FBdUJqQztNQTVCTTRCO0FBOEJOLE1BQU10QixjQUFjO0lBQ2xCO1FBQ0VnQyxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUVEO0FBRUQsTUFBTXJCLHFCQUFxQjtJQUN6QjtRQUNFK0IsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7Q0FFRDtBQUVELE1BQU1wQixzQkFBc0I7SUFDMUI7UUFDRThCLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ3dCOzs7OztJQUNaO0NBRUQ7QUFFRCxNQUFNbkIsMEJBQTBCO0lBQzlCO1FBQ0U2QixVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUVEO0FBRUQsK0RBQWVuQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4P2E2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgeyBDYXJvdXNlbCwgQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXBwbGUtY2FyZHMtY2Fyb3VzZWxcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGVQYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByZW5kZXJDYXJkcyA9IChwcm9qZWN0cykgPT5cbiAgICBwcm9qZWN0cy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2NhcmQuc3JjfSBjYXJkPXtjYXJkfSBpbmRleD17aW5kZXh9IC8+XG4gICAgKSk7XG5cblxuICBjb25zdCB0YWJzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIldlYiBQcm9qZWN0c1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyh3ZWJQcm9qZWN0cyl9IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTW9iaWxlIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyhtb2JpbGVBcHBsaWNhdGlvbnMpfSAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkRlc2t0b3AgQXBwbGljYXRpb25zXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKGRlc2t0b3BBcHBsaWNhdGlvbnMpfSAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1pY3JvLWNvbnRyb2xsZXIgUHJvamVjdHNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMobWljcm9Db250cm9sbGVyUHJvamVjdHMpfSAvPixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTIwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWF4LXctN3hsIGl0ZW1zLWNlbnRlciBteC1hdXRvIHRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtMjAwIGRhcms6dGV4dC13aGl0ZSBmb250LXNhbnNcIj5cbiAgICAgICAgR2V0IHRvIGtub3cgYWJvdXQgbXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBvdmVyZmxvdy1hdXRvIG5vLXZpc2libGUtc2Nyb2xsYmFyIG1heC13LWZ1bGwgdy1mdWxsIHNwYWNlLXgtNCBtdC04XCI+XG4gICAgICAgIHt0YWJzLm1hcCgodGFiLCBpZHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5kZXgoaWR4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGlkeFxuICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTIwMCBkYXJrOmJnLXppbmMtODAwIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlLTcwMCBkYXJrOnRleHQtYmx1ZS0xMDAgaG92ZXI6Ymctd2hpdGUvWzAuMTJdIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdGVkSW5kZXggPT09IGlkeCAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJjbGlja2VkYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIGJvdW5jZTogMC4zLCBkdXJhdGlvbjogMC43IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTIwMCBkYXJrOmJnLXppbmMtODAwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAge3RhYi50aXRsZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAga2V5PXtzZWxlY3RlZEluZGV4fVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDEwMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtMTAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJtdC04XCJcbiAgICAgID5cbiAgICAgICAge3RhYnNbc2VsZWN0ZWRJbmRleF0uY29udGVudH1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgRHVtbXlDb250ZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9KS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e1wiZHVtbXktY29udGVudFwiICsgaW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNGNUY1RjddIGRhcms6YmctbmV1dHJhbC04MDAgcC04IG1kOnAtMTQgcm91bmRlZC0zeGwgbWItNFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNjAwIGRhcms6dGV4dC1uZXV0cmFsLTQwMCB0ZXh0LWJhc2UgbWQ6dGV4dC0yeGwgZm9udC1zYW5zIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDBcIj5cbiAgICAgICAgICAgICAgVGhlIGZpcnN0IHJ1bGUgb2YgQXBwbGUgY2x1YiBpcyB0aGF0IHlvdSBib2FzdCBhYm91dCBBcHBsZSBjbHViLlxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIEtlZXAgYSBqb3VybmFsLCBxdWlja2x5IGpvdCBkb3duIGEgZ3JvY2VyeSBsaXN0LCBhbmQgdGFrZSBhbWF6aW5nXG4gICAgICAgICAgICBjbGFzcyBub3Rlcy4gV2FudCB0byBjb252ZXJ0IHRob3NlIG5vdGVzIHRvIHRleHQ/IE5vIHByb2JsZW0uXG4gICAgICAgICAgICBMYW5nb3RpeWEgamVldHUga2EgbWFyYSBodWEgeWFhciBpcyByZWFkeSB0byBjYXB0dXJlIGV2ZXJ5IHRob3VnaHQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hc3NldHMuYWNldGVybml0eS5jb20vbWFjYm9vay5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiTWFjYm9vayBtb2NrdXAgZnJvbSBBY2V0ZXJuaXR5IFVJXCJcbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnctMS8yIG1kOmgtMS8yIGgtZnVsbCB3LWZ1bGwgbXgtYXV0byBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCB3ZWJQcm9qZWN0cyA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICAvLyBBZGQgb3RoZXIgcHJvamVjdCBpdGVtcyBzaW1pbGFybHlcbl07XG5cbmNvbnN0IG1vYmlsZUFwcGxpY2F0aW9ucyA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICAvLyBBZGQgb3RoZXIgcHJvamVjdCBpdGVtcyBzaW1pbGFybHlcbl07XG5cbmNvbnN0IGRlc2t0b3BBcHBsaWNhdGlvbnMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAgLy8gQWRkIG90aGVyIHByb2plY3QgaXRlbXMgc2ltaWxhcmx5XG5dO1xuXG5jb25zdCBtaWNyb0NvbnRyb2xsZXJQcm9qZWN0cyA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICAvLyBBZGQgb3RoZXIgcHJvamVjdCBpdGVtcyBzaW1pbGFybHlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiQ2FyZCIsIm1vdGlvbiIsIlByb2ZpbGVQYWdlIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJyZW5kZXJDYXJkcyIsInByb2plY3RzIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic3JjIiwidGFicyIsInRpdGxlIiwiY29udGVudCIsIml0ZW1zIiwid2ViUHJvamVjdHMiLCJtb2JpbGVBcHBsaWNhdGlvbnMiLCJkZXNrdG9wQXBwbGljYXRpb25zIiwibWljcm9Db250cm9sbGVyUHJvamVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRhYiIsImlkeCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsYXlvdXRJZCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiYm91bmNlIiwiZHVyYXRpb24iLCJzcGFuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsImV4aXQiLCJEdW1teUNvbnRlbnQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicCIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicHJpb3JpdHkiLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});