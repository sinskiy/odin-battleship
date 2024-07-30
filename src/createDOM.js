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
  console.log(playerPassed, computerPassed);
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
      const row = column[j];
      const boardRow = document.createElement("div");
      boardRow.classList.add("row");

      if (row instanceof Ship) {
        boardRow.classList.add("ship");
        if (row.isSunk()) boardRow.classList.add("sunk");
      }
      shots[i][j] === true && boardRow.classList.add("shot");

      if (newPlayer.type === "computer") {
        boardRow.addEventListener("click", () => {
          const wasShot = shots[i][j];
          if (wasShot) return;

          handlePlayerTurn(computer.board, i, j);
          handleComputerTurn(player.board);
          createGameDOM(player, computer);
        });
      }

      boardColumn.appendChild(boardRow);
    }

    DOMBoard.appendChild(boardColumn);
  }

  return DOMBoard;
}
