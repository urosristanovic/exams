import { fetchCapacity, fetchPrices } from './data.js';

export const getRestaurantsByPriceRange = (list, price) => {
  return list.filter(
    res =>
      res.avgMealPrice >= price.minAvgPricePerMeal &&
      res.avgMealPrice < price.maxAvgPricePerMeal
  );
};
export const getRestaurantByCapacityRange = (list, capacity) => {
  return list.filter(
    restaurant =>
      restaurant.capacity >= capacity.minTables &&
      restaurant.capacity <= capacity.maxTables
  );
};
export const choosePriceRange = async selectedPriceRange => {
  const priceRanges = await fetchPrices();
  return priceRanges.find(element => element.label === selectedPriceRange);
};
export const chooseCapacityRange = async selectedCapacity => {
  const capacityRange = await fetchCapacity();
  return capacityRange.find(element => element.label === selectedCapacity);
};

export const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  return getOpenRestaurants(list, hours);
};
export const getOpenRestaurants = (list, hours) => {
  return list.filter(
    restaurant => restaurant.opening <= hours && restaurant.closing > hours
  );
};
export const getRestaurantsByCategory = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.every(category => res.category.includes(category))
  );
};
export const getRestaurantsByCategorySeparate = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.some(category => res.category.includes(category))
  );
};
