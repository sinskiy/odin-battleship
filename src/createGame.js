import Player from "./player";

export default function createGame() {
  const player1 = new Player("player");
  const player2 = new Player("computer");
  player1.board.place(0, 0, 5);
  player2.board.place(0, 0, 5);
  player1.board.place(0, 1, 4);
  player2.board.place(0, 1, 4);
  player1.board.place(0, 2, 3);
  player2.board.place(0, 2, 3);
  player1.board.place(0, 3, 2);
  player2.board.place(0, 3, 2);
  return { player1, player2 };
}
