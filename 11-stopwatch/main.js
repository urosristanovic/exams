const timeText = document.getElementById('time');
const miliseconds = document.getElementById('miliseconds');

let time;

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

function stopwatch() {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  ms++;
  if (ms == 10) {
    ms = 0;
    sec++;
  }
  if (sec == 60) {
    ms = 0;
    sec = 0;
    min++;
  }
  if (min == 60) {
    ms = 0;
    sec = 0;
    min = 0;
    hr++;
  }

  if (sec < 10 || sec == 0) {
    sec = '0' + sec;
  }
  if (min < 10 || min == 0) {
    min = '0' + min;
  }
  if (hr < 10 || hr == 0) {
    hr = '0' + hr;
  }

  timeText.innerText = `${hr}:${min}:${sec}`;
  miliseconds.innerText = `${ms}`;
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
      time = setInterval(stopwatch, 100);
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
  miliseconds.innerText = '0';
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;
}
