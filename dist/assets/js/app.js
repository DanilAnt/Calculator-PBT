/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nvar x, i, j, l, ll, selElmnt, a, b, c;\r\n/*look for any elements with the class \"custom-select\":*/\r\nx = document.getElementsByClassName(\"custom-select\");\r\nl = x.length;\r\nfor (i = 0; i < l; i++) {\r\n  selElmnt = x[i].getElementsByTagName(\"select\")[0];\r\n  ll = selElmnt.length;\r\n  /*for each element, create a new DIV that will act as the selected item:*/\r\n  a = document.createElement(\"DIV\");\r\n  a.setAttribute(\"class\", \"select-selected\");\r\n  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\r\n  x[i].appendChild(a);\r\n  /*for each element, create a new DIV that will contain the option list:*/\r\n  b = document.createElement(\"DIV\");\r\n  b.setAttribute(\"class\", \"select-items select-hide\");\r\n  for (j = 1; j < ll; j++) {\r\n    /*for each option in the original select element,\r\n    create a new DIV that will act as an option item:*/\r\n    c = document.createElement(\"DIV\");\r\n    c.innerHTML = selElmnt.options[j].innerHTML;\r\n    c.addEventListener(\"click\", function(e) {\r\n        /*when an item is clicked, update the original select box,\r\n        and the selected item:*/\r\n        var y, i, k, s, h, sl, yl;\r\n        s = this.parentNode.parentNode.getElementsByTagName(\"select\")[0];\r\n        sl = s.length;\r\n        h = this.parentNode.previousSibling;\r\n        for (i = 0; i < sl; i++) {\r\n          if (s.options[i].innerHTML == this.innerHTML) {\r\n            s.selectedIndex = i;\r\n            h.innerHTML = this.innerHTML;\r\n            y = this.parentNode.getElementsByClassName(\"same-as-selected\");\r\n            yl = y.length;\r\n            for (k = 0; k < yl; k++) {\r\n              y[k].removeAttribute(\"class\");\r\n            }\r\n            this.setAttribute(\"class\", \"same-as-selected\");\r\n            break;\r\n          }\r\n        }\r\n        h.click();\r\n    });\r\n    b.appendChild(c);\r\n  }\r\n  x[i].appendChild(b);\r\n  a.addEventListener(\"click\", function(e) {\r\n      /*when the select box is clicked, close any other select boxes,\r\n      and open/close the current select box:*/\r\n      e.stopPropagation();\r\n      closeAllSelect(this);\r\n      this.nextSibling.classList.toggle(\"select-hide\");\r\n      this.classList.toggle(\"select-arrow-active\");\r\n    });\r\n}\r\nfunction closeAllSelect(elmnt) {\r\n  /*a function that will close all select boxes in the document,\r\n  except the current select box:*/\r\n  var x, y, i, xl, yl, arrNo = [];\r\n  x = document.getElementsByClassName(\"select-items\");\r\n  y = document.getElementsByClassName(\"select-selected\");\r\n  xl = x.length;\r\n  yl = y.length;\r\n  for (i = 0; i < yl; i++) {\r\n    if (elmnt == y[i]) {\r\n      arrNo.push(i)\r\n    } else {\r\n      y[i].classList.remove(\"select-arrow-active\");\r\n    }\r\n  }\r\n  for (i = 0; i < xl; i++) {\r\n    if (arrNo.indexOf(i)) {\r\n      x[i].classList.add(\"select-hide\");\r\n    }\r\n  }\r\n}\r\n/*if the user clicks anywhere outside the select box,\r\nthen close all select boxes:*/\r\ndocument.addEventListener(\"click\", closeAllSelect);\r\n\r\n\r\nlet slider = new Object();\r\nlet output = new Object();\r\n\r\n\r\nslider.repair = document.getElementById(\"repair_range\");\r\noutput.repair  = document.getElementById(\"repair_area\");\r\noutput.repair.innerHTML = slider.repair.value; // Display the default slider value\r\n\r\n// Update the current slider value (each time you drag the slider handle)\r\nslider.repair.oninput = function() {\r\n    output.repair.innerHTML = this.value;\r\n}\r\n\r\n\r\nslider.san = document.getElementById(\"san_range\");\r\noutput.san = document.getElementById(\"san_area\");\r\noutput.san.innerHTML = slider.san.value; // Display the default slider value\r\n\r\n// Update the current slider value (each time you drag the slider handle)\r\nslider.san.oninput = function() {\r\n    output.san.innerHTML = this.value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/calculations.js":
/*!***************************************!*\
  !*** ./src/assets/js/calculations.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet form  = new Object();\r\nlet value  = new Object();\r\nlet timerId = setInterval(calc, 200);\r\nlet repair_price = document.getElementById('repair_price')\r\n\r\nfunction calc(){\r\n    form.house_type = document.forms.house_type1;\r\n    value.house_type = select__house_type.value;\r\n\r\n    form.electrics = document.forms.electrics;\r\n    value.electrics = select__electrics.value;\r\n\r\n    form.repair = document.forms.repair;\r\n    value.repair = select__repair.value;\r\n\r\n    form.ceiling = document.forms.ceiling;\r\n    value.ceiling = select__ceiling.value;\r\n\r\n    form.bathroom = document.forms.bathroom;\r\n    value.bathroom = select__bathroom.value;\r\n\r\n    form.floor = document.forms.floor;\r\n    value.floor = select__floor.value;\r\n\r\n    form.doors = document.forms.doors;\r\n    value.doors = select__doors.value;\r\n\r\n    value.san_range = san_range.value;\r\n\r\n    value.repair_range = repair_range.value;\r\n\r\n    value.wall_perimeter = wall_perimeter.value;\r\n    \r\n    value.front_door = front_door.checked;\r\n    \r\n        wall_perimeter.value=parseInt(wall_perimeter.value);\r\n        if(isNaN(wall_perimeter.value)){\r\n            value[key]=0;\r\n        }\r\n\r\n    let price;\r\n\r\n    if(value.house_type=='новостойка'){\r\n        price = 8500 * value.repair_range;\r\n    }else{\r\n        price = 6000 * value.repair_range;\r\n    }\r\n\r\n    if(value.electrics == 'частичная'){\r\n        price = price + 300 * value.repair_range;\r\n    }else if(value.electrics == 'новая'){\r\n        price = price + 600 * value.repair_range;\r\n    }\r\n\r\n    if(value.repair=='дизайнерский'){\r\n        price = price + 3000 * value.repair_range;\r\n    }else if(value.repair=='капитальный'){\r\n        price = price + 1500 * value.repair_range;\r\n    }\r\n\r\n    if(value.bathroom==\"да\"){\r\n        price = price + 13000 * value.san_range;\r\n    }\r\n    if(value.ceiling=='гипсокартон'){\r\n        price = price + 300 * value.repair_range;\r\n    }else if(value.ceiling=='натяжной'){\r\n        price = price + 450 * value.repair_range;\r\n    }else if(value.ceiling=='2-уровня'){\r\n        price = price + 600 * value.repair_range;\r\n    }\r\n\r\n    if(value.floor==\"да\"){\r\n        price = price + 200 * value.repair_range;\r\n    }\r\n    if(isFinite(value.doors)){\r\n        price = price+8500*parseInt(value.doors);\r\n    }\r\n    \r\n    if(value.front_door){\r\n        price = price*1.05;\r\n    }\r\n\r\n    repair_price.innerHTML = price;\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/calculations.js?");

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/calculations.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/Danil/Desktop/calculator/Calculator-PBT/src/assets/js/app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! /Users/Danil/Desktop/calculator/Calculator-PBT/src/assets/js/calculations.js */\"./src/assets/js/calculations.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/calculations.js?");

/***/ })

/******/ });