const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

function trafficLight() {
  setTimeout(() => {
    green.style.opacity = 1;
  }, 1000);
  setTimeout(() => {
    green.style.opacity = 0.3;
  }, 2000);
  setTimeout(() => {
    green.style.opacity = 1;
  }, 3000);
  setTimeout(() => {
    green.style.opacity = 0.3;
  }, 4000);
  setTimeout(() => {
    green.style.opacity = 1;
  }, 5000);
  setTimeout(() => {
    green.style.opacity = 0.3;
    yellow.style.opacity = 1;
  }, 6000);
  setTimeout(() => {
    yellow.style.opacity = 0.3;
    red.style.opacity = 1;
  }, 8000);
  setTimeout(() => {
    yellow.style.opacity = 1;
  }, 12000);
  setTimeout(() => {
    yellow.style.opacity = 0.3;
    red.style.opacity = 0.3;
    green.style.opacity = 1;
  }, 14000);
}

trafficLight();

setInterval(() => {
  trafficLight();
}, 15000);
