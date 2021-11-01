import { fetchCapacity } from './data.js';
import { displayRestaurants } from '../main.js';
import { setActiveButton } from './common.js';

export const getRestaurantByCapacityRange = (list, capacity) => {
  return list.filter(
    restaurant =>
      restaurant.capacity >= capacity.minTables &&
      restaurant.capacity <= capacity.maxTables
  );
};
export const chooseCapacityRange = async selectedCapacity => {
  const capacityRange = await fetchCapacity();
  return capacityRange.find(element => element.label === selectedCapacity);
};

export async function displayRestaurantsByCapacity(
  listOfRestaurants,
  capacityParams
) {
  const capacity = await chooseCapacityRange(capacityParams);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  const filter = `which are ${capacityParams}`;
  displayRestaurants(restaurantsByCapacity, filter);
  setActiveButton(capacityParams);
}

export function displayRestaurantsByCapacityAdvanced(
  listOfRestaurants,
  minCapacity,
  maxCapacity
) {
  document.getElementById('advanced-capacity').innerText =
    'Back to basic filters';
  document.getElementById('capacity-form').style.display = 'flex';

  const capacityRange = {
    minTables: minCapacity,
    maxTables: maxCapacity,
  };
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacityRange
  );
  const filter = `with number of tables between ${minCapacity} and ${maxCapacity}`;
  displayRestaurants(restaurantsByCapacity, filter);
}
