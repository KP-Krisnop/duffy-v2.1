const askMessage = document.querySelector('.ask-game');

let gameState = false;

const game = {
  start: () => {
    const dR = [dR1, dR2, dR3, dR4];
    const p = [p1, p2, p3, p4];
    const properties = ['name', 'score', 'bookingStreek', 'addedScore'];
    const value = ['player', '-', '0', '+0'];

    newGameButton.innerText = 'End Game';
    startGameButton.innerText = 'End';
    askMessage.innerText = 'End Game?';
    console.log('STARTED');
    lockInput();

    for (let i = 0; i < dR.length; i++) {
      for (let j = 0; j < properties.length; j++) {
        dR[i][properties[j]](value[j]);
      }
    }

    for (let i = 0; i < p.length; i++) {
      p[i].name = currentNames[i];
      dR[i].name(p[i].name);
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
