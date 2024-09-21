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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this));\n    const tabs = [\n        {\n            title: \"Web Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(webProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Mobile Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(mobileApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Desktop Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(desktopApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Micro-controller Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(microControllerProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl mx-auto text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-800 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-start sm:justify-center flex-wrap gap-4 mt-8 w-full overflow-auto no-visible-scrollbar\",\n                children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSelectedIndex(idx),\n                        className: \"relative px-4 py-2 rounded-full transition-colors duration-300 \".concat(selectedIndex === idx ? \"bg-gray-200 dark:bg-blue-700 text-black dark:text-white\" : \"bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white\"),\n                        children: [\n                            selectedIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.7\n                                },\n                                className: \"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-sm sm:text-base md:text-lg text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"mt-6 sm:mt-8\",\n                children: tabs[selectedIndex].content\n            }, selectedIndex, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white dark:bg-neutral-800 p-6 sm:p-8 md:p-10 rounded-3xl mb-6 shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold text-neutral-800 dark:text-neutral-100\",\n                        children: \"Voom.ai is a platform that helps you do more with AI.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    \"This individual project is a platform powered by GEMINI AI 1.5 Flash, featuring built-in AI templates that users can utilize or customize with their own.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 gap-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/projectPhotos/voom.png\",\n                    alt: \"project-photos\",\n                    height: 400,\n                    width: 400,\n                    className: \"h-auto w-full rounded-xl object-cover\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center gap-4 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"https://voom-zeta.vercel.app/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300\",\n                        children: \"Visit VOOM\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"https://github.com/manushadananjaya/voom\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300\",\n                        children: \"View Project on Github\"\n                    }, void 0, false, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = DummyContent;\nconst webProjects = [\n    {\n        category: \"Voom.ai\",\n        title: \"You can do more with AI.\",\n        src: \"/projectPhotos/voom.png\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 131,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Rise-up mora 2024\",\n        title: \"Cv collection and Interview management system\",\n        src: \"/projectPhotos/rise.png\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent2, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 137,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst mobileApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 146,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 152,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst desktopApplications = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 161,\n            columnNumber: 14\n        }, undefined)\n    },\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 167,\n            columnNumber: 14\n        }, undefined)\n    }\n];\nconst microControllerProjects = [\n    {\n        category: \"Artificial Intelligence\",\n        title: \"You can do more with AI.\",\n        src: \"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DummyContent, {}, void 0, false, {\n            fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n            lineNumber: 176,\n            columnNumber: 14\n        }, undefined)\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFDUztBQUU4QjtBQUMvQjtBQUNWO0FBRTdCLFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1RLGNBQWMsQ0FBQ0MsV0FDbkJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNWLHFFQUFJQTtnQkFBZ0JTLE1BQU1BO2dCQUFNQyxPQUFPQTtlQUE3QkQsS0FBS0UsR0FBRzs7Ozs7SUFHdkIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNmLHlFQUFRQTtnQkFBQ2dCLE9BQU9ULFlBQVlVOzs7Ozs7UUFDeEM7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLHVCQUFTLDhEQUFDZix5RUFBUUE7Z0JBQUNnQixPQUFPVCxZQUFZVzs7Ozs7O1FBQ3hDO1FBQ0E7WUFDRUosT0FBTztZQUNQQyx1QkFBUyw4REFBQ2YseUVBQVFBO2dCQUFDZ0IsT0FBT1QsWUFBWVk7Ozs7OztRQUN4QztRQUNBO1lBQ0VMLE9BQU87WUFDUEMsdUJBQVMsOERBQUNmLHlFQUFRQTtnQkFBQ2dCLE9BQU9ULFlBQVlhOzs7Ozs7UUFDeEM7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNIOzs7Ozs7MEJBSXBJLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlQsS0FBS0osR0FBRyxDQUFDLENBQUNlLEtBQUtDLG9CQUNkLDhEQUFDQzt3QkFFQ0MsU0FBUyxJQUFNckIsaUJBQWlCbUI7d0JBQ2hDSCxXQUFXLGtFQUlWLE9BSENqQixrQkFBa0JvQixNQUNkLDREQUNBOzs0QkFHTHBCLGtCQUFrQm9CLHFCQUNqQiw4REFBQ3ZCLGlEQUFNQSxDQUFDbUIsR0FBRztnQ0FDVE8sVUFBUztnQ0FDVEMsWUFBWTtvQ0FBRUMsTUFBTTtvQ0FBVUMsUUFBUTtvQ0FBS0MsVUFBVTtnQ0FBSTtnQ0FDekRWLFdBQVU7Ozs7OzswQ0FHZCw4REFBQ1c7Z0NBQUtYLFdBQVU7MENBQ2JFLElBQUlWLEtBQUs7Ozs7Ozs7dUJBaEJQVSxJQUFJVixLQUFLOzs7Ozs7Ozs7OzBCQXNCcEIsOERBQUNaLGlEQUFNQSxDQUFDbUIsR0FBRztnQkFFVGEsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRztnQkFBSTtnQkFDOUJDLFNBQVM7b0JBQUVGLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUU7Z0JBQzVCRSxNQUFNO29CQUFFSCxTQUFTO29CQUFHQyxHQUFHLENBQUM7Z0JBQUk7Z0JBQzVCUCxZQUFZO29CQUFFRyxVQUFVO2dCQUFJO2dCQUM1QlYsV0FBVTswQkFFVFQsSUFBSSxDQUFDUixjQUFjLENBQUNVLE9BQU87ZUFQdkJWOzs7Ozs7Ozs7OztBQVdiO0dBdEVTRDtLQUFBQTtBQXdFVCxNQUFNbUMsZUFBZTtJQUNuQixxQkFDRSw4REFBQ2xCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDa0I7Z0JBQUVsQixXQUFVOztrQ0FDWCw4REFBQ1c7d0JBQUtYLFdBQVU7a0NBQXVEOzs7Ozs7a0NBR3ZFLDhEQUFDbUI7Ozs7O29CQUFLOzs7Ozs7OzBCQUtSLDhEQUFDcEI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN6QixrREFBS0E7b0JBQ0plLEtBQUk7b0JBQ0o4QixLQUFJO29CQUNKQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQdEIsV0FBVTtvQkFDVnVCLFFBQVE7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDeEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbkIsaURBQUlBO3dCQUNIMkMsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSjFCLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ25CLGlEQUFJQTt3QkFDSDJDLE1BQUs7d0JBQ0xDLFFBQU87d0JBQ1BDLEtBQUk7d0JBQ0oxQixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtNQTNDTWlCO0FBNkNOLE1BQU10QixjQUFjO0lBQ2xCO1FBQ0VnQyxVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtJQUNBO1FBQ0VVLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ21DOzs7OztJQUNaO0NBQ0Q7QUFFRCxNQUFNaEMscUJBQXFCO0lBQ3pCO1FBQ0UrQixVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtJQUNBO1FBQ0VVLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ3dCOzs7OztJQUNaO0NBQ0Q7QUFFRCxNQUFNcEIsc0JBQXNCO0lBQzFCO1FBQ0U4QixVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtJQUNBO1FBQ0VVLFVBQVU7UUFDVm5DLE9BQU87UUFDUEYsS0FBSztRQUNMRyx1QkFBUyw4REFBQ3dCOzs7OztJQUNaO0NBQ0Q7QUFFRCxNQUFNbkIsMEJBQTBCO0lBQzlCO1FBQ0U2QixVQUFVO1FBQ1ZuQyxPQUFPO1FBQ1BGLEtBQUs7UUFDTEcsdUJBQVMsOERBQUN3Qjs7Ozs7SUFDWjtDQUNEO0FBRUQsK0RBQWVuQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4P2E2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWIgfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB7IENhcm91c2VsLCBDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hcHBsZS1jYXJkcy1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKHByb2plY3RzOiBhbnlbXSkgPT5cbiAgICBwcm9qZWN0cy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCBrZXk9e2NhcmQuc3JjfSBjYXJkPXtjYXJkfSBpbmRleD17aW5kZXh9IC8+XG4gICAgKSk7XG5cbiAgY29uc3QgdGFicyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJXZWIgQXBwbGljYXRpb25zXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKHdlYlByb2plY3RzKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNb2JpbGUgQXBwbGljYXRpb25zXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKG1vYmlsZUFwcGxpY2F0aW9ucyl9IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRGVza3RvcCBBcHBsaWNhdGlvbnNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMoZGVza3RvcEFwcGxpY2F0aW9ucyl9IC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWljcm8tY29udHJvbGxlciBQcm9qZWN0c1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyhtaWNyb0NvbnRyb2xsZXJQcm9qZWN0cyl9IC8+LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHNtOnB4LTYgbWQ6cHgtOCBweS0xMCBzbTpweS0xNiBtZDpweS0yMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHRleHQtM3hsIHNtOnRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LW5ldXRyYWwtODAwIGRhcms6dGV4dC13aGl0ZSBmb250LXNhbnNcIj5cbiAgICAgICAgR2V0IHRvIGtub3cgYWJvdXQgbXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IHNtOmp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtNCBtdC04IHctZnVsbCBvdmVyZmxvdy1hdXRvIG5vLXZpc2libGUtc2Nyb2xsYmFyXCI+XG4gICAgICAgIHt0YWJzLm1hcCgodGFiLCBpZHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5kZXgoaWR4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPT09IGlkeFxuICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTIwMCBkYXJrOmJnLWJsdWUtNzAwIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlLTcwMCBkYXJrOnRleHQtYmx1ZS0xMDAgaG92ZXI6Ymctd2hpdGUvWzAuMTJdIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdGVkSW5kZXggPT09IGlkeCAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJjbGlja2VkYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIGJvdW5jZTogMC4zLCBkdXJhdGlvbjogMC43IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTIwMCBkYXJrOmJnLXppbmMtODAwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7dGFiLnRpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBrZXk9e3NlbGVjdGVkSW5kZXh9XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTYgc206bXQtOFwiXG4gICAgICA+XG4gICAgICAgIHt0YWJzW3NlbGVjdGVkSW5kZXhdLmNvbnRlbnR9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IER1bW15Q29udGVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctbmV1dHJhbC04MDAgcC02IHNtOnAtOCBtZDpwLTEwIHJvdW5kZWQtM3hsIG1iLTYgc2hhZG93LW1kXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTMwMCB0ZXh0LWJhc2Ugc206dGV4dC1sZyBtZDp0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCBmb250LXNhbnMgbWF4LXctM3hsIG14LWF1dG8gbWItNlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC04MDAgZGFyazp0ZXh0LW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgVm9vbS5haSBpcyBhIHBsYXRmb3JtIHRoYXQgaGVscHMgeW91IGRvIG1vcmUgd2l0aCBBSS5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgVGhpcyBpbmRpdmlkdWFsIHByb2plY3QgaXMgYSBwbGF0Zm9ybSBwb3dlcmVkIGJ5IEdFTUlOSSBBSSAxLjUgRmxhc2gsXG4gICAgICAgIGZlYXR1cmluZyBidWlsdC1pbiBBSSB0ZW1wbGF0ZXMgdGhhdCB1c2VycyBjYW4gdXRpbGl6ZSBvciBjdXN0b21pemUgd2l0aFxuICAgICAgICB0aGVpciBvd24uXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL3Byb2plY3RQaG90b3Mvdm9vbS5wbmdcIlxuICAgICAgICAgIGFsdD1cInByb2plY3QtcGhvdG9zXCJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgcm91bmRlZC14bCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBBZGQgbW9yZSBpbWFnZXMgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC02XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdm9vbS16ZXRhLnZlcmNlbC5hcHAvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXNpdCBWT09NXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hbnVzaGFkYW5hbmpheWEvdm9vbVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgVmlldyBQcm9qZWN0IG9uIEdpdGh1YlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHdlYlByb2plY3RzID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiVm9vbS5haVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCIvcHJvamVjdFBob3Rvcy92b29tLnBuZ1wiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJSaXNlLXVwIG1vcmEgMjAyNFwiLFxuICAgIHRpdGxlOiBcIkN2IGNvbGxlY3Rpb24gYW5kIEludGVydmlldyBtYW5hZ2VtZW50IHN5c3RlbVwiLFxuICAgIHNyYzogXCIvcHJvamVjdFBob3Rvcy9yaXNlLnBuZ1wiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQyIC8+LFxuICB9LFxuXTtcblxuY29uc3QgbW9iaWxlQXBwbGljYXRpb25zID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2VcIixcbiAgICB0aXRsZTogXCJZb3UgY2FuIGRvIG1vcmUgd2l0aCBBSS5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM1MDg1MTIyNTUtODZhYjQyYThlNjIwP3E9ODAmdz0zNTU2JmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRFwiLFxuICAgIGNvbnRlbnQ6IDxEdW1teUNvbnRlbnQgLz4sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbl07XG5cbmNvbnN0IGRlc2t0b3BBcHBsaWNhdGlvbnMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXG4gICAgdGl0bGU6IFwiWW91IGNhbiBkbyBtb3JlIHdpdGggQUkuXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNTA4NTEyMjU1LTg2YWI0MmE4ZTYyMD9xPTgwJnc9MzU1NiZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBjb250ZW50OiA8RHVtbXlDb250ZW50IC8+LFxuICB9LFxuXTtcblxuY29uc3QgbWljcm9Db250cm9sbGVyUHJvamVjdHMgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxuICAgIHRpdGxlOiBcIllvdSBjYW4gZG8gbW9yZSB3aXRoIEFJLlwiLFxuICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MzUwODUxMjI1NS04NmFiNDJhOGU2MjA/cT04MCZ3PTM1NTYmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgY29udGVudDogPER1bW15Q29udGVudCAvPixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiQ2FyZCIsIm1vdGlvbiIsIkxpbmsiLCJQcm9maWxlUGFnZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsInNyYyIsInRhYnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJpdGVtcyIsIndlYlByb2plY3RzIiwibW9iaWxlQXBwbGljYXRpb25zIiwiZGVza3RvcEFwcGxpY2F0aW9ucyIsIm1pY3JvQ29udHJvbGxlclByb2plY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ0YWIiLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIiwibGF5b3V0SWQiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImJvdW5jZSIsImR1cmF0aW9uIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJleGl0IiwiRHVtbXlDb250ZW50IiwicCIsImJyIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmlvcml0eSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJjYXRlZ29yeSIsIkR1bW15Q29udGVudDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});