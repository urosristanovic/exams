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

function createFood(foods) {
  let string = '';
  foods.forEach(food => {
    const h6 = document.createElement('h6');
    h6.innerText = food;
    string += h6.outerHTML;
  });
  return string;
}

function createRestaurantCard(res) {
  const foods = createFood(res.category);
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

const btn = document.getElementById('inexpensive');

btn.addEventListener('click', () => {
  const list = document.getElementById('restaurants');
  listOfRestaurants.forEach(res => {
    const rest = createRestaurantCard(res);
    list.appendChild(rest);
  });
});
