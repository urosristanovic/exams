let randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 5;

console.log(randomNumber);

const form = document.getElementById('form-guess');
form.addEventListener('submit', e => {
  e.preventDefault();
  const guess = Number(document.getElementById('guess').value);
  const isValidGuess = isValid(guess);

  if (isValidGuess) {
    guessesList(guess);
    checkNumber(guess, randomNumber);
    lives--;
  }
  console.log(randomNumber);
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
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  li.innerHTML = `<em class='green'>${guess}</em>`;
  ol.appendChild(li);
}
function checkNumber(number, randomNumber) {
  if (number > randomNumber) {
    document.getElementById('below').style.color = 'red';
    document.getElementById('higher').style.color = 'white';
    countLives(lives);
  } else if (number < randomNumber) {
    document.getElementById('below').style.color = 'white';
    document.getElementById('higher').style.color = 'red';
    countLives(lives);
  } else {
    document.getElementById('try').disabled = true;
    document.getElementById('good-game').style.display = 'block';
    document.getElementById('below').style.color = 'white';
    document.getElementById('higher').style.color = 'white';
    document.getElementById('correct').style.color = 'rgb(37, 255, 37)';
    playAgain();
  }
}
function resetGame() {
  const hearts = document.getElementsByClassName('fa-heart');

  document.getElementById('play-again').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('random-number').style.display = 'none';
  document.getElementById('list-guesses').innerHTML = '';
  document.getElementById('below').style.color = 'white';
  document.getElementById('higher').style.color = 'white';
  document.getElementById('try').disabled = false;
  document.getElementById('guess').value = '';
  document.getElementById('good-game').style.display = 'none';
  document.getElementById('correct').style.color = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
  lives = 5;

  for (let i = 0; i < hearts.length; i++) {
    hearts[i].classList.add('heart');
  }
}
function countLives(lives) {
  const hearts = document.getElementsByClassName('heart');
  const haveMoreLives = lives > 1;

  hearts[lives - 1].classList.remove('heart');
  if (!haveMoreLives) {
    document.getElementById('try').disabled = true;
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('random-number').style.display = 'block';
    document.getElementById(
      'random-number'
    ).innerText = `Random number was ${randomNumber}.`;
    playAgain();
  }
}

function playAgain() {
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');

  document.getElementById('play-again').style.display = 'block';

  yes.addEventListener('click', () => {
    resetGame();
  });
  no.addEventListener('click', () => {
    document.getElementById('guess-container').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
    resetGame();
  });
}
