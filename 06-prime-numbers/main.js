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
function createListItem(prime) {
  const li = document.createElement('li');
  li.innerHTML = `<em>${prime}</em>`;
  return li;
}
function getPrimes(first, second) {
  const arrayOfPrimes = [];
  let isPrime;

  for (i = first; i <= second; i++) {
    isPrime = primeNumber(i);
    if (isPrime) {
      arrayOfPrimes.push(i);
    }
  }
  return arrayOfPrimes;
}
function showPrimes(primes) {
  const list = document.querySelector('ol');
  primes.forEach(element => {
    const li = createListItem(element);
    list.appendChild(li);
  });
}

const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const first = Number(document.getElementById('first_number').value);
  const second = Number(document.getElementById('second_number').value);

  const primes = getPrimes(first, second);

  showPrimes(primes);
});
form.addEventListener('change', () => {
  const list = document.querySelector('ol');
  list.innerHTML = ``;
});
