import { BOARD_SIZE } from "./gameboard";
import {
  handlePlayerTurn,
  handleComputerTurn,
  endGame,
  restartGame,
} from "./gameboardEvents";
import Ship from "./ship";

export const root = document.querySelector("#root");

let player, computer;
export default function createGameDOM(playerPassed, computerPassed) {
  root.innerHTML = "";

  player = playerPassed;
  computer = computerPassed;

  const boards = document.createElement("div");
  boards.classList.add("boards");

  const board1 = boardToDOM(player);
  const board2 = boardToDOM(computer);
  boards.append(board1, board2);

  const restartButton = createRestartButton();

  root.append(boards, restartButton);
}

function boardToDOM(newPlayer) {
  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board", "player");

  const { ships, shots } = newPlayer.board;
  for (let i = 0; i < BOARD_SIZE; i++) {
    const column = ships[i];
    const boardColumn = document.createElement("div");
    boardColumn.classList.add("column");
    for (let j = 0; j < BOARD_SIZE; j++) {
      const wasShot = shots[i][j];

      const row = column[j];
      const boardRow = document.createElement("div");
      boardRow.classList.add("row");

      addRowVisualHelpers(row, boardRow, wasShot);

      if (newPlayer.type === "computer") {
        waitForClick(boardRow, shots, i, j);
      }

      boardColumn.appendChild(boardRow);
    }

    DOMBoard.appendChild(boardColumn);
  }

  return DOMBoard;
}

function createRestartButton() {
  const button = document.createElement("button");
  button.classList.add("secondary");
  button.textContent = "restart ⟲";
  button.addEventListener("click", restartGame);
  return button;
}

function waitForClick(boardRow, shots, i, j) {
  boardRow.addEventListener("click", () => {
    if (shots[i][j] === true) return;

    handlePlayerTurn(computer.board, i, j);
    if (player.board.allSunk()) {
      endGame(computer.type);
    }
    handleComputerTurn(player.board);
    if (computer.board.allSunk()) {
      endGame(player.type);
    }
    createGameDOM(player, computer);
  });
}

function addRowVisualHelpers(row, boardRow, wasShot) {
  if (row instanceof Ship) {
    boardRow.classList.add("ship");
    if (row.isSunk()) boardRow.classList.add("sunk");
  }
  wasShot === true && boardRow.classList.add("shot");
}
