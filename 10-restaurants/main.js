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
function createPriceRanges() {
  const priceRanges = [
    {
      label: '$',
      note: 'inexpensive',
      minAvgPricePerMeal: 0,
      maxAvgPricePerMeal: 500,
    },
    {
      label: '$$',
      note: 'moderate',
      minAvgPricePerMeal: 501,
      maxAvgPricePerMeal: 1000,
    },
    {
      label: '$$$',
      note: 'expensive',
      minAvgPricePerMeal: 1001,
      maxAvgPricePerMeal: 10000,
    },
  ];
  return priceRanges;
}
function createCapacityRanges() {
  const capacityRange = [
    { note: 'small', label: 'S', minTables: 0, maxTables: 50 },
    { note: 'medium', label: 'M', minTables: 51, maxTables: 150 },
    { note: 'large', label: 'L', minTables: 151, maxTables: 1000 },
    // { note: 'x-large', label: 'XL', minTables: 1001, maxTables: 10000 },
  ];
  return capacityRange;
}
const dobrok = createRestaurant(
  'Dobrok',
  'Futoska 71',
  '0652819801',
  'images/dobrok.svg',
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
  'images/showroom.png',
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
  ['Serbian', 'Chinese', 'Italian', 'burgers', 'Taiwanese']
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
];

const choosePriceRange = selectedPriceRange => {
  const priceRanges = createPriceRanges();

  return priceRanges.filter(element => element.note === selectedPriceRange)[0];
};
const chooseCapacityRange = selectedCapacity => {
  const capacityRange = createCapacityRanges();

  return capacityRange.filter(element => element.note === selectedCapacity)[0];
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
    res =>
      res.capacity >= capacity.minTables && res.capacity <= capacity.maxTables
  );
};
const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  return getOpenRestaurants(list, hours);
};
const getOpenRestaurants = (list, hours) => {
  return list.filter(res => res.opening <= hours && res.closing > hours);
};
const getRestaurantsByCategory = (list, category) => {
  return list.filter(res => category.every(c => res.category.includes(c)));
};
const getRestaurantsByCategorySeparate = (list, category) => {
  return list.filter(res => category.some(c => res.category.includes(c)));
};

function createCuisines(foods) {
  let string = '';
  foods.forEach(food => {
    const h6 = document.createElement('h6');
    h6.innerText = food;
    string += h6.outerHTML;
  });
  return string;
}
function createRestaurantCard(res) {
  const foods = createCuisines(res.category);
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

function createRestaurants(listOfRestaurants) {
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
  <button class="${price.note}" value="${price.note}">
    <span class="tooltiptext green">
      ${price.minAvgPricePerMeal}-${price.maxAvgPricePerMeal}$
    </span>
    ${price.label}
  </button>`;
  return div;
}
function createCapacityRangeButton(capacity) {
  const div = document.createElement('div');
  div.innerHTML = `
  <button class="${capacity.note}" value="${capacity.note}">
    <span class="tooltiptext blue">
      ${capacity.minTables}-${capacity.maxTables}
    </span>
    ${capacity.label}
  </button>
  `;
  return div;
}

/* ########################################################################################################## */

createRestaurants(listOfRestaurants);

const priceRangesElement = document.getElementById('btns-price');
const priceRanges = createPriceRanges();
priceRanges.forEach(price => {
  const priceRange = createPriceRangeButton(price);
  priceRangesElement.appendChild(priceRange);
});

const capacityRangesElement = document.getElementById('btns-capacity');
const capacityRanges = createCapacityRanges();
capacityRanges.forEach(capacity => {
  const capacityRange = createCapacityRangeButton(capacity);
  capacityRangesElement.appendChild(capacityRange);
});

const btnsPriceRange = document.getElementById('btns-price');
btnsPriceRange.addEventListener('click', e => {
  const selectedPriceRange = e.target.value;
  const priceRange = choosePriceRange(selectedPriceRange);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  createRestaurants(restaurantsByPrice);
});

const btnsCapacity = document.getElementById('btns-capacity');
btnsCapacity.addEventListener('click', e => {
  const selectedCapacity = e.target.value;
  const capacity = chooseCapacityRange(selectedCapacity);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  createRestaurants(restaurantsByCapacity);
});

const btnOpenNow = document.getElementById('open-now');
btnOpenNow.addEventListener('click', () => {
  const openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  createRestaurants(openedRestaurants);
});

const selectHours = document.getElementById('select-hours');
selectHours.addEventListener('click', e => {
  const hours = e.target.value;
  if (hours != 'choose') {
    const openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
    createRestaurants(openedRestaurants);
  }
});

const formFood = document.getElementById('form-food');
formFood.addEventListener('submit', e => {
  e.preventDefault();
  const separate = document.getElementById('separate').checked;
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
  foods.forEach(food => {
    const checkFood = document.getElementById(food).checked;
    if (checkFood) {
      categories.push(food.charAt(0).toUpperCase() + food.slice(1));
    }
  });

  const restaurantsByCategory = separate
    ? getRestaurantsByCategorySeparate(listOfRestaurants, categories)
    : getRestaurantsByCategory(listOfRestaurants, categories);
  createRestaurants(restaurantsByCategory);
});

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
  const minPrice = document.getElementById('min-price').value;
  const maxPrice = document.getElementById('max-price').value;
  const priceRange = {
    minAvgPricePerMeal: minPrice,
    maxAvgPricePerMeal: maxPrice,
  };
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  createRestaurants(restaurantsByPrice);
});

const formCapacity = document.getElementById('capacity-form');
formCapacity.addEventListener('submit', e => {
  e.preventDefault();
  const minCapacity = document.getElementById('min-capacity').value;
  const maxCapacity = document.getElementById('max-capacity').value;
  const capacityRange = {
    minTables: minCapacity,
    maxTables: maxCapacity,
  };
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacityRange
  );
  createRestaurants(restaurantsByCapacity);
});
