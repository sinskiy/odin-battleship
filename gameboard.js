import Ship from "./ship";

export default class Gameboard {
  constructor() {
    const BOARD_SIZE = 10;
    // create 2d array where each item is unique
    this.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.shots = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.placedShips = 0;
    this.sankShips = 0;
  }
  place(x, y, length, horizontal = true) {
    const ship = new Ship(length);
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
