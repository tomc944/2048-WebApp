/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);
	var InputManager = __webpack_require__(2); 

	window.addEventListener('DOMContentLoaded', function() {
	  new Game(4, InputManager);
	})


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Game(size, InputManager) {
	  this.size = size; // Defaults to 4x4
	  this.inputManager = new InputManager;

	  this.setup();
	}

	Game.prototype.setup = function() {

	};

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function InputManager() {
	  // setup game to have listeners for keypressing arrows
	  this.listen();
	}

	InputManager.prototype.listen = function() {
	  // need to map the arrow keys accordingly
	  var keys = {
	    37: 0, // left
	    38: 1, // up
	    39: 2, // right
	    40: 3  // down
	  }

	  $(document).keydown(function(e) {
	    switch(e.keyCode) {
	      case 37:
	        alert("You pressed left")
	        break;
	      case 38:
	        alert("You pressed up")
	        break;
	      case 39:
	        alert("You pressed right")
	        break;
	      case 40:
	        alert("You pressed down")
	        break;

	      default: return;
	    }
	    e.preventDefault();
	  })
	}


	module.exports = InputManager


/***/ }
/******/ ]);