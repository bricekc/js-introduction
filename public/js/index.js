/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction */ \"./src/introduction.js\");\n\n\nconsole.log(\"1 + 2 = \", (0,_introduction__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2));\n\n\n//# sourceURL=webpack://r301-js-introduction/./src/index.js?");

/***/ }),

/***/ "./src/introduction.js":
/*!*****************************!*\
  !*** ./src/introduction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"addIsAdultProperty\": () => (/* binding */ addIsAdultProperty),\n/* harmony export */   \"addToAll\": () => (/* binding */ addToAll),\n/* harmony export */   \"adultFilter\": () => (/* binding */ adultFilter),\n/* harmony export */   \"ageAverage\": () => (/* binding */ ageAverage),\n/* harmony export */   \"average\": () => (/* binding */ average),\n/* harmony export */   \"extractAge\": () => (/* binding */ extractAge),\n/* harmony export */   \"hasChild\": () => (/* binding */ hasChild),\n/* harmony export */   \"isAdult\": () => (/* binding */ isAdult),\n/* harmony export */   \"isAllAdult\": () => (/* binding */ isAllAdult),\n/* harmony export */   \"isChild\": () => (/* binding */ isChild),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\nfunction add(a, b) {\n  return a + b;\n}\n\nfunction sub(a, b) {\n  return b - a;\n}\n\nfunction sum(a) {\n  let res = 0;\n  // eslint-disable-next-line no-plusplus\n  for (let i=0; i<a.length; i++)\n  {\n    res+=a[i];\n  }\n  return res;\n}\n\nfunction addToAll(values, toAdd)\n{\n  const res = values.map(x => x+toAdd);\n  return res;\n}\n\nfunction average(values)\n{\n  let sum = 0;\n  if (values.length == 0)\n  {\n    return null;\n  }\n  else\n  {\n    for (let i=0; i<values.length; i++)\n    {\n      sum+=values[i];\n    }\n    let size = values.length;\n    return sum/size;\n  }\n}\n\nfunction isAdult(user)\n{\n  if (user.age >=18)\n  {\n    return true;\n  }\n  else\n  {\n    return false;\n  }\n}\n\nfunction isChild(user)\n{\n  if (user.age <18)\n  {\n    return true;\n  }\n  else\n  {\n    return false;\n  }\n}\n\nfunction extractAge(users)\n{\n  let res = [];\n  for (let i=0; i < users.length; i++)\n  {\n    res.push(users[i].age);\n  }\n  return res;\n}\n\nfunction adultFilter(users, type)\n{\n  if (type == \"adult\")\n  {\n    return users.filter(user => isAdult(user));\n  }\n  else if (type == \"child\")\n  {\n    return users.filter(user => isChild(user));\n  }\n  else\n  {\n    return users;\n  }\n}\n\nfunction ageAverage(users, type)\n{\n  let userstype = adultFilter(users, type);\n  let sumage = extractAge(userstype);\n  return average(sumage);\n}\n\nfunction isAllAdult(users)\n{\n  return users.every(isAdult);\n}\n\nfunction hasChild(users)\n{\n  return users.some(isChild);\n}\n\nfunction addIsAdultProperty(users)\n{\n  let copyUsers = [];\n  for (let i=0;i<users.length;i++)\n  {\n    let adult = {isAdult: isAdult(users[i])}\n    copyUsers.push({...users[i], ...adult}); \n  }\n  console.log(copyUsers);\n  return copyUsers;\n}\n\n//# sourceURL=webpack://r301-js-introduction/./src/introduction.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;