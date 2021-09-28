function rational(num, den) {
  return { numerator: num, denominator: den };
}
function add(firstNumber, secondNumber) {
  const result = rational(0, 0);
  result.numerator =
    firstNumber.numerator * secondNumber.denominator +
    secondNumber.numerator * firstNumber.denominator;
  result.denominator = firstNumber.denominator * secondNumber.denominator;

  return shortenFraction(result);
}
function subtract(firstNumber, secondNumber) {
  const result = rational(0, 0);
  result.numerator =
    firstNumber.numerator * secondNumber.denominator -
    secondNumber.numerator * firstNumber.denominator;
  result.denominator = firstNumber.denominator * secondNumber.denominator;

  return shortenFraction(result);
}
function multiply(firstNumber, secondNumber) {
  const result = rational(0, 0);
  result.numerator = firstNumber.numerator * secondNumber.numerator;
  result.denominator = firstNumber.denominator * secondNumber.denominator;

  return shortenFraction(result);
}
function divide(firstNumber, secondNumber) {
  const result = rational(0, 0);
  result.numerator = firstNumber.numerator * secondNumber.denominator;
  result.denominator = firstNumber.denominator * secondNumber.numerator;

  return shortenFraction(result);
}

function getLowerNumber(fn, sn) {
  if (fn >= sn) {
    return sn;
  } else {
    return fn;
  }
}
function calculateGcd(firstNumber, secondNumber) {
  let lowerNumber = 1;
  let gcd = 1;

  firstNumber = Math.abs(firstNumber);
  secondNumber = Math.abs(secondNumber);

  if (firstNumber === 0 && secondNumber === 0) {
    return 0;
  } else if (firstNumber === 0) {
    return secondNumber;
  } else if (secondNumber === 0) {
    return firstNumber;
  } else {
    lowerNumber = getLowerNumber(firstNumber, secondNumber);

    for (let i = 2; i <= lowerNumber; i++) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }
}
function shortenFraction(result) {
  const gcd = calculateGcd(result.numerator, result.denominator);

  result.numerator = result.numerator / gcd;
  result.denominator = result.denominator / gcd;

  return result;
}

function getNumbers() {
  const numbers = {
    firstNumber: rational(),
    secondNumber: rational(),
  };
  const firstDen = document.getElementById('first-denominator').value;
  const secondDen = document.getElementById('second-denominator').value;
  const message = document.getElementById('message');
  console.log(firstDen == 0);
  console.log(secondDen);
  if (firstDen == 0 || secondDen == 0) {
    console.log('why not');
    document.getElementById('message').style.display = 'block';
  } else {
    document.getElementById('message').style.display = 'none';
    numbers.firstNumber.numerator =
      document.getElementById('first-numerator').value;
    numbers.firstNumber.denominator =
      document.getElementById('first-denominator').value;
    numbers.secondNumber.numerator =
      document.getElementById('second-numerator').value;
    numbers.secondNumber.denominator =
      document.getElementById('second-denominator').value;
  }

  return numbers;
}
function showResult(result) {
  if (result.numerator == 0) {
    document.getElementById('result-numerator').value = 0;
    document.getElementById('result-denominator').value = 0;
  } else {
    document.getElementById('result-numerator').value = result.numerator;
    document.getElementById('result-denominator').value = result.denominator;
  }
}

const form = document.getElementById('form-numbers');

form.addEventListener('submit', e => {
  e.preventDefault();
  const options = document.getElementById('options').value;
  const numbers = getNumbers();
  calculate(options, numbers);
});

function calculate(options, numbers) {
  let result;

  switch (options) {
    case '+':
      result = add(numbers.firstNumber, numbers.secondNumber);
      break;
    case '-':
      result = subtract(numbers.firstNumber, numbers.secondNumber);
      break;
    case '*':
      result = multiply(numbers.firstNumber, numbers.secondNumber);
      break;
    case '/':
      result = divide(numbers.firstNumber, numbers.secondNumber);
      break;
  }
  result = showResult(result);
}
