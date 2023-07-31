const newGameButton = document.querySelector('.new-game-button');
const newGameModal = document.querySelector('.new-game-modal');
const startGameButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
const continueButton = document.querySelector('.continue-button');
const playerNamesInput = document.querySelectorAll('.player-name');

let playerNames = [];

newGameButton.addEventListener('click', () => {
  newGameModal.showModal();
});

startGameButton.addEventListener('click', () => {
  if (!collectPlayerName()) {
    newGameModal.close();
    newGameButton.innerText = 'End Game';
    game.start();
  }
});

cancelButton.addEventListener('click', () => {
  newGameModal.close();
});

continueButton.addEventListener('click', () => {
  game.continue();
});

function collectPlayerName() {
  playerNamesInput.forEach((name, index) => {
    playerNames[index] = name.value;
  });

  console.log(playerNames);

  localStorage.setItem('playerNames', JSON.stringify(playerNames));
  return playerNames.some((e) => e === '');
}
