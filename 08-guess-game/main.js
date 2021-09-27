setRandomNumber();

const form = document.getElementById('form-guess');

form.addEventListener('submit', e => {
  e.preventDefault();
  const guess = Number(document.getElementById('guess').value);
  const randomNumber = document.getElementById('random').value;
  const isValidGuess = isValid(guess);

  if (isValidGuess) {
    guessesList(guess);
    checkNumber(guess, randomNumber);
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
function guessesList(guess) {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    if (list[i].innerText != guess) {
      console.log('damn');
    }
  }
  const ol = document.querySelector('ol');
  const li = createListItem(guess);
  li.setAttribute('id', 'list-item');
  ol.appendChild(li);
}
function createListItem(value) {
  const li = document.createElement('li');
  const em = document.createElement('em');
  em.textContent = value;
  li.appendChild(em);
  return li;
}
function setRedClass(addRed, removeRed) {
  addRed.classList.add('red');
  removeRed.classList.remove('red');
}
function setRandomNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  document.getElementById('random').value = number;
  console.log(number);
}
function checkNumber(number, randomNumber) {
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
  const lives = document.getElementById('counter').value;
  const haveMoreLives = lives > 1;

  decrementLives(lives);
  if (!haveMoreLives) {
    document.getElementById('try').disabled = true;
    game.classList.remove('green');
    game.classList.add('red');
    game.innerText = `Game over!`;
    playAgain();
  }
}

function decrementLives(lives) {
  const reds = document.getElementsByClassName('red');
  reds[lives].classList.remove('red');
  document.getElementById('counter').value--;
}

function playAgain() {
  const hint = document.getElementById('play-again');
  const div = document.createElement('div');
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

  const hearts = document.getElementsByClassName('fa-heart');

  yes.addEventListener('click', () => {
    document.getElementById('guess').value = '';
    document.getElementById('counter').value = 5;
    document.getElementById('game-result').innerText = '';
    document.getElementById('try').disabled = false;
    document.getElementById('list-guesses').innerHTML = '';

    setRandomNumber();

    higher.classList.remove('red');
    below.classList.remove('red');
    correct.classList.remove('green');
    playContainer.remove();

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].classList.add('red');
    }
  });

  no.addEventListener('click', () => {
    document.getElementById('list-guesses').innerHTML = '';
    guessContainer.innerHTML = `<div class="thank-you green">
    <h3>Bye, hope you had fun! :)</h3></div>`;
    gameContainer.remove();
  });
}
