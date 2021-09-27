let randomNumber = setRandomNumber();
let attempt = 5;

const check = document.getElementById('form-guess');

check.addEventListener('submit', e => {
  e.preventDefault();
  const guess = Number(document.getElementById('guess').value);
  const check = isValid(guess);

  if (check) {
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
    checkAttempts();
    attempt--;
  } else if (number < randomNumber) {
    setRedClass(higher, below);
    checkAttempts();
    attempt--;
  } else {
    higher.classList.remove('red');
    below.classList.remove('red');
    correct.classList.add('green');
    game.innerText = `Good game!`;
    game.classList.add('green');
    playAgainBtns();
  }
}

function checkAttempts() {
  const game = document.getElementById('game-result');
  const reds = document.getElementsByClassName('red');
  const attempts = attempt > 1;

  reds[attempt].classList.remove('red');

  if (!attempts) {
    game.innerText = `Game over!`;
    game.classList.add('red');
    playAgainBtns();
  }
  return attempts;
}

function playAgainBtns() {
  const div = document.createElement('div');
  const hint = document.getElementById('play-again');
  div.setAttribute('id', 'play-container');
  div.innerHTML = `<h4>Do you want to play again?</h4>
  <button id="yes">Yes</button>
  <button id="no">No</button>`;
  hint.appendChild(div);
  playAgain();
}

function playAgain() {
  const hint = document.getElementById('guess-container');
  const realHint = document.getElementById('hint');
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');
  const playContainer = document.getElementById('play-container');

  const below = document.getElementById('below');
  const higher = document.getElementById('higher');
  const correct = document.getElementById('correct');

  const reds = document.getElementsByClassName('fa-heart');

  yes.addEventListener('click', () => {
    randomNumber = setRandomNumber();
    attempt = 5;
    document.getElementById('guess').value = '';
    document.getElementById('game-result').innerText = '';
    higher.classList.remove('red');
    below.classList.remove('red');
    correct.classList.remove('green');
    playContainer.remove();

    for (let i = 0; i < reds.length; i++) {
      reds[i].classList.add('red');
    }
  });

  no.addEventListener('click', () => {
    hint.innerHTML = `<div class="thank-you green"><h3>Bye, hope you had fun! :)</h3></div>`;
    realHint.remove();
  });
}
