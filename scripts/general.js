const askMessage = document.querySelector('.ask-game');

let gameState = false;

const game = {
  start: () => {
    newGameButton.innerText = 'End Game';
    startGameButton.innerText = 'End';
    askMessage.innerText = 'End Game?';
    console.log('STARTED');
    lockInput();
    game.displayStats();
  },

  end: () => {
    newGameButton.innerText = 'New Game';
    startGameButton.innerText = 'Start';
    askMessage.innerText = 'New Game?';
    console.log('ENDED');
    randomizerBtn.disabled = false;
    unlockInput();
  },

  displayStats: () => {
    const dR = [dR1, dR2, dR3, dR4];
    const p = [p1, p2, p3, p4];
    const properties = ['name', 'score', 'bookingStreek', 'addedScore'];
    const propPrefix = ['', '', '', '+'];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        dR[i][properties[j]](propPrefix[j] + p[i][properties[j]]);
      }
    }
  },
};
