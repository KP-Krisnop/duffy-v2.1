function shufflePlayer(array) {
  const dir = Math.random() > 0.5;
  const shiftValue = Math.floor(Math.random() * 4);

  if (dir) {
    array = array.reverse();
  }

  for (let i = 0; i < shiftValue; i++) {
    const firstValue = array.shift();
    array.push(firstValue);
  }

  return array;
}

function emptyInput() {
  let isEmpty = false;
  goals.forEach((inputElement) => {
    if (inputElement.value.trim() === '') {
      isEmpty = true;
    }
  });
  results.forEach((inputElement) => {
    if (inputElement.value.trim() === '') {
      isEmpty = true;
    }
  });
  return isEmpty;
}

function validator() {
  let playerGoalCheck = [];
  let playerResultCheck = [];

  for (let i = 0; i < 4; i++) {
    playerGoalCheck.push(Number(goals[i].value));
    playerResultCheck.push(Number(results[i].value));
  }

  const intCheck = playerGoalCheck.every((goal) => Number.isInteger(goal));
  const goalSum =
    playerGoalCheck.reduce((a, c) => a + c, 0) === cardNumberGenerator();
  const resultSum =
    playerResultCheck.reduce((a, c) => a + c, 0) === cardNumberGenerator();

  return !intCheck || goalSum || !resultSum;
}

function calcScore() {
  playerData.forEach((dataObj) => {
    let addingScore = 0;

    if (dataObj.goal === dataObj.result) {
      addingScore = dataObj.result + 5;
      dataObj.bookStreek++;
    } else {
      addingScore = dataObj.result;
    }

    dataObj.score = dataObj.score + addingScore;
    dataObj.addedScore = addingScore;
  });
}

function addGameData() {
  let gameData = [];
  for (let i = 0; i < 4; i++) {
    gameData.push([
      playerData[i].goal,
      playerData[i].result,
      playerData[i].score,
    ]);
  }
  gameDataSet.push([cardNumberGenerator(), gameData]);
}

function rankComparator() {
  const scoreSet = playerData.map((player) => player.score);

  // Create an array of objects, where each object holds the original value and its index
  const indexedArr = scoreSet.map((value, index) => ({ value, index }));

  // Sort the array of objects in descending order based on the value property
  indexedArr.sort((a, b) => b.value - a.value);

  // Extract the sorted indices and put them in a new array
  const sortedIndices = indexedArr.map((item) => item.index);

  rankOrder = sortedIndices;
}

function cardWordGenerator() {
  if (roundNumber > 4) {
    return roundNumber - 3 + ' Cards';
  } else if (roundNumber <= 4) {
    return '1 Card';
  } else if (roundNumber === 0) {
    return 'Wins';
  }
}

function cardNumberGenerator() {
  if (roundNumber > 4) {
    return roundNumber - 3;
  } else if (roundNumber <= 4) {
    return 1;
  }
}

function winningPlayerWord() {
  const scoreSet = playerData.map((player) => player.score);

  // Find the maximum value in the array
  const max = Math.max(...scoreSet);

  // Find indices where the maximum value occurs
  const winningIndices = [];
  for (let i = 0; i < scoreSet.length; i++) {
    if (scoreSet[i] === max) {
      winningIndices.push(i);
    }
  }

  let winningPlayer = [];

  winningIndices.forEach((index) => {
    winningPlayer.push(playerNames[index]);
  });

  return winningPlayer;
}

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
