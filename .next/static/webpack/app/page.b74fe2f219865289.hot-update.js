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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/apple-cards-carousel */ \"(app-pages-browser)/./components/ui/apple-cards-carousel.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderCards = (projects)=>projects.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                card: card,\n                index: index\n            }, card.src, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this));\n    const tabs = [\n        {\n            title: \"Web Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(webProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Mobile Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(mobileApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Desktop Applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(desktopApplications)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Micro-controller Projects\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_apple_cards_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                items: renderCards(microControllerProjects)\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 32,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full px-4 h-full py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-7xl items-center mx-auto text-3xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans\",\n                children: \"Get to know about my Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center overflow-auto no-visible-scrollbar max-w-full w-full md:pl-40 mt-8\",\n                children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSelectedIndex(idx),\n                        className: \"relative px-2 py-2 md:px-4 md:py-2 rounded-full transition-colors duration-300 \".concat(selectedIndex === idx ? \"bg-gray-200 dark:bg-blue-700 text-black dark:text-white\" : \"bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white\", \" text-sm md:text-base\"),\n                        children: [\n                            selectedIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.7\n                                },\n                                className: \"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    x: 100\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                exit: {\n                    opacity: 0,\n                    x: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"mt-8\",\n                children: tabs[selectedIndex].content\n            }, selectedIndex, false, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfilePage, \"G8fEPHHi9+P2oI7WxiQDc3s4+J4=\");\n_c = ProfilePage;\nconst DummyContent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Array.from({\n            length: 1\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white dark:bg-neutral-800 p-4 md:p-10 rounded-3xl mb-6 shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-neutral-700 dark:text-neutral-300 text-base md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-semibold text-neutral-800 dark:text-neutral-100\",\n                                children: \"Voom.ai is a platform that helps you do more with AI.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined),\n                            \"This individual project is a platform powered by GEMINI AI 1.5 Flash, featuring built-in AI templates that users can utilize or customize with their own. It includes Clerk authentication and a built-in text editor, allowing users to easily edit AI-generated content directly on the platform.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-4 md:grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/projectPhotos/voom.png\",\n                                alt: \"project-photos\",\n                                height: 300,\n                                width: 300,\n                                className: \"h-auto w-full rounded-xl object-cover\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/projectPhotos/voom2.png\",\n                                alt: \"project-photos\",\n                                height: 300,\n                                width: 300,\n                                className: \"h-auto w-full rounded-xl object-cover\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/projectPhotos/voom3.png\",\n                                alt: \"project-photos\",\n                                height: 300,\n                                width: 300,\n                                className: \"h-auto w-full rounded-xl object-cover\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: \"/projectPhotos/voom4.png\",\n                                alt: \"project-photos\",\n                                height: 300,\n                                width: 300,\n                                className: \"h-auto w-full rounded-xl object-cover\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center gap-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://voom-zeta.vercel.app/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm md:text-base\",\n                                children: \"Visit VOOM\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://github.com/manushadananjaya/voom\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm md:text-base\",\n                                children: \"View Project on Github\"\n                            }, void 0, false, {\n                                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, \"dummy-content\" + index, true, {\n                fileName: \"/Users/manushadananjaya/Documents/GitHub/Manusha-portolio/components/ProjectPage.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c1 = DummyContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"DummyContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFDUztBQUU4QjtBQUMvQjtBQUNWO0FBRTdCLFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1RLGNBQWMsQ0FBQ0MsV0FDbkJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNWLHFFQUFJQTtnQkFBZ0JTLE1BQU1BO2dCQUFNQyxPQUFPQTtlQUE3QkQsS0FBS0UsR0FBRzs7Ozs7SUFHdkIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNmLHlFQUFRQTtnQkFBQ2dCLE9BQU9ULFlBQVlVOzs7Ozs7UUFDeEM7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLHVCQUFTLDhEQUFDZix5RUFBUUE7Z0JBQUNnQixPQUFPVCxZQUFZVzs7Ozs7O1FBQ3hDO1FBQ0E7WUFDRUosT0FBTztZQUNQQyx1QkFBUyw4REFBQ2YseUVBQVFBO2dCQUFDZ0IsT0FBT1QsWUFBWVk7Ozs7OztRQUN4QztRQUNBO1lBQ0VMLE9BQU87WUFDUEMsdUJBQVMsOERBQUNmLHlFQUFRQTtnQkFBQ2dCLE9BQU9ULFlBQVlhOzs7Ozs7UUFDeEM7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXVIOzs7Ozs7MEJBS3JJLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlQsS0FBS0osR0FBRyxDQUFDLENBQUNlLEtBQUtDLG9CQUNkLDhEQUFDQzt3QkFFQ0MsU0FBUyxJQUFNckIsaUJBQWlCbUI7d0JBQ2hDSCxXQUFXLGtGQUlWLE9BSENqQixrQkFBa0JvQixNQUNkLDREQUNBLDBGQUNMOzs0QkFFQXBCLGtCQUFrQm9CLHFCQUNqQiw4REFBQ3ZCLGlEQUFNQSxDQUFDbUIsR0FBRztnQ0FDVE8sVUFBUztnQ0FDVEMsWUFBWTtvQ0FBRUMsTUFBTTtvQ0FBVUMsUUFBUTtvQ0FBS0MsVUFBVTtnQ0FBSTtnQ0FDekRWLFdBQVU7Ozs7OzswQ0FHZCw4REFBQ1c7Z0NBQUtYLFdBQVU7MENBQ2JFLElBQUlWLEtBQUs7Ozs7Ozs7dUJBaEJQVSxJQUFJVixLQUFLOzs7Ozs7Ozs7OzBCQXVCcEIsOERBQUNaLGlEQUFNQSxDQUFDbUIsR0FBRztnQkFFVGEsU0FBUztvQkFBRUMsU0FBUztvQkFBR0MsR0FBRztnQkFBSTtnQkFDOUJDLFNBQVM7b0JBQUVGLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUU7Z0JBQzVCRSxNQUFNO29CQUFFSCxTQUFTO29CQUFHQyxHQUFHLENBQUM7Z0JBQUk7Z0JBQzVCUCxZQUFZO29CQUFFRyxVQUFVO2dCQUFJO2dCQUM1QlYsV0FBVTswQkFFVFQsSUFBSSxDQUFDUixjQUFjLENBQUNVLE9BQU87ZUFQdkJWOzs7Ozs7Ozs7OztBQVdiO0dBeEVTRDtLQUFBQTtBQTBFVCxNQUFNbUMsZUFBZTtJQUNuQixxQkFDRTtrQkFDR0MsTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVE7UUFBRSxHQUFHakMsR0FBRyxDQUFDLENBQUNrQyxHQUFHaEMsc0JBQ2pDLDhEQUFDVTtnQkFFQ0MsV0FBVTs7a0NBRVYsOERBQUNzQjt3QkFBRXRCLFdBQVU7OzBDQUNYLDhEQUFDVztnQ0FBS1gsV0FBVTswQ0FBdUQ7Ozs7Ozs0QkFFL0Q7MENBQ1IsOERBQUN1Qjs7Ozs7NEJBQUs7Ozs7Ozs7a0NBU1IsOERBQUN4Qjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUN6QixrREFBS0E7Z0NBQ0plLEtBQUk7Z0NBQ0prQyxLQUFJO2dDQUNKQyxRQUFRO2dDQUNSQyxPQUFPO2dDQUNQMUIsV0FBVTtnQ0FDVjJCLFFBQVE7Ozs7OzswQ0FFViw4REFBQ3BELGtEQUFLQTtnQ0FDSmUsS0FBSTtnQ0FDSmtDLEtBQUk7Z0NBQ0pDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1AxQixXQUFVO2dDQUNWMkIsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDcEQsa0RBQUtBO2dDQUNKZSxLQUFJO2dDQUNKa0MsS0FBSTtnQ0FDSkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUDFCLFdBQVU7Z0NBQ1YyQixRQUFROzs7Ozs7MENBRVYsOERBQUNwRCxrREFBS0E7Z0NBQ0plLEtBQUk7Z0NBQ0prQyxLQUFJO2dDQUNKQyxRQUFRO2dDQUNSQyxPQUFPO2dDQUNQMUIsV0FBVTtnQ0FDVjJCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FLWiw4REFBQzVCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ25CLGlEQUFJQTtnQ0FDSCtDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0o5QixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNuQixpREFBSUE7Z0NBQ0grQyxNQUFLO2dDQUNMQyxRQUFPO2dDQUNQQyxLQUFJO2dDQUNKOUIsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7OztlQWxFRSxrQkFBa0JYOzs7Ozs7QUEwRWpDO01BL0VNNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0UGFnZS50c3g/YTY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFRhYiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FwcGxlLWNhcmRzLWNhcm91c2VsXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAocHJvamVjdHM6IGFueVtdKSA9PlxuICAgIHByb2plY3RzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgIDxDYXJkIGtleT17Y2FyZC5zcmN9IGNhcmQ9e2NhcmR9IGluZGV4PXtpbmRleH0gLz5cbiAgICApKTtcblxuICBjb25zdCB0YWJzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIldlYiBBcHBsaWNhdGlvbnNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMod2ViUHJvamVjdHMpfSAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1vYmlsZSBBcHBsaWNhdGlvbnNcIixcbiAgICAgIGNvbnRlbnQ6IDxDYXJvdXNlbCBpdGVtcz17cmVuZGVyQ2FyZHMobW9iaWxlQXBwbGljYXRpb25zKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJEZXNrdG9wIEFwcGxpY2F0aW9uc1wiLFxuICAgICAgY29udGVudDogPENhcm91c2VsIGl0ZW1zPXtyZW5kZXJDYXJkcyhkZXNrdG9wQXBwbGljYXRpb25zKX0gLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNaWNyby1jb250cm9sbGVyIFByb2plY3RzXCIsXG4gICAgICBjb250ZW50OiA8Q2Fyb3VzZWwgaXRlbXM9e3JlbmRlckNhcmRzKG1pY3JvQ29udHJvbGxlclByb2plY3RzKX0gLz4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgaC1mdWxsIHB5LTIwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWF4LXctN3hsIGl0ZW1zLWNlbnRlciBteC1hdXRvIHRleHQtM3hsIHRleHQtY2VudGVyIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtMjAwIGRhcms6dGV4dC13aGl0ZSBmb250LXNhbnNcIj5cbiAgICAgICAgR2V0IHRvIGtub3cgYWJvdXQgbXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIHsvKiBUYWIgTmF2aWdhdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctYXV0byBuby12aXNpYmxlLXNjcm9sbGJhciBtYXgtdy1mdWxsIHctZnVsbCBtZDpwbC00MCBtdC04XCI+XG4gICAgICAgIHt0YWJzLm1hcCgodGFiLCBpZHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5kZXgoaWR4KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHB4LTIgcHktMiBtZDpweC00IG1kOnB5LTIgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBpZHhcbiAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS0yMDAgZGFyazpiZy1ibHVlLTcwMCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtYmx1ZS03MDAgZGFyazp0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLXdoaXRlL1swLjEyXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIH0gdGV4dC1zbSBtZDp0ZXh0LWJhc2VgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZEluZGV4ID09PSBpZHggJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGxheW91dElkPVwiY2xpY2tlZGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBib3VuY2U6IDAuMywgZHVyYXRpb246IDAuNyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JheS0yMDAgZGFyazpiZy16aW5jLTgwMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIHt0YWIudGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUYWIgQ29udGVudCAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT17c2VsZWN0ZWRJbmRleH1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAxMDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogLTEwMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtOFwiXG4gICAgICA+XG4gICAgICAgIHt0YWJzW3NlbGVjdGVkSW5kZXhdLmNvbnRlbnR9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IER1bW15Q29udGVudCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEgfSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtcImR1bW15LWNvbnRlbnRcIiArIGluZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctbmV1dHJhbC04MDAgcC00IG1kOnAtMTAgcm91bmRlZC0zeGwgbWItNiBzaGFkb3ctbWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0zMDAgdGV4dC1iYXNlIG1kOnRleHQteGwgbGVhZGluZy1yZWxheGVkIGZvbnQtc2FucyBtYXgtdy0zeGwgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC04MDAgZGFyazp0ZXh0LW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgICAgIFZvb20uYWkgaXMgYSBwbGF0Zm9ybSB0aGF0IGhlbHBzIHlvdSBkbyBtb3JlIHdpdGggQUkuXG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUaGlzIGluZGl2aWR1YWwgcHJvamVjdCBpcyBhIHBsYXRmb3JtIHBvd2VyZWQgYnkgR0VNSU5JIEFJIDEuNVxuICAgICAgICAgICAgRmxhc2gsIGZlYXR1cmluZyBidWlsdC1pbiBBSSB0ZW1wbGF0ZXMgdGhhdCB1c2VycyBjYW4gdXRpbGl6ZSBvclxuICAgICAgICAgICAgY3VzdG9taXplIHdpdGggdGhlaXIgb3duLiBJdCBpbmNsdWRlcyBDbGVyayBhdXRoZW50aWNhdGlvbiBhbmQgYVxuICAgICAgICAgICAgYnVpbHQtaW4gdGV4dCBlZGl0b3IsIGFsbG93aW5nIHVzZXJzIHRvIGVhc2lseSBlZGl0IEFJLWdlbmVyYXRlZFxuICAgICAgICAgICAgY29udGVudCBkaXJlY3RseSBvbiB0aGUgcGxhdGZvcm0uXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgey8qIEltYWdlcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvcHJvamVjdFBob3Rvcy92b29tLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInByb2plY3QtcGhvdG9zXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgcm91bmRlZC14bCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvcHJvamVjdFBob3Rvcy92b29tMi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJwcm9qZWN0LXBob3Rvc1wiXG4gICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3Byb2plY3RQaG90b3Mvdm9vbTMucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwicHJvamVjdC1waG90b3NcIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIHctZnVsbCByb3VuZGVkLXhsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9wcm9qZWN0UGhvdG9zL3Zvb200LnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInByb2plY3QtcGhvdG9zXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgcm91bmRlZC14bCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBCdXR0b25zICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC02XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92b29tLXpldGEudmVyY2VsLmFwcC9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc20gbWQ6dGV4dC1iYXNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlzaXQgVk9PTVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYW51c2hhZGFuYW5qYXlhL3Zvb21cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgaG92ZXI6YmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc20gbWQ6dGV4dC1iYXNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBQcm9qZWN0IG9uIEdpdGh1YlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIkNhcmQiLCJtb3Rpb24iLCJMaW5rIiwiUHJvZmlsZVBhZ2UiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInJlbmRlckNhcmRzIiwicHJvamVjdHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJzcmMiLCJ0YWJzIiwidGl0bGUiLCJjb250ZW50IiwiaXRlbXMiLCJ3ZWJQcm9qZWN0cyIsIm1vYmlsZUFwcGxpY2F0aW9ucyIsImRlc2t0b3BBcHBsaWNhdGlvbnMiLCJtaWNyb0NvbnRyb2xsZXJQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFiIiwiaWR4IiwiYnV0dG9uIiwib25DbGljayIsImxheW91dElkIiwidHJhbnNpdGlvbiIsInR5cGUiLCJib3VuY2UiLCJkdXJhdGlvbiIsInNwYW4iLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwiZXhpdCIsIkR1bW15Q29udGVudCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJwIiwiYnIiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByaW9yaXR5IiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProjectPage.tsx\n"));

/***/ })

});