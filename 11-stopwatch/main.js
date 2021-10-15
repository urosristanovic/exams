const timeText = document.getElementById('time');
const miliseconds = document.getElementById('miliseconds');

let time;

let hundreds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopwatch() {
  hundreds++;
  if (hundreds == 100) {
    hundreds = 0;
    seconds++;
  }
  if (seconds == 60) {
    hundreds = 0;
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    hundreds = 0;
    seconds = 0;
    minutes = 0;
    hours++;
  }

  timeText.innerText = `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}`;
  miliseconds.innerText = `${hundreds < 10 ? '0' + hundreds : hundreds}`;
}

const btns = document.getElementById('btns');
btns.addEventListener('click', e => {
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const option = e.target.value;

  switch (option) {
    case 'start':
      startBtn.style.display = 'none';
      stopBtn.style.display = 'block';
      time = setInterval(stopwatch, 10);
      break;
    case 'stop':
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
      clearInterval(time);
      break;
    case 'reset':
      reset(timeText, miliseconds);
      break;
  }
});

function reset(timeText, miliseconds) {
  timeText.innerText = '00:00:00';
  miliseconds.innerText = '00';
  hundreds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}
