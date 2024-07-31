import { randomize } from "./gameboardEvents";
import Player from "./player";

export default function createGame() {
  const player = new Player("player");
  const computer = new Player("computer");
  randomize(player.board);
  player.board.place(0, 0, 2);
  randomize(computer.board);
  return { player, computer };
}
