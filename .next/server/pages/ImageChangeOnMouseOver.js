module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnMouseOver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ \"./src/ImageToggleOnMouseOver.js\");\n\nvar _jsxFileName = \"/home/raul/Projetos/pluralsight-course-using-react-hooks/02-Basic-React-Hooks-useState-useRef-useEffect/clip2-Setting-Up-Toolchain/pages/ImageChangeOnMouseOver.js\";\n\n\n\nconst ImageChangeOnMouseOver = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"/static/imagem1.jpg\",\n      secondaryImg: \"/static/imagem2.jpg\",\n      width: \"200px\",\n      alt: \"Imagem 1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), \"\\xA0\\xA0\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      primaryImg: \"/static/imagem2.jpg\",\n      secondaryImg: \"/static/imagem1.jpg\",\n      width: \"200px\",\n      alt: \"Imagem 2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzPzFmNzMiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLE1BQU07QUFDakMsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxtRUFBRDtBQUNDLGdCQUFVLEVBQUMscUJBRFo7QUFFQyxrQkFBWSxFQUFDLHFCQUZkO0FBR0MsV0FBSyxFQUFDLE9BSFA7QUFHZSxTQUFHLEVBQUM7QUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESiwrQkFNSSxxRUFBQyxtRUFBRDtBQUNBLGdCQUFVLEVBQUMscUJBRFg7QUFFQSxrQkFBWSxFQUFDLHFCQUZiO0FBR0EsV0FBSyxFQUFDLE9BSE47QUFHYyxTQUFHLEVBQUM7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBZEQ7O0FBaUJlQSxxRkFBZiIsImZpbGUiOiIuL3BhZ2VzL0ltYWdlQ2hhbmdlT25Nb3VzZU92ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlcic7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgXG4gICAgICAgICAgICAgcHJpbWFyeUltZz1cIi9zdGF0aWMvaW1hZ2VtMS5qcGdcIiBcbiAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2ltYWdlbTIuanBnXCJcbiAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCIgYWx0PVwiSW1hZ2VtIDFcIiAvPlxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciBcbiAgICAgICAgICAgIHByaW1hcnlJbWc9XCIvc3RhdGljL2ltYWdlbTIuanBnXCIgXG4gICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3RhdGljL2ltYWdlbTEuanBnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIiBhbHQ9XCJJbWFnZW0gMlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnMouseOver.js\n");

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/raul/Projetos/pluralsight-course-using-react-hooks/02-Basic-React-Hooks-useState-useRef-useEffect/clip2-Setting-Up-Toolchain/src/ImageToggleOnMouseOver.js\";\n\n\nconst ImageToggleOnMouseOver = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    onMouseOver: () => {\n      imageRef.current.src = secondaryImg;\n    },\n    onMouseOut: () => {\n      imageRef.current.src = primaryImg;\n    },\n    src: primaryImg,\n    alt: \"\",\n    width: \"200px\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcz82Zjc0Il0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25Nb3VzZU92ZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUcsQ0FBQztBQUM1QkMsWUFENEI7QUFDaEJDO0FBRGdCLENBQUQsS0FFekI7QUFDRixRQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLHNCQUNJO0FBQ0EsZUFBVyxFQUFFLE1BQUk7QUFDYkQsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkosWUFBdkI7QUFDSCxLQUhEO0FBSUEsY0FBVSxFQUFFLE1BQUk7QUFDWkMsY0FBUSxDQUFDRSxPQUFULENBQWlCQyxHQUFqQixHQUF1QkwsVUFBdkI7QUFDSCxLQU5EO0FBT0EsT0FBRyxFQUFFQSxVQVBMO0FBUUEsT0FBRyxFQUFDLEVBUko7QUFTQSxTQUFLLEVBQUMsT0FUTjtBQVVBLE9BQUcsRUFBRUU7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxDQW5CRDs7QUFxQmVILHFGQUFmIiwiZmlsZSI6Ii4vc3JjL0ltYWdlVG9nZ2xlT25Nb3VzZU92ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyID0gKHsgXG4gICAgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nXG59KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbClcbiAgICByZXR1cm4oXG4gICAgICAgIDxpbWcgXG4gICAgICAgIG9uTW91c2VPdmVyPXsoKT0+e1xuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBzZWNvbmRhcnlJbWc7XG4gICAgICAgIH19IFxuICAgICAgICBvbk1vdXNlT3V0PXsoKT0+e1xuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBwcmltYXJ5SW1nO1xuICAgICAgICB9fVxuICAgICAgICBzcmM9e3ByaW1hcnlJbWd9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICByZWY9e2ltYWdlUmVmfVxuXG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25Nb3VzZU92ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnMouseOver.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });