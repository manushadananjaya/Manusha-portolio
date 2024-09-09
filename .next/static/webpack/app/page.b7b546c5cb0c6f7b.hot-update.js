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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this));\n    const tabs = [\n        {\n            title: \"Web Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(webProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Mobile Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(mobileApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Desktop Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(desktopApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Micro-controller Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(microControllerProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl items-center mx-auto text-4xl sm:mx-1 text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center overflow-auto no-visible-scrollbar max-w-full w-full space-x-4 mt-8\",\n                children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSelectedIndex(idx),\n                        className: \"relative px-4 py-2 rounded-full transition-colors duration-300 \".concat(selectedIndex === idx ? \"bg-gray-200 dark:bg-blue-700 text-black dark:text-white\" : \"bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white\"),\n                        children: [\n                            selectedIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.7\n                                },\n                                className: \"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"mt-8\",\n                children: tabs[selectedIndex].content\n            }, selectedIndex, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Array.from({\n            length: 3\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold text-neutral-700 dark:text-neutral-200\",\n                                children: \"The first rule of Apple club is that you boast about Apple club.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            \"Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"https://assets.aceternity.com/macbook.png\",\n                        alt: \"Macbook mockup from Aceternity UI\",\n                        height: 500,\n                        width: 500,\n                        className: \"md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, \"dummy-content\" + index, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c1 = DummyContent;\nconst webProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 116,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 122,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 128,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 134,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst mobileApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 143,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 149,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst desktopApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 159,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 165,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst microControllerProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 174,\n            columnNumber: 14\n        }, undefined)\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBRThCO0FBQy9CO0FBRXZDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1PLGNBQWMsQ0FBQ0MsV0FDbkJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNULHFFQUFJQTtnQkFBZ0JRLE1BQU1BO2dCQUFNQyxPQUFPQTtlQUE3QkQsS0FBS0UsR0FBRzs7Ozs7SUFJdkIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVU7Ozs7OztRQUN4QztRQUNBO1lBQ0VILE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVc7Ozs7OztRQUN4QztRQUNBO1lBQ0VKLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVk7Ozs7OztRQUN4QztRQUNBO1lBQ0VMLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWWE7Ozs7OztRQUN4QztLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBK0g7Ozs7OzswQkFJN0ksOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVCxLQUFLSixHQUFHLENBQUMsQ0FBQ2UsS0FBS0Msb0JBQ2QsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1yQixpQkFBaUJtQjt3QkFDaENILFdBQVcsa0VBSVYsT0FIQ2pCLGtCQUFrQm9CLE1BQ2QsNERBQ0E7OzRCQUdMcEIsa0JBQWtCb0IscUJBQ2pCLDhEQUFDdEIsaURBQU1BLENBQUNrQixHQUFHO2dDQUNUTyxVQUFTO2dDQUNUQyxZQUFZO29DQUFFQyxNQUFNO29DQUFVQyxRQUFRO29DQUFLQyxVQUFVO2dDQUFJO2dDQUN6RFYsV0FBVTs7Ozs7OzBDQUdkLDhEQUFDVztnQ0FBS1gsV0FBVTswQ0FDYkUsSUFBSVYsS0FBSzs7Ozs7Ozt1QkFoQlBVLElBQUlWLEtBQUs7Ozs7Ozs7Ozs7MEJBc0JwQiw4REFBQ1gsaURBQU1BLENBQUNrQixHQUFHO2dCQUVUYSxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFJO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLE1BQU07b0JBQUVILFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBSTtnQkFDNUJQLFlBQVk7b0JBQUVHLFVBQVU7Z0JBQUk7Z0JBQzVCVixXQUFVOzBCQUVUVCxJQUFJLENBQUNSLGNBQWMsQ0FBQ1UsT0FBTztlQVB2QlY7Ozs7Ozs7Ozs7O0FBV2I7R0F2RVNEO0tBQUFBO0FBeUVULE1BQU1tQyxlQUFlO0lBQ25CLHFCQUNFO2tCQUNHQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUTtRQUFFLEdBQUdqQyxHQUFHLENBQUMsQ0FBQ2tDLEdBQUdoQyxzQkFDakMsOERBQUNVO2dCQUVDQyxXQUFVOztrQ0FFViw4REFBQ3NCO3dCQUFFdEIsV0FBVTs7MENBQ1gsOERBQUNXO2dDQUFLWCxXQUFVOzBDQUFtRDs7Ozs7OzRCQUUzRDs0QkFBSTs7Ozs7OztrQ0FLZCw4REFBQ3hCLGtEQUFLQTt3QkFDSmMsS0FBSTt3QkFDSmlDLEtBQUk7d0JBQ0pDLFFBQVE7d0JBQ1JDLE9BQU87d0JBQ1B6QixXQUFVO3dCQUNWMEIsUUFBUTs7Ozs7OztlQWpCTCxrQkFBa0JyQzs7Ozs7O0FBdUJqQztNQTVCTTRCO0FBOEJOLE1BQU10QixjQUFjO0lBQ2xCO1FBQ0VnQyxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtJQUNBO1FBQ0VVLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ3dCOzs7OztJQUNaO0lBQ0E7UUFDRVUsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUNEO0FBRUQsTUFBTXJCLHFCQUFxQjtJQUN6QjtRQUNFK0IsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUVEO0FBRUQsTUFBTXBCLHNCQUFzQjtJQUMxQjtRQUNFOEIsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUNEO0FBRUQsTUFBTW5CLDBCQUEwQjtJQUM5QjtRQUNFNkIsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7Q0FFRDtBQUVELCtEQUFlbkMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLnRzeD9hNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FwcGxlLWNhcmRzLWNhcm91c2VsXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAocHJvamVjdHM6IGFueVtdKSA9PlxuICAgIHByb2plY3RzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgIDxDYXJkIGtleT17Y2FyZC5zcmN9IGNhcmQ9e2NhcmR9IGluZGV4PXtpbmRleH0gLz5cbiAgICApKTtcblxuXG4gIGNvbnN0IHRhYnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiV2ViIFByb2plY3RzXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKHdlYlByb2plY3RzKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNb2JpbGUgQXBwbGljYXRpb25zXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKG1vYmlsZUFwcGxpY2F0aW9ucyl9IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRGVza3RvcCBBcHBsaWNhdGlvbnNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMoZGVza3RvcEFwcGxpY2F0aW9ucyl9IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWljcm8tY29udHJvbGxlciBQcm9qZWN0c1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyhtaWNyb0NvbnRyb2xsZXJQcm9qZWN0cyl9IC8+LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMjBcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYXgtdy03eGwgaXRlbXMtY2VudGVyIG14LWF1dG8gdGV4dC00eGwgc206bXgtMSB0ZXh0LWNlbnRlciBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTIwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1zYW5zXCI+XG4gICAgICAgIEdldCB0byBrbm93IGFib3V0IG15IFByb2plY3RzXG4gICAgICA8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWF1dG8gbm8tdmlzaWJsZS1zY3JvbGxiYXIgbWF4LXctZnVsbCB3LWZ1bGwgc3BhY2UteC00IG10LThcIj5cbiAgICAgICAge3RhYnMubWFwKCh0YWIsIGlkeCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17dGFiLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJbmRleChpZHgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gaWR4XG4gICAgICAgICAgICAgICAgPyBcImJnLWdyYXktMjAwIGRhcms6YmctYmx1ZS03MDAgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIDogXCJiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWUtNzAwIGRhcms6dGV4dC1ibHVlLTEwMCBob3ZlcjpiZy13aGl0ZS9bMC4xMl0gaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRJbmRleCA9PT0gaWR4ICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD1cImNsaWNrZWRidXR0b25cIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgYm91bmNlOiAwLjMsIGR1cmF0aW9uOiAwLjcgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktMjAwIGRhcms6YmctemluYy04MDAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7dGFiLnRpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBrZXk9e3NlbGVjdGVkSW5kZXh9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm10LThcIlxuICAgICAgPlxuICAgICAgICB7dGFic1tzZWxlY3RlZEluZGV4XS5jb250ZW50fVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBEdW1teUNvbnRlbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0pLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17XCJkdW1teS1jb250ZW50XCIgKyBpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0Y1RjVGN10gZGFyazpiZy1uZXV0cmFsLTgwMCBwLTggbWQ6cC0xNCByb3VuZGVkLTN4bCBtYi00XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC02MDAgZGFyazp0ZXh0LW5ldXRyYWwtNDAwIHRleHQtYmFzZSBtZDp0ZXh0LTJ4bCBmb250LXNhbnMgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgICBUaGUgZmlyc3QgcnVsZSBvZiBBcHBsZSBjbHViIGlzIHRoYXQgeW91IGJvYXN0IGFib3V0IEFwcGxlIGNsdWIuXG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgS2VlcCBhIGpvdXJuYWwsIHF1aWNrbHkgam90IGRvd24gYSBncm9jZXJ5IGxpc3QsIGFuZCB0YWtlIGFtYXppbmdcbiAgICAgICAgICAgIGNsYXNzIG5vdGVzLiBXYW50IHRvIGNvbnZlcnQgdGhvc2Ugbm90ZXMgdG8gdGV4dD8gTm8gcHJvYmxlbS5cbiAgICAgICAgICAgIExhbmdvdGl5YSBqZWV0dSBrYSBtYXJhIGh1YSB5YWFyIGlzIHJlYWR5IHRvIGNhcHR1cmUgZXZlcnkgdGhvdWdodC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Fzc2V0cy5hY2V0ZXJuaXR5LmNvbS9tYWNib29rLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJNYWNib29rIG1vY2t1cCBmcm9tIEFjZXRlcm5pdHkgVUlcIlxuICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbWQ6aC0xLzIgaC1mdWxsIHctZnVsbCBteC1hdXRvIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IHdlYlByb2plY3RzID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBtb2JpbGVBcHBsaWNhdGlvbnMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuXG5dO1xuXG5jb25zdCBkZXNrdG9wQXBwbGljYXRpb25zID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbl07XG5cbmNvbnN0IG1pY3JvQ29udHJvbGxlclByb2plY3RzID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWwiLCJDYXJkIiwibW90aW9uIiwiUHJvZmlsZVBhZ2UiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInJlbmRlckNhcmRzIiwicHJvamVjdHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJzcmMiLCJ0YWJzIiwidGl0bGUiLCJjb250ZW50IiwiaXRlbXMiLCJ3ZWJQcm9qZWN0cyIsIm1vYmlsZUFwcGxpY2F0aW9ucyIsImRlc2t0b3BBcHBsaWNhdGlvbnMiLCJtaWNyb0NvbnRyb2xsZXJQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFiIiwiaWR4IiwiYnV0dG9uIiwib25DbGljayIsImxheW91dElkIiwidHJhbnNpdGlvbiIsInR5cGUiLCJib3VuY2UiLCJkdXJhdGlvbiIsInNwYW4iLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwiZXhpdCIsIkR1bW15Q29udGVudCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJwIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmlvcml0eSIsImNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});