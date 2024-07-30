import "./style.css";
import createGameDOM from "./createDOM";
import createGame from "./createGame";

const { player, computer } = createGame();
createGameDOM(player, computer);
