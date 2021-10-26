export async function fetchRestaurants() {
  const response = await fetch('json/restaurants.json');
  return response.json();
}

export async function fetchPrices() {
  const response = await fetch('json/prices.json');
  return response.json();
}
export async function fetchCapacity() {
  const response = await fetch('json/capacity.json');
  return response.json();
}
