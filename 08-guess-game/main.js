let randomNumber = setRandomNumber();
let live = 5;

const form = document.getElementById('form-guess');

form.addEventListener('submit', e => {
  e.preventDefault();
  const guess = Number(document.getElementById('guess').value);
  const isValidGuess = isValid(guess);
  if (isValidGuess) {
    checkNumber(guess);
  }
});

function isValid(number) {
  const p = document.getElementById('not-in-range');
  const isValid = number < 0 || number > 100;

  p.innerText = isValid
    ? `${number} is not in range.
 Please input number between 1 and 100.`
    : ``;

  return !isValid;
}
function setRedClass(addRed, removeRed) {
  addRed.classList.add('red');
  removeRed.classList.remove('red');
}
function setRandomNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  return number;
}
function checkNumber(number) {
  const below = document.getElementById('below');
  const higher = document.getElementById('higher');
  const correct = document.getElementById('correct');
  const game = document.getElementById('game-result');

  if (number > randomNumber) {
    setRedClass(below, higher);
    countLives();
  } else if (number < randomNumber) {
    setRedClass(higher, below);
    countLives();
  } else {
    higher.classList.remove('red');
    below.classList.remove('red');
    correct.classList.add('green');
    document.getElementById('try').disabled = true;
    game.classList.add('green');
    game.innerText = `Good game!`;
    playAgain();
  }
}

function countLives() {
  const game = document.getElementById('game-result');
  const haveMoreLives = live > 1;

  decrementLives();
  if (!haveMoreLives) {
    document.getElementById('try').disabled = true;
    game.classList.remove('green');
    game.classList.add('red');
    game.innerText = `Game over!`;
    playAgain();
  }
}

function decrementLives() {
  const reds = document.getElementsByClassName('red');
  reds[live].classList.remove('red');
  live--;
}

function playAgain() {
  const div = document.createElement('div');
  const hint = document.getElementById('play-again');
  div.setAttribute('id', 'play-container');
  div.innerHTML = `<h4>Do you want to play again?</h4>
  <button id="yes">Yes</button>
  <button id="no">No</button>`;
  hint.appendChild(div);
  setGame();
}

function setGame() {
  const guessContainer = document.getElementById('guess-container');
  const gameContainer = document.getElementById('game-container');
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');
  const playContainer = document.getElementById('play-container');

  const below = document.getElementById('below');
  const higher = document.getElementById('higher');
  const correct = document.getElementById('correct');

  const reds = document.getElementsByClassName('fa-heart');

  yes.addEventListener('click', () => {
    randomNumber = setRandomNumber();
    live = 5;
    document.getElementById('guess').value = '';
    document.getElementById('game-result').innerText = '';
    document.getElementById('try').disabled = false;

    higher.classList.remove('red');
    below.classList.remove('red');
    correct.classList.remove('green');
    playContainer.remove();

    for (let i = 0; i < reds.length; i++) {
      reds[i].classList.add('red');
    }
  });

  no.addEventListener('click', () => {
    guessContainer.innerHTML = `<div class="thank-you green">
    <h3>Bye, hope you had fun! :)</h3></div>`;
    gameContainer.remove();
  });
}
