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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/raul/Projetos/pluralsight-course-using-react-hooks/02-Basic-React-Hooks-useState-useRef-useEffect/clip2-Setting-Up-Toolchain/pages/index.js\";\n\n\nconst InputElement = () => {\n  const {\n    0: inputText,\n    1: setInputText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: historyList,\n    1: setHistoryList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      onChange: e => {\n        setInputText(e.target.value);\n        setHistoryList([...historyList, e.target.value]);\n      },\n      placeholder: \"Enter Some Text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }, undefined), inputText, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 8\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 8\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: historyList.map(rec => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: rec\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 23\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 8\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInVzZVN0YXRlIiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInJlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxNQUFNO0FBRXZCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEyQkMsc0RBQVEsQ0FBQyxFQUFELENBQXpDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQStCRixzREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFFQSxzQkFBTztBQUFBLDRCQUFLO0FBQ1IsY0FBUSxFQUFHRyxDQUFELElBQUs7QUFFWEosb0JBQVksQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNBSCxzQkFBYyxDQUFDLENBQUMsR0FBR0QsV0FBSixFQUFnQkUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXpCLENBQUQsQ0FBZDtBQUVILE9BTk87QUFPVixpQkFBVyxFQUFDO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTCxlQVFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkUsRUFVSFAsU0FWRyxlQVlKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkksZUFhSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJJLGVBY0o7QUFBQSxnQkFDS0csV0FBVyxDQUFDSyxHQUFaLENBQWlCQyxHQUFELElBQU87QUFDcEIsNEJBQU87QUFBQSxvQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0gsT0FGQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFxQkgsQ0ExQkQ7O0FBNEJlViwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaW5wdXRUZXh0LHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaGlzdG9yeUxpc3Qsc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgcmV0dXJuIDxkaXY+PGlucHV0ICBcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xuXG4gICAgICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBzZXRIaXN0b3J5TGlzdChbLi4uaGlzdG9yeUxpc3QsZS50YXJnZXQudmFsdWVdKTtcblxuICAgICAgICB9fVxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTb21lIFRleHRcIlxuICAgICAgIC8+PGJyLz5cblxuICAgICAgIHtpbnB1dFRleHR9XG5cbiAgICAgICA8aHIvPlxuICAgICAgIDxici8+XG4gICAgICAgPHVsPlxuICAgICAgICAgICB7aGlzdG9yeUxpc3QubWFwKChyZWMpPT57XG4gICAgICAgICAgICAgICByZXR1cm4gPGRpdj57cmVjfTwvZGl2PlxuICAgICAgICAgICB9KX1cbiAgICAgICA8L3VsPlxuXG4gICAgICAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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