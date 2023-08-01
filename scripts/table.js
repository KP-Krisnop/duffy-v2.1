const table = document.querySelector('.table');

function makeTable() {
  // Create Header
  table.innerHTML = '';

  // Create a container for the header
  const tableHeader = document.createElement('div');
  tableHeader.className = 'table-header';
  table.appendChild(tableHeader);

  // Create the word 'Cards' in the header
  const talbeHeaderCardWord = document.createElement('div');
  talbeHeaderCardWord.classList = 'card-word';
  talbeHeaderCardWord.textContent = 'Cards';
  tableHeader.appendChild(talbeHeaderCardWord);

  // Create player names
  playerNames.forEach((name) => {
    const newName = document.createElement('div');
    newName.className = 'table-name';
    newName.textContent = name;
    tableHeader.appendChild(newName);
  });

  // Make table content
  gameDataSet.forEach((roundData) => {
    // Create new Row
    const newRow = document.createElement('div');
    newRow.className = 'table-row';
    table.appendChild(newRow);

    // Create cards data
    const cardData = document.createElement('div');
    cardData.className = 'cards-data';
    cardData.textContent = roundData[0];
    newRow.appendChild(cardData);

    // Make data content
    roundData[1].forEach((playerDataSetTable) => {
      // Create player data
      const tablePlayer = document.createElement('div');
      tablePlayer.className = 'player-data';
      newRow.appendChild(tablePlayer);

      // Create div with every value
      playerDataSetTable.forEach((value) => {
        const playerDataTable = document.createElement('div');
        playerDataTable.textContent = value;
        tablePlayer.appendChild(playerDataTable);
      });
    });
  });
}
