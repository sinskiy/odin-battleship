import { BOARD_SIZE } from "./gameboard";
import {
  handlePlayerTurn,
  handleComputerTurn,
  endGame,
} from "./gameboardEvents";
import Ship from "./ship";

let player, computer;
export default function createGameDOM(playerPassed, computerPassed) {
  document.body.innerHTML = "";

  player = playerPassed;
  computer = computerPassed;

  const board1 = boardToDOM(player);
  const board2 = boardToDOM(computer);
  document.body.append(board1, board2);
}

function boardToDOM(newPlayer) {
  if (newPlayer.board.allSunk()) {
    endGame(newPlayer.type);
  }

  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board", newPlayer.type);

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

function waitForClick(boardRow, shots, i, j) {
  boardRow.addEventListener("click", () => {
    if (shots[i][j] === true) return;

    handlePlayerTurn(computer.board, i, j);
    handleComputerTurn(player.board);
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
