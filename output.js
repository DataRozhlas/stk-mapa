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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targetblank */ \"./js/targetblank.js\");\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_targetblank__WEBPACK_IMPORTED_MODULE_0__);\n // pro otvírání odkazů v novém okně\n\nmapboxgl.accessToken = 'pk.eyJ1IjoidG9jaXQiLCJhIjoiY2phZTB2eXAyMWxtdzJ5anV2d3JiazJiOSJ9.Z0RwPmdQt1eAknKXSlK6tQ';\nvar map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/tocit/cjsqj6l569udg1fs4qh15mlzj',\n  center: [15.4730, 49.8175]\n});\nmap.on('load', function () {\n  //legenda\n  var i;\n  var colors = ['#d7191c', '#fdae61', '#ffffbf', '#a6d96a', '#1a9641'];\n  var layers = ['< 80 %', '80-85 %', '85-90 %', '90-95 %', '> 95 %'];\n\n  for (i = 0; i < layers.length; i++) {\n    var layer = layers[i];\n    var color = colors[i];\n    var item = document.createElement('div');\n    var key = document.createElement('span');\n    key.className = 'legend-key';\n    key.style.backgroundColor = color;\n    var value = document.createElement('span');\n    value.innerHTML = layer;\n    item.appendChild(key);\n    item.appendChild(value);\n    legend.appendChild(item);\n  } //tooltip\n\n\n  map.on('mousemove', function (e) {\n    var stk = map.queryRenderedFeatures(e.point, {\n      layers: ['stk']\n    });\n\n    if (stk.length > 0) {\n      document.getElementById('pd').innerHTML = '<p><strong>' + stk[0].properties.provozovatel + '</strong>, ' + stk[0].properties.mesto + ', ' + stk[0].properties.ulice + '<br><strong>' + Math.round(stk[0].properties.zpusobile_pocet / stk[0].properties.prohlidky_celkem * 10000) / 100 + ' % způsobilých k provozu </strong> | ' + Math.round(stk[0].properties.nezpusobile_pocet / stk[0].properties.prohlidky_celkem * 10000) / 100 + ' % nezpůsobilých | ' + Math.round(stk[0].properties.docasne_zpusoblile_pocet / stk[0].properties.prohlidky_celkem * 10000) / 100 + ' % dočasně způsobilých z ' + stk[0].properties.prohlidky_celkem + ' pravidelných prohlídek osobních aut<br>průměrné počty závad: ' + stk[0].properties.prum_poc_zavad_nebezpecne + ' nebezpečných | ' + stk[0].properties.prum_poc_zavad_vazne + ' vážných | ' + stk[0].properties.prum_poc_zavad_lehke + ' lehkých</p>';\n    } else {\n      document.getElementById('pd').innerHTML = '<p>Vyberte na mapě stanici technické kontroly!</p>';\n    }\n  }); //geocoder\n\n  map.addControl(new MapboxGeocoder({\n    accessToken: mapboxgl.accessToken,\n    countries: 'cz',\n    placeholder: 'Hledej'\n  }));\n  map.getCanvas().style.cursor = 'default';\n  map.fitBounds([[12.09, 51.06], [18.87, 48.55]]); // zoom myší teprve až po interakci s mapou\n\n  map.scrollZoom.disable();\n  map.on(\"click\", function (e) {\n    map.scrollZoom.enable();\n  });\n  map.addControl(new mapboxgl.NavigationControl(), \"top-left\"); // buttonky pro zoom a rotaci\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/targetblank.js":
/*!***************************!*\
  !*** ./js/targetblank.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var links = document.getElementsByTagName(\"a\");\n  Array.prototype.forEach.call(links, function (link) {\n    if (link.hostname !== window.location.hostname) {\n      link.target = \"_blank\";\n      link.rel = \"noopener noreferrer\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/targetblank.js?");

/***/ })

/******/ });