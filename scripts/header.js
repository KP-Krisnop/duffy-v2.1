const openModalBtn = document.querySelectorAll('[data-modal-target]');
const cancelNewGameModalBtn = document.querySelectorAll('[data-cancel-button]');
const overlay = document.getElementById('overlay');

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

cancelNewGameModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('.new-game-modal');
    closeNewGameModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeNewGameModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
