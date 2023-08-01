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
  },
  end: () => {
    gameState = false;
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
    if (emptyInput() || !gameState) {
      console.log('not ready yet');
    } else {
      for (let i = 0; i < playerData.length; i++) {
        const data = playerData[i];
        data.goal = Number(goals[i].value);
        data.result = Number(results[i].value);
        goals[i].value = '';
        results[i].value = '';
      }
      roundNumber--;

      calcScore();
      rankComparator();
      addGameData();
      game.displayData();
      if (roundNumber === 0) {
        game.win();
      }
    }
  },
  win: () => {
    winningPlayer.innerText = playerData[rankOrder[0]].name;
    playerTurn.innerText = playerData[rankOrder[0]].name;
    cardsNumber.innerText = 'Wins';
    winModal.showModal();
    gameState = false;
  },
};
