export async function fetchRestaurants() {
  const response = await fetch('json/restaurants.json');
  return response.json();
}

export function createCapacityRanges() {
  const capacityRange = [
    { note: 'S', label: 'small', minTables: 0, maxTables: 50 },
    { note: 'M', label: 'medium', minTables: 51, maxTables: 150 },
    { note: 'L', label: 'large', minTables: 151, maxTables: 1000 },
    // { note: 'XL', label: 'x-large', minTables: 1001, maxTables: 10000 },
  ];
  return capacityRange;
}

export function createPriceRanges() {
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
