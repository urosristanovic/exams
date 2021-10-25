let interval = null;

export function pointsHandler(player) {
  if (!interval) {
    interval = setInterval(() => {
      displayPoints(player);
    }, 100);
  } else {
    clearInterval(interval);
    interval = null;
  }
}
function getRandomPoints(max) {
  return Math.floor(Math.random() * max) + 1;
}
function displayPoints(player) {
  const points = getRandomPoints(80);
  player.innerText = points;
}
