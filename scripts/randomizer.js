const ids = ['#name-1', '#name-2', '#name-3', '#name-4'];
let nameSet = [];

const randomizerBtn = document.querySelector('.randomize-button');
const nameBox = document.querySelector('.name-box');

randomizerBtn.addEventListener('click', () => {
  nameSet = [];
  getInput(nameSet);

  console.log('clicked');

  if (forAllMT(nameSet)) {
    console.log('all empty');

    if (localStorage.getItem('playerSet') === null) {
      console.log('no playerSet');

      if (forSomeMT(nameSet)) {
        flashClass('unsign');
      } else {
        randomizePlayer(nameSet);
        setInputValue(nameSet);
        flashClass('randomized');
        console.log(nameSet);
      }
    } else if (localStorage.getItem('playerSet') !== null) {
      console.log('has playerSet');

      nameSet = JSON.parse(localStorage.getItem('playerSet'));
      randomizePlayer(nameSet);
      setInputValue(nameSet);
      flashClass('randomized');
    }
  } else if (forSomeMT(nameSet)) {
    flashClass('unsign');
  } else {
    randomizePlayer(nameSet);
    setInputValue(nameSet);
    flashClass('randomized');
    console.log(nameSet);
  }
});

function getInput(array) {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    array.push(input.value);
  });
  console.log(array);
}

function randomizePlayer(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setInputValue(array) {
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const output = document.querySelector(ids[i]);
    output.value = name;
  }
  array = array.sort();
  localStorage.setItem('playerSet', JSON.stringify(array));
}

function flashClass(text) {
  nameBox.classList.add(text);
  setTimeout(() => {
    nameBox.classList.remove(text);
  }, 200);
}

function mTString(array) {
  array.some(function (element) {
    return element == '';
  });
}

function forSomeMT(array) {
  let status = false;
  array.some(function (element) {
    if (element === '') {
      status = true;
    }
  });
  return status;
}

function forAllMT(array) {
  let status = false;
  array.every((element) => {
    if (element == '') {
      status = true;
    }
  });
  return status;
}
