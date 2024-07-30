import createGame from "./createGame";
import createGameDOM from "./createDOM";

export function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
}

export function handleComputerTurn(board) {
  const random = () => Math.floor(Math.random() * 10);
  const randomX = random();
  const randomY = random();

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

  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener("cancel", (e) => e.preventDefault());
}

function restartGame() {
  const { player, computer } = createGame();
  createGameDOM(player, computer);
}
