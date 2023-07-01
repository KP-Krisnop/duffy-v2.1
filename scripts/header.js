const openModalButton = document.querySelector('#open-new-game-modal');
const closeModalButton = document.querySelector('#close-new-game-modal');
const newGameModal = document.querySelector('#new-game-modal');

openModalButton.addEventListener('click', () => {
  newGameModal.showModal()
})

closeModalButton.addEventListener('click', () => {
  newGameModal.close()
})