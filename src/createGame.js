import Player from "./player";

export default function createGame() {
  const player = new Player("player");
  const computer = new Player("computer");
  player.board.place(0, 0, 1);
  computer.board.place(0, 0, 1);
  return { player, computer };
}
