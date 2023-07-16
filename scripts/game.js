const continueButton = document.querySelector('.round-container');
let goal = {};
let score = {};

continueButton.addEventListener('click', () => {
  goal = {
    p1: document.querySelector('.player1-goal').value,
    p2: document.querySelector('.player2-goal').value,
    p3: document.querySelector('.player3-goal').value,
    p4: document.querySelector('.player4-goal').value,
  };
  score = {
    p1: document.querySelector('.player1-score').value,
    p2: document.querySelector('.player2-score').value,
    p3: document.querySelector('.player3-score').value,
    p4: document.querySelector('.player4-score').value,
  };
  console.log(goal);
  console.log(score);
});
