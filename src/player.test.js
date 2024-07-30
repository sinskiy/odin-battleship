import Gameboard from "./gameboard";
import Player from "./player";

test("Player creates correctly", () => {
  const emptyBoard = new Gameboard();

  const player = new Player("player");
  expect(player.type).toBe("player");
  expect(player.board).toStrictEqual(emptyBoard);
  const computer = new Player("computer");
  expect(computer.type).toBe("computer");
  expect(computer.board).toStrictEqual(emptyBoard);
});
