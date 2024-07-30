export function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
}

export function handleComputerTurn(board) {
  const random = () => Math.floor(Math.random() * 10);
  const randomX = random();
  const randomY = random();
  board.receiveAttack(randomX, randomY);
}
