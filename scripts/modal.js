const newGameButton = document.querySelector('.new-game-button');
const newGameModal = document.querySelector('.new-game-modal');
const startGameButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');

newGameButton.addEventListener('click', () => {
  newGameModal.showModal();
});

startGameButton.addEventListener('click', () => {
  newGameModal.close();
});

cancelButton.addEventListener('click', () => {
  newGameModal.close();
});
