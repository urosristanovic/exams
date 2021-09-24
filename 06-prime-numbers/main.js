function primeNumber(number) {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(number); i++) {
      while (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function createListItem(value) {
  const li = document.createElement('li');
  const em = document.createElement('em');
  em.textContent = value;
  li.appendChild(em);
  return li;
}

const show = document.getElementById('btn');

show.addEventListener('click', () => {
  const first = document.getElementById('first_number');
  const second = document.getElementById('second_number');
  for (i = Number(first.value); i <= Number(second.value); i++) {
    let isPrime = primeNumber(i);
    if (isPrime) {
      const list = document.querySelector('ol');
      const li = createListItem(i);
      list.appendChild(li);
    }
  }
});
