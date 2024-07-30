import createGame from "./createGame";
import Ship from "./ship";

export default function createGameDOM() {
  const { player1, player2 } = createGame();
  const board1 = boardToDOM(player1);
  const board2 = boardToDOM(player2);
  document.body.append(board1, board2);
}

function boardToDOM(player) {
  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board", player.type);
  for (const column of player.board.ships) {
    const boardColumn = document.createElement("div");
    boardColumn.classList.add("column");
    for (const row of column) {
      const boardRow = document.createElement("div");
      boardRow.classList.add("row", row instanceof Ship && "ship");

      boardColumn.appendChild(boardRow);
    }

    DOMBoard.appendChild(boardColumn);
  }

  return DOMBoard;
}
