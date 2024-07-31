import { randomize } from "./random";
import Player from "./player";

export default function createGame() {
  const player = new Player("player");
  const computer = new Player("computer");
  randomize(computer.board);
  return { player, computer };
}
