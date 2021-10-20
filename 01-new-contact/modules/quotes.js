export async function fetchQuotes() {
  const response = await fetch('https://type.fit/api/quotes');
  return response.json();
}

export function randomQuote(array) {
  return array[Math.floor(Math.random() * array.length)];
}
