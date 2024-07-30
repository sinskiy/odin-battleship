import createGame from "./createGame";
import createGameDOM, { root } from "./createDOM";
import { BOARD_SIZE } from "./gameboard";

export function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
}

export function handleComputerTurn(board) {
  const [randomX, randomY] = randomCord();

  if (board.shots[randomX][randomY] === true) {
    handleComputerTurn(board);
    return;
  }

  board.receiveAttack(randomX, randomY);
}

export function endGame(loser) {
  createEndDialog(loser);
}

function createEndDialog(loser) {
  const dialog = document.createElement("dialog");

  const h2 = document.createElement("h2");
  h2.textContent = `${loser} lost. play again?`;

  const button = document.createElement("button");
  button.textContent = "play again ⟲";
  button.addEventListener("click", restartGame);

  dialog.append(h2, button);

  root.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener("cancel", (e) => e.preventDefault());
}

export function restartGame() {
  const { player, computer } = createGame();
  createGameDOM(player, computer);
}

export function randomize(board) {
  board.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
  const SHIPS = [0, 1, 2, 1, 1];
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

function placeSatisfies(board, x, y, length, horizontal) {
  const outOfReach = horizontal
    ? x + length > BOARD_SIZE
    : y + length > BOARD_SIZE;
  if (outOfReach) {
    return false;
  }
  if (horizontal) {
    for (let i = x; i < x + length; i++) {
      if (board.ships[i][y] !== undefined) return false;
    }
  } else {
    for (let i = y; i < y + length; i++) {
      if (board.ships[x][i] !== undefined) return false;
    }
  }
  return true;
}

function randomCord() {
  return [random(BOARD_SIZE), random(BOARD_SIZE)];
}

function random(number) {
  return Math.floor(Math.random() * number);
}
