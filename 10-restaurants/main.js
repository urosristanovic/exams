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
const listOfRestaurants = [
  dobrok,
  pivarijum,
  petrus,
  zak,
  showRoom,
  dvaStapica,
  dobriDim,
  juliet,
];

const choosePriceRange = selectedPriceRange => {
  let priceRanges = [
    {
      label: '$',
      note: 'Inexpensive',
      minAvgPricePerMeal: 0,
      maxAvgPricePerMeal: 500,
    },
    {
      label: '$$',
      note: 'Moderate',
      minAvgPricePerMeal: 501,
      maxAvgPricePerMeal: 1000,
    },
    {
      label: '$$$',
      note: 'Expensive',
      minAvgPricePerMeal: 1001,
      maxAvgPricePerMeal: 10000,
    },
  ];

  switch (selectedPriceRange) {
    case 'inexpensive':
      return priceRanges[0];
    case 'moderate':
      return priceRanges[1];
    case 'expensive':
      return priceRanges[2];
  }
};
const chooseCapacityRange = selectedCapacity => {
  let capacityRange = [
    { note: 'Small', label: 'S', minTables: 0, maxTables: 50 },
    { note: 'Medium', label: 'M', minTables: 51, maxTables: 150 },
    { note: 'Large', label: 'L', minTables: 151, maxTables: 1000 },
  ];

  switch (selectedCapacity) {
    case 'small':
      return capacityRange[0];
    case 'medium':
      return capacityRange[1];
    case 'large':
      return capacityRange[2];
  }
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
      res.capacity >= capacity.minTables && res.capacity < capacity.maxTables
  );
};
const getOpenRestaurantsNow = list => {
  const hours = new Date().getHours();
  return getOpenRestaurants(list, hours);
};
const getOpenRestaurants = (list, hours) => {
  return list.filter(res => res.opening <= hours && res.closing > hours);
};

function createFoods(foods) {
  let string = '';
  foods.forEach(food => {
    const h6 = document.createElement('h6');
    h6.innerText = food;
    string += h6.outerHTML;
  });
  return string;
}
function createRestaurantCard(res) {
  const foods = createFoods(res.category);
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

function createRest(listOfRestaurants) {
  list.innerHTML = ``;

  listOfRestaurants.forEach(res => {
    const rest = createRestaurantCard(res);
    list.appendChild(rest);
  });
  if (listOfRestaurants < 1) console.log(listOfRestaurants);
}

const list = document.getElementById('restaurants');
listOfRestaurants.forEach(res => {
  const rest = createRestaurantCard(res);
  list.appendChild(rest);
});

const btnsPriceRange = document.getElementById('btns-price');
btnsPriceRange.addEventListener('click', e => {
  const selectedPriceRange = e.target.value;
  const priceRange = choosePriceRange(selectedPriceRange);
  const restaurantsByPrice = getRestaurantsByPriceRange(
    listOfRestaurants,
    priceRange
  );
  createRest(restaurantsByPrice);
});

const btnsCapacity = document.getElementById('btns-capacity');
btnsCapacity.addEventListener('click', e => {
  const selectedCapacity = e.target.value;
  const capacity = chooseCapacityRange(selectedCapacity);
  const restaurantsByCapacity = getRestaurantByCapacityRange(
    listOfRestaurants,
    capacity
  );
  createRest(restaurantsByCapacity);
});

const btnOpenNow = document.getElementById('open-now');
btnOpenNow.addEventListener('click', e => {
  const openedRestaurants = getOpenRestaurantsNow(listOfRestaurants);
  createRest(openedRestaurants);
});

const selectHours = document.getElementById('select-hours');
selectHours.addEventListener('click', e => {
  const hours = e.target.value;
  if (hours != 'choose') {
    const openedRestaurants = getOpenRestaurants(listOfRestaurants, hours);
    createRest(openedRestaurants);
  }
});
