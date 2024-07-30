import Player from "./player";

export default function createGame() {
  const player = new Player("player");
  const computer = new Player("computer");
  player.board.place(0, 0, 5);
  computer.board.place(0, 0, 5);
  player.board.place(0, 1, 4);
  computer.board.place(0, 1, 4);
  player.board.place(0, 2, 3);
  computer.board.place(0, 2, 3);
  player.board.place(0, 3, 2);
  computer.board.place(0, 3, 2);
  return { player, computer };
}
