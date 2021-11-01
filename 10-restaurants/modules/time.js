import { displayRestaurants } from './../main.js';
import { setActiveButton } from './common.js';

export const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  return getOpenRestaurants(list, hours);
};
export const getOpenRestaurants = (list, hours) => {
  return list.filter(
    restaurant => restaurant.opening <= hours && restaurant.closing > hours
  );
};

export function displayRestaurantsByTime(listOfRestaurants, hours) {
  let filter = '';
  let openedRestaurants = null;
  if (hours === 'now') {
    filter = `which are open now`;
    setActiveButton('open-now');
    openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  } else {
    filter = `open at ${hours % 12}${hours > 12 ? 'pm' : 'am'}`;
    openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
  }
  displayRestaurants(openedRestaurants, filter);
}
