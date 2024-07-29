import Ship from "./ship";
import Gameboard from "./gameboard";

const gameboard = new Gameboard();
describe("Gameboard creates correctly", () => {
  test("Gameboard has no ships", () => {
    expect(gameboard.ships.flat().filter((x) => x)).toHaveLength(0);
  });
});
describe("Gameboard behaves correctly", () => {
  test("Gameboard has a  ship at the 0,0", () => {
    gameboard.place(0, 0, 4);
    const ship = new Ship(4);
    for (let i = 0; i < 4; i++) {
      expect(gameboard.ships[0][i]).toEqual(ship);
    }
    expect(gameboard.ships[0][5]).toBeUndefined();
    expect(gameboard.ships[1][0]).toBeUndefined();
  });
  test("Gameboard has a  ship at the 4,3", () => {
    const x = 4;
    const y = 3;
    const length = 2;

    gameboard.place(x, y, length, false);

    const ship = new Ship(length);
    for (let i = y; i < length; i++) {
      expect(gameboard.ships[i][x]).toEqual(ship);
    }
  });
});
