const table = document.querySelector('.table');

function makeTable() {
  // Create Header
  table.innerHTML = '';

  const tableHeader = document.createElement('div');
  tableHeader.className = 'table-header';
  table.appendChild(tableHeader);

  const talbeHeaderCardWord = document.createElement('div');
  talbeHeaderCardWord.classList = 'card-word';
  talbeHeaderCardWord.textContent = 'Cards';
  tableHeader.appendChild(talbeHeaderCardWord);

  playerNames.forEach((name) => {
    const newName = document.createElement('div');
    newName.className = 'table-name';
    newName.textContent = name;
    tableHeader.appendChild(newName);
  });

  // Create New Row
  gameDataSet.forEach((roundData) => {
    // console.log(roundData);
    const newRow = document.createElement('div');
    newRow.className = 'table-row';
    table.appendChild(newRow);

    const cardData = document.createElement('div');
    cardData.className = 'cards-data';
    cardData.textContent = roundData[0];
    newRow.appendChild(cardData);

    roundData[1].forEach((playerDataSetTable) => {
      // console.log(playerDataSetTable);
      const tablePlayer = document.createElement('div');
      tablePlayer.className = 'player-data';
      newRow.appendChild(tablePlayer);

      playerDataSetTable.forEach((value) => {
        // console.log(value);
        const playerDataTable = document.createElement('div');
        playerDataTable.textContent = value;
        tablePlayer.appendChild(playerDataTable);
      });
    });
  });
}
