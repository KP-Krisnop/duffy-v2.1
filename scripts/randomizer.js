const ids = ['#name-1', '#name-2', '#name-3', '#name-4'];
let nameSet = [];
let nameSetObj = {};

const randomizerBtn = document.querySelector('.randomize-button');
const nameBox = document.querySelector('.name-box');

randomizerBtn.addEventListener('click', () => {
  nameSet = [];
  getInput();
  console.log(getInput());

  const hasEmptyString = nameSet.some(function (element) {
    return element == '';
  });

  if (hasEmptyString) {
    nameSet = [];
    flashClass('unsign');
  } else {
    randomizePlayer(nameSet);
    setInputValue();
    flashClass('randomized');
    console.log(nameSet);
  }
});

function getInput() {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    nameSet.push(input.value);
    nameSet.sort();
    input.value = '';
  });
}

function randomizePlayer(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function setInputValue() {
  for (let i = 0; i < nameSet.length; i++) {
    const name = nameSet[i];
    const output = document.querySelector(ids[i]);
    output.value = name;
  }
}

function flashClass(text) {
  nameBox.classList.add(text);
  setTimeout(() => {
    nameBox.classList.remove(text);
  }, 200);
}

// function getInput() {
//   if (localStorage.getItem('nameSetLS') == null) {
//     console.log('no LS');

//     ids.forEach((id) => {
//       const input = document.querySelector(id);
//       nameSet.push(input.value);
//       console.log('sorted', nameSet.sort());

//       nameSetObj = nameSet.reduce(function (result, value, index) {
//         result['player' + (index + 1)] = value;
//         return result;
//       }, {});

//       localStorage.setItem('nameSetLS', JSON.stringify(nameSetObj));
//     });
//   } else {
//     console.log('has LS');

//     nameSet = Object.values(JSON.parse(localStorage.getItem('nameSetLS')));
//   }
// }
