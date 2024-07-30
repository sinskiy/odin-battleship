/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGame: () => (/* binding */ createGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


function createGame() {
  const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("player");
  const player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("computer");
  player1.board.place(0, 0, 5);
  player2.board.place(0, 0, 5);
  player1.board.place(1, 0, 4);
  player2.board.place(1, 0, 4);
  player1.board.place(2, 0, 3);
  player2.board.place(2, 0, 3);
  player1.board.place(3, 0, 2);
  player2.board.place(3, 0, 2);
  return { player1, player2 };
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOARD_SIZE: () => (/* binding */ BOARD_SIZE),
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const BOARD_SIZE = 10;

class Gameboard {
  constructor() {
    // create 2d array where each item is unique
    this.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.shots = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.placedShips = 0;
    this.sankShips = 0;
  }
  place(x, y, length, horizontal = true) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    if (horizontal) {
      const xEnd = x + length;
      for (let i = x; i < xEnd; i++) {
        this.ships[i][y] = ship;
      }
    } else {
      const yEnd = y + length;
      for (let i = y; i < yEnd; i++) {
        this.ships[x][i] = ship;
      }
    }

    this.placedShips++;
  }
  receiveAttack(x, y) {
    this.shots[x][y] = true;

    const ship = this.ships[x][y];
    if (!ship) return;

    ship.hits++;

    if (ship.isSunk()) this.sankShips++;
  }
  allSunk() {
    return this.placedShips === this.sankShips;
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  constructor(type) {
    this.type = type;
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    // if (length < 1 || length > 4 ) throw new Error("Size must be between 1 and 4")

    this.length = length;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.hits >= this.length;
  }
}


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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



createGameDOM();

function createGameDOM() {
  const { player1, player2 } = (0,_game__WEBPACK_IMPORTED_MODULE_0__.createGame)();
  const board1 = boardToDOM(player1.board.ships);
  const board2 = boardToDOM(player2.board.ships);
  document.body.append(board1, board2);
}

function boardToDOM(board) {
  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board");
  // const board2 = document.createElement("div");
  for (const column of board) {
    const boardColumn = document.createElement("div");
    boardColumn.classList.add("column");
    for (const row of column) {
      const boardRow = document.createElement("div");
      boardRow.classList.add("row");

      boardRow.textContent = row instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"] ? "x" : "";

      boardColumn.appendChild(boardRow);
    }

    DOMBoard.appendChild(boardColumn);
  }

  return DOMBoard;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRXZCO0FBQ1Asc0JBQXNCLCtDQUFNO0FBQzVCLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2QwQjs7QUFFbkI7O0FBRVE7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRCw4QkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJO0FBQ3pCO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNvQzs7QUFFckI7QUFDZjtBQUNBO0FBQ0EscUJBQXFCLGtEQUFTO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05vQztBQUNWOztBQUUxQjs7QUFFQTtBQUNBLFVBQVUsbUJBQW1CLEVBQUUsaURBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLDZDQUFJOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWUoKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKFwicGxheWVyXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gbmV3IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlKDAsIDAsIDUpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDAsIDAsIDUpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlKDEsIDAsIDQpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDEsIDAsIDQpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlKDIsIDAsIDMpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDIsIDAsIDMpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlKDMsIDAsIDIpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDMsIDAsIDIpO1xuICByZXR1cm4geyBwbGF5ZXIxLCBwbGF5ZXIyIH07XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCBCT0FSRF9TSVpFID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNyZWF0ZSAyZCBhcnJheSB3aGVyZSBlYWNoIGl0ZW0gaXMgdW5pcXVlXG4gICAgdGhpcy5zaGlwcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IEJPQVJEX1NJWkUgfSwgKCkgPT4gQXJyYXkoQk9BUkRfU0laRSkpO1xuICAgIHRoaXMuc2hvdHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBCT0FSRF9TSVpFIH0sICgpID0+IEFycmF5KEJPQVJEX1NJWkUpKTtcbiAgICB0aGlzLnBsYWNlZFNoaXBzID0gMDtcbiAgICB0aGlzLnNhbmtTaGlwcyA9IDA7XG4gIH1cbiAgcGxhY2UoeCwgeSwgbGVuZ3RoLCBob3Jpem9udGFsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBjb25zdCB4RW5kID0geCArIGxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeEVuZDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB5RW5kID0geSArIGxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeUVuZDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbeF1baV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGxhY2VkU2hpcHMrKztcbiAgfVxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICB0aGlzLnNob3RzW3hdW3ldID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3hdW3ldO1xuICAgIGlmICghc2hpcCkgcmV0dXJuO1xuXG4gICAgc2hpcC5oaXRzKys7XG5cbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkgdGhpcy5zYW5rU2hpcHMrKztcbiAgfVxuICBhbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnBsYWNlZFNoaXBzID09PSB0aGlzLnNhbmtTaGlwcztcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIC8vIGlmIChsZW5ndGggPCAxIHx8IGxlbmd0aCA+IDQgKSB0aHJvdyBuZXcgRXJyb3IoXCJTaXplIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA0XCIpXG5cbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMrKztcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jcmVhdGVHYW1lRE9NKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVET00oKSB7XG4gIGNvbnN0IHsgcGxheWVyMSwgcGxheWVyMiB9ID0gY3JlYXRlR2FtZSgpO1xuICBjb25zdCBib2FyZDEgPSBib2FyZFRvRE9NKHBsYXllcjEuYm9hcmQuc2hpcHMpO1xuICBjb25zdCBib2FyZDIgPSBib2FyZFRvRE9NKHBsYXllcjIuYm9hcmQuc2hpcHMpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChib2FyZDEsIGJvYXJkMik7XG59XG5cbmZ1bmN0aW9uIGJvYXJkVG9ET00oYm9hcmQpIHtcbiAgY29uc3QgRE9NQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBET01Cb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIC8vIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvciAoY29uc3QgY29sdW1uIG9mIGJvYXJkKSB7XG4gICAgY29uc3QgYm9hcmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gICAgZm9yIChjb25zdCByb3cgb2YgY29sdW1uKSB7XG4gICAgICBjb25zdCBib2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib2FyZFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgICBib2FyZFJvdy50ZXh0Q29udGVudCA9IHJvdyBpbnN0YW5jZW9mIFNoaXAgPyBcInhcIiA6IFwiXCI7XG5cbiAgICAgIGJvYXJkQ29sdW1uLmFwcGVuZENoaWxkKGJvYXJkUm93KTtcbiAgICB9XG5cbiAgICBET01Cb2FyZC5hcHBlbmRDaGlsZChib2FyZENvbHVtbik7XG4gIH1cblxuICByZXR1cm4gRE9NQm9hcmQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=