import Ship from "./ship";

const ship = new Ship(3);
describe("Ship creates correctly", () => {
  test("Ship has correct length", () => {
    expect(ship.length).toBe(3);
  });
  test("Ship has correct hits", () => {
    expect(ship.hits).toBe(0);
  });
});

describe("Ship behaves correctly", () => {
  test("Ship is not sunk when hits is 0 and length is 3", () => {
    expect(ship.isSunk()).toBe(false);
  });
  test("Ship is not sunk when hits is 2 and length is 3", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
  test("Ship is sunk when hits is 3 and length is 3", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
