const createDR = (rank) => ({
  name: (name) => {
    document.querySelector(`.rank${rank}-name`).innerText = name;
  },
  score: (score) => {
    document.querySelector(`.rank${rank}-total-score`).innerText = score;
  },
  bookingStreek: (bookingStreek) => {
    document.querySelector(`.rank${rank}-booking-streek`).innerText =
      bookingStreek;
  },
  addedScore: (addedScore) => {
    document.querySelector(`.rank${rank}-added-score`).innerText = addedScore;
  },
});

let dR1 = createDR(1);
let dR2 = createDR(2);
let dR3 = createDR(3);
let dR4 = createDR(4);
