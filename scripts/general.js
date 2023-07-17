const askMessage = document.querySelector('.ask-game');

let gameState = false;
let roundCount = 16;

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
    const displayOrder = [p1, p2, p3, p4];
    const properties = ['name', 'score', 'bookingStreek', 'addedScore'];
    const propPrefix = ['', '', '', '+'];

    const rankingScore = [
      [p1, p1.score],
      [p2, p2.score],
      [p3, p3.score],
      [p4, p4.score],
    ];

    rankingScore.sort((a, b) => a[1] - b[1]).reverse();

    for (let i = 0; i < rankingScore.length; i++) {
      const element = rankingScore[i][0];

      displayOrder[i] = element;
    }

    // console.log('Rank Names', displayOrder);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        dR[i][properties[j]](propPrefix[j] + displayOrder[i][properties[j]]);
      }
    }
  },
};
