const rankNames = document.querySelectorAll('.name');
const rankScore = document.querySelectorAll('.score');
const rankAddedScore = document.querySelectorAll('.added-score');
const rankBookStreek = document.querySelectorAll('.book-streek');

const playerTurn = document.querySelector('.player-turn');
const cardsNumber = document.querySelector('.cards-number');
const turmpIcon = document.querySelector('.trump-icon');
const constrainName = document.querySelector('.constrainer');
const goals = document.querySelectorAll('.goals');
const results = document.querySelectorAll('.results');
const winMessage = document.querySelector('.win-message');
const errorMessage = document.querySelectorAll('.error-message');

const properties = ['name', 'score', 'addedScore', 'bookStreek'];
const rankProperties = [rankNames, rankScore, rankAddedScore, rankBookStreek];
const displayPrefix = ['', '', '+', ''];
const trumpOrder = [
  'icons/spade.svg',
  'icons/heart.svg',
  'icons/diamond.svg',
  'icons/club.svg',
];

let constrainNumber = 0;
let roundNumber = 16;
let currentPlayer = '';
let rankOrder = [];
let gameDataSet = [];
let playerData = [];

newData();

function newData() {
  roundNumber = roundSelector.value;
  currentPlayer = '';
  rankOrder = [0, 1, 2, 3];
  gameDataSet = [];
  playerData = [
    {
      name: 'Player 1',
      score: 0,
      addedScore: 0,
      bookStreek: 0,
      goal: 0,
      result: 0,
    },
    {
      name: 'Player 2',
      score: 0,
      addedScore: 0,
      bookStreek: 0,
      goal: 0,
      result: 0,
    },
    {
      name: 'Player 3',
      score: 0,
      addedScore: 0,
      bookStreek: 0,
      goal: 0,
      result: 0,
    },
    {
      name: 'Player 4',
      score: 0,
      addedScore: 0,
      bookStreek: 0,
      goal: 0,
      result: 0,
    },
  ];
}

goals.forEach((goal) => {
  goal.addEventListener('input', () => {
    game.constrain();
  });
});
