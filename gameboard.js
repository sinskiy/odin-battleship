import Ship from "./ship";

export default class Gameboard {
  constructor() {
    const BOARD_SIZE = 10;
    // create 2d array where each item is unique
    this.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
  }
  place(x, y, length, horizontal = true) {
    const ship = new Ship(length);
    if (horizontal) {
      const xEnd = x + length;
      for (let i = x; i < xEnd; i++) {
        this.ships[y][i] = ship;
      }
    } else {
      const yEnd = y + length;
      for (let i = y; i < yEnd; i++) {
        this.ships[i][x] = ship;
      }
    }
  }
}
