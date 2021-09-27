const input = document.querySelector('table');

input.addEventListener('click', function (e) {
  if (e.target.nodeName == 'td'.toUpperCase()) {
    const value = Number(e.target.innerText);
    if (!Number.isInteger(value)) {
      console.log(e.target.innerText);
      calculate();
    } else {
      document.getElementById('input').innerText += value;
    }

    console.log(Number(document.getElementById('input').innerText));
  }
});
