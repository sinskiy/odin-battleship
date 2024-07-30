import Player from "./player";

const player1 = new Player("player");
const player2 = new Player("computer");
player1.board.place(0, 0, 5);
player2.board.place(0, 0, 5);
player1.board.place(1, 0, 4);
player2.board.place(1, 0, 4);
player1.board.place(2, 0, 3);
player2.board.place(2, 0, 3);
