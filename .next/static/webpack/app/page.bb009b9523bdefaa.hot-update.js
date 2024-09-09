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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this));\n    const tabs = [\n        {\n            title: \"Web Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(webProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Mobile Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(mobileApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Desktop Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(desktopApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Micro-controller Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(microControllerProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl items-center mx-auto text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items- justify-start overflow-auto no-visible-scrollbar max-w-full w-full space-x-4 mt-8\",\n                children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSelectedIndex(idx),\n                        className: \"relative px-4 py-2 rounded-full transition-colors duration-300 \".concat(selectedIndex === idx ? \"bg-gray-200 dark:bg-zinc-800 text-black dark:text-white\" : \"bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white\"),\n                        children: [\n                            selectedIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.7\n                                },\n                                className: \"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"mt-8\",\n                children: tabs[selectedIndex].content\n            }, selectedIndex, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Array.from({\n            length: 3\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold text-neutral-700 dark:text-neutral-200\",\n                                children: \"The first rule of Apple club is that you boast about Apple club.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            \"Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"https://assets.aceternity.com/macbook.png\",\n                        alt: \"Macbook mockup from Aceternity UI\",\n                        height: 500,\n                        width: 500,\n                        className: \"md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, \"dummy-content\" + index, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c1 = DummyContent;\nconst webProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 116,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 122,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 128,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 134,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst mobileApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 143,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 149,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst desktopApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 159,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 165,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst microControllerProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 174,\n            columnNumber: 14\n        }, undefined)\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBRThCO0FBQy9CO0FBRXZDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1PLGNBQWMsQ0FBQ0MsV0FDbkJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNULHFFQUFJQTtnQkFBZ0JRLE1BQU1BO2dCQUFNQyxPQUFPQTtlQUE3QkQsS0FBS0UsR0FBRzs7Ozs7SUFJdkIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVU7Ozs7OztRQUN4QztRQUNBO1lBQ0VILE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVc7Ozs7OztRQUN4QztRQUNBO1lBQ0VKLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWVk7Ozs7OztRQUN4QztRQUNBO1lBQ0VMLE9BQU87WUFDUEMsdUJBQVMsOERBQUNkLHlFQUFRQTtnQkFBQ2UsT0FBT1QsWUFBWWE7Ozs7OztRQUN4QztLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBdUg7Ozs7OzswQkFJckksOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVCxLQUFLSixHQUFHLENBQUMsQ0FBQ2UsS0FBS0Msb0JBQ2QsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1yQixpQkFBaUJtQjt3QkFDaENILFdBQVcsa0VBSVYsT0FIQ2pCLGtCQUFrQm9CLE1BQ2QsNERBQ0E7OzRCQUdMcEIsa0JBQWtCb0IscUJBQ2pCLDhEQUFDdEIsaURBQU1BLENBQUNrQixHQUFHO2dDQUNUTyxVQUFTO2dDQUNUQyxZQUFZO29DQUFFQyxNQUFNO29DQUFVQyxRQUFRO29DQUFLQyxVQUFVO2dDQUFJO2dDQUN6RFYsV0FBVTs7Ozs7OzBDQUdkLDhEQUFDVztnQ0FBS1gsV0FBVTswQ0FDYkUsSUFBSVYsS0FBSzs7Ozs7Ozt1QkFoQlBVLElBQUlWLEtBQUs7Ozs7Ozs7Ozs7MEJBc0JwQiw4REFBQ1gsaURBQU1BLENBQUNrQixHQUFHO2dCQUVUYSxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFJO2dCQUM5QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLE1BQU07b0JBQUVILFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBSTtnQkFDNUJQLFlBQVk7b0JBQUVHLFVBQVU7Z0JBQUk7Z0JBQzVCVixXQUFVOzBCQUVUVCxJQUFJLENBQUNSLGNBQWMsQ0FBQ1UsT0FBTztlQVB2QlY7Ozs7Ozs7Ozs7O0FBV2I7R0F2RVNEO0tBQUFBO0FBeUVULE1BQU1tQyxlQUFlO0lBQ25CLHFCQUNFO2tCQUNHQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUTtRQUFFLEdBQUdqQyxHQUFHLENBQUMsQ0FBQ2tDLEdBQUdoQyxzQkFDakMsOERBQUNVO2dCQUVDQyxXQUFVOztrQ0FFViw4REFBQ3NCO3dCQUFFdEIsV0FBVTs7MENBQ1gsOERBQUNXO2dDQUFLWCxXQUFVOzBDQUFtRDs7Ozs7OzRCQUUzRDs0QkFBSTs7Ozs7OztrQ0FLZCw4REFBQ3hCLGtEQUFLQTt3QkFDSmMsS0FBSTt3QkFDSmlDLEtBQUk7d0JBQ0pDLFFBQVE7d0JBQ1JDLE9BQU87d0JBQ1B6QixXQUFVO3dCQUNWMEIsUUFBUTs7Ozs7OztlQWpCTCxrQkFBa0JyQzs7Ozs7O0FBdUJqQztNQTVCTTRCO0FBOEJOLE1BQU10QixjQUFjO0lBQ2xCO1FBQ0VnQyxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtJQUNBO1FBQ0VVLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ3dCOzs7OztJQUNaO0lBQ0E7UUFDRVUsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUNEO0FBRUQsTUFBTXJCLHFCQUFxQjtJQUN6QjtRQUNFK0IsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUVEO0FBRUQsTUFBTXBCLHNCQUFzQjtJQUMxQjtRQUNFOEIsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7SUFDQTtRQUNFVSxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUNEO0FBRUQsTUFBTW5CLDBCQUEwQjtJQUM5QjtRQUNFNkIsVUFBVTtRQUNWbkMsT0FBTztRQUNQRixLQUFLO1FBQ0xHLHVCQUFTLDhEQUFDd0I7Ozs7O0lBQ1o7Q0FFRDtBQUVELCtEQUFlbkMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLnRzeD9hNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FwcGxlLWNhcmRzLWNhcm91c2VsXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAocHJvamVjdHMpID0+XG4gICAgcHJvamVjdHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgPENhcmQga2V5PXtjYXJkLnNyY30gY2FyZD17Y2FyZH0gaW5kZXg9e2luZGV4fSAvPlxuICAgICkpO1xuXG5cbiAgY29uc3QgdGFicyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJXZWIgUHJvamVjdHNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMod2ViUHJvamVjdHMpfSAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1vYmlsZSBBcHBsaWNhdGlvbnNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMobW9iaWxlQXBwbGljYXRpb25zKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJEZXNrdG9wIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyhkZXNrdG9wQXBwbGljYXRpb25zKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNaWNyby1jb250cm9sbGVyIFByb2plY3RzXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKG1pY3JvQ29udHJvbGxlclByb2plY3RzKX0gLz4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBweS0yMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1heC13LTd4bCBpdGVtcy1jZW50ZXIgbXgtYXV0byB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTIwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1zYW5zXCI+XG4gICAgICAgIEdldCB0byBrbm93IGFib3V0IG15IFByb2plY3RzXG4gICAgICA8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtIGp1c3RpZnktc3RhcnQgb3ZlcmZsb3ctYXV0byBuby12aXNpYmxlLXNjcm9sbGJhciBtYXgtdy1mdWxsIHctZnVsbCBzcGFjZS14LTQgbXQtOFwiPlxuICAgICAgICB7dGFicy5tYXAoKHRhYiwgaWR4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXt0YWIudGl0bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEluZGV4KGlkeCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBpZHhcbiAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS0yMDAgZGFyazpiZy16aW5jLTgwMCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZS03MDAgZGFyazp0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLXdoaXRlL1swLjEyXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZEluZGV4ID09PSBpZHggJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGxheW91dElkPVwiY2xpY2tlZGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBib3VuY2U6IDAuMywgZHVyYXRpb246IDAuNyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JheS0yMDAgZGFyazpiZy16aW5jLTgwMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIHt0YWIudGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT17c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAxMDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogLTEwMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtOFwiXG4gICAgICA+XG4gICAgICAgIHt0YWJzW3NlbGVjdGVkSW5kZXhdLmNvbnRlbnR9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IER1bW15Q29udGVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDMgfSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtcImR1bW15LWNvbnRlbnRcIiArIGluZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRjVGNUY3XSBkYXJrOmJnLW5ldXRyYWwtODAwIHAtOCBtZDpwLTE0IHJvdW5kZWQtM3hsIG1iLTRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTYwMCBkYXJrOnRleHQtbmV1dHJhbC00MDAgdGV4dC1iYXNlIG1kOnRleHQtMnhsIGZvbnQtc2FucyBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbmV1dHJhbC03MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgIFRoZSBmaXJzdCBydWxlIG9mIEFwcGxlIGNsdWIgaXMgdGhhdCB5b3UgYm9hc3QgYWJvdXQgQXBwbGUgY2x1Yi5cbiAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBLZWVwIGEgam91cm5hbCwgcXVpY2tseSBqb3QgZG93biBhIGdyb2NlcnkgbGlzdCwgYW5kIHRha2UgYW1hemluZ1xuICAgICAgICAgICAgY2xhc3Mgbm90ZXMuIFdhbnQgdG8gY29udmVydCB0aG9zZSBub3RlcyB0byB0ZXh0PyBObyBwcm9ibGVtLlxuICAgICAgICAgICAgTGFuZ290aXlhIGplZXR1IGthIG1hcmEgaHVhIHlhYXIgaXMgcmVhZHkgdG8gY2FwdHVyZSBldmVyeSB0aG91Z2h0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLmFjZXRlcm5pdHkuY29tL21hY2Jvb2sucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIk1hY2Jvb2sgbW9ja3VwIGZyb20gQWNldGVybml0eSBVSVwiXG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDp3LTEvMiBtZDpoLTEvMiBoLWZ1bGwgdy1mdWxsIG14LWF1dG8gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3Qgd2ViUHJvamVjdHMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbl07XG5cbmNvbnN0IG1vYmlsZUFwcGxpY2F0aW9ucyA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG5cbl07XG5cbmNvbnN0IGRlc2t0b3BBcHBsaWNhdGlvbnMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuXTtcblxuY29uc3QgbWljcm9Db250cm9sbGVyUHJvamVjdHMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAgXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIkNhcmQiLCJtb3Rpb24iLCJQcm9maWxlUGFnZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsInNyYyIsInRhYnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJpdGVtcyIsIndlYlByb2plY3RzIiwibW9iaWxlQXBwbGljYXRpb25zIiwiZGVza3RvcEFwcGxpY2F0aW9ucyIsIm1pY3JvQ29udHJvbGxlclByb2plY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ0YWIiLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIiwibGF5b3V0SWQiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImJvdW5jZSIsImR1cmF0aW9uIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJleGl0IiwiRHVtbXlDb250ZW50IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsInAiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByaW9yaXR5IiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});