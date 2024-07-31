import { BOARD_SIZE } from "./gameboard";
import { SHIPS } from "./gameboardEvents";

export function randomize(board) {
  board.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
  for (let i = 1; i < SHIPS.length; i++) {
    let shipAmount = SHIPS[i];
    while (shipAmount > 0) {
      placeRandomly(board, i + 1);
      shipAmount--;
    }
  }
}

function placeRandomly(board, length) {
  const [randomX, randomY] = randomCord();
  const horizontal = random(2) === 1;
  if (!placeSatisfies(board, randomX, randomY, length, horizontal)) {
    placeRandomly(board, length);
    return;
  }
  board.place(randomX, randomY, length, horizontal);
}

export function placeSatisfies(board, x, y, length, horizontal) {
  const outOfReach = horizontal
    ? x + length > BOARD_SIZE
    : y + length > BOARD_SIZE;
  if (outOfReach) {
    return false;
  }
  if (horizontal) {
    for (let i = x - 1; i < x + length + 1; i++) {
      const currRow = board.ships[i];
      if (!currRow) continue;

      const prev = y - 1 >= 0 ? currRow[y - 1] : false;
      const curr = y >= 0 && y < BOARD_SIZE ? currRow[y] : false;
      const next = y + 1 < BOARD_SIZE ? currRow[y + 1] : false;
      if (prev || curr || next) return false;
    }
  } else {
    for (let i = y - 1; i < y + length + 1; i++) {
      const prev = x - 1 >= 0 ? board.ships[x - 1][i] : false;
      const curr = board.ships[x][i];
      const next = x + 1 < BOARD_SIZE ? board.ships[x + 1][i] : false;
      if (prev || curr || next) return false;
    }
  }
  return true;
}

export function randomCord() {
  return [random(BOARD_SIZE), random(BOARD_SIZE)];
}

function random(number) {
  return Math.floor(Math.random() * number);
}
