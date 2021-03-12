webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/raul/Projetos/pluralsight-course-using-react-hooks/02-Basic-React-Hooks-useState-useRef-useEffect/clip2-Setting-Up-Toolchain/pages/ImageChangeOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {\n  _s();\n\n  var primaryImg = _ref.primaryImg,\n      secondaryImg = _ref.secondaryImg;\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var isInView = function isInView() {\n    var rect = imageRef.current.getBoundingClientRect();\n    return rect.top = 0 && false;\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      inView = _useState2[0],\n      setInView = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setIsLoading(false);\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler);\n    return function () {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n\n  var scrollHandler = function scrollHandler() {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: //  isLoading ? \"\"\n    inView ? secondaryImg : primaryImg,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ImageToggleOnScroll, \"ZXGxYM2/GoMqCdxtGlrQhtEYGrw=\");\n\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcz9kODY5Il0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJbWFnZUNoYW5nZU9uU2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBZ0M7QUFBQTs7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUV4RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFGd0Qsa0JBR3RCQyxzREFBUSxDQUFDLElBQUQsQ0FIYztBQUFBLE1BR2pEQyxTQUhpRDtBQUFBLE1BR3RDQyxZQUhzQzs7QUFLeEQsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFNQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQkMscUJBQWpCLEVBQWI7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsR0FBVyxLQUFLSCxLQUF2QjtBQUNILEdBSEQ7O0FBTHdELG1CQVU1Qkosc0RBQVEsQ0FBQyxLQUFELENBVm9CO0FBQUEsTUFVakRRLE1BVmlEO0FBQUEsTUFVekNDLFNBVnlDOztBQVl4REMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZSLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FPLGFBQVMsQ0FBQ04sUUFBUSxFQUFULENBQVQ7QUFDQVEsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDVEYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFvQ0QsYUFBcEM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFTQSxNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJKLGFBQVMsQ0FBQ04sUUFBUSxFQUFULENBQVQ7QUFDSCxHQUZEOztBQUtBLHNCQUNJO0FBQ0EsT0FBRyxFQUNEO0FBQ0VLLFVBQU0sR0FBR1gsWUFBSCxHQUFrQkQsVUFINUI7QUFLQSxPQUFHLEVBQUMsRUFMSjtBQU1BLE9BQUcsRUFBRUU7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXRDRDs7R0FBTUgsbUI7O0tBQUFBLG1CO0FBd0NTb0Isa0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIaWVnaHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgfSxbXSk7XG5cbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8aW1nIFxuICAgICAgICBzcmM9e1xuICAgICAgICAgIC8vICBpc0xvYWRpbmcgPyBcIlwiXG4gICAgICAgICAgICBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXG4gICAgICAgIH0gXG4gICAgICAgIGFsdD1cIlwiIFxuICAgICAgICByZWY9e2ltYWdlUmVmXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

})