export function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
}

export function handleComputerTurn(board) {
  const random = () => Math.floor(Math.random() * 10);
  const randomX = random();
  const randomY = random();

  if (board.shots[randomX][randomY] === true) {
    handleComputerTurn(board);
    return;
  }

  board.receiveAttack(randomX, randomY);
}
