import { BOARD_SIZE } from "./gameboard";
import {
  handlePlayerTurn,
  handleComputerTurn,
  endGame,
  restartGame,
} from "./gameboardEvents";
import Ship from "./ship";
import { createShipsDOM } from "./shipsDOM";

export const root = document.querySelector("#root");

let player, computer;
export default function createGameDOM(playerPassed, computerPassed) {
  root.innerHTML = "";

  player = playerPassed;
  computer = computerPassed;

  const ships = createShipsDOM();

  const boards = document.createElement("div");
  boards.classList.add("boards");

  const board1 = boardToDOM(player);
  const board2 = boardToDOM(computer);
  boards.append(board1, board2);

  const restartButton = createRestartButton();

  root.append(ships, boards, restartButton);
}

function boardToDOM(newPlayer) {
  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board", newPlayer.type);

  const { ships, shots } = newPlayer.board;
  for (let i = 0; i < BOARD_SIZE; i++) {
    const column = ships[i];
    const boardColumn = document.createElement("div");
    boardColumn.classList.add("column");
    for (let j = 0; j < BOARD_SIZE; j++) {
      const wasShot = shots[i][j];

      const cell = column[j];
      const boardCell = document.createElement("div");
      boardCell.classList.add("cell");

      addRowVisualHelpers(cell, boardCell, wasShot);

      if (newPlayer.type === "computer") {
        waitForClick(boardCell, shots, i, j);
      }

      boardColumn.appendChild(boardCell);
    }

    DOMBoard.appendChild(boardColumn);
  }
  if (newPlayer.board.allSunk()) {
    endGame(newPlayer.type);
  }

  return DOMBoard;
}

function createRestartButton() {
  const button = document.createElement("button");
  button.classList.add("secondary");
  button.textContent = "randomize ⟲";
  button.addEventListener("click", restartGame);
  return button;
}

function waitForClick(boardCell, shots, i, j) {
  boardCell.addEventListener("click", () => {
    if (shots[i][j] === true) return;

    handlePlayerTurn(computer.board, i, j);
    handleComputerTurn(player.board);
    createGameDOM(player, computer);
  });
}

function addRowVisualHelpers(cell, boardCell, wasShot) {
  if (cell instanceof Ship) {
    boardCell.classList.add("ship");
    if (cell.isSunk()) boardCell.classList.add("sunk");
  }
  wasShot === true && boardCell.classList.add("shot");
}
