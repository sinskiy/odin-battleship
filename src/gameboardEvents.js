import createGame from "./createGame";
import createGameDOM from "./createDOM";
import { randomCord } from "./random";

export function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
  if (board.allSunk()) {
    endGame("computer");
  }
}

export function handleComputerTurn(board) {
  const [randomX, randomY] = randomCord();

  if (board.shots[randomX][randomY] === true) {
    handleComputerTurn(board);
    return;
  }

  board.receiveAttack(randomX, randomY);

  if (board.allSunk()) {
    endGame("player");
  }
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
  button.addEventListener("click", () => {
    restartGame();
    dialog.close();
  });

  dialog.append(h2, button);

  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener("cancel", (e) => e.preventDefault());
}

export function restartGame() {
  const { player, computer } = createGame();
  createGameDOM(player, computer);
}

export const SHIPS = [0, 1, 2, 1, 1];
