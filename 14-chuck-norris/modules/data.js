export async function fetchJoke() {
  const randomJoke = await fetch('http://api.icndb.com/jokes/random');
  return randomJoke.json();
}
