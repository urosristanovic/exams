import { pointsHandler } from './modules/points.js';

const chuck = document.getElementById('chuck-points');
chuck.addEventListener('click', () => {
  const chuckPoints = document.getElementById('show-result-chuck');
  pointsHandler(chuckPoints);
});

const bruce = document.getElementById('bruce-points');
bruce.addEventListener('click', () => {
  const brucePoints = document.getElementById('show-result-bruce');
  pointsHandler(brucePoints);
});

const fight = document.getElementById('fight-btn');
fight.addEventListener('click', async () => {
  const bruce = document.getElementById('bruce-health');
  const chuckResult = document.getElementById('show-result-chuck').innerText;

  const result = bruce.innerText - chuckResult;
  if (result <= 0) {
    bruce.innerText = 0;
    document.getElementById('winner').style.display = 'block';
    document.getElementById('quote').style.display = 'block';
    document.getElementById('p-winner').style.display = 'none';

    const randomJoke = await fetch('http://api.icndb.com/jokes/random');
    const joke = await randomJoke.json();

    document.getElementById('text').innerText = joke.value.joke;
  } else {
    bruce.innerText = result;
    bruce.style.color = 'red';
  }

  document.getElementById('show-result-chuck').innerText = '?';
  document.getElementById('show-result-bruce').innerText = '?';
});
