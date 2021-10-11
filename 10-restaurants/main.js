'use strict';

function createRestaurant(
  name,
  address,
  phoneNumber,
  image,
  avgMealPrice,
  capacity,
  opening,
  closing,
  category
) {
  return {
    name,
    address,
    phoneNumber,
    image,
    avgMealPrice,
    capacity,
    opening,
    closing,
    category,
  };
}

const dobrok = createRestaurant(
  'Dobrok',
  'Futoska 71',
  '0652819801',
  'images/dobrok.jpg',
  320,
  50,
  9,
  14,
  ['Serbian', 'Chinese', 'International']
);
const pivarijum = createRestaurant(
  'Pivarijum',
  'Brace Popovic 2',
  '0213014334',
  'images/pivarijum.jpg',
  510,
  25,
  12,
  22,
  ['Burgers']
);
const petrus = createRestaurant(
  'Petrus',
  'Modena 1',
  '066323424',
  'images/petrus.jpg',
  1150,
  200,
  7,
  23,
  ['Chinese', 'International', 'Italian', 'Mexican', 'Burgers']
);
const zak = createRestaurant(
  'Kalem by Zak',
  'Narodnih heroja 3',
  '0668888021',
  'images/kalembyzak.jpg',
  1270,
  170,
  7,
  23,
  ['Serbian', 'Italian', 'Burgers', 'Mexican']
);
const showRoom = createRestaurant(
  'Show Room',
  'Branka Bajica',
  '0213105105',
  'images/showroom.jpg',
  890,
  100,
  8,
  23,
  ['Serbian', 'Italian', 'Mexican']
);
const dvaStapica = createRestaurant(
  'Dva Stapica',
  'Janka Cmelika',
  '021459524',
  'images/dvastapica.jpg',
  630,
  40,
  8,
  17,
  ['Chinese', 'Taiwanese']
);
const dobriDim = createRestaurant(
  'Dobri dim',
  'Laze Teleckog',
  '0693388088',
  'images/dobridim.jpg',
  480,
  35,
  11,
  23,
  ['Serbian', 'Mexican', 'Burgers']
);
const juliet = createRestaurant(
  'Juliet bar',
  'Veselina Maslese 32a',
  '0213014334',
  'images/juliet.jpg',
  850,
  40,
  8,
  22,
  ['Serbian', 'Italian', 'International', 'Mexican']
);
const burjAlArab = createRestaurant(
  'Burj Al Arab',
  'شارع جميرا،',
  '97143017777',
  'images/burjalarab.jpg',
  21342,
  1201,
  17,
  23,
  ['Serbian', 'Chinese', 'Italian', 'Burgers', 'Taiwanese']
);
const nusret = createRestaurant(
  'Nusr-Et Steakhouse',
  'Jumeriah Beach Rd 2',
  '97144074100',
  'images/nusret.jpg',
  1499,
  104,
  12,
  23,
  ['Burgers', 'International', 'Mexican']
);

const listOfRestaurants = [
  dobrok,
  pivarijum,
  dvaStapica,
  petrus,
  zak,
  showRoom,
  dobriDim,
  juliet,
  burjAlArab,
  nusret,
];

function createPriceRanges() {
  const priceRanges = [
    {
      note: '$',
      label: 'inexpensive',
      minAvgPricePerMeal: 0,
      maxAvgPricePerMeal: 500,
    },
    {
      note: '$$',
      label: 'moderate',
      minAvgPricePerMeal: 501,
      maxAvgPricePerMeal: 1000,
    },
    {
      note: '$$$',
      label: 'expensive',
      minAvgPricePerMeal: 1001,
      maxAvgPricePerMeal: 10000,
    },
  ];
  return priceRanges;
}
function createCapacityRanges() {
  const capacityRange = [
    { note: 'S', label: 'small', minTables: 0, maxTables: 50 },
    { note: 'M', label: 'medium', minTables: 51, maxTables: 150 },
    { note: 'L', label: 'large', minTables: 151, maxTables: 1000 },
    // { note: 'XL', label: 'x-large', minTables: 1001, maxTables: 10000 },
  ];
  return capacityRange;
}
const choosePriceRange = selectedPriceRange => {
  const priceRanges = createPriceRanges();
  return priceRanges.filter(element => element.label === selectedPriceRange)[0];
};
const chooseCapacityRange = selectedCapacity => {
  const capacityRange = createCapacityRanges();

  return capacityRange.filter(element => element.label === selectedCapacity)[0];
};
const getRestaurantsByPriceRange = (list, price) => {
  return list.filter(
    res =>
      res.avgMealPrice >= price.minAvgPricePerMeal &&
      res.avgMealPrice < price.maxAvgPricePerMeal
  );
};
const getRestaurantByCapacityRange = (list, capacity) => {
  return list.filter(
    restaurant =>
      restaurant.capacity >= capacity.minTables &&
      restaurant.capacity <= capacity.maxTables
  );
};
const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  return getOpenRestaurants(list, hours);
};
const getOpenRestaurants = (list, hours) => {
  return list.filter(
    restaurant => restaurant.opening <= hours && restaurant.closing > hours
  );
};
const getRestaurantsByCategory = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.every(category => res.category.includes(category))
  );
};
const getRestaurantsByCategorySeparate = (list, listOfCategories) => {
  return list.filter(res =>
    listOfCategories.some(category => res.category.includes(category))
  );
};

function createFoodTypes(foods) {
  let string = '';
  foods.forEach(food => {
    const li = document.createElement('li');
    li.innerText = food;
    string += li.outerHTML;
  });
  return string;
}
function createRestaurantCard(res) {
  const foods = createFoodTypes(res.category);
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div class="logo">
  <img src="${res.image}" alt="logo" />
  </div>
  <div class="details">
  <h2 class="restaurant-name">${res.name}</h2>
  <p class="address">${res.address}</p>
  <a href="tel:${res.phoneNumber}">${res.phoneNumber}</a>
    <div class="food-card" id="food-card">
    ${foods}
    </div>
    <div class="sizes">
      <div class="p-range">
        <h5>Average <br> meal price:</h5>
        <p class="avg-price">${res.avgMealPrice}$</p>
      </div>
      <div class="c-range">
        <h5>Capacity:</h5>
        <p class="card-capacity">${res.capacity}</p>
      </div>
    </div>
    <div class="w-hours">
      <p class="openning">opening: ${res.opening}h</p>
      <p class="closing">closing: ${res.closing}h</p>
    </div>
  </div>`;

  return div;
}

function displayRestaurants(listOfRestaurants) {
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
  number.innerHTML = `Number of restaurants is: ${listOfRestaurants.length}.`;
}

function createPriceRangeButton(price) {
  const div = document.createElement('div');
  div.innerHTML = `
  <button class="${price.label}" value="${price.label}">
    <span class="tooltiptext green">
      ${price.minAvgPricePerMeal}-${price.maxAvgPricePerMeal}$
    </span>
    ${price.note}
  </button>`;
  return div;
}
function createCapacityRangeButton(capacity) {
  const div = document.createElement('div');
  div.innerHTML = `
  <button class="${capacity.label}" value="${capacity.label}">
    <span class="tooltiptext blue">
      ${capacity.minTables}-${capacity.maxTables}
    </span>
    ${capacity.note}
  </button>
  `;
  return div;
}

/* ################################################################### */

displayRestaurants(listOfRestaurants);

const btnsPriceRange = document.getElementById('btns-price');
btnsPriceRange.addEventListener('click', e => {
  const selectedPriceRange = e.target.value;
  const priceRange = choosePriceRange(selectedPriceRange);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  displayRestaurants(restaurantsByPrice);
});
const priceRanges = createPriceRanges();
priceRanges.forEach(price => {
  const priceRange = createPriceRangeButton(price);
  btnsPriceRange.appendChild(priceRange);
});

const btnsCapacity = document.getElementById('btns-capacity');
btnsCapacity.addEventListener('click', e => {
  const selectedCapacity = e.target.value;
  const capacity = chooseCapacityRange(selectedCapacity);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  displayRestaurants(restaurantsByCapacity);
});
const capacityRanges = createCapacityRanges();
capacityRanges.forEach(capacity => {
  const capacityRange = createCapacityRangeButton(capacity);
  btnsCapacity.appendChild(capacityRange);
});

const btnOpenNow = document.getElementById('open-now');
btnOpenNow.addEventListener('click', () => {
  const openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  displayRestaurants(openedRestaurants);
});

// on select
const selectHours = document.getElementById('select-hours');
selectHours.addEventListener('click', e => {
  const hours = e.target.value;
  if (hours != 'choose') {
    const openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
    displayRestaurants(openedRestaurants);
  }
});

const formFood = document.getElementById('form-food');
formFood.addEventListener('submit', e => {
  e.preventDefault();
  const separate = document.querySelector(
    'input[name="separate"]:checked'
  ).value;
  const foods = [
    'serbian',
    'chinese',
    'international',
    'italian',
    'mexican',
    'burgers',
    'taiwanese',
  ];
  const categories = [];
  foods.filter(food => {
    const checkFood = document.getElementById(food).checked;
    if (checkFood) {
      categories.push(food.charAt(0).toUpperCase() + food.slice(1));
    }
  });
  const restaurantsByCategory =
    separate === 'any'
      ? getRestaurantsByCategorySeparate(listOfRestaurants, categories)
      : getRestaurantsByCategory(listOfRestaurants, categories);
  displayRestaurants(restaurantsByCategory);
});

// svaki poseban div
const btnAdvanced = document.getElementById('btn-advanced');
btnAdvanced.addEventListener('click', () => {
  const priceForm = document.getElementById('price-form');
  const capacityForm = document.getElementById('capacity-form');
  if (priceForm.style.display === 'none') {
    priceForm.style.display = 'flex';
    capacityForm.style.display = 'flex';
    btnAdvanced.innerText = 'Back to basic filters';
  } else {
    priceForm.style.display = 'none';
    capacityForm.style.display = 'none';
    btnAdvanced.innerText = 'Open advanced filters';
  }
});

const formPrice = document.getElementById('price-form');
formPrice.addEventListener('submit', e => {
  e.preventDefault();
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
  displayRestaurants(restaurantsByPrice);
  minPrice.value = '';
  maxPrice.value = '';
});

const formCapacity = document.getElementById('capacity-form');
formCapacity.addEventListener('submit', e => {
  e.preventDefault();
  const minCapacity = document.getElementById('min-capacity');
  const maxCapacity = document.getElementById('max-capacity');
  const capacityRange = {
    minTables: minCapacity.values,
    maxTables: maxCapacity.values,
  };
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacityRange
  );
  createRestaurants(restaurantsByCapacity);
  minCapacity.value = '';
  maxCapacity.value = '';
});
