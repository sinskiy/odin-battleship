import createGameDOM from "./createDOM";
import { SHIPS } from "./gameboardEvents";
import { placeSatisfies } from "./random";

export function createShipsDOM(board) {
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("player", "ships-container");

  for (let i = 1; i < board.placedShips.length; i++) {
    let shipAmount = SHIPS[i] - board.placedShips[i];

    while (shipAmount > 0) {
      const shipContainer = document.createElement("div");
      shipContainer.classList.add("ship-container");
      shipContainer.addEventListener("click", () => {
        waitForBoardClick(board, shipContainer.children.length);
      });
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

function waitForBoardClick(board, length) {
  const boardContainer = document.querySelector(".board.player");
  boardContainer.addEventListener(
    "click",
    (event) => {
      const parent = event.target.parentElement;
      const y = Array.from(parent.children).indexOf(event.target);

      const grandParent = parent.parentElement;
      const x = Array.from(grandParent.children).indexOf(parent);

      if (!placeSatisfies(board, x, y, length, true)) return;
      console.log(placeSatisfies(board, x, y));
      board.place(x, y, length);
      createGameDOM();
    },
    { once: true },
  );
}
