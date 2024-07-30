export default class Ship {
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
