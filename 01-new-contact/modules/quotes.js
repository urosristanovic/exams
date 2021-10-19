export async function fetchQuotes() {
  const response = await fetch('json/quotes.json');
  const json = await response.json();
  return displayRandomQuote(json);
}

function displayRandomQuote(array) {
  const loader = document.getElementById('loader');
  const quotesWrapper = document.getElementById('quotes-wrapper');
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomElement = array[Math.floor(Math.random() * array.length)];
  loader.style.display = 'none';
  quotesWrapper.style.display = 'block';
  quote.innerText = randomElement.quote;
  author.innerText = randomElement.author;
}
