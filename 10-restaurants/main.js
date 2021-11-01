import {
  displayRestaurantsByCapacity,
  displayRestaurantsByCapacityAdvanced,
} from './modules/capacity.js';
import { displayRestaurantsByCategories } from './modules/category.js';
import { redirect, setQuery } from './modules/common.js';
import {
  createCapacityButtons,
  createPriceButtons,
  createRestaurantCard,
} from './modules/components.js';
import { fetchRestaurants } from './modules/data.js';
import {
  displayRestaurantsByPrice,
  displayRestaurantsByPriceAdvanced,
} from './modules/price.js';
import { displayRestaurantsByTime } from './modules/time.js';

export function displayRestaurants(listOfRestaurants, filter = '') {
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

async function handleRestaurantsByQuery() {
  const params = new URLSearchParams(location.search);

  const priceParams = params.get('price');
  const priceFromParams = params.get('price-from');
  const priceToParams = params.get('price-to');
  const capacityParams = params.get('capacity');
  const capacityFromParams = params.get('capacity-from');
  const capacityToParams = params.get('capacity-to');
  const hoursParams = params.get('open-at');
  const categoriesParams = params.get('categories');
  const separateParams = params.get('separate');

  const listOfRestaurants = await fetchRestaurants();

  if (priceParams) {
    displayRestaurantsByPrice(listOfRestaurants, priceParams);
  } else if (capacityParams) {
    displayRestaurantsByCapacity(listOfRestaurants, capacityParams);
  } else if (hoursParams) {
    displayRestaurantsByTime(listOfRestaurants, hoursParams);
  } else if (priceFromParams && priceToParams) {
    displayRestaurantsByPriceAdvanced(
      listOfRestaurants,
      priceFromParams,
      priceToParams
    );
  } else if (capacityFromParams && capacityToParams) {
    displayRestaurantsByCapacityAdvanced(
      listOfRestaurants,
      capacityFromParams,
      capacityToParams
    );
  } else if (categoriesParams) {
    displayRestaurantsByCategories(
      listOfRestaurants,
      categoriesParams,
      separateParams
    );
  } else {
    displayRestaurants(listOfRestaurants);
  }
}

/* ################################################################### */
handleRestaurantsByQuery();

const btnsPriceRange = document.getElementById('btns-price');
btnsPriceRange.addEventListener('click', async e => {
  const selectedPriceRange = e.target.value;
  const query = setQuery('price', selectedPriceRange);
  redirect(`restaurants.html?${query}`);
});
createPriceButtons(btnsPriceRange);

const btnsCapacity = document.getElementById('btns-capacity');
btnsCapacity.addEventListener('click', async e => {
  const selectedCapacity = e.target.value;
  const query = setQuery('capacity', selectedCapacity);
  redirect(`restaurants.html?${query}`);
});
createCapacityButtons(btnsCapacity);

const btnOpenNow = document.getElementById('open-now');
btnOpenNow.addEventListener('click', async () => {
  const query = setQuery('open-at', 'now');
  redirect(`restaurants.html?${query}`);
});

const selectHours = document.getElementById('select-hours');
selectHours.addEventListener('change', async () => {
  const hours = selectHours.value;
  const query = setQuery('open-at', hours);
  redirect(`restaurants.html?${query}`);
});

const formFood = document.getElementById('form-food');
formFood.addEventListener('submit', e => {
  e.preventDefault();
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

  const queryCategories = setQuery('categories', categories);
  const querySeparate = setQuery('separate', separate);
  redirect(`restaurants.html?${queryCategories}&${querySeparate}`);
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
});

const formPrice = document.getElementById('price-form');
formPrice.addEventListener('submit', e => {
  e.preventDefault();
  const minPrice = document.getElementById('min-price');
  const maxPrice = document.getElementById('max-price');

  const queryMin = setQuery('price-from', minPrice.value);
  const queryMax = setQuery('price-to', maxPrice.value);
  redirect(`restaurants.html?${queryMin}&${queryMax}`);
});

const formCapacity = document.getElementById('capacity-form');
formCapacity.addEventListener('submit', e => {
  e.preventDefault();
  const minCapacity = document.getElementById('min-capacity');
  const maxCapacity = document.getElementById('max-capacity');

  const queryMin = setQuery('capacity-from', minCapacity.value);
  const queryMax = setQuery('capacity-to', maxCapacity.value);
  redirect(`restaurants.html?${queryMin}&${queryMax}`);
});
