const table = document.querySelector('.table');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  // Create a new row
  const newRow = document.createElement('div');
  newRow.className = 'row';

  // Create new elements for the cells and assign values
  const cells = [
    { player: 'player-1', values: [3, 4, 5] },
    { player: 'player-2', values: [6, 7, 8] },
    { player: 'player-3', values: [9, 10, 11] },
    { player: 'player-4', values: [12, 13, 14] },
  ];

  const cardNumberDiv = document.createElement('div');
  cardNumberDiv.textContent = '12';
  cardNumberDiv.className = 'cards';
  newRow.appendChild(cardNumberDiv);

  cells.forEach(({ player, values }) => {
    const playerDiv = document.createElement('div');
    playerDiv.className = player;

    values.forEach((value) => {
      const p = document.createElement('p');
      p.textContent = value;
      playerDiv.appendChild(p);
    });

    newRow.appendChild(playerDiv);
  });

  table.appendChild(newRow);
});
