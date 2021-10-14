const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const right = document.getElementById('right-arrow');

function trafficLight() {
  setTimeout(() => {
    green.classList.add('opacity-1');
  }, 1000);
  setTimeout(() => {
    green.classList.remove('opacity-1');
    green.classList.add('opacity-03');
  }, 2000);
  setTimeout(() => {
    green.classList.remove('opacity-03');
    green.classList.add('opacity-1');
  }, 3000);
  setTimeout(() => {
    green.classList.remove('opacity-1');
    green.classList.add('opacity-03');
  }, 4000);
  setTimeout(() => {
    green.classList.remove('opacity-03');
    green.classList.add('opacity-1');
  }, 5000);
  setTimeout(() => {
    green.classList.remove('opacity-1');
    green.classList.add('opacity-03');
    yellow.classList.add('opacity-1');
  }, 6000);
  setTimeout(() => {
    yellow.classList.remove('opacity-1');
    yellow.classList.add('opacity-03');
    red.classList.add('opacity-1');
    right.classList.add('opacity-1');
  }, 8000);
  setTimeout(() => {
    yellow.classList.add('opacity-1');
  }, 12000);
  setTimeout(() => {
    yellow.classList.remove('opacity-1');
    yellow.classList.add('opacity-03');
    red.classList.remove('opacity-1');
    red.classList.add('opacity-03');
    right.classList.remove('opacity-1');
    right.classList.add('opacity-02');
    green.classList.remove('opacity-03');
    green.classList.add('opacity-1');
  }, 14000);
}

trafficLight();

setInterval(() => {
  trafficLight();
}, 15000);
