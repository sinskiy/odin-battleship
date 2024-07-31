import createGameDOM, { root } from "./createDOM";
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
        shipContainer.style.opacity = "0.8";
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

      const horizontal = root.dataset.horizontal === "true";

      if (!placeSatisfies(board, x, y, length, horizontal)) {
        waitForBoardClick(board, length);
        return;
      }
      board.place(x, y, length, horizontal);
      createGameDOM();
    },
    { once: true },
  );
}
