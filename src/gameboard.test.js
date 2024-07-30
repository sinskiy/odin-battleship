import Ship from "./ship";
import Gameboard from "./gameboard";

const gameboard = new Gameboard();
describe("Gameboard creates correctly", () => {
  test("Gameboard has no ships", () => {
    expect(gameboard.ships.flat().filter((x) => x)).toHaveLength(0);
    expect(gameboard.placedShips).toBe(0);
    expect(gameboard.sankShips).toBe(0);
  });
});
describe("Gameboard behaves correctly", () => {
  test("Gameboard has a  ship at the 0,0", () => {
    gameboard.place(0, 0, 4);
    const ship = new Ship(4);
    for (let i = 0; i < 4; i++) {
      expect(gameboard.ships[i][0]).toEqual(ship);
    }

    expect(gameboard.placedShips).toBe(1);
    expect(gameboard.sankShips).toBe(0);

    expect(gameboard.ships[5][0]).toBeUndefined();
    expect(gameboard.ships[0][1]).toBeUndefined();
  });
  test("Gameboard has a ship at the 4,3 and a ship at the 0,0", () => {
    const x = 4;
    const y = 3;
    const length = 2;

    gameboard.place(x, y, length, false);

    const ship = new Ship(length);
    for (let i = y; i < length; i++) {
      expect(gameboard.ships[x][i]).toEqual(ship);
    }

    expect(gameboard.placedShips).toBe(2);
    expect(gameboard.sankShips).toBe(0);

    expect(gameboard.ships.flat().filter((x) => x)).toHaveLength(6);
  });
  test("Gameboard receives hits correctly", () => {
    gameboard.receiveAttack(4, 3);
    expect(gameboard.ships[4][3].hits).toBe(1);
    expect(gameboard.ships[4][4].hits).toBe(1);
    expect(gameboard.ships[0][0].hits).toBe(0);
    expect(gameboard.shots[4][3]).toBe(true);

    expect(gameboard.placedShips).toBe(2);
    expect(gameboard.sankShips).toBe(0);

    expect(gameboard.allSunk()).toBe(false);
  });
  test("Gameboard sanks correctly", () => {
    gameboard.receiveAttack(4, 4);
    expect(gameboard.ships[4][3].hits).toBe(2);
    expect(gameboard.ships[4][4].hits).toBe(2);
    expect(gameboard.ships[4][3].isSunk()).toBe(true);
    expect(gameboard.ships[0][0].hits).toBe(0);
    expect(gameboard.shots[4][4]).toBe(true);

    expect(gameboard.placedShips).toBe(2);
    expect(gameboard.sankShips).toBe(1);

    expect(gameboard.allSunk()).toBe(false);
  });
  test("Gameboard determines if all ships sunk correctly", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.ships[0][0].hits).toBe(1);
    gameboard.receiveAttack(1, 0);
    expect(gameboard.ships[0][0].hits).toBe(2);
    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(3, 0);
    expect(gameboard.ships[0][0].hits).toBe(4);
    expect(gameboard.ships[0][0].isSunk()).toBe(true);

    expect(gameboard.sankShips).toBe(2);

    expect(gameboard.allSunk()).toBe(true);
  });
});
