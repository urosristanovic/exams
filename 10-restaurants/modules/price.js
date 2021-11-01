import { fetchPrices } from './data.js';
import { displayRestaurants } from './../main.js';
import { setActiveButton } from './common.js';

export const getRestaurantsByPriceRange = (list, price) => {
  return list.filter(
    res =>
      res.avgMealPrice >= price.minAvgPricePerMeal &&
      res.avgMealPrice < price.maxAvgPricePerMeal
  );
};

export const choosePriceRange = async selectedPriceRange => {
  const priceRanges = await fetchPrices();
  return priceRanges.find(element => element.label === selectedPriceRange);
};

export async function displayRestaurantsByPrice(
  listOfRestaurants,
  priceFromParams
) {
  const priceRange = await choosePriceRange(priceFromParams);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  const filter = `which are ${priceFromParams}`;
  displayRestaurants(restaurantsByPrice, filter);
  setActiveButton(priceFromParams);
}

export function displayRestaurantsByPriceAdvanced(
  listOfRestaurants,
  minPrice,
  maxPrice
) {
  document.getElementById('advanced-price').innerText = 'Back to basic filters';
  document.getElementById('price-form').style.display = 'flex';

  const priceRange = {
    minAvgPricePerMeal: minPrice,
    maxAvgPricePerMeal: maxPrice,
  };
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  const filter = ` with price between ${minPrice}$ and ${maxPrice}$`;
  displayRestaurants(restaurantsByPrice, filter);
}
