import {
  fetchCapacity,
  fetchPrices,
  fetchRestaurants,
} from './modules/data.js';
import {
  createCapacityButtons,
  createPriceButtons,
  createRestaurantCard,
} from './modules/components.js';
import {
  getOpenRestaurants,
  getOpenRestaurantsNow,
  getRestaurantByCapacityRange,
  getRestaurantsByCategory,
  getRestaurantsByCategorySeparate,
  getRestaurantsByPriceRange,
} from './modules/filters.js';

const choosePriceRange = async selectedPriceRange => {
  const priceRanges = await fetchPrices();
  return priceRanges.find(element => element.label === selectedPriceRange);
};
const chooseCapacityRange = async selectedCapacity => {
  const capacityRange = await fetchCapacity();
  return capacityRange.find(element => element.label === selectedCapacity);
};

function displayRestaurants(listOfRestaurants, filter = '') {
  const number = document.getElementById('number-of-restaurants');
  const list = document.getElementById('restaurants');
  list.innerHTML = ``;

  listOfRestaurants.forEach(res => {
    const rest = createRestaurantCard(res);
    list.appendChild(rest);
  });
  document.getElementById('no-restaurants').style.display = 'none';
  number.style.display = 'block';
  if (listOfRestaurants < 1) {
    document.getElementById('no-restaurants').style.display = 'block';
    number.style.display = 'none';
  }
  number.innerHTML = `Number of restaurants <em>${filter}</em> is: ${listOfRestaurants.length}.`;
}

async function displayAllRestaurants() {
  const listOfRestaurants = await fetchRestaurants();
  displayRestaurants(listOfRestaurants);
}

function resetActiveButtons() {
  const listOfButtons = document.querySelectorAll('button');
  listOfButtons.forEach(btn => {
    if (btn.classList.contains('active')) btn.classList.remove('active');
  });
}

/* ################################################################### */

displayAllRestaurants();

const btnsPriceRange = document.getElementById('btns-price');
btnsPriceRange.addEventListener('click', async e => {
  const selectedPriceRange = e.target.value;
  const listOfRestaurants = await fetchRestaurants();
  const priceRange = await choosePriceRange(selectedPriceRange);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  const filter = `which are ${selectedPriceRange}`;
  displayRestaurants(restaurantsByPrice, filter);
  resetActiveButtons();
  e.target.classList.add('active');
});
createPriceButtons(btnsPriceRange);

const btnsCapacity = document.getElementById('btns-capacity');
btnsCapacity.addEventListener('click', async e => {
  const listOfRestaurants = await fetchRestaurants();
  const selectedCapacity = e.target.value;
  const capacity = await chooseCapacityRange(selectedCapacity);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  resetActiveButtons();
  e.target.classList.add('active');
  const filter = `which are ${selectedCapacity}`;
  displayRestaurants(restaurantsByCapacity, filter);
});
createCapacityButtons(btnsCapacity);

const btnOpenNow = document.getElementById('open-now');
btnOpenNow.addEventListener('click', async e => {
  const listOfRestaurants = await fetchRestaurants();
  const openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  const filter = `which are open now`;
  displayRestaurants(openedRestaurants, filter);
  resetActiveButtons();
  e.target.classList.add('active');
});

const selectHours = document.getElementById('select-hours');
selectHours.addEventListener('change', async () => {
  const listOfRestaurants = await fetchRestaurants();
  const hours = selectHours.value;
  if (hours != 'choose') {
    const openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
    const filter = `open at ${hours % 12}${hours > 12 ? 'pm' : 'am'}`;
    displayRestaurants(openedRestaurants, filter);
    selectHours.value = 'choose';
  }
  resetActiveButtons();
});

const formFood = document.getElementById('form-food');
formFood.addEventListener('submit', async e => {
  e.preventDefault();
  const listOfRestaurants = await fetchRestaurants();
  let restaurantsByCategory = [];
  const categories = [];
  const foods = [
    'serbian',
    'chinese',
    'international',
    'italian',
    'mexican',
    'burgers',
    'taiwanese',
  ];
  const separate = document.querySelector(
    'input[name="separate"]:checked'
  ).value;

  foods.filter(food => {
    const checkFood = document.getElementById(food).checked;
    if (checkFood) {
      categories.push(food.charAt(0).toUpperCase() + food.slice(1));
    }
  });

  switch (separate) {
    case 'any':
      restaurantsByCategory = getRestaurantsByCategorySeparate(
        listOfRestaurants,
        categories
      );
      break;
    case 'all':
      restaurantsByCategory = getRestaurantsByCategory(
        listOfRestaurants,
        categories
      );
      break;
  }

  displayRestaurants(restaurantsByCategory);
  resetActiveButtons();
});

const advancedCapacity = document.getElementById('advanced-capacity');
advancedCapacity.addEventListener('click', () => {
  const capacityForm = document.getElementById('capacity-form');
  if (capacityForm.style.display === 'none') {
    capacityForm.style.display = 'flex';
    advancedCapacity.innerText = 'Back to basic filters';
  } else {
    capacityForm.style.display = 'none';
    advancedCapacity.innerText = 'Advanced filters';
  }
  resetActiveButtons();
});

const advancedPrice = document.getElementById('advanced-price');
advancedPrice.addEventListener('click', () => {
  const priceForm = document.getElementById('price-form');
  if (priceForm.style.display === 'none') {
    priceForm.style.display = 'flex';
    advancedPrice.innerText = 'Back to basic filters';
  } else {
    priceForm.style.display = 'none';
    advancedPrice.innerText = 'Advanced filters';
  }
  resetActiveButtons();
});

const formPrice = document.getElementById('price-form');
formPrice.addEventListener('submit', async e => {
  e.preventDefault();
  const listOfRestaurants = await fetchRestaurants();
  const minPrice = document.getElementById('min-price');
  const maxPrice = document.getElementById('max-price');
  const priceRange = {
    minAvgPricePerMeal: minPrice.value,
    maxAvgPricePerMeal: maxPrice.value,
  };
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  const filter = ` with price between ${minPrice.value}$ and ${maxPrice.value}$`;
  minPrice.value = '';
  maxPrice.value = '';
  displayRestaurants(restaurantsByPrice, filter);
  resetActiveButtons();
});

const formCapacity = document.getElementById('capacity-form');
formCapacity.addEventListener('submit', async e => {
  e.preventDefault();
  const listOfRestaurants = await fetchRestaurants();
  const minCapacity = document.getElementById('min-capacity');
  const maxCapacity = document.getElementById('max-capacity');
  const capacityRange = {
    minTables: minCapacity.value,
    maxTables: maxCapacity.value,
  };
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacityRange
  );
  const filter = `with number of tables between ${minCapacity.value} and ${maxCapacity.value}`;
  minCapacity.value = '';
  maxCapacity.value = '';
  displayRestaurants(restaurantsByCapacity, filter);
  resetActiveButtons();
});
