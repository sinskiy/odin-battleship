import { SHIPS } from "./gameboardEvents";

export function createShipsDOM(ships) {
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("player", "ships-container");

  for (let i = 1; i < ships.length; i++) {
    let shipAmount = SHIPS[i] - ships[i];

    while (shipAmount > 0) {
      const shipContainer = document.createElement("div");
      shipContainer.classList.add("ship-container");
      for (let j = 0; j <= i; j++) {
        const ship = document.createElement("div");
        ship.classList.add("ship", "cell");
        shipContainer.appendChild(ship);
      }
      shipAmount--;
      shipsContainer.appendChild(shipContainer);
    }
  }

  return shipsContainer;
}
