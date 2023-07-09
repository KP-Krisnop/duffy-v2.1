const askMessage = document.querySelector('.ask-game');

let gameState = false;

const game = {
  start: () => {
    newGameButton.innerText = 'End Game';
    startGameButton.innerText = 'End';
    askMessage.innerText = 'End Game?';
    console.log('STARTED');
    lockInput();

    const dR = [dR1, dR2, dR3, dR4];
    const properties = ['name', 'score', 'bookingStreek', 'addedScore'];
    const value = ['player', '-', '0', '+0'];

    for (let i = 0; i < dR.length; i++) {
      for (let j = 0; j < properties.length; j++) {
        dR[i][properties[j]](value[j]);
      }
    }
  },
  end: () => {
    newGameButton.innerText = 'New Game';
    startGameButton.innerText = 'Start';
    askMessage.innerText = 'New Game?';
    console.log('ENDED');
    randomizerBtn.disabled = false;
    unlockInput();
  },
};
