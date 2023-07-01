const ids = ['#name-1', '#name-2', '#name-3', '#name-4'];
let nameSet = [];

const randomizerBtn = document.querySelector('.randomize-button');
const nameBox = document.querySelector('.name-box');

randomizerBtn.addEventListener('click', () => {
  //   console.log('clicked');
  nameSet = [];

  const hasEmptyString = nameSet.some(function (element) {
    return element === '';
  });

  if (hasEmptyString) {
    nameSet = [];
    nameBox.classList.add('unsign');
    setTimeout(() => {
      nameBox.classList.remove('unsign');
    }, 200);
  } else {
    getInput();
    randomizePlayer(nameSet);
    setInputValue();

    console.log(nameSet);

    if (nameSet.length) {
      nameBox.classList.add('randomized');
      setTimeout(() => {
        nameBox.classList.remove('randomized');
      }, 200);
    }
  }
});

function getInput() {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    nameSet.push(input.value);
    input.value = '';
  });
  //   console.log(nameSet);
}

function randomizePlayer(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  //   console.log(array);
  return array;
}

function setInputValue() {
  for (let i = 0; i < nameSet.length; i++) {
    const name = nameSet[i];
    const output = document.querySelector(ids[i]);
    output.value = name;
  }
}
