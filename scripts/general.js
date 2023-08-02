let gameState = false;

const game = {
  start: () => {
    newData();
    playerNames = shufflePlayer(playerNames);
    playerData.forEach((data, index) => {
      data.name = playerNames[index];
      goals[index].placeholder = playerNames[index];
      results[index].placeholder = playerNames[index];
    });
    gameState = true;
    game.displayData();
    window.addEventListener('beforeunload', handleBeforeUnload);
    gameButton.innerText = 'End Game';
  },
  end: () => {
    gameState = false;
    window.removeEventListener('beforeunload', handleBeforeUnload);
    gameButton.innerText = 'New Game';
  },
  displayData: () => {
    let k = 0;
    for (const i of rankOrder) {
      for (let j = 0; j < 4; j++) {
        rankProperties[j][k].innerText =
          displayPrefix[j] + playerData[i][properties[j]];
      }
      k++;
    }

    if (roundNumber !== 0) {
      playerTurnIndex = 3 - ((roundNumber - 1) % 4);
    }

    turmpIcon.src = trumpOrder[playerTurnIndex];
    playerTurn.innerText = playerNames[playerTurnIndex];
    cardsNumber.innerText = cardWordGenerator();

    makeTable();
  },
  continue: () => {
    if (!gameState) {
      flashError(0);
      setInterval();
    } else if (emptyInput()) {
      flashError(1);
    } else {
      for (let i = 0; i < playerData.length; i++) {
        const data = playerData[i];
        data.goal = Number(goals[i].value);
        data.result = Number(results[i].value);
        goals[i].value = '';
        results[i].value = '';
      }

      calcScore();
      rankComparator();
      addGameData();
      roundNumber--;
      game.displayData();
      if (roundNumber === 0) {
        game.win();
      }
    }

    goals[0].focus();
  },
  win: () => {
    winningPlayer.innerText = winningPlayerWord().join(' ');
    playerTurn.innerText = winningPlayerWord().join(' ');

    if (winningPlayerWord().length > 1) {
      winMessage.innerText = 'The winner are';
    } else if (winningPlayerWord().length === 1) {
      winMessage.innerText = 'The winner is';
    }

    cardsNumber.innerText = 'Wins';
    gameState = false;
    winModal.showModal();
    game.end();
  },
};

// Shortcut

const keysPressed = new Set();

document.addEventListener('keydown', (event) => {
  keysPressed.add(event.key);
  checkKeyCombination();
});

document.addEventListener('keyup', (event) => {
  keysPressed.delete(event.key);
});

function checkKeyCombination() {
  if (keysPressed.has('Alt') && keysPressed.has('q')) {
    game.continue();
  }
}

// Reload and close protection

function handleBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave?';
}

function flashError(index) {
  errorMessage[index].setAttribute('id', 'on');
  setTimeout(() => {
    errorMessage[index].setAttribute('id', '');
  }, 2000);
}
